// Spotify API 서비스
export interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
  preview_url?: string;
}

export interface SpotifyResponse {
  tracks: {
    items: SpotifyTrack[];
  };
}

// 감정별 Spotify 검색 키워드
const emotionToSpotifyQuery: { [key: string]: string } = {
  "😀": "happy upbeat music",
  "😢": "sad emotional music", 
  "😡": "angry rock music",
  "😍": "romantic love songs",
  "😌": "calm peaceful music",
  "😴": "relaxing sleep music",
  "행복함": "happy upbeat music",
  "지침": "tired relaxing music",
  "스트레스": "stress relief calming music",
  "설렘": "romantic love songs",
  "우울함": "sad emotional music",
  "평온함": "calm peaceful music",
};

// Spotify 액세스 토큰 가져오기
export const getSpotifyToken = async (): Promise<string> => {
  const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Spotify API 키가 설정되지 않았습니다.');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });

  if (!response.ok) {
    throw new Error('Spotify 토큰 발급 실패');
  }

  const data = await response.json();
  return data.access_token;
};

// Spotify에서 음악 검색
export const searchSpotifyTracks = async (emotion: string, limit: number = 9): Promise<SpotifyTrack[]> => {
  try {
    // 감정에 맞는 검색 쿼리 가져오기
    const query = emotionToSpotifyQuery[emotion] || "mood music";
    
    // Spotify 액세스 토큰 가져오기
    const token = await getSpotifyToken();
    
    // Spotify 검색 API 호출
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=${limit}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Spotify API 호출 실패');
    }

    const data: SpotifyResponse = await response.json();
    return data.tracks.items;
  } catch (error) {
    console.error('Spotify 검색 오류:', error);
    throw error;
  }
};

// 음악 공유 URL 생성
export const createShareUrl = (track: SpotifyTrack, emotion: string): string => {
  const shareText = `🎵 "${emotion}" 기분에 어울리는 음악을 추천받았어요!\n\n${track.name} - ${track.artists.map(a => a.name).join(', ')}\n\n#감정음악 #${emotion}`;
  const encodedText = encodeURIComponent(shareText);
  const spotifyUrl = track.external_urls.spotify;
  
  return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodeURIComponent(spotifyUrl)}`;
};

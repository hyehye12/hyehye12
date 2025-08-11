// iTunes API 서비스
export interface ItunesTrack {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  previewUrl?: string;
  trackViewUrl: string;
  primaryGenreName: string;
  trackTimeMillis?: number;
  kind?: string; // kind 속성 추가
}

export interface ItunesResponse {
  resultCount: number;
  results: ItunesTrack[];
}

// 감정별 iTunes 검색 키워드
const emotionToItunesQuery: { [key: string]: string } = {
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

// iTunes에서 음악 검색
export const searchItunesTracks = async (emotion: string, limit: number = 9): Promise<ItunesTrack[]> => {
  try {
    // 감정에 맞는 검색 쿼리 가져오기
    const query = emotionToItunesQuery[emotion] || "mood music";
    
    // iTunes 검색 API 호출 (무료, 인증 불필요)
    const response = await fetch(
      `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&entity=song&limit=${limit}&country=KR&lang=ko_kr`
    );

    if (!response.ok) {
      throw new Error('iTunes API 호출 실패');
    }

    const data: ItunesResponse = await response.json();
    
    // 결과가 없거나 에러인 경우 처리
    if (data.resultCount === 0 || !data.results) {
      return [];
    }

    // 트랙 정보만 필터링 (컬렉션 정보 제외)
    const tracks = data.results.filter(item => 
      item.trackName && 
      item.artistName && 
      item.collectionName && // collectionName이 있는 항목만 (실제 트랙)
      (!item.kind || item.kind === 'song') // kind가 없거나 'song'인 경우
    );

    return tracks.slice(0, limit);
  } catch (error) {
    console.error('iTunes 검색 오류:', error);
    throw error;
  }
};

// 음악 공유 URL 생성
export const createShareUrl = (track: ItunesTrack, emotion: string): string => {
  const shareText = `🎵 "${emotion}" 기분에 어울리는 음악을 추천받았어요!\n\n${track.trackName} - ${track.artistName}\n\n#감정음악 #${emotion}`;
  const encodedText = encodeURIComponent(shareText);
  const itunesUrl = track.trackViewUrl;
  
  return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodeURIComponent(itunesUrl)}`;
};

// 트랙 시간을 분:초 형식으로 변환
export const formatTrackTime = (milliseconds?: number): string => {
  if (!milliseconds) return '0:00';
  
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

// 아트워크 URL을 고해상도로 변환
export const getHighResArtwork = (artworkUrl100: string): string => {
  return artworkUrl100.replace('100x100', '600x600');
};

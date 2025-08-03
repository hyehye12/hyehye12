import { useState, useEffect, useCallback } from 'react';
import { getTracksByEmotion, EmotionTrack } from '../data/emotionData';
import { searchSpotifyTracks, SpotifyTrack } from '../api/spotify';

export const useMusicSearch = (emotion: string) => {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchTracks = useCallback(async () => {
    if (!emotion) return;
    
    try {
      setLoading(true);
      setError(null);

      // Spotify API 키가 있으면 실제 API 호출, 없으면 모의 데이터 사용
      if (process.env.REACT_APP_SPOTIFY_CLIENT_ID && process.env.REACT_APP_SPOTIFY_CLIENT_SECRET) {
        const spotifyTracks = await searchSpotifyTracks(emotion, 9);
        setTracks(spotifyTracks);
      } else {
        // 모의 데이터 사용 (약간의 지연 추가)
        await new Promise(resolve => setTimeout(resolve, 1000));
        const emotionTracks = getTracksByEmotion(emotion);
        // EmotionTrack을 SpotifyTrack 형태로 변환
        const convertedTracks: SpotifyTrack[] = emotionTracks.map(track => ({
          id: track.id,
          name: track.name,
          artists: [{ name: track.artist }],
          album: {
            name: track.album,
            images: [{ url: track.imageUrl }]
          },
          external_urls: {
            spotify: track.spotifyUrl
          }
        }));
        setTracks(convertedTracks);
      }
      
      setLoading(false);
    } catch (err) {
      console.error("음악 검색 오류:", err);
      setError("음악을 불러오는 중 오류가 발생했습니다.");
      setLoading(false);
    }
  }, [emotion]);

  useEffect(() => {
    searchTracks();
  }, [searchTracks]);

  return { tracks, loading, error, searchTracks };
}; 
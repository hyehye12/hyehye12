import { useState, useEffect, useCallback } from 'react';
import { getTracksByEmotion } from '../data/emotionData';
import { searchItunesTracks, ItunesTrack } from '../services/itunes';

export const useMusicSearch = (emotion: string) => {
  const [tracks, setTracks] = useState<ItunesTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchTracks = useCallback(async () => {
    if (!emotion) return;
    
    try {
      setLoading(true);
      setError(null);

      // iTunes API는 무료이므로 항상 실제 API 호출
      try {
        const itunesTracks = await searchItunesTracks(emotion, 9);
        if (itunesTracks.length > 0) {
          setTracks(itunesTracks);
        } else {
          // iTunes API에서 결과가 없으면 모의 데이터 사용
          const emotionTracks = getTracksByEmotion(emotion);
          // EmotionTrack을 ItunesTrack 형태로 변환
          const convertedTracks: ItunesTrack[] = emotionTracks.map(track => ({
            trackId: parseInt(track.id),
            trackName: track.name,
            artistName: track.artist,
            collectionName: track.album,
            artworkUrl100: track.imageUrl,
            previewUrl: undefined,
            trackViewUrl: track.spotifyUrl, // 기존 URL 유지
            primaryGenreName: 'Pop',
            trackTimeMillis: undefined
          }));
          setTracks(convertedTracks);
        }
      } catch (itunesError) {
        console.warn('iTunes API 오류, 모의 데이터 사용:', itunesError);
        // iTunes API 실패 시 모의 데이터 사용
        const emotionTracks = getTracksByEmotion(emotion);
        const convertedTracks: ItunesTrack[] = emotionTracks.map(track => ({
          trackId: parseInt(track.id),
          trackName: track.name,
          artistName: track.artist,
          collectionName: track.album,
          artworkUrl100: track.imageUrl,
          previewUrl: undefined,
          trackViewUrl: track.spotifyUrl,
          primaryGenreName: 'Pop',
          trackTimeMillis: undefined
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
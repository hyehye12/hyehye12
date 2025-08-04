//노래 추천 데이터 (API에서 가져옴)

export type EmotionTrack = {
  id: string;
  name: string;
  artist: string;
  album: string;
  imageUrl: string;
  spotifyUrl: string;
  emotion: string;
}

// 더미 데이터 제거 - API에서 실시간으로 가져옴
export const emotionTracks: EmotionTrack[] = [];

export const getTracksByEmotion = (emotion: string): EmotionTrack[] => {
  return emotionTracks.filter(track => track.emotion === emotion);
};

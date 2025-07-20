//노래 추천 더미 데이터

export type EmotionTrack = {
  id: string;
  name: string;
  artist: string;
  album: string;
  imageUrl: string;
  spotifyUrl: string;
  emotion: string;
}

export const emotionTracks: EmotionTrack[] = [
  {
    id: "happy1",
    name: "Happy",
    artist: "Pharrell Williams",
    album: "G I R L",
    imageUrl: "https://via.placeholder.com/300x300/FFD700/000000?text=Happy",
    spotifyUrl: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH",
    emotion: "행복함",
  },
  {
    id: "happy2",
    name: "Good Life",
    artist: "OneRepublic",
    album: "Waking Up",
    imageUrl:
      "https://via.placeholder.com/300x300/FFA500/000000?text=Good+Life",
    spotifyUrl: "https://open.spotify.com/track/5sFpVW6nX5aJfcKF4qqfRo",
    emotion: "행복함",
  },
  {
    id: "happy3",
    name: "Walking on Sunshine",
    artist: "Katrina & The Waves",
    album: "Walking on Sunshine",
    imageUrl:
      "https://via.placeholder.com/300x300/FFD700/000000?text=Walking+on+Sunshine",
    spotifyUrl: "https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0",
    emotion: "행복함",
  },

  // 슬픈 감정 (😢, 우울함)
  {
    id: "sad1",
    name: "Someone Like You",
    artist: "Adele",
    album: "21",
    imageUrl:
      "https://via.placeholder.com/300x300/4682B4/FFFFFF?text=Someone+Like+You",
    spotifyUrl: "https://open.spotify.com/track/1zwMYTA5nlNjZxYrvBB2pV",
    emotion: "우울함",
  },
  {
    id: "sad2",
    name: "All of Me",
    artist: "John Legend",
    album: "Love in the Future",
    imageUrl:
      "https://via.placeholder.com/300x300/8B0000/FFFFFF?text=All+of+Me",
    spotifyUrl: "https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a",
    emotion: "우울함",
  },
  {
    id: "sad3",
    name: "Say Something",
    artist: "A Great Big World",
    album: "Is There Anybody Out There?",
    imageUrl:
      "https://via.placeholder.com/300x300/696969/FFFFFF?text=Say+Something",
    spotifyUrl: "https://open.spotify.com/track/6Vc5wAMmXdrcAMy2UvK25q",
    emotion: "우울함",
  },

  // 화난 감정 (😡, 스트레스)
  {
    id: "angry1",
    name: "In The End",
    artist: "Linkin Park",
    album: "Hybrid Theory",
    imageUrl:
      "https://via.placeholder.com/300x300/8B0000/FFFFFF?text=In+The+End",
    spotifyUrl: "https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq",
    emotion: "스트레스",
  },
  {
    id: "angry2",
    name: "Numb",
    artist: "Linkin Park",
    album: "Meteora",
    imageUrl: "https://via.placeholder.com/300x300/2F4F4F/FFFFFF?text=Numb",
    spotifyUrl: "https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h",
    emotion: "스트레스",
  },
  {
    id: "angry3",
    name: "Breaking The Habit",
    artist: "Linkin Park",
    album: "Meteora",
    imageUrl:
      "https://via.placeholder.com/300x300/4B0082/FFFFFF?text=Breaking+The+Habit",
    spotifyUrl: "https://open.spotify.com/track/2GJ7sxBbp35DL08csugXT4",
    emotion: "스트레스",
  },

  // 사랑스러운 감정 (😍, 설렘)
  {
    id: "love1",
    name: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    imageUrl: "https://via.placeholder.com/300x300/FF69B4/FFFFFF?text=Perfect",
    spotifyUrl: "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v",
    emotion: "설렘",
  },
  {
    id: "love2",
    name: "Just The Way You Are",
    artist: "Bruno Mars",
    album: "Doo-Wops & Hooligans",
    imageUrl:
      "https://via.placeholder.com/300x300/FF1493/FFFFFF?text=Just+The+Way+You+Are",
    spotifyUrl: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ",
    emotion: "설렘",
  },
  {
    id: "love3",
    name: "A Thousand Years",
    artist: "Christina Perri",
    album: "Lovestrong",
    imageUrl:
      "https://via.placeholder.com/300x300/FFB6C1/000000?text=A+Thousand+Years",
    spotifyUrl: "https://open.spotify.com/track/6lanRgr6wXibZr8KgzXxBl",
    emotion: "설렘",
  },

  // 평온한 감정 (😌, 평온함)
  {
    id: "calm1",
    name: "Clocks",
    artist: "Coldplay",
    album: "A Rush of Blood to the Head",
    imageUrl: "https://via.placeholder.com/300x300/87CEEB/000000?text=Clocks",
    spotifyUrl: "https://open.spotify.com/track/0BCPKOYdS2jbQ8iyB56Zns",
    emotion: "평온함",
  },
  {
    id: "calm2",
    name: "Yellow",
    artist: "Coldplay",
    album: "Parachutes",
    imageUrl: "https://via.placeholder.com/300x300/FFFF00/000000?text=Yellow",
    spotifyUrl: "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg",
    emotion: "평온함",
  },
  {
    id: "calm3",
    name: "Fix You",
    artist: "Coldplay",
    album: "X&Y",
    imageUrl: "https://via.placeholder.com/300x300/4682B4/FFFFFF?text=Fix+You",
    spotifyUrl: "https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q",
    emotion: "평온함",
  },

  // 지친 감정 (😴, 지침)
  {
    id: "tired1",
    name: "Mad World",
    artist: "Gary Jules",
    album: "Trading Snakeoil for Wolftickets",
    imageUrl:
      "https://via.placeholder.com/300x300/708090/FFFFFF?text=Mad+World",
    spotifyUrl: "https://open.spotify.com/track/3JOVTaI5lvK5qIazkG5dDT",
    emotion: "지침",
  },
  {
    id: "tired2",
    name: "Creep",
    artist: "Radiohead",
    album: "Pablo Honey",
    imageUrl: "https://via.placeholder.com/300x300/2F4F4F/FFFFFF?text=Creep",
    spotifyUrl: "https://open.spotify.com/track/70LcF31zb1H0PyJoS1Sx1r",
    emotion: "지침",
  },
  {
    id: "tired3",
    name: "Everybody Hurts",
    artist: "R.E.M.",
    album: "Automatic for the People",
    imageUrl:
      "https://via.placeholder.com/300x300/696969/FFFFFF?text=Everybody+Hurts",
    spotifyUrl: "https://open.spotify.com/track/6PypGyiu0Y2lCDBN1XZEnP",
    emotion: "지침",
  },
];

export const getTracksByEmotion = (emotion: string): EmotionTrack[] => {
  return emotionTracks.filter((track) => track.emotion === emotion);
};

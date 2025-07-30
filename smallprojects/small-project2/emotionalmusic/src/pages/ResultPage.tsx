import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { getTracksByEmotion, EmotionTrack } from "../data/emotionData";
import { getEmotionAdvice } from "../data/emotionAdvice";
import { getEmotionDescription } from "../utils/emotionAnalyzer";
import { diaryStore } from "../utils/diaryStore";
import LoadingSpinner from "../components/LoadingSpinner";
import TrackCard from "../components/TrackCard";
import Healing from "../components/Healing";

// 스포티파이 API (오류나서 보류)
/*
type SpotifyTrack = {
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
}

type SpotifyResponse = {
  tracks: {
    items: SpotifyTrack[];
  };
}
*/

// 감정별 스포티파이 검색 키워드
/*
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
*/

type ResultPageProps = {};

export default function ResultPage({}: ResultPageProps) {
  const { emotion } = useParams<{ emotion: string }>();
  const navigate = useNavigate();
  const [tracks, setTracks] = useState<EmotionTrack[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showHealing, setShowHealing] = useState(false);

  useEffect(() => {
    if (emotion) {
      searchTracks();
    }
  }, [emotion]);

  const searchTracks = async () => {
    if (!emotion) return;
    
    try {
      setLoading(true);
      setError(null);

      const emotionTracks = getTracksByEmotion(emotion);

      setTimeout(() => {
        setTracks(emotionTracks);
        setLoading(false);
      }, 1000);

      // 스포티파이 API 호출 코드
      /*
      // 감정에 맞는 검색 쿼리 가져오기
      const query = emotionToSpotifyQuery[emotion] || "mood music";
      
      // 스포티파이 액세스 토큰 가져오기
      const token = await getSpotifyToken();
      
      // 스포티파이 검색 API 호출
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=9`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('스포티파이 API 호출 실패');
      }

      const data: SpotifyResponse = await response.json();
      setTracks(data.tracks.items);
      setLoading(false);
      */
    } catch (err) {
      console.error("음악 검색 오류:", err);
      setError("음악을 불러오는 중 오류가 발생했습니다.");
      setLoading(false);
    }
  };

  const handleHealingClick = () => {
    setShowHealing(true);
  };

  const handleRestart = () => {
    setShowHealing(false);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  if (!emotion) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return <LoadingSpinner emotion={emotion} />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="text-center">
          <div className="mb-4 text-4xl">❌</div>
          <h2 className="mb-2 text-2xl font-bold">오류가 발생했습니다</h2>
          <p className="mb-4 text-gray-600">{error}</p>
          <button
            onClick={handleBack}
            className="px-4 py-2 text-white bg-purple-300 rounded-lg hover:bg-purple-600"
          >
            다시 시도하기
          </button>
        </div>
      </div>
    );
  }

  if (showHealing) {
    return (
      <Healing userInput={emotion} onRestart={handleRestart} />
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50"
        >
          ← 돌아가기
        </button>
        <h1 className="text-2xl font-bold text-center">
          🎵 "{emotion}"에 맞는 음악 추천
        </h1>
        <div className="w-24"></div>
      </div>
      <div className="mb-8 text-center">
        <p className="text-gray-600 mb-4">
          {getEmotionDescription(emotion, "")}
        </p>
        <p className="text-sm text-gray-500">
          분석된 감정: <span className="font-semibold text-purple-600">"{emotion}"</span>
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center space-x-4">
        <button
          onClick={searchTracks}
          className="px-6 py-2 text-white transition-colors bg-purple-300 rounded-lg hover:bg-purple-600"
        >
          🔄 다른 음악 추천받기
        </button>
        <button
          onClick={() => {
            const savedDiaryText = diaryStore.getDiaryText();
            if (savedDiaryText) {
              navigate(`/analysis/${encodeURIComponent(savedDiaryText)}`);
            } else {
              navigate('/');
            }
          }}
          className="px-6 py-2 text-white transition-colors bg-blue-400 rounded-lg hover:bg-blue-600"
        >
          🤖 AI 감정 분석받기
        </button>
        {["우울함", "지침", "스트레스"].includes(emotion) && (
          <button
            onClick={handleHealingClick}
            className="px-6 py-2 text-white transition-colors bg-purple-300 rounded-lg hover:bg-purple-600"
          >
            💌 감정 상담 받기
          </button>
        )}
      </div>
    </div>
  );
}

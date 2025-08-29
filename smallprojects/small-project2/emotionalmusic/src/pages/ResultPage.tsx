import React, { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useMusicSearch } from "../hooks/useMusicSearch";
import { getEmotionDescription } from "../utils/emotionAnalyzer";

import LoadingSpinner from "../components/LoadingSpinner";
import Healing from "../components/Healing";

export default function ResultPage() {
  const { emotion } = useParams<{ emotion: string }>();
  const navigate = useNavigate();
  const [showHealing, setShowHealing] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const { tracks, loading, error, searchTracks } = useMusicSearch(
    emotion || ""
  );

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
      <div className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
        <div className="w-full max-w-lg p-12 text-center modern-card">
          <div className="mb-8 text-6xl">❌</div>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            문제가 발생했습니다
          </h2>
          <p className="mb-8 text-gray-600">{error}</p>
          <button
            onClick={handleBack}
            className="px-8 py-3 font-medium soft-button rounded-xl"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  if (showHealing) {
    return <Healing userInput={emotion} onRestart={handleRestart} />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-64 transform rounded-full top-20 left-20 w-96 bg-gradient-to-br from-blue-200 to-blue-300 rotate-12 blur-3xl"></div>
        <div className="absolute h-48 transform rounded-full bottom-20 right-20 w-72 bg-gradient-to-br from-blue-100 to-blue-200 -rotate-6 blur-2xl"></div>
        <div className="absolute w-64 h-40 transform rotate-45 rounded-full top-60 left-1/2 bg-gradient-to-br from-blue-300 to-blue-400 blur-3xl"></div>
      </div>

      {/* Main Layout Container */}
      <div className="px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid min-h-screen grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left Side - Music Player Section */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="p-8 mb-8 modern-card">
                {/* Currently Playing Track */}
                <div className="mb-8 text-center">
                  <div className="relative mx-auto mb-6 vinyl-record">
                    {tracks.length > 0 && (
                      <img
                        src={
                          tracks[currentTrackIndex]?.artworkUrl100?.replace(
                            "100x100",
                            "300x300"
                          ) || "/default-album.jpg"
                        }
                        alt={
                          tracks[currentTrackIndex]?.trackName ||
                          "Album artwork"
                        }
                        className="absolute inset-4 rounded-full object-cover w-[168px] h-[168px]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/default-album.jpg";
                        }}
                      />
                    )}
                  </div>

                  {tracks.length > 0 && (
                    <div>
                      <h2 className="mb-2 text-3xl font-bold text-gray-900">
                        {tracks[currentTrackIndex]?.trackName || "Addict"}
                      </h2>
                      <p className="mb-4 text-xl text-gray-600">
                        {tracks[currentTrackIndex]?.artistName || "Silva Hound"}
                      </p>

                      {/* Play Controls */}
                      <div className="flex items-center justify-center mb-6 space-x-4">
                        <button
                          onClick={() =>
                            setCurrentTrackIndex(
                              Math.max(0, currentTrackIndex - 1)
                            )
                          }
                          className="flex items-center justify-center w-12 h-12 transition-all rounded-full glass-effect hover:soft-glow disabled:opacity-50"
                          disabled={currentTrackIndex === 0}
                        >
                          ⏮️
                        </button>
                        <button className="flex items-center justify-center w-16 h-16 text-2xl rounded-full soft-button">
                          ▶️
                        </button>
                        <button
                          onClick={() =>
                            setCurrentTrackIndex(
                              Math.min(tracks.length - 1, currentTrackIndex + 1)
                            )
                          }
                          className="flex items-center justify-center w-12 h-12 transition-all rounded-full glass-effect hover:soft-glow disabled:opacity-50"
                          disabled={currentTrackIndex === tracks.length - 1}
                        >
                          ⏭️
                        </button>
                      </div>

                      {/* Save Option */}
                      <p className="mb-4 text-gray-600">
                        이 트랙을 저장하시겠어요?
                      </p>
                      <button className="px-6 py-2 rounded-full soft-button">
                        💾 저장
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Emotion Info */}
              <div className="p-6 modern-card">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  감정 분석
                </h3>
                <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl">
                  <p className="font-medium text-gray-800">"{emotion}"</p>
                  <p className="mt-2 text-sm text-gray-600">
                    {getEmotionDescription(emotion, "")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Playlist Section */}
            <div>
              <div className="p-6 mb-8 modern-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    추천 트랙
                  </h2>
                </div>

                <div className="space-y-4">
                  {tracks.slice(0, 4).map((track, index) => (
                    <div
                      key={track.trackId}
                      className={`flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-all cursor-pointer ${
                        index === currentTrackIndex
                          ? "bg-blue-50 border border-blue-200"
                          : ""
                      }`}
                      onClick={() => setCurrentTrackIndex(index)}
                    >
                      <img
                        src={track.artworkUrl100 || "/default-album.jpg"}
                        alt={track.trackName}
                        className="object-cover w-12 h-12 rounded-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/default-album.jpg";
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 truncate">
                          {track.trackName}
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          {track.artistName}
                        </p>
                      </div>
                      <button className="flex items-center justify-center w-8 h-8 transition-all rounded-full glass-effect hover:soft-glow">
                        ▶️
                      </button>
                    </div>
                  ))}
                </div>

                {tracks.length > 4 && (
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-sm text-center text-gray-500">
                      +{tracks.length - 4} 개 더 많은 트랙
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={searchTracks}
                  className="w-full py-3 font-medium soft-button rounded-xl"
                >
                  🔄 다른 추천가져오기
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full py-3 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow"
                >
                  🤖 새로운 AI 분석
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Search Bar */}
          <div className="mt-12">
            <div className="max-w-md mx-auto">
              <div className="p-4 modern-card">
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="노래를 검색하세요..."
                      className="w-full text-gray-700 placeholder-gray-500 bg-transparent border-none outline-none"
                    />
                  </div>
                  <button className="p-2 rounded-full soft-button">🔍</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

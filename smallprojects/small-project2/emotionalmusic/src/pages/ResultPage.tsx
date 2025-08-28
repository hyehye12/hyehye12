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
  const { tracks, loading, error, searchTracks } = useMusicSearch(emotion || '');

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
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 flex items-center justify-center p-8 font-sans relative overflow-hidden">
        <div className="modern-card p-12 max-w-lg w-full text-center">
          <div className="text-6xl mb-8">❌</div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">문제가 발생했습니다</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={handleBack}
            className="soft-button px-8 py-3 rounded-xl font-medium"
          >
다시 시도
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 font-sans relative overflow-hidden">
      
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full transform rotate-12 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform -rotate-6 blur-2xl"></div>
        <div className="absolute top-60 left-1/2 w-64 h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full transform rotate-45 blur-3xl"></div>
      </div>

      {/* Main Layout Container */}
      <div className="px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-screen">
            {/* Left Side - Music Player Section */}
            <div className="lg:sticky lg:top-24 lg:h-fit">
              <div className="modern-card p-8 mb-8">
                {/* Currently Playing Track */}
                <div className="text-center mb-8">
                  <div className="vinyl-record mx-auto mb-6 relative">
                    {tracks.length > 0 && (
                      <img 
                        src={tracks[currentTrackIndex]?.artworkUrl100?.replace('100x100', '300x300') || '/default-album.jpg'}
                        alt={tracks[currentTrackIndex]?.trackName || 'Album artwork'}
                        className="absolute inset-4 rounded-full object-cover w-[168px] h-[168px]"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/default-album.jpg';
                        }}
                      />
                    )}
                  </div>
                  
                  {tracks.length > 0 && (
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {tracks[currentTrackIndex]?.trackName || 'Addict'}
                      </h2>
                      <p className="text-xl text-gray-600 mb-4">
                        {tracks[currentTrackIndex]?.artistName || 'Silva Hound'}
                      </p>
                      
                      {/* Play Controls */}
                      <div className="flex items-center justify-center space-x-4 mb-6">
                        <button 
                          onClick={() => setCurrentTrackIndex(Math.max(0, currentTrackIndex - 1))}
                          className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:soft-glow transition-all disabled:opacity-50"
                          disabled={currentTrackIndex === 0}
                        >
                          ⏮️
                        </button>
                        <button className="w-16 h-16 rounded-full soft-button flex items-center justify-center text-2xl">
                          ▶️
                        </button>
                        <button 
                          onClick={() => setCurrentTrackIndex(Math.min(tracks.length - 1, currentTrackIndex + 1))}
                          className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:soft-glow transition-all disabled:opacity-50"
                          disabled={currentTrackIndex === tracks.length - 1}
                        >
                          ⏭️
                        </button>
                      </div>
                      
                      {/* Save Option */}
                      <p className="text-gray-600 mb-4">이 트랙을 저장하시겠어요?</p>
                      <button className="soft-button px-6 py-2 rounded-full">
💾 저장
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Emotion Info */}
              <div className="modern-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">감정 분석</h3>
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-xl">
                  <p className="text-gray-800 font-medium">"{emotion}"</p>
                  <p className="text-gray-600 text-sm mt-2">
                    {getEmotionDescription(emotion, "")}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Playlist Section */}
            <div>
              <div className="modern-card p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">추천 트랙</h2>
                  <div className="text-sm text-gray-500">AI 생성</div>
                </div>
                
                <div className="space-y-4">
                  {tracks.slice(0, 4).map((track, index) => (
                    <div 
                      key={track.trackId} 
                      className={`flex items-center space-x-4 p-3 rounded-xl hover:bg-white/50 transition-all cursor-pointer ${
                        index === currentTrackIndex ? 'bg-blue-50 border border-blue-200' : ''
                      }`}
                      onClick={() => setCurrentTrackIndex(index)}
                    >
                      <img 
                        src={track.artworkUrl100 || '/default-album.jpg'}
                        alt={track.trackName}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/default-album.jpg';
                        }}
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 truncate">{track.trackName}</h4>
                        <p className="text-gray-600 text-sm truncate">{track.artistName}</p>
                      </div>
                      <button className="w-8 h-8 rounded-full glass-effect flex items-center justify-center hover:soft-glow transition-all">
                        ▶️
                      </button>
                    </div>
                  ))}
                </div>
                
                {tracks.length > 4 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-sm">+{tracks.length - 4} 개 더 많은 트랙</p>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={searchTracks}
                  className="w-full soft-button py-3 rounded-xl font-medium"
                >
🔄 다른 추천가져오기
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="w-full glass-effect py-3 rounded-xl font-medium text-gray-700 hover:soft-glow transition-all"
                >
🤖 새로운 AI 분석
                </button>
                {["우울함", "지침", "스트레스"].includes(emotion) && (
                  <button
                    onClick={handleHealingClick}
                    className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:shadow-lg transition-all"
                  >
💌 감정적 지원 받기
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Bottom Search Bar */}
          <div className="mt-12">
            <div className="max-w-md mx-auto">
              <div className="modern-card p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="노래를 검색하세요..."
                      className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500"
                    />
                  </div>
                  <button className="soft-button p-2 rounded-full">
                    🔍
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
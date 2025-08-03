import React, { useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useMusicSearch } from "../hooks/useMusicSearch";
import { getEmotionDescription } from "../utils/emotionAnalyzer";

import LoadingSpinner from "../components/LoadingSpinner";
import TrackCard from "../components/TrackCard";
import Healing from "../components/Healing";

export default function ResultPage() {
  const { emotion } = useParams<{ emotion: string }>();
  const navigate = useNavigate();
  const [showHealing, setShowHealing] = useState(false);
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white rounded-2xl shadow-soft p-8 max-w-md w-full text-center animate-scale-in">
          <div className="text-6xl mb-6 animate-bounce-gentle">❌</div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <button
            onClick={handleBack}
            className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
          >
            Try Again
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 font-sans">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBack}
              className="flex items-center px-6 py-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium text-gray-700 hover:text-gray-900 transform hover:scale-105"
            >
              ← Back
            </button>
            <h1 className="text-4xl font-serif font-bold text-center text-gray-900">
              Music for
              <span className="block bg-gradient-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent">
                "{emotion}"
              </span>
            </h1>
            <div className="w-32"></div>
          </div>
          
          <div className="text-center mb-12 animate-fade-in">
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              {getEmotionDescription(emotion, "")}
            </p>
            <p className="text-sm text-gray-500">
              Analyzed emotion: <span className="font-semibold text-primary-600">"{emotion}"</span>
            </p>
          </div>
        </div>
      </div>

      {/* Music Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => (
            <div 
              key={track.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TrackCard track={track} emotion={emotion} />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-16 text-center space-y-4 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={searchTracks}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
            >
              🔄 Get Different Recommendations
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
            >
              🤖 AI Emotional Analysis
            </button>
          </div>
          
          {["우울함", "지침", "스트레스"].includes(emotion) && (
            <button
              onClick={handleHealingClick}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
            >
              💌 Get Emotional Support
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

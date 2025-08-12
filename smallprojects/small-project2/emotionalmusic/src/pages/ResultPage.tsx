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
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-8 font-sans relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-48 h-28 bg-neon-lime-200 rounded-3xl transform rotate-12 shadow-elegant"></div>
          <div className="absolute bottom-20 right-20 w-36 h-24 bg-vintage-300 rounded-3xl transform -rotate-6 shadow-elegant"></div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-16 max-w-lg w-full text-center relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
          <div className="absolute top-8 left-8 w-24 h-16 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform -rotate-3 opacity-30 shadow-lg"></div>
          <div className="absolute bottom-8 right-8 w-20 h-12 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform rotate-6 opacity-30 shadow-lg"></div>
          
          <div className="text-8xl mb-10 animate-bounce-gentle transform rotate-12">❌</div>
          <h2 className="font-serif text-4xl font-light text-gray-900 mb-8 tracking-wide">Something went wrong</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-lime-400 to-vintage-500 mx-auto mb-10"></div>
          <p className="text-gray-700 mb-12 text-xl font-medium tracking-wide">{error}</p>
          
          <button
            onClick={handleBack}
            className="px-12 py-5 bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium tracking-wide transform hover:scale-105 relative overflow-hidden group border border-neon-lime-400"
          >
            <span className="relative z-10">Try Again</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-600 to-neon-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 font-sans relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-28 bg-neon-lime-200 rounded-3xl transform rotate-12 shadow-elegant"></div>
        <div className="absolute bottom-20 right-20 w-36 h-24 bg-vintage-300 rounded-3xl transform -rotate-6 shadow-elegant"></div>
        <div className="absolute top-60 left-1/2 w-32 h-20 bg-neon-lime-100 rounded-3xl transform rotate-45 shadow-elegant"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-16 bg-vintage-200 rounded-3xl transform -rotate-12 shadow-elegant"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-12 bg-neon-lime-100 rounded-3xl transform rotate-30 shadow-elegant"></div>
      </div>

      {/* Header with Clean Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-500/10 to-vintage-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-8 py-24">
          <div className="flex items-center justify-between mb-16">
            <button
              onClick={handleBack}
              className="flex items-center px-10 py-5 bg-white/90 backdrop-blur-sm shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium text-gray-700 hover:text-gray-900 transform hover:scale-105 relative overflow-hidden group rounded-3xl border border-gray-200 tracking-wide"
            >
              <span className="relative z-10">← BACK</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-100 to-vintage-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Main Title with Clean Aesthetic */}
            <div className="text-center relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute -bottom-8 right-1/2 transform translate-x-1/2 w-28 h-16 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-6 opacity-20"></div>
              
              <h1 className="font-serif text-6xl font-light text-gray-900 mb-6 tracking-wide relative z-10">
                Music for
                <span className="block bg-gradient-to-r from-neon-lime-600 via-neon-lime-500 to-vintage-500 bg-clip-text text-transparent mt-4">
                  "{emotion}"
                </span>
              </h1>
              
              {/* Decorative Dots */}
              <div className="flex items-center justify-center space-x-12 mb-6">
                <div className="w-8 h-8 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300 shadow-lg"></div>
                <div className="w-8 h-8 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300 shadow-lg"></div>
              </div>
              
              {/* Info Badge */}
              <div className="bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-4 rounded-2xl border border-neon-lime-200 transform rotate-1 inline-block">
                <div className="text-sm text-gray-700 font-medium tracking-wide">
                  <div className="text-center font-serif">EMOTION MUSIC</div>
                </div>
              </div>
            </div>
            
            <div className="w-40"></div>
          </div>
          
          <div className="text-center mb-20 animate-fade-in">
            <p className="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto font-medium tracking-wide leading-relaxed">
              {getEmotionDescription(emotion, "")}
            </p>
            <div className="bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-6 rounded-2xl border border-neon-lime-200 transform -rotate-1 inline-block">
              <p className="text-lg text-gray-700 font-medium tracking-wide">
                Analyzed emotion: <span className="text-gray-900">"{emotion}"</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Music Grid - Clean Card Style */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-16 mb-16 relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
          {/* Subtle Design Elements */}
          <div className="absolute top-12 right-12 w-24 h-16 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-6 opacity-20 shadow-lg"></div>
          <div className="absolute bottom-12 left-12 w-20 h-12 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-8 opacity-20 shadow-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-br from-neon-lime-100 to-vintage-200 rounded-3xl transform rotate-45 opacity-10 shadow-lg"></div>
          
          {/* Track List Header */}
          <div className="text-center mb-16 border-b border-gray-200 pb-12 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-neon-lime-400 to-vintage-500"></div>
            <h2 className="font-serif text-5xl font-light text-gray-900 tracking-wide mb-6">
              RECOMMENDED TRACKS
            </h2>
            <div className="flex items-center justify-center space-x-10 text-gray-600 text-lg font-medium tracking-wide">
              <span>SIDE A: {emotion.toUpperCase()}</span>
              <span className="text-2xl">•</span>
              <span>SIDE B: MUSIC SELECTION</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track, index) => (
              <div 
                key={track.trackId} 
                className="animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Track Info Badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform rotate-3 z-10">
                  <div className="text-xs text-gray-700 font-medium tracking-wide">
                    <div className="text-center font-serif">TRACK {String.fromCharCode(65 + Math.floor(index / 3))}{index % 3 + 1}</div>
                  </div>
                </div>
                
                <TrackCard track={track} emotion={emotion} />
              </div>
            ))}
          </div>
          
          {/* Footer Credits */}
          <div className="mt-16 pt-12 border-t border-gray-200 text-center">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl border border-gray-200 transform rotate-1 inline-block">
              <div className="text-sm text-gray-600 font-medium tracking-wide">
                <div className="mb-3">PRODUCED BY: AI EMOTION ANALYZER</div>
                <div className="mb-3">MIXED BY: MUSIC RECOMMENDATION ENGINE</div>
                <div className="mb-3">MASTERED BY: EMOTIONAL MUSIC PROJECT</div>
                <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Clean Style */}
        <div className="text-center space-y-8 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button
              onClick={searchTracks}
              className="px-14 py-6 bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium tracking-wide transform hover:scale-105 relative overflow-hidden group border border-neon-lime-400"
            >
              <span className="relative z-10">🔄 GET DIFFERENT RECOMMENDATIONS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-600 to-neon-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-14 py-6 bg-gradient-to-r from-vintage-500 to-vintage-600 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium tracking-wide transform hover:scale-105 relative overflow-hidden group border border-vintage-400"
            >
              <span className="relative z-10">🤖 AI EMOTIONAL ANALYSIS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-vintage-600 to-vintage-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {["우울함", "지침", "스트레스"].includes(emotion) && (
            <button
              onClick={handleHealingClick}
              className="px-14 py-6 bg-gradient-to-r from-neon-lime-400 to-vintage-500 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium tracking-wide transform hover:scale-105 relative overflow-hidden group border border-neon-lime-300"
            >
              <span className="relative z-10">💌 GET EMOTIONAL SUPPORT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-vintage-500 to-neon-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          )}
          
          {/* Footer Badge */}
          <div className="mt-12 inline-block bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-6 rounded-2xl border border-neon-lime-200 transform -rotate-1">
            <div className="text-sm text-gray-700 font-medium tracking-wide">
              <div className="flex items-center space-x-6">
                <span>🎵 PLAY</span>
                <span>⏸️ PAUSE</span>
                <span>⏹️ STOP</span>
                <span>⏭️ NEXT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

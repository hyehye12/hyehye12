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
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 flex items-center justify-center p-6 font-mono relative overflow-hidden">
        {/* Retro Cassette Tape Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-48 h-28 bg-orange-400 rounded-lg transform rotate-12 shadow-2xl"></div>
          <div className="absolute bottom-20 right-20 w-36 h-24 bg-orange-300 rounded-lg transform -rotate-6 shadow-2xl"></div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-12 max-w-lg w-full text-center relative overflow-hidden rounded-3xl border-4 border-orange-300 transform -rotate-1">
          <div className="absolute top-6 left-6 w-20 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform -rotate-3 opacity-30 shadow-lg"></div>
          <div className="absolute bottom-6 right-6 w-16 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform rotate-6 opacity-30 shadow-lg"></div>
          
          <div className="text-8xl mb-8 animate-bounce-gentle transform rotate-12">❌</div>
          <h2 className="text-3xl font-black text-orange-900 mb-6 tracking-widest uppercase">Something went wrong</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-orange-700 mb-10 text-xl font-bold tracking-wide">{error}</p>
          
          <button
            onClick={handleBack}
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-orange-300"
          >
            <span className="relative z-10">Try Again</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 font-mono relative overflow-hidden">
      {/* Retro Cassette Tape Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-28 bg-orange-400 rounded-lg transform rotate-12 shadow-2xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-24 bg-orange-300 rounded-lg transform -rotate-6 shadow-2xl"></div>
        <div className="absolute top-60 left-1/2 w-32 h-20 bg-orange-500 rounded-lg transform rotate-45 shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-16 bg-amber-400 rounded-lg transform -rotate-12 shadow-2xl"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-12 bg-yellow-400 rounded-lg transform rotate-30 shadow-2xl"></div>
      </div>

      {/* Header with Cassette Tape Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-amber-500/15"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={handleBack}
              className="flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-300 font-black text-orange-700 hover:text-orange-900 transform hover:scale-105 relative overflow-hidden group rounded-2xl border-4 border-orange-300 tracking-widest uppercase"
            >
              <span className="relative z-10">← BACK</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Main Title with Cassette Tape Aesthetic */}
            <div className="text-center relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-3 opacity-20"></div>
              <div className="absolute -bottom-8 right-1/2 transform translate-x-1/2 w-28 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-6 opacity-20"></div>
              
              <h1 className="text-5xl font-black text-orange-900 mb-4 tracking-widest uppercase relative z-10">
                Music for
                <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent mt-2">
                  "{emotion}"
                </span>
              </h1>
              
              {/* Cassette Tape Holes */}
              <div className="flex items-center justify-center space-x-12 mb-4">
                <div className="w-8 h-8 bg-orange-200 rounded-full border-4 border-orange-400 shadow-lg"></div>
                <div className="w-8 h-8 bg-orange-200 rounded-full border-4 border-orange-400 shadow-lg"></div>
              </div>
              
              {/* Track Info */}
              <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-3 rounded-lg border-2 border-orange-300 transform rotate-1 inline-block">
                <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
                  <div className="flex justify-between mb-1">
                    <span>TRACK 01</span>
                    <span>3:45</span>
                  </div>
                  <div className="text-center font-black text-orange-900">EMOTION MUSIC</div>
                </div>
              </div>
            </div>
            
            <div className="w-40"></div>
          </div>
          
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-2xl text-orange-700 mb-6 max-w-3xl mx-auto font-bold tracking-wide leading-relaxed">
              {getEmotionDescription(emotion, "")}
            </p>
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-4 rounded-xl border-2 border-orange-300 transform -rotate-1 inline-block">
              <p className="text-lg text-orange-800 font-black tracking-widest uppercase">
                Analyzed emotion: <span className="text-orange-900">"{emotion}"</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Music Grid - Album Insert Style */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-12 mb-12 relative overflow-hidden rounded-3xl border-4 border-orange-300 transform rotate-1">
          {/* Cassette Tape Design Elements */}
          <div className="absolute top-8 right-8 w-24 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-6 opacity-20 shadow-lg"></div>
          <div className="absolute bottom-8 left-8 w-20 h-12 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-8 opacity-20 shadow-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg transform rotate-45 opacity-10 shadow-lg"></div>
          
          {/* Track List Header */}
          <div className="text-center mb-12 border-b-4 border-orange-300 pb-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-orange-400 to-amber-500"></div>
            <h2 className="text-4xl font-black text-orange-900 tracking-widest uppercase mb-4">
              RECOMMENDED TRACKS
            </h2>
            <div className="flex items-center justify-center space-x-8 text-orange-600 text-lg font-black tracking-widest uppercase">
              <span>SIDE A: {emotion.toUpperCase()}</span>
              <span className="text-2xl">•</span>
              <span>SIDE B: MUSIC SELECTION</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track, index) => (
              <div 
                key={track.trackId} 
                className="animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Track Info Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3 z-10">
                  <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                    <div className="text-center">TRACK {String.fromCharCode(65 + Math.floor(index / 3))}{index % 3 + 1}</div>
                    <div className="text-center">{Math.floor(Math.random() * 3) + 2}:{String(Math.floor(Math.random() * 60)).padStart(2, '0')}</div>
                  </div>
                </div>
                
                <TrackCard track={track} emotion={emotion} />
              </div>
            ))}
          </div>
          
          {/* Album Credits */}
          <div className="mt-12 pt-8 border-t-4 border-orange-300 text-center">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-6 rounded-xl border-2 border-orange-300 transform rotate-1 inline-block">
              <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
                <div className="mb-2">PRODUCED BY: AI EMOTION ANALYZER</div>
                <div className="mb-2">MIXED BY: MUSIC RECOMMENDATION ENGINE</div>
                <div className="mb-2">MASTERED BY: EMOTIONAL MUSIC PROJECT</div>
                <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Cassette Tape Style */}
        <div className="text-center space-y-6 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={searchTracks}
              className="px-12 py-5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-orange-300"
            >
              <span className="relative z-10">🔄 GET DIFFERENT RECOMMENDATIONS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-amber-300"
            >
              <span className="relative z-10">🤖 AI EMOTIONAL ANALYSIS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {["우울함", "지침", "스트레스"].includes(emotion) && (
            <button
              onClick={handleHealingClick}
              className="px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-green-300"
            >
              <span className="relative z-10">💌 GET EMOTIONAL SUPPORT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          )}
          
          {/* Cassette Tape Footer */}
          <div className="mt-8 inline-block bg-gradient-to-r from-orange-200 to-amber-200 p-4 rounded-xl border-2 border-orange-300 transform -rotate-1">
            <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
              <div className="flex items-center space-x-4">
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

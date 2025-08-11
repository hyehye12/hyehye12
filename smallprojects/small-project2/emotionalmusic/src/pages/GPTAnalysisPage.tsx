import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDiaryAnalysis } from "../hooks/useGPTAnalysis";
import { getCardStyle } from "../utils/buttonStyles";

export default function GPTAnalysisPage() {
  const { diaryText } = useParams<{ diaryText: string }>();
  const navigate = useNavigate();
  const decodedDiaryText = diaryText ? decodeURIComponent(diaryText) : '';
  const { analysis, loading, error, retry } = useDiaryAnalysis(decodedDiaryText);

  const handleBack = () => {
    navigate("/");
  };

  const handleRetry = () => {
    retry();
  };

  if (!diaryText) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 flex items-center justify-center p-6 font-mono relative overflow-hidden">
        {/* Retro Cassette Tape Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-24 bg-orange-400 rounded-lg transform rotate-12 shadow-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-20 bg-orange-300 rounded-lg transform -rotate-6 shadow-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-28 h-16 bg-orange-500 rounded-lg transform rotate-45 shadow-2xl"></div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl p-16 max-w-lg w-full text-center relative overflow-hidden rounded-3xl border-4 border-orange-300 transform rotate-1">
          {/* Cassette Tape Design Elements */}
          <div className="absolute top-6 left-6 w-20 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform -rotate-3 opacity-30 shadow-lg"></div>
          <div className="absolute bottom-6 right-6 w-16 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform rotate-6 opacity-30 shadow-lg"></div>
          
          {/* Cassette Tape Holes */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
            <div className="w-6 h-6 bg-orange-200 rounded-full border-2 border-orange-400"></div>
            <div className="w-6 h-6 bg-orange-200 rounded-full border-2 border-orange-400"></div>
          </div>
          
          <motion.div
            className="mb-8"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl relative border-4 border-white">
              🎵
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-300 rounded-full animate-pulse border-2 border-white"></div>
            </div>
          </motion.div>
          
          <h2 className="text-4xl font-black text-orange-900 mb-4 tracking-widest uppercase font-mono">
            SIDE A
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto mb-6"></div>
          <p className="text-orange-700 mb-8 leading-relaxed font-bold text-xl tracking-wide">
            AI가 당신의 이야기를 분석하고 있어요
          </p>
          
          {/* Cassette Tape Spinning Animation */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex space-x-3">
              <motion.div
                className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-lg"
                animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="w-4 h-4 bg-amber-500 rounded-full border-2 border-white shadow-lg"
                animate={{ scale: [1, 1.5, 1], rotate: [0, -180, -360] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="w-4 h-4 bg-orange-400 rounded-full border-2 border-white shadow-lg"
                animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
          
          {/* Cassette Label */}
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-4 rounded-lg border-2 border-orange-300 transform -rotate-1">
            <div className="text-xs text-orange-800 font-bold tracking-widest uppercase">
              <div className="flex justify-between mb-1">
                <span>TRACK 01</span>
                <span>3:45</span>
              </div>
              <div className="text-center font-black text-orange-900">ANALYZING...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 flex items-center justify-center p-6 font-mono relative overflow-hidden">
        {/* Retro Cassette Tape Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-24 bg-orange-400 rounded-lg transform rotate-12 shadow-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-20 bg-orange-300 rounded-lg transform -rotate-6 shadow-2xl"></div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm shadow-2xl p-12 max-w-lg w-full text-center relative overflow-hidden rounded-3xl border-4 border-orange-300 transform -rotate-1">
          <div className="absolute top-6 left-6 w-20 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform -rotate-3 opacity-30 shadow-lg"></div>
          <div className="absolute bottom-6 right-6 w-16 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform rotate-6 opacity-30 shadow-lg"></div>
          
          <div className="text-8xl mb-8 animate-bounce-gentle transform rotate-12">💿</div>
          <h2 className="text-4xl font-black text-orange-900 mb-6 tracking-widest uppercase">ERROR</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-orange-700 mb-10 text-xl font-bold tracking-wide">{error}</p>
          
          {/* Cassette Tape Style Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleRetry}
              className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-orange-300"
            >
              <span className="relative z-10">🔄 RETRY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleBack}
              className="px-10 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 border-4 border-gray-400"
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!analysis) {
    return <Navigate to="/" replace />;
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
              
              <h1 className="text-6xl font-black text-orange-900 tracking-widest uppercase mb-4 relative z-10">
                AI 감정 분석
              </h1>
              <div className="flex items-center justify-center space-x-8 text-orange-600 mb-4">
                <span className="text-lg font-black tracking-widest uppercase">SIDE A</span>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-amber-500"></div>
                <span className="text-lg font-black tracking-widest uppercase">SIDE B</span>
              </div>
              
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
                    <span>4:20</span>
                  </div>
                  <div className="text-center font-black text-orange-900">EMOTION ANALYSIS</div>
                </div>
              </div>
            </div>
            
            <div className="w-40"></div>
          </div>
        </div>
      </div>

      {/* Main Content - Album Insert Style */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-sm shadow-3xl p-12 mb-12 relative overflow-hidden rounded-3xl border-4 border-orange-300 transform rotate-1"
        >
          {/* Cassette Tape Design Elements */}
          <div className="absolute top-8 right-8 w-24 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-6 opacity-20 shadow-lg"></div>
          <div className="absolute bottom-8 left-8 w-20 h-12 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-8 opacity-20 shadow-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg transform rotate-45 opacity-10 shadow-lg"></div>
          
          {/* Track List Header */}
          <div className="text-center mb-12 border-b-4 border-orange-300 pb-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gradient-to-r from-orange-400 to-amber-500"></div>
            <h2 className="text-5xl font-black text-orange-900 tracking-widest uppercase mb-4">
              TRACK LIST
            </h2>
            <div className="flex items-center justify-center space-x-8 text-orange-600 text-lg font-black tracking-widest uppercase">
              <span>SIDE A: ORIGINAL STORY</span>
              <span className="text-2xl">•</span>
              <span>SIDE B: AI ANALYSIS</span>
            </div>
            
            {/* Cassette Tape Label */}
            <div className="mt-6 inline-block bg-gradient-to-r from-orange-200 to-amber-200 p-4 rounded-lg border-2 border-orange-300 transform -rotate-1">
              <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
                <div className="flex justify-between mb-2">
                  <span>DURATION: 4:20</span>
                  <span>YEAR: 2024</span>
                </div>
                <div className="text-center font-black text-orange-900">EMOTIONAL MUSIC PROJECT</div>
              </div>
            </div>
          </div>
          
          {/* Side A: Original Diary */}
          <div className="mb-12 p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border-4 border-orange-300 relative transform -rotate-1">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-3 border-white shadow-lg"></div>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-black text-2xl mr-4 border-4 border-white shadow-lg">A</div>
              <h3 className="text-3xl font-black text-orange-900 tracking-widest uppercase">ORIGINAL STORY</h3>
            </div>
            
            <div className="bg-white/80 p-6 rounded-xl border-2 border-orange-200 relative">
              <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-60"></div>
              <p className="text-orange-800 leading-relaxed font-bold text-xl tracking-wide">
                {decodeURIComponent(diaryText)}
              </p>
            </div>
            
            {/* Track Info Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3">
              <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                <div className="text-center">TRACK A1</div>
                <div className="text-center">2:15</div>
              </div>
            </div>
          </div>

          {/* Side B: Analysis Results */}
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-orange-900 tracking-widest uppercase text-center mb-8 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-black text-2xl mr-4 border-4 border-white shadow-lg">B</div>
              AI ANALYSIS RESULTS
            </h3>
            
            {/* Detected Emotion */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border-4 border-amber-300 relative transform rotate-1">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full border-3 border-white shadow-lg"></div>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">🎭</span>
                <h4 className="text-2xl font-black text-amber-900 tracking-widest uppercase">DETECTED EMOTION</h4>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border-2 border-amber-200 relative">
                <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-60"></div>
                <p className="text-amber-800 leading-relaxed font-black text-2xl tracking-wide">
                  {analysis.emotion}
                </p>
              </div>
              
              {/* Track Info Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-200 to-yellow-200 p-2 rounded-lg border-2 border-amber-300 transform -rotate-3">
                <div className="text-xs text-amber-800 font-black tracking-widest uppercase">
                  <div className="text-center">TRACK B1</div>
                  <div className="text-center">0:45</div>
                </div>
              </div>
            </div>

            {/* Emotional Analysis */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border-4 border-orange-300 relative transform -rotate-1">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-red-300 to-orange-400 rounded-full border-3 border-white shadow-lg"></div>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">💭</span>
                <h4 className="text-2xl font-black text-orange-900 tracking-widest uppercase">EMOTIONAL ANALYSIS</h4>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border-2 border-orange-200 relative">
                <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-60"></div>
                <p className="text-orange-800 leading-relaxed text-xl tracking-wide font-bold">
                  {analysis.analysis}
                </p>
              </div>
              
              {/* Track Info Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-red-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3">
                <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                  <div className="text-center">TRACK B2</div>
                  <div className="text-center">1:20</div>
                </div>
              </div>
            </div>

            {/* Advice */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border-4 border-blue-300 relative transform -rotate-1">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-indigo-300 to-blue-400 rounded-full border-3 border-white shadow-lg"></div>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">💡</span>
                <h4 className="text-2xl font-black text-blue-900 tracking-widest uppercase">PERSONAL ADVICE</h4>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border-2 border-blue-200 relative">
                <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-60"></div>
                <p className="text-blue-800 leading-relaxed text-xl tracking-wide font-bold">
                  {analysis.advice}
                </p>
              </div>
              
              {/* Track Info Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-200 to-indigo-200 p-2 rounded-lg border-2 border-blue-300 transform -rotate-3">
                <div className="text-xs text-blue-800 font-black tracking-widest uppercase">
                  <div className="text-center">TRACK B3</div>
                  <div className="text-center">1:15</div>
                </div>
              </div>
            </div>

            {/* Encouragement */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-4 border-green-300 relative transform -rotate-1">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-emerald-300 to-green-400 rounded-full border-3 border-white shadow-lg"></div>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">💝</span>
                <h4 className="text-2xl font-black text-green-900 tracking-widest uppercase">ENCOURAGEMENT</h4>
              </div>
              <div className="bg-white/80 p-6 rounded-xl border-2 border-green-200 relative">
                <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-60"></div>
                <p className="text-green-800 leading-relaxed text-xl tracking-wide font-bold">
                  {analysis.encouragement}
                </p>
              </div>
              
              {/* Track Info Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-200 to-emerald-200 p-2 rounded-lg border-2 border-green-300 transform rotate-3">
                <div className="text-xs text-green-800 font-black tracking-widest uppercase">
                  <div className="text-center">TRACK B4</div>
                  <div className="text-center">0:40</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Album Credits */}
          <div className="mt-12 pt-8 border-t-4 border-orange-300 text-center">
            <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-6 rounded-xl border-2 border-orange-300 transform rotate-1 inline-block">
              <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
                <div className="mb-2">PRODUCED BY: AI EMOTION ANALYZER</div>
                <div className="mb-2">MIXED BY: GPT-4 TECHNOLOGY</div>
                <div className="mb-2">MASTERED BY: EMOTIONAL MUSIC PROJECT</div>
                <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons - Cassette Tape Style */}
        <div className="text-center space-y-6 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleRetry}
              className="px-12 py-5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-orange-300"
            >
              <span className="relative z-10">🔄 RE-ANALYZE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleBack}
              className="px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-amber-300"
            >
              <span className="relative z-10">📝 NEW STORY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
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
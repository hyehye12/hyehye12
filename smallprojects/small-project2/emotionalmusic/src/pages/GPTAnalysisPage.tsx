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
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-8 font-sans relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-24 bg-neon-lime-200 rounded-3xl transform rotate-12 shadow-elegant"></div>
          <div className="absolute bottom-20 right-20 w-32 h-20 bg-vintage-300 rounded-3xl transform -rotate-6 shadow-elegant"></div>
          <div className="absolute top-1/2 left-1/2 w-28 h-16 bg-neon-lime-100 rounded-3xl transform rotate-45 shadow-elegant"></div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-16 max-w-lg w-full text-center relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
          {/* Subtle Design Elements */}
          <div className="absolute top-8 left-8 w-24 h-16 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform -rotate-3 opacity-30 shadow-lg"></div>
          <div className="absolute bottom-8 right-8 w-20 h-12 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform rotate-6 opacity-30 shadow-lg"></div>
          
          {/* Decorative Dots */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
            <div className="w-6 h-6 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300"></div>
            <div className="w-6 h-6 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300"></div>
          </div>
          
          <motion.div
            className="mb-10"
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
            <div className="w-24 h-24 mx-auto bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 rounded-full flex items-center justify-center text-white text-4xl shadow-elegant relative border-2 border-white">
              🎵
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-neon-lime-300 rounded-full animate-pulse border-2 border-white"></div>
            </div>
          </motion.div>
          
          <h2 className="font-serif text-4xl font-light text-gray-900 mb-6 tracking-wide">
            AI 분석 중
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-neon-lime-400 to-vintage-500 mx-auto mb-8"></div>
          <p className="text-gray-700 mb-10 leading-relaxed font-medium text-xl tracking-wide">
            AI가 당신의 이야기를 분석하고 있어요
          </p>
          
          {/* Spinning Animation */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex space-x-4">
              <motion.div
                className="w-4 h-4 bg-neon-lime-500 rounded-full border-2 border-white shadow-lg"
                animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="w-4 h-4 bg-vintage-500 rounded-full border-2 border-white shadow-lg"
                animate={{ scale: [1, 1.5, 1], rotate: [0, -180, -360] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="w-4 h-4 bg-neon-lime-400 rounded-full border-2 border-white shadow-lg"
                animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
          
          {/* Info Badge */}
          <div className="bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-4 rounded-2xl border border-neon-lime-200 transform -rotate-1">
            <div className="text-xs text-gray-700 font-medium tracking-wide">
              <div className="text-center font-serif">ANALYZING...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-8 font-sans relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-24 bg-neon-lime-200 rounded-3xl transform rotate-12 shadow-elegant"></div>
          <div className="absolute bottom-20 right-20 w-32 h-20 bg-vintage-300 rounded-3xl transform -rotate-6 shadow-elegant"></div>
        </div>
        
        <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-16 max-w-lg w-full text-center relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
          <div className="absolute top-8 left-8 w-24 h-16 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform -rotate-3 opacity-30 shadow-lg"></div>
          <div className="absolute bottom-8 right-8 w-20 h-12 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform rotate-6 opacity-30 shadow-lg"></div>
          
          <div className="text-8xl mb-10 animate-bounce-gentle transform rotate-12">💿</div>
          <h2 className="font-serif text-4xl font-light text-gray-900 mb-8 tracking-wide">오류 발생</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-neon-lime-500 mx-auto mb-10"></div>
          <p className="text-gray-700 mb-12 text-xl font-medium tracking-wide">{error}</p>
          
          {/* Clean Style Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button
              onClick={handleRetry}
              className="px-12 py-5 bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium tracking-wide transform hover:scale-105 relative overflow-hidden group border border-neon-lime-400"
            >
              <span className="relative z-10">🔄 다시 시도</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-600 to-neon-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleBack}
              className="px-12 py-5 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-3xl shadow-elegant hover:shadow-elegant transition-all duration-300 font-medium tracking-wide transform hover:scale-105 border border-gray-400"
            >
              돌아가기
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
              <span className="relative z-10">← 돌아가기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-100 to-vintage-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {/* Main Title with Clean Aesthetic */}
            <div className="text-center relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute -bottom-8 right-1/2 transform translate-x-1/2 w-28 h-16 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-6 opacity-20"></div>
              
              <h1 className="font-serif text-6xl font-light text-gray-900 tracking-wide mb-6 relative z-10">
                AI 감정 분석
              </h1>
              <div className="flex items-center justify-center space-x-8 text-gray-600 mb-6">
                <span className="text-lg font-medium tracking-wide">원본 이야기</span>
                <div className="w-12 h-1 bg-gradient-to-r from-neon-lime-400 to-vintage-500"></div>
                <span className="text-lg font-medium tracking-wide">AI 분석</span>
              </div>
              
              {/* Decorative Dots */}
              <div className="flex items-center justify-center space-x-12 mb-6">
                <div className="w-8 h-8 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300 shadow-lg"></div>
                <div className="w-8 h-8 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300 shadow-lg"></div>
              </div>
              
              {/* Info Badge */}
              <div className="bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-4 rounded-2xl border border-neon-lime-200 transform rotate-1 inline-block">
                <div className="text-sm text-gray-700 font-medium tracking-wide">
                  <div className="text-center font-serif">EMOTION ANALYSIS</div>
                </div>
              </div>
            </div>
            
            <div className="w-40"></div>
          </div>
        </div>
      </div>

      {/* Main Content - Clean Card Style */}
      <div className="max-w-6xl mx-auto px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-sm shadow-elegant p-16 mb-16 relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500"
        >
          {/* Subtle Design Elements */}
          <div className="absolute top-12 right-12 w-24 h-16 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-6 opacity-20 shadow-lg"></div>
          <div className="absolute bottom-12 left-12 w-20 h-12 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-8 opacity-20 shadow-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-br from-neon-lime-100 to-vintage-200 rounded-3xl transform rotate-45 opacity-10 shadow-lg"></div>
          
          {/* Track List Header */}
          <div className="text-center mb-16 border-b border-gray-200 pb-12 relative">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-neon-lime-400 to-vintage-500"></div>
            <h2 className="font-serif text-5xl font-light text-gray-900 tracking-wide mb-6">
              분석 결과
            </h2>
            <div className="flex items-center justify-center space-x-10 text-gray-600 text-lg font-medium tracking-wide">
              <span>원본 이야기</span>
              <span className="text-2xl">•</span>
              <span>AI 분석</span>
            </div>
            
            {/* Info Badge */}
            <div className="mt-8 inline-block bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-6 rounded-2xl border border-neon-lime-200 transform -rotate-1">
              <div className="text-sm text-gray-700 font-medium tracking-wide">
                <div className="text-center font-serif">EMOTIONAL MUSIC PROJECT</div>
              </div>
            </div>
          </div>
          
          {/* Side A: Original Diary */}
          <div className="mb-16 p-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl border border-gray-200 relative transform hover:scale-100.5 transition-all duration-500">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
            
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-neon-lime-500 to-neon-lime-600 rounded-full flex items-center justify-center text-white font-medium text-2xl mr-6 border-2 border-white shadow-lg">A</div>
              <h3 className="font-serif text-4xl font-light text-gray-900 tracking-wide">원본 이야기</h3>
            </div>
            
            <div className="bg-white/80 p-8 rounded-3xl border border-gray-200 relative">
              <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full opacity-60"></div>
              <p className="text-gray-800 leading-relaxed font-medium text-xl tracking-wide">
                {decodeURIComponent(diaryText)}
              </p>
            </div>
            
            {/* Info Badge */}
            <div className="absolute top-6 right-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform rotate-3">
              <div className="text-xs text-gray-700 font-medium tracking-wide">
                <div className="text-center font-serif">TRACK A1</div>
              </div>
            </div>
          </div>

          {/* Side B: Analysis Results */}
          <div className="space-y-12">
            <h3 className="font-serif text-4xl font-light text-gray-900 tracking-wide text-center mb-12 flex items-center justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-vintage-500 to-vintage-600 rounded-full flex items-center justify-center text-white font-medium text-2xl mr-6 border-2 border-white shadow-lg">B</div>
              AI 분석 결과
            </h3>
            
            {/* Detected Emotion */}
            <div className="bg-gradient-to-r from-neon-lime-50 to-neon-lime-100 p-12 rounded-3xl border border-neon-lime-200 relative transform hover:scale-100.5 transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-neon-lime-200 to-vintage-300 rounded-full border-2 border-white shadow-lg"></div>
              
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-6">🎭</span>
                <h4 className="font-serif text-3xl font-light text-gray-900 tracking-wide">감지된 감정</h4>
              </div>
              <div className="bg-white/80 p-8 rounded-3xl border border-neon-lime-200 relative">
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full opacity-60"></div>
                <p className="text-gray-800 leading-relaxed font-medium text-2xl tracking-wide">
                  {analysis.emotion}
                </p>
              </div>
              
              {/* Info Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform -rotate-3">
                <div className="text-xs text-gray-700 font-medium tracking-wide">
                  <div className="text-center font-serif">TRACK B1</div>
                </div>
              </div>
            </div>

            {/* Emotional Analysis */}
            <div className="bg-gradient-to-r from-vintage-50 to-vintage-100 p-12 rounded-3xl border border-vintage-200 relative transform hover:scale-100.5 transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-vintage-200 to-neon-lime-300 rounded-full border-2 border-white shadow-lg"></div>
              
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-6">💭</span>
                <h4 className="font-serif text-3xl font-light text-gray-900 tracking-wide">감정 분석</h4>
              </div>
              <div className="bg-white/80 p-8 rounded-3xl border border-vintage-200 relative">
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full opacity-60"></div>
                <p className="text-gray-800 leading-relaxed text-xl tracking-wide font-medium">
                  {analysis.analysis}
                </p>
              </div>
              
              {/* Info Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-vintage-100 to-neon-lime-100 p-3 rounded-2xl border border-vintage-200 transform rotate-3">
                <div className="text-xs text-gray-700 font-medium tracking-wide">
                  <div className="text-center font-serif">TRACK B2</div>
                </div>
              </div>
            </div>

            {/* Advice */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-3xl border border-blue-200 relative transform hover:scale-100.5 transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-indigo-200 to-blue-300 rounded-full border-2 border-white shadow-lg"></div>
              
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-6">💡</span>
                <h4 className="font-serif text-3xl font-light text-gray-900 tracking-wide">개인 조언</h4>
              </div>
              <div className="bg-white/80 p-8 rounded-3xl border border-blue-200 relative">
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full opacity-60"></div>
                <p className="text-gray-800 leading-relaxed text-xl tracking-wide font-medium">
                  {analysis.advice}
                </p>
              </div>
              
              {/* Info Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-2xl border border-blue-200 transform -rotate-3">
                <div className="text-xs text-gray-700 font-medium tracking-wide">
                  <div className="text-center font-serif">TRACK B3</div>
                </div>
              </div>
            </div>

            {/* Encouragement */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-12 rounded-3xl border border-green-200 relative transform hover:scale-100.5 transition-all duration-500">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-emerald-200 to-green-300 rounded-full border-2 border-white shadow-lg"></div>
              
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-6">💝</span>
                <h4 className="font-serif text-3xl font-light text-gray-900 tracking-wide">격려</h4>
              </div>
              <div className="bg-white/80 p-8 rounded-3xl border border-green-200 relative">
                <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full opacity-60"></div>
                <p className="text-gray-800 leading-relaxed text-xl tracking-wide font-medium">
                  {analysis.encouragement}
                </p>
              </div>
              
              {/* Info Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-2xl border border-green-200 transform rotate-3">
                <div className="text-xs text-gray-700 font-medium tracking-wide">
                  <div className="text-center font-serif">TRACK B4</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Credits */}
          <div className="mt-16 pt-12 border-t border-gray-200 text-center">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-2xl border border-gray-200 transform rotate-1 inline-block">
              <div className="text-sm text-gray-600 font-medium tracking-wide">
                <div className="mb-3">PRODUCED BY: AI EMOTION ANALYZER</div>
                <div className="mb-3">MIXED BY: GPT-4 TECHNOLOGY</div>
                <div className="mb-3">MASTERED BY: EMOTIONAL MUSIC PROJECT</div>
                <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons - Clean Style */}
        <div className="text-center space-y-8 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button
              onClick={handleRetry}
              className="px-14 py-6 bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium tracking-wide transform hover:scale-105 relative overflow-hidden group border border-neon-lime-400"
            >
              <span className="relative z-10">🔄 다시 분석</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-600 to-neon-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleBack}
              className="px-14 py-6 bg-gradient-to-r from-vintage-500 to-vintage-600 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium tracking-wide transform hover:scale-105 relative overflow-hidden group border border-vintage-400"
            >
              <span className="relative z-10">📝 새 이야기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-vintage-600 to-vintage-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
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
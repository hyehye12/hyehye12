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
      <div className="min-h-screen bg-gradient-to-br from-kitsch-pink-50 via-kitsch-purple-50 to-kitsch-blue-50 flex items-center justify-center p-6 font-sans relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-kitsch-pattern opacity-20"></div>
        
        {/* Floating Kitsch Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-br from-kitsch-purple-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
        
        <div className="kitsch-card shadow-kitsch p-12 max-w-md w-full text-center animate-scale-in relative overflow-hidden">
          <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-kitsch-pink-200 to-kitsch-purple-200 rounded-full opacity-60 animate-kitsch-float"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-kitsch-blue-200 to-kitsch-pink-200 rounded-full opacity-60 animate-kitsch-pulse"></div>
          
          <motion.div
            className="mb-8"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-kitsch-pink-500 to-kitsch-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-kitsch relative">
              🤖
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-kitsch-blue-300/60 rounded-full animate-kitsch-pulse"></div>
            </div>
          </motion.div>
          
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            AI가 당신의 이야기를 분석하고 있어요
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            당신의 하루를 깊이 분석하여 맞춤형 조언과 통찰을 제공하고 있어요.
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <div className="flex space-x-1">
              <motion.div
                className="w-2 h-2 bg-kitsch-pink-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-kitsch-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-kitsch-blue-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-kitsch-pink-50 via-kitsch-purple-50 to-kitsch-blue-50 flex items-center justify-center p-6 font-sans relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-kitsch-pattern opacity-20"></div>
        
        {/* Floating Kitsch Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-br from-kitsch-purple-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
        
        <div className="kitsch-card shadow-kitsch p-8 max-w-md w-full text-center animate-scale-in relative overflow-hidden">
          <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-kitsch-pink-200 to-kitsch-purple-200 rounded-full opacity-60 animate-kitsch-float"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-kitsch-blue-200 to-kitsch-pink-200 rounded-full opacity-60 animate-kitsch-pulse"></div>
          
          <div className="text-6xl mb-6 animate-bounce-gentle">❌</div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">분석 오류</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="px-8 py-3 bg-gradient-to-r from-kitsch-pink-500 to-kitsch-purple-500 text-white rounded-xl shadow-kitsch hover:shadow-kitsch-glow transition-all duration-300 font-medium transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">다시 시도</span>
              <div className="absolute inset-0 bg-gradient-to-r from-kitsch-purple-500 to-kitsch-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleBack}
              className="px-8 py-3 bg-gray-500 text-white rounded-xl shadow-kitsch hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
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
    <div className="min-h-screen bg-gradient-to-br from-kitsch-pink-50 via-kitsch-purple-50 to-kitsch-blue-50 font-sans relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-kitsch-pattern opacity-20"></div>
      
      {/* Floating Kitsch Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-float"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-br from-kitsch-purple-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-br from-kitsch-blue-300 to-kitsch-pink-300 rounded-full opacity-60 animate-kitsch-float"></div>
      <div className="absolute top-60 left-1/2 w-2 h-2 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kitsch-pink-500/10 to-kitsch-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handleBack}
              className="flex items-center px-6 py-3 kitsch-card shadow-kitsch hover:shadow-kitsch-glow transition-all duration-300 font-medium text-gray-700 hover:text-gray-900 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">← 돌아가기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-kitsch-pink-100 to-kitsch-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <h1 className="text-4xl font-serif font-bold text-center text-gray-900">
              AI 감정 분석
            </h1>
            <div className="w-32"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="kitsch-card shadow-kitsch p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-kitsch-pink-200 to-kitsch-purple-200 rounded-full opacity-60 animate-kitsch-float"></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-kitsch-blue-200 to-kitsch-pink-200 rounded-full opacity-60 animate-kitsch-pulse"></div>
          
          {/* Original Diary */}
          <div className="mb-8 p-6 bg-gradient-to-r from-kitsch-pink-50 to-kitsch-blue-50 rounded-xl border border-white/50 relative">
            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">📝 당신의 이야기</h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              {decodeURIComponent(diaryText)}
            </p>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
          </div>

          {/* Analysis Results */}
          <div className="space-y-8">
            {/* Detected Emotion */}
            <div className="bg-gradient-to-r from-kitsch-yellow-50 to-kitsch-orange-50 p-6 rounded-xl border border-white/50 relative">
              <h3 className="text-xl font-serif font-semibold mb-4 text-yellow-900">🎭 감지된 감정</h3>
              <p className="text-gray-700 leading-relaxed font-semibold text-lg">
                {analysis.emotion}
              </p>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-kitsch-yellow-300 to-kitsch-orange-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
            </div>

            {/* Emotional Analysis */}
            <div className="bg-gradient-to-r from-kitsch-pink-50 to-kitsch-purple-50 p-6 rounded-xl border border-white/50 relative">
              <h3 className="text-xl font-serif font-semibold mb-4 text-kitsch-pink-900">💭 감정 분석</h3>
              <p className="text-gray-700 leading-relaxed">
                {analysis.analysis}
              </p>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-float"></div>
            </div>

            {/* Advice */}
            <div className="bg-gradient-to-r from-kitsch-blue-50 to-kitsch-purple-50 p-6 rounded-xl border border-white/50 relative">
              <h3 className="text-xl font-serif font-semibold mb-4 text-kitsch-blue-900">💡 개인 조언</h3>
              <p className="text-gray-700 leading-relaxed">
                {analysis.advice}
              </p>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-kitsch-blue-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
            </div>

            {/* Encouragement */}
            <div className="bg-gradient-to-r from-kitsch-green-50 to-kitsch-blue-50 p-6 rounded-xl border border-white/50 relative">
              <h3 className="text-xl font-serif font-semibold mb-4 text-kitsch-green-900">💝 격려</h3>
              <p className="text-gray-700 leading-relaxed">
                {analysis.encouragement}
              </p>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-kitsch-green-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-float"></div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="text-center space-y-4 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="px-8 py-4 bg-gradient-to-r from-kitsch-pink-500 to-kitsch-purple-500 text-white rounded-xl shadow-kitsch hover:shadow-kitsch-glow transition-all duration-300 font-medium transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">🔄 다시 분석하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-kitsch-purple-500 to-kitsch-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={handleBack}
              className="px-8 py-4 bg-gradient-to-r from-kitsch-blue-500 to-kitsch-purple-600 text-white rounded-xl shadow-kitsch hover:shadow-kitsch-glow transition-all duration-300 font-medium transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10">새 이야기 작성하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-kitsch-purple-600 to-kitsch-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
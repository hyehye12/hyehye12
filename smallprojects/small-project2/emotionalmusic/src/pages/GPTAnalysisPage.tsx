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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white rounded-2xl shadow-soft p-12 max-w-md w-full text-center animate-scale-in">
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
            <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl shadow-medium">
              🤖
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
                className="w-2 h-2 bg-primary-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
              />
              <motion.div
                className="w-2 h-2 bg-primary-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="w-2 h-2 bg-primary-500 rounded-full"
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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-6 font-sans">
        <div className="bg-white rounded-2xl shadow-soft p-8 max-w-md w-full text-center animate-scale-in">
          <div className="text-6xl mb-6 animate-bounce-gentle">❌</div>
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">분석 오류</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
            >
              다시 시도
            </button>
            <button
              onClick={handleBack}
              className="px-8 py-3 bg-gray-500 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
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
              ← 돌아가기
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
          className={`${getCardStyle()} p-8 mb-8`}
        >
          {/* Original Diary */}
          <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
            <h3 className="text-xl font-serif font-semibold mb-4 text-gray-900">📝 당신의 이야기</h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              {decodeURIComponent(diaryText)}
            </p>
          </div>

          {/* Analysis Results */}
          <div className="space-y-8">
            {/* Detected Emotion */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
              <h3 className="text-xl font-serif font-semibold mb-4 text-yellow-900">🎭 감지된 감정</h3>
              <p className="text-gray-700 leading-relaxed font-semibold text-lg">
                {analysis.emotion}
              </p>
            </div>

            {/* Emotional Analysis */}
            <div className="bg-gradient-to-r from-primary-50 to-pink-50 p-6 rounded-xl border border-primary-100">
              <h3 className="text-xl font-serif font-semibold mb-4 text-primary-900">💭 감정 분석</h3>
              <p className="text-gray-700 leading-relaxed">
                {analysis.analysis}
              </p>
            </div>

            {/* Advice */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100">
              <h3 className="text-xl font-serif font-semibold mb-4 text-blue-900">💡 개인 조언</h3>
              <p className="text-gray-700 leading-relaxed">
                {analysis.advice}
              </p>
            </div>

            {/* Encouragement */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-serif font-semibold mb-4 text-green-900">💝 격려</h3>
              <p className="text-gray-700 leading-relaxed">
                {analysis.encouragement}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="text-center space-y-4 animate-slide-up">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
            >
              🔄 다시 분석하기
            </button>
            <button
              onClick={handleBack}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
            >
              새 이야기 작성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
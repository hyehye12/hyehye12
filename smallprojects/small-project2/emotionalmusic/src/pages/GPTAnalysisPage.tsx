import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDiaryAnalysis } from "../hooks/useGPTAnalysis";

export default function GPTAnalysisPage() {
  const { diaryText } = useParams<{ diaryText: string }>();
  const navigate = useNavigate();
  const decodedDiaryText = diaryText ? decodeURIComponent(diaryText) : "";
  const { analysis, loading, error, retry } =
    useDiaryAnalysis(decodedDiaryText);

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
      <div className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
        {/* Organic curved background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute h-64 transform rounded-full top-20 left-20 w-96 bg-gradient-to-br from-blue-200 to-blue-300 rotate-12 blur-3xl"></div>
          <div className="absolute h-48 transform rounded-full bottom-20 right-20 w-72 bg-gradient-to-br from-blue-100 to-blue-200 -rotate-6 blur-2xl"></div>
          <div className="absolute w-64 h-40 transform rotate-45 rounded-full top-60 left-1/2 bg-gradient-to-br from-blue-300 to-blue-400 blur-3xl"></div>
        </div>

        <div className="w-full max-w-lg p-12 text-center modern-card">
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
            <div className="relative flex items-center justify-center w-20 h-20 mx-auto text-3xl text-white border-2 border-white rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-blue-500">
              🤖
              <div className="absolute w-4 h-4 bg-blue-300 border-2 border-white rounded-full -top-2 -right-2 animate-pulse"></div>
            </div>
          </motion.div>

          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            AI 분석 진행 중
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            AI가 당신의 이야기를 분석 중입니다...
          </p>

          {/* Spinning Animation */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex space-x-3">
              <motion.div
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-3 h-3 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <motion.div
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              />
            </div>
          </div>

          {/* Info */}
          <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-xl">
            <div className="text-sm font-medium text-gray-600">분석 중...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex items-center justify-center min-h-screen p-8 overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
        {/* Organic curved background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute h-64 transform rounded-full top-20 left-20 w-96 bg-gradient-to-br from-blue-200 to-blue-300 rotate-12 blur-3xl"></div>
          <div className="absolute h-48 transform rounded-full bottom-20 right-20 w-72 bg-gradient-to-br from-blue-100 to-blue-200 -rotate-6 blur-2xl"></div>
        </div>

        <div className="w-full max-w-lg p-12 text-center modern-card">
          <div className="mb-8 text-6xl">❌</div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">오류 발생</h2>
          <p className="mb-8 text-gray-600">{error}</p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={handleRetry}
              className="px-8 py-3 font-medium soft-button rounded-xl"
            >
              🔄 다시 시도
            </button>
            <button
              onClick={handleBack}
              className="px-8 py-3 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow"
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
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-64 transform rounded-full top-20 left-20 w-96 bg-gradient-to-br from-blue-200 to-blue-300 rotate-12 blur-3xl"></div>
        <div className="absolute h-48 transform rounded-full bottom-20 right-20 w-72 bg-gradient-to-br from-blue-100 to-blue-200 -rotate-6 blur-2xl"></div>
        <div className="absolute w-64 h-40 transform rotate-45 rounded-full top-60 left-1/2 bg-gradient-to-br from-blue-300 to-blue-400 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={handleBack}
              className="px-6 py-3 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow"
            >
              ← 돌아가기
            </button>

            <div className="text-center">
              <h1 className="mb-4 text-5xl font-bold text-gray-900">
                AI 감정 분석
              </h1>
              <div className="flex items-center justify-center space-x-4 text-gray-600">
                <span className="font-medium">원본 이야기</span>
                <div className="w-8 h-0.5 bg-blue-400"></div>
                <span className="font-medium">AI 분석</span>
              </div>
            </div>

            <div className="w-24"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-8 pb-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-12 mb-12 modern-card"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">분석 결과</h2>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <span>원본 이야기</span>
              <span>•</span>
              <span>AI 분석</span>
            </div>
          </div>

          {/* Original Diary */}
          <div className="p-8 mb-12 border border-blue-100 bg-blue-50/30 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-10 h-10 mr-4 font-bold text-white bg-blue-400 rounded-full">
                A
              </div>
              <h3 className="text-xl font-bold text-gray-900">원본 이야기</h3>
            </div>

            <div className="p-6 border border-blue-100 bg-white/80 rounded-xl">
              <p className="text-lg leading-relaxed text-gray-800">
                {decodeURIComponent(diaryText)}
              </p>
            </div>
          </div>

          {/* Analysis Results */}
          <div className="space-y-8">
            <h3 className="flex items-center justify-center mb-8 text-xl font-bold text-center text-gray-900">
              <div className="flex items-center justify-center w-10 h-10 mr-4 font-bold text-white bg-purple-400 rounded-full">
                B
              </div>
              AI 분석 결과
            </h3>

            {/* Detected Emotion */}
            <div className="p-8 border border-blue-100 bg-blue-50/50 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="mr-4 text-3xl">🎭</span>
                <h4 className="text-lg font-bold text-gray-900">감지된 감정</h4>
              </div>
              <div className="p-6 border border-blue-100 bg-white/90 rounded-xl">
                <div className="text-center">
                  <div className="inline-block px-6 py-3 text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                    {analysis.emotion}
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Analysis */}
            <div className="p-8 border border-purple-100 bg-purple-50/50 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="mr-4 text-3xl">💭</span>
                <h4 className="text-lg font-bold text-gray-900">감정 분석</h4>
              </div>
              <div className="p-6 border border-purple-100 bg-white/90 rounded-xl">
                <p className="text-lg leading-relaxed text-gray-800">
                  {analysis.analysis}
                </p>
              </div>
            </div>

            {/* Advice */}
            <div className="p-8 border border-green-100 bg-green-50/50 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="mr-4 text-3xl">💡</span>
                <h4 className="text-lg font-bold text-gray-900">개인 조언</h4>
              </div>
              <div className="p-6 border border-green-100 bg-white/90 rounded-xl">
                <p className="text-lg leading-relaxed text-gray-800">
                  {analysis.advice}
                </p>
              </div>
            </div>

            {/* Encouragement */}
            <div className="p-8 border border-yellow-100 bg-yellow-50/50 rounded-xl">
              <div className="flex items-center mb-4">
                <span className="mr-4 text-3xl">💝</span>
                <h4 className="text-lg font-bold text-gray-900">따뜻한 격려</h4>
              </div>
              <div className="p-6 border border-yellow-100 bg-white/90 rounded-xl">
                <p className="text-lg leading-relaxed text-gray-800">
                  {analysis.encouragement}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-8 mt-12 text-center border-t border-gray-200">
            <div className="inline-block p-6 modern-card">
              <div className="text-sm text-gray-500">
                <div className="mb-2">제공: GPT 3.5 turbo</div>
                <div className="text-xs">© 2025 감정 음악 프로젝트</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="space-y-4 text-center">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={handleRetry}
              className="px-8 py-4 text-lg font-medium soft-button rounded-xl"
            >
              🔄 재분석
            </button>
            <button
              onClick={handleBack}
              className="px-8 py-4 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow"
            >
              📝 새로운 이야기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

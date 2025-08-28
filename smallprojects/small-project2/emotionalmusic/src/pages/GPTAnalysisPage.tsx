import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDiaryAnalysis } from "../hooks/useGPTAnalysis";

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
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 flex items-center justify-center p-8 font-sans relative overflow-hidden">
        {/* Organic curved background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full transform rotate-12 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform -rotate-6 blur-2xl"></div>
          <div className="absolute top-60 left-1/2 w-64 h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full transform rotate-45 blur-3xl"></div>
        </div>
        
        <div className="modern-card p-12 max-w-lg w-full text-center">
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
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl shadow-lg relative border-2 border-white">
              🤖
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-300 rounded-full animate-pulse border-2 border-white"></div>
            </div>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
AI 분석 진행 중
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
AI가 당신의 이야기를 분석 중입니다...
          </p>
          
          {/* Spinning Animation */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex space-x-3">
              <motion.div
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="w-3 h-3 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.div
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
            </div>
          </div>
          
          {/* Info */}
          <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
            <div className="text-sm text-gray-600 font-medium">
분석 중...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 flex items-center justify-center p-8 font-sans relative overflow-hidden">
        {/* Organic curved background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full transform rotate-12 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform -rotate-6 blur-2xl"></div>
        </div>
        
        <div className="modern-card p-12 max-w-lg w-full text-center">
          <div className="text-6xl mb-8">❌</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">오류 발생</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="soft-button px-8 py-3 rounded-xl font-medium"
            >
🔄 다시 시도
            </button>
            <button
              onClick={handleBack}
              className="glass-effect px-8 py-3 rounded-xl font-medium text-gray-700 hover:soft-glow transition-all"
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 font-sans relative overflow-hidden">
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full transform rotate-12 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform -rotate-6 blur-2xl"></div>
        <div className="absolute top-60 left-1/2 w-64 h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full transform rotate-45 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <button
              onClick={handleBack}
              className="glass-effect px-6 py-3 rounded-xl font-medium text-gray-700 hover:soft-glow transition-all"
            >
← 돌아가기
            </button>
            
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
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
      <div className="max-w-4xl mx-auto px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="modern-card p-12 mb-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
분석 결과
            </h2>
            <div className="flex items-center justify-center space-x-6 text-gray-600">
              <span>원본 이야기</span>
              <span>•</span>
              <span>AI 분석</span>
            </div>
          </div>
          
          {/* Original Diary */}
          <div className="mb-12 p-8 bg-blue-50/30 rounded-xl border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">A</div>
              <h3 className="text-xl font-bold text-gray-900">원본 이야기</h3>
            </div>
            
            <div className="bg-white/80 p-6 rounded-xl border border-blue-100">
              <p className="text-gray-800 leading-relaxed text-lg">
                {decodeURIComponent(diaryText)}
              </p>
            </div>
          </div>

          {/* Analysis Results */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-8 flex items-center justify-center">
              <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">B</div>
AI 분석 결과
            </h3>
            
            {/* Detected Emotion */}
            <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🎭</span>
                <h4 className="text-lg font-bold text-gray-900">감지된 감정</h4>
              </div>
              <div className="bg-white/90 p-6 rounded-xl border border-blue-100">
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl text-xl font-bold">
                    {analysis.emotion}
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Analysis */}
            <div className="bg-purple-50/50 p-8 rounded-xl border border-purple-100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">💭</span>
                <h4 className="text-lg font-bold text-gray-900">감정 분석</h4>
              </div>
              <div className="bg-white/90 p-6 rounded-xl border border-purple-100">
                <p className="text-gray-800 leading-relaxed text-lg">
                  {analysis.analysis}
                </p>
              </div>
            </div>

            {/* Advice */}
            <div className="bg-green-50/50 p-8 rounded-xl border border-green-100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">💡</span>
                <h4 className="text-lg font-bold text-gray-900">개인 조언</h4>
              </div>
              <div className="bg-white/90 p-6 rounded-xl border border-green-100">
                <p className="text-gray-800 leading-relaxed text-lg">
                  {analysis.advice}
                </p>
              </div>
            </div>

            {/* Encouragement */}
            <div className="bg-yellow-50/50 p-8 rounded-xl border border-yellow-100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">💝</span>
                <h4 className="text-lg font-bold text-gray-900">따뜻한 격려</h4>
              </div>
              <div className="bg-white/90 p-6 rounded-xl border border-yellow-100">
                <p className="text-gray-800 leading-relaxed text-lg">
                  {analysis.encouragement}
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <div className="modern-card p-6 inline-block">
              <div className="text-sm text-gray-500">
                <div className="mb-2">제공: AI 감정 분석기</div>
                <div className="mb-2">기술: GPT-4</div>
                <div className="text-xs">© 2024 감정 음악 프로젝트</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="soft-button px-8 py-4 rounded-xl font-medium text-lg"
            >
🔄 재분석
            </button>
            <button
              onClick={handleBack}
              className="glass-effect px-8 py-4 rounded-xl font-medium text-gray-700 hover:soft-glow transition-all"
            >
📝 새로운 이야기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { analyzeDiaryWithGPT, getMockGPTAnalysis, GPTAnalysisResult } from "../utils/gptService";

export default function GPTAnalysisPage() {
  const { diaryText } = useParams<{ diaryText: string }>();
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<GPTAnalysisResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (diaryText) {
      performAnalysis();
    }
  }, [diaryText]);

  const performAnalysis = async () => {
    if (!diaryText) return;

    try {
      setLoading(true);
      setError(null);

      // 실제 GPT API 호출 (API 키가 있으면)
      let result: GPTAnalysisResult;
      
      if (process.env.REACT_APP_OPENAI_API_KEY || process.env.REACT_APP_OPEN_AI_API_KEY) {
        result = await analyzeDiaryWithGPT(decodeURIComponent(diaryText));
      } else {
        // API 키가 없으면 모의 응답 사용
        result = getMockGPTAnalysis(decodeURIComponent(diaryText));
        // 실제 API 호출처럼 약간의 지연 추가
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      setAnalysis(result);
    } catch (err) {
      console.error("GPT 분석 오류:", err);
      setError("분석 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleRetry = () => {
    performAnalysis();
  };

  if (!diaryText) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="text-center">
          <motion.div
            className="mb-4 text-4xl"
            animate={{
              y: [-10, 10, -10],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🤖
          </motion.div>
          <h2 className="mb-2 text-2xl font-bold">AI가 일기를 분석하고 있어요...</h2>
          <p className="text-gray-600 mb-4">
            당신의 하루를 깊이 있게 분석해서 조언을 드릴게요!
          </p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="text-center">
          <div className="mb-4 text-4xl">❌</div>
          <h2 className="mb-2 text-2xl font-bold">분석 중 오류가 발생했습니다</h2>
          <p className="mb-4 text-gray-600">{error}</p>
          <div className="space-x-4">
            <button
              onClick={handleRetry}
              className="px-4 py-2 text-white bg-purple-300 rounded-lg hover:bg-purple-600"
            >
              다시 시도하기
            </button>
            <button
              onClick={handleBack}
              className="px-4 py-2 text-gray-600 bg-white rounded-lg hover:bg-gray-50"
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
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50"
          >
            ← 돌아가기
          </button>
          <h1 className="text-2xl font-bold text-center">🤖 AI 감정 분석 결과</h1>
          <div className="w-24"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* 원본 일기 */}
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">📝 당신의 일기</h3>
            <p className="text-gray-600 leading-relaxed">
              {decodeURIComponent(diaryText)}
            </p>
          </div>

          {/* 분석 결과 */}
          <div className="space-y-6">
            {/* 감정 분석 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border-l-4 border-purple-400"
            >
              <h3 className="text-lg font-semibold mb-3 text-purple-700">
                🎯 감정 분석
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {analysis.analysis}
              </p>
              <div className="mt-3">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  {analysis.emotion}
                </span>
              </div>
            </motion.div>

            {/* 조언 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-400"
            >
              <h3 className="text-lg font-semibold mb-3 text-green-700">
                💡 조언
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {analysis.advice}
              </p>
            </motion.div>

            {/* 격려 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border-l-4 border-pink-400"
            >
              <h3 className="text-lg font-semibold mb-3 text-pink-700">
                💝 따뜻한 한마디
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {analysis.encouragement}
              </p>
            </motion.div>
          </div>

          {/* 액션 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center space-x-4"
          >
            <button
              onClick={handleRetry}
              className="px-6 py-2 text-white bg-purple-300 rounded-lg hover:bg-purple-600 transition-colors"
            >
              🔄 다시 분석하기
            </button>
            <button
              onClick={() => navigate(`/result/${encodeURIComponent(analysis.emotion)}`)}
              className="px-6 py-2 text-white bg-blue-400 rounded-lg hover:bg-blue-600 transition-colors"
            >
              🎵 음악 추천받기
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 
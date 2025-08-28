import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeEmotion } from "../utils/emotionAnalyzer";
import { useDiaryStore } from "../hooks/useDiaryStore";
import { useAuth } from "../hooks/useAuth";
import { DiaryService, MoodService } from "../services/authService";
import { EMOTION_SCORES } from "../data/emotionConstants";

export default function MainPage() {
  const [diaryText, setDiaryText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();
  const { setDiaryText: setStoreDiaryText } = useDiaryStore();
  const { user, isLoggedIn, logout } = useAuth();

  const handleSubmit = async () => {
    if (!diaryText.trim()) return;

    setIsAnalyzing(true);

    setStoreDiaryText(diaryText);
    const emotion = analyzeEmotion(diaryText);

    if (isLoggedIn && user) {
      try {
        await DiaryService.saveDiaryEntry({
          userId: user.id,
          content: diaryText,
          emotion: emotion,
        });

        const emotionScore =
          EMOTION_SCORES[emotion as keyof typeof EMOTION_SCORES] || 5;

        await MoodService.saveMoodData({
          emotion: emotion,
          score: emotionScore,
        });
      } catch (error) {
        console.error("데이터 저장 오류:", error);
      }
    }

    setTimeout(() => {
      setIsAnalyzing(false);
      navigate(`/result/${encodeURIComponent(emotion)}`);
    }, 1500);
  };

  const handleGPTAnalysis = () => {
    if (!diaryText.trim()) return;

    setStoreDiaryText(diaryText);
    navigate(`/analysis/${encodeURIComponent(diaryText)}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-64 transform rounded-full top-20 left-20 w-96 bg-gradient-to-br from-blue-200 to-blue-300 rotate-12 blur-3xl"></div>
        <div className="absolute h-48 transform rounded-full bottom-20 right-20 w-72 bg-gradient-to-br from-blue-100 to-blue-200 -rotate-6 blur-2xl"></div>
        <div className="absolute w-64 h-40 transform rotate-45 rounded-full top-60 left-1/2 bg-gradient-to-br from-blue-300 to-blue-400 blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start justify-between mb-16">
            <div className="relative max-w-3xl">
              <h1 className="mb-8 font-bold leading-tight text-gray-900 text-7xl">
                당신의
                <span className="block mt-2 gradient-text">감정 여행</span>
              </h1>

              <p className="max-w-2xl mb-8 text-xl leading-relaxed text-gray-600">
                일상을 이야기하고 AI가 당신의 감정에 맞는 개인화된 음악 경험을
                만들어드립니다.
              </p>

              <div className="flex items-center mb-8 space-x-4">
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-300"></div>
                <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse animation-delay-700"></div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {isLoggedIn ? (
                <>
                  <span className="text-lg text-gray-600">
                    안녕하세요, {user?.name}님!
                  </span>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="px-6 py-3 font-medium soft-button rounded-xl"
                  >
                    📊 대시보드
                  </button>
                  <button
                    onClick={logout}
                    className="px-6 py-3 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow"
                  >
                    🚪 로그아웃
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/auth")}
                    className="px-6 py-3 font-medium soft-button rounded-xl"
                  >
                    🔐 로그인
                  </button>
                  <button
                    onClick={() => navigate("/music-board")}
                    className="px-6 py-3 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow"
                  >
                    🎵 음악 커뮤니티
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl px-8 pb-16 mx-auto">
        {/* Diary Input Section */}
        <div className="p-12 mb-12 modern-card">
          <div className="mb-8">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              당신의 이야기를 들려주세요
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              오늘 하루에 대해 들려주세요 - 기쁨, 도전, 기억에 남는 순간들을요.
              당신의 감정을 분석하고 완벽한 음악을 추천해드릴게요.
            </p>
          </div>

          <textarea
            placeholder="오늘 하루는 어떠셨나요? 기쁜 순간, 도전, 그리고 생각들을 나눠주세요... (3-4줄 권장)"
            value={diaryText}
            onChange={(e) => setDiaryText(e.target.value)}
            className="w-full h-40 px-6 py-6 text-lg text-gray-800 transition-all duration-300 border-2 border-gray-200 resize-none bg-white/60 rounded-xl focus:outline-none focus:ring-4 focus:ring-soft-blue focus:border-soft-blue backdrop-blur-sm"
            maxLength={500}
          />

          <div className="flex items-center justify-between mt-4 mb-8">
            <span className="text-gray-500">{diaryText.length}/500 글자</span>
            {diaryText.length > 0 && (
              <span className="font-medium text-blue-600 animate-pulse">
                ✨ 감정 분석 중...
              </span>
            )}
          </div>

          <div className="space-y-4">
            <button
              onClick={handleSubmit}
              disabled={!diaryText.trim() || isAnalyzing}
              className="w-full py-4 text-lg font-medium soft-button rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 mr-3 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                  감정 분석 중...
                </div>
              ) : (
                "🎵 음악 추천 받기"
              )}
            </button>

            <button
              onClick={handleGPTAnalysis}
              disabled={!diaryText.trim()}
              className="w-full py-4 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🤖 AI 감정 분석 & 조언
            </button>
          </div>
        </div>


        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 modern-card">
            <div className="text-sm text-gray-500">
              <div className="mb-2">POWERED BY: EMOTIONAL MUSIC </div>
              <div className="mb-2">DEVELOPED BY: hyemin</div>
              <div className="text-xs">
                © 2025 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

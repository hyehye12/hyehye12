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
  const { user, isLoggedIn } = useAuth();

  const handleSubmit = async () => {
    if (!diaryText.trim()) return;

    setIsAnalyzing(true);

    // 일기 텍스트를 저장
    setStoreDiaryText(diaryText);

    // 일기 텍스트를 분석하여 감정 추출
    const emotion = analyzeEmotion(diaryText);

    // 로그인된 사용자의 경우 데이터 저장
    if (isLoggedIn && user) {
      try {
        // 일기 저장
        await DiaryService.saveDiaryEntry({
          userId: user.id,
          content: diaryText,
          emotion: emotion,
        });

        // 기분 데이터 저장 (감정 점수는 1-10 사이로 변환)
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

    // 분석 완료 후 결과 페이지로 이동
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate(`/result/${encodeURIComponent(emotion)}`);
    }, 1500);
  };

  const handleGPTAnalysis = () => {
    if (!diaryText.trim()) return;

    // 일기 텍스트를 저장
    setStoreDiaryText(diaryText);
    navigate(`/analysis/${encodeURIComponent(diaryText)}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>

      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="px-12 py-32 mx-auto max-w-7xl">
          <div className="flex items-start justify-between mb-24">
            <div className="relative max-w-4xl animate-elegant-fade">
              {/* Main Title - Serif for elegance */}
              <h1 className="mb-12 font-serif font-light leading-tight tracking-wide text-gray-900 text-8xl">
                당신의
                <span className="block mt-6 font-medium text-neon-lime-600">
                  감정 여정을 디자인하세요
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-3xl mb-12 text-2xl font-light leading-relaxed text-gray-600">
                하루의 이야기를 공유하고 AI가 당신의 감정에 맞는 맞춤형 음악
                경험을 만들어드려요.
              </p>

              {/* Decorative Elements */}
              <div className="flex items-center mb-12 space-x-8">
                <div className="w-4 h-4 rounded-full bg-neon-lime-300 animate-neon-glow"></div>
                <div className="w-3 h-3 rounded-full bg-vintage-400 animate-vintage-float"></div>
                <div className="w-4 h-4 rounded-full bg-neon-lime-300 animate-neon-glow animation-delay-1000"></div>
              </div>
            </div>

            <div className="flex space-x-8 animate-elegant-fade animation-delay-300">
              {isLoggedIn ? (
                <>
                  <span className="text-xl font-light text-gray-600">
                    안녕하세요, {user?.name}님!
                  </span>
                  <button
                    onClick={() => navigate("/dashboard")}
                    className="relative px-10 py-5 overflow-hidden font-medium text-white transition-all duration-500 transform bg-neon-lime-500 rounded-3xl shadow-elegant hover:shadow-card-hover hover:scale-105 hover:-translate-y-2 group"
                  >
                    <span className="relative z-10">📊 대시보드</span>
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-neon-lime-600 group-hover:opacity-100"></div>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate("/auth")}
                  className="relative px-10 py-5 overflow-hidden font-medium text-white transition-all duration-500 transform bg-neon-lime-500 rounded-3xl shadow-elegant hover:shadow-card-hover hover:scale-105 hover:-translate-y-2 group"
                >
                  <span className="relative z-10">🔐 로그인</span>
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-neon-lime-600 group-hover:opacity-100"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl px-12 pb-32 mx-auto">
        {/* Diary Input Section */}
        <div className="bg-white/90 backdrop-blur-sm shadow-elegant p-20 mb-20 relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
          {/* Subtle Background Elements */}
          <div className="absolute w-32 h-20 transform top-12 right-12 bg-neon-lime-100 rounded-3xl rotate-6 opacity-30"></div>
          <div className="absolute w-24 h-16 transform bottom-12 left-12 bg-vintage-200 rounded-3xl -rotate-8 opacity-30"></div>

          <div className="relative mb-16">
            <h2 className="mb-8 font-serif text-6xl font-light tracking-wide text-gray-900">
              당신의 이야기를 공유하세요
            </h2>
            <p className="text-xl font-light leading-relaxed text-gray-600">
              하루의 이야기를 써보세요 - 기쁨, 슬픔, 중요한 순간들. 당신의
              감정을 분석하고 완벽한 음악을 선별해드릴게요.
            </p>
          </div>

          <textarea
            placeholder="오늘 하루는 어땠나요? 기쁜 순간, 어려움, 마음에 드는 것들을 공유해보세요. (3-4줄 권장)"
            value={diaryText}
            onChange={(e) => setDiaryText(e.target.value)}
            className="w-full h-56 px-10 py-10 font-sans text-lg font-light leading-relaxed text-gray-800 transition-all duration-300 border-2 border-gray-200 resize-none rounded-3xl shadow-elegant focus:outline-none focus:ring-4 focus:ring-neon-lime-200 focus:border-neon-lime-300 bg-white/90 backdrop-blur-sm"
            maxLength={500}
          />

          <div className="flex items-center justify-between mt-8 mb-16">
            <span className="text-lg font-light text-gray-500">
              {diaryText.length}/500 글자
            </span>
            {diaryText.length > 0 && (
              <span className="text-lg font-medium text-neon-lime-600 animate-tag-pulse">
                ✨ 감정 분석 중...
              </span>
            )}
          </div>

          <div className="space-y-8">
            <button
              onClick={handleSubmit}
              disabled={!diaryText.trim() || isAnalyzing}
              className="relative w-full p-8 overflow-hidden font-medium text-white transition-all duration-500 transform bg-neon-lime-500 rounded-3xl hover:shadow-card-hover hover:scale-105 hover:-translate-y-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 mr-4 border-b-2 border-white rounded-full animate-spin"></div>
                  <span className="relative z-10">감정 분석 중...</span>
                </div>
              ) : (
                <span className="relative z-10">🎵 음악 추천 받기</span>
              )}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-neon-lime-600 group-hover:opacity-100"></div>
            </button>

            <button
              onClick={handleGPTAnalysis}
              disabled={!diaryText.trim()}
              className="relative w-full p-8 overflow-hidden font-medium text-white transition-all duration-500 transform bg-vintage-400 rounded-3xl hover:shadow-card-hover hover:scale-105 hover:-translate-y-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="relative z-10">🤖 AI 감정 분석 & 조언</span>
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-vintage-500 group-hover:opacity-100"></div>
            </button>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-20 animate-elegant-fade animation-delay-500">
          <div className="bg-white/90 backdrop-blur-sm shadow-elegant p-16 relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
            <div className="absolute w-8 h-8 rounded-full top-8 right-8 bg-neon-lime-200 animate-vintage-float"></div>
            <div className="absolute w-6 h-6 rounded-full bottom-8 left-8 bg-vintage-300 animate-vintage-float animation-delay-1000"></div>

            <h3 className="mb-8 font-serif text-5xl font-light tracking-wide text-gray-900">
              💡 팁
            </h3>
            <p className="mb-12 text-xl font-light leading-relaxed text-gray-600">
              더 정확한 음악 추천을 위해 구체적으로 경험을 설명해보세요:
            </p>
            <div className="relative p-10 border border-gray-200 bg-gray-50 rounded-3xl">
              <div className="absolute w-4 h-4 rounded-full top-4 right-4 bg-neon-lime-300 opacity-60 animate-neon-glow"></div>
              <p className="text-lg font-light leading-relaxed text-gray-700">
                "오늘 회사에서 큰 프로젝트를 성공적으로 완료했어요. 팀원들과
                함께 축하했고 정말 자랑스럽고 성취감을 느꼈어요."
              </p>
            </div>
          </div>
        </div>

        {/* Feature Buttons */}
        <div className="mt-20 animate-elegant-fade animation-delay-700">
          {isLoggedIn ? (
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
              <button
                onClick={() => navigate("/music-board")}
                className="relative p-16 overflow-hidden text-gray-900 transition-all duration-500 transform border border-gray-200 group bg-white/90 backdrop-blur-sm rounded-3xl shadow-elegant hover:shadow-card-hover hover:scale-105 hover:-translate-y-3"
              >
                <div className="absolute w-8 h-8 border-2 rounded-full top-8 right-8 bg-neon-lime-200 animate-neon-glow border-neon-lime-300"></div>
                <div className="mb-8 text-7xl group-hover:animate-soft-bounce">
                  🎵
                </div>
                <h3 className="mb-6 font-serif text-4xl font-light tracking-wide">
                  음악 커뮤니티
                </h3>
                <p className="text-xl font-light leading-relaxed text-gray-600">
                  다른 사람들과 음악 추천을 발견하고 공유하세요
                </p>
              </button>

              <button
                onClick={() => navigate("/dashboard")}
                className="relative p-16 overflow-hidden text-gray-900 transition-all duration-500 transform border border-gray-200 group bg-white/90 backdrop-blur-sm rounded-3xl shadow-elegant hover:shadow-card-hover hover:scale-105 hover:-translate-y-3"
              >
                <div className="absolute w-8 h-8 border-2 rounded-full top-8 right-8 bg-vintage-300 animate-vintage-float border-vintage-400"></div>
                <div className="mb-8 text-7xl group-hover:animate-soft-bounce">
                  📊
                </div>
                <h3 className="mb-6 font-serif text-4xl font-light tracking-wide">
                  기분 분석
                </h3>
                <p className="text-xl font-light leading-relaxed text-gray-600">
                  시간에 따른 감정 여정을 추적하세요
                </p>
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/music-board")}
                className="relative w-full max-w-2xl p-16 overflow-hidden text-gray-900 transition-all duration-500 transform border border-gray-200 group bg-white/90 backdrop-blur-sm rounded-3xl shadow-elegant hover:shadow-card-hover hover:scale-105 hover:-translate-y-3"
              >
                <div className="absolute w-8 h-8 border-2 rounded-full top-8 right-8 bg-neon-lime-200 animate-neon-glow border-neon-lime-300"></div>
                <div className="mb-8 text-7xl group-hover:animate-soft-bounce">
                  🎵
                </div>
                <h3 className="mb-6 font-serif text-4xl font-light tracking-wide">
                  음악 커뮤니티
                </h3>
                <p className="text-xl font-light leading-relaxed text-gray-600">
                  다른 사람들과 음악 추천을 발견하고 공유하세요
                </p>
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-32 text-center animate-elegant-fade animation-delay-1000">
          <div className="inline-block p-12 border border-gray-200 bg-white/70 backdrop-blur-sm rounded-3xl">
            <div className="text-sm font-light tracking-wide text-gray-500">
              <div className="mb-3">PRODUCED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="mb-3">MASTERED BY: hyemin</div>
              <div className="text-xs">
                © 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

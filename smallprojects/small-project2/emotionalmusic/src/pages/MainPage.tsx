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
          emotion: emotion
        });
        
        // 기분 데이터 저장 (감정 점수는 1-10 사이로 변환)
        const emotionScore = EMOTION_SCORES[emotion as keyof typeof EMOTION_SCORES] || 5;
        
        await MoodService.saveMoodData({
          emotion: emotion,
          score: emotionScore
        });
      } catch (error) {
        console.error('데이터 저장 오류:', error);
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 font-sans relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
      
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 py-32">
          <div className="flex justify-between items-start mb-24">
            <div className="animate-elegant-fade relative max-w-4xl">
              {/* Main Title - Serif for elegance */}
              <h1 className="font-serif text-8xl font-light text-gray-900 mb-12 leading-tight tracking-wide">
                당신의
                <span className="block text-neon-lime-600 mt-6 font-medium">
                  감정 여정을 디자인하세요
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl text-gray-600 max-w-3xl leading-relaxed font-light mb-12">
                하루의 이야기를 공유하고 AI가 당신의 감정에 맞는 맞춤형 음악 경험을 만들어드려요.
              </p>
              
              {/* Decorative Elements */}
              <div className="flex items-center space-x-8 mb-12">
                <div className="w-4 h-4 bg-neon-lime-300 rounded-full animate-neon-glow"></div>
                <div className="w-3 h-3 bg-vintage-400 rounded-full animate-vintage-float"></div>
                <div className="w-4 h-4 bg-neon-lime-300 rounded-full animate-neon-glow animation-delay-1000"></div>
              </div>
            </div>
            
            <div className="flex space-x-8 animate-elegant-fade animation-delay-300">
              {isLoggedIn ? (
                <>
                  <span className="text-xl text-gray-600 font-light">안녕하세요, {user?.name}님!</span>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-10 py-5 bg-neon-lime-500 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-500 font-medium transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10">📊 대시보드</span>
                    <div className="absolute inset-0 bg-neon-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/auth')}
                  className="px-10 py-5 bg-neon-lime-500 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-500 font-medium transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group"
                >
                  <span className="relative z-10">🔐 로그인</span>
                  <div className="absolute inset-0 bg-neon-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-12 pb-32">
        {/* Diary Input Section */}
        <div className="bg-white/90 backdrop-blur-sm shadow-elegant p-20 mb-20 relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
          {/* Subtle Background Elements */}
          <div className="absolute top-12 right-12 w-32 h-20 bg-neon-lime-100 rounded-3xl transform rotate-6 opacity-30"></div>
          <div className="absolute bottom-12 left-12 w-24 h-16 bg-vintage-200 rounded-3xl transform -rotate-8 opacity-30"></div>
          
          <div className="mb-16 relative">
            <h2 className="font-serif text-6xl font-light text-gray-900 mb-8 tracking-wide">
              당신의 이야기를 공유하세요
            </h2>
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              하루의 이야기를 써보세요 - 기쁨, 슬픔, 중요한 순간들. 당신의 감정을 분석하고 완벽한 음악을 선별해드릴게요.
            </p>
          </div>
          
          <textarea
            placeholder="오늘 하루는 어땠나요? 기쁜 순간, 어려움, 마음에 드는 것들을 공유해보세요. (3-4줄 권장)"
            value={diaryText}
            onChange={(e) => setDiaryText(e.target.value)}
            className="w-full h-56 px-10 py-10 text-gray-800 border-2 border-gray-200 rounded-3xl shadow-elegant focus:outline-none focus:ring-4 focus:ring-neon-lime-200 focus:border-neon-lime-300 resize-none font-sans text-lg leading-relaxed transition-all duration-300 bg-white/90 backdrop-blur-sm font-light"
            maxLength={500}
          />
          
          <div className="flex justify-between items-center mt-8 mb-16">
            <span className="text-lg text-gray-500 font-light">
              {diaryText.length}/500 글자
            </span>
            {diaryText.length > 0 && (
              <span className="text-lg text-neon-lime-600 font-medium animate-tag-pulse">
                ✨ 감정 분석 중...
              </span>
            )}
          </div>

          <div className="space-y-8">
            <button
              onClick={handleSubmit}
              disabled={!diaryText.trim() || isAnalyzing}
              className="w-full p-8 bg-neon-lime-500 text-white font-medium rounded-3xl hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mr-4"></div>
                  <span className="relative z-10">감정 분석 중...</span>
                </div>
              ) : (
                <span className="relative z-10">🎵 음악 추천 받기</span>
              )}
              <div className="absolute inset-0 bg-neon-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={handleGPTAnalysis}
              disabled={!diaryText.trim()}
              className="w-full p-8 bg-vintage-400 text-white font-medium rounded-3xl hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="relative z-10">🤖 AI 감정 분석 & 조언</span>
              <div className="absolute inset-0 bg-vintage-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-20 animate-elegant-fade animation-delay-500">
          <div className="bg-white/90 backdrop-blur-sm shadow-elegant p-16 relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
            <div className="absolute top-8 right-8 w-8 h-8 bg-neon-lime-200 rounded-full animate-vintage-float"></div>
            <div className="absolute bottom-8 left-8 w-6 h-6 bg-vintage-300 rounded-full animate-vintage-float animation-delay-1000"></div>
            
            <h3 className="font-serif text-5xl font-light text-gray-900 mb-8 tracking-wide">
              💡 팁
            </h3>
            <p className="text-gray-600 text-xl font-light mb-12 leading-relaxed">
              더 정확한 음악 추천을 위해 구체적으로 경험을 설명해보세요:
            </p>
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 relative">
              <div className="absolute top-4 right-4 w-4 h-4 bg-neon-lime-300 rounded-full opacity-60 animate-neon-glow"></div>
              <p className="text-gray-700 font-light text-lg leading-relaxed">
                "오늘 회사에서 큰 프로젝트를 성공적으로 완료했어요. 팀원들과 함께 축하했고 정말 자랑스럽고 성취감을 느꼈어요."
              </p>
            </div>
          </div>
        </div>

        {/* Feature Buttons */}
        <div className="mt-20 animate-elegant-fade animation-delay-700">
          {isLoggedIn ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <button
                onClick={() => navigate('/music-board')}
                className="group p-16 bg-white/90 backdrop-blur-sm text-gray-900 rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 relative overflow-hidden border border-gray-200"
              >
                <div className="absolute top-8 right-8 w-8 h-8 bg-neon-lime-200 rounded-full animate-neon-glow border-2 border-neon-lime-300"></div>
                <div className="text-7xl mb-8 group-hover:animate-soft-bounce">🎵</div>
                <h3 className="font-serif text-4xl font-light tracking-wide mb-6">음악 커뮤니티</h3>
                <p className="text-gray-600 text-xl font-light leading-relaxed">다른 사람들과 음악 추천을 발견하고 공유하세요</p>
              </button>
              
              <button
                onClick={() => navigate('/dashboard')}
                className="group p-16 bg-white/90 backdrop-blur-sm text-gray-900 rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 relative overflow-hidden border border-gray-200"
              >
                <div className="absolute top-8 right-8 w-8 h-8 bg-vintage-300 rounded-full animate-vintage-float border-2 border-vintage-400"></div>
                <div className="text-7xl mb-8 group-hover:animate-soft-bounce">📊</div>
                <h3 className="font-serif text-4xl font-light tracking-wide mb-6">기분 분석</h3>
                <p className="text-gray-600 text-xl font-light leading-relaxed">시간에 따른 감정 여정을 추적하세요</p>
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/music-board')}
                className="group p-16 bg-white/90 backdrop-blur-sm text-gray-900 rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 max-w-2xl w-full relative overflow-hidden border border-gray-200"
              >
                <div className="absolute top-8 right-8 w-8 h-8 bg-neon-lime-200 rounded-full animate-neon-glow border-2 border-neon-lime-300"></div>
                <div className="text-7xl mb-8 group-hover:animate-soft-bounce">🎵</div>
                <h3 className="font-serif text-4xl font-light tracking-wide mb-6">음악 커뮤니티</h3>
                <p className="text-gray-600 text-xl font-light leading-relaxed">다른 사람들과 음악 추천을 발견하고 공유하세요</p>
              </button>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="mt-32 text-center animate-elegant-fade animation-delay-1000">
          <div className="bg-white/70 backdrop-blur-sm p-12 rounded-3xl border border-gray-200 inline-block">
            <div className="text-sm text-gray-500 font-light tracking-wide">
              <div className="mb-3">PRODUCED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="mb-3">MIXED BY: AI TECHNOLOGY</div>
              <div className="mb-3">MASTERED BY: USER EXPERIENCE</div>
              <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

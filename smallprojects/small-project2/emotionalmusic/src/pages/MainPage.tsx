import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeEmotion } from "../utils/emotionAnalyzer";
import { useDiaryStore } from "../hooks/useDiaryStore";
import { useAuth } from "../hooks/useAuth";
import { DiaryService, MoodService } from "../services/authService";
import { EMOTION_SCORES } from "../data/emotionConstants";
import { getPrimaryButtonStyle, getSecondaryButtonStyle, getCardStyle } from "../utils/buttonStyles";

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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 font-sans">
      {/* 헤더 */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="flex justify-between items-center mb-16">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                당신의
                <span className="block bg-gradient-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent">
                  감정 여정을 디자인하세요
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                하루의 이야기를 공유하고 AI가 당신의 감정에 맞는 맞춤형 음악 경험을 만들어드려요.
              </p>
            </div>
            <div className="flex space-x-4 animate-slide-up">
              {isLoggedIn ? (
                <>
                  <span className="text-sm text-gray-600 font-medium">안녕하세요, {user?.name}님!</span>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium text-sm transform hover:scale-105"
                  >
                    📊 대시보드
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/auth')}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium text-sm transform hover:scale-105"
                >
                  🔐 로그인
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className={`${getCardStyle()} p-8 animate-scale-in`}>
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-2">
              당신의 이야기를 공유하세요
            </h2>
            <p className="text-gray-600">
              하루의 이야기를 써보세요 - 기쁨, 슬픔, 중요한 순간들. 당신의 감정을 분석하고 완벽한 음악을 선별해드릴게요.
            </p>
          </div>
          
          <textarea
            placeholder="오늘 하루는 어땠나요? 기쁜 순간, 어려움, 마음에 드는 것들을 공유해보세요. (3-4줄 권장)"
            value={diaryText}
            onChange={(e) => setDiaryText(e.target.value)}
            className="w-full h-40 px-6 py-4 text-gray-700 border border-gray-200 rounded-xl shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none font-sans text-base leading-relaxed transition-all duration-300"
            maxLength={500}
          />
          
          <div className="flex justify-between items-center mt-4 mb-8">
            <span className="text-sm text-gray-500 font-medium">
              {diaryText.length}/500 글자
            </span>
            {diaryText.length > 0 && (
              <span className="text-sm text-primary-600 font-medium animate-pulse-gentle">
                ✨ 감정 분석 중...
              </span>
            )}
          </div>

          <div className="space-y-4">
            <button
              onClick={handleSubmit}
              disabled={!diaryText.trim() || isAnalyzing}
              className={getPrimaryButtonStyle(!diaryText.trim() || isAnalyzing)}
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  감정 분석 중...
                </div>
              ) : (
                "🎵 음악 추천 받기"
              )}
            </button>
            
            <button
              onClick={handleGPTAnalysis}
              disabled={!diaryText.trim()}
              className={getSecondaryButtonStyle(!diaryText.trim())}
            >
              🤖 AI 감정 분석 & 조언
            </button>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 animate-slide-up">
          <div className={`${getCardStyle()} p-8`}>
            <h3 className="text-xl font-serif font-semibold text-gray-900 mb-4">
              💡 팁
            </h3>
            <p className="text-gray-600 mb-4">
              더 정확한 음악 추천을 위해 구체적으로 경험을 설명해보세요:
            </p>
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 rounded-xl border border-primary-100">
              <p className="text-gray-700 font-medium">
                "오늘 회사에서 큰 프로젝트를 성공적으로 완료했어요. 팀원들과 함께 축하했고 정말 자랑스럽고 성취감을 느꼈어요."
              </p>
            </div>
          </div>
        </div>

        {/* Feature Buttons */}
        <div className="mt-12 animate-slide-up">
          {isLoggedIn ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => navigate('/music-board')}
                className="group p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce-gentle">🎵</div>
                <h3 className="text-xl font-serif font-semibold mb-2">음악 커뮤니티</h3>
                <p className="text-blue-100 text-sm">다른 사람들과 음악 추천을 발견하고 공유하세요</p>
              </button>
              
              <button
                onClick={() => navigate('/dashboard')}
                className="group p-8 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce-gentle">📊</div>
                <h3 className="text-xl font-serif font-semibold mb-2">기분 분석</h3>
                <p className="text-green-100 text-sm">시간에 따른 감정 여정을 추적하세요</p>
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/music-board')}
                className="group p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 max-w-md w-full"
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce-gentle">🎵</div>
                <h3 className="text-xl font-serif font-semibold mb-2">음악 커뮤니티</h3>
                <p className="text-blue-100 text-sm">다른 사람들과 음악 추천을 발견하고 공유하세요</p>
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

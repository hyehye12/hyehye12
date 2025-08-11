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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 font-mono relative overflow-hidden">
      {/* Retro Cassette Tape Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-28 bg-orange-400 rounded-lg transform rotate-12 shadow-2xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-24 bg-orange-300 rounded-lg transform -rotate-6 shadow-2xl"></div>
        <div className="absolute top-60 left-1/2 w-32 h-20 bg-orange-500 rounded-lg transform rotate-45 shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-16 bg-amber-400 rounded-lg transform -rotate-12 shadow-2xl"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-12 bg-yellow-400 rounded-lg transform rotate-30 shadow-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-16 bg-orange-300 rounded-lg transform rotate-15 shadow-2xl"></div>
      </div>

      {/* Header with Cassette Tape Design */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-amber-500/15"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-between items-center mb-16">
            <div className="animate-fade-in relative">
              {/* Cassette Tape Design Elements */}
              <div className="absolute -top-8 left-0 w-32 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-3 opacity-20"></div>
              <div className="absolute -bottom-8 right-0 w-28 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-6 opacity-20"></div>
              
              <h1 className="text-6xl font-black text-orange-900 mb-6 leading-tight tracking-widest uppercase relative z-10">
                당신의
                <span className="block bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent mt-2">
                  감정 여정을 디자인하세요
                </span>
              </h1>
              
              {/* Cassette Tape Holes */}
              <div className="flex items-center space-x-8 mb-6">
                <div className="w-8 h-8 bg-orange-200 rounded-full border-4 border-orange-400 shadow-lg"></div>
                <div className="w-8 h-8 bg-orange-200 rounded-full border-4 border-orange-400 shadow-lg"></div>
              </div>
              
              <p className="text-2xl text-orange-700 max-w-3xl leading-relaxed font-bold tracking-wide">
                하루의 이야기를 공유하고 AI가 당신의 감정에 맞는 맞춤형 음악 경험을 만들어드려요.
              </p>
              
              {/* Track Info */}
              <div className="mt-6 inline-block bg-gradient-to-r from-orange-200 to-amber-200 p-3 rounded-lg border-2 border-orange-300 transform rotate-1">
                <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
                  <div className="flex justify-between mb-1">
                    <span>TRACK 01</span>
                    <span>5:30</span>
                  </div>
                  <div className="text-center font-black text-orange-900">EMOTIONAL JOURNEY</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-6 animate-slide-up">
              {isLoggedIn ? (
                <>
                  <span className="text-lg text-orange-700 font-black tracking-widest uppercase">안녕하세요, {user?.name}님!</span>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-orange-300"
                  >
                    <span className="relative z-10">📊 대시보드</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/auth')}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-orange-300"
                >
                  <span className="relative z-10">🔐 로그인</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Album Insert Style */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-12 mb-12 relative overflow-hidden rounded-3xl border-4 border-orange-300 transform rotate-1">
          {/* Cassette Tape Design Elements */}
          <div className="absolute top-8 right-8 w-24 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-6 opacity-20 shadow-lg"></div>
          <div className="absolute bottom-8 left-8 w-20 h-12 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-8 opacity-20 shadow-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg transform rotate-45 opacity-10 shadow-lg"></div>
          
          <div className="mb-10 relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-3 border-white shadow-lg"></div>
            
            <h2 className="text-4xl font-black text-orange-900 mb-4 tracking-widest uppercase">
              당신의 이야기를 공유하세요
            </h2>
            <p className="text-orange-700 text-xl font-bold tracking-wide">
              하루의 이야기를 써보세요 - 기쁨, 슬픔, 중요한 순간들. 당신의 감정을 분석하고 완벽한 음악을 선별해드릴게요.
            </p>
          </div>
          
          <textarea
            placeholder="오늘 하루는 어땠나요? 기쁜 순간, 어려움, 마음에 드는 것들을 공유해보세요. (3-4줄 권장)"
            value={diaryText}
            onChange={(e) => setDiaryText(e.target.value)}
            className="w-full h-48 px-8 py-6 text-orange-800 border-4 border-orange-200 rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-transparent resize-none font-mono text-lg leading-relaxed transition-all duration-300 bg-white/90 backdrop-blur-sm font-bold tracking-wide"
            maxLength={500}
          />
          
          <div className="flex justify-between items-center mt-6 mb-10">
            <span className="text-lg text-orange-600 font-black tracking-wide">
              {diaryText.length}/500 글자
            </span>
            {diaryText.length > 0 && (
              <span className="text-lg text-orange-600 font-black tracking-widest uppercase animate-pulse-gentle">
                ✨ 감정 분석 중...
              </span>
            )}
          </div>

          <div className="space-y-6">
            <button
              onClick={handleSubmit}
              disabled={!diaryText.trim() || isAnalyzing}
              className="w-full p-6 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-black tracking-widest uppercase rounded-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-orange-300"
            >
              {isAnalyzing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-4 border-white mr-4"></div>
                  <span className="relative z-10">감정 분석 중...</span>
                </div>
              ) : (
                <span className="relative z-10">🎵 음악 추천 받기</span>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={handleGPTAnalysis}
              disabled={!diaryText.trim()}
              className="w-full p-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black tracking-widest uppercase rounded-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-4 border-amber-300"
            >
              <span className="relative z-10">🤖 AI 감정 분석 & 조언</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Track Info Badge */}
          <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-200 to-amber-200 p-3 rounded-lg border-2 border-orange-300 transform rotate-3">
            <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
              <div className="text-center">TRACK A1</div>
              <div className="text-center">3:45</div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 animate-slide-up">
          <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-10 relative overflow-hidden rounded-3xl border-4 border-orange-300 transform -rotate-1">
            <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-3 border-white shadow-lg"></div>
            <div className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-2 border-white shadow-lg"></div>
            
            <h3 className="text-3xl font-black text-orange-900 mb-6 tracking-widest uppercase">
              💡 팁
            </h3>
            <p className="text-orange-700 text-xl font-bold tracking-wide mb-6">
              더 정확한 음악 추천을 위해 구체적으로 경험을 설명해보세요:
            </p>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-4 border-orange-200 relative">
              <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-60"></div>
              <p className="text-orange-800 font-black text-lg tracking-wide">
                "오늘 회사에서 큰 프로젝트를 성공적으로 완료했어요. 팀원들과 함께 축하했고 정말 자랑스럽고 성취감을 느꼈어요."
              </p>
            </div>
            
            {/* Track Info Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform -rotate-3">
              <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                <div className="text-center">TRACK A2</div>
                <div className="text-center">1:15</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Buttons */}
        <div className="mt-12 animate-slide-up">
          {isLoggedIn ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <button
                onClick={() => navigate('/music-board')}
                className="group p-10 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-3xl shadow-3xl hover:shadow-4xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden border-4 border-orange-300"
              >
                <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse border-2 border-white"></div>
                <div className="text-5xl mb-4 group-hover:animate-bounce-gentle">🎵</div>
                <h3 className="text-2xl font-black tracking-widest uppercase mb-3">음악 커뮤니티</h3>
                <p className="text-orange-100 text-lg font-bold tracking-wide">다른 사람들과 음악 추천을 발견하고 공유하세요</p>
                
                {/* Track Info Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3">
                  <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                    <div className="text-center">TRACK B1</div>
                    <div className="text-center">2:30</div>
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => navigate('/dashboard')}
                className="group p-10 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-3xl shadow-3xl hover:shadow-4xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden border-4 border-amber-300"
              >
                <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-float border-2 border-white"></div>
                <div className="text-5xl mb-4 group-hover:animate-bounce-gentle">📊</div>
                <h3 className="text-2xl font-black tracking-widest uppercase mb-3">기분 분석</h3>
                <p className="text-amber-100 text-lg font-bold tracking-wide">시간에 따른 감정 여정을 추적하세요</p>
                
                {/* Track Info Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-amber-200 to-yellow-200 p-2 rounded-lg border-2 border-amber-300 transform -rotate-3">
                  <div className="text-xs text-amber-800 font-black tracking-widest uppercase">
                    <div className="text-center">TRACK B2</div>
                    <div className="text-center">1:45</div>
                  </div>
                </div>
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/music-board')}
                className="group p-10 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-3xl shadow-3xl hover:shadow-4xl transition-all duration-300 transform hover:scale-105 max-w-lg w-full relative overflow-hidden border-4 border-orange-300"
              >
                <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse border-2 border-white"></div>
                <div className="text-5xl mb-4 group-hover:animate-bounce-gentle">🎵</div>
                <h3 className="text-2xl font-black tracking-widest uppercase mb-3">음악 커뮤니티</h3>
                <p className="text-orange-100 text-lg font-bold tracking-wide">다른 사람들과 음악 추천을 발견하고 공유하세요</p>
                
                {/* Track Info Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3">
                  <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                    <div className="text-center">TRACK B1</div>
                    <div className="text-center">2:30</div>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
        
        {/* Album Credits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-6 rounded-2xl border-4 border-orange-300 transform rotate-1 inline-block">
            <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
              <div className="mb-2">PRODUCED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="mb-2">MIXED BY: AI TECHNOLOGY</div>
              <div className="mb-2">MASTERED BY: USER EXPERIENCE</div>
              <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

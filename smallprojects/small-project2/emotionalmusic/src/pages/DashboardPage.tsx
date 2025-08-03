import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useMoodAnalytics } from '../hooks/useMoodAnalytics';
import { DiaryService } from '../services/authService';
import { EMOTION_COLORS, EMOTION_EMOJIS } from '../data/emotionConstants';

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const { 
    weeklyData, 
    monthlyData, 
    loading, 
    getEmotionStats, 
    getAverageMoodScore, 
    getMostFrequentEmotion 
  } = useMoodAnalytics();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly'>('weekly');

  const handleLogout = () => {
    logout();
    navigate('/');
  };



  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  const stats = getEmotionStats();
  const averageScore = getAverageMoodScore();
  const mostFrequent = getMostFrequentEmotion();
  const recentEntries = DiaryService.getRecentDiaryEntries(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              안녕하세요, {user?.name}님! 👋
            </h1>
            <p className="text-gray-600 mt-2">당신의 기분을 분석해드릴게요</p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            >
              일기 작성하기
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              로그아웃
            </button>
          </div>
        </div>

        {/* 통계 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <span className="text-2xl">📊</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">평균 기분 점수</p>
                <p className="text-2xl font-bold text-gray-800">{averageScore}/10</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <span className="text-2xl">📝</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">총 일기 수</p>
                <p className="text-2xl font-bold text-gray-800">{recentEntries.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">가장 많은 감정</p>
                <p className="text-lg font-bold text-gray-800">
                  {mostFrequent ? `${EMOTION_EMOJIS[mostFrequent.emotion as keyof typeof EMOTION_EMOJIS]} ${mostFrequent.emotion}` : '데이터 없음'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 감정별 통계 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">감정별 통계</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(stats).map(([emotion, count]) => (
              <div key={emotion} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl mb-2">
                  {EMOTION_EMOJIS[emotion as keyof typeof EMOTION_EMOJIS]}
                </div>
                <p className="text-sm text-gray-600">{emotion}</p>
                <p className="text-lg font-bold text-gray-800">{count}회</p>
              </div>
            ))}
          </div>
        </div>

        {/* 기분 차트 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">기분 변화</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('weekly')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'weekly' 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                주간
              </button>
              <button
                onClick={() => setActiveTab('monthly')}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === 'monthly' 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                월간
              </button>
            </div>
          </div>

          <div className="h-64 flex items-end justify-center space-x-2">
            {(activeTab === 'weekly' ? weeklyData : monthlyData).map((data, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`w-8 rounded-t-lg ${EMOTION_COLORS[data.emotion as keyof typeof EMOTION_COLORS] || 'bg-gray-400'}`}
                  style={{ height: `${(data.score / 10) * 200}px` }}
                ></div>
                <p className="text-xs text-gray-600 mt-2">{data.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 최근 일기 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">최근 일기</h2>
          <div className="space-y-4">
            {recentEntries.length > 0 ? (
              recentEntries.map((entry) => (
                <div key={entry.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">
                        {EMOTION_EMOJIS[entry.emotion as keyof typeof EMOTION_EMOJIS]}
                      </span>
                      <span className="font-medium text-gray-800">{entry.emotion}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(entry.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{entry.content}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-8">아직 작성된 일기가 없어요.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 
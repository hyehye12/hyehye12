import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EMOTIONS } from '../data/emotionConstants';

interface MusicRecommendation {
  id: string;
  emotion: string;
  title: string;
  description: string;
  tracks: any[];
  author: string;
  createdAt: Date;
  likes: number;
}

export default function MusicBoardPage() {
  const navigate = useNavigate();
  const [selectedEmotion, setSelectedEmotion] = useState<string>('');
  const [recommendations, setRecommendations] = useState<MusicRecommendation[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newRecommendation, setNewRecommendation] = useState({
    emotion: '',
    title: '',
    description: ''
  });

  // 샘플 추천 데이터
  useEffect(() => {
    const sampleRecommendations: MusicRecommendation[] = [
      {
        id: '1',
        emotion: '행복함',
        title: '기분 좋은 날 듣기 좋은 팝송 모음',
        description: '오늘 하루가 정말 좋았을 때 듣기 좋은 밝고 경쾌한 팝송들을 모아봤어요!',
        tracks: [],
        author: '음악러버',
        createdAt: new Date('2024-01-15'),
        likes: 24
      },
      {
        id: '2',
        emotion: '우울함',
        title: '마음이 무거울 때 위로가 되는 음악들',
        description: '슬픈 마음을 달래주는 따뜻한 음악들을 추천합니다.',
        tracks: [],
        author: '힐링마스터',
        createdAt: new Date('2024-01-14'),
        likes: 18
      },
      {
        id: '3',
        emotion: '스트레스',
        title: '스트레스 해소를 위한 차분한 음악',
        description: '긴장을 풀어주고 마음을 진정시켜주는 음악들입니다.',
        tracks: [],
        author: '평화지킴이',
        createdAt: new Date('2024-01-13'),
        likes: 31
      }
    ];
    setRecommendations(sampleRecommendations);
  }, []);

  const handleCreateRecommendation = () => {
    if (!newRecommendation.emotion || !newRecommendation.title || !newRecommendation.description) {
      alert('모든 필드를 입력해주세요.');
      return;
    }

    const recommendation: MusicRecommendation = {
      id: Date.now().toString(),
      emotion: newRecommendation.emotion,
      title: newRecommendation.title,
      description: newRecommendation.description,
      tracks: [],
      author: '나',
      createdAt: new Date(),
      likes: 0
    };

    setRecommendations([recommendation, ...recommendations]);
    setNewRecommendation({ emotion: '', title: '', description: '' });
    setShowCreateForm(false);
  };

  const handleLike = (id: string) => {
    setRecommendations(prev => 
      prev.map(rec => 
        rec.id === id ? { ...rec, likes: rec.likes + 1 } : rec
      )
    );
  };

  const filteredRecommendations = selectedEmotion 
    ? recommendations.filter(rec => rec.emotion === selectedEmotion)
    : recommendations;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1)_0%,transparent_50%),radial-gradient(circle_at_40%_40%,rgba(120,219,255,0.1)_0%,transparent_50%)]"></div>
      
      {/* Floating Kitsch Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-60 left-1/2 w-2 h-2 bg-gradient-to-br from-pink-300 to-blue-300 rounded-full opacity-60 animate-bounce"></div>
      
      {/* Cross-shaped decorative elements */}
      <div className="absolute top-32 right-32 w-1 h-4 bg-gradient-to-b from-pink-200 to-purple-200 opacity-40"></div>
      <div className="absolute top-32 right-32 w-4 h-1 bg-gradient-to-r from-pink-200 to-purple-200 opacity-40"></div>
      <div className="absolute bottom-32 left-32 w-1 h-4 bg-gradient-to-b from-blue-200 to-pink-200 opacity-40"></div>
      <div className="absolute bottom-32 left-32 w-4 h-1 bg-gradient-to-r from-blue-200 to-pink-200 opacity-40"></div>

      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
              🎵 음악 추천 게시판
            </h1>
            <p className="text-gray-600">
              기분에 맞는 음악을 추천하고 공유해보세요
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setShowCreateForm(true)}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm"
            >
              <span className="relative z-10">✏️ 추천 작성하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-white/50"
            >
              ← 돌아가기
            </button>
          </div>
        </div>

        {/* 감정 필터 */}
        <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8 relative overflow-hidden border border-white/50">
          <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-60 animate-pulse"></div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-4">감정별 필터</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedEmotion('')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedEmotion === '' 
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-white/50'
              }`}
            >
              전체
            </button>
            {EMOTIONS.map(emotion => (
              <button
                key={emotion}
                onClick={() => setSelectedEmotion(emotion)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedEmotion === emotion 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' 
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-lg border border-white/50'
                }`}
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>

        {/* 추천 작성 폼 */}
        {showCreateForm && (
          <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 mb-8 relative overflow-hidden border border-white/50">
            <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-60 animate-bounce"></div>
            
            <h2 className="text-xl font-bold text-gray-800 mb-4">새 추천 작성</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  감정 선택
                </label>
                <select
                  value={newRecommendation.emotion}
                  onChange={(e) => setNewRecommendation(prev => ({ ...prev, emotion: e.target.value }))}
                  className="w-full px-3 py-2 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300"
                >
                  <option value="">감정을 선택하세요</option>
                  {EMOTIONS.map(emotion => (
                    <option key={emotion} value={emotion}>{emotion}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  제목
                </label>
                <input
                  type="text"
                  value={newRecommendation.title}
                  onChange={(e) => setNewRecommendation(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-3 py-2 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300"
                  placeholder="추천 제목을 입력하세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  설명
                </label>
                <textarea
                  value={newRecommendation.description}
                  onChange={(e) => setNewRecommendation(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 h-24"
                  placeholder="추천 이유나 설명을 입력하세요"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleCreateRecommendation}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">추천 작성하기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="px-6 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-white/50"
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 추천 목록 */}
        <div className="space-y-6">
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map(recommendation => (
              <div key={recommendation.id} className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-white/50">
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full opacity-60 animate-bounce"></div>
                
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {recommendation.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{recommendation.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>작성자: {recommendation.author}</span>
                      <span>감정: {recommendation.emotion}</span>
                      <span>{recommendation.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLike(recommendation.id)}
                    className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full hover:from-pink-200 hover:to-purple-200 transition-all duration-300 border border-white/50"
                  >
                    <span>❤️</span>
                    <span>{recommendation.likes}</span>
                  </button>
                </div>
                
                {/* 음악 추천 버튼 */}
                <button
                  onClick={() => navigate(`/result/${encodeURIComponent(recommendation.emotion)}`)}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">🎵 이 감정에 맞는 음악 추천받기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            ))
          ) : (
            <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center relative overflow-hidden border border-white/50">
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-60 animate-pulse"></div>
              
              <p className="text-gray-500 text-lg">
                {selectedEmotion ? `${selectedEmotion}에 대한 추천이 없어요.` : '아직 추천이 없어요.'}
              </p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">첫 번째 추천 작성하기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
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
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 relative overflow-hidden font-sans">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-20">
          <div className="relative animate-elegant-fade">
            <h1 className="font-serif text-7xl font-light text-gray-900 mb-8 leading-tight tracking-wide">
              🎵 음악 추천 게시판
            </h1>
            
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
              기분에 맞는 음악을 추천하고 공유해보세요
            </p>
            
            {/* Decorative Elements */}
            <div className="flex items-center space-x-6 mt-8">
              <div className="w-4 h-4 bg-neon-lime-300 rounded-full animate-neon-glow"></div>
              <div className="w-3 h-3 bg-vintage-400 rounded-full animate-vintage-float"></div>
              <div className="w-4 h-4 bg-neon-lime-300 rounded-full animate-neon-glow animation-delay-1000"></div>
            </div>
          </div>
          
          <div className="flex space-x-8 animate-elegant-fade animation-delay-300">
            <button
              onClick={() => setShowCreateForm(true)}
              className="px-10 py-5 bg-neon-lime-500 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-500 font-medium transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden group"
            >
              <span className="relative z-10">✏️ 추천 작성하기</span>
              <div className="absolute inset-0 bg-neon-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-8 py-5 bg-white/90 backdrop-blur-sm text-gray-700 rounded-3xl hover:bg-white hover:shadow-elegant transition-all duration-500 border border-gray-200 font-medium"
            >
              ← 돌아가기
            </button>
          </div>
        </div>

        {/* Emotion Filter Section */}
        <div className="bg-white/90 backdrop-blur-sm shadow-elegant rounded-3xl p-12 mb-20 relative overflow-hidden border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
          {/* Subtle Background Elements */}
          <div className="absolute top-8 right-8 w-24 h-16 bg-neon-lime-100 rounded-3xl transform rotate-6 opacity-30"></div>
          <div className="absolute bottom-8 left-8 w-20 h-12 bg-vintage-200 rounded-3xl transform -rotate-8 opacity-30"></div>
          
          <div className="relative">
            <h2 className="font-serif text-5xl font-light text-gray-900 mb-10 tracking-wide">감정별 필터</h2>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => setSelectedEmotion('')}
                className={`px-8 py-4 rounded-3xl transition-all duration-500 font-medium border-2 ${
                  selectedEmotion === '' 
                    ? 'bg-neon-lime-500 text-white shadow-elegant border-neon-lime-300' 
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-elegant border-gray-200'
                }`}
              >
                전체
              </button>
              {EMOTIONS.map(emotion => (
                <button
                  key={emotion}
                  onClick={() => setSelectedEmotion(emotion)}
                  className={`px-8 py-4 rounded-3xl transition-all duration-500 font-medium border-2 ${
                    selectedEmotion === emotion 
                      ? 'bg-neon-lime-500 text-white shadow-elegant border-neon-lime-300' 
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-elegant border-gray-200'
                  }`}
                >
                  {emotion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Create Recommendation Form */}
        {showCreateForm && (
          <div className="bg-white/90 backdrop-blur-sm shadow-elegant rounded-3xl p-16 mb-20 relative overflow-hidden border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
            {/* Subtle Background Elements */}
            <div className="absolute top-8 right-8 w-24 h-16 bg-neon-lime-100 rounded-3xl transform rotate-6 opacity-30"></div>
            <div className="absolute bottom-8 left-8 w-20 h-12 bg-vintage-200 rounded-3xl transform -rotate-8 opacity-30"></div>
            
            <div className="relative">
              <h2 className="font-serif text-5xl font-light text-gray-900 mb-10 tracking-wide">새 추천 작성</h2>
              <div className="space-y-10">
                <div className="relative">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-neon-lime-300 rounded-full opacity-60 animate-neon-glow"></div>
                  <label className="block text-lg font-medium text-gray-700 mb-4 tracking-wide">
                    감정 선택
                  </label>
                  <select
                    value={newRecommendation.emotion}
                    onChange={(e) => setNewRecommendation(prev => ({ ...prev, emotion: e.target.value }))}
                    className="w-full px-8 py-5 border-2 border-gray-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-neon-lime-200 focus:border-neon-lime-300 bg-white/90 backdrop-blur-sm shadow-elegant transition-all duration-300 font-medium text-gray-700"
                  >
                    <option value="">감정을 선택하세요</option>
                    {EMOTIONS.map(emotion => (
                      <option key={emotion} value={emotion}>{emotion}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-neon-lime-300 rounded-full opacity-60 animate-neon-glow"></div>
                  <label className="block text-lg font-medium text-gray-700 mb-4 tracking-wide">
                    제목
                  </label>
                  <input
                    type="text"
                    value={newRecommendation.title}
                    onChange={(e) => setNewRecommendation(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-8 py-5 border-2 border-gray-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-neon-lime-200 focus:border-neon-lime-300 bg-white/90 backdrop-blur-sm shadow-elegant transition-all duration-300 font-medium text-gray-700"
                    placeholder="추천 제목을 입력하세요"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-neon-lime-300 rounded-full opacity-60 animate-neon-glow"></div>
                  <label className="block text-lg font-medium text-gray-700 mb-4 tracking-wide">
                    설명
                  </label>
                  <textarea
                    value={newRecommendation.description}
                    onChange={(e) => setNewRecommendation(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-8 py-5 border-2 border-gray-200 rounded-3xl focus:outline-none focus:ring-4 focus:ring-neon-lime-200 focus:border-neon-lime-300 bg-white/90 backdrop-blur-sm shadow-elegant transition-all duration-300 font-medium text-gray-700 h-40 resize-none"
                    placeholder="추천 이유나 설명을 입력하세요"
                  />
                </div>
                <div className="flex space-x-8">
                  <button
                    onClick={handleCreateRecommendation}
                    className="px-10 py-5 bg-neon-lime-500 text-white rounded-3xl hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group font-medium"
                  >
                    <span className="relative z-10">추천 작성하기</span>
                    <div className="absolute inset-0 bg-neon-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-700 rounded-3xl hover:bg-white hover:shadow-elegant transition-all duration-500 border border-gray-200 font-medium"
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recommendations List */}
        <div className="space-y-10 animate-elegant-fade animation-delay-500">
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map((recommendation, index) => (
              <div key={recommendation.id} className="bg-white/90 backdrop-blur-sm shadow-elegant rounded-3xl p-12 relative overflow-hidden group hover:shadow-card-hover transition-all duration-500 border border-gray-200 transform hover:scale-100.5">
                {/* Subtle Background Elements */}
                <div className="absolute top-8 right-8 w-8 h-8 bg-neon-lime-200 rounded-full animate-vintage-float"></div>
                <div className="absolute bottom-8 left-8 w-6 h-6 bg-vintage-300 rounded-full animate-vintage-float animation-delay-1000"></div>
                
                <div className="flex justify-between items-start mb-10">
                  <div className="flex-1">
                    <h3 className="font-serif text-4xl font-light text-gray-900 mb-6 tracking-wide">
                      {recommendation.title}
                    </h3>
                    <p className="text-gray-600 text-xl font-light leading-relaxed mb-8">{recommendation.description}</p>
                    <div className="flex items-center space-x-10 text-lg text-gray-500 font-light tracking-wide">
                      <span>작성자: {recommendation.author}</span>
                      <span>감정: {recommendation.emotion}</span>
                      <span>{recommendation.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLike(recommendation.id)}
                    className="flex items-center space-x-4 px-8 py-4 bg-neon-lime-100 text-neon-lime-700 rounded-full hover:bg-neon-lime-200 transition-all duration-300 border-2 border-neon-lime-200 font-medium"
                  >
                    <span>❤️</span>
                    <span>{recommendation.likes}</span>
                  </button>
                </div>
                
                {/* Music Recommendation Button */}
                <button
                  onClick={() => navigate(`/result/${encodeURIComponent(recommendation.emotion)}`)}
                  className="px-10 py-5 bg-vintage-400 text-white rounded-3xl hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group font-medium"
                >
                  <span className="relative z-10">🎵 이 감정에 맞는 음악 추천받기</span>
                  <div className="absolute inset-0 bg-vintage-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            ))
          ) : (
            <div className="bg-white/90 backdrop-blur-sm shadow-elegant rounded-3xl p-16 text-center relative overflow-hidden border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
              {/* Subtle Background Elements */}
              <div className="absolute top-8 right-8 w-8 h-8 bg-neon-lime-200 rounded-full animate-vintage-float"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-vintage-300 rounded-full animate-vintage-float animation-delay-1000"></div>
              
              <p className="text-gray-600 text-3xl font-light mb-10 leading-relaxed">
                {selectedEmotion ? `${selectedEmotion}에 대한 추천이 없어요.` : '아직 추천이 없어요.'}
              </p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="px-10 py-5 bg-neon-lime-500 text-white rounded-3xl hover:shadow-card-hover transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group font-medium"
              >
                <span className="relative z-10">첫 번째 추천 작성하기</span>
                <div className="absolute inset-0 bg-neon-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="mt-24 text-center animate-elegant-fade animation-delay-700">
          <div className="bg-white/70 backdrop-blur-sm p-12 rounded-3xl border border-gray-200 inline-block">
            <div className="text-sm text-gray-500 font-light tracking-wide">
              <div className="mb-3">PRODUCED BY: MUSIC COMMUNITY</div>
              <div className="mb-3">MIXED BY: USER RECOMMENDATIONS</div>
              <div className="mb-3">MASTERED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-6 relative overflow-hidden font-mono">
      {/* Retro Cassette Tape Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-28 bg-orange-400 rounded-lg transform rotate-12 shadow-2xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-24 bg-orange-300 rounded-lg transform -rotate-6 shadow-2xl"></div>
        <div className="absolute top-60 left-1/2 w-32 h-20 bg-orange-500 rounded-lg transform rotate-45 shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-16 bg-amber-400 rounded-lg transform -rotate-12 shadow-2xl"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-12 bg-yellow-400 rounded-lg transform rotate-30 shadow-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-16 bg-orange-300 rounded-lg transform rotate-15 shadow-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header with Cassette Tape Design */}
        <div className="flex justify-between items-center mb-12">
          <div className="relative">
            {/* Cassette Tape Design Elements */}
            <div className="absolute -top-6 left-0 w-32 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-3 opacity-20"></div>
            <div className="absolute -bottom-6 right-0 w-28 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-6 opacity-20"></div>
            
            <h1 className="text-5xl font-black bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-4 tracking-widest uppercase relative z-10">
              🎵 음악 추천 게시판
            </h1>
            
            {/* Cassette Tape Holes */}
            <div className="flex items-center space-x-8 mb-4">
              <div className="w-6 h-6 bg-orange-200 rounded-full border-3 border-orange-400 shadow-lg"></div>
              <div className="w-6 h-6 bg-orange-200 rounded-full border-3 border-orange-400 shadow-lg"></div>
            </div>
            
            <p className="text-orange-700 text-xl font-bold tracking-wide">
              기분에 맞는 음악을 추천하고 공유해보세요
            </p>
            
            {/* Track Info */}
            <div className="mt-4 inline-block bg-gradient-to-r from-orange-200 to-amber-200 p-3 rounded-lg border-2 border-orange-300 transform rotate-1">
              <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                <div className="flex justify-between mb-1">
                  <span>TRACK 01</span>
                  <span>4:20</span>
                </div>
                <div className="text-center font-black text-orange-900">MUSIC BOARD</div>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <button
              onClick={() => setShowCreateForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-black tracking-widest uppercase transform hover:scale-105 relative overflow-hidden group border-4 border-orange-300"
            >
              <span className="relative z-10">✏️ 추천 작성하기</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-6 py-4 bg-white/90 backdrop-blur-sm text-orange-700 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border-4 border-orange-300 font-black tracking-wide"
            >
              ← 돌아가기
            </button>
          </div>
        </div>

        {/* 감정 필터 - Album Insert Style */}
        <div className="bg-white/95 backdrop-blur-sm shadow-3xl rounded-3xl p-8 mb-12 relative overflow-hidden border-4 border-orange-300 transform rotate-1">
          {/* Cassette Tape Design Elements */}
          <div className="absolute top-6 right-6 w-20 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-6 opacity-20 shadow-lg"></div>
          <div className="absolute bottom-6 left-6 w-16 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-8 opacity-20 shadow-lg"></div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-3 border-white shadow-lg"></div>
            
            <h2 className="text-3xl font-black text-orange-900 mb-6 tracking-widest uppercase">감정별 필터</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setSelectedEmotion('')}
                className={`px-6 py-3 rounded-2xl transition-all duration-300 font-black tracking-wide border-4 ${
                  selectedEmotion === '' 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-2xl border-orange-300' 
                    : 'bg-white/80 backdrop-blur-sm text-orange-700 hover:bg-white hover:shadow-2xl border-orange-200'
                }`}
              >
                전체
              </button>
              {EMOTIONS.map(emotion => (
                <button
                  key={emotion}
                  onClick={() => setSelectedEmotion(emotion)}
                  className={`px-6 py-3 rounded-2xl transition-all duration-300 font-black tracking-wide border-4 ${
                    selectedEmotion === emotion 
                      ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-2xl border-orange-300' 
                      : 'bg-white/80 backdrop-blur-sm text-orange-700 hover:bg-white hover:shadow-2xl border-orange-200'
                  }`}
                >
                  {emotion}
                </button>
              ))}
            </div>
            
            {/* Track Info Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform -rotate-3">
              <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                <div className="text-center">TRACK A1</div>
                <div className="text-center">1:30</div>
              </div>
            </div>
          </div>
        </div>

        {/* 추천 작성 폼 - Album Insert Style */}
        {showCreateForm && (
          <div className="bg-white/95 backdrop-blur-sm shadow-3xl rounded-3xl p-10 mb-12 relative overflow-hidden border-4 border-orange-300 transform -rotate-1">
            {/* Cassette Tape Design Elements */}
            <div className="absolute top-6 right-6 w-20 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-6 opacity-20 shadow-lg"></div>
            <div className="absolute bottom-6 left-6 w-16 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-8 opacity-20 shadow-lg"></div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-3 border-white shadow-lg"></div>
              
              <h2 className="text-3xl font-black text-orange-900 mb-6 tracking-widest uppercase">새 추천 작성</h2>
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-60"></div>
                  <label className="block text-lg font-black text-orange-800 mb-3 tracking-wide uppercase">
                    감정 선택
                  </label>
                  <select
                    value={newRecommendation.emotion}
                    onChange={(e) => setNewRecommendation(prev => ({ ...prev, emotion: e.target.value }))}
                    className="w-full px-6 py-4 border-4 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-2xl transition-all duration-300 font-bold tracking-wide text-orange-800"
                  >
                    <option value="">감정을 선택하세요</option>
                    {EMOTIONS.map(emotion => (
                      <option key={emotion} value={emotion}>{emotion}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-60"></div>
                  <label className="block text-lg font-black text-orange-800 mb-3 tracking-wide uppercase">
                    제목
                  </label>
                  <input
                    type="text"
                    value={newRecommendation.title}
                    onChange={(e) => setNewRecommendation(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-6 py-4 border-4 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-2xl transition-all duration-300 font-bold tracking-wide text-orange-800"
                    placeholder="추천 제목을 입력하세요"
                  />
                </div>
                <div className="relative">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-60"></div>
                  <label className="block text-lg font-black text-orange-800 mb-3 tracking-wide uppercase">
                    설명
                  </label>
                  <textarea
                    value={newRecommendation.description}
                    onChange={(e) => setNewRecommendation(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full px-6 py-4 border-4 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-2xl transition-all duration-300 font-bold tracking-wide text-orange-800 h-32 resize-none"
                    placeholder="추천 이유나 설명을 입력하세요"
                  />
                </div>
                <div className="flex space-x-6">
                  <button
                    onClick={handleCreateRecommendation}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group font-black tracking-widest uppercase border-4 border-orange-300"
                  >
                    <span className="relative z-10">추천 작성하기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="px-8 py-4 bg-white/80 backdrop-blur-sm text-orange-700 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-300 border-4 border-orange-200 font-black tracking-wide"
                  >
                    취소
                  </button>
                </div>
              </div>
              
              {/* Track Info Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3">
                <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                  <div className="text-center">TRACK A2</div>
                  <div className="text-center">2:15</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 추천 목록 - Album Insert Style */}
        <div className="space-y-8">
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map((recommendation, index) => (
              <div key={recommendation.id} className="bg-white/95 backdrop-blur-sm shadow-3xl rounded-3xl p-8 relative overflow-hidden group hover:shadow-4xl transition-all duration-300 border-4 border-orange-300 transform rotate-1">
                {/* Cassette Tape Design Elements */}
                <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-3 border-white shadow-lg"></div>
                <div className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-2 border-white shadow-lg"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-orange-900 mb-3 tracking-wide">
                      {recommendation.title}
                    </h3>
                    <p className="text-orange-700 text-lg font-bold tracking-wide mb-4">{recommendation.description}</p>
                    <div className="flex items-center space-x-6 text-lg text-orange-600 font-bold tracking-wide">
                      <span>작성자: {recommendation.author}</span>
                      <span>감정: {recommendation.emotion}</span>
                      <span>{recommendation.createdAt.toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleLike(recommendation.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-600 rounded-full hover:from-orange-200 hover:to-amber-200 transition-all duration-300 border-2 border-orange-200 font-black tracking-wide"
                  >
                    <span>❤️</span>
                    <span>{recommendation.likes}</span>
                  </button>
                </div>
                
                {/* 음악 추천 버튼 */}
                <button
                  onClick={() => navigate(`/result/${encodeURIComponent(recommendation.emotion)}`)}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group font-black tracking-wide border-4 border-green-300"
                >
                  <span className="relative z-10">🎵 이 감정에 맞는 음악 추천받기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {/* Track Info Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform -rotate-3">
                  <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                    <div className="text-center">TRACK {String.fromCharCode(66 + Math.floor(index / 3))}{index % 3 + 1}</div>
                    <div className="text-center">{Math.floor(Math.random() * 3) + 2}:{String(Math.floor(Math.random() * 60)).padStart(2, '0')}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white/95 backdrop-blur-sm shadow-3xl rounded-3xl p-10 text-center relative overflow-hidden border-4 border-orange-300 transform -rotate-1">
              {/* Cassette Tape Design Elements */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-3 border-white shadow-lg"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-2 border-white shadow-lg"></div>
              
              <p className="text-orange-600 text-2xl font-black tracking-wide mb-6">
                {selectedEmotion ? `${selectedEmotion}에 대한 추천이 없어요.` : '아직 추천이 없어요.'}
              </p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group font-black tracking-widest uppercase border-4 border-orange-300"
              >
                <span className="relative z-10">첫 번째 추천 작성하기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* Track Info Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3">
                <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                  <div className="text-center">TRACK A3</div>
                  <div className="text-center">1:00</div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Album Credits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-6 rounded-2xl border-4 border-orange-300 transform rotate-1 inline-block">
            <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
              <div className="mb-2">PRODUCED BY: MUSIC COMMUNITY</div>
              <div className="mb-2">MIXED BY: USER RECOMMENDATIONS</div>
              <div className="mb-2">MASTERED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
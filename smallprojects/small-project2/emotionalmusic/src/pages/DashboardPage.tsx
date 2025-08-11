import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 relative overflow-hidden font-mono">
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
      <div className="bg-white/90 backdrop-blur-md shadow-2xl border-b-4 border-orange-300 relative overflow-hidden">
        <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-3 border-white shadow-lg"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-2 border-white shadow-lg"></div>
        
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="relative">
              {/* Cassette Tape Design Elements */}
              <div className="absolute -top-4 left-0 w-32 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-3 opacity-20"></div>
              <div className="absolute -bottom-4 right-0 w-28 h-16 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-6 opacity-20"></div>
              
              <h1 className="text-4xl font-black bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent tracking-widest uppercase relative z-10">
                🎵 음악 대시보드
              </h1>
              
              {/* Cassette Tape Holes */}
              <div className="flex items-center space-x-6 mt-4">
                <div className="w-6 h-6 bg-orange-200 rounded-full border-3 border-orange-400 shadow-lg"></div>
                <div className="w-6 h-6 bg-orange-200 rounded-full border-3 border-orange-400 shadow-lg"></div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-orange-700 text-lg font-black tracking-wide">안녕하세요, 사용자님</span>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-black text-xl relative border-4 border-white shadow-lg">
                U
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-orange-300/80 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Quick Stats - Album Insert Style */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-8 rounded-3xl border-4 border-orange-300 transform rotate-1 hover:shadow-4xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-3 border-white shadow-lg"></div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center mr-6 relative border-4 border-orange-200">
                <span className="text-3xl">🎵</span>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-orange-300/80 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-900">127</div>
                <div className="text-orange-700 font-bold tracking-wide">저장된 곡</div>
              </div>
            </div>
            
            {/* Track Info Badge */}
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform -rotate-3">
              <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                <div className="text-center">TRACK A1</div>
                <div className="text-center">1:30</div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-8 rounded-3xl border-4 border-orange-300 transform -rotate-1 hover:shadow-4xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-3 border-white shadow-lg"></div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mr-6 relative border-4 border-amber-200">
                <span className="text-3xl">📱</span>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-amber-300/80 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-900">23</div>
                <div className="text-amber-700 font-bold tracking-wide">플레이리스트</div>
              </div>
            </div>
            
            {/* Track Info Badge */}
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-amber-200 to-yellow-200 p-2 rounded-lg border-2 border-amber-300 transform rotate-3">
              <div className="text-xs text-amber-800 font-black tracking-widest uppercase">
                <div className="text-center">TRACK A2</div>
                <div className="text-center">2:15</div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-8 rounded-3xl border-4 border-orange-300 transform rotate-1 hover:shadow-4xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-3 border-white shadow-lg"></div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl flex items-center justify-center mr-6 relative border-4 border-yellow-200">
                <span className="text-3xl">⏱️</span>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-yellow-300/80 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-900">8.5h</div>
                <div className="text-yellow-700 font-bold tracking-wide">이번 주 듣기</div>
              </div>
            </div>
            
            {/* Track Info Badge */}
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-yellow-200 to-orange-200 p-2 rounded-lg border-2 border-yellow-300 transform -rotate-3">
              <div className="text-xs text-yellow-800 font-black tracking-widest uppercase">
                <div className="text-center">TRACK A3</div>
                <div className="text-center">1:45</div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-8 rounded-3xl border-4 border-orange-300 transform -rotate-1 hover:shadow-4xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full border-3 border-white shadow-lg"></div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mr-6 relative border-4 border-orange-200">
                <span className="text-3xl">❤️</span>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-orange-300/80 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-900">95%</div>
                <div className="text-orange-700 font-bold tracking-wide">만족도</div>
              </div>
            </div>
            
            {/* Track Info Badge */}
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-orange-200 to-red-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3">
              <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                <div className="text-center">TRACK A4</div>
                <div className="text-center">0:45</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Album Insert Style */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-10 rounded-3xl border-4 border-orange-300 transform rotate-1 relative overflow-hidden">
              {/* Cassette Tape Design Elements */}
              <div className="absolute top-6 right-6 w-20 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-6 opacity-20 shadow-lg"></div>
              <div className="absolute bottom-6 left-6 w-16 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-8 opacity-20 shadow-lg"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-3 border-white shadow-lg"></div>
                
                <h2 className="text-3xl font-black text-orange-900 mb-8 tracking-widest uppercase">최근 활동</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border-4 border-orange-200 relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mr-6 relative border-4 border-orange-200">
                      <span className="text-xl">🎵</span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-300/80 rounded-full border border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-orange-800 text-lg tracking-wide">새로운 곡을 저장했습니다</div>
                      <div className="text-orange-600 font-bold tracking-wide">Ed Sheeran - Shape of You</div>
                    </div>
                    <div className="text-orange-500 font-bold tracking-wide">2시간 전</div>
                  </div>

                  <div className="flex items-center p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border-4 border-amber-200 relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full flex items-center justify-center mr-6 relative border-4 border-amber-200">
                      <span className="text-xl">📱</span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-300/80 rounded-full border border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-amber-800 text-lg tracking-wide">새 플레이리스트를 만들었습니다</div>
                      <div className="text-amber-600 font-bold tracking-wide">운동할 때 듣기 좋은 음악</div>
                    </div>
                    <div className="text-amber-500 font-bold tracking-wide">5시간 전</div>
                  </div>

                  <div className="flex items-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-4 border-yellow-200 relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mr-6 relative border-4 border-yellow-200">
                      <span className="text-xl">🎭</span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300/80 rounded-full border border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-black text-yellow-800 text-lg tracking-wide">감정 분석 완료</div>
                      <div className="text-yellow-600 font-bold tracking-wide">기쁜 기분에 맞는 음악 추천</div>
                    </div>
                    <div className="text-yellow-500 font-bold tracking-wide">1일 전</div>
                  </div>
                </div>
                
                {/* Track Info Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform -rotate-3">
                  <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                    <div className="text-center">TRACK B1</div>
                    <div className="text-center">3:20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-10 rounded-3xl border-4 border-orange-300 transform -rotate-1 relative overflow-hidden">
              {/* Cassette Tape Design Elements */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-3 border-white shadow-lg"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
                
                <h2 className="text-3xl font-black text-orange-900 mb-8 tracking-widest uppercase">빠른 액션</h2>
                
                <div className="space-y-6">
                  <button className="w-full p-5 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-black tracking-widest uppercase rounded-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border-4 border-orange-300">
                    <span className="relative z-10">🎵 새 음악 찾기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="w-full p-5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-black tracking-widest uppercase rounded-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border-4 border-amber-300">
                    <span className="relative z-10">📱 플레이리스트 만들기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="w-full p-5 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-black tracking-widest uppercase rounded-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border-4 border-yellow-300">
                    <span className="relative z-10">🎭 감정 분석하기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="w-full p-5 border-4 border-orange-300 text-orange-700 font-black tracking-wide rounded-2xl hover:bg-orange-50 transition-all duration-300">
                    ⚙️ 설정
                  </button>
                </div>
                
                {/* Track Info Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform rotate-3">
                  <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                    <div className="text-center">TRACK B2</div>
                    <div className="text-center">2:45</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mood Tracker */}
            <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-10 rounded-3xl border-4 border-orange-300 mt-8 transform rotate-1 relative overflow-hidden">
              {/* Cassette Tape Design Elements */}
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-2 border-white shadow-lg"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-3 border-white shadow-lg"></div>
                
                <h3 className="text-2xl font-black text-orange-900 mb-6 tracking-widest uppercase">오늘의 기분</h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <button className="p-4 bg-gradient-to-r from-orange-100 to-amber-100 hover:from-orange-200 hover:to-amber-200 rounded-2xl transition-all duration-300 relative border-2 border-orange-200">
                    <div className="text-3xl mb-2">😊</div>
                    <div className="text-xs text-orange-600 font-bold tracking-wide">행복</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-300/80 rounded-full border border-white"></div>
                  </button>
                  <button className="p-4 bg-gradient-to-r from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 rounded-2xl transition-all duration-300 relative border-2 border-amber-200">
                    <div className="text-3xl mb-2">😌</div>
                    <div className="text-xs text-amber-600 font-bold tracking-wide">평온</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-300/80 rounded-full border border-white"></div>
                  </button>
                  <button className="p-4 bg-gradient-to-r from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 rounded-2xl transition-all duration-300 relative border-2 border-yellow-200">
                    <div className="text-3xl mb-2">🎵</div>
                    <div className="text-xs text-yellow-600 font-bold tracking-wide">음악적</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300/80 rounded-full border border-white"></div>
                  </button>
                </div>
                
                <button className="w-full p-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-black tracking-wide rounded-2xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group border-4 border-gray-400">
                  <span className="relative z-10">기분 기록하기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {/* Track Info Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform -rotate-3">
                  <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                    <div className="text-center">TRACK B3</div>
                    <div className="text-center">1:15</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Playlists - Album Insert Style */}
        <div className="mt-16">
          <div className="bg-white/95 backdrop-blur-sm shadow-3xl p-10 rounded-3xl border-4 border-orange-300 transform rotate-1 relative overflow-hidden">
            {/* Cassette Tape Design Elements */}
            <div className="absolute top-6 right-6 w-20 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-6 opacity-20 shadow-lg"></div>
            <div className="absolute bottom-6 left-6 w-16 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-8 opacity-20 shadow-lg"></div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-3 border-white shadow-lg"></div>
              
              <h2 className="text-3xl font-black text-orange-900 mb-8 tracking-widest uppercase">최근 플레이리스트</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group cursor-pointer relative">
                  <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-8 text-white mb-4 group-hover:shadow-3xl transition-all duration-300 relative overflow-hidden border-4 border-orange-300">
                    <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse border-2 border-white"></div>
                    <div className="text-4xl mb-4">🎵</div>
                    <h3 className="font-black text-xl mb-3 tracking-wide">아침을 깨우는 음악</h3>
                    <p className="text-orange-100 text-lg font-bold tracking-wide">15곡 • 45분</p>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl p-8 text-white mb-4 group-hover:shadow-3xl transition-all duration-300 relative overflow-hidden border-4 border-amber-300">
                    <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-float border-2 border-white"></div>
                    <div className="text-4xl mb-4">🏃‍♂️</div>
                    <h3 className="font-black text-xl mb-3 tracking-wide">운동할 때 듣기</h3>
                    <p className="text-amber-100 text-lg font-bold tracking-wide">23곡 • 1시간 15분</p>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-8 text-white mb-4 group-hover:shadow-3xl transition-all duration-300 relative overflow-hidden border-4 border-yellow-300">
                    <div className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full animate-pulse border-2 border-white"></div>
                    <div className="text-4xl mb-4">😴</div>
                    <h3 className="font-black text-xl mb-3 tracking-wide">잠들기 전 음악</h3>
                    <p className="text-yellow-100 text-lg font-bold tracking-wide">12곡 • 35분</p>
                  </div>
                </div>
              </div>
              
              {/* Track Info Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform -rotate-3">
                <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
                  <div className="text-center">TRACK B4</div>
                  <div className="text-center">4:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Album Credits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-6 rounded-2xl border-4 border-orange-300 transform rotate-1 inline-block">
            <div className="text-sm text-orange-800 font-black tracking-widest uppercase">
              <div className="mb-2">PRODUCED BY: USER DASHBOARD</div>
              <div className="mb-2">MIXED BY: MUSIC ANALYTICS</div>
              <div className="mb-2">MASTERED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 
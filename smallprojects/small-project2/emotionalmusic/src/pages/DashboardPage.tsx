import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden font-sans">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-28 bg-neon-lime-200 rounded-3xl transform rotate-12 shadow-elegant"></div>
        <div className="absolute bottom-20 right-20 w-36 h-24 bg-vintage-300 rounded-3xl transform -rotate-6 shadow-elegant"></div>
        <div className="absolute top-60 left-1/2 w-32 h-20 bg-neon-lime-100 rounded-3xl transform rotate-45 shadow-elegant"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-16 bg-vintage-200 rounded-3xl transform -rotate-12 shadow-elegant"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-12 bg-neon-lime-100 rounded-3xl transform rotate-30 shadow-elegant"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-16 bg-vintage-300 rounded-3xl transform rotate-15 shadow-elegant"></div>
      </div>

      {/* Header with Clean Design */}
      <div className="bg-white/95 backdrop-blur-md shadow-elegant border-b border-gray-200 relative overflow-hidden">
        <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
        
        <div className="container mx-auto px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="relative">
              {/* Subtle Design Elements */}
              <div className="absolute -top-4 left-0 w-32 h-20 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="absolute -bottom-4 right-0 w-28 h-16 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-6 opacity-20"></div>
              
              <h1 className="font-serif text-5xl font-light bg-gradient-to-r from-neon-lime-600 via-neon-lime-500 to-vintage-500 bg-clip-text text-transparent tracking-wide relative z-10">
                🎵 음악 대시보드
              </h1>
              
              {/* Decorative Dots */}
              <div className="flex items-center space-x-6 mt-6">
                <div className="w-6 h-6 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300 shadow-lg"></div>
                <div className="w-6 h-6 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300 shadow-lg"></div>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <span className="text-gray-700 text-xl font-light tracking-wide">안녕하세요, 사용자님</span>
              <div className="w-14 h-14 bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 rounded-full flex items-center justify-center text-white font-medium text-xl relative border-2 border-white shadow-elegant">
                U
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-neon-lime-300/80 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-16">
        {/* Quick Stats - Clean Card Style */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-10 rounded-3xl border border-gray-200 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-lime-100 to-neon-lime-200 rounded-3xl flex items-center justify-center mr-8 relative border-2 border-neon-lime-200">
                <span className="text-4xl">🎵</span>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-neon-lime-300/80 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-4xl font-medium text-gray-900">127</div>
                <div className="text-gray-600 font-medium tracking-wide">저장된 곡</div>
              </div>
            </div>
            
            {/* Info Badge */}
            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform -rotate-3">
              <div className="text-xs text-gray-700 font-medium tracking-wide">
                <div className="text-center font-serif">TRACK A1</div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-10 rounded-3xl border border-gray-200 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-vintage-100 to-vintage-200 rounded-3xl flex items-center justify-center mr-8 relative border-2 border-vintage-200">
                <span className="text-4xl">📱</span>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-vintage-300/80 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-4xl font-medium text-gray-900">23</div>
                <div className="text-gray-600 font-medium tracking-wide">플레이리스트</div>
              </div>
            </div>
            
            {/* Info Badge */}
            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-vintage-100 to-neon-lime-100 p-3 rounded-2xl border border-vintage-200 transform rotate-3">
              <div className="text-xs text-gray-700 font-medium tracking-wide">
                <div className="text-center font-serif">TRACK A2</div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-10 rounded-3xl border border-gray-200 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-neon-lime-200 to-vintage-300 rounded-full border-2 border-white shadow-lg"></div>
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-lime-100 to-vintage-100 rounded-3xl flex items-center justify-center mr-8 relative border-2 border-neon-lime-200">
                <span className="text-4xl">⏱️</span>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-neon-lime-300/80 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-4xl font-medium text-gray-900">8.5h</div>
                <div className="text-gray-600 font-medium tracking-wide">이번 주 듣기</div>
              </div>
            </div>
            
            {/* Info Badge */}
            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform -rotate-3">
              <div className="text-xs text-gray-700 font-medium tracking-wide">
                <div className="text-center font-serif">TRACK A3</div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-10 rounded-3xl border border-gray-200 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-6 right-6 w-6 h-6 bg-gradient-to-br from-neon-lime-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-neon-lime-100 to-vintage-100 rounded-3xl flex items-center justify-center mr-8 relative border-2 border-neon-lime-200">
                <span className="text-4xl">❤️</span>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-neon-lime-300/80 rounded-full border border-white"></div>
              </div>
              <div>
                <div className="text-4xl font-medium text-gray-900">95%</div>
                <div className="text-gray-600 font-medium tracking-wide">만족도</div>
              </div>
            </div>
            
            {/* Info Badge */}
            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-vintage-100 to-neon-lime-100 p-3 rounded-2xl border border-vintage-200 transform rotate-3">
              <div className="text-xs text-gray-700 font-medium tracking-wide">
                <div className="text-center font-serif">TRACK A4</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Clean Card Style */}
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-12 rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500 relative overflow-hidden">
              {/* Subtle Design Elements */}
              <div className="absolute top-8 right-8 w-20 h-12 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-6 opacity-20 shadow-lg"></div>
              <div className="absolute bottom-8 left-8 w-16 h-10 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-8 opacity-20 shadow-lg"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
                
                <h2 className="font-serif text-4xl font-light text-gray-900 mb-10 tracking-wide">최근 활동</h2>
                
                <div className="space-y-8">
                  <div className="flex items-center p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl border border-gray-200 relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-neon-lime-100 to-neon-lime-200 rounded-full flex items-center justify-center mr-8 relative border-2 border-neon-lime-200">
                      <span className="text-2xl">🎵</span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-lime-300/80 rounded-full border border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-xl tracking-wide">새로운 곡을 저장했습니다</div>
                      <div className="text-gray-600 font-medium tracking-wide">Ed Sheeran - Shape of You</div>
                    </div>
                    <div className="text-gray-500 font-medium tracking-wide">2시간 전</div>
                  </div>

                  <div className="flex items-center p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl border border-gray-200 relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-vintage-100 to-vintage-200 rounded-full flex items-center justify-center mr-8 relative border-2 border-vintage-200">
                      <span className="text-2xl">📱</span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-vintage-300/80 rounded-full border border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-xl tracking-wide">새 플레이리스트를 만들었습니다</div>
                      <div className="text-gray-600 font-medium tracking-wide">운동할 때 듣기 좋은 음악</div>
                    </div>
                    <div className="text-gray-500 font-medium tracking-wide">5시간 전</div>
                  </div>

                  <div className="flex items-center p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl border border-gray-200 relative">
                    <div className="w-14 h-14 bg-gradient-to-r from-neon-lime-100 to-vintage-100 rounded-full flex items-center justify-center mr-8 relative border-2 border-neon-lime-200">
                      <span className="text-2xl">🎭</span>
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-lime-300/80 rounded-full border border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800 text-xl tracking-wide">감정 분석 완료</div>
                      <div className="text-gray-600 font-medium tracking-wide">기쁜 기분에 맞는 음악 추천</div>
                    </div>
                    <div className="text-gray-500 font-medium tracking-wide">1일 전</div>
                  </div>
                </div>
                
                {/* Info Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform -rotate-3">
                  <div className="text-xs text-gray-700 font-medium tracking-wide">
                    <div className="text-center font-serif">TRACK B1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-12 rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500 relative overflow-hidden">
              {/* Subtle Design Elements */}
              <div className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
                
                <h2 className="font-serif text-4xl font-light text-gray-900 mb-10 tracking-wide">빠른 액션</h2>
                
                <div className="space-y-8">
                  <button className="w-full p-6 bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 text-white font-medium tracking-wide rounded-3xl hover:shadow-card-hover transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border border-neon-lime-400">
                    <span className="relative z-10">🎵 새 음악 찾기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-600 to-neon-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="w-full p-6 bg-gradient-to-r from-vintage-500 to-vintage-600 text-white font-medium tracking-wide rounded-3xl hover:shadow-card-hover transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border border-vintage-400">
                    <span className="relative z-10">📱 플레이리스트 만들기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-vintage-600 to-vintage-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="w-full p-6 bg-gradient-to-r from-neon-lime-400 to-vintage-500 text-white font-medium tracking-wide rounded-3xl hover:shadow-card-hover transform hover:scale-105 transition-all duration-300 relative overflow-hidden group border border-neon-lime-300">
                    <span className="relative z-10">🎭 감정 분석하기</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-vintage-500 to-neon-lime-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  <button className="w-full p-6 border-2 border-gray-300 text-gray-700 font-medium tracking-wide rounded-3xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                    ⚙️ 설정
                  </button>
                </div>
                
                {/* Info Badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform rotate-3">
                  <div className="text-xs text-gray-700 font-medium tracking-wide">
                    <div className="text-center font-serif">TRACK B2</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mood Tracker */}
            <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-12 rounded-3xl border border-gray-200 mt-8 transform hover:scale-100.5 transition-all duration-500 relative overflow-hidden">
              {/* Subtle Design Elements */}
              <div className="absolute bottom-8 left-8 w-4 h-4 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
              
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
                
                <h3 className="font-serif text-3xl font-light text-gray-900 mb-8 tracking-wide">오늘의 기분</h3>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <button className="p-6 bg-gradient-to-r from-neon-lime-100 to-neon-lime-200 hover:from-neon-lime-200 hover:to-neon-lime-300 rounded-3xl transition-all duration-300 relative border-2 border-neon-lime-200">
                    <div className="text-4xl mb-3">😊</div>
                    <div className="text-sm text-neon-lime-700 font-medium tracking-wide">행복</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-lime-300/80 rounded-full border border-white"></div>
                  </button>
                  <button className="p-6 bg-gradient-to-r from-vintage-100 to-vintage-200 hover:from-vintage-200 hover:to-vintage-300 rounded-3xl transition-all duration-300 relative border-2 border-vintage-200">
                    <div className="text-4xl mb-3">😌</div>
                    <div className="text-sm text-vintage-700 font-medium tracking-wide">평온</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-vintage-300/80 rounded-full border border-white"></div>
                  </button>
                  <button className="p-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 hover:from-neon-lime-200 hover:to-vintage-200 rounded-3xl transition-all duration-300 relative border-2 border-neon-lime-200">
                    <div className="text-4xl mb-3">🎵</div>
                    <div className="text-sm text-gray-700 font-medium tracking-wide">음악적</div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-neon-lime-300/80 rounded-full border border-white"></div>
                  </button>
                </div>
                
                <button className="w-full p-6 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium tracking-wide rounded-3xl hover:shadow-elegant transition-all duration-300 relative overflow-hidden group border border-gray-400">
                  <span className="relative z-10">기분 기록하기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-500 to-vintage-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                {/* Info Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform -rotate-3">
                  <div className="text-xs text-gray-700 font-medium tracking-wide">
                    <div className="text-center font-serif">TRACK B3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Playlists - Clean Card Style */}
        <div className="mt-20">
          <div className="bg-white/95 backdrop-blur-sm shadow-elegant p-12 rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500 relative overflow-hidden">
            {/* Subtle Design Elements */}
            <div className="absolute top-8 right-8 w-20 h-12 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-6 opacity-20 shadow-lg"></div>
            <div className="absolute bottom-8 left-8 w-16 h-10 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-8 opacity-20 shadow-lg"></div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
              
              <h2 className="font-serif text-4xl font-light text-gray-900 mb-10 tracking-wide">최근 플레이리스트</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group cursor-pointer relative">
                  <div className="bg-gradient-to-br from-neon-lime-400 to-neon-lime-500 rounded-3xl p-10 text-white mb-4 group-hover:shadow-card-hover transition-all duration-300 relative overflow-hidden border border-neon-lime-300">
                    <div className="absolute top-6 right-6 w-6 h-6 bg-white/20 rounded-full animate-pulse border-2 border-white"></div>
                    <div className="text-5xl mb-6">🎵</div>
                    <h3 className="font-medium text-2xl mb-4 tracking-wide">아침을 깨우는 음악</h3>
                    <p className="text-neon-lime-100 text-xl font-medium tracking-wide">15곡 • 45분</p>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <div className="bg-gradient-to-br from-vintage-400 to-vintage-500 rounded-3xl p-10 text-white mb-4 group-hover:shadow-card-hover transition-all duration-300 relative overflow-hidden border border-vintage-300">
                    <div className="absolute top-6 right-6 w-6 h-6 bg-white/20 rounded-full animate-float border-2 border-white"></div>
                    <div className="text-5xl mb-6">🏃‍♂️</div>
                    <h3 className="font-medium text-2xl mb-4 tracking-wide">운동할 때 듣기</h3>
                    <p className="text-vintage-100 text-xl font-medium tracking-wide">23곡 • 1시간 15분</p>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <div className="bg-gradient-to-br from-neon-lime-300 to-vintage-400 rounded-3xl p-10 text-white mb-4 group-hover:shadow-card-hover transition-all duration-300 relative overflow-hidden border border-neon-lime-200">
                    <div className="absolute top-6 right-6 w-6 h-6 bg-white/20 rounded-full animate-pulse border-2 border-white"></div>
                    <div className="text-5xl mb-6">😴</div>
                    <h3 className="font-medium text-2xl mb-4 tracking-wide">잠들기 전 음악</h3>
                    <p className="text-gray-100 text-xl font-medium tracking-wide">12곡 • 35분</p>
                  </div>
                </div>
              </div>
              
              {/* Info Badge */}
              <div className="absolute top-6 right-6 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border border-neon-lime-200 transform -rotate-3">
                <div className="text-xs text-gray-700 font-medium tracking-wide">
                  <div className="text-center font-serif">TRACK B4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Credits */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-3xl border border-gray-200 transform rotate-1 inline-block">
            <div className="text-sm text-gray-600 font-medium tracking-wide">
              <div className="mb-3">PRODUCED BY: USER DASHBOARD</div>
              <div className="mb-3">MIXED BY: MUSIC ANALYTICS</div>
              <div className="mb-3">MASTERED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 
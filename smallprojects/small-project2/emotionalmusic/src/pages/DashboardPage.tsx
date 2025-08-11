import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kitsch-pink-50 via-kitsch-purple-50 to-kitsch-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-kitsch-pattern opacity-20"></div>
      
      {/* Floating Kitsch Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-float"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-br from-kitsch-purple-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-br from-kitsch-blue-300 to-kitsch-pink-300 rounded-full opacity-60 animate-kitsch-float"></div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md shadow-kitsch border-b border-white/30 relative overflow-hidden">
        <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-kitsch-pink-200 to-kitsch-purple-200 rounded-full opacity-60 animate-kitsch-pulse"></div>
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-kitsch-pink-500 via-kitsch-purple-500 to-kitsch-blue-500 bg-clip-text text-transparent">
              🎵 음악 대시보드
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">안녕하세요, 사용자님</span>
              <div className="w-10 h-10 bg-gradient-to-r from-kitsch-purple-400 to-kitsch-blue-500 rounded-full flex items-center justify-center text-white font-semibold relative">
                U
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-kitsch-pink-300/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="kitsch-card p-6 shadow-kitsch hover:shadow-kitsch-glow transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-kitsch-pink-100 to-kitsch-purple-100 rounded-xl flex items-center justify-center mr-4 relative">
                <span className="text-2xl">🎵</span>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-kitsch-pink-300/60 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">127</div>
                <div className="text-gray-600">저장된 곡</div>
              </div>
            </div>
          </div>

          <div className="kitsch-card p-6 shadow-kitsch hover:shadow-kitsch-glow transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-kitsch-purple-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-kitsch-purple-100 to-kitsch-blue-100 rounded-xl flex items-center justify-center mr-4 relative">
                <span className="text-2xl">📱</span>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-kitsch-purple-300/60 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">23</div>
                <div className="text-gray-600">플레이리스트</div>
              </div>
            </div>
          </div>

          <div className="kitsch-card p-6 shadow-kitsch hover:shadow-kitsch-glow transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-kitsch-blue-300 to-kitsch-pink-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-kitsch-blue-100 to-kitsch-pink-100 rounded-xl flex items-center justify-center mr-4 relative">
                <span className="text-2xl">⏱️</span>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-kitsch-blue-300/60 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">8.5h</div>
                <div className="text-gray-600">이번 주 듣기</div>
              </div>
            </div>
          </div>

          <div className="kitsch-card p-6 shadow-kitsch hover:shadow-kitsch-glow transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-kitsch-peach-300 to-kitsch-pink-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-kitsch-peach-100 to-kitsch-pink-100 rounded-xl flex items-center justify-center mr-4 relative">
                <span className="text-2xl">❤️</span>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-kitsch-peach-300/60 rounded-full"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">95%</div>
                <div className="text-gray-600">만족도</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="kitsch-card p-8 shadow-kitsch relative overflow-hidden">
              <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-kitsch-pink-200 to-kitsch-purple-200 rounded-full opacity-60 animate-kitsch-float"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-br from-kitsch-blue-200 to-kitsch-pink-200 rounded-full opacity-60 animate-kitsch-pulse"></div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">최근 활동</h2>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gradient-to-r from-kitsch-pink-50 to-kitsch-purple-50 rounded-xl border border-white/50 relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-kitsch-pink-100 to-kitsch-purple-100 rounded-full flex items-center justify-center mr-4 relative">
                    <span className="text-lg">🎵</span>
                    <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-kitsch-pink-300/60 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">새로운 곡을 저장했습니다</div>
                    <div className="text-sm text-gray-600">Ed Sheeran - Shape of You</div>
                  </div>
                  <div className="text-sm text-gray-500">2시간 전</div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-kitsch-purple-50 to-kitsch-blue-50 rounded-xl border border-white/50 relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-kitsch-purple-100 to-kitsch-blue-100 rounded-full flex items-center justify-center mr-4 relative">
                    <span className="text-lg">📱</span>
                    <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-kitsch-purple-300/60 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">새 플레이리스트를 만들었습니다</div>
                    <div className="text-sm text-gray-600">운동할 때 듣기 좋은 음악</div>
                  </div>
                  <div className="text-sm text-gray-500">5시간 전</div>
                </div>

                <div className="flex items-center p-4 bg-gradient-to-r from-kitsch-blue-50 to-kitsch-pink-50 rounded-xl border border-white/50 relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-kitsch-blue-100 to-kitsch-pink-100 rounded-full flex items-center justify-center mr-4 relative">
                    <span className="text-lg">🎭</span>
                    <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-kitsch-blue-300/60 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">감정 분석 완료</div>
                    <div className="text-sm text-gray-600">기쁜 기분에 맞는 음악 추천</div>
                  </div>
                  <div className="text-sm text-gray-500">1일 전</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="kitsch-card p-8 shadow-kitsch relative overflow-hidden">
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-kitsch-pink-200 to-kitsch-purple-200 rounded-full opacity-60 animate-kitsch-float"></div>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-6">빠른 액션</h2>
              
              <div className="space-y-4">
                <button className="w-full p-4 bg-gradient-to-r from-kitsch-pink-500 to-kitsch-purple-500 text-white font-semibold rounded-xl hover:shadow-kitsch-glow transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">🎵 새 음악 찾기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-kitsch-purple-500 to-kitsch-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="w-full p-4 bg-gradient-to-r from-kitsch-purple-500 to-kitsch-blue-500 text-white font-semibold rounded-xl hover:shadow-kitsch-glow transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">📱 플레이리스트 만들기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-kitsch-blue-500 to-kitsch-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="w-full p-4 bg-gradient-to-r from-kitsch-blue-500 to-kitsch-peach-500 text-white font-semibold rounded-xl hover:shadow-kitsch-glow transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">🎭 감정 분석하기</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-kitsch-peach-500 to-kitsch-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="w-full p-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 kitsch-border">
                  ⚙️ 설정
                  <div className="kitsch-dot absolute -top-1 -right-1"></div>
                </button>
              </div>
            </div>

            {/* Mood Tracker */}
            <div className="kitsch-card p-8 shadow-kitsch mt-6 relative overflow-hidden">
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-kitsch-blue-200 to-kitsch-pink-200 rounded-full opacity-60 animate-kitsch-pulse"></div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">오늘의 기분</h3>
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                <button className="p-3 bg-gradient-to-r from-kitsch-pink-100 to-kitsch-purple-100 hover:from-kitsch-pink-200 hover:to-kitsch-purple-200 rounded-xl transition-all duration-300 relative">
                  <div className="text-2xl mb-1">😊</div>
                  <div className="text-xs text-gray-600">행복</div>
                  <div className="kitsch-dot absolute -top-1 -right-1"></div>
                </button>
                <button className="p-3 bg-gradient-to-r from-kitsch-blue-100 to-kitsch-purple-100 hover:from-kitsch-blue-200 hover:to-kitsch-purple-200 rounded-xl transition-all duration-300 relative">
                  <div className="text-2xl mb-1">😌</div>
                  <div className="text-xs text-gray-600">평온</div>
                  <div className="kitsch-cross absolute -top-1 -right-1"></div>
                </button>
                <button className="p-3 bg-gradient-to-r from-kitsch-purple-100 to-kitsch-pink-100 hover:from-kitsch-purple-200 hover:to-kitsch-pink-200 rounded-xl transition-all duration-300 relative">
                  <div className="text-2xl mb-1">🎵</div>
                  <div className="text-xs text-gray-600">음악적</div>
                  <div className="kitsch-dot absolute -top-1 -right-1"></div>
                </button>
              </div>
              
              <button className="w-full p-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-xl hover:shadow-kitsch transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">기분 기록하기</span>
                <div className="absolute inset-0 bg-gradient-to-r from-kitsch-pink-500 to-kitsch-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Playlists */}
        <div className="mt-8">
          <div className="kitsch-card p-8 shadow-kitsch relative overflow-hidden">
            <div className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-kitsch-pink-200 to-kitsch-purple-200 rounded-full opacity-60 animate-kitsch-float"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-br from-kitsch-blue-200 to-kitsch-pink-200 rounded-full opacity-60 animate-kitsch-pulse"></div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-6">최근 플레이리스트</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group cursor-pointer relative">
                <div className="bg-gradient-to-br from-kitsch-pink-400 to-kitsch-purple-500 rounded-2xl p-6 text-white mb-4 group-hover:shadow-kitsch-glow transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full animate-kitsch-pulse"></div>
                  <div className="text-3xl mb-2">🎵</div>
                  <h3 className="font-bold text-lg mb-2">아침을 깨우는 음악</h3>
                  <p className="text-pink-100 text-sm">15곡 • 45분</p>
                </div>
              </div>

              <div className="group cursor-pointer relative">
                <div className="bg-gradient-to-br from-kitsch-blue-400 to-kitsch-purple-500 rounded-2xl p-6 text-white mb-4 group-hover:shadow-kitsch-glow transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full animate-kitsch-float"></div>
                  <div className="text-3xl mb-2">🏃‍♂️</div>
                  <h3 className="font-bold text-lg mb-2">운동할 때 듣기</h3>
                  <p className="text-blue-100 text-sm">23곡 • 1시간 15분</p>
                </div>
              </div>

              <div className="group cursor-pointer relative">
                <div className="bg-gradient-to-br from-kitsch-peach-400 to-kitsch-blue-500 rounded-2xl p-6 text-white mb-4 group-hover:shadow-kitsch-glow transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full animate-kitsch-pulse"></div>
                  <div className="text-3xl mb-2">😴</div>
                  <h3 className="font-bold text-lg mb-2">잠들기 전 음악</h3>
                  <p className="text-peach-100 text-sm">12곡 • 35분</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 
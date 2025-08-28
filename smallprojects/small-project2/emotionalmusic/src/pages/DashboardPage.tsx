import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden font-sans bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50">
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-64 transform rounded-full top-20 left-20 w-96 bg-gradient-to-br from-blue-200 to-blue-300 rotate-12 blur-3xl"></div>
        <div className="absolute h-48 transform rounded-full bottom-20 right-20 w-72 bg-gradient-to-br from-blue-100 to-blue-200 -rotate-6 blur-2xl"></div>
        <div className="absolute w-64 h-40 transform rotate-45 rounded-full top-60 left-1/2 bg-gradient-to-br from-blue-300 to-blue-400 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="border-b border-gray-200 glass-nav">
        <div className="max-w-4xl px-8 py-8 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 gradient-text">
                🎵 음악 대시보드
              </h1>
              <div className="flex items-center mt-2 space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-300"></div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">
                안녕하세요, 사용자님
              </span>
              <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-500">
                U
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl px-8 py-16 mx-auto">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <div className="p-6 text-center modern-card">
            <div className="mb-3 text-3xl">📊</div>
            <h3 className="mb-2 font-bold text-gray-900">분석</h3>
            <p className="text-gray-600">당신의 감정 여행을 추적하세요</p>
          </div>
          <div className="p-6 text-center modern-card">
            <div className="mb-3 text-3xl">🎵</div>
            <h3 className="mb-2 font-bold text-gray-900">음악 라이브러리</h3>
            <p className="text-gray-600">당신의 개인화된 컬렉션</p>
          </div>
          <div className="p-6 text-center modern-card">
            <div className="mb-3 text-3xl">💡</div>
            <h3 className="mb-2 font-bold text-gray-900">통찰</h3>
            <p className="text-gray-600">AI 기반 추천</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-12 mb-12 text-center modern-card">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            대시보드 곧 출시
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            당신의 감정적 음악 여행에 대한 상세한 분석과 통찰을 제공하기 위해
            작업 중입니다.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 font-medium soft-button rounded-xl"
          >
            ← 홈으로 돌아가기
          </button>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-block p-6 modern-card">
            <div className="text-sm text-gray-500">
              <div className="mb-2">제공: 음악 분석</div>
              <div className="mb-2">개발자: hyemin</div>
              <div className="text-xs">© 2025 감정 음악 프로젝트</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

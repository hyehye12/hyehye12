import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { EMOTIONS } from "../data/emotionConstants";

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
  const [selectedEmotion, setSelectedEmotion] = useState<string>("");
  const [recommendations, setRecommendations] = useState<MusicRecommendation[]>(
    []
  );

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
                🎵 음악 커뮤니티
              </h1>
              <div className="flex items-center mt-2 space-x-3">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-300"></div>
              </div>
            </div>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 font-medium text-gray-700 transition-all glass-effect rounded-xl hover:soft-glow"
            >
              ← 홈으로 돌아가기
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl px-8 py-16 mx-auto">
        {/* Main Content */}
        <div className="p-12 text-center modern-card">
          <div className="mb-8 text-6xl">🚧</div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            커뮤니티 곧 출시
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            감정적 음악 경험을 통해 발견하고, 공유하고, 연결될 수 있는 놀라운
            음악 커뮤니티를 구축 중입니다.
          </p>

          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
            <div className="p-6 border border-blue-100 bg-blue-50/50 rounded-xl">
              <div className="mb-3 text-2xl">🤝</div>
              <h3 className="mb-2 font-bold text-gray-900">연결</h3>
              <p className="text-sm text-gray-600">
                당신의 음악 발견을 공유하세요
              </p>
            </div>
            <div className="p-6 border border-purple-100 bg-purple-50/50 rounded-xl">
              <div className="mb-3 text-2xl">💬</div>
              <h3 className="mb-2 font-bold text-gray-900">토론</h3>
              <p className="text-sm text-gray-600">
                감정과 음악에 대해 이야기하세요
              </p>
            </div>
            <div className="p-6 border border-green-100 bg-green-50/50 rounded-xl">
              <div className="mb-3 text-2xl">🎯</div>
              <h3 className="mb-2 font-bold text-gray-900">발견</h3>
              <p className="text-sm text-gray-600">
                당신의 기분에 완벽한 트랙을 찾아보세요
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 font-medium soft-button rounded-xl"
          >
            ← Back to Home
          </button>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 modern-card">
            <div className="text-sm text-gray-500">
              <div className="mb-2">제공: 음악 커뮤니티</div>
              <div className="mb-2">개발자: hyemin</div>
              <div className="text-xs">© 2025 감정 음악 프로젝트</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

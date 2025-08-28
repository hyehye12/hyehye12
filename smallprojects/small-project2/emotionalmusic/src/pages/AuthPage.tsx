import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(email, password);
      } else {
        if (!name.trim()) {
          throw new Error('이름을 입력해주세요.');
        }
        await register(email, password, name);
      }
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : '오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 flex items-center justify-center p-8 font-sans relative overflow-hidden">
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full transform rotate-12 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform -rotate-6 blur-2xl"></div>
        <div className="absolute top-60 left-1/2 w-64 h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full transform rotate-45 blur-3xl"></div>
      </div>
      
      <div className="modern-card p-12 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-4">
            🔐
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {isLogin ? '다시 오신 것을 환영합니다' : '회원가입'}
          </h1>
          <p className="text-gray-600">
            {isLogin ? '계정에 로그인하세요' : '감정 음악 커뮤니티에 가입하세요'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-soft-blue focus:border-soft-blue backdrop-blur-sm transition-all duration-300"
                placeholder="이름을 입력하세요"
                required={!isLogin}
              />
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              이메일
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-soft-blue focus:border-soft-blue backdrop-blur-sm transition-all duration-300"
              placeholder="이메일을 입력하세요"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/60 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-soft-blue focus:border-soft-blue backdrop-blur-sm transition-all duration-300"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full soft-button py-3 rounded-xl font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {isLogin ? '로그인 중...' : '계정 생성 중...'}
              </div>
            ) : (
              isLogin ? '🔑 로그인' : '🚀 계정 만들기'
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            {isLogin ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}
          </p>
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError('');
            }}
            className="glass-effect px-6 py-3 rounded-xl font-medium text-gray-700 hover:soft-glow transition-all"
          >
            {isLogin ? '새 계정 만들기' : '로그인하기'}
          </button>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            ← 홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
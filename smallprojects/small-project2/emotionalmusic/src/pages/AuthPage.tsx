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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-kitsch-pink-50 via-kitsch-purple-50 to-kitsch-blue-50 p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-kitsch-pattern opacity-20"></div>
      
      {/* Floating Kitsch Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-float"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-gradient-to-br from-kitsch-purple-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-gradient-to-br from-kitsch-blue-300 to-kitsch-pink-300 rounded-full opacity-60 animate-kitsch-float"></div>
      <div className="absolute top-60 left-1/2 w-2 h-2 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-blue-300 rounded-full opacity-60 animate-kitsch-pulse"></div>

      <div className="max-w-md w-full kitsch-card shadow-kitsch p-8 relative overflow-hidden">
        <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-kitsch-pink-200 to-kitsch-purple-200 rounded-full opacity-60 animate-kitsch-float"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-kitsch-blue-200 to-kitsch-pink-200 rounded-full opacity-60 animate-kitsch-pulse"></div>
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-kitsch-pink-500 via-kitsch-purple-500 to-kitsch-blue-500 bg-clip-text text-transparent mb-2">
            {isLogin ? '로그인' : '회원가입'}
          </h1>
          <p className="text-gray-600">
            {isLogin ? '계정에 로그인하세요' : '새로운 계정을 만드세요'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                이름
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-kitsch-purple-300 bg-white/80 backdrop-blur-sm shadow-kitsch transition-all duration-300"
                placeholder="이름을 입력하세요"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-kitsch-purple-300 bg-white/80 backdrop-blur-sm shadow-kitsch transition-all duration-300"
              placeholder="이메일을 입력하세요"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-kitsch-purple-300 bg-white/80 backdrop-blur-sm shadow-kitsch transition-all duration-300"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-300 relative overflow-hidden group ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-kitsch-pink-500 to-kitsch-purple-500 hover:shadow-kitsch-glow transform hover:-translate-y-1'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                처리 중...
              </div>
            ) : (
              <>
                <span className="relative z-10">{isLogin ? '로그인' : '회원가입'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-kitsch-purple-500 to-kitsch-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-kitsch-purple-600 hover:text-kitsch-purple-700 text-sm font-medium transition-colors duration-300"
          >
            {isLogin ? '계정이 없으신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
          </button>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-300 flex items-center justify-center mx-auto group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="ml-1">메인으로 돌아가기</span>
          </button>
        </div>
      </div>
    </div>
  );
} 
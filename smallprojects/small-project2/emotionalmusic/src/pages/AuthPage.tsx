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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 relative overflow-hidden font-sans">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-28 bg-neon-lime-200 rounded-3xl transform rotate-12 shadow-elegant"></div>
        <div className="absolute bottom-20 right-20 w-36 h-24 bg-vintage-300 rounded-3xl transform -rotate-6 shadow-elegant"></div>
        <div className="absolute top-60 left-1/2 w-32 h-20 bg-neon-lime-100 rounded-3xl transform rotate-45 shadow-elegant"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-16 bg-vintage-200 rounded-3xl transform -rotate-12 shadow-elegant"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-12 bg-neon-lime-100 rounded-3xl transform rotate-30 shadow-elegant"></div>
      </div>

      <div className="max-w-lg w-full bg-white/95 backdrop-blur-sm shadow-elegant p-16 relative overflow-hidden rounded-3xl border border-gray-200 transform hover:scale-100.5 transition-all duration-500">
        {/* Subtle Design Elements */}
        <div className="absolute top-8 right-8 w-20 h-12 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-6 opacity-20 shadow-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-10 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-8 opacity-20 shadow-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-gradient-to-br from-neon-lime-100 to-vintage-200 rounded-3xl transform rotate-45 opacity-10 shadow-lg"></div>
        
        <div className="text-center mb-12 relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full border-2 border-white shadow-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-vintage-300 to-vintage-400 rounded-full border-2 border-white shadow-lg"></div>
          
          <h1 className="font-serif text-5xl font-light bg-gradient-to-r from-neon-lime-600 via-neon-lime-500 to-vintage-500 bg-clip-text text-transparent mb-6 tracking-wide">
            {isLogin ? '로그인' : '회원가입'}
          </h1>
          
          {/* Decorative Dots */}
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="w-6 h-6 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300 shadow-lg"></div>
            <div className="w-6 h-6 bg-neon-lime-200 rounded-full border-2 border-neon-lime-300 shadow-lg"></div>
          </div>
          
          <p className="text-gray-700 text-xl font-light tracking-wide">
            {isLogin ? '계정에 로그인하세요' : '새로운 계정을 만드세요'}
          </p>
          
          {/* Info Badge */}
          <div className="mt-8 inline-block bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-4 rounded-2xl border border-neon-lime-200 transform -rotate-1">
            <div className="text-sm text-gray-700 font-medium tracking-wide">
              <div className="text-center font-serif">{isLogin ? 'LOGIN' : 'REGISTER'}</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {!isLogin && (
            <div className="relative">
              <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full opacity-60"></div>
              <label className="block text-lg font-medium text-gray-800 mb-4 tracking-wide">
                이름
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-neon-lime-200 focus:border-neon-lime-300 bg-white/90 backdrop-blur-sm shadow-elegant transition-all duration-300 font-medium tracking-wide text-gray-800"
                placeholder="이름을 입력하세요"
                required
              />
            </div>
          )}

          <div className="relative">
            <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full opacity-60"></div>
            <label className="block text-lg font-medium text-gray-800 mb-4 tracking-wide">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-neon-lime-200 focus:border-neon-lime-300 bg-white/90 backdrop-blur-sm shadow-elegant transition-all duration-300 font-medium tracking-wide text-gray-800"
              placeholder="이메일을 입력하세요"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-neon-lime-300 to-neon-lime-400 rounded-full opacity-60"></div>
            <label className="block text-lg font-medium text-gray-800 mb-4 tracking-wide">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-8 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-neon-lime-200 focus:border-neon-lime-300 bg-white/90 backdrop-blur-sm shadow-elegant transition-all duration-300 font-medium tracking-wide text-gray-800"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-lg text-center bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-2xl border-2 border-red-200 font-medium tracking-wide">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-6 px-8 rounded-2xl text-white font-medium tracking-wide transition-all duration-300 relative overflow-hidden group border-2 ${
              loading
                ? 'bg-gray-400 cursor-not-allowed border-gray-300'
                : 'bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 hover:shadow-card-hover transform hover:scale-105 border-neon-lime-400'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                <span className="relative z-10">처리 중...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10">{isLogin ? '로그인' : '회원가입'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-600 to-neon-lime-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </>
            )}
          </button>
        </form>

        <div className="mt-10 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-neon-lime-600 hover:text-neon-lime-800 text-lg font-medium tracking-wide transition-colors duration-300 border-2 border-neon-lime-200 px-8 py-4 rounded-2xl hover:bg-neon-lime-50 hover:border-neon-lime-300"
          >
            {isLogin ? '계정이 없으신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
          </button>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-800 text-lg font-medium tracking-wide transition-colors duration-300 flex items-center justify-center mx-auto group border-2 border-gray-200 px-8 py-4 rounded-2xl hover:bg-gray-50 hover:border-gray-300"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="ml-3">메인으로 돌아가기</span>
          </button>
        </div>
        
        {/* Info Badge */}
        <div className="absolute top-8 left-8 bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-3 rounded-2xl border-2 border-neon-lime-200 transform -rotate-3">
          <div className="text-xs text-gray-700 font-medium tracking-wide">
            <div className="text-center font-serif">AUTH</div>
          </div>
        </div>
        
        {/* Footer Credits */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-2xl border-2 border-gray-200 transform rotate-1 inline-block">
            <div className="text-xs text-gray-600 font-medium tracking-wide">
              <div className="mb-2">PRODUCED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
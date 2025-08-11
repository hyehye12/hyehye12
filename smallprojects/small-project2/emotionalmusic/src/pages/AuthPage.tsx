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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100 p-6 relative overflow-hidden font-mono">
      {/* Retro Cassette Tape Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-28 bg-orange-400 rounded-lg transform rotate-12 shadow-2xl"></div>
        <div className="absolute bottom-20 right-20 w-36 h-24 bg-orange-300 rounded-lg transform -rotate-6 shadow-2xl"></div>
        <div className="absolute top-60 left-1/2 w-32 h-20 bg-orange-500 rounded-lg transform rotate-45 shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-16 bg-amber-400 rounded-lg transform -rotate-12 shadow-2xl"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-12 bg-yellow-400 rounded-lg transform rotate-30 shadow-2xl"></div>
      </div>

      <div className="max-w-lg w-full bg-white/95 backdrop-blur-sm shadow-3xl p-12 relative overflow-hidden rounded-3xl border-4 border-orange-300 transform rotate-1">
        {/* Cassette Tape Design Elements */}
        <div className="absolute top-6 right-6 w-20 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg transform rotate-6 opacity-20 shadow-lg"></div>
        <div className="absolute bottom-6 left-6 w-16 h-10 bg-gradient-to-br from-orange-300 to-orange-500 rounded-lg transform -rotate-8 opacity-20 shadow-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg transform rotate-45 opacity-10 shadow-lg"></div>
        
        <div className="text-center mb-10 relative">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full border-4 border-white shadow-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full border-3 border-white shadow-lg"></div>
          
          <h1 className="text-4xl font-black bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-4 tracking-widest uppercase">
            {isLogin ? '로그인' : '회원가입'}
          </h1>
          
          {/* Cassette Tape Holes */}
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="w-6 h-6 bg-orange-200 rounded-full border-3 border-orange-400 shadow-lg"></div>
            <div className="w-6 h-6 bg-orange-200 rounded-full border-3 border-orange-400 shadow-lg"></div>
          </div>
          
          <p className="text-orange-700 text-xl font-bold tracking-wide">
            {isLogin ? '계정에 로그인하세요' : '새로운 계정을 만드세요'}
          </p>
          
          {/* Track Info */}
          <div className="mt-6 inline-block bg-gradient-to-r from-orange-200 to-amber-200 p-3 rounded-lg border-2 border-orange-300 transform -rotate-1">
            <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
              <div className="flex justify-between mb-1">
                <span>TRACK 01</span>
                <span>2:15</span>
              </div>
              <div className="text-center font-black text-orange-900">{isLogin ? 'LOGIN' : 'REGISTER'}</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {!isLogin && (
            <div className="relative">
              <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-60"></div>
              <label className="block text-lg font-black text-orange-800 mb-3 tracking-wide uppercase">
                이름
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 border-4 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-2xl transition-all duration-300 font-bold tracking-wide text-orange-800"
                placeholder="이름을 입력하세요"
                required
              />
            </div>
          )}

          <div className="relative">
            <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-60"></div>
            <label className="block text-lg font-black text-orange-800 mb-3 tracking-wide uppercase">
              이메일
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 border-4 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-2xl transition-all duration-300 font-bold tracking-wide text-orange-800"
              placeholder="이메일을 입력하세요"
              required
            />
          </div>

          <div className="relative">
            <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-60"></div>
            <label className="block text-lg font-black text-orange-800 mb-3 tracking-wide uppercase">
              비밀번호
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 border-4 border-orange-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-400 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-2xl transition-all duration-300 font-bold tracking-wide text-orange-800"
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-lg text-center bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-2xl border-4 border-red-200 font-bold tracking-wide">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-5 px-6 rounded-2xl text-white font-black tracking-widest uppercase transition-all duration-300 relative overflow-hidden group border-4 ${
              loading
                ? 'bg-gray-400 cursor-not-allowed border-gray-300'
                : 'bg-gradient-to-r from-orange-500 to-amber-600 hover:shadow-3xl transform hover:scale-105 border-orange-300'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-4 border-white mr-3"></div>
                <span className="relative z-10">처리 중...</span>
              </div>
            ) : (
              <>
                <span className="relative z-10">{isLogin ? '로그인' : '회원가입'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-600 hover:text-orange-800 text-lg font-black tracking-wide transition-colors duration-300 border-2 border-orange-200 px-6 py-3 rounded-xl hover:bg-orange-50"
          >
            {isLogin ? '계정이 없으신가요? 회원가입' : '이미 계정이 있으신가요? 로그인'}
          </button>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-orange-500 hover:text-orange-700 text-lg font-black tracking-wide transition-colors duration-300 flex items-center justify-center mx-auto group border-2 border-orange-200 px-6 py-3 rounded-xl hover:bg-orange-50"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="ml-2">메인으로 돌아가기</span>
          </button>
        </div>
        
        {/* Track Info Badge */}
        <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-200 to-amber-200 p-2 rounded-lg border-2 border-orange-300 transform -rotate-3">
          <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
            <div className="text-center">TRACK A1</div>
            <div className="text-center">1:45</div>
          </div>
        </div>
        
        {/* Album Credits */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 p-4 rounded-xl border-2 border-orange-300 transform rotate-1 inline-block">
            <div className="text-xs text-orange-800 font-black tracking-widest uppercase">
              <div className="mb-1">PRODUCED BY: EMOTIONAL MUSIC PROJECT</div>
              <div className="text-xs">© 2024 EMOTIONAL MUSIC PROJECT. ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
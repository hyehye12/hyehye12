import React from "react";
import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  emotion: string;
}

export default function LoadingSpinner({ emotion }: LoadingSpinnerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center p-8 font-sans relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-48 h-28 bg-neon-lime-200 rounded-3xl transform rotate-12 shadow-elegant"></div>
        <div className="absolute bottom-20 right-20 w-36 h-24 bg-vintage-300 rounded-3xl transform -rotate-6 shadow-elegant"></div>
        <div className="absolute top-60 left-1/2 w-32 h-20 bg-neon-lime-100 rounded-3xl transform rotate-45 shadow-elegant"></div>
      </div>
      
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-elegant p-16 max-w-lg w-full text-center animate-scale-in border border-gray-200 transform hover:scale-100.5 transition-all duration-500 relative overflow-hidden">
        {/* Subtle Design Elements */}
        <div className="absolute top-8 right-8 w-20 h-12 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-6 opacity-20 shadow-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-10 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-8 opacity-20 shadow-lg"></div>
        
        <motion.div
          className="mb-12"
          animate={{
            y: [-5, 5, -5],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 rounded-full flex items-center justify-center text-white text-3xl shadow-elegant border-2 border-white">
            🎵
          </div>
        </motion.div>
        
        <h2 className="font-serif text-3xl font-light text-gray-900 mb-6 tracking-wide">
          이야기 분석 중
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          당신의 하루를 분석하고 감정에 맞는 완벽한 음악을 찾고 있어요.
        </p>
        
        <div className="flex items-center justify-center mb-8">
          <div className="flex space-x-2">
            <motion.div
              className="w-3 h-3 bg-neon-lime-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-3 h-3 bg-neon-lime-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-3 h-3 bg-neon-lime-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-neon-lime-100 to-vintage-100 p-4 rounded-2xl border border-neon-lime-200 inline-block">
          <p className="text-sm text-gray-700 font-medium tracking-wide">
            감지된 감정: <span className="font-medium text-neon-lime-600">"{emotion}"</span>
          </p>
        </div>
      </div>
    </div>
  );
} 
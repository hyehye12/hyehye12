import React from "react";
import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  emotion: string;
}

export default function LoadingSpinner({ emotion }: LoadingSpinnerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 flex items-center justify-center p-8 font-sans relative overflow-hidden">
      {/* Organic curved background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-64 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full transform rotate-12 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full transform -rotate-6 blur-2xl"></div>
        <div className="absolute top-60 left-1/2 w-64 h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full transform rotate-45 blur-3xl"></div>
      </div>
      
      <div className="modern-card p-16 max-w-lg w-full text-center"
        >
        
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
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl border-2 border-white shadow-lg">
            🎵
            <div className="absolute w-4 h-4 bg-blue-300 border-2 border-white rounded-full -top-2 -right-2 animate-pulse"></div>
          </div>
        </motion.div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          음악 추천 중
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          AI가 당신의 감정에 어울리는 음악을 찾고 있습니다...
        </p>
        
        <div className="flex items-center justify-center mb-8">
          <div className="flex space-x-3">
            <motion.div
              className="w-3 h-3 bg-blue-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            <motion.div
              className="w-3 h-3 bg-blue-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
          </div>
        </div>
        
        <div className="p-4 border border-blue-100 bg-blue-50/50 rounded-xl">
          <div className="text-sm font-medium text-gray-600">추천 중...</div>
          <p className="text-sm text-gray-700 mt-2">
            감정: <span className="font-medium text-blue-600">"{emotion}"</span>
          </p>
        </div>
      </div>
    </div>
  );
} 
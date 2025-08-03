import React from "react";
import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  emotion: string;
}

export default function LoadingSpinner({ emotion }: LoadingSpinnerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-6 font-sans">
      <div className="bg-white rounded-2xl shadow-soft p-12 max-w-md w-full text-center animate-scale-in">
        <motion.div
          className="mb-8"
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
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl shadow-medium">
            🎵
          </div>
        </motion.div>
        
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
          Analyzing Your Story
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We're analyzing your day and finding the perfect music that matches your emotions.
        </p>
        
        <div className="flex items-center justify-center mb-6">
          <div className="flex space-x-1">
            <motion.div
              className="w-2 h-2 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-primary-500 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            />
          </div>
        </div>
        
        <p className="text-sm text-gray-500">
          Detected emotion: <span className="font-semibold text-primary-600">"{emotion}"</span>
        </p>
      </div>
    </div>
  );
} 
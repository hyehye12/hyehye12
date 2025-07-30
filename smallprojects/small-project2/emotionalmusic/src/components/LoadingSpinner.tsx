import React from "react";
import { motion } from "framer-motion";

type LoadingSpinnerProps = {
  emotion: string;
}

export default function LoadingSpinner({ emotion }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="text-center">
        <motion.div
          className="mb-4 text-4xl"
          animate={{
            y: [-10, 10, -10],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎵
        </motion.div>
        <h2 className="mb-2 text-2xl font-bold">일기를 분석하고 있어요...</h2>
        <p className="text-gray-600 mb-4">
          당신의 하루를 분석해서 어울리는 음악을 찾고 있어요!
        </p>
        <p className="text-sm text-gray-500">
          분석된 감정: <span className="font-semibold text-purple-600">"{emotion}"</span>
        </p>
      </div>
    </div>
  );
} 
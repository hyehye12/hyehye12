import React from "react";
import { motion } from "framer-motion";

interface LoadingSpinnerProps {
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
        <h2 className="mb-2 text-2xl font-bold">음악을 찾고 있어요...</h2>
        <p className="text-gray-600">
          "{emotion}"에 맞는 음악을 추천해드릴게요!
        </p>
      </div>
    </div>
  );
} 
import React from "react";
import { useGPTAnalysis } from "../hooks/useGPTAnalysis";
import { getCardStyle } from "../utils/buttonStyles";

type HealingProps = {
  userInput: string;
  onRestart: () => void;
};

export default function Healing({ userInput, onRestart }: HealingProps) {
  const { emotion, advice, loading, retry } = useGPTAnalysis(userInput);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-6 font-sans">
      <div className={`${getCardStyle()} p-12 max-w-2xl w-full text-center animate-scale-in`}>
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl mb-6 shadow-medium">
            ✨
          </div>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Emotional Analysis
          </h2>
        </div>
        
        <div className="mb-8">
          <div className="bg-gradient-to-r from-primary-50 to-pink-50 p-6 rounded-xl border border-primary-100 mb-6">
            <p className="text-2xl font-serif font-semibold text-primary-700 mb-2">
              "{emotion}"
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              💌 {advice}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={retry}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
          >
            🔄 Analyze Again
          </button>
          <button
            onClick={onRestart}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 font-medium transform hover:scale-105"
          >
            Start Over
          </button>
        </div>
      </div>
    </div>
  );
}

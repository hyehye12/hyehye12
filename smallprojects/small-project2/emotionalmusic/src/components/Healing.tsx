import React from "react";
import { useGPTAnalysis } from "../hooks/useGPTAnalysis";

type HealingProps = {
  userInput: string;
  onRestart: () => void;
};

export default function Healing({ userInput, onRestart }: HealingProps) {
  const { emotion, advice, retry } = useGPTAnalysis(userInput);
  
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
      
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-elegant p-16 max-w-2xl w-full text-center animate-scale-in border border-gray-200 transform hover:scale-100.5 transition-all duration-500 relative overflow-hidden">
        {/* Subtle Design Elements */}
        <div className="absolute top-8 right-8 w-20 h-12 bg-gradient-to-br from-neon-lime-200 to-neon-lime-300 rounded-3xl transform rotate-6 opacity-20 shadow-lg"></div>
        <div className="absolute bottom-8 left-8 w-16 h-10 bg-gradient-to-br from-vintage-200 to-vintage-300 rounded-3xl transform -rotate-8 opacity-20 shadow-lg"></div>
        
        <div className="mb-12">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 rounded-full flex items-center justify-center text-white text-4xl mb-8 shadow-elegant border-2 border-white">
            ✨
          </div>
          <h2 className="font-serif text-4xl font-light text-gray-900 mb-6 tracking-wide">
            감정 분석
          </h2>
        </div>
        
        <div className="mb-12">
          <div className="bg-gradient-to-r from-neon-lime-50 to-vintage-50 p-8 rounded-3xl border border-neon-lime-200 mb-8">
            <p className="font-serif text-3xl font-light text-neon-lime-700 mb-4 tracking-wide">
              "{emotion}"
            </p>
            <p className="text-gray-700 text-xl leading-relaxed font-medium">
              💌 {advice}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={retry}
            className="px-10 py-5 bg-gradient-to-r from-neon-lime-500 to-neon-lime-600 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium transform hover:scale-105 border border-neon-lime-400"
          >
            🔄 다시 분석
          </button>
          <button
            onClick={onRestart}
            className="px-10 py-5 bg-gradient-to-r from-vintage-500 to-vintage-600 text-white rounded-3xl shadow-elegant hover:shadow-card-hover transition-all duration-300 font-medium transform hover:scale-105 border border-vintage-400"
          >
            처음부터 시작
          </button>
        </div>
      </div>
    </div>
  );
}


import React from "react";

type HealingProps = {
  emotion: string;
  advice: string;
  onRestart: () => void;
}

export default function Healing({ emotion, advice, onRestart }: HealingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gradient-to-br from-pink-100 to-purple-100">
      <h2 className="mb-4 text-xl text-gray-700">✨ 감정 분석 결과</h2>
      <p className="mb-4 text-2xl font-semibold text-purple-700">
        "{emotion}" 상태로 보여요.
      </p>
      <p className="mb-10 text-lg text-gray-800">💌 {advice}</p>

      <button
        onClick={onRestart}
        className="px-6 py-2 text-white bg-purple-500 rounded hover:bg-purple-600"
      >
        다시 시작하기
      </button>
    </div>
  );
}

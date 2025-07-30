import React from "react";
import { useEffect, useState } from "react";
import { EmotionAdvice, getMockEmotionAdvice } from "../utils/gptService";

type HealingProps = {
  userInput: string;
  onRestart: () => void;
};

export default function Healing({ userInput, onRestart }: HealingProps) {
  const [emotion, setEmotion] = useState("");
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        let result;
        
        // API 키가 있으면 실제 GPT 호출, 없으면 모의 응답 사용
        if (process.env.REACT_APP_OPEN_AI_API_KEY) {
          result = await EmotionAdvice(userInput);
        } else {
          // 모의 응답 사용 (약간의 지연 추가)
          await new Promise(resolve => setTimeout(resolve, 1500));
          result = getMockEmotionAdvice(userInput);
        }
        
        setEmotion(result.emotion);
        setAdvice(result.advice);
      } catch (error) {
        console.error("GPT 호출 실패:", error);
        setEmotion("알 수 없음");
        setAdvice("감정 분석에 실패했어요. 잠시 후 다시 시도해주세요.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdvice();
  }, [userInput]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-gradient-to-br from-pink-100 to-purple-100">
      <h2 className="mb-4 text-xl text-gray-700">✨ 감정 분석 결과</h2>
      <p className="mb-4 text-2xl font-semibold text-purple-700">
        "{emotion} "
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

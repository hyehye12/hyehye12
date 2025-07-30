import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { analyzeEmotion } from "../utils/emotionAnalyzer";
import { diaryStore } from "../utils/diaryStore";

export default function MainPage() {
  const [diaryText, setDiaryText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!diaryText.trim()) return;
    
    setIsAnalyzing(true);
    
    // 일기 텍스트를 저장
    diaryStore.setDiaryText(diaryText);
    
    // 일기 텍스트를 분석하여 감정 추출
    const emotion = analyzeEmotion(diaryText);
    
    // 분석 완료 후 결과 페이지로 이동
    setTimeout(() => {
      setIsAnalyzing(false);
      navigate(`/result/${encodeURIComponent(emotion)}`);
    }, 1500);
  };

  const handleGPTAnalysis = () => {
    if (!diaryText.trim()) return;
    
    // 일기 텍스트를 저장
    diaryStore.setDiaryText(diaryText);
    navigate(`/analysis/${encodeURIComponent(diaryText)}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="mb-4 text-3xl font-bold text-center">
        📝 오늘 하루, 노래로 들려줄게요
      </h1>
      <p className="mb-6 text-center text-gray-600 max-w-md">
        오늘 하루 있었던 일을 자유롭게 적어주세요. 
        AI가 당신의 감정을 분석해서 어울리는 음악을 추천해드려요
      </p>

      <div className="w-full max-w-2xl">
        <textarea
          placeholder="오늘 하루는 어땠나요? 기쁜 일, 슬픈 일, 힘든 일... 무엇이든 자유롭게 적어주세요. (3-4줄 정도)"
          value={diaryText}
          onChange={(e) => setDiaryText(e.target.value)}
          className="w-full h-32 px-4 py-3 mb-6 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent resize-none"
          maxLength={500}
        />
        
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-500">
            {diaryText.length}/500자
          </span>
          {diaryText.length > 0 && (
            <span className="text-sm text-purple-600">
              감정 분석 중...
            </span>
          )}
        </div>

                 <div className="space-y-3">
           <button
             onClick={handleSubmit}
             disabled={!diaryText.trim() || isAnalyzing}
             className={`w-full px-6 py-3 text-white rounded-lg shadow transition-all duration-200 ${
               !diaryText.trim() || isAnalyzing
                 ? "bg-gray-400 cursor-not-allowed"
                 : "bg-purple-300 hover:bg-purple-600 hover:shadow-lg"
             }`}
           >
             {isAnalyzing ? (
               <div className="flex items-center justify-center">
                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                 감정 분석 중...
               </div>
             ) : (
               "🎵 나에게 어울리는 음악 추천받기"
             )}
           </button>
           
           <button
             onClick={handleGPTAnalysis}
             disabled={!diaryText.trim()}
             className={`w-full px-6 py-3 text-white rounded-lg shadow transition-all duration-200 ${
               !diaryText.trim()
                 ? "bg-gray-400 cursor-not-allowed"
                 : "bg-blue-400 hover:bg-blue-600 hover:shadow-lg"
             }`}
           >
             🤖 AI 감정 분석 및 조언받기
           </button>
         </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 max-w-md">
        <p>💡 팁: 더 정확한 음악 추천을 위해 구체적으로 적어주세요!</p>
        <p className="mt-2">
          예시: "오늘 회사에서 프로젝트를 성공적으로 마쳤어요. 팀원들과 함께 축하하며 정말 기뻤습니다."
        </p>
      </div>
    </main>
  );
}

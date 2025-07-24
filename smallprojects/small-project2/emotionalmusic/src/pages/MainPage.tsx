import React, { useState } from "react";
import ResultPage from "./ResultPage";
import EmotionSelector from "../components/EmotionSelector";
import { useEmotionSelection } from "../hooks/useEmotionSelection";
import { emotions, emojiList, emojiToEmotion } from "../components/EmotionSelector";

// 줄글로 입력해도 키워드 뽑아내서 감정분석 & 음악 추천 해주는 기능 추가 하기



export default function MainPage() {
  const [emotionText, setEmotionText] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleEmojiClick = (emoji: string) => {
    const emotion = emojiToEmotion[emoji] || emoji;
    setEmotionText(emotion);
  };

  const handleTagClick = (tag: string) => {
    setEmotionText(tag);
  };

  const handleSubmit = () => {
    if (!emotionText) return;
    setShowResult(true);
  };

  const handleBackToMain = () => {
    setShowResult(false);
    setEmotionText("");
  };

  // 결과 페이지가 표시되면 ResultPage 컴포넌트 렌더링
  if (showResult) {
    return <ResultPage emotion={emotionText} onBack={handleBackToMain} />;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 to-purple-100">
      <h1 className="mb-4 text-3xl font-bold text-center">
        🎧 지금 기분, 노래로 들려줄게요
      </h1>
      <p className="mb-6 text-center text-gray-600">
        당신의 감정을 입력하면 AI가 어울리는 음악을 추천해드려요
      </p>

      <input
        type="text"
        placeholder="아래 태그나 이모지를 눌러 추천받아보세요."
        value={emotionText}
        onChange={(e) => setEmotionText(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-4 rounded shadow focus:outline-none"
      />

      <EmotionSelector
        emotions={emotions}
        emojiList={emojiList}
        emojiToEmotion={emojiToEmotion}
        onEmojiClick={handleEmojiClick}
        onTagClick={handleTagClick}
      />

      <button
        onClick={handleSubmit}
        className="px-6 py-2 text-white bg-purple-300 rounded-lg shadow hover:bg-purple-600"
      >
        🎵 나에게 어울리는 음악 추천
      </button>
    </main>
  );
}

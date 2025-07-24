import { useState } from "react";
import { emojiToEmotion } from "../components/EmotionSelector";

export const useEmotionSelection = () => {
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

  return {
    emotionText,
    showResult,
    handleEmojiClick,
    handleTagClick,
    handleSubmit,
    handleBackToMain
  };
}
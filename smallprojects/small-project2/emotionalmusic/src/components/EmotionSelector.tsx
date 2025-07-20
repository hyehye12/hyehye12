import React from "react";

type EmotionSelectorProps = {
  emotions: string[];
  emojiList: string[];
  emojiToEmotion: { [key: string]: string };
  onEmojiClick: (emoji: string) => void;
  onTagClick: (tag: string) => void;
}

export default function EmotionSelector({
  emotions,
  emojiList,
  emojiToEmotion,
  onEmojiClick,
  onTagClick,
}: EmotionSelectorProps) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {emojiList.map((emoji) => (
          <button
            key={emoji}
            onClick={() => onEmojiClick(emoji)}
            className="text-2xl transition hover:scale-110"
          >
            {emoji}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {emotions.map((emotion) => (
          <button
            key={emotion}
            onClick={() => onTagClick(emotion)}
            className="px-3 py-1 bg-white border border-gray-300 rounded-full hover:bg-purple-100"
          >
            {emotion}
          </button>
        ))}
      </div>
    </>
  );
} 
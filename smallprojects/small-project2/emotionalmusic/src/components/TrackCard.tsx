import React from "react";
import { EmotionTrack } from "../data/emotionData";

interface TrackCardProps {
  track: EmotionTrack;
}

export default function TrackCard({ track }: TrackCardProps) {
  return (
    <div className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
      <div className="overflow-hidden aspect-square">
        <img
          src={track.imageUrl}
          alt={track.album}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-1 text-lg font-bold truncate">
          {track.name}
        </h3>
        <p className="mb-2 text-gray-600">{track.artist}</p>
        <p className="mb-3 text-sm text-gray-500">{track.album}</p>

        <a
          href={track.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1 text-sm text-white transition-colors bg-green-500 rounded-full hover:bg-green-600"
        >
          🎵 스포티파이에서 듣기
        </a>
      </div>
    </div>
  );
} 
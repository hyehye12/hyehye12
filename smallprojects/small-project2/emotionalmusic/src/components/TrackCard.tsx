import React, { useState } from "react";
import { ItunesTrack } from "../api/itunes";
import { createShareUrl, getHighResArtwork, formatTrackTime } from "../api/itunes";
import { getCardStyle } from "../utils/buttonStyles";

type TrackCardProps = {
  track: ItunesTrack;
  emotion: string;
};

export default function TrackCard({ track, emotion }: TrackCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handlePlayPreview = () => {
    if (!track.previewUrl) {
      alert('Preview not available for this track.');
      return;
    }

    if (isPlaying && audio) {
      audio.pause();
      setIsPlaying(false);
    } else {
      if (audio) {
        audio.pause();
      }
      const newAudio = new Audio(track.previewUrl);
      newAudio.addEventListener('ended', () => setIsPlaying(false));
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
    }
  };

  const handleShare = () => {
    const shareUrl = createShareUrl(track, emotion);
    window.open(shareUrl, '_blank');
  };

  const handleItunesOpen = () => {
    window.open(track.trackViewUrl, '_blank');
  };

  return (
    <div className={`${getCardStyle()} group overflow-hidden transform hover:scale-105 transition-all duration-300 relative kitsch-card shadow-kitsch hover:shadow-kitsch-glow`}>
      {/* Kitsch Decorative Elements */}
      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-kitsch-pink-300 to-kitsch-purple-300 rounded-full opacity-60 animate-kitsch-pulse z-10"></div>
      <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-gradient-to-br from-kitsch-blue-300 to-kitsch-pink-300 rounded-full opacity-60 animate-kitsch-float z-10"></div>
      
      <div className="relative">
        <img
          src={getHighResArtwork(track.artworkUrl100) || '/default-album.jpg'}
          alt={track.trackName}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-3 justify-center">
              {track.previewUrl && (
                <button
                  onClick={handlePlayPreview}
                  className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110 shadow-kitsch relative overflow-hidden group"
                  title="Preview"
                >
                  <span className="relative z-10">
                    {isPlaying ? (
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-1 h-4 bg-gray-900 mx-0.5"></div>
                        <div className="w-1 h-4 bg-gray-900 mx-0.5"></div>
                      </div>
                    ) : (
                      <div className="w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-kitsch-pink-100 to-kitsch-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              )}
              <button
                onClick={handleItunesOpen}
                className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110 shadow-kitsch relative overflow-hidden group"
                title="Open in iTunes"
              >
                <span className="relative z-10">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-kitsch-purple-100 to-kitsch-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={handleShare}
                className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110 shadow-kitsch relative overflow-hidden group"
                title="Share"
              >
                <span className="relative z-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-kitsch-blue-100 to-kitsch-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 relative">
        <h3 className="font-serif font-semibold text-gray-900 mb-2 text-lg line-clamp-1 group-hover:text-kitsch-pink-600 transition-colors duration-300">
          {track.trackName}
        </h3>
        <p className="text-gray-600 text-sm mb-3 font-medium">
          {track.artistName}
        </p>
        <p className="text-gray-500 text-xs font-medium mb-2">{track.collectionName}</p>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>{track.primaryGenreName}</span>
          {track.trackTimeMillis && (
            <span>{formatTrackTime(track.trackTimeMillis)}</span>
          )}
        </div>
        
        {/* Bottom Kitsch Element */}
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-gradient-to-br from-kitsch-purple-300 to-kitsch-pink-300 opacity-60"></div>
      </div>
    </div>
  );
} 
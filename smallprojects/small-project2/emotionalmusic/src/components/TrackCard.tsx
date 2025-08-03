import React, { useState } from "react";
import { SpotifyTrack } from "../api/spotify";
import { createShareUrl } from "../api/spotify";
import { getCardStyle } from "../utils/buttonStyles";

type TrackCardProps = {
  track: SpotifyTrack;
  emotion: string;
};

export default function TrackCard({ track, emotion }: TrackCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const handlePlayPreview = () => {
    if (!track.preview_url) {
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
      const newAudio = new Audio(track.preview_url);
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

  const handleSpotifyOpen = () => {
    window.open(track.external_urls.spotify, '_blank');
  };

  return (
    <div className={`${getCardStyle()} group overflow-hidden transform hover:scale-105 transition-all duration-300`}>
      <div className="relative">
        <img
          src={track.album.images[0]?.url || '/default-album.jpg'}
          alt={track.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-3 justify-center">
              {track.preview_url && (
                <button
                  onClick={handlePlayPreview}
                  className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110 shadow-medium"
                  title="Preview"
                >
                  {isPlaying ? (
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-1 h-4 bg-gray-900 mx-0.5"></div>
                      <div className="w-1 h-4 bg-gray-900 mx-0.5"></div>
                    </div>
                  ) : (
                    <div className="w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                  )}
                </button>
              )}
              <button
                onClick={handleSpotifyOpen}
                className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110 shadow-medium"
                title="Open in Spotify"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </button>
              <button
                onClick={handleShare}
                className="bg-white/90 text-gray-900 p-3 rounded-full hover:bg-white transition-all duration-200 transform hover:scale-110 shadow-medium"
                title="Share"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif font-semibold text-gray-900 mb-2 text-lg line-clamp-1 group-hover:text-primary-600 transition-colors duration-300">
          {track.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 font-medium">
          {track.artists.map(artist => artist.name).join(', ')}
        </p>
        <p className="text-gray-500 text-xs font-medium">{track.album.name}</p>
      </div>
    </div>
  );
} 
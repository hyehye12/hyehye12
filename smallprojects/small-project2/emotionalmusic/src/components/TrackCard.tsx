import React, { useState } from "react";
import { ItunesTrack } from "../services/itunes";
import { createShareUrl, getHighResArtwork, formatTrackTime } from "../services/itunes";

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
    <div className="group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-elegant hover:shadow-card-hover transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 relative border border-gray-200">
      {/* Vintage Pattern Background */}
      <div className="absolute inset-0 bg-vintage-pattern opacity-5"></div>
      
      {/* Image Container with Vintage Filter */}
      <div className="relative overflow-hidden">
        <img
          src={getHighResArtwork(track.artworkUrl100) || '/default-album.jpg'}
          alt={track.trackName}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-95 contrast-105 saturate-110"
        />
        
        {/* Vintage Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex space-x-6 justify-center">
              {track.previewUrl && (
                <button
                  onClick={handlePlayPreview}
                  className="bg-white/95 backdrop-blur-sm text-gray-900 p-5 rounded-full hover:bg-neon-lime-300 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-neon group/btn relative overflow-hidden"
                  title="Preview"
                >
                  <span className="relative z-10">
                    {isPlaying ? (
                      <div className="w-6 h-6 flex items-center justify-center">
                        <div className="w-1.5 h-5 bg-current mx-0.5"></div>
                        <div className="w-1.5 h-5 bg-current mx-0.5"></div>
                      </div>
                    ) : (
                      <div className="w-0 h-0 border-l-5 border-l-current border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-300 to-neon-lime-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              )}
              <button
                onClick={handleItunesOpen}
                className="bg-white/95 backdrop-blur-sm text-gray-900 p-5 rounded-full hover:bg-neon-lime-300 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-neon group/btn relative overflow-hidden"
                title="Open in iTunes"
              >
                <span className="relative z-10">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-300 to-neon-lime-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={handleShare}
                className="bg-white/95 backdrop-blur-sm text-gray-900 p-5 rounded-full hover:bg-neon-lime-300 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-neon group/btn relative overflow-hidden"
                title="Share"
              >
                <span className="relative z-10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-lime-300 to-neon-lime-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-10 relative">
        {/* Emotion Tag */}
        <div className="inline-block mb-6">
          <span className="px-5 py-3 bg-neon-lime-100 text-neon-lime-700 rounded-full text-sm font-medium tracking-wide border border-neon-lime-200 group-hover:bg-neon-lime-200 group-hover:border-neon-lime-300 transition-all duration-300">
            {emotion}
          </span>
        </div>
        
        {/* Track Title - Serif for elegance */}
        <h3 className="font-serif font-semibold text-gray-900 mb-4 text-2xl leading-tight group-hover:text-neon-lime-700 transition-colors duration-300">
          {track.trackName}
        </h3>
        
        {/* Artist Name - Modern sans-serif */}
        <p className="text-gray-600 text-lg mb-3 font-medium font-sans">
          {track.artistName}
        </p>
        
        {/* Album Name */}
        <p className="text-gray-500 text-base mb-6 font-sans">{track.collectionName}</p>
        
        {/* Bottom Info Row */}
        <div className="flex justify-between items-center text-sm text-gray-400 font-sans">
          <span className="px-4 py-2 bg-gray-100 rounded-full">{track.primaryGenreName}</span>
          {track.trackTimeMillis && (
            <span className="px-4 py-2 bg-gray-100 rounded-full">{formatTrackTime(track.trackTimeMillis)}</span>
          )}
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-6 right-6 w-3 h-3 bg-neon-lime-300 rounded-full opacity-60 group-hover:opacity-100 group-hover:animate-neon-glow transition-all duration-300"></div>
      </div>
    </div>
  );
} 
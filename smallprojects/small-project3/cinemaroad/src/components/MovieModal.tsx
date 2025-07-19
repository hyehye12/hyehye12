import React, { useEffect } from "react";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
  original_title?: string;
  genre_ids?: number[];
};

type MovieModalProps = {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
  if (!isOpen || !movie) return null;

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{movie.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex-1">
            {movie.original_title && movie.original_title !== movie.title && (
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">원제:</span> {movie.original_title}
              </p>
            )}
            
            {movie.release_date && (
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">개봉일:</span> {movie.release_date}
              </p>
            )}
            
            {movie.vote_average && (
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">평점:</span> {movie.vote_average.toFixed(1)}/10
                {movie.vote_count && (
                  <span className="text-sm text-gray-500 ml-2">
                    ({movie.vote_count.toLocaleString()}명 평가)
                  </span>
                )}
              </p>
            )}
            
            <div className="mt-4">
              <h3 className="font-semibold text-lg mb-2">줄거리</h3>
              <p className="text-gray-700 leading-relaxed">
                {movie.overview || "줄거리 정보가 없습니다."}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
} 
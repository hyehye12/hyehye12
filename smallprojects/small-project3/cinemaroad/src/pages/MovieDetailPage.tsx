import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

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

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=ko-KR&page=1`;

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const foundMovie = data.results.find((m: Movie) => m.id.toString() === id);
        
        if (foundMovie) {
          setMovie(foundMovie);
        } else {
          setError("영화를 찾을 수 없습니다.");
        }
      } catch (err) {
        console.error("영화 데이터를 가져오는 데 실패했어요.", err);
        setError("영화 정보를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  if (!id) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-gray-600">영화 정보를 불러오는 중...</div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="text-center">
          <div className="mb-4 text-4xl">❌</div>
          <h2 className="mb-2 text-2xl font-bold">오류가 발생했습니다</h2>
          <p className="mb-4 text-gray-600">{error || "영화를 찾을 수 없습니다."}</p>
          <button
            onClick={handleBack}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBack}
            className="flex items-center px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-50"
          >
            ← 돌아가기
          </button>
          <h1 className="text-2xl font-bold text-center">영화 상세 정보</h1>
          <div className="w-24"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{movie.title}</h2>
              
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
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">평점:</span> {movie.vote_average.toFixed(1)}/10
                  {movie.vote_count && (
                    <span className="text-sm text-gray-500 ml-2">
                      ({movie.vote_count.toLocaleString()}명 평가)
                    </span>
                  )}
                </p>
              )}
              
              <div className="mt-6">
                <h3 className="font-semibold text-xl mb-3">줄거리</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {movie.overview || "줄거리 정보가 없습니다."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
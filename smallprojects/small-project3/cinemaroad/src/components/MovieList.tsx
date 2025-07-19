import React, { useEffect, useState } from "react";
import MovieModal from "./MovieModal";

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

type MovieListProps = {
  searchQuery?: string;
};

export default function MovieList({ searchQuery = "" }: MovieListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMovies(data.results);
        setFilteredMovies(data.results);
      } catch (err) {
        console.error("영화 데이터를 가져오는 데 실패했어요.", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (movie.original_title && movie.original_title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  }, [searchQuery, movies]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg text-gray-600">영화를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {searchQuery ? `"${searchQuery}" 검색 결과` : "인기 영화"}
      </h2>
      
      {filteredMovies.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            {searchQuery ? `"${searchQuery}"에 대한 검색 결과가 없습니다.` : "영화를 불러오는 중입니다."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <p className="mt-2 text-sm font-medium text-gray-800 line-clamp-2">
                {movie.title}
              </p>
            </div>
          ))}
        </div>
      )}

      <MovieModal
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

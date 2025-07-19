import { useState } from "react";
import MovieList from "../components/MovieList";
import Search from "../components/Search";

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <header className="flex flex-col items-center w-full py-12 pb-8 mb-8 shadow-lg bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 rounded-b-3xl">
        <p className="mb-1 text-lg text-gray-600">영화의 장면 속으로</p>
        <p className="text-3xl italic font-semibold tracking-wider text-blue-500">
          Cinema Road
        </p>
        <Search onSearch={handleSearch} />
      </header>
      
      <MovieList searchQuery={searchQuery} />
    </div>
  );
}

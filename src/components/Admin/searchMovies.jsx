import React, { useState } from "react";
import axios from "axios";
import AdminMovieCard from "./adminMovieCard";

const SearchMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${searchQuery}&apikey=5a45657e`
      );

      if (response.data.Response === "True") {
        setSearchResults(response.data.Search);
      } else {
        setError(response.data.Error || "No movies found");
        setSearchResults([]);
      }
    } catch (err) {
      setError("Failed to fetch movies");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex space-x-4 mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for movies..."
          className="flex-1 p-2 rounded-lg border-2 border-gray-300 focus:border-yellow-400 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 disabled:bg-gray-400"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && (
        <div className="text-red-500 mb-4 p-4 bg-red-100 rounded-lg">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {searchResults.map((movie) => (
          <AdminMovieCard
            key={movie.imdbID}
            movie={{ title: movie.Title, year: movie.Year, imdbID: movie.imdbID, poster: movie.Poster, type: movie.Type }}
            type="add"
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;

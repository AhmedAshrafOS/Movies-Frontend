import React, { useState, useEffect } from "react";

import AdminMovieCard from "./adminMovieCard";
import { retrieveAllMovies } from "../../services/adminApiService"; 

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await retrieveAllMovies();
      setMovies(response);
      setError("");
    } catch (err) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 bg-red-100 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-6">Movies Database</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <AdminMovieCard
            key={movie.imdbID}
            movie={movie}
            type="delete"
            onDelete={fetchMovies}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;

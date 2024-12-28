import React, { useState } from "react";

import { addMovie, removeMovie } from "../../services/adminApiService"; 

const AdminMovieCard = ({ movie, type, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddMovie = async () => {
    setLoading(true);
    setError("");

    try {
    
      await addMovie(movie);
    
    } catch (err) {
      setError(err.response?.data || "Failed to add movie");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMovie = async () => {
    setLoading(true);
    setError("");

    try {

      
      await removeMovie(movie.id);
      if (onDelete) onDelete();
    } catch (err) {
      setError("Failed to delete movie");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-96 object-cover"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/300x450?text=No+Poster";
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{movie.title}</h3>
        <p className="text-gray-300 mb-4">Year: {movie.year}</p>
        
        {error && (
          <p className="text-red-500 text-sm mb-2">{error}</p>
        )}
        
        <button
          onClick={type === "add" ? handleAddMovie : handleDeleteMovie}
          disabled={loading}
          className={`w-full py-2 rounded-lg ${
            type === "add"
              ? "bg-yellow-400 hover:bg-yellow-500 text-black"
              : "bg-red-500 hover:bg-red-600 text-white"
          } disabled:bg-gray-400 disabled:cursor-not-allowed`}
        >
          {loading
            ? "Processing..."
            : type === "add"
            ? "Add to Database"
            : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default AdminMovieCard;

import React, { useState } from 'react';
import MovieProfile from './movieProfile';

const MovieCard = ({ movie }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div 
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" 
        style={{cursor: "pointer"}}
        onClick={() => setShowProfile(true)}
      >
        <div className="relative">
          <img
            src={movie.poster}
            alt={`${movie.title} Poster`}
            className="w-full h-[400px] object-cover rounded-t-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="bg-gradient-to-b from-gray-900 to-black p-4" >
          <h2 className="text-xl font-bold text-white mb-2 truncate">{movie.title}</h2>
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full">
              {movie.year}
            </span>
            <span className="text-gray-300 text-sm capitalize">
              {movie.type}
            </span>
          </div>
        </div>
      </div>

      {showProfile && (
        <MovieProfile 
          imdbID={movie.imdbID} 
          onClose={() => setShowProfile(false)} 
        />
      )}
    </>
  );
};

export default MovieCard;

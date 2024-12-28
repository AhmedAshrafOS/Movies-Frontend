import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { giveRating, updateRating } from "../../services/userApiService";
import { removeRating } from "../../services/userApiService";
import { getRating } from "../../services/userApiService";

const MovieProfile = ({ imdbID, onClose }) => {

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [savedRating, setSavedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    const fetchUserRating = async () => {
      try {

        const response = await getRating({  movieId: imdbID,
          userName: localStorage.getItem('username')});

        
        setSavedRating(response);
        setUserRating(response);
      } catch (err) {
        console.error('Failed to fetch user rating:', err);
      }
    };
  
    fetchUserRating();
  }, [imdbID]);
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=5a45657e&s`);
        setMovie(response.data);
      } catch (err) {
        setError('Failed to fetch movie details');
      } finally {
        setLoading(false);
      }
      };
        fetchMovieDetails();
      }, [imdbID]);

const handleRatingChange = async (newRating) => {
  try {
    if (newRating === userRating) {
      await removeRating({
        movieId: imdbID,
        rating: newRating,
        userName: localStorage.getItem('username'),
      });
      setUserRating(0);
      setSavedRating(0);
    } 
    else if (savedRating !== 0) {
      await updateRating({
        movieId: imdbID,
        rating: newRating,
        userName: localStorage.getItem('username'),
      });
      setUserRating(newRating);
      setSavedRating(newRating);
    }
    else {
      await giveRating({
        movieId: imdbID,
        rating: newRating,
        userName: localStorage.getItem('username'),
      });
      setUserRating(newRating);
      setSavedRating(newRating);
      setHoveredRating(newRating);
    }
  } catch (err) {
    console.error('Failed to update rating:', err);
  }
};

  if (loading) return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400"></div>
    </div>
  );

  if (error) return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg">
        <p className="text-red-500">{error}</p>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg">Close</button>
      </div>
    </div>
  );

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg max-w-4xl w-full overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img 
              src={movie.Poster} 
              alt={movie.Title}
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl font-bold text-white mb-4">{movie.Title}</h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-sm">
                {movie.Year}
              </span>
              <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                {movie.Rated}
              </span>
              <span className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm">
                {movie.Runtime}
              </span>
            </div>

            <div className="space-y-4 text-gray-300">
              <p><span className="text-yellow-400">Genre:</span> {movie.Genre}</p>
              <p><span className="text-yellow-400">Director:</span> {movie.Director}</p>
              <p><span className="text-yellow-400">Cast:</span> {movie.Actors}</p>
              <p className="text-white">{movie.Plot}</p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDB" className="h-6" />
                <span className="text-white">{movie.imdbRating}/10</span>
              </div>
              
              {movie.Ratings?.map((rating, index) => (
                <p key={index} className="text-gray-300">
                  <span className="text-yellow-400">{rating.Source}:</span> {rating.Value}
                </p>
              ))}
              
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">Your Rating:</span>
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRatingChange(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="focus:outline-none transition-colors duration-200"
                      >
                        <svg
                          className={`w-6 h-6 ${
                            hoveredRating >= star 
                              ? 'text-yellow-400' 
                              : star <= savedRating 
                                ? 'text-yellow-400' 
                                : 'text-gray-300 hover:text-yellow-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                </div>
              </div>

            </div>
            
                


          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieProfile;
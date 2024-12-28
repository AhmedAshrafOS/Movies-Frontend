import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import { retrieveAllMovies } from '../../services/adminApiService'; 

const Movies = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await retrieveAllMovies(); 
      console.log(data);
      
      setMovies(data);
      setFilteredMovies(data);
    };

    fetchMovies();
  }, []); 

  useEffect(() => {
    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(results);
    setCurrentPage(1); 
  }, [searchTerm, movies]);

  const moviesPerPage = 12;
  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 w-[75%] md:w-[80%] lg:w-[90%] xl:w-[70%]">
            {currentMovies.map((moviee) => (
              <MovieCard key={moviee.imdbID} movie={moviee} />
            ))}
        </div>

        {filteredMovies.length === 0 && searchTerm && (
          <div className="text-gray-400 text-center mt-8">
            No movies found matching "{searchTerm}"
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-yellow-400 text-black hover:bg-yellow-500'
              }`}
            >
              Previous
            </button>

            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === number
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {number}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-yellow-400 text-black hover:bg-yellow-500'
              }`}
            >
              Next
            </button>
          </div>
        )}
    </div>
  );
};

export default Movies;

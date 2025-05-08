import React, { useState, useEffect } from 'react';
import { useMovies } from '../context/MovieContext'; // Correct import for useMovies

const Home = () => {
  const { movies, loading, getTrendingMovies, searchForMovies } = useMovies();
  const [query, setQuery] = useState('');

  // Fetch trending movies when component mounts
  useEffect(() => {
    getTrendingMovies();
  }, [getTrendingMovies]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchForMovies(query);
  };

  return (
    <div>
      <h1>Movie Explorer</h1>
      
      {/* Search bar */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Movie Grid */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

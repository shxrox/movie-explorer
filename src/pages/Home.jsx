import React, { useEffect } from 'react';
import { useMovies } from '../context/MovieContext';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const Home = () => {
  const { movies, loadTrending, search } = useMovies();

  useEffect(() => {
    loadTrending();
  }, []);

  return (
    <div>
      <SearchBar onSearch={search} />
      <h2 style={{ textAlign: 'center' }}>Trending / Search Results</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;

import { createContext, useContext, useState } from 'react';
import { fetchTrendingMovies, searchMovies } from '../services/movieService';

const MovieContext = createContext();
export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // Track the current page
  const [loading, setLoading] = useState(false); // Track loading state

  // Load trending movies with pagination
  const loadTrending = async () => {
    if (loading) return; // Prevent multiple calls while loading
    setLoading(true);
    const data = await fetchTrendingMovies(page);
    setMovies((prevMovies) => [...prevMovies, ...data]); // Append new movies to the list
    setPage((prevPage) => prevPage + 1); // Increment the page
    setLoading(false);
  };

  const search = async (query) => {
    const data = await searchMovies(query);
    setMovies(data);
  };

  return (
    <MovieContext.Provider value={{ movies, loadTrending, search }}>
      {children}
    </MovieContext.Provider>
  );
};

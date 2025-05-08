import { createContext, useContext, useState } from 'react';
import { fetchTrendingMovies, searchMovies } from '../services/movieService';

const MovieContext = createContext();
export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const loadTrending = async () => {
    const data = await fetchTrendingMovies();
    setMovies(data);
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

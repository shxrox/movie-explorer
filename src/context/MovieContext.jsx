import React, { createContext, useContext, useState, useCallback } from "react";
import { fetchTrendingMovies, searchMovies } from "../services/movieService";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(""); 

  const loadTrending = useCallback(async () => {
    if (query) return; 
    const data = await fetchTrendingMovies(page);
    setMovies((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
  }, [page, query]);

  const search = async (newQuery) => {
    setQuery(newQuery);
    setPage(1); 
    const results = await searchMovies(newQuery);
    setMovies(results); 
  };

  return (
    <MovieContext.Provider value={{ movies, loadTrending, search }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);

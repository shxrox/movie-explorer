import React, { createContext, useContext, useState, useCallback } from "react";
import { fetchTrendingMovies, searchMovies } from "../services/movieService";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(""); // Track search input

  const loadTrending = useCallback(async () => {
    if (query) return; // Prevent loading trending if in search mode
    const data = await fetchTrendingMovies(page);
    setMovies((prev) => [...prev, ...data]);
    setPage((prev) => prev + 1);
  }, [page, query]);

  const search = async (newQuery) => {
    setQuery(newQuery);
    setPage(1); // Reset page in case user goes back to trending
    const results = await searchMovies(newQuery);
    setMovies(results); // Replace movies with search results
  };

  return (
    <MovieContext.Provider value={{ movies, loadTrending, search }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);

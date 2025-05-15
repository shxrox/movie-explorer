import axios from "axios";

const API_KEY = " ";
const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = async (page = 1) => {
  const response = await tmdb.get("/trending/movie/week", { params: { page } });
  return response.data.results;
};

export const fetchPopularMovies = async (page = 1) => {
  const response = await tmdb.get("/movie/popular", { params: { page } });
  return response.data.results;
};

export const fetchTopRatedMovies = async (page = 1) => {
  const response = await tmdb.get("/movie/top_rated", { params: { page } });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}`);
  return response.data;
};

export const fetchMovieTrailer = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}/videos`);
  const trailers = response.data.results.filter(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );
  return trailers.length > 0 ? trailers[0] : null;
};

export const searchMovies = async (query) => {
  const response = await tmdb.get("/search/movie", {
    params: { query },
  });
  return response.data.results;
};

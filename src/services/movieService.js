import axios from "axios";

const API_KEY = "179698082a655e5d3e9cf6f72683ddfa"; // Replace with your actual TMDb API key
const BASE_URL = "https://api.themoviedb.org/3";

// Create an Axios instance with default config
const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Fetch trending movies
export const fetchTrendingMovies = async () => {
  const response = await tmdb.get("/trending/movie/week");
  return response.data.results;
};

// Search for movies
export const searchMovies = async (query) => {
  const response = await tmdb.get("/search/movie", {
    params: {
      query,
    },
  });
  return response.data.results;
};

// Fetch movie details
export const fetchMovieDetails = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}`);
  return response.data;
};

// Fetch movie trailer (YouTube)
export const fetchMovieTrailer = async (movieId) => {
  const response = await tmdb.get(`/movie/${movieId}/videos`);
  const trailers = response.data.results.filter(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );
  return trailers.length > 0 ? trailers[0] : null;
};

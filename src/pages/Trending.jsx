import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/movieService";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Trending Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
            </Link>
            <div className="movie-details">
              <Link to={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> {movie.vote_average}</p>
              <p><strong>Overview:</strong> {movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

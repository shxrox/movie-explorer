import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/movieService";  // Import the service
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetchPopularMovies();
      setMovies(data);
    };

    getPopularMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Popular Movies</h2>
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

export default Popular;

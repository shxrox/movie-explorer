import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../services/movieService";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "./Footer";

const Trending = ({ darkMode }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };

    getTrendingMovies();
  }, []);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#f4f4f4",
        minHeight: "100vh",
        padding: "20px",
        transition: "background-color 0.3s ease",
      }}
    >
      <Navbar />
      <h2
        style={{
          textAlign: "center",
          color: darkMode ? "#f1f1f1" : "#000",
          marginBottom: "30px",
        }}
      >
        Trending Movies
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              flex: "1 1 200px",
              maxWidth: "250px",
              backgroundColor: darkMode ? "#333" : "#fff",
              borderRadius: "10px",
              boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.3)" : "0 0 10px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              textAlign: "center",
              padding: "10px",
              transition: "background-color 0.3s ease",
            }}
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: darkMode ? "0 0 10px rgba(255, 255, 255, 0.2)" : "0 0 10px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Link>
            <div style={{ marginTop: "10px" }}>
              <Link
                to={`/movie/${movie.id}`}
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: darkMode ? "#f1f1f1" : "#000",
                  textDecoration: "none",
                }}
              >
                {movie.title}
              </Link>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: darkMode ? "#ccc" : "#666",
                  marginTop: "5px",
                }}
              >
                <strong>Release Date:</strong> {movie.release_date}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: darkMode ? "#ccc" : "#666",
                }}
              >
                <strong>Rating:</strong> {movie.vote_average}
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: darkMode ? "#ccc" : "#666",
                  marginTop: "5px",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                }}
              >
                <Link to={`/movie/${movie.id}`}> 
                <p style={{ fontSize: '0.9rem', color: darkMode ? '#ccc' : '#555' }}>Click here For details</p>
                </Link>

                <strong>Overview:</strong> {movie.overview}
              </p>
            </div>
          </div>
        ))}
                <Footer darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Trending;

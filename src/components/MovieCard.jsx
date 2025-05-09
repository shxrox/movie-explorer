import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, darkMode }) => {
  return (
    <div
      style={{
        width: '200px',
        margin: '10px',
        backgroundColor: darkMode ? '#333' : '#fff',
        borderRadius: '8px',
        boxShadow: darkMode ? '0 0 15px rgba(255, 255, 255, 0.3)' : '0 0 15px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <Link
        to={`/movie/${movie.id}`}
        style={{
          textDecoration: 'none',
          color: darkMode ? '#f1f1f1' : '#000',
          display: 'block',
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          style={{
            width: '100%',
            borderRadius: '8px 8px 0 0',
            boxShadow: darkMode ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.2)',
          }}
        />
        <div
          style={{
            padding: '10px',
            color: darkMode ? '#f1f1f1' : '#000',
            backgroundColor: darkMode ? '#444' : '#fff',
            textAlign: 'center',
            borderRadius: '0 0 8px 8px',
          }}
        >
          <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>{movie.title}</h4>
          <p style={{ fontSize: '0.9rem', color: darkMode ? '#ccc' : '#555' }}>Click here For details</p>
          <p style={{ fontSize: '0.9rem', color: darkMode ? '#ccc' : '#555' }}>
            {movie.release_date?.slice(0, 4)}
          </p>
          <p style={{ fontSize: '1rem', marginTop: '5px', fontWeight: 'bold' }}>
            ⭐ {movie.vote_average}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ width: 200, margin: '10px' }}>
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '100%', borderRadius: '8px' }}
        />
        <h4>{movie.title}</h4>
        <p>{movie.release_date?.slice(0, 4)}</p>
        <p>⭐ {movie.vote_average}</p>
      </Link>
    </div>
  );
};

export default MovieCard;

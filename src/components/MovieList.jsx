import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieList;

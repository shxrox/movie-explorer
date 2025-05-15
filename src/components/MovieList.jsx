import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, darkMode }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px',
        backgroundColor: darkMode ? '#121212' : '#f4f4f4',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} darkMode={darkMode} />
      ))}
    </div>
  );
};

export default MovieList;

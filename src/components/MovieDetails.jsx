import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieTrailer } from '../services/movieService';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const load = async () => {
      const movieData = await fetchMovieDetails(id);
      const trailerData = await fetchMovieTrailer(id);

      setMovie(movieData);

      if (trailerData) {
        const embedUrl = `https://www.youtube.com/embed/${trailerData.key}`;
        setTrailerUrl(embedUrl);
      } else {
        setTrailerUrl('');
      }
    };

    load();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{ maxWidth: '300px', borderRadius: '10px' }}
      />
      <p>{movie.overview}</p>
      <p><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
      <p><strong>Rating:</strong> {movie.vote_average}</p>

      {trailerUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Trailer</h3>
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

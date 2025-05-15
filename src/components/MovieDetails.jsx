import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieTrailer } from '../services/movieService';
import Footer from '../pages/Footer';
import LoadingPage from '../pages/LoadingPage'; // Import the new LoadingPage component

const MovieDetails = ({ darkMode }) => {
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

  // Use the new LoadingPage component while waiting for the movie data
  if (!movie) return <LoadingPage darkMode={darkMode} />;

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: darkMode ? '#121212' : '#f4f4f4',
        color: darkMode ? '#f1f1f1' : '#000',
        minHeight: '100vh',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Attractive Heading */}
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '20px',
          color: darkMode ? '#f1f1f1' : '#000',
          textShadow: darkMode
            ? '0 4px 6px rgba(255, 255, 255, 0.4)'
            : '0 4px 6px rgba(0, 0, 0, 0.4)',
        }}
      >
        🌟 Explore the World of Movies – {movie.title}
      </h1>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          textAlign: 'left',
          flexWrap: 'wrap',
        }}
      >
        {/* Poster */}
        <div style={{ flex: '1 1 250px', marginRight: '20px', textAlign: 'center' }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{
              width: '100%',
              maxWidth: '250px',
              borderRadius: '10px',
              boxShadow: darkMode
                ? '0 0 15px rgba(255, 255, 255, 0.3)'
                : '0 0 15px rgba(0, 0, 0, 0.3)',
            }}
          />
        </div>

        {/* Movie Details */}
        <div
          style={{
            flex: '2 1 60%',
            marginLeft: '20px',
            textAlign: 'left',
            padding: '10px',
          }}
        >
          <p
            style={{
              fontSize: '1.1rem',
              marginBottom: '20px',
              maxWidth: '800px',
              lineHeight: '1.6',
              textAlign: 'left',
            }}
          >
            {movie.overview}
          </p>

          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
            <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(', ')}
          </p>

          <p
            style={{
              fontSize: '1.5rem',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            <strong>Rating:</strong> {movie.vote_average}
          </p>
        </div>
      </div>

      {/* Trailer */}
      {trailerUrl && (
        <div style={{ width: '100%', marginTop: '30px', textAlign: 'center', paddingBottom: '60px' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Watch the Official Trailer</h3>
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%', // 16:9 aspect ratio
              height: 0,
              overflow: 'hidden',
              maxWidth: '1000px',
              margin: '0 auto',
              borderRadius: '10px',
              boxShadow: darkMode
                ? '0 0 10px rgba(255, 255, 255, 0.2)'
                : '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <iframe
              src={trailerUrl}
              title="Trailer"
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '10px',
              }}
            />
          </div>
        </div>
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default MovieDetails;

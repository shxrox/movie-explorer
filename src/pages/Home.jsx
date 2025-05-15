import React, { useEffect, useState } from 'react';
import { useMovies } from '../context/MovieContext';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  const { movies, loadTrending, search } = useMovies();
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    loadTrending(); 

    // Event listener for scroll
    const handleScroll = () => {
      const nearBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200;
      if (nearBottom && !isAtBottom && !loading) {
        setIsAtBottom(true); 
      } else if (!nearBottom) {
        setIsAtBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAtBottom, loading]);

  useEffect(() => {
    if (isAtBottom) {
      setLoading(true); 
      loadTrending();
      setLoading(false); 
    }
  }, [isAtBottom, loadTrending]);

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={search} />
      <h2 style={{ textAlign: 'center' }}>All The Movies</h2>
      <MovieList movies={movies} />
      {loading && <div style={{ textAlign: 'center' }}>Loading...</div>} 
    </div>
  );
};


export default Home;
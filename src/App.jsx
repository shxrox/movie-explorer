import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Trending from './pages/Trending';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<Popular />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;

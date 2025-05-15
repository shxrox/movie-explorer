import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Home from './pages/Home';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Trending from './pages/Trending';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Login from './pages/Login';

function App() {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
}

export default App;

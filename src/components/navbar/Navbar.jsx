import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
      <Link to="/trending" style={{ color: 'white', marginRight: '20px' }}>Trending</Link>
      <Link to="/popular" style={{ color: 'white', marginRight: '20px' }}>Popular</Link>
      <Link to="/top-rated" style={{ color: 'white', marginRight: '20px' }}>Top Rated</Link>
      <Link to="/login" style={{ color: 'white' }}>Logout</Link>

    </nav>
  );
};

export default Navbar;

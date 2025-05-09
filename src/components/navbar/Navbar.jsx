import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-logo">🎬 MovieExplorer</div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/trending" onClick={() => setMenuOpen(false)}>Trending</Link>
        <Link to="/popular" onClick={() => setMenuOpen(false)}>Popular</Link>
        <Link to="/top-rated" onClick={() => setMenuOpen(false)}>Top Rated</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
      </div>

      <div className="navbar-icons">
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={toggleMenu} className="menu-toggle">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

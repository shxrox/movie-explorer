import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      localStorage.setItem("theme", "light");
    }
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

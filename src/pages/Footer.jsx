
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">🎬 MovieExplorer</div>

                <div className="footer-links">

                    <a href="https://github.com/shxrox/movie-explorer" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/sharon-devasudan-1038b72a3/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="sjharondeva8@gmail.com"><FaEnvelope /></a>
                </div>

                <p className="footer-text">© {new Date().getFullYear()} MovieExplorer. Built by Sharon.</p>
            </div>
        </footer>
    );
};

export default Footer;

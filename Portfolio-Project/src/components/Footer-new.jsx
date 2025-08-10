import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Minimal Footer Content */}
        <div className="footer-content">
          <div className="footer-copyright">
            <p>© {currentYear} Ignacio Agustin Diaz Neila</p>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

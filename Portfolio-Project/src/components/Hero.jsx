import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/1682563190949.jpeg';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hello, I'm</span>
              <span className="hero-name">Ignacio Agustin Diaz Neila</span>
              <span className="hero-role">Front End Developer</span>
            </h1>
            
            <p className="hero-description">
I’m a passionate Front End Developer who loves bringing ideas to life in the browser. With skills in React, JavaScript, HTML, CSS, and Bootstrap, I enjoy building interfaces that look great and feel smooth on any device. I work with REST APIs to connect apps to real-world data. I’m always learning and finding new ways to improve the web — one project at a time.


            </p>
            
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <button className="btn-secondary">
                <FaDownload />
                Download CV
              </button>
            </div>
            
            <div className="hero-social">
              <a href="https://github.com/IgnacioDN/NovaStore/tree/master" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ignacio-agustin-diaz-neila-0359581b4/" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:ignaciodiazneila@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src={profileImage} 
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

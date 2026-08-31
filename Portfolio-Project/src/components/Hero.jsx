import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import profileImage from '../assets/1682563190949.jpeg';
import '../styles/Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-greeting">Hola, soy</span>
              <span className="hero-name">Ignacio Agustín Díaz Neila</span>
              <span className="hero-role">Front End Developer</span>
            </h1>

            <p className="hero-description">
              Construyo interfaces con React que se ven bien y funcionan mejor,
              conectadas a APIs reales y pensadas para producción.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToContact}>
                Contactame
              </button>
              <a
                href="/cv/Ignacio-Agustín-Díaz-Neila-CV.pdf"
                download="Ignacio-Agustín-Díaz-Neila-CV.pdf"
                className="btn-secondary"
                aria-label="Descargar CV"
              >
                <FaDownload />
                Descargar CV
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/IgnacioDN" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ignacio-agustin-diaz-neila-0359581b4/"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:ignaciodiazneila@gmail.com" className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <img src={profileImage} alt="Ignacio Agustín Díaz Neila" className="profile-image" />
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

import React, { useState, useEffect } from 'react';
import { FaCode, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const highlights = [
    {
      icon: <FaCode />,
      title: 'Código limpio',
      description: 'Código mantenible y escalable, siguiendo buenas prácticas.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Resolución de problemas',
      description: 'Enfoque creativo ante desafíos complejos.',
    },
    {
      icon: <FaUsers />,
      title: 'Trabajo en equipo',
      description: 'Colaborativo, con buena comunicación.',
    },
    {
      icon: <FaRocket />,
      title: 'Aprendizaje rápido',
      description: 'Me adapto rápido a nuevas tecnologías.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <div className={`description-content ${isMobile && !isExpanded ? 'collapsed' : ''}`}>
                <p>
                  Soy Front End Developer especializado en <strong>React</strong>,{' '}
                  <strong>JavaScript</strong> y ecommerce (Magento/Adobe Commerce). Me interesa
                  transformar ideas en interfaces prolijas, rápidas y fáciles de mantener.
                </p>

                <p>
                  Trabajo tanto en equipo como de forma independiente, con foco en código limpio
                  y en resolver problemas reales — no solo escribir código que funcione, sino que
                  se pueda mantener.
                </p>
              </div>

              {isMobile && (
                <button className="see-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? 'Ver menos' : 'Ver más'}
                </button>
              )}
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

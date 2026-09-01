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
      description:
        'Componentes reutilizables y mantenibles, pensados para quien los toque después — incluido yo mismo en 6 meses.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Resolución de problemas',
      description: 'Ante un bug o un requerimiento ambiguo, primero entiendo el porqué; después programo.',
    },
    {
      icon: <FaUsers />,
      title: 'Trabajo en equipo',
      description: 'Cómodo tanto liderando la parte técnica de un proyecto como sumándome a un equipo ya armado.',
    },
    {
      icon: <FaRocket />,
      title: 'Aprendizaje rápido',
      description: 'De Redux Toolkit a testing con Selenium: me meto de lleno en tecnologías nuevas cuando el proyecto lo pide.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">Acerca De Mi</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-description">
              <div className={`description-content ${isMobile && !isExpanded ? 'collapsed' : ''}`}>
                <p>
                  Front End Developer especializado en <strong>React</strong> y ecommerce, con
                  experiencia real en producción sobre <strong>Magento</strong> y{' '}
                  <strong>Adobe Commerce</strong>. Construyo interfaces que no solo se ven bien:
                  cargan rápido, funcionan en todos los dispositivos y están pensadas para
                  convertir.
                </p>
                <p>
                  Antes de escribir código, entiendo el problema que hay detrás. Eso me llevó a
                  migrar proyectos de estado local a arquitecturas escalables con Redux, y a
                  integrar APIs REST reales en vez de quedarme con datos de prueba — la diferencia
                  entre un ejercicio de portfolio y algo listo para producción.
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

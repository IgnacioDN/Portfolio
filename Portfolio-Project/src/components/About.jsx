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
        'Componentes reutilizables y mantenibles.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Resolución de problemas',
      description: 'Ante un bug o un requerimiento ambiguo, primero entiendo el porqué; después programo.',
    },
    {
      icon: <FaUsers />,
      title: 'Trabajo en equipo',
      description: 'Cómodo tanto sumándome a un equipo con procesos ya definidos como resolviendo de forma más autónoma cuando hace falta.',
    },
    {
      icon: <FaRocket />,
      title: 'Aprendizaje rápido',
      description: 'De Redux Toolkit a Adobe Commerce Magento: me meto de lleno en tecnologías nuevas cuando el proyecto lo pide.',
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
                  Mi camino en tecnología empezó como <strong>QA Tester</strong> y <strong>Key Account Manager</strong>,
                  antes de especializarme en <strong>desarrollo front end</strong>. Con los años de experiencia, esa
                  combinación me da la posibilidad de entender al usuario y a la finalidad del negocio
                  detrás del código.
                </p>
                <p>
                  Hoy trabajo en un equipo de e-commerce y desarrollo con <strong>React</strong>,
                  <strong> TypeScript</strong> y <strong>Next.js</strong>. Mi último proyecto, Ritmo BA,
                  es una app full-stack con login, base de datos y búsqueda con IA. Me importan los
                  casos borde, la accesibilidad y los estados de error, y busco seguir creciendo como
                  developer en un equipo remoto.
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

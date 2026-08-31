import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const experiences = [
    {
      title: 'Front End Developer',
      company: 'SommierCenter',
      location: 'Buenos Aires, Argentina',
      period: 'Apr.2025 - Present',
      type: 'Full-time',
      description: [
        'Desarrollo y mantenimiento de landing pages custom para plataformas Magento con HTML, CSS y JavaScript.',
        'Implementación de UIs pixel-perfect en Magento y Adobe Commerce, alineadas con objetivos de marketing.',
        'Construcción de elementos dinámicos (contadores, animaciones, transiciones) para mejorar conversión.',
        'Refactor de componentes con HTML semántico y CSS moderno (Flexbox, Grid).',
      ],
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Magento', 'Adobe Commerce', 'Git'],
    },
    {
      title: 'Key Account Manager',
      company: 'Balloon Group',
      location: 'Buenos Aires, Argentina',
      period: 'Jun.2022 - Feb.2025',
      type: 'Full Time',
      description: [
        'Gestión end-to-end de sitios ecommerce en Magento: catálogo, productos y atributos custom.',
        'Diseño de landing pages responsive con HTML/CSS y Magento Page Builder.',
        'Configuración de promociones, cupones y reglas de carrito según estrategia del cliente.',
      ],
      technologies: ['HTML5', 'CSS', 'Magento', 'VTEX', 'Adobe Commerce'],
    },
    {
      title: 'QA Tester',
      company: 'uTest',
      location: 'Remote',
      period: 'Sep.2021 - Sep.2023',
      type: 'Freelance',
      description: [
        'Testing de sitios y apps móviles: usabilidad, performance y bugs.',
        'Reporte de feedback detallado usando TestRail, BrowserStack y Postman.',
        'Colaboración con equipos de QA globales bajo metodologías ágiles.',
      ],
      technologies: ['Manual Testing', 'TestRail', 'Postman', 'BrowserStack'],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Mi recorrido profesional en desarrollo web</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <FaBriefcase />
              </div>

              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-type">{exp.type}</span>
                </div>

                <div className="experience-meta">
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="experience-location">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                  </div>
                  <div className="experience-period">
                    <FaCalendarAlt />
                    {exp.period}
                  </div>
                </div>

                <div className="experience-description">
                  <div
                    className={`description-content ${
                      isMobile && !expandedItems[index] ? 'collapsed' : ''
                    }`}
                  >
                    <ul>
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {isMobile && (
                    <button className="see-more-btn" onClick={() => toggleExpand(index)}>
                      {expandedItems[index] ? 'Ver menos' : 'Ver más'}
                    </button>
                  )}
                </div>

                <div className="experience-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

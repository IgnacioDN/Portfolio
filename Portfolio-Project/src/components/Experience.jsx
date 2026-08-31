import React, { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Experience.css';

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
      'Testing manual cross-browser y ajuste de breakpoints para consistencia visual en desktop y mobile.',
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
      'Punto de contacto principal con clientes, gestionando expectativas y priorizando requerimientos por impacto en negocio.',
      'Análisis de KPIs de conversión y ventas para proponer mejoras de UX y estrategia comercial.',
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
      'Diseño de casos de prueba funcionales y de regresión a partir de user stories.',
      'Documentación clara de bugs con pasos de reproducción, severidad y evidencia (screenshots/logs).',
    ],
    technologies: ['Manual Testing', 'TestRail', 'Postman', 'BrowserStack'],
  },
];

const Experience = () => {
  const cardRefs = useRef([]);
  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll-reveal: cada card aparece al entrar en vista
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  // Detecta qué card está activa mientras se scrollea horizontal (mobile) para marcar el dot
  useEffect(() => {
    const gridEl = gridRef.current;
    if (!gridEl) return undefined;

    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { root: gridEl, threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => el && activeObserver.observe(el));

    return () => activeObserver.disconnect();
  }, []);

  const goToCard = (index) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Mi recorrido profesional en desarrollo web</p>
        </div>

        <div className="experience-grid" ref={gridRef}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className="experience-card"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <div className="experience-card-top">
                <span className="experience-index">0{index + 1}</span>
                <FaBriefcase className="experience-icon" />
              </div>

              <h3 className="experience-title">{exp.title}</h3>
              <span className="experience-type">{exp.type}</span>

              <div className="experience-meta">
                <span className="company-name">{exp.company}</span>
                <span className="experience-location">
                  <FaMapMarkerAlt />
                  {exp.location}
                </span>
                <span className="experience-period">
                  <FaCalendarAlt />
                  {exp.period}
                </span>
              </div>

              <ul className="experience-description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="experience-technologies">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dots de paginación, solo visibles en mobile (una card a la vez) */}
        <div className="experience-dots">
          {experiences.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`experience-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToCard(index)}
              aria-label={`Ver experiencia ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

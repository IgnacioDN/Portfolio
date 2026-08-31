import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import nachodnappImg from '../assets/nachodnapp.jpg';
import novastoreImg from '../assets/novastore.jpg';
import sonicfinderImg from '../assets/sonicfinder.jpg';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'NachoDnApp Ecommerce',
    description:
      'Ecommerce completo con catálogo, carrito persistente, alta/edición/borrado de productos contra una API real y buscador en tiempo real.',
    technologies: ['React', 'Redux Toolkit', 'React Router', 'Axios', 'Bootstrap'],
    github: 'https://github.com/IgnacioDN/Proyecto-Integrador-Educacion-IT',
    live: 'https://nachodn.netlify.app/',
    image: nachodnappImg,
    status: 'completed',
  },
  {
    id: 2,
    title: 'NovaStore Ecommerce',
    description:
      'App de ecommerce responsive con catálogo, filtros, carrito y flujo de checkout, con foco en performance y UI/UX moderna.',
    technologies: ['React', 'React Router', 'Context API', 'CSS3', 'Netlify'],
    github: 'https://github.com/IgnacioDN/NovaStore',
    live: 'https://novastoredn.netlify.app/',
    image: novastoreImg,
    status: 'completed',
  },
  {
    id: 3,
    title: 'SonicFinder Web App',
    description:
      'Buscador y explorador de música conectado a la API de Spotify, con navegación fluida y manejo de estado eficiente.',
    technologies: ['React', 'React Router', 'Context API', 'CSS3', 'Netlify'],
    github: 'https://github.com/IgnacioDN/SonicFinder25',
    live: 'https://sonicfinder25.netlify.app/',
    image: sonicfinderImg,
    status: 'completed',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Pasá el mouse sobre cada proyecto para ver la portada</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-flip">
              <div className="project-flip-inner">
                {/* Cara frontal: info del proyecto */}
                <div className="project-face project-face-front">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-status ${project.status}`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    <span className="tech-title">Stack</span>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="flip-hint">Pasá el mouse →</span>
                </div>

                {/* Cara trasera: captura del proyecto + links */}
                <div className="project-face project-face-back">
                  <div className="browser-chrome">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div
                    className="project-screenshot"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="project-face-back-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link github-link"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link live-link"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

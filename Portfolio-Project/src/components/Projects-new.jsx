import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
const projects = [
  {
    id: 1,
    title: 'NovaStore E-commerce',
    description: 'A fully responsive e-commerce web app developed with React, featuring product catalog, filtering, shopping cart, user authentication, and a seamless checkout flow. Designed for optimal performance and modern UI/UX.',
    technologies: ['React', 'React Router', 'Context API', 'CSS3', 'Netlify'],
    features: [
      'Mobile-first, responsive layout',
      'Product catalog with category filtering and search',
      'Shopping cart with quantity management and price calculation',
      'User authentication and protected routes',
      'Carousel banners and featured product sections',
      'Persistent cart (local storage)',
      'Deploy ready with Netlify'
    ],
    github: 'https://github.com/IgnacioDN/NovaStore/tree/master', // Actualiza si tienes el repo público
    live: 'https://novastoredn.netlify.app/',
    status: 'completed'
  },
 {
    id: 2,
    title: 'SonicFinder', 
    description: 'A music search and discovery app that allows users to explore songs, artists, and albums using the Deezer API. Built with React and styled for a smooth, engaging user experience.',
    technologies: ['React', 'Deezer API', 'CSS3', 'Axios', 'Netlify'],
    features: [
      'Real-time search for tracks, albums, and artists',
      'Detailed artist and album pages',
      'Audio preview for songs',
      'Modern, responsive interface',
      'Error handling and loading states',
      'One-click listening experience'
    ],
    github: 'https://github.com/IgnacioDN/SonicFinder25', // Actualiza si tienes el repo público
    live: 'https://sonicfinder25.netlify.app/',
    status: 'completed'
  }
];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A showcase of my recent work and technical achievements
          </p>
        </div>
        
        {/* Projects Grid - Two Boxes */}
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className={`project-status ${project.status}`}>
                  {project.status === 'completed' ? 'Completed' : 'In Progress'}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <FaCode />
                  View Code
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FaEye />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

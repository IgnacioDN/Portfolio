import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
const projects = [
  {
    id: 1,
    title: 'NovaStore E-commerce',
    description: 'A fully responsive e-commerce web app developed with React, featuring product catalog, filtering, shopping cart, user authentication, and a seamless checkout flow. Built for optimal performance and modern UI/UX.',
    technologies: ['React', 'React Router', 'Context API', 'CSS3', 'JavaScript', 'Netlify'],
    github: 'https://github.com/IgnacioDN/NovaStore',
    live: 'https://novastoredn.netlify.app/',
    status: 'completed'
  },
 {
    id: 2,
    title: 'SonicFinder Web App',
    description: 'A dynamic music search and discovery web application that enables users to explore songs, artists, and albums by interacting with the Spotify API. Developed using React, it features responsive design, intuitive navigation, and efficient state management. The app integrates modern UI/UX practices to ensure a seamless and engaging user experience across devices.',
    technologies: ['React', 'React Router', 'Context API', 'CSS3', 'JavaScript', 'Netlify'],
    github: 'https://github.com/IgnacioDN/SonicFinder25',
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
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <h4 className="tech-title">Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

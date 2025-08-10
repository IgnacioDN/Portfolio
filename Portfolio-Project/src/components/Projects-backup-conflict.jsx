import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NovaStore E-commerce',
      description: 'A modern e-commerce platform built with React and Node.js featuring user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe', 'JWT'],
      features: [
        'Responsive design with mobile optimization',
        'User authentication and authorization',
        'Product filtering and search functionality',
        'Shopping cart and checkout process',
        'Payment integration with Stripe'
      ],
      github: 'https://github.com/username/novastore',
      live: 'https://novastore-demo.netlify.app',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects with drag-and-drop functionality and real-time updates.',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI', 'React DnD'],
      features: [
        'Drag and drop task organization',
        'Real-time collaboration',
        'Project categorization',
        'Progress tracking',
        'Responsive design'
      ],
      github: 'https://github.com/username/task-manager',
      live: 'https://task-manager-demo.netlify.app',
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

 

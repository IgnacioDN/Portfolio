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
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'Geolocation API'],
      features: [
        'Current weather conditions',
        '7-day weather forecast',
        'Interactive charts and graphs',
        'Location-based weather data',
        'Responsive mobile design'
      ],
      github: 'https://github.com/username/weather-dashboard',
      live: 'https://weather-dashboard-demo.netlify.app',
      status: 'completed'
    },
    {
      id: 4,
      title: 'API REST Blog',
      category: 'backend',
      description: 'A RESTful API for a blog platform with user authentication, CRUD operations, and comprehensive documentation.',
      image: '/assets/project-placeholder.jpg',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
      features: [
        'User authentication and authorization',
        'CRUD operations for posts and comments',
        'API documentation with Swagger',
        'Input validation and error handling',
        'Unit and integration testing'
      ],
      github: 'https://github.com/username/blog-api',
      live: 'https://blog-api-docs.herokuapp.com',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      category: 'fullstack',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.',
      image: '/assets/project-placeholder.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Socket.io', 'Chart.js'],
      features: [
        'Multi-platform social media integration',
        'Post scheduling and automation',
        'Analytics and performance metrics',
        'Real-time notifications',
        'Team collaboration tools'
      ],
      github: 'https://github.com/username/social-dashboard',
      live: '#',
      status: 'in-progress'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'frontend',
      description: 'A responsive portfolio website showcasing my work and skills with modern design and smooth animations.',
      image: '/assets/project-placeholder.jpg',
      technologies: ['React', 'CSS3', 'Framer Motion', 'React Router', 'Netlify'],
      features: [
        'Responsive design',
        'Smooth scrolling navigation',
        'Contact form integration',
        'SEO optimization',
        'Performance optimization'
      ],
      github: 'https://github.com/username/portfolio',
      live: 'https://myportfolio.netlify.app',
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

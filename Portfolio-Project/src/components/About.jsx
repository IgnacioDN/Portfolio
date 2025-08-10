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
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Problem Solving',
      description: 'Creative approach to complex challenges with innovative solutions.'
    },
    {
      icon: <FaUsers />,
      title: 'Team Player',
      description: 'Collaborative mindset with excellent communication and leadership skills.'
    },
    {
      icon: <FaRocket />,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape.'
    }
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
          I'm an enthusiastic Front End Developer driven by a passion for building beautiful,
          responsive, and user-centric web applications. I specialize in technologies like <strong>React</strong>,
          <strong> JavaScript</strong>, <strong>HTML</strong>, and <strong>CSS</strong>, and love transforming ideas into
          seamless digital experiences.

                </p>
                
                <p>
          My journey started with curiosity about how the web works and quickly evolved into
          a focused mission: creating scalable and maintainable code that solves real-world problems.
          I have experience working on e-commerce projects, optimizing UI/UX, and building
          reusable components for modern web apps.

                </p>
                
                <p>
          I'm committed to writing clean, modular code, following best practices, and staying up-to-date with the latest trends in
          front-end development. Whether collaborating with a team or working independently,
          I always aim to deliver high-quality solutions. Outside of coding, I enjoy exploring new technologies,
          learning about backend development, and sharing knowledge with the dev community.
                </p>
              </div>
              
              {isMobile && (
                <button 
                  className="see-more-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'See Less' : 'See More'}
                </button>
              )}
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    {highlight.icon}
                  </div>
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

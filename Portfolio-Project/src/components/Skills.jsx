import React from 'react';
import { FaReact, FaJs, FaHtml5, FaGitAlt, FaCloud, FaServer, FaSyncAlt, FaPalette } from 'react-icons/fa';
import { SiRedux, SiTypescript, SiFigma } from 'react-icons/si';
import '../styles/Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <FaReact />,
    skills: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'JavaScript (ES6+)', icon: <FaJs /> },
      { name: 'HTML5 / CSS3', icon: <FaHtml5 /> },
      { name: 'TypeScript', icon: <SiTypescript />, learning: true },
    ],
  },
  {
    title: 'Estado & APIs',
    icon: <FaServer />,
    skills: [
      { name: 'REST APIs', icon: <FaServer /> },
      { name: 'Async state management', icon: <FaSyncAlt /> },
      { name: 'Context API / Redux', icon: <SiRedux />, learning: true },
    ],
  },
  {
    title: 'Diseño',
    icon: <FaPalette />,
    skills: [
      { name: 'UI/UX Principles', icon: <FaPalette /> },
      { name: 'Figma', icon: <SiFigma /> },
    ],
  },
  {
    title: 'Herramientas & Ecommerce',
    icon: <FaCloud />,
    skills: [
      { name: 'Git / GitHub', icon: <FaGitAlt /> },
      { name: 'Adobe Commerce (Magento)', icon: <FaCloud /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`skill-item ${skill.learning ? 'skill-item--learning' : ''}`}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                    {skill.learning && <span className="learning-badge">learning</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

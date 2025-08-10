import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDatabase,
  FaServer,
  FaMobile,
  FaCloud,
  FaTools,
  FaBrain,
  FaCode
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiRedux,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiNetlify,
  SiHeroku,
  SiPostman,
  SiJest,
  SiWebpack,
  SiSass
} from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <FaReact />,
      skills: [
        { name: 'React', icon: <FaReact />, level: 90 },
        { name: 'JavaScript', icon: <FaJs />, level: 85 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
        { name: 'SASS', icon: <SiSass />, level: 80 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
        { name: 'Redux', icon: <SiRedux />, level: 78 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 82 },
        { name: 'Express.js', icon: <SiExpress />, level: 80 },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 75 },
        { name: 'REST APIs', icon: <FaServer />, level: 85 },
        { name: 'GraphQL', icon: <FaDatabase />, level: 65 }
      ]
    },
    {
      title: 'Database & Storage',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
        { name: 'MySQL', icon: <SiMysql />, level: 70 },
        { name: 'Firebase', icon: <SiFirebase />, level: 80 }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 88 },
        { name: 'VS Code', icon: <FaCode />, level: 95 },
        { name: 'Postman', icon: <SiPostman />, level: 85 },
        { name: 'Jest', icon: <SiJest />, level: 70 },
        { name: 'Webpack', icon: <SiWebpack />, level: 65 }
      ]
    },
    {
      title: 'Cloud & Deployment',
      icon: <FaCloud />,
      skills: [
        { name: 'Netlify', icon: <SiNetlify />, level: 85 },
        { name: 'Heroku', icon: <SiHeroku />, level: 80 },
        { name: 'Vercel', icon: <FaCloud />, level: 75 },
        { name: 'AWS Basics', icon: <FaCloud />, level: 60 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaBrain />,
      skills: [
        { name: 'Problem Solving', icon: <FaBrain />, level: 92 },
        { name: 'Team Collaboration', icon: <FaBrain />, level: 88 },
        { name: 'Communication', icon: <FaBrain />, level: 85 },
        { name: 'Project Management', icon: <FaBrain />, level: 80 },
        { name: 'Critical Thinking', icon: <FaBrain />, level: 87 }
      ]
    }
  ];

  const getSkillLevelText = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    if (level >= 60) return 'Beginner';
    return 'Learning';
  };

  const getSkillLevelClass = (level) => {
    if (level >= 90) return 'expert';
    if (level >= 80) return 'advanced';
    if (level >= 70) return 'intermediate';
    if (level >= 60) return 'beginner';
    return 'learning';
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <div className="skill-icon">
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <div className={`skill-level ${getSkillLevelClass(skill.level)}`}>
                        {getSkillLevelText(skill.level)}
                      </div>
                    </div>
                    
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="progress-percentage">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Skill Summary */}
        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
          </div>
          
          <div className="learning-note">
            <p>
              <strong>Always Learning:</strong> I'm constantly expanding my skill set and staying 
              up-to-date with the latest technologies and best practices in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

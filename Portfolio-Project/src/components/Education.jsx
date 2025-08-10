import React from 'react';
import { FaCertificate, FaAward } from 'react-icons/fa';
import '../styles/Education.css';

const Education = () => {
  const certifications = [
    {
      name: 'Front End Development Cerification',
      issuer: 'UTN',
      date: '2024-2025',
      skills: ['React', 'JavaScript', 'RestAPI', 'Bootstraop', 'HTML5', 'CSS3']
    },
    {
      name: 'Adobe Commerce Business Practitioner',
      issuer: 'Adobe',
      date: '2024',
      skills: ['Adobe Commerce', 'E-commerce', 'Business Strategy', 'Digital Marketing', 'Customer Experience', 'Magento']
    },
    {
      name: 'SQL Fundamentals Course',
      issuer: 'Udemy',
      date: '2023',
      skills: ['SQL', 'Database Management', 'Data Analysis', 'MySQL', 'PostgreSQL']
    },
        {
      name: 'Software Qa Management',
      issuer: 'EducacionIT',
      date: '2021',
      skills: ['Software Testing', 'Quality Assurance', 'Test Automation', 'Agile Methodologies', 'Bug Tracking', 'Selenium']
    },
    {
      name: 'JavaScript Fundamentals Course',
      issuer: 'Fundación Telefónica',
      date: '2021',
      skills: ['JavaScript', 'Programming Fundamentals', 'Web Development', 'ES6', 'DOM Manipulation', 'Event Handling']
    },


  ];

  const courses = [
  "Web Development",
  "JavaScript Programming",
  "Front-End Frameworks",
  "Database Management",
  "E-commerce Fundamentals",
  "Digital Marketing",
  "Software Testing & QA",
  "Agile Methodologies"
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My professional certifications and continuous learning journey
          </p>
        </div>
        
        <div className="education-content">
          {/* Certifications */}
          <div className="certifications-section">
         
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="cert-header">
                    <FaAward className="cert-icon" />
                    <div className="cert-info">
                      <h4 className="cert-name">{cert.name}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="cert-meta">
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  
                  <div className="cert-skills">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Relevant Coursework */}
          <div className="coursework-section">
            <h3 className="subsection-title">Relevant Coursework</h3>
            <div className="courses-grid">
              {courses.map((course, index) => (
                <div key={index} className="course-item">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

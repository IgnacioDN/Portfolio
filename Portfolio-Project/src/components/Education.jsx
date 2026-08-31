import React, { useEffect, useRef } from 'react';
import { FaAward } from 'react-icons/fa';
import '../styles/Education.css';

const certifications = [
  {
    name: 'Front End Development Certification',
    issuer: 'UTN',
    date: '2024-2025',
    skills: ['React', 'JavaScript', 'REST API', 'Bootstrap', 'HTML5', 'CSS3'],
  },
  {
    name: 'Adobe Commerce Business Practitioner',
    issuer: 'Adobe',
    date: '2024',
    skills: ['Adobe Commerce', 'Ecommerce', 'Magento', 'Business Strategy'],
  },
  {
    name: 'SQL Fundamentals Course',
    issuer: 'Udemy',
    date: '2023',
    skills: ['SQL', 'MySQL', 'PostgreSQL', 'Data Analysis'],
  },
  {
    name: 'Software QA Management',
    issuer: 'Educación IT',
    date: '2021',
    skills: ['Testing', 'QA', 'Agile', 'Selenium'],
  },
  {
    name: 'JavaScript Fundamentals Course',
    issuer: 'Fundación Telefónica',
    date: '2021',
    skills: ['JavaScript', 'ES6', 'DOM', 'Event Handling'],
  },
];

const courses = [
  'Web Development',
  'JavaScript Programming',
  'Front-End Frameworks',
  'Database Management',
  'Ecommerce Fundamentals',
  'Digital Marketing',
  'Software Testing & QA',
  'Agile Methodologies',
];

const Education = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Formación continua y certificaciones profesionales</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="certification-card"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <div className="cert-top-bar"></div>
              <div className="cert-header">
                <div className="cert-icon">
                  <FaAward />
                </div>
                <div className="cert-info">
                  <h4 className="cert-name">{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>

              <span className="cert-date">{cert.date}</span>

              <div className="cert-skills">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ticker infinito de cursos relevantes */}
        <div className="coursework-marquee">
          <div className="marquee-track">
            {[...courses, ...courses].map((course, index) => (
              <span key={index} className="marquee-item">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

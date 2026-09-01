import React, { useEffect, useRef } from 'react';
import { FaAward } from 'react-icons/fa';
import '../styles/Education.css';

const certifications = [
  {
    name: 'React JS Developer',
    issuer: 'Educación IT',
    date: 'May 2026 – Ago 2026',
    skills: ['React', 'Redux Toolkit', 'React Router', 'REST API', 'Axios'],
  },
  {
    name: 'Web Development Diploma (Front-End)',
    issuer: 'UTN — Universidad Tecnológica Nacional',
    date: 'Nov 2024 – Feb 2025',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Git'],
  },
  {
    name: 'Business Practitioner Professional',
    issuer: 'Adobe Commerce',
    date: 'Jul 2023 – Ene 2024',
    skills: ['Adobe Commerce', 'Magento', 'Ecommerce'],
  },
  {
    name: 'Software QA Management',
    issuer: 'Educación IT',
    date: 'Jul 2021 – Dic 2021',
    skills: ['Testing', 'QA', 'Agile', 'Selenium'],
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
          <h2 className="section-title">Certificaciones</h2>
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

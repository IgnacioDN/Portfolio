import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Experience.css';

const Experience = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleExpand = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const experiences = [
    {
      title: 'Front End Developer',
      company: 'SommierCenter',
      location: 'Buenos Aires, Argentina',
      period: 'Apr.2025 - Present',
      type: 'Full-time',
      description: [
        "Developed and maintained custom landing pages for Magento-based ecommerce platforms using raw HTML, CSS, and JavaScript, with a strong focus on dynamic and interactive user experiences.",
  "Implemented pixel-perfect UIs within Magento and Adobe Commerce, ensuring full alignment with marketing and sales objectives.",
  "Leveraged advanced JavaScript to build dynamic counters, interactive elements, scroll-to-top features, animated transitions, and redirect logic to boost engagement and conversion rates.",
  "Adapted and optimized layouts across multiple breakpoints for a consistent and high-quality appearance on both desktop and mobile devices.",
  "Collaborated with UX and ecommerce teams to transform wireframes and campaign briefs into high-quality, production-ready pages.",
  "Conducted thorough manual frontend testing to guarantee browser compatibility and strict adherence to visual guidelines.",
  "Refactored and streamlined frontend components, leveraging semantic HTML and modern CSS (Flexbox, Grid) for cleaner, more maintainable code."
      ],
      technologies: [  'JavaScript', 'CSS3', 'HTML5', 'Magento', 'Adobe Commerce',
  'Chrome DevTools', 'Git']
    },
    {
      title: 'Key Account Manager',
      company: 'Balloon Group',
      location: 'Buenos Aires, Argentina',
      period: '2022 - 2025',
      type: 'Full Time',
      description: [
        'Led end-to-end management of Magento-based ecommerce sites for clients, including product creation, catalog setup, and custom attribute configuration.',
        'Designed and built responsive landing pages using HTML and CSS, and customized layouts with Magento Page Builder.',
        'Handled complete product catalog management: bulk import/export of products, price updates, and inventory handling.',
        'Created and configured promotions, coupons, and dynamic cart rules tailored to client strategies.',
        'Performed manual testing on promotional mechanics (discounts, rules, checkout behavior) to ensure proper functionality before production release.',
        'Acted as a key point of contact for clients, collaborating closely to deliver tailored ecommerce solutions and meet business requirements.'
      ],
      technologies: ['HTML5', 'CSS', 'Magento', 'VTEX', 'Adobe Commerce']
    },
{
  title: 'QA Tester',
  company: 'uTest',
  location: 'Remote',
  period: '2021 - 2023',
  type: 'Freelance',
  description: [
    'Tested websites and mobile apps for usability, performance, and bugs',
    'Reported detailed feedback on user experience and functionality',
    'Used tools like TestRail, BrowserStack, and Postman to validate features',
    'Collaborated with global QA teams following agile methodologies'
  ],
  technologies: ['Manual Testing', 'Bug Tracking', 'TestRail', 'Postman', 'BrowserStack']
}
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            My professional journey and key achievements in software development
          </p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <FaBriefcase />
              </div>
              
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-type">{exp.type}</span>
                </div>
                
                <div className="experience-meta">
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="experience-location">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </span>
                  </div>
                  <div className="experience-period">
                    <FaCalendarAlt />
                    {exp.period}
                  </div>
                </div>
                
                <div className="experience-description">
                  <div className={`description-content ${
                    isMobile && !expandedItems[index] ? 'collapsed' : ''
                  }`}>
                    <ul>
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  {isMobile && (
                    <button 
                      className="see-more-btn"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedItems[index] ? 'See Less' : 'See More'}
                    </button>
                  )}
                </div>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

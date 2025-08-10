import React from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub
} from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'ignaciodiazneila@gmail.com',
      link: 'mailto:ignaciodiazneila@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+54 9 011 5047-3113',
      link: 'tel:+54901150473113'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ignacio-agustin-diaz-neila-0359581b4/',
      color: '#0077b5'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/IgnacioDN',
      color: '#333'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's connect and discuss opportunities
          </p>
        </div>
        
        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-card">
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link} className="contact-link">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    aria-label={social.name}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

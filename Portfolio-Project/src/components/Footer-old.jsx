import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/yourusername',
      name: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourprofile',
      name: 'LinkedIn'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:your.email@example.com',
      name: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Your Name</h3>
              <p>Full Stack Developer</p>
              <p className="footer-tagline">
                Creating digital experiences that make a difference
              </p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <p>Ready to work together?</p>
              <a href="#contact" className="footer-cta">
                Let's Connect
              </a>
            </div>
            
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                © {currentYear} Your Name. Made with{' '}
                <FaHeart className="heart-icon" />{' '}
                using React
              </p>
            </div>
            
            <div className="footer-links-bottom">
              <a href="#" className="footer-link-small">Privacy Policy</a>
              <a href="#" className="footer-link-small">Terms of Service</a>
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

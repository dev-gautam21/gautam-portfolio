import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Get In Touch</h3>
          <p>Feel free to reach out via email or connect with me on LinkedIn and GitHub.</p>
          
          <div className="social-links">
            <a href="mailto:gaut21am@gmail.com" className="social-link" title="Email">
              📧 Email
            </a>
            <a href="tel:+918146047816" className="social-link" title="Phone">
              📱 Phone
            </a>
            <a href="https://linkedin.com/in/gautam-sharma-ai" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              💼 LinkedIn
            </a>
            <a href="https://github.com/dev-gautam21" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
              🐙 GitHub
            </a>
          </div>

          <div className="footer-certifications">
            <h4>Certifications</h4>
            <ul>
              <li>Microsoft Azure AI Fundamentals</li>
              <li>Introduction to Machine Learning from Duke University</li>
              <li>Structured Query Language from the University of Colorado Boulder</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Gautam Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

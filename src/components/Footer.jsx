import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-auto border-top">
      <div className="container text-center">
        <h5 className="mb-3">Gautam Sharma</h5>
        <div className="mb-3">
          <a href="mailto:gaut21am@gmail.com" className="text-decoration-none text-secondary mx-2">Email</a>
          <span className="text-muted">|</span>
          <a href="https://linkedin.com/in/gautam-sharma-ai" className="text-decoration-none text-secondary mx-2">LinkedIn</a>
          <span className="text-muted">|</span>
          <a href="https://github.com/dev-gautam21" className="text-decoration-none text-secondary mx-2">GitHub</a>
        </div>
        <p className="small text-muted mb-0">&copy; 2026. Built with React & Bootstrap.</p>
      </div>
    </footer>
  );
};

export default Footer;
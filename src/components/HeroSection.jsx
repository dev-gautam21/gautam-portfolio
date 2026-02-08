import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Gautam Sharma</h1>
          <p className="hero-subtitle">
            Computer Science & AI/ML Specialist
          </p>
          <p className="hero-description">
            Building intelligent solutions with Python, React, and Machine Learning. 
            Experienced in full-stack development, data science, and AI systems.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>

          <div className="hero-info">
            <div className="info-item">
              <span className="info-label">Email:</span>
              <a href="mailto:gaut21am@gmail.com">gaut21am@gmail.com</a>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <a href="tel:+918146047816">+91-8146047816</a>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span>Punjab, India</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-placeholder">
            <span className="avatar-text">GS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

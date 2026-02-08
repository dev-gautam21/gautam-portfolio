import React from 'react';

const Home = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold">Hi, I'm Gautam Sharma</h1>
          <h2 className="h4 text-secondary mb-4">Computer Science & AI/ML Specialist</h2>
          <p className="lead text-muted">
            Building intelligent solutions with Python, React, and Machine Learning. 
            Experienced in full-stack development, data science, and AI systems.
          </p>
          <div className="d-flex gap-3 mt-4">
            <a href="mailto:gaut21am@gmail.com" className="btn btn-primary btn-lg">Contact Me</a>
            <a href="https://linkedin.com/in/gautam-sharma-ai" target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-lg">LinkedIn</a>
          </div>
        </div>
        <div className="col-lg-4 text-center d-none d-lg-block">
           {/* Simple avatar placeholder using Bootstrap icons or text */}
           <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center mx-auto" style={{width: '200px', height: '200px', fontSize: '3rem'}}>
             GS
           </div>
        </div>
      </div>

      <hr className="my-5" />

      {/* Education & Skills Row */}
      <div className="row g-5">
        <div className="col-md-6">
          <h3 className="mb-4 text-primary">Education</h3>
          <div className="card shadow-sm mb-3 border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold">Chandigarh University</h5>
              <p className="card-subtitle text-muted mb-2">B.E. Computer Science</p>
              <p className="card-text">CGPA: 7.9 <br/><small className="text-muted">Aug 2023 – Present</small></p>
            </div>
          </div>
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title fw-bold">Sacred Heart Convent School</h5>
              <p className="card-subtitle text-muted mb-2">Senior Secondary</p>
              <p className="card-text">84.04% <br/><small className="text-muted">Apr 2022 – Mar 2023</small></p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="mb-4 text-primary">Technical Skills</h3>
          <div className="mb-3">
            <h6 className="fw-bold">Languages</h6>
            <span className="badge bg-secondary me-2">Python</span>
            <span className="badge bg-secondary me-2">SQL</span>
            <span className="badge bg-secondary me-2">C++</span>
            <span className="badge bg-secondary me-2">JavaScript</span>
          </div>
          <div className="mb-3">
            <h6 className="fw-bold">Data Science & AI</h6>
            <span className="badge bg-info text-dark me-2">Pandas</span>
            <span className="badge bg-info text-dark me-2">Scikit-Learn</span>
            <span className="badge bg-info text-dark me-2">TensorFlow</span>
            <span className="badge bg-info text-dark me-2">Power BI</span>
          </div>
          <div className="mb-3">
            <h6 className="fw-bold">Web Development</h6>
            <span className="badge bg-dark me-2">React.js</span>
            <span className="badge bg-dark me-2">Node.js</span>
            <span className="badge bg-dark me-2">Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
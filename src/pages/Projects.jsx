import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Parking Availability System',
      tech: 'React 19, TypeScript, Google Gemini API',
      description: 'Real-time smart parking system with AI-based occupancy insights and predictive analytics.',
      highlights: [
        'Integrated Google Gemini API for AI insights',
        'RBAC-based admin portal with reservations',
        'Visual analytics using Recharts'
      ]
    },
    {
      title: 'AI-Assisted Medical Triage System',
      tech: 'React.js, Node.js, Python, Scikit-learn',
      description: 'Full-stack triage system classifying cases into Routine, Doctor Required, or Emergency.',
      highlights: [
        'Rule-based backend logic for safety',
        'Supervised ML models for urgency prediction',
        'Synthetic data generation for training'
      ]
    },
    {
      title: 'E-commerce Sales Dashboard',
      tech: 'Power BI, Power Query, Excel',
      description: 'Dynamic Power BI dashboard to analyze KPIs, sales trends, and customer behavior.',
      highlights: [
        'Real-time insights into sales performance',
        'Data cleaning via Power Query Editor',
        'Interactive slicers and drill-downs'
      ]
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold text-primary">My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <h6 className="card-subtitle mb-3 text-info">{project.tech}</h6>
                <p className="card-text">{project.description}</p>
                <ul className="small text-muted ps-3">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
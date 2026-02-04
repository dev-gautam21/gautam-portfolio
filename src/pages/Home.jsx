import React from 'react';
import CardComponent from '../components/CardComponent';

const Home = () => {
  const skills = {
    languages: ['Python', 'SQL', 'C++', 'JavaScript', 'React.js'],
    datascience: ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'Data Preprocessing'],
    tools: ['Power BI', 'Matplotlib', 'Excel', 'Git', 'GitHub'],
    soft: ['Problem Solving', 'Analytical Thinking', 'Adaptability', 'Teamwork', 'Communication']
  };

  const projects = [
    {
      title: 'E-commerce Sales Dashboard Tools',
      tech: 'Power BI, Power Query, Microsoft Excel',
      description: 'Developed a dynamic Power BI dashboard to analyze KPIs for an e-commerce business.',
      highlights: [
        'Power BI provides real-time insights into sales, customer behavior, product performance, and website traffic',
        'Power Query Editor for data cleaning and transformation with slicers and drill-through pages',
        'Key objectives included identifying sales trends, top-selling products, customer demographics, and return rates'
      ]
    },
    {
      title: 'AI-Assisted Medical Triage System',
      tech: 'React.js, Node.js, Express.js, Python, Pandas, Scikit-learn',
      description: 'Built a full-stack medical triage system to classify cases into Routine, Doctor Required, and Emergency.',
      highlights: [
        'Built a full-stack medical triage system to classify cases into Routine, Doctor Required, and Emergency categories',
        'Implemented rule-based backend logic for customizable and safety-focused urgency classification',
        'Created a custom dataset using real system interactions and synthetic data generation',
        'Trained and evaluated supervised ML models to predict urgency levels and compare with rule-based results'
      ]
    },
    {
      title: 'Smart Parking Availability System',
      tech: 'React 19, TypeScript, Google Gemini API, Tailwind CSS, LocalStorage API, Lucide-React',
      description: 'Built a real-time smart parking system with AI-based occupancy insights and busy predictions.',
      highlights: [
        'Integrated Google Gemini API for AI-based occupancy insights and busy predictions',
        'Designed an RBAC-based admin and facility portal with time-gated parking reservations',
        'Implemented instant UI notifications, data persistence, and visual analytics using Recharts'
      ]
    }
  ];

  const education = [
    {
      school: 'Chandigarh University, Punjab',
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      gpa: 'CGPA: 7.9',
      period: 'Aug 2023 – Present'
    },
    {
      school: 'Sacred Heart Convent School, Ludhiana',
      degree: 'Senior Secondary (Non-Medical)',
      gpa: '84.04%',
      period: 'Apr 2022 – Mar 2023'
    }
  ];

  const achievements = [
    '🏀 State-level Basketball Player; selected for National-level basketball team',
    '🏆 Secured 3rd place in AI WARS Hackathon',
    '📊 Achieved 97.09 percentile in JEE Mains',
    '💻 Ranked 9th in Coding Ninjas Scholarship Test'
  ];

  return (
    <main className="home">
      {/* About Section */}
      <section className="about section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p>
              I'm a Computer Science & AI/ML undergraduate with strong foundations in Python, SQL, Machine Learning, and Data Analysis. 
              I'm experienced in building practical, data-driven projects using Pandas, NumPy, Scikit-Learn, TensorFlow, and Power BI. 
            </p>
            <p>
              Quick learner with a problem-solving mindset and hands-on project experience in ML model development, data preprocessing, 
              and visualization. Seeking internship or entry-level roles in AI/ML, Data Analytics, or Software Development.
            </p>
          </div>

          <div className="education">
            <h3>Education</h3>
            {education.map((edu, index) => (
              <CardComponent key={index} className="education-card">
                <h4>{edu.school}</h4>
                <p className="degree">{edu.degree}</p>
                <p className="gpa">{edu.gpa}</p>
                <p className="period">{edu.period}</p>
              </CardComponent>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills section" id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-grid">
            <CardComponent 
              title="Programming Languages"
              icon="💻"
              className="skill-card"
            >
              <div className="skill-list">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </CardComponent>

            <CardComponent 
              title="Data Science & ML"
              icon="🤖"
              className="skill-card"
            >
              <div className="skill-list">
                {skills.datascience.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </CardComponent>

            <CardComponent 
              title="Tools & Platforms"
              icon="🛠️"
              className="skill-card"
            >
              <div className="skill-list">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </CardComponent>

            <CardComponent 
              title="Soft Skills"
              icon="🎯"
              className="skill-card"
            >
              <div className="skill-list">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="skill-badge">{skill}</span>
                ))}
              </div>
            </CardComponent>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects section" id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <CardComponent 
                key={index}
                title={project.title}
                className="project-card"
              >
                <p className="project-tech">
                  <strong>Technology:</strong> {project.tech}
                </p>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </CardComponent>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements section" id="achievements">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <CardComponent 
                key={index}
                content={achievement}
                className="achievement-card"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

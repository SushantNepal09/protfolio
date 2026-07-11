import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <h3>Using Now:</h3>
            <div className="skills-grid">
              <div className="skill-item"><span>HTML5</span></div>
              <div className="skill-item"><span>CSS3</span></div>
              <div className="skill-item"><span>JavaScript</span></div>
              <div className="skill-item"><span>React</span></div>
              <div className="skill-item"><span>Node.js</span></div>
              <div className="skill-item"><span>Express</span></div>
              <div className="skill-item"><span>MongoDB</span></div>
              <div className="skill-item"><span>Git</span></div>
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Learning:</h3>
            <div className="skills-grid">
              <div className="skill-item"><span>Flutter</span></div>
              <div className="skill-item"><span>FastAPI</span></div>
              <div className="skill-item"><span>Supabase</span></div>
              <div className="skill-item"><span>TypeScript</span></div>
            </div>
          </div>
          
          <div className="skills-category">
            <h3>Other Skills:</h3>
            <div className="skills-grid">
              <div className="skill-item"><span>Figma</span></div>
              <div className="skill-item"><span>Render</span></div>
              <div className="skill-item"><span>English B2</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

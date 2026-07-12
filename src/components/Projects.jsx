import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'DISASTER360',
    category: 'FLUTTER, FASTAPI, POSTGRESQL, RENDER',
    index: '01/03',
    image: '/disaster360.png',
    desc: 'Disaster360 is a disaster management platform for reporting incidents and coordinating emergency response. It connects citizens, rescue teams, and administrators in real time.'
  },
  {
    title: 'PLUS-2',
    category: 'NESTJS, RENDER',
    index: '02/03',
    image: 'https://via.placeholder.com/800x600/444444/FFFFFF?text=PLUS-2',
    desc: 'Plus2 is an AI-powered college recommendation platform project to help +2 graduates discover personalized college options while simplifying access to admissions, scholarships, programs, and career guidance.'
  },
  {
    title: 'COLLEGE SYSTEM',
    category: 'FLUTTER',
    index: '03/03',
    image: 'https://via.placeholder.com/800x600/555555/FFFFFF?text=COLLEGE+SYSTEM',
    desc: 'COMPREHENSIVE MANAGEMENT SOLUTION BUILT EXCLUSIVELY WITH FLUTTER.'
  }
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      {projects.map((project, i) => (
        <section key={i} className="project-brutalist">
          <motion.div 
            className="project-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="mono-text project-index">{project.index}</p>
            <h2 className="display-text project-title">{project.title}</h2>
            <p className="mono-text project-category">{project.category}</p>
            
            <p className="project-desc">{project.desc}</p>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default Projects;

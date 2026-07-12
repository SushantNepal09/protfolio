import React from 'react';
import { motion } from 'framer-motion';
import './TechStack.css';

const stackItems = [
  { 
    link: '#', 
    text: 'FLUTTER', 
    image: 'https://skillicons.dev/icons?i=flutter'
  },
  { 
    link: '#', 
    text: 'FASTAPI', 
    image: 'https://skillicons.dev/icons?i=fastapi'
  },
  { 
    link: '#', 
    text: 'NESTJS', 
    image: 'https://skillicons.dev/icons?i=nestjs'
  },
  { 
    link: '#', 
    text: 'SUPABASE', 
    image: 'https://skillicons.dev/icons?i=supabase'
  },
  { 
    link: '#', 
    text: 'PYTHON', 
    image: 'https://skillicons.dev/icons?i=python'
  },
  { 
    link: '#', 
    text: 'GITHUB', 
    image: 'https://skillicons.dev/icons?i=github'
  },
  { 
    link: '#', 
    text: 'RENDER', 
    image: 'https://img.shields.io/badge/Render-Black.svg?style=for-the-badge&logo=render&logoColor=white'
  },
  { 
    link: '#', 
    text: 'POSTGRES', 
    image: 'https://skillicons.dev/icons?i=postgres'
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack-section">
      <motion.h2 
        className="section-title text-outline text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '50px' }}
      >
        TECH STACK
      </motion.h2>
      
      <div className="tech-grid">
        {stackItems.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="tech-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.text} className="tech-icon" />
            <span className="tech-name mono-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

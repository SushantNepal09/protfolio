import React from 'react';
import { motion } from 'framer-motion';
import FlowingMenu from './FlowingMenu';
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
    text: 'GITHUB', 
    image: 'https://skillicons.dev/icons?i=github'
  },
  { 
    link: '#', 
    text: 'RENDER', 
    image: 'https://img.shields.io/badge/Render-Black.svg?style=for-the-badge&logo=render&logoColor=white'
  },
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack-section">
      <motion.h2 
        className="section-title text-outline text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '50px' }}
      >
        TECH STACK
      </motion.h2>
      
      <motion.div 
        className="flowing-menu-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <FlowingMenu 
          items={stackItems} 
          speed={15}
          textColor="#E0E0E0"
          bgColor="#121212"
          marqueeBgColor="#FFFFFF"
          marqueeTextColor="#121212"
          borderColor="#333333"
        />
      </motion.div>
    </section>
  );
};

export default TechStack;

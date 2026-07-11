import React from 'react';
import { motion } from 'framer-motion';
import FlowingMenu from './FlowingMenu';
import './TechStack.css';

const stackItems = [
  { 
    link: '#', 
    text: 'FLUTTER', 
    image: 'https://skillicons.dev/icons?i=flutter',
    color: '#02569B',
    itemTextColor: '#FFFFFF'
  },
  { 
    link: '#', 
    text: 'FASTAPI', 
    image: 'https://skillicons.dev/icons?i=fastapi',
    color: '#009688',
    itemTextColor: '#FFFFFF'
  },
  { 
    link: '#', 
    text: 'NESTJS', 
    image: 'https://skillicons.dev/icons?i=nestjs',
    color: '#E0234E',
    itemTextColor: '#FFFFFF'
  },
  { 
    link: '#', 
    text: 'SUPABASE', 
    image: 'https://skillicons.dev/icons?i=supabase',
    color: '#3ECF8E',
    itemTextColor: '#121212'
  },
  { 
    link: '#', 
    text: 'GITHUB', 
    image: 'https://skillicons.dev/icons?i=github',
    color: '#181717',
    itemTextColor: '#FFFFFF'
  },
  { 
    link: '#', 
    text: 'RENDER', 
    image: 'https://img.shields.io/badge/Render-%2346E3B7.svg?style=for-the-badge&logo=render&logoColor=white',
    color: '#46E3B7',
    itemTextColor: '#121212'
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
          marqueeBgColor="#ff3e00"
          marqueeTextColor="#121212"
          borderColor="#333333"
        />
      </motion.div>
    </section>
  );
};

export default TechStack;

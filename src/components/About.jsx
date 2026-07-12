import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-brutalist">
      <motion.div 
        className="about-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title text-outline">ABOUT ME</h2>
      </motion.div>
      
      <motion.div 
        className="about-content-brutalist"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="about-text-small mono-text">
          I'm Sushant Nepal, a software developer passionate about building modern web and mobile applications that solve real-world problems. I specialize in backend development with FastAPI and NestJS, cross-platform mobile development with Flutter, and database design using PostgreSQL and Supabase.
        </p>
        <p className="about-text-small mono-text">
          I enjoy creating scalable APIs, integrating AI into applications, and designing clean, user-friendly experiences. Whether it's developing disaster management platforms, AI-powered systems, or full-stack applications, I focus on writing maintainable code and building reliable software that makes an impact.
        </p>
        <p className="about-text-small mono-text">
          I'm always eager to learn new technologies, improve my skills, and take on challenging projects that help me grow as a developer.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import Galaxy from './Galaxy';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { y: 100, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

const Hero = () => {
  return (
    <section id="home" className="hero-brutalist">
      <div className="galaxy-background">
        <Galaxy 
          transparent={true}
          mouseInteraction={true}
          density={1.5}
          speed={0.3}
          starSpeed={0.2}
        />
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={itemVariants} className="mono-text text-center">
          I AM SUSHANT AND I BUILD
        </motion.p>
        <motion.h1 className="display-text text-center" style={{ overflow: 'hidden', fontSize: '6vw' }}>
          <motion.span variants={itemVariants} className="text-block">BACKEND WITH FASTAPI</motion.span>
          <motion.span variants={itemVariants} className="text-block">& FRONTEND MOBILE</motion.span>
          <motion.span variants={itemVariants} className="text-block">APPLICATIONS</motion.span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;

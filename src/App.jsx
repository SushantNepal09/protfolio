import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialAvatarGroup from './components/SocialAvatarGroup';
import TechStack from './components/TechStack';
import StaggeredMenu from './components/StaggeredMenu';
import TrailCursor from './components/TrailCursor';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-container">
      <TrailCursor />
      <StaggeredMenu
        isFixed={true}
        items={[
          { label: 'WORKS', ariaLabel: 'Go to Projects section', link: '#projects' },
          { label: 'STACK', ariaLabel: 'Go to Tech Stack section', link: '#tech-stack' },
          { label: 'ABOUT', ariaLabel: 'Go to About section', link: '#about' },
          { label: 'CONTACT', ariaLabel: 'Go to Contact section', link: '#contact' },
        ]}
        socialItems={[
          { label: 'GitHub', link: 'https://github.com/sushantnepal09', icon: <FaGithub /> },
          { label: 'LinkedIn', link: 'https://www.linkedin.com/in/sushant-nepal-3579b4352', icon: <FaLinkedin /> },
          { label: 'Email', link: 'mailto:sushant.nepaloc218@gmail.com', icon: <FaEnvelope /> },
        ]}
      />
      {/* Fixed Corners Overlay */}
      <div className="fixed-layout">
        
        <div className="fixed-location mono-text">
          <span>KATHMANDU</span>
          <span>{time}</span>
        </div>
      </div>

      {/* Scrollable Content */}
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;

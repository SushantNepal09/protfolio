import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialAvatarGroup from './components/SocialAvatarGroup';

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
      {/* Fixed Corners Overlay */}
      <div className="fixed-layout">
        <a href="#home" className="fixed-logo">SUSHANT</a>
        
        <nav className="fixed-nav">
          <a href="#projects">WORKS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
        
        <div className="fixed-location mono-text">
          <span>KATHMANDU</span>
          <span>{time}</span>
        </div>
        
        <div className="fixed-socials">
          <SocialAvatarGroup />
        </div>
      </div>

      {/* Scrollable Content */}
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;

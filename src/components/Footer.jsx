import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1A1A1A',
      color: '#FFFFFF',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <a href="#home" style={{ color: '#FFF', textDecoration: 'none', fontWeight: '900', letterSpacing: '2px', fontFamily: 'var(--font-heading)' }}>
          BACK TO TOP
        </a>
        
        <div style={{ display: 'flex', gap: '20px', margin: '20px 0' }}>
          <a href="#" style={{ color: '#FFF', fontSize: '1.5rem', transition: 'var(--transition)' }}><FaGithub /></a>
          <a href="#" style={{ color: '#FFF', fontSize: '1.5rem', transition: 'var(--transition)' }}><FaLinkedin /></a>
          <a href="#" style={{ color: '#FFF', fontSize: '1.5rem', transition: 'var(--transition)' }}><FaEnvelope /></a>
        </div>
        
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', letterSpacing: '1px' }}>
          @2026 Sushant Nepal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

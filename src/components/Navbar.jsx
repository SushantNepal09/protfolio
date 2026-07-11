import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li onClick={() => scrollTo('about')}>About me</li>
          <li onClick={() => scrollTo('skills')}>Skills</li>
          <li onClick={() => scrollTo('projects')}>Portfolio</li>
          <li onClick={() => scrollTo('contact')} className="nav-contact-btn">Contact me</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

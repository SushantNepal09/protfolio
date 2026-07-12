import React from 'react';
import { FiMapPin, FiGlobe, FiClock } from 'react-icons/fi';
import BorderGlow from './BorderGlow';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <BorderGlow
      className="profile-card"
      edgeSensitivity={30}
      glowColor="20 100 50"
      backgroundColor="#120F17"
      borderRadius={24}
      glowRadius={40}
      glowIntensity={1.0}
      coneSpread={25}
      animated={true}
      colors={['#ff5722', '#ff9800', '#ffeb3b']}
    >
      <div className="profile-header">
        <img 
          src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=800&auto=format&fit=crop" 
          alt="Abstract Header" 
          className="profile-cover"
        />
        <div className="profile-avatar-wrapper">
          <img 
            src="https://github.com/SushantNepal09.png" 
            alt="Sushant Nepal" 
            className="profile-avatar"
          />
        </div>
      </div>

      <div className="profile-info">
        <h3 className="profile-name">Sushant Nepal</h3>
        <p className="profile-handle">@sushant</p>
        
        <p className="profile-bio mono-text">
          Passionate about creating intuitive, aesthetic digital products that solve real problems.
        </p>

        <div className="profile-badges mono-text">
          <div className="profile-badge blue-badge">
            <FiMapPin className="badge-icon" />
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="profile-badge green-badge">
            <FiGlobe className="badge-icon" />
            <span>example.com</span>
          </div>
          <div className="profile-badge purple-badge">
            <FiClock className="badge-icon" />
            <span>Joined 25 Jun 2025</span>
          </div>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-box">
          <span className="stat-label mono-text">Experience</span>
          <span className="stat-value">1 year+</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-box">
          <span className="stat-label mono-text">Projects</span>
          <span className="stat-value">4+</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-box">
          <span className="stat-label mono-text">Followers</span>
          <span className="stat-value">100+</span>
        </div>
      </div>
    </BorderGlow>
  );
};

export default ProfileCard;

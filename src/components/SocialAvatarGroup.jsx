import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './SocialAvatarGroup.css';

const socials = [
  { id: 1, icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/SushantNepal09' },
  { id: 2, icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sushant-nepal-3579b4352' },
  { id: 3, icon: <FaEnvelope />, label: 'Email', href: 'mailto:sushant.nepaloc218@gmail.com' },
];

const SocialAvatarGroup = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="avatar-group-container">
      {socials.map((social, index) => (
        <a 
          key={social.id} 
          href={social.href}
          className="avatar-item"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{ zIndex: hoveredIndex === index ? 10 : socials.length - index }}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="avatar-tooltip mono-text"
              >
                {social.label}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            className="avatar-circle"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {social.icon}
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export default SocialAvatarGroup;

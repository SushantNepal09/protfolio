import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './TrailCursor.css';

const TrailCursor = ({
  color = "var(--accent-color, #ff5100)",
  size = 10,
  trailLength = 12,
  speed = 0.3,
}) => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    let idCounter = 0;
    
    const handleMouseMove = (e) => {
      // Disable trail cursor on the home/hero page (first 100vh)
      if (window.scrollY < window.innerHeight * 0.9) {
        setTrail(prev => prev.length > 0 ? [] : prev);
        return;
      }

      // Get global window coordinates
      const x = e.clientX;
      const y = e.clientY;

      const point = { id: idCounter++, x, y };
      setTrail((prev) => [...prev.slice(-(trailLength - 1)), point]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [trailLength]);

  return (
    <div className="trail-cursor-container">
      {trail.map((point, i) => {
        const progress = (i + 1) / trail.length;
        return (
          <motion.div
            key={point.id}
            className="trail-cursor-point"
            style={{
              width: size * progress,
              height: size * progress,
              backgroundColor: color,
              left: point.x,
              top: point.y,
              opacity: progress,
              boxShadow: `0 0 ${size * progress}px ${color}`,
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 0, opacity: 0 }}
            transition={{ duration: speed }}
          />
        );
      })}
    </div>
  );
};

export default TrailCursor;

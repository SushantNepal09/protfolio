import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'MESSAGE RECEIVED.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'ERROR.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'FAILED TO CONNECT.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-brutalist">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        LET'S TALK
      </motion.h2>
      
      <motion.div 
        className="contact-form-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="brutalist-form">
          <input 
            type="text" 
            name="name" 
            placeholder="NAME" 
            value={formData.name}
            onChange={handleChange}
            required 
            className="brutalist-input"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="EMAIL" 
            value={formData.email}
            onChange={handleChange}
            required 
            className="brutalist-input"
          />
          <input 
            type="text" 
            name="message" 
            placeholder="MESSAGE" 
            value={formData.message}
            onChange={handleChange}
            required 
            className="brutalist-input"
          />
          
          <button type="submit" className="brutalist-btn" disabled={loading}>
            {loading ? 'SENDING...' : 'SUBMIT'}
          </button>
          
          {status.message && (
            <p className={`status-message mono-text ${status.type}`}>
              {status.message}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;

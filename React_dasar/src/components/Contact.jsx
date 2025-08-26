import React from 'react';
import './Contact.css'; 
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
         Feel free to ask anything related to me, my projects, or other things.
        </p>
         <a href="https://wa.me/6283811054245" target="_blank" rel="noopener noreferrer" className="contact-email-button">
          Contact via WhatsApp
        </a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/azka-julian-putra-wahyudi/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={28} /></a>
          <a href="https://github.com/DeatWalls-Azka" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} /></a>
          <a href="https://instagram.com/azkajputra" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={28} />
          </a></div>
      </div>
    </section>
  );
};

export default Contact;
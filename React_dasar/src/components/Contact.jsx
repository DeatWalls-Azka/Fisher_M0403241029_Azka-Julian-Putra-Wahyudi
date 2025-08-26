import React, { useState, useEffect, useRef } from 'react';
import './Contact.css'; 
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className={`contact-container ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Feel free to ask anything related to me, my projects, or other things.
        </p>
        <a href="https://wa.me/6283811054245" target="_blank" rel="noopener noreferrer" className="contact-email-button">
          Contact via WhatsApp
        </a>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/azka-julian-putra-wahyudi-691440323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/DeatWalls-Azka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://instagram.com/azkajputra" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

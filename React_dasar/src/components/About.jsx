import React, { useState, useEffect, useRef } from 'react';
import './About.css'; 

const About = () => {
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
        observer.unobserve(section.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className={`about-container ${isVisible ? 'is-visible' : ''}`}>
        <div className="about-text-container">
          <h2 className="about-title">Get To Know Me</h2>
          <p className="about-description">
            As a Computer Science student at IPB University, I have a strong interest in understanding how things work—ranging from 
            algorithmic logic and system interactions to how small pieces of code can turn into useful applications.
            This curiosity introduced me to the world of web development and nurtured my passion for building something from scratch.
            Currently, I am focusing on learning full-stack development, 
            mastering both front-end and back-end aspects, and exploring various technologies to create functional and valuable web experiences.
            Outside of coding, I enjoy playing eFootball and chess. Both activities train strategy, precision, and quick decision-making—skills 
            that are also highly valuable when tackling technical challenges in software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

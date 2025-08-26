import React, { useState, useEffect, useRef } from 'react';
import './Skillset.css';

const skills = [
  { alt: 'HTML5 Icon', iconSrc: '/Html.jpg' },
  { alt: 'CSS3 Icon', iconSrc: '/CSS.png' },
  { alt: 'JavaScript Icon', iconSrc: '/Javascript.png' },
  { alt: 'React Icon', iconSrc: '/React.png' },
  { alt: 'Git Icon', iconSrc: '/Git.png' },
  { alt: 'Figma Icon', iconSrc: '/Figma.png' },
];

const Skillset = () => {
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
      { threshold: 0.5 } 
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
    <section id="skillset" className="skillset-section" ref={sectionRef}>
      <div className="skillset-container">
        <h2 className="skillset-title">Skills</h2>
        <div className={`skills-grid ${isVisible ? 'is-visible' : ''}`}>
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <img src={skill.iconSrc} alt={skill.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;
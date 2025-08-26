import React, { useState, useEffect, useRef } from 'react';
import './Skillset.css';


import htmlIcon from '../assets/html.jpg';
import cssIcon from '../assets/css.png';
import javascriptIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import gitIcon from '../assets/git.png';
import figmaIcon from '../assets/figma.png';

const skills = [
  { alt: 'HTML5 Icon', iconSrc: htmlIcon },
  { alt: 'CSS3 Icon', iconSrc: cssIcon },
  { alt: 'JavaScript Icon', iconSrc: javascriptIcon },
  { alt: 'React Icon', iconSrc: reactIcon },
  { alt: 'Git Icon', iconSrc: gitIcon },
  { alt: 'Figma Icon', iconSrc: figmaIcon },
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

import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import ittodayimage from '../assets/ittoday.png';

const projectData = [
  {
    title: 'Website IT Today',
    description: 'The official website for IT Today, a technology event organized by IPB University. It was built to provide event information, registration, and competition details.',
    link: 'https://ittoday.web.id/',
    imageUrl: ittodayimage,
  }
];

const Projects = () => {
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
      { threshold: 0.2 } // Animasi jalan saat 20% section terlihat
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
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <div className={`projects-grid ${isVisible ? 'is-visible' : ''}`}>
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-container">
                <img src={project.imageUrl} alt={`Screenshot dari ${project.title}`} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
                <a href={project.link} className="project-card-link" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

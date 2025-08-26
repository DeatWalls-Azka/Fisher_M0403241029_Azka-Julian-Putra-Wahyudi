import React from 'react';
import './Projects.css';
import itTodayImage from '../assets/ittoday.png';

const projectData = [
  {
    title: 'Website IT Today',
    description: 'The official website for IT Today, a technology event organized by IPB University. It was built to provide event information, registration, and competition details.',
    link: 'https://ittoday.web.id/',
    imageUrl: itTodayImage,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Our Projects</h2>
        <div className="projects-grid">
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

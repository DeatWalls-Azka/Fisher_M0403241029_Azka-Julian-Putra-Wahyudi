import React from 'react';
import './Hero.css';

import fotoprofil from '../assets/me.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <img 
          src={fotoprofil} 
          alt="My Picture" 
          className="hero-profile-picture" 
        />
        
        <h1 className="hero-title">Azka Julian Putra Wahyudi</h1>
        <p className="hero-subtitle">
          IPB University | M0403241029 | Proxy Fisher
        </p>
        <a href="#projects" className="hero-button">
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;

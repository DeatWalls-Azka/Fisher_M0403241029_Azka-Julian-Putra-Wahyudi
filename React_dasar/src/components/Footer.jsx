import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>&copy;  Copyright  {new Date().getFullYear()} - All right reserved by Azka Julian Putra Wahyudi</p>
      </div>
    </footer>
  );
};

export default Footer;
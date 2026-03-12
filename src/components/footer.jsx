// Footer simplified, so only my contact info and banner image

// Not needed to refer to "react" unless explicitly using React 
// (e.g., React.Component or React.createElement)
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div id="footer-container">
      <footer>
        <p>Contact developer by LinkedIn message: <a href="https://linkedin.com/in/meghan-carr-144b369/">LinkedIn</a></p>
        <img src="WSMap_rect_detailed_slider.png" alt="Water Snap & Map banner with pond and wetland plants and animals as origami designs" style={{width: '33%', height: 'auto'}} /> 
      </footer>
    </div>
  );
};

export default Footer;
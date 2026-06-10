import React from 'react';

export default function Footer() {
  // Automatically calculates the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="quick-view-bar">
        <span><i className="fa-solid fa-location-dot"></i> Nairobi, Kenya</span>
        <span><i className="fa-solid fa-code"></i> Focus: Node.js & Spanish</span>
        <span><i className="fa-solid fa-circle-check"></i> Open for Opportunities</span>
      </div>

      <div className="footer-div">
        <p>&copy; {currentYear} Percy Njuguna. All rights reserved.</p>
        
        <div className="footer-div1">
          <div><b>CONNECT:</b></div>
          <div className="footer-social-links">
            <a href="https://github.com/upsilonvibes" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github github"></i>
            </a>
            <a href="https://t.me/upsilon_vibes" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-telegram telegram"></i>
            </a>
            <a href="https://linkedin.com/in/percy-njuguna" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin linkedin"></i>
            </a>
            <a href="mailto:percy.smartanecdote169@email.com">
              <i className="fa-solid fa-envelope email"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img 
          className="logo" 
          src="/images/logo.png" 
          alt="PN - Percy Njuguna Full-Stack Developer Logo"
        />

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a
          href="https://wa.me/254795557525?text=Hi%20Percy,%20I'm%20interested%20in%20your%20web%20development%20services!"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <button className="header-button"><b>LET'S CHAT!</b></button>
        </a>
      </nav>
    </header>
  );
}
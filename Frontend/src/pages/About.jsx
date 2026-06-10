import React from 'react';

function About() {
  return (
    <div id="about" className="about-container">
      
      <section className="about-hero">
        <div className="about-headline-queries">
          <h1 className="about-headline">About Me</h1>
          <div>
            <img 
              className="about-hero-image" 
              src="/images/hero_about.jpg" 
              alt="Percy Njuguna - Upcoming Full-Stack Developer (upsilonvibes)" 
            />
          </div>
        </div>
        
        <div className="about-content">
          <p className="about-content-1">
            <span className="trait-1">Developer</span> | 
            <span className="trait-2">Writer</span> |
            <span className="trait-3">Lifelong Learner</span> |
            <span className="trait-4">Problem Solver</span>
          </p>
          
          <p className="about-content-2">
            I'm <span className="about-name"><b>Percy Njuguna</b></span>, an upcoming tech professional specializing in <span className="about-highlight">Full-Stack Web Development</span>. 
            Whether I'm <span className="about-highlight">deploying scalable code</span>, documenting insights on my <span className="about-highlight">technical blog</span>, or <span className="about-highlight">sharpening my Spanish fluency</span>, I'm driven by building impactful solutions.<br />
            <a href="#contact"><span className="about-cta">Let's create something impactful.</span></a>
          </p>
          
          <div className="education-box">
            <h3>Professional Foundation</h3>
            <ul>
              <li>
                <i className="fa-solid fa-microchip"></i> 
                <strong>Starehe TTI</strong> — Technical Training Program (2026)
                <p className="edu-subtext">Intensive specialized curriculum focusing on full-stack logic, systems architecture, and backend engineering workflows.</p>
              </li>
              <li>
                <i className="fa-solid fa-graduation-cap"></i> 
                <strong>Starehe Boys' Centre</strong> — KCSE Graduate
              </li>
              <li>
                <i className="fa-solid fa-earth-americas"></i> 
                <strong>Global Readiness</strong> — Intensive Spanish Immersion (Targeting DELE/SIELE B2 Fluency)
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="story-div" />
        <div>
          <h1 className="story-title">My Story</h1>
        </div>
        <div className="story-div-p">
          <p className="story-p">
            My journey into technology began with a simple curiosity about how
            software actually works. Without a guide, I started the only way I knew how: manually typing lines of code into <b>Notepad</b> and hoping for the best.
          </p>
          <p className="story-p">
            Those early days were full of red error messages and frustration. At one point, I truly believed that programming was a world I wasn't meant to enter. However, transitioning to <b>VS Code</b> and mastering terminal workflows changed everything. It taught me that software engineering isn't about immediate perfection; it's about having the patience to break down and solve one complex logic puzzle at a time.
          </p>
          <p className="story-p">
            This mindset of consistent, iterative growth is also what led me to start my <b>Spanish learning journey</b>.
            Whether I am mastering asynchronous <b>JavaScript</b> parameters or preparing for international language proficiency exams, I've learned that fluency—in both code and language—requires showing up even when the learning curve is steep. <br />
            I move forward with a unified philosophy: <span className="story-philosophy"><b>"Paso a paso, se llega lejos"</b> <i>(Step by step, one goes far)</i></span>.
          </p>
        </div>
      </section>

      <section className="about-tech">
        <h2 className="tech-title">Tech Stack Visualizer</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <h3><i className="fa-solid fa-code"></i> Frontend</h3>
            <div className="icons">
              <i className="fa-brands fa-html5" title="HTML5"></i>
              <i className="fa-brands fa-css3-alt" title="CSS3"></i>
              <i className="fa-brands fa-js" title="JavaScript (ES6+)"></i>
              <i className="fa-brands fa-react" title="React.js"></i>
            </div>
          </div>
          <div className="tech-card">
            <h3><i className="fa-solid fa-server"></i> Backend</h3>
            <div className="icons">
              <i className="fa-brands fa-node-js" title="Node.js"></i>
              <i className="fa-solid fa-bolt" title="Vite Build Tool"></i>
              <i className="fa-solid fa-database" title="SQL Databases & API Routing"></i>
            </div>
          </div>
          <div className="tech-card">
            <h3><i className="fa-solid fa-tools"></i> Architecture</h3>
            <div className="icons">
              <i className="fa-brands fa-github" title="GitHub System Control"></i>
              <i className="fa-solid fa-terminal" title="Windows System CMD / Git"></i>
              <i className="fa-solid fa-code-branch" title="VS Code Environment"></i>
            </div>
          </div>
        </div>

        <div className="about-next">
          <h2 className="next-title">What's Next?</h2>
          <p className="next-p">
            See my application architecture live on my <a href="#projects"><span className="next-link">Projects Page</span></a> or read my latest technical logs on my <a href="#blog"><span className="next-link">Blog.</span></a>
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;
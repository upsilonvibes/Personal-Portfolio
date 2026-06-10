import React from 'react';

function Blog() {
  return (
    <div id="blog" className="blog-container">
      
      <section className="blog-header">
        <h1 className="next-title">Technical Journal</h1>
        <h2 className="projects-subtitle">Diario de Aprendizaje</h2> 
        <p className="next-p">
          Documenting my transition from HTML/CSS to JavaScript mastery and my journey toward Spanish B2 proficiency.
        </p>
      </section>

      <div className="blog-filter">
        <button className="filter-btn active">All Posts</button>
        <button className="filter-btn">#CodeLogs</button>
        <button className="filter-btn">#SpanishJourney</button>
      </div>

      <section className="blog-list">
        {/* Blog Post 1: Code Logs */}
        <article className="blog-card">
          <div className="blog-date">May 07, 2026</div>
          <div className="blog-content">
            <span className="blog-status-badge">#CodeLogs</span>
            <h3 className="blog-post-title">Mastering CSS Grid for Portfolio Case Studies</h3>
            <p className="project-text">
              Today I refactored the Projects page to use a 2x2 grid system. Handling responsive layouts 
              without Media Queries by using <code>auto-fit</code> was a game changer...
            </p>
            <a href="blog-post-grid.html" className="next-link">Read More →</a>
          </div>
        </article>

        {/* Blog Post 2: Spanish Journey */}
        <article className="blog-card">
          <div className="blog-date">May 04, 2026</div>
          <div className="blog-content">
            <span className="blog-status-badge">#SpanishJourney</span>
            <h3 className="blog-post-title">Mi Progreso con "Dreaming Spanish"</h3>
            <p className="project-text">
              Estoy practicando mi comprensión auditiva. El objetivo es alcanzar el nivel A2 antes de 
              agosto para mi cumpleaños de 18 años...
            </p>
            <a href="blog-post-spanish.html" className="next-link">Read More →</a>
          </div>
        </article>
      </section>

    </div>
  );
}

export default Blog;
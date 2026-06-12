import React, { useState } from 'react';
import { blogData } from '../data/blogData';

function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedPostId, setExpandedPostId] = useState(null);

  // Automatically extract unique categories dynamically, adding 'All' at the start
  const categories = ['All', ...new Set(blogData.map(post => post.category.replace('#', '')))];

  // Filter posts based on active button tracking state
  const filteredPosts = activeCategory === 'All' 
    ? blogData 
    : blogData.filter(post => post.category.toLowerCase().includes(activeCategory.toLowerCase()));

  // Find the complete data object for the post currently being read
  const currentFullPost = blogData.find(post => post.id === expandedPostId);

  {/* ==========================================
       VIEW LAYER A: FULL POST READING VIEW 
      ========================================== */}
  if (expandedPostId && currentFullPost) {
    return (
      <div id="blog" className="blog-container">
        <button className="filter-btn back-btn" onClick={() => setExpandedPostId(null)}>
          &larr; Back to Journal
        </button>
        
        <article className="full-blog-post">
          <div className="blog-date">{currentFullPost.date}</div>
          <span className="blog-status-badge">{currentFullPost.category}</span>
          <h2 className="next-title full-post-heading">{currentFullPost.title}</h2>
          <p className="project-text full-post-content">
            {currentFullPost.content}
          </p>
        </article>
      </div>
    );
  }

  {/* ==========================================
       VIEW LAYER B: MAIN STREAM FEED VIEW 
      ========================================== */}
  return (
    <div id="blog" className="blog-container">
      
      <section className="blog-header">
        <h1 className="next-title">Technical Journal</h1>
        <h2 className="projects-subtitle">Diario de Aprendizaje</h2> 
        <p className="next-p">
          Documenting my journey through full-stack web engineering, language immersion, and creative discipline.
        </p>
      </section>

      {/* Dynamic Filter Buttons Mapping Matrix */}
      <div className="blog-filter">
        {categories.map((cat) => (
          <button 
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === 'All' ? 'All Posts' : `#${cat}`}
          </button>
        ))}
      </div>

      {/* Rendered Dynamic Blog Stream Feed */}
      <section className="blog-list">
        {filteredPosts.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-date">{post.date}</div>
            <div className="blog-content">
              <span className="blog-status-badge">{post.category}</span>
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="project-text">{post.preview}</p>
              
              {/* Reset interactive trigger link with semantic class markers */}
              <button 
                className="next-link blog-read-more-trigger" 
                onClick={() => setExpandedPostId(post.id)}
              >
                Read More &rarr;
              </button>
            </div>
          </article>
        ))}
      </section>

    </div>
  );
}

export default Blog;
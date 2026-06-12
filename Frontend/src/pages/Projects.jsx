import React, { useState, useEffect } from 'react';

function Projects() {
  // State for storing repositories metadata (stars, forks, repo URLs) fetched from GitHub API
  const [liveMetrics, setLiveMetrics] = useState({});
  // State for keeping track of the currently active project index in the slider component
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Fully Curated Structural Blueprint Dataset
  const structuralData = [
    {
      id: 1,
      repoName: "Starehe-Admissions-Portal",
      title: "Starehe Admissions Portal",
      status: "In Progress",
      envType: "cloud",
      imageConfig: {
        src: "/images/starehe_project.png", 
        isTransparent: true // Triggers centering containment framework via CSS classes
      },
      techIcons: [
        <i className="fa-brands fa-react" title="React.js Engine" key="r"></i>,
        <i className="fa-brands fa-node-js" title="Node.js Services" key="n"></i>,
        <i className="fa-solid fa-database" title="MongoDB Architecture" key="d"></i>
      ],
      challenge: "Optimizing multi-stream institutional pathway rankings while implementing secure, client-side input checkpoints.",
      solution: "Engineered strict frontend conditional logic matrices combined with an integrated real-time password strength validation engine.",
      fallbackDemo: "https://starehe-admissions-portal.onrender.com"
    },
    {
      id: 2,
      repoName: "Git-Searcher-App",
      title: "Git Searcher Application",
      status: "Completed",
      envType: "cloud",
      imageConfig: {
        src: null, 
        isTransparent: false
      },
      techIcons: [
        <i className="fa-brands fa-react" title="React.js" key="r"></i>,
        <i className="fa-solid fa-bolt" title="Vite Environment" key="v"></i>,
        <i className="fa-solid fa-cloud-arrow-down" title="GitHub REST API" key="a"></i>
      ],
      challenge: "Processing, transforming, and mapping deeply nested external JSON metrics without blocking standard UI paint loops.",
      solution: "Implemented asynchronous hooks coupled with state variables to parse profile data, repos, and live star tallies on demand.",
      fallbackDemo: "https://git-searcher-app.vercel.app"
    },
    {
      id: 3,
      repoName: "Products-Page",
      title: "Dynamic E-Commerce Engine",
      status: "In Transformation",
      envType: "local",
      imageConfig: {
        src: null, // Triggers immediate structural fallback image layer execution
        isTransparent: false
      },
      techIcons: [
        <i className="fa-brands fa-react" title="React Context" key="r"></i>,
        <i className="fa-solid fa-cart-shopping" title="Stateful Shopping Cart" key="c"></i>
      ],
      challenge: "Transitioning from static product displays to a fully operational frontend store with active data fetching and mathematical state tracking.",
      solution: "Designing an application mapping live items from commercial testing endpoints while orchestrating a centralized shopping cart engine.",
      fallbackDemo: null
    },
    {
      id: 4,
      repoName: "Task-Manager",
      title: "State-Persistent Task Matrix",
      status: "Completed",
      envType: "local",
      imageConfig: {
        src: null, 
        isTransparent: false
      },
      techIcons: [
        <i className="fa-brands fa-js" title="JavaScript Engine" key="j"></i>,
        <i className="fa-solid fa-box-archive" title="Browser LocalStorage Caching" key="l"></i>
      ],
      challenge: "Managing persistent application state records across browser refresh states without deploying a permanent database stack.",
      solution: "Engineered structural CRUD operations parsing state values directly into localized browser caches (LocalStorage arrays).",
      fallbackDemo: null
    },
    {
      id: 5,
      repoName: "Poke-Searcher",
      title: "Poké-Searcher Application",
      status: "Completed",
      envType: "local",
      imageConfig: {
        src: null, 
        isTransparent: false
      },
      techIcons: [
        <i className="fa-brands fa-react" title="React Lifecycle" key="r"></i>,
        <i className="fa-solid fa-rotate" title="Asynchronous Effect Management" key="s"></i>
      ],
      challenge: "Preventing side-effect data synchronization collisions and multi-fetch bugs during heavy navigation triggers.",
      solution: "Utilized strict React useEffect execution flags to bind component lifecycles cleanly to running PokéAPI metrics.",
      fallbackDemo: null
    }
  ];

  // 2. Fetch Live GitHub Metrics in a background thread to keep elements reactive
  useEffect(() => {
    fetch('https://api.github.com/users/upsilonvibes/repos')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Normalize the flat data array into a key-value look-up map grouped by repository name
          const metricsMap = data.reduce((acc, repo) => {
            acc[repo.name] = {
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              codeUrl: repo.html_url,
              liveUrl: repo.homepage || null
            };
            return acc;
          }, {});
          setLiveMetrics(metricsMap);
        }
      })
      .catch((err) => console.error("GitHub API Pipeline Exception:", err));
  }, []);

  // 3. Automated slider loop execution tracker (Interval refreshes every 5 seconds)
  useEffect(() => {
    const autoScrollTimer = setInterval(() => {
      setCurrentIndex((prev) => (prev === structuralData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(autoScrollTimer);
  }, [structuralData.length]);

  // Handle click navigation to view the previous project card
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? structuralData.length - 1 : prev - 1));
  };

  // Handle click navigation to view the next project card
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === structuralData.length - 1 ? 0 : prev + 1));
  };

  // Current scope operational data objects definitions
  const activeProject = structuralData[currentIndex];
  const apiData = liveMetrics[activeProject.repoName] || {};
  const finalStars = apiData.stars !== undefined ? apiData.stars : 0;
  const finalForks = apiData.forks !== undefined ? apiData.forks : 0;
  
  const repoExists = liveMetrics[activeProject.repoName] !== undefined;
  const finalCodeLink = repoExists ? apiData.codeUrl : `https://github.com/upsilonvibes/${activeProject.repoName}`;
  const finalDemoLink = apiData.liveUrl || activeProject.fallbackDemo;

  return (
    <div id="projects" className="project-container">
      <section className="project-hero">
        <h1 className="next-title">Featured Case Studies</h1>
        <h2 className="projects-subtitle">Premium System Implementations</h2>
        
        <div className="moviebox-slider">
          {/* Previous Slide Button Link */}
          <button className="slider-arrow prev-btn" onClick={handlePrev} aria-label="Previous">
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Core Slider Active Content Frame Container */}
          <div className="project-card active-slide">
            <div className="project-header">
              {/* Operational Project Lifecycle Badge */}
              <span className={`project-status-badge ${activeProject.status.toLowerCase().replace(/ /g, "-")}`}>
                {activeProject.status}
              </span>
              
              {/* Dynamic Presentation Framing Wrapper — Applies structural centering padding via transparent-bg class conditional rules */}
              <div className={`project-movie-backdrop ${activeProject.imageConfig.src && activeProject.imageConfig.isTransparent ? 'transparent-bg' : 'bleed-bg'}`}>
                {activeProject.imageConfig.src ? (
                  <img 
                    src={activeProject.imageConfig.src} 
                    alt={`${activeProject.title} Branding Matrix`} 
                    // Conditional class mapping ensures layout sizes stay separated out inside your CSS file
                    className={activeProject.imageConfig.isTransparent ? 'transparent-icon' : 'full-bleed-backdrop'}
                    onError={(e) => {
                      // Runtime fallback failsafe execution thread block
                      e.target.onerror = null;
                      e.target.src = "/images/fallback_image.jfif";
                      e.target.className = "full-bleed-backdrop";
                      e.target.parentNode.className = "project-movie-backdrop bleed-bg";
                    }}
                  />
                ) : (
                  /* Static presentation asset loop block fallback for projects when image src is undefined/null */
                  <img 
                    src="/images/fallback_image.jfif" 
                    alt="System Workspace Preview" 
                    className="full-bleed-backdrop"
                    onError={(e) => {
                      // Ultimate rendering protection layer block
                      e.target.style.display = 'none'; // Keeps hidden formatting rule as an element status safety flag
                      e.target.parentNode.innerHTML = `<div class="fallback-icon-frame"><i class="fa-solid fa-terminal"></i></div>`;
                    }}
                  />
                )}
              </div>
            </div> {/* End of project-header */}
            
            {/* Project Copywrite Context and Links Presentation Layer */}
            <div className="project-content">
              <h3 className="project-title">{activeProject.title}</h3>
              <div className="project-tech">{activeProject.techIcons}</div>
              <p className="project-text"><strong>The Core Challenge:</strong> {activeProject.challenge}</p>
              <p className="project-text"><strong>Architectural Solution:</strong> {activeProject.solution}</p>

              {/* GitHub Star Data Metrics Bar Layout Grid */}
              <div className="project-metrics-bar">
                <span><i className="fa-regular fa-star"></i> {finalStars} Stars</span>
                <span><i className="fa-solid fa-code-fork"></i> {finalForks} Forks</span>
              </div>
              
              {/* Navigation Action Buttons Core Layout Grid */}
              <div className="project-links">
                <a href={finalCodeLink} className="next-link" target="_blank" rel="noopener noreferrer">
                  Code Base <i className="fa-brands fa-github"></i>
                </a>
                
                {activeProject.envType === "cloud" && finalDemoLink ? (
                  <a href={finalDemoLink} className="next-link" target="_blank" rel="noopener noreferrer">
                    Live Engine <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                ) : (
                  <span className="next-link-disabled" title="Local System Core / CLI Sandbox">
                    Local Env <i className="fa-solid fa-lock"></i>
                  </span>
                )}
              </div>
            </div> {/* End of project-content */}
          </div> {/* End of project-card */}

          {/* Next Slide Button Link */}
          <button className="slider-arrow next-btn" onClick={handleNext} aria-label="Next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Dynamic Project Index Navigation Indicator Dot Row */}
        <div className="slider-dots">
          {structuralData.map((_, idx) => (
            <span 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active-dot' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </section>

      {/* Main Github Call To Action Profile Footer Panel */}
      <div className="github-cta-container">
        <p className="next-p">In quest for more surprises? Explore the full raw ecosystem index on GitHub.</p>
        <a href="https://github.com/upsilonvibes" target="_blank" rel="noopener noreferrer" className="github-main-btn">
          <i className="fa-brands fa-github"></i> EXPLORE ALL PROJECTS
        </a>
      </div>
    </div>
  );
}

export default Projects;
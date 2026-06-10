import './App.css';
import { useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

// Page layout components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  useEffect(() => { // 1. Component Sentinel
    const modules = document.querySelectorAll(".index-container, .about-container, .service-container, .project-container, .blog-container, .contact-container");
    const navLinks = document.querySelectorAll(".nav-links a");

    const handleScroll = () => {
      let current = ""; 
      
      // Calculates boundaries with a 150px offset for precise active-state timing
      modules.forEach((module) => {
        const moduleTop = module.offsetTop - 150;
        if (window.scrollY >= moduleTop) {
          current = module.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    // 2. Event Binding
    window.addEventListener("scroll", handleScroll);
    
    // 3. Cleanup Duty
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="index-body">
      {/* === Navigation === */}
      <Header />

      {/* === MAIN CONTENT === */}
      {/* Using one single semantic main container to wrap the isolated components */}
      <main className="main-content-wrapper">
        <Home />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contact />
      </main>

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}

export default App;
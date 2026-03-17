
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactBar from './components/ContactBar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Function to reveal elements
    const revealElements = () => {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -5% 0px',
        threshold: 0.01 // Very low threshold so items reveal as soon as a sliver is visible
      };

      const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      const targets = document.querySelectorAll('.reveal');
      targets.forEach(target => observer.observe(target));

      return observer;
    };

    const observer = revealElements();

    // Force reveal on sections that are jumped to via anchor links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          // Find all revealable children within the target section and activate them
          const childReveals = targetElement.querySelectorAll('.reveal');
          childReveals.forEach(el => el.classList.add('active'));
          // Also check if the section itself is a reveal element
          if (targetElement.classList.contains('reveal')) {
            targetElement.classList.add('active');
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Run once on load for initial hash
    handleHashChange();

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans bg-arctic selection:bg-apres/30">
      <Navbar />
      <main>
        <Hero />
        <ContactBar />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <Certifications />
        <Achievements />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;

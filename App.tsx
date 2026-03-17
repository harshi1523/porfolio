
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
    // Force refresh scroll position or handle specific deep links if needed in future
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

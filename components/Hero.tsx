
import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        // Move the text at 20% of the scroll speed for a subtle effect
        // We preserve the initial -50% centering and -90deg rotation
        parallaxRef.current.style.transform = `translateY(calc(-50% + ${scrolled * 0.2}px)) rotate(-90deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative bg-arctic pt-section pb-[120px] px-6 md:px-12 overflow-hidden scroll-mt-32">
      {/* Background Decorative Outlined Text with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -rotate-90 select-none pointer-events-none opacity-10 will-change-transform"
      >
        <span className="font-serif text-[12rem] font-bold editorial-outline text-midnight whitespace-nowrap">
          AI/ML PORTFOLIO
        </span>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-midnight font-sans text-paragraph mb-4 tracking-wide opacity-90 reveal">
          Hello, My name is
        </p>
        <h1 className="font-serif text-[clamp(3.5rem,11vw,11rem)] font-bold text-midnight leading-[0.85] tracking-tighter mb-12 uppercase max-w-4xl">
          LAKSHMI <br /> HARSHITHA
        </h1>
        <p className="text-midnight font-sans text-paragraph md:text-[20px] mb-12 max-w-2xl font-light tracking-wide opacity-80 leading-relaxed reveal delay-200">
          AI & Machine Learning Undergraduate | <span className="font-medium">NLP & GenAI Enthusiast</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 reveal delay-300">
          <button className="bg-mountain hover:bg-apres text-white px-10 py-4 font-sans text-button uppercase transition-all transform hover:-translate-y-1 shadow-lg">
            Download CV
          </button>
          <a href="#contact" className="border-2 border-midnight text-midnight hover:bg-apres hover:border-apres hover:text-white px-10 py-4 font-sans text-button uppercase transition-all transform hover:-translate-y-1 text-center">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

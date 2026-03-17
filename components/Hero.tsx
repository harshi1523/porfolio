
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(calc(-50% + ${scrolled * 0.2}px)) rotate(-90deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

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
      
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          variants={itemVariants}
          className="text-midnight font-sans text-paragraph mb-4 tracking-wide opacity-90"
        >
          Hello, My name is
        </motion.p>
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-[clamp(3.5rem,11vw,11rem)] font-bold text-midnight leading-[0.85] tracking-tighter mb-12 uppercase max-w-4xl"
        >
          LAKSHMI <br /> HARSHITHA
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-midnight font-sans text-paragraph md:text-[20px] mb-12 max-w-2xl font-light tracking-wide opacity-80 leading-relaxed"
        >
          AI & Machine Learning Undergraduate | <span className="font-medium">NLP & GenAI Enthusiast</span>
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6"
        >
          <button className="bg-mountain hover:bg-apres text-white px-10 py-4 font-sans text-button uppercase transition-all transform hover:-translate-y-1 shadow-lg">
            Download CV
          </button>
          <a href="#contact" className="border-2 border-midnight text-midnight hover:bg-apres hover:border-apres hover:text-white px-10 py-4 font-sans text-button uppercase transition-all transform hover:-translate-y-1 text-center">
            Let's Talk
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

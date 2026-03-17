
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, MessageCircle, Code2, Sparkles, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="home" className="relative bg-primary min-h-screen pt-32 pb-40 px-6 md:px-20 overflow-hidden flex flex-col justify-center scroll-mt-32">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-highlight/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      {/* Floating Technical Icons */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[15%] text-accent/20"
        >
          <Code2 size={120} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[25%] left-[10%] text-highlight/10"
        >
          <Cpu size={140} />
        </motion.div>
      </div>
      
      <motion.div 
        className="max-w-[1400px] w-full mx-auto relative z-10 text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-start gap-4">

          <motion.h1 
            variants={itemVariants}
            className="font-bodoni text-[clamp(2.5rem,8vw,6.5rem)] font-bold text-textPrimary leading-[0.9] tracking-tight mb-6 uppercase text-left"
          >
            LAKSHMI<br />
            <span className="text-accent neon-glow">HARSHITHA</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-textSecondary font-sans text-[clamp(1.1rem,2vw,1.6rem)] mb-12 font-medium tracking-wide max-w-3xl leading-relaxed"
          >
            AI & Machine Learning Undergraduate | <span className="text-highlight">NLP & GenAI Enthusiast</span> bridging innovation and technical practicality.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-8 items-center"
          >
            <button className="bg-accent hover:bg-accent/90 text-white px-12 py-5 font-sans text-button uppercase transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(255,46,99,0.3)] hover:shadow-[0_0_40px_rgba(255,46,99,0.5)] hover:-translate-y-1">
              <Download className="w-5 h-5" />
              Download CV
            </button>
            <a 
              href="#contact" 
              className="group relative border border-border text-textPrimary hover:border-accent hover:text-accent px-12 py-5 font-sans text-button uppercase transition-all flex items-center gap-3 hover:-translate-y-1 bg-secondary/50 backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Let's Talk
              <span className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Technical Bottom Bar */}
      <div className="absolute bottom-10 left-0 w-full flex items-center justify-between px-12 md:px-24 z-20 pointer-events-none">
        <div className="h-[1px] flex-grow bg-border/30 max-w-[100px] hidden md:block" />
        <div className="flex gap-12 text-textSecondary pointer-events-auto">
          {[
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/lakshmi-harshitha-' },
            { name: 'GitHub', url: 'https://github.com/lakshmiharshithaperavali' }
          ].map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 hover:opacity-100 hover:text-accent transition-all cursor-pointer"
            >
              // {social.name}
            </a>
          ))}
        </div>
        <div className="h-[1px] flex-grow bg-border/30 max-w-[100px] hidden md:block" />
      </div>
    </section>
  );
};

export default Hero;

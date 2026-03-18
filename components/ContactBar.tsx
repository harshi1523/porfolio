
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Mail, Github, Linkedin } from 'lucide-react';

const ContactBar: React.FC = () => {
  return (
    <div className="bg-secondary border-y border-border py-4 px-6 md:px-12 relative z-20">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 text-[13px] font-sans text-textSecondary uppercase tracking-widest font-bold">
          <div className="flex items-center gap-3 group transition-colors hover:text-textPrimary">
            <Mail className="w-4 h-4 text-accent" />
            <span className="lowercase">peravalilakshmiharshitha@gmail.com</span>
          </div>
          <a 
            href="https://github.com/harshi1523" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 group transition-all hover:text-highlight"
          >
            <Github className="w-4 h-4 text-accent group-hover:text-highlight" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/lakshmi-harshitha-" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 group transition-all hover:text-highlight"
          >
            <Linkedin className="w-4 h-4 text-accent group-hover:text-highlight" />
            <span>LinkedIn</span>
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ContactBar;

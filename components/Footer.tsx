
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary py-24 px-6 md:px-12 text-textSecondary border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-highlight/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 border-b border-border pb-16 mb-12">
            <div>
              <h2 className="font-bodoni text-[3rem] text-textPrimary mb-6 tracking-tight uppercase leading-none">
                Lakshmi <span className="text-accent italic font-light lowercase">Harshitha</span>
              </h2>
              <p className="font-sans text-textSecondary max-w-sm text-lg leading-relaxed mb-8">
                Building the future through <span className="text-highlight">Artificial Intelligence</span> & Intelligent Systems.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/lakshmi-harshitha-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-border rounded-xl flex items-center justify-center text-accent hover:border-accent hover:bg-accent/10 transition-all cursor-pointer group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://github.com/lakshmiharshithaperavali" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-secondary border border-border rounded-xl flex items-center justify-center text-textPrimary hover:border-highlight hover:bg-highlight/10 transition-all cursor-pointer group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:text-right">
              <div>
                <h3 className="font-sans font-bold text-textPrimary text-xs uppercase tracking-[0.3em] mb-8">Navigation</h3>
                <ul className="space-y-4">
                  {['Home', 'About', 'Work', 'Skills', 'Contact'].map(item => (
                    <li key={item}>
                      <a href={`#${item.toLowerCase()}`} className="text-textSecondary hover:text-accent transition-colors text-sm font-medium uppercase tracking-widest">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-textMuted gap-8">
            <p>© 2026 LAKSHMI HARSHITHA. DESIGNED FOR EXCELLENCE.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-accent transition-colors">BACK TO TOP ↑</a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;

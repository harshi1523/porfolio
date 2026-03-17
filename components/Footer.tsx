
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight pt-24 pb-12 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto reveal">
        <div className="grid md:grid-cols-2 gap-12 border-b border-white/10 pb-16 mb-12">
          <div>
            <h2 className="font-serif text-h2 mb-4 tracking-tight uppercase">Lakshmi Harshitha</h2>
            <p className="font-sans font-light text-white/60 max-w-sm text-paragraph leading-relaxed">
              AI & Machine Learning Undergraduate | Building Intelligent Solutions that bridge innovation and practicality.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:text-right">
            <div>
              <h3 className="font-sans font-bold text-apres text-xs uppercase tracking-widest mb-6">Explore</h3>
              <ul className="space-y-3">
                {['Home', 'Projects', 'Internship', 'Contact'].map(item => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-apres transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-bold text-apres text-xs uppercase tracking-widest mb-6">Connect</h3>
              <div className="flex md:justify-end gap-6">
                <a href="#" className="hover:text-apres text-2xl transition-colors">𝕏</a>
                <a href="#" className="hover:text-apres text-2xl transition-colors">in</a>
                <a href="https://github.com/harshi1523?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-apres text-2xl transition-colors">gh</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-sans text-white/40 gap-4">
          <p>© 2026 Lakshmi Harshitha. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

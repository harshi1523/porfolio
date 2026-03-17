
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Internship', href: '#internship' },
    { name: 'Contact', href: '#contact' }
  ];

  const desktopLinkClass = "text-white text-xs font-bold tracking-[0.2em] hover:text-midnight transition-all duration-300 relative group py-2";
  const mobileLinkClass = "text-white text-3xl font-serif font-bold tracking-widest hover:text-midnight transition-colors py-4";

  return (
    <nav className="sticky top-0 z-[100] bg-apres py-5 px-6 md:px-12 flex justify-between items-center border-b border-white/10 shadow-lg">
      <div className="font-serif text-2xl md:text-3xl font-extrabold text-white tracking-tight z-[110]">
        <a href="#home" className="hover:text-midnight transition-colors">LAKSHMI HARSHITHA</a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={desktopLinkClass}
          >
            {item.name.toUpperCase()}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-midnight transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden z-[110]">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-apres transform transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-4 z-[105] ${isMenuOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible pointer-events-none'}`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={mobileLinkClass}
          >
            {item.name.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';

const ContactBar: React.FC = () => {
  return (
    <div className="bg-arctic border-y border-midnight/5 py-4 px-6 md:px-12 reveal">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-sm font-sans text-midnight/80">
        <div className="flex items-center gap-2">
          <span className="text-apres">📞</span> +91 9392959397
        </div>
        <div className="flex items-center gap-2">
          <span className="text-apres">📧</span> peravalilakshmiharshitha@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <span className="text-apres">🔗</span> 
          <a href="https://linkedin.com/in/lakshmi-harshitha" target="_blank" className="hover:text-apres transition-colors">
            linkedin.com/in/lakshmi-harshitha
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;

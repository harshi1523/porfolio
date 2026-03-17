
import React from 'react';

const Certifications: React.FC = () => {
  const certs = [
    { name: "Generative AI", issuer: "LinkedIn Learning" },
    { name: "AI Fluency & Frameworks", issuer: "Anthropic" },
    { name: "Scrum Fundamentals Certification", issuer: "Scrum" },
    { name: "Machine Learning", issuer: "SkillDzire" }
  ];

  return (
    <section className="py-section px-6 md:px-12 bg-slopes">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-h2 text-midnight mb-12 reveal">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div 
              key={idx} 
              className={`bg-mountain p-card-p border border-midnight/10 hover:border-apres transition-all group reveal delay-${(idx + 1) * 100}`}
            >
              <p className="text-apres text-small uppercase tracking-widest mb-4">{cert.issuer}</p>
              <h3 className="font-sans text-white text-h3 leading-tight group-hover:text-white/80">
                {cert.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

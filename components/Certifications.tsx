
import React from 'react';

const Certifications: React.FC = () => {
  const certs = [
    { name: "What Is Generative AI", issuer: "LinkedIn" },
    { name: "Gen AI for IT", issuer: "Infosys" },
    { name: "Scrum Fundamentals Certification", issuer: "Scrum - ID: 1137883" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slopes">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-midnight mb-12 reveal">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div 
              key={idx} 
              className={`bg-mountain p-8 border border-midnight/10 hover:border-apres transition-all group reveal delay-${(idx + 1) * 100}`}
            >
              <p className="text-apres text-xs font-bold uppercase tracking-widest mb-4">{cert.issuer}</p>
              <h3 className="font-sans font-bold text-white text-xl leading-tight group-hover:text-white/80">
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

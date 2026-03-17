
import React from 'react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Certifications: React.FC = () => {
  const certs = [
    { name: "Generative AI", issuer: "LinkedIn Learning" },
    { name: "AI Fluency & Frameworks", issuer: "Anthropic" },
    { name: "Scrum Fundamentals Certification", issuer: "Scrum" },
    { name: "Machine Learning", issuer: "SkillDzire" }
  ];

  return (
    <section className="py-section px-6 md:px-12 bg-slopes overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight mb-20 tracking-tight">Certifications</h2>
        </ScrollReveal>
        
        <StaggerContainer>
          <div className="grid md:grid-cols-2 gap-6">
            {certs.map((cert, idx) => (
              <StaggerItem key={idx}>
                <div 
                  className="bg-mountain p-card-p border border-midnight/10 hover:border-apres transition-all group"
                >
                  <p className="text-apres text-small uppercase tracking-widest mb-4">{cert.issuer}</p>
                  <h3 className="font-sans text-white text-h3 leading-tight group-hover:text-white/80">
                    {cert.name}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Certifications;


import React from 'react';
import { Award } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Certifications: React.FC = () => {
  const certs = [
    { name: "Generative AI", issuer: "LinkedIn Learning" },
    { name: "AI Fluency & Frameworks", issuer: "Anthropic" },
    { name: "Scrum Fundamentals Certification", issuer: "Scrum" },
    { name: "Machine Learning", issuer: "SkillDzire" }
  ];

  return (
    <section id="certifications" className="py-section px-6 md:px-12 bg-secondary scroll-mt-32 relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-highlight/10 rounded-xl border border-highlight/20 text-highlight">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-bodoni text-h2 text-textPrimary uppercase tracking-tight">Professional <span className="text-highlight">Certifications</span></h2>
          </div>
        </ScrollReveal>
        
        <StaggerContainer>
          <div className="grid md:grid-cols-2 gap-6">
            {certs.map((cert, idx) => (
              <StaggerItem key={idx}>
                <div 
                  className="bg-card p-8 border border-border rounded-2xl accent-glow group transition-all duration-300 hover:bg-hover hover:-translate-y-1"
                >
                  <p className="text-highlight text-[10px] uppercase font-bold tracking-[0.2em] mb-4 bg-highlight/5 px-3 py-1 rounded inline-block border border-highlight/10">{cert.issuer}</p>
                  <h3 className="font-bodoni text-2xl text-textPrimary leading-tight group-hover:text-accent transition-colors">
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

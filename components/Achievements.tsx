
import React from 'react';
import { Award } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Achievements: React.FC = () => {
  const achievements = [
    { icon: "🏆", text: "3rd PRIZE - Design Development challenge at RJE-Nest (I-TBI)" },
    { icon: "🚀", text: "Organized ISRO event in college as NSS Volunteer" },
    { icon: "💻", text: "Former Member - IEEE Computer Society" },
    { icon: "🤖", text: "Participated in KPRIET Intel AI hackathon" }
  ];

  return (
    <section id="achievements" className="bg-primary py-section px-6 md:px-12 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 right-20 text-accent/20 text-4xl animate-pulse select-none">★</div>
      <div className="absolute bottom-20 left-20 text-accent/10 text-6xl select-none">★</div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-accent/10 rounded-xl border border-accent/20 text-accent">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-bodoni text-h2 text-textPrimary uppercase tracking-tight">Achievements & <span className="text-accent underline decoration-accent/30 underline-offset-8">Activities</span></h2>
          </div>
        </ScrollReveal>
        
        <StaggerContainer>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-card border border-border p-8 rounded-2xl flex items-center gap-8 accent-glow group transition-all duration-300 hover:bg-hover hover:-translate-y-1 h-full">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-500">{item.icon}</span>
                  <p className="font-sans text-xl text-textPrimary leading-tight text-left group-hover:text-accent transition-colors">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Achievements;

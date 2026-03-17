import React from 'react';
import { Terminal, Database, Brain, Globe, Binary, Cpu } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["Java", "Python", "C", "MySQL", "HTML"],
      color: "accent"
    },
    {
      title: "Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["JIRA", "AI Studio", "Antigravity", "Firebase", "GitHub", "Lovable AI"],
      color: "highlight"
    },
    {
      title: "Technical Skills",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "Artificial intelligence", 
        "Machine Learning", 
        "Natural Language Processing", 
        "Prompt engineering", 
        "TensorFlow", 
        "PyTorch", 
        "Scikit-learn", 
        "Pandas"
      ],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="bg-primary py-section px-6 md:px-12 scroll-mt-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[30vw] h-[30vw] bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-highlight/10 rounded-xl border border-highlight/20 text-highlight">
              <Binary className="w-6 h-6" />
            </div>
            <h2 className="font-bodoni text-h2 text-textPrimary uppercase tracking-tight">Technical <span className="text-highlight">Skills</span></h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-card border border-border p-8 rounded-2xl accent-glow group transition-all hover:bg-hover hover:-translate-y-2 h-full">
                <div className={`mb-6 p-4 rounded-xl inline-block transition-transform group-hover:scale-110 border ${
                  category.color === 'accent' ? 'bg-accent/10 border-accent/20 text-accent' : 'bg-highlight/10 border-highlight/20 text-highlight'
                }`}>
                  {category.icon}
                </div>
                <h3 className="font-bodoni text-2xl text-textPrimary mb-6 tracking-tight uppercase">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className={`font-sans text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-lg border transition-all ${
                        category.color === 'accent' 
                        ? 'border-accent/30 text-accent bg-accent/5 hover:bg-accent/20' 
                        : 'border-highlight/30 text-highlight bg-highlight/5 hover:bg-highlight/20'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { Code, Brain, Settings } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Java", "Python", "C", "MySQL", "HTML"]
    },
    {
      title: "AI & Data Science",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        "Machine Learning",
        "Natural Language Processing",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-5 h-5" />,
      skills: ["GitHub", "JIRA", "Firebase", "AI Studio", "Lovable AI", "Antigravity"]
    }
  ];

  return (
    <section id="skills" className="py-section px-6 md:px-12 bg-[#F8F9FA] scroll-mt-32 overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight mb-20 tracking-tight">
            Technical Skills
          </h2>
        </ScrollReveal>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-start">
            {skillCategories.map((cat, idx) => (
              <StaggerItem key={idx}>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-10 text-zinc-400">
                    {cat.icon}
                    <h3 className="font-sans font-bold text-small tracking-[0.2em] uppercase">
                      {cat.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-4 py-2 bg-[#1A1A1A] border border-[#333333] text-zinc-300 font-sans text-pill rounded-[50px] transition-all duration-300 cursor-default hover:border-purple-500/50 hover:bg-[#252525] hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:-translate-y-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;

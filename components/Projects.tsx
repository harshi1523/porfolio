
import React from 'react';
import { Github, ExternalLink, Briefcase } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Cloud-Based E-\nCommerce & Rental\nPlatform",
      desc: "Developed a cloud-based SaaS platform that allows users to both purchase and rent products through a single system. The platform supports secure transactions, automated verification, and flexible rental durations.",
      tech: ["Web Development", "Cloud Architecture", "Payment Integration"]
    },
    {
      title: "House Price\nPrediction",
      desc: "ML model using XGBoost regressor to predict house prices based on dataset. Includes heatmap correlation analysis to help buyers understand property suitability and sellers identify optimal selling times.",
      tech: ["Python", "XGBoost", "Pandas", "Scikit-learn"]
    },
    {
      title: "News Research\nTools",
      desc: "State-of-the-art Generative AI application for analyzing and extracting insights from news articles. Optimized performance with 30% reduction in response time and significantly improved accuracy.",
      tech: ["Generative AI", "NLP", "Python"]
    }
  ];

  return (
    <section id="projects" className="bg-primary py-section px-6 md:px-12 relative overflow-hidden scroll-mt-32">
      <div className="absolute top-1/4 right-0 w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-accent/10 rounded-xl border border-accent/20 text-accent">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="font-bodoni text-h2 text-textPrimary uppercase tracking-tight">Selected <span className="text-accent">Projects</span></h2>
          </div>
        </ScrollReveal>

        <StaggerContainer>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 w-full mb-20">
            {projects.map((project, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="bg-card border border-border p-8 rounded-2xl accent-glow group transition-all duration-300 hover:bg-hover hover:-translate-y-2 hover:border-accent flex flex-col h-full"
                >
                  <h3 className="font-bodoni text-2xl text-textPrimary mb-6 tracking-tight uppercase transition-colors group-hover:text-accent whitespace-pre-line">
                    {project.title}
                  </h3>
                  <p className="font-sans text-textSecondary mb-8 leading-relaxed text-paragraph flex-grow">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="font-sans text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-lg border border-border/50 text-textSecondary bg-[#222738] hover:border-accent hover:text-accent transition-all"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <ScrollReveal delay={0.5}>
          <div className="flex justify-center">
            <a 
              href="https://github.com/harshi1523?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-accent hover:bg-[#FF4D6D] text-white px-12 py-5 font-sans text-button uppercase transition-all rounded-2xl shadow-glow hover:shadow-glow-strong"
            >
              <Github className="w-5 h-5" />
              More on GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

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
    <section id="projects" className="bg-[#e2e4e6] py-32 px-6 md:px-12 relative overflow-hidden scroll-mt-32">
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <h2 className="font-serif text-[4rem] md:text-[5.5rem] font-medium text-zinc-800 mb-20 tracking-tight reveal">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-[#1c1c1a] rounded-sm p-10 shadow-[20px_40px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-[30px_50px_80px_-20px_rgba(0,0,0,0.4)] transition-all duration-700 ease-out transform hover:-translate-y-4 flex flex-col h-full reveal delay-${(idx + 1) * 200}`}
            >
              <h3 className="font-sans font-bold text-white text-[1.75rem] leading-[1.2] mb-8 whitespace-pre-line">
                {project.title}
              </h3>
              <p className="font-sans text-zinc-300 mb-12 leading-relaxed text-[15px] flex-grow">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[13px] font-medium text-zinc-300 bg-white/5 px-4 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

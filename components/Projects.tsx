
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "House Price Prediction",
      desc: "ML model using XGBoost regressor to predict house prices based on dataset. Includes heatmap correlation analysis to help buyers understand property suitability and sellers identify optimal selling times.",
      tech: ["Python", "XGBoost", "Pandas", "Scikit-learn"]
    },
    {
      title: "News Research Tools",
      desc: "State-of-the-art Generative AI application for analyzing and extracting insights from news articles. Optimized performance with 30% reduction in response time and significantly improved accuracy.",
      tech: ["Generative AI", "NLP", "Python"]
    }
  ];

  return (
    <section id="projects" className="bg-arctic py-24 px-6 md:px-12 relative overflow-hidden scroll-mt-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 p-12 opacity-10 reveal">
        <span className="font-serif text-[10rem] font-bold editorial-outline text-midnight uppercase rotate-12 inline-block">
          HARSHITHA
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-serif text-6xl font-bold text-midnight mb-16 tracking-tight reveal">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`bg-mountain p-10 md:p-14 shadow-xl hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-2 hover:scale-[1.01] flex flex-col h-full border border-midnight/5 reveal delay-${(idx + 1) * 200}`}
            >
              <h3 className="font-sans font-bold text-white text-2xl mb-6">
                {project.title}
              </h3>
              <p className="font-sans text-white/70 mb-8 leading-relaxed flex-grow">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-bold uppercase tracking-widest text-apres bg-apres/10 px-3 py-1">
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

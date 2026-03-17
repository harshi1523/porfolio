
import React from 'react';

const Internship: React.FC = () => {
  const internships = [
    {
      title: "AICTE Virtual Internship - Zscaler Zero Trust Cloud Security",
      points: [
        "Analyzed real-world cloud security scenarios",
        "Understood access risks and policy enforcement",
        "Strengthened understanding of secure cloud access models and enterprise security practices"
      ]
    },
    {
      title: "SKILLDIZIRE - Machine Learning",
      points: [
        "Worked on real-world ML datasets",
        "Data preprocessing, feature selection, model training, and evaluation using Python",
        "Gained practical experience in building end-to-end ML pipelines and improving model performance"
      ]
    }
  ];

  return (
    <section id="internship" className="py-24 px-6 md:px-12 bg-slopes scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-midnight mb-16 reveal">Professional Experience</h2>
        
        <div className="space-y-16">
          {internships.map((job, idx) => (
            <div key={idx} className={`border-l-4 border-apres pl-8 md:pl-12 py-4 reveal delay-${(idx + 1) * 100}`}>
              <h3 className="font-serif text-3xl font-bold text-midnight mb-8 leading-tight max-w-2xl">
                {job.title}
              </h3>
              <ul className="space-y-4 font-sans text-midnight/70 leading-relaxed max-w-3xl text-lg">
                {job.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-4">
                    <span className="text-apres mt-1.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internship;

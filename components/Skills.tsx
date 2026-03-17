
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "MySQL"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "AI/ML Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas"]
    },
    {
      title: "Specializations",
      skills: ["Artificial Intelligence", "Machine Learning", "NLP", "Prompt Engineering", "Power BI"]
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-slopes">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-16 reveal">
          <h2 className="font-serif text-5xl font-bold text-midnight">Technical Skills</h2>
          <div className="flex-1 h-[1px] bg-midnight/20"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`relative reveal delay-${(idx + 1) * 100}`}>
              <h3 className="font-sans font-bold text-midnight text-sm tracking-widest uppercase mb-8 flex items-center gap-2">
                {cat.title}
                {idx < skillCategories.length - 1 && <span className="text-apres text-lg">★</span>}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 border border-midnight/10 bg-mountain text-white font-sans text-sm font-medium rounded-full hover:border-apres hover:bg-apres/20 transition-all cursor-default"
                  >
                    {skill}
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

export default Skills;

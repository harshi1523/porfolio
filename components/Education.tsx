
import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      year: "2022 — 2026",
      institution: "RVR & JC College of Engineering",
      detail: "B.Tech Computer Science (AI & ML)"
    },
    {
      year: "2020 — 2022",
      institution: "Sri Chaitanya Jr College",
      detail: "MPC (Mathematics, Physics, Chemistry)"
    },
    {
      year: "2019 — 2020",
      institution: "Naveena Vidya Nikethan High School",
      detail: "Secondary School Certificate"
    }
  ];

  return (
    <section id="education" className="pt-12 pb-32 px-6 md:px-12 bg-arctic overflow-hidden scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 reveal">
          <h2 className="font-serif text-7xl md:text-8xl font-black text-midnight italic leading-none">
            Education
          </h2>
          <div className="w-32 h-2 bg-apres mt-6"></div>
        </div>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-apres/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24 md:space-y-32">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 reveal ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'} delay-${(idx + 1) * 200}`}>
                    <span className="font-sans font-black text-xl text-apres mb-2 block tracking-tighter">
                      {edu.year}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-midnight leading-tight mb-3">
                      {edu.institution}
                    </h3>
                    <p className="font-sans font-medium text-midnight/50 text-lg uppercase tracking-widest">
                      {edu.detail}
                    </p>
                  </div>

                  {/* Marker (Center) */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <div className="bg-slopes p-2">
                        <span className="text-apres text-3xl block animate-pulse">✦</span>
                    </div>
                  </div>

                  {/* Empty Side (for spacing) */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


import React from 'react';

const Achievements: React.FC = () => {
  const achievements = [
    { icon: "🏆", text: "3rd PRIZE - Design Development challenge at RJE-Nest (I-TBI)" },
    { icon: "🚀", text: "Organized ISRO event in college as NSS Volunteer" },
    { icon: "💻", text: "Former Member - IEEE Computer Society" },
    { icon: "🤖", text: "Participated in KPRIET Intel AI hackathon" }
  ];

  return (
    <section className="bg-arctic py-section px-6 md:px-12 relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-10 text-apres text-4xl animate-pulse">★</div>
      <div className="absolute bottom-10 left-10 text-apres text-2xl opacity-50">★</div>
      
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight mb-16 inline-block relative reveal">
          Achievements & Activities
          <span className="absolute -right-16 top-0 text-apres text-5xl">★</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <div key={idx} className={`bg-mountain border border-midnight/10 p-card-p flex items-center gap-6 hover:bg-apres/10 transition-all reveal delay-${(idx + 1) * 100}`}>
              <span className="text-4xl">{item.icon}</span>
              <p className="font-sans font-medium text-white text-h3 text-left">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

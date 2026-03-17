
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-section px-6 md:px-12 bg-arctic scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 reveal">
            <h2 className="font-serif text-h2 text-midnight leading-tight sticky top-39">
              About Me
            </h2>
          </div>
          <div className="md:col-span-2 reveal delay-200">
            <p className="font-sans text-paragraph text-midnight/90 mb-8">
              AI & Machine Learning undergraduate (B. Tech CSE – AI & ML) with hands-on experience in machine learning, NLP, and Generative AI.
            </p>
            <p className="font-sans text-paragraph text-midnight/70 mb-8">
              Proficient in Python, data preprocessing, model training, and model evaluation. Experienced in building real-world AI applications through internships, hackathons, and academic projects. I bridge the gap between complex algorithms and practical, creative solutions.
            </p>
            <div className="h-1 w-24 bg-apres reveal delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

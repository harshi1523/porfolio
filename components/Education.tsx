
import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Education: React.FC = () => {
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "Vellore Institute of Technology, Chennai",
      period: "2021 — 2025",
      details: "Pursuing specialized coursework in Advanced AI, Neural Networks, and Data Structures.",
      grade: "CGPA: 8.64"
    },
    {
      degree: "Intermediate Education (MPC)",
      institution: "Sri Chaitanya Junior College",
      period: "2019 — 2021",
      details: "Focused on Mathematics, Physics, and Chemistry.",
      grade: "Percentage: 97.4%"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Ravindra Bharathi School",
      period: "2018 — 2019",
      details: "Completed with outstanding academic performance.",
      grade: "CGPA: 10.0"
    }
  ];

  return (
    <section id="education" className="bg-secondary py-section px-6 md:px-12 scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-accent/10 rounded-xl border border-accent/20 text-accent">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h2 className="font-bodoni text-h2 text-textPrimary uppercase tracking-tight">Academic <span className="text-accent">Background</span></h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:via-border/50 before:to-transparent">
          {education.map((item, index) => (
            <StaggerItem key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Timeline Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card text-accent shadow-glow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                <Award className="w-5 h-5" />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 bg-card border border-border rounded-2xl accent-glow transition-all hover:bg-hover hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="font-bodoni text-2xl text-textPrimary leading-tight">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-accent text-xs font-bold bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-highlight text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  {item.institution}
                </div>
                
                <p className="text-textSecondary text-sm leading-relaxed mb-6 font-sans">
                  {item.details}
                </p>
                
                <div className="inline-flex items-center gap-2 text-textPrimary font-bold text-sm bg-border/50 px-4 py-2 rounded-lg border border-border">
                  <span className="text-accent italic font-bodoni text-lg mr-1">Res:</span> {item.grade}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Education;

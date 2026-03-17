import React from 'react';
import { Briefcase, Code, CheckCircle2 } from 'lucide-react';

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
    <section id="internship" className="py-section px-6 md:px-12 bg-[#e5e7eb] scroll-mt-32">
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <h2 className="font-serif text-h2 text-zinc-800 mb-20 tracking-tight reveal">
          Professional Experience
        </h2>
        
        <div className="w-full space-y-12">
          {/* AdeptSK Solutions */}
          <div className="bg-[#1c1c1c] rounded-[2.5rem] p-card-p shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15),0_30px_60px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_80px_160px_-20px_rgba(0,0,0,0.2),0_40px_80px_-15px_rgba(0,0,0,0.15)] transition-all duration-[1000ms] ease-out transform hover:-translate-y-4 flex flex-col border border-white/5 reveal w-full">
            <div className="flex items-center gap-4 mb-3">
              <Briefcase className="w-8 h-8 text-zinc-400" />
              <h3 className="font-serif font-bold text-white text-h3">
                AdeptSK Solutions Private Ltd
              </h3>
            </div>
            <h4 className="font-sans text-zinc-400 text-small tracking-wide mb-8">
              Software Engineer Intern
            </h4>
            
            <p className="font-sans text-zinc-300 mb-10 leading-relaxed text-paragraph">
              Currently working as a Software Engineer Intern at AdeptSK Solutions, contributing to the development of end-to-end software solutions. I focus on implementing project features, collaborating with teams, and applying modern development practices to deliver scalable and efficient applications.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" />
                <span className="font-sans text-zinc-300 leading-relaxed">Contributed to full-stack project development</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" />
                <span className="font-sans text-zinc-300 leading-relaxed">Worked on implementing features and debugging applications</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" />
                <span className="font-sans text-zinc-300 leading-relaxed">Collaborated with team members to ensure smooth project delivery</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" />
                <span className="font-sans text-zinc-300 leading-relaxed text-paragraph">Applied modern development workflows and project management practices</span>
              </div>
            </div>
          </div>

          {/* AICTE Zscaler Virtual Internship */}
          <div className="bg-[#1c1c1c] rounded-[2.5rem] p-card-p shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15),0_30px_60px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_80px_160px_-20px_rgba(0,0,0,0.2),0_40px_80px_-15px_rgba(0,0,0,0.15)] transition-all duration-[1000ms] ease-out transform hover:-translate-y-4 flex flex-col border border-white/5 reveal delay-200 w-full">
            <div className="flex items-center gap-4 mb-3">
              <Code className="w-8 h-8 text-zinc-400" />
              <h3 className="font-serif font-bold text-white text-h3">
                AICTE Virtual Internship - Zscaler
              </h3>
            </div>
            <h4 className="font-sans text-zinc-400 text-small tracking-wide mb-8">
              Cloud Security Intern (Zero Trust Architecture)
            </h4>
            
            <p className="font-sans text-zinc-300 mb-10 leading-relaxed text-paragraph">
              Completed an intensive virtual internship focusing on modern cloud security paradigms. Gained hands-on experience analyzing real-world access risks and studying the enforcement of secure, identity-based models within enterprise environments.
            </p>

            <div className="mb-10">
              <h5 className="font-sans font-bold text-white text-lg mb-4">Key Competencies</h5>
              <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
                {["Zero Trust Architecture", "Cloud Security", "Policy Enforcement", "Threat Mitigation"].map((skill, i) => (
                  <span key={i} className="text-pill tracking-wide text-zinc-400 bg-white/5 px-5 py-2 rounded-full border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" />
                <span className="font-sans text-zinc-300 leading-relaxed">Analyzed real-world cloud security scenarios</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" />
                <span className="font-sans text-zinc-300 leading-relaxed">Understood access risks and policy enforcement</span>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-zinc-500 shrink-0 mt-0.5" />
                <span className="font-sans text-zinc-300 leading-relaxed text-paragraph">Strengthened understanding of secure cloud access models and enterprise security practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;

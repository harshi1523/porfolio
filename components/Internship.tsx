
import React from 'react';
import { Briefcase, Code, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const Internship: React.FC = () => {
  return (
    <section id="internship" className="py-section px-6 md:px-12 bg-primary scroll-mt-32 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-accent/10 rounded-xl border border-accent/20 text-accent">
              <Briefcase className="w-6 h-6" />
            </div>
            <h2 className="font-bodoni text-h2 text-textPrimary uppercase tracking-tight">Professional <span className="text-accent">Experience</span></h2>
          </div>
        </ScrollReveal>
        
        <StaggerContainer className="space-y-12">
          {/* AdeptSK Solutions */}
          <StaggerItem>
            <div className="bg-card border border-border p-10 rounded-3xl accent-glow group transition-all duration-500 hover:bg-hover hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -rotate-45 translate-x-16 -translate-y-16" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bodoni text-3xl text-textPrimary uppercase tracking-tight">AdeptSK Solutions <span className="text-accent underline decoration-accent/30 underline-offset-8">Private Ltd</span></h3>
                  </div>
                  <div className="inline-block px-3 py-1 bg-highlight/10 border border-highlight/20 rounded-lg text-highlight text-xs font-bold uppercase tracking-widest">
                    Software Engineer Intern
                  </div>
                </div>
                <div className="text-textMuted font-sans text-xs font-bold uppercase tracking-[0.2em] bg-secondary px-4 py-2 rounded-xl border border-border">
                  Aug 2024 — Present
                </div>
              </div>
              
              <p className="font-sans text-textSecondary mb-10 leading-relaxed text-paragraph max-w-4xl">
                Contributing to end-to-end software solutions. Implementing core project features, collaborating in agile environments, and applying modern development practices to deliver high-performance applications.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Full-stack project development contributions",
                  "Feature implementation and application debugging",
                  "Team collaboration for seamless project delivery",
                  "Modern development workflows & Git management"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/50 border border-border/50 group/item hover:border-accent/30 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="font-sans text-textSecondary text-sm leading-relaxed group-hover/item:text-textPrimary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* AICTE Zscaler Virtual Internship */}
          <StaggerItem>
            <div className="bg-card border border-border p-10 rounded-3xl accent-glow group transition-all duration-500 hover:bg-hover hover:-translate-y-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                  <h3 className="font-bodoni text-3xl text-textPrimary uppercase tracking-tight mb-2">AICTE Virtual Internship - <span className="text-highlight">Zscaler</span></h3>
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg text-accent text-xs font-bold uppercase tracking-widest">
                    Cloud Security Intern
                  </div>
                </div>
                <div className="text-textMuted font-sans text-xs font-bold uppercase tracking-[0.2em] bg-secondary px-4 py-2 rounded-xl border border-border">
                  June 2024 — July 2024
                </div>
              </div>
              
              <p className="font-sans text-textSecondary mb-10 leading-relaxed text-paragraph max-w-4xl">
                Intensive focus on modern cloud security paradigms. Analyzing real-world access risks and studying the enforcement of secure, identity-based Zero Trust models.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {["Zero Trust Architecture", "Cloud Security", "Policy Enforcement", "Threat Mitigation"].map((skill, i) => (
                  <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-highlight border border-highlight/20 bg-highlight/5 px-4 py-1.5 rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  "Analyzed real-world cloud security scenarios",
                  "Deep dive into Zero Trust Architecture",
                  "Security policy evaluation and enforcement strategies"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-textSecondary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                    <span className="font-sans text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Internship;

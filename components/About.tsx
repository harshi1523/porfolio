
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { User, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-primary py-section px-6 md:px-12 overflow-hidden scroll-mt-32">
      {/* Decorative flair */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-accent/10 rounded-xl border border-accent/20">
              <User className="text-accent w-6 h-6" />
            </div>
            <h2 className="font-bodoni text-h2 text-textPrimary uppercase tracking-tight">About <span className="text-accent">Me</span></h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-3 space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="font-sans text-textSecondary text-paragraph leading-relaxed">
                I am an Undergraduate student pursuing my Bachelor's degree in <span className="text-highlight font-medium">Artificial Intelligence and Machine Learning</span>. My academic journey is fueled by a deep interest in building intelligent systems that can solve real-world problems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-sans text-textSecondary text-paragraph leading-relaxed">
                With a strong foundation in <span className="text-textPrimary font-semibold">Natural Language Processing (NLP)</span> and <span className="text-textPrimary font-semibold">Generative AI</span>, I am focused on creating innovative solutions that bridge the gap between complex research and practical application.
              </p>
            </ScrollReveal>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <ScrollReveal delay={0.3}>
                <div className="p-6 bg-card border border-border rounded-2xl accent-glow transition-all group">
                  <Target className="text-accent w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-textPrimary font-bold uppercase tracking-widest text-xs mb-2">My Goal</h3>
                  <p className="text-textMuted text-sm leading-relaxed">Developing AI that is both impactful and ethical for the wider society.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className="p-6 bg-card border border-border rounded-2xl accent-glow transition-all group">
                  <Zap className="text-highlight w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-textPrimary font-bold uppercase tracking-widest text-xs mb-2">My Focus</h3>
                  <p className="text-textMuted text-sm leading-relaxed">Specializing in LLMs, Prompt Engineering, and RAG architectures.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <ScrollReveal delay={0.3}>
              <div className="relative group">
                <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-all" />
                <div className="relative aspect-square rounded-3xl overflow-hidden border border-border bg-secondary flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bodoni text-accent mb-2">#NLP</div>
                    <div className="text-xl font-sans text-textSecondary uppercase tracking-widest">Specialist</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

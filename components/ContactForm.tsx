
import React, { useState } from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // You will need to get your actual access key from https://web3forms.com/
    // and replace the 'YOUR_ACCESS_KEY_HERE' placeholder.
    const accessKey = 'YOUR_ACCESS_KEY_HERE';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: 'Portfolio Contact Form',
          to_email: 'peravalilakshmiharshitha@gmail.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
        console.error('Form submission error:', result);
      }
    } catch (err) {
      setError('Connection error. Please check your internet and try again.');
      console.error('Network error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (

    <section id="contact" className="py-section px-6 md:px-12 bg-secondary relative scroll-mt-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-[10px] uppercase font-bold tracking-[0.4em]">Get In Touch</span>
          </div>
          <h2 className="font-bodoni text-[3rem] md:text-[5rem] text-textPrimary leading-none mb-20 uppercase tracking-tighter">
            Let's <span className="text-accent italic font-light lowercase">Collaborate</span>
          </h2>
        </ScrollReveal>
        
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
          <ScrollReveal delay={0.2}>
            <div className="space-y-12">
              <div>
                <h3 className="font-sans font-bold text-textMuted text-[10px] tracking-widest uppercase mb-10 pb-4 border-b border-border inline-block">Contact Details</h3>
                <div className="space-y-10">
                  <div className="group">
                    <p className="text-textMuted text-[10px] uppercase tracking-widest mb-3">Digital Inbox</p>
                    <a href="mailto:peravalilakshmiharshitha@gmail.com" className="font-bodoni text-lg md:text-xl text-textPrimary hover:text-highlight transition-colors block leading-tight">
                      peravalilakshmiharshitha@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-card border border-border rounded-3xl accent-glow">
                <p className="text-textSecondary text-sm mb-6 leading-relaxed">
                  Always open to discussing new projects, creative ideas, or being part of your visions.
                </p>
                <a 
                  href="https://www.linkedin.com/in/lakshmi-harshitha-"
                  target="_blank"
                  className="w-full py-4 bg-transparent border border-accent text-accent hover:bg-accent hover:text-white font-sans text-xs font-bold uppercase tracking-widest rounded-xl transition-all text-center block"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="bg-card border border-border p-10 md:p-14 rounded-[2rem] accent-glow-strong relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-3xl rounded-full" />
              
              <h3 className="font-bodoni text-2xl text-textPrimary uppercase mb-10">Quick <span className="text-accent">Message</span></h3>
              
              {submitted ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl text-textPrimary font-bodoni uppercase mb-2">Message Received</h4>
                  <p className="text-textSecondary text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-textMuted tracking-widest pl-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-secondary/50 border border-border px-6 py-4 rounded-xl focus:border-accent focus:bg-secondary outline-none text-textPrimary transition-all placeholder:text-textMuted/30"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase font-bold text-textMuted tracking-widest pl-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-secondary/50 border border-border px-6 py-4 rounded-xl focus:border-accent focus:bg-secondary outline-none text-textPrimary transition-all placeholder:text-textMuted/30"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-textMuted tracking-widest pl-1">Your Message</label>
                    <textarea 
                      rows={5}
                      required
                      className="w-full bg-secondary/50 border border-border px-6 py-4 rounded-xl focus:border-accent focus:bg-secondary outline-none text-textPrimary transition-all resize-none placeholder:text-textMuted/30"
                      placeholder="How can I help you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <div className="space-y-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-accent hover:bg-[#FF4D6D] text-white py-5 rounded-2xl font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-glow hover:shadow-glow-strong flex items-center justify-center gap-4 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform" />}
                    </button>
                    
                    {error && (
                      <p className="text-accent text-[10px] uppercase font-bold tracking-widest text-center mt-2 animate-pulse">
                        {error}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

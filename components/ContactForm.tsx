
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-slopes scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-6xl font-bold text-midnight mb-20 text-center md:text-left reveal">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-24">
          <div className="reveal delay-100">
            <h3 className="font-sans font-bold text-midnight text-sm tracking-widest uppercase mb-10">Contact Information</h3>
            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-apres flex items-center justify-center text-white rounded-full text-xl shadow-md">📞</div>
                <div>
                  <p className="text-midnight/50 text-sm">Call Me</p>
                  <p className="font-sans font-bold text-midnight text-xl tracking-tight">+91 9392959397</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-apres flex items-center justify-center text-white rounded-full text-xl shadow-md">📧</div>
                <div>
                  <p className="text-midnight/50 text-sm">Email Me</p>
                  <p className="font-sans font-bold text-midnight text-xl text-break break-all tracking-tight">peravalilakshmiharshitha@gmail.com</p>
                </div>
              </div>
            </div>
            <a 
              href="https://linkedin.com/in/lakshmi-harshitha"
              target="_blank"
              className="inline-block bg-apres hover:bg-apres/90 text-white font-sans font-bold px-10 py-4 tracking-widest uppercase shadow-xl transition-all transform hover:-translate-y-1"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="reveal delay-200">
            <h3 className="font-sans font-bold text-midnight text-sm tracking-widest uppercase mb-10">Quick Message</h3>
            {submitted ? (
              <div className="bg-apres/10 border border-apres p-8 text-apres font-sans font-bold text-center reveal">
                <p className="text-2xl mb-2">✓</p>
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="reveal delay-300">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    className="w-full bg-transparent border-b-2 border-midnight/10 py-4 focus:border-apres outline-none font-sans text-lg transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="reveal delay-400">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    required
                    className="w-full bg-transparent border-b-2 border-midnight/10 py-4 focus:border-apres outline-none font-sans text-lg transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="reveal delay-500">
                  <textarea 
                    placeholder="How can I help you?" 
                    rows={4}
                    required
                    className="w-full bg-transparent border-b-2 border-midnight/10 py-4 focus:border-apres outline-none font-sans text-lg transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-midnight hover:bg-apres text-white font-sans font-bold py-5 tracking-widest uppercase transition-all shadow-lg reveal delay-600 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

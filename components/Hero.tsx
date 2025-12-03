import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, Database, Code2, Cloud, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const techStack = [
    { name: "Odoo", icon: null }, // Text only
    { name: "n8n", icon: Zap },
    { name: "Evolution API", icon: MessageCircle },
    { name: "OpenAI", icon: Sparkles },
    { name: "Gemini", icon: Sparkles },
    { name: "React", icon: Code2 },
    { name: "Tailwind", icon: null },
    { name: "Supabase", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "GitHub", icon: Code2 },
    { name: "Vercel", icon: Cloud },
  ];

  // Duplicate list for seamless marquee
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-10 w-96 h-96 bg-accent-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-brand-400 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-accent-300 rounded-full mix-blend-soft-light filter blur-[80px] opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <div className="animate-float inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg hover:bg-white/10 transition-all cursor-default group">
            <span className="flex h-3 w-3 rounded-full bg-accent-400 shadow-[0_0_15px_rgba(45,212,191,0.8)] group-hover:bg-accent-300 transition-colors"></span>
            <span className="text-brand-100 text-xs md:text-sm font-medium tracking-wide font-secondary">¡Impulsa tu negocio hoy!</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] drop-shadow-sm font-sans">
          Soluciones Tecnológicas <br className="hidden md:block" />
          <span className="relative inline-block mt-2">
             <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent-200 to-accent-400">con Propósito</span>
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-900 opacity-30 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-100/90 mb-10 leading-relaxed font-secondary font-light">
          Implemento <strong className="text-white font-medium">Odoo</strong>, creo automatizaciones con <strong className="text-white font-medium">n8n</strong> y desarrollo landing pages que no solo funcionan, sino que <span className="text-accent-300 border-b-2 border-accent-400/30 pb-0.5">inspiran confianza</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto font-secondary">
          <a 
            href="https://wa.me/51975615244" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-8 py-4 bg-accent-400 hover:bg-accent-300 text-brand-900 font-bold rounded-full transition-all shadow-[0_10px_20px_rgba(36,238,182,0.2)] hover:shadow-[0_15px_25px_rgba(36,238,182,0.3)] hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
            Hablemos por WhatsApp
          </a>
          <a 
            href="#contact" 
            className="group w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full transition-all border border-white/20 backdrop-blur-sm flex items-center justify-center gap-3 hover:border-white/40"
          >
            Solicitar Demo
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Tech Stack Marquee (Infinite Scroll) */}
        <div className="mt-24 pt-10 border-t border-white/5 w-full overflow-hidden">
            <p className="text-brand-300 text-xs font-bold mb-8 uppercase tracking-[0.2em] text-center font-secondary">Tecnologías Modernas & Potentes</p>
            
            <div className="flex overflow-hidden relative w-full mask-gradient">
                 {/* Mask for fading edges */}
                 <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-800 to-transparent z-10 hidden md:block"></div>
                 <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-600 to-transparent z-10 hidden md:block"></div>

                 <div className="flex animate-marquee whitespace-nowrap">
                    {marqueeItems.map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
                             {tech.icon && <tech.icon size={20} className="text-accent-300" />}
                             <span className="text-xl md:text-2xl font-bold text-white font-sans tracking-wide">
                                {tech.name}
                             </span>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-10">
        <svg className="block w-full h-12 md:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
           <path fill="#f4f1fd" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
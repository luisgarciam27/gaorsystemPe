import React from 'react';
import { CheckCircle2, Star, Zap, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    title: 'Experiencia Real',
    desc: 'He estado en la cancha implementando Odoo en retail, servicios y manufactura.',
    icon: Star
  },
  {
    title: 'Ahorro de Tiempo',
    desc: 'Mis automatizaciones te devuelven horas de vida cada semana.',
    icon: Zap
  },
  {
    title: 'Soluciones Integrales',
    desc: 'No soy solo código. Soy estrategia, diseño y funcionalidad en uno.',
    icon: ShieldCheck
  },
  {
    title: 'Siempre Acompañado',
    desc: 'Soporte cercano y humano. Nunca te dejaré en "visto".',
    icon: CheckCircle2
  }
];

const WhyMe: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-700 rounded-full opacity-10 blur-[100px] mix-blend-screen animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600 rounded-full opacity-10 blur-[100px] mix-blend-screen animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 text-accent-300 font-bold text-xs uppercase tracking-wider mb-4 border border-white/10 font-secondary">
                    ✨ ¿Por qué elegirme?
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight font-sans">
                    Tecnología humana para <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-brand-300">resultados mágicos</span>
                </h3>
                <p className="text-brand-100 text-lg mb-10 font-medium leading-relaxed font-secondary">
                    Mi enfoque es simple: uso la tecnología para resolver problemas reales y hacer tu vida más fácil y feliz.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group">
                            <div className="bg-brand-800/50 w-12 h-12 rounded-full flex items-center justify-center text-accent-400 mb-4 group-hover:scale-110 transition-transform">
                                <reason.icon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2 font-sans">{reason.title}</h4>
                            <p className="text-brand-100/70 text-sm leading-relaxed font-secondary">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Results Card */}
            <div className="bg-white text-slate-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-6 -right-6 bg-accent-400 text-brand-900 font-bold px-6 py-3 rounded-full shadow-lg transform rotate-12 font-secondary border-2 border-brand-900">
                    ¡Resultados Reales!
                </div>
                
                <h4 className="text-2xl font-bold mb-8 text-center font-sans">El impacto en tu negocio</h4>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-5 bg-brand-50 rounded-2xl border border-brand-100">
                        <p className="text-4xl font-black text-brand-600 mb-1 font-sans">-40%</p>
                        <p className="text-xs font-bold text-slate-500 uppercase font-secondary">Carga Operativa</p>
                    </div>
                    <div className="p-5 bg-accent-50 rounded-2xl border border-accent-100">
                        <p className="text-4xl font-black text-accent-500 mb-1 font-sans">24/7</p>
                        <p className="text-xs font-bold text-slate-500 uppercase font-secondary">Ventas Activas</p>
                    </div>
                    <div className="p-5 bg-pink-50 rounded-2xl border border-pink-100">
                        <p className="text-4xl font-black text-pink-500 mb-1 font-sans">x2</p>
                        <p className="text-xs font-bold text-slate-500 uppercase font-secondary">Velocidad</p>
                    </div>
                    <div className="p-5 bg-green-50 rounded-2xl border border-green-100">
                        <p className="text-4xl font-black text-green-500 mb-1 font-sans">100%</p>
                        <p className="text-xs font-bold text-slate-500 uppercase font-secondary">Control</p>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <a href="#contact" className="block w-full py-4 bg-brand-900 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors shadow-lg font-secondary">
                        ¡Yo quiero esto! 🚀
                    </a>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhyMe;
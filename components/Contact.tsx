
import React from 'react';
import { Mail, MessageCircle, Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import Logo from './Logo';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-50 relative overflow-hidden">
        {/* Decoracion de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-white rounded-b-[50%] shadow-sm z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-accent-100 text-accent-700 font-bold text-xs uppercase tracking-wider mb-4 font-secondary">
                📬 ¿Hablamos?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-sans">
                Empecemos algo <span className="text-brand-600">increíble</span>
            </h2>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Visual / Info Side - Violeta */}
                <div className="p-10 lg:p-16 bg-brand-900 text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Abstract shapes */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-brand-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 -ml-10 -mb-10"></div>
                    
                    <div className="relative z-10">
                        <div className="mb-10 opacity-90">
                           <Logo className="h-12" lightMode={true} />
                        </div>

                        <h3 className="text-3xl font-bold mb-6 font-sans">Información de Contacto</h3>
                        <p className="text-brand-100 mb-10 text-lg font-medium leading-relaxed font-secondary">
                            ¿Listo para optimizar tu negocio? Escríbeme y analicemos cómo la tecnología puede ser tu mejor inversión.
                        </p>
                        
                        <div className="space-y-6 font-secondary">
                            <a href="mailto:contacto@gaorsystem.pe" className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white/10 transition-all">
                                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-accent-400 group-hover:text-brand-900 transition-colors border border-white/10">
                                    <Mail size={24} />
                                </div>
                                <span className="font-bold text-lg">contacto@gaorsystem.pe</span>
                            </a>
                            <a href="https://wa.me/51975615244" className="flex items-center gap-4 group p-3 rounded-2xl hover:bg-white/10 transition-all">
                                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-accent-400 group-hover:text-brand-900 transition-colors border border-white/10">
                                    <MessageCircle size={24} />
                                </div>
                                <span className="font-bold text-lg">+51 975 615 244</span>
                            </a>
                        </div>
                    </div>

                    <div className="relative z-10 mt-12">
                        <p className="text-brand-200 text-sm mb-4 font-bold uppercase tracking-wider font-secondary">Sígueme en redes</p>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/10 hover:bg-white text-white hover:text-brand-600 rounded-full transition-all hover:scale-110 border border-white/10"><Facebook size={20} /></a>
                            <a href="#" className="p-3 bg-white/10 hover:bg-white text-white hover:text-brand-600 rounded-full transition-all hover:scale-110 border border-white/10"><Instagram size={20} /></a>
                            <a href="#" className="p-3 bg-white/10 hover:bg-white text-white hover:text-brand-600 rounded-full transition-all hover:scale-110 border border-white/10"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="p-10 lg:p-16 bg-white">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 font-sans">Tu Nombre</label>
                                <input 
                                    type="text" 
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-brand-400 focus:bg-white outline-none transition-all font-medium font-secondary text-slate-800"
                                    placeholder="Ej. Juan Pérez"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 font-sans">Tu Correo</label>
                                <input 
                                    type="email" 
                                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-brand-400 focus:bg-white outline-none transition-all font-medium font-secondary text-slate-800"
                                    placeholder="hola@ejemplo.com"
                                />
                            </div>
                        </div>
                         <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 font-sans">¿Qué te interesa?</label>
                            <div className="relative">
                                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-brand-400 focus:bg-white outline-none transition-all font-medium appearance-none text-slate-600 font-secondary">
                                    <option>Implementación Odoo</option>
                                    <option>Automatización n8n</option>
                                    <option>Landing Page / Web</option>
                                    <option>Asistente IA</option>
                                    <option>Otro</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2 ml-1 font-sans">Cuéntame más</label>
                            <textarea 
                                rows={4}
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-brand-400 focus:bg-white outline-none transition-all font-medium font-secondary text-slate-800 resize-none"
                                placeholder="Detalles de tu proyecto..."
                            ></textarea>
                        </div>
                        <button className="w-full py-4 bg-brand-600 text-white font-bold text-lg rounded-2xl hover:bg-brand-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 font-secondary">
                            Enviar Mensaje <Send size={20} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
      </div>
      
      <div className="text-center mt-20 text-slate-400 text-sm font-medium font-secondary">
        <p>&copy; {new Date().getFullYear()} GaorSystem Perú. Hecho con 💜 y código.</p>
      </div>
    </section>
  );
};

export default Contact;

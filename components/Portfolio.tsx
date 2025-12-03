
import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, Zap, ExternalLink, Users, Code2, Utensils, ChevronLeft, ChevronRight, MessageCircle, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';

const projects: PortfolioItem[] = [
  {
    id: '1',
    title: 'Uchu51 - Delivery App',
    category: 'FoodTech / Sistemas',
    description: 'Sistema integral para dark kitchens: pedidos automatizados, KDS en cocina y control de delivery en tiempo real.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1381&q=80',
    link: 'https://uchu51.vercel.app/',
    tags: ['Restaurantes', 'Automatización', 'App']
  },
  {
    id: '2',
    title: 'Olivia - CRM & Cotizador',
    category: 'SaaS / Gestión',
    description: 'Olvídate del Excel. Cotiza, gestiona clientes y organiza tu día en segundos desde PC o celular.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80',
    link: 'https://olivia-sandy.vercel.app/',
    tags: ['CRM', 'Asistente Virtual', 'n8n']
  },
  {
    id: '3',
    title: 'Crece Tribu',
    category: 'Comunidad & Educación',
    description: 'Plataforma vibrante para conectar emprendedores, compartir conocimiento y crecer en comunidad.',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
    link: 'https://crece-tribu.vercel.app/',
    tags: ['Comunidad', 'Landing Page', 'Growth']
  },
  {
    id: '4',
    title: 'MediCitas - Clínica',
    category: 'Salud / Reservas',
    description: 'Sistema de agendamiento médico con recordatorios automáticos por WhatsApp y gestión de historias clínicas.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    link: '#contact',
    tags: ['Salud', 'Turnos', 'WhatsApp API']
  },
  {
    id: '5',
    title: 'E-Shop Pro',
    category: 'E-commerce',
    description: 'Tienda online sincronizada con Odoo. Inventario en tiempo real y facturación automática.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    link: '#contact',
    tags: ['Odoo', 'Ventas', 'Stripe']
  }
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Max valid index logic
  const maxIndex = Math.max(0, projects.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-50 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 -ml-20 -mb-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
                <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-600 font-bold text-xs uppercase tracking-wider mb-4 font-secondary">
                    🎨 Casos de Éxito
                </span>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-sans">
                    Proyectos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-500">cobran vida</span>
                </h3>
                <p className="mt-4 text-slate-600 text-lg font-secondary">
                    Soluciones reales de alto impacto visual y funcional.
                </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3">
                <button 
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-sm active:scale-95"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={24} />
                </button>
                <button 
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all shadow-sm active:scale-95"
                    aria-label="Siguiente"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        {/* Carousel Container */}
        <div 
            className="relative overflow-hidden -mx-4 px-4 py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="flex-shrink-0 px-3 w-full md:w-1/2 lg:w-1/3"
                        style={{ width: `${100 / itemsPerPage}%` }}
                    >
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group block h-full"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] mb-5 aspect-[4/3] shadow-lg border border-slate-100 bg-slate-50 group-hover:shadow-2xl transition-all duration-500">
                                {/* Overlay Gradient on Hover */}
                                <div className="absolute inset-0 bg-brand-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
                                     <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="inline-flex items-center gap-2 bg-accent-400 text-brand-900 px-6 py-3 rounded-full font-bold shadow-xl hover:bg-white hover:scale-105 transition-all">
                                            Ver en Vivo <ExternalLink size={18} />
                                        </span>
                                     </div>
                                </div>

                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 z-20">
                                     <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-md text-brand-700 text-xs font-bold rounded-full shadow-sm border border-white">
                                        {project.category}
                                     </span>
                                </div>
                            </div>

                            <div className="px-2">
                                <h4 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors font-sans flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-accent-500" />
                                </h4>
                                
                                <p className="text-slate-500 font-medium mt-2 leading-relaxed font-secondary mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags?.map((tag, idx) => (
                                        <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 text-xs font-bold border border-brand-100 font-secondary">
                                            {tag === 'n8n' && <Zap size={10} className="fill-current" />}
                                            {tag === 'Software' && <Code2 size={10} />}
                                            {tag === 'Comunidad' && <Users size={10} />}
                                            {tag === 'Restaurantes' && <Utensils size={10} />}
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            
            {/* Indicators / Dots */}
            <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: Math.ceil(projects.length / (itemsPerPage === 3 ? 1 : 1)) }).map((_, idx) => {
                     // Simplified dots logic: one dot per possible starting position doesn't look great if there are many. 
                     // Let's show dots based on groups or just limit them. 
                     // For simplicity in this specific "infinite feeling" slider, let's map dots to total slides minus view.
                     if (idx > maxIndex) return null;
                     
                     return (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentIndex === idx ? 'w-8 bg-brand-600' : 'w-2 bg-slate-300 hover:bg-brand-300'
                            }`}
                            aria-label={`Ir al slide ${idx + 1}`}
                        />
                    );
                })}
            </div>
        </div>
        
        {/* CTA Section - The "Hook" */}
        <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-800 rounded-[2.5rem] transform rotate-1 opacity-50 blur-lg"></div>
            <div className="relative bg-brand-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl">
                 {/* Decorative Sparkles */}
                 <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Sparkles size={120} className="text-accent-400" />
                 </div>

                 <div className="relative z-10 max-w-xl">
                     <h4 className="text-3xl font-bold text-white mb-2 font-sans">¿Te gustaría un proyecto similar?</h4>
                     <p className="text-brand-100 font-secondary text-lg">
                        Ya sea una tienda online, un sistema de gestión o una landing page impactante. 
                        Cuéntame tu idea y la hacemos realidad.
                     </p>
                 </div>

                 <div className="relative z-10 shrink-0">
                     <a 
                        href="https://wa.me/51975615244?text=Hola,%20vi%20tu%20portafolio%20y%20me%20gustaría%20cotizar%20un%20proyecto%20similar."
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 bg-accent-400 text-brand-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(45,212,191,0.4)]"
                     >
                        <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                        Cotizar por WhatsApp
                     </a>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;

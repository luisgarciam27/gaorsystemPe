
import React from 'react';
import { LayoutGrid, Settings, FileCheck, Users, CheckCircle2, TrendingUp, Store, Receipt, PenTool, ArrowRight } from 'lucide-react';

const OdooSection: React.FC = () => {
  const features = [
    {
      title: "Implementación Completa",
      description: "Configuración integral de módulos clave.",
      icon: Store,
      color: "from-blue-400 to-indigo-500",
      items: [
        "Ventas, Compras e Inventario",
        "Punto de Venta (POS) Moderno",
        "Contabilidad Interna y Caja",
        "Gestión de Clientes (CRM)",
        "Reportes Administrativos"
      ]
    },
    {
      title: "Personalización a Medida",
      description: "Adaptamos Odoo a tu flujo real.",
      icon: PenTool,
      color: "from-purple-400 to-pink-500",
      items: [
        "Procesos especiales de venta",
        "Reglas de inventario avanzadas",
        "Modificaciones visuales del POS",
        "Desarrollo de módulos desde cero",
        "Automatización interna (Actions)"
      ]
    },
    {
      title: "Facturación SUNAT",
      description: "Cumplimiento fiscal 100% automático.",
      icon: Receipt,
      color: "from-amber-400 to-orange-500",
      items: [
        "Facturas y Boletas Electrónicas",
        "Notas de Crédito y Débito",
        "Envío y validación en tiempo real",
        "Resumen diario de boletas",
        "Integración RUC y Certificados"
      ]
    },
    {
      title: "Capacitación y Soporte",
      description: "No te dejamos solo en el proceso.",
      icon: Users,
      color: "from-teal-400 to-emerald-500",
      items: [
        "Enseñanza paso a paso al equipo",
        "Acompañamiento post-implementación",
        "Resolución rápida de consultas",
        "Mejora constante del sistema",
        "Manuales y guías de uso"
      ]
    }
  ];

  const benefits = [
    "Centralizas operaciones",
    "Control de inventarios",
    "Gestión precisa",
    "Cumplimiento SUNAT",
    "Reportes claros",
    "Sistema escalable"
  ];

  return (
    <section id="odoo-details" className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Active Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       
       {/* Animated Blobs */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-200/40 rounded-full blur-[100px] animate-blob"></div>
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section with Scale Animation on Scroll (simulated with CSS animation) */}
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white border border-brand-100 shadow-sm text-brand-700 font-bold text-xs uppercase tracking-wider mb-6 hover:scale-105 transition-transform cursor-default">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                </span>
                Especialidad Principal
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 font-sans leading-tight">
                Implementación <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-500 to-accent-500 animate-shimmer bg-[length:200%_100%]">Odoo</span> <br/>
                <span className="relative inline-block">
                    para Empresas
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-400 opacity-60 z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                    </svg>
                </span>
            </h2>
        </div>

        {/* Feature Grid - Super Interactive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {features.map((feature, idx) => (
                <div 
                    key={idx} 
                    className="group relative bg-white rounded-[2.5rem] p-1 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                    {/* Gradient Border Animation */}
                    <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                    
                    <div className="relative h-full bg-white rounded-[2.3rem] p-8 md:p-10 overflow-hidden">
                        {/* Background Decor inside card */}
                        <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full opacity-0 group-hover:opacity-10 transition-all duration-500 group-hover:scale-150`}></div>

                        <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                            {/* Animated Icon Container */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                                <feature.icon size={30} strokeWidth={2} className="group-hover:animate-pulse" />
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-sans group-hover:text-brand-600 transition-colors">{feature.title}</h3>
                                <p className="text-slate-500 font-medium mb-8 font-secondary">{feature.description}</p>
                                
                                <ul className="space-y-4">
                                    {feature.items.map((item, i) => (
                                        <li 
                                            key={i} 
                                            className="flex items-center gap-3 text-slate-700 font-secondary text-sm md:text-base group/item transform transition-all duration-300 hover:translate-x-2"
                                            style={{ transitionDelay: `${i * 50}ms` }}
                                        >
                                            <div className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover/item:bg-gradient-to-r ${feature.color} group-hover/item:text-white transition-all`}>
                                                <CheckCircle2 size={14} />
                                            </div>
                                            <span className="group-hover/item:text-slate-900 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Benefits Section - New Design */}
        <div className="relative bg-brand-900 rounded-[3rem] overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-600 rounded-full blur-[100px] opacity-30 animate-pulse animation-delay-2000"></div>

            <div className="relative z-10 p-10 md:p-20 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                     <div className="inline-block p-4 bg-white/10 rounded-2xl mb-6 backdrop-blur-md border border-white/10 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <TrendingUp size={40} className="text-accent-400" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-sans leading-tight">
                        Resultados que se <br/> 
                        <span className="text-accent-400">Sienten</span> y se <span className="text-accent-400">Ven</span>
                    </h3>
                    <p className="text-brand-100 text-lg font-secondary mb-8 max-w-md">
                        Transformamos la complejidad operativa en un sistema fluido, permitiéndote escalar sin perder el control.
                    </p>
                    <a 
                        href="https://wa.me/51975615244" 
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-white text-brand-900 px-8 py-4 rounded-full font-bold hover:bg-accent-300 hover:text-brand-900 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] group"
                    >
                        Solicitar Análisis Gratis
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {benefits.map((benefit, idx) => (
                        <div 
                            key={idx} 
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                        >
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent-400/20 text-accent-400 flex items-center justify-center group-hover:bg-accent-400 group-hover:text-brand-900 transition-colors duration-300">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span className="font-bold text-white font-secondary">{benefit}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default OdooSection;

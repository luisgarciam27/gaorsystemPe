import React from 'react';
import { Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="lg:w-1/2 relative group">
            {/* Decoración detrás de la imagen */}
            <div className="absolute top-8 left-8 w-full h-full bg-accent-200 rounded-[3rem] transform rotate-3 transition-transform group-hover:rotate-6"></div>
            <div className="absolute top-8 left-8 w-full h-full bg-brand-200 rounded-[3rem] transform -rotate-3 transition-transform group-hover:-rotate-6 opacity-60"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
              alt="GaorSystem Workspace" 
              className="relative z-10 rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px] border-8 border-white"
            />
             
             <div className="absolute -bottom-6 -right-6 z-20 bg-white p-5 rounded-3xl shadow-xl max-w-xs animate-float border border-brand-50">
                <div className="flex items-center gap-4">
                    <div className="bg-red-50 p-3 rounded-full text-red-500">
                        <Heart size={24} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-lg font-bold text-slate-800 font-sans">Pasión Digital</p>
                        <p className="text-sm text-slate-500 font-secondary">Amo lo que hago</p>
                    </div>
                </div>
             </div>
          </div>

          <div className="lg:w-1/2">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-600 font-bold text-xs uppercase tracking-wider mb-4 font-secondary">
                👋 Hola, bienvenido
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Soy GaorSystem Perú, <br/>
              <span className="text-brand-600">tu aliado tecnológico.</span>
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-secondary">
              <p>
                Me dedico a implementar sistemas, automatizar procesos y crear soluciones digitales 
                que ayudan a emprendedores y empresas en Perú a <span className="text-slate-900 font-medium">trabajar felices</span>, vender más y olvidarse del estrés operativo.
              </p>
              <p>
                No solo entrego código; entrego tranquilidad y eficiencia. Mi objetivo es que la tecnología
                sea tu mejor amiga, no un dolor de cabeza.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-6">
                <div className="bg-white p-6 rounded-2xl w-full sm:w-auto hover:bg-brand-50 transition-colors cursor-default border border-brand-100 shadow-sm">
                    <h4 className="font-extrabold text-brand-600 text-3xl mb-1 font-sans">+5 Años</h4>
                    <p className="text-sm font-medium text-slate-500 font-secondary">Creando Soluciones</p>
                </div>
                <div className="bg-white p-6 rounded-2xl w-full sm:w-auto hover:bg-accent-50 transition-colors cursor-default border border-accent-100 shadow-sm">
                    <h4 className="font-extrabold text-accent-500 text-3xl mb-1 font-sans">100%</h4>
                    <p className="text-sm font-medium text-slate-500 font-secondary">Compromiso Total</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
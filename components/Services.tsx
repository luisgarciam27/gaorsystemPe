import React from 'react';
import { ShoppingBag, Repeat, Bot, Globe, Code, FileText } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'odoo',
    title: 'Implementación Odoo',
    description: 'Tu negocio organizado. ERP completo para gestionar todo desde un solo lugar sin estrés.',
    icon: ShoppingBag,
    features: [
      'Punto de venta (POS)',
      'Control de Inventario',
      'Facturación SUNAT',
      'Contabilidad Fácil'
    ]
  },
  {
    id: 'automation',
    title: 'Automatizaciones n8n',
    description: 'Deja que los robots trabajen por ti. Conecta tus apps y ahorra horas cada día.',
    icon: Repeat,
    features: [
      'Bots de WhatsApp',
      'Pedidos Automáticos',
      'Google Sheets + CRM',
      'Notificaciones al instante'
    ]
  },
  {
    id: 'ai',
    title: 'Asistente Virtual IA',
    description: 'Un empleado estrella que no duerme. Chatbots inteligentes que venden y atienden 24/7.',
    icon: Bot,
    features: [
      'Atención Calidad Humana',
      'Consultas de Stock',
      'Cierre de Ventas',
      'Siempre Amable'
    ]
  },
  {
    id: 'web',
    title: 'Landing Pages',
    description: 'Webs que enamoran y venden. Diseño moderno para captar clientes desde el primer clic.',
    icon: Globe,
    features: [
      'Diseño "Wow"',
      'Súper Rápidas',
      'Optimizadas para Móvil',
      'Listas para Vender'
    ]
  },
  {
    id: 'custom',
    title: 'Software a Medida',
    description: '¿Necesitas algo único? Desarrollo herramientas específicas para tu forma de trabajar.',
    icon: Code,
    features: [
      'Sistemas de Turnos',
      'Apps Internas',
      'Paneles de Control',
      'Soluciones Creativas'
    ]
  },
  {
    id: 'facturacion',
    title: 'Facturación Smart',
    description: 'Dile adiós al papeleo manual. Emisión automática y reportes al instante.',
    icon: FileText,
    features: [
      'Sin Errores Humanos',
      'PDFs Automáticos',
      'Reportes al día',
      'Tranquilidad Total'
    ]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-100 text-accent-700 font-bold text-xs uppercase tracking-wider mb-4 font-secondary">
             🚀 Mis Superpoderes
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-sans">
            Todo lo que necesitas para <span className="text-brand-600 underline decoration-4 decoration-accent-300 underline-offset-4">despegar</span>
          </h2>
          <p className="text-slate-600 text-lg font-secondary">
            Combinamos tecnología avanzada con un diseño amigable para que tú solo te preocupes por crecer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
                key={service.id} 
                className={`bg-slate-50 rounded-[2rem] p-8 transition-all duration-300 border border-slate-100 hover:border-brand-100 hover:shadow-xl hover:-translate-y-2 group relative overflow-hidden`}
            >
              {/* Decorative gradient blob on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-200 to-brand-200 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity -mr-10 -mt-10"></div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm border border-slate-100">
                <service.icon size={32} />
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 mb-3 font-sans">{service.title}</h4>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium font-secondary">{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm font-medium text-slate-600 font-secondary">
                        <div className="w-5 h-5 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mr-3 text-xs shrink-0">✓</div>
                        {feature}
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
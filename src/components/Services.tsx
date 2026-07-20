import { Cpu, Eye, CreditCard, ShieldCheck, ArrowRight, Share2, Award, Heart, Utensils, Building2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Maquinaria HaaS Especializada',
      description: 'Accede a equipos industriales y tecnológicos de última generación sin la carga de una compra inicial. Actualizaciones de hardware y mantenimiento siempre incluidos.',
      icon: Award,
      color: 'from-brand-navy to-blue-800',
      tag: 'Hardware Especializado'
    },
    {
      title: 'Monitorización avanzada a través de IoT',
      description: 'Monitorea, gestiona y optimiza tus activos en tiempo real. Control de accesos sin fricción y telemetría de uso directo a través de nuestra plataforma inteligente.',
      icon: Cpu,
      color: 'from-brand-cyan to-cyan-500',
      tag: 'Internet of Things'
    },
    {
      title: 'Esquemas de Pago por Uso',
      description: 'Máxima flexibilidad financiera. Paga solo por el uso real auditado por software, o explota conjuntamente los activos dividiendo ganancias mensuales.',
      icon: CreditCard,
      color: 'from-blue-600 to-cyan-400',
      tag: 'Finanzas Flexibles'
    },
    {
      title: 'Soporte y Mantenimiento Integral',
      description: 'Nuestro Servicio de Asistencia Técnica (SAT) premium garantiza el óptimo rendimiento y continuidad operativa de tus equipos, minimizando interrupciones.',
      icon: ShieldCheck,
      color: 'from-cyan-500 to-blue-700',
      tag: 'Soporte Técnico'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background gradient accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-4">
            Qué Hacemos
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
            Gestión Inteligente de Activos para Impulsar tus Ingresos
          </h3>
          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Dotamos a hubs, coworkings, clínicas y centros operativos de la maquinaria especializada que sus clientes o empleados necesitan, a coste cero de inversión.
          </p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* 2x2 Grid for Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((svc, i) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={i}
                className="group bg-brand-gray-light hover:bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-brand-gray-mid hover:border-brand-cyan/30 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Visual Accent Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-navy to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Description of the service */}
                <div>
                  <div className="inline-flex p-3 rounded-2xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  <span className="block text-[10px] uppercase tracking-wider font-extrabold text-brand-cyan mb-2">
                    {svc.tag}
                  </span>
                  
                  <h4 className="font-display font-bold text-lg text-brand-navy group-hover:text-brand-navy mb-3 transition-colors">
                    {svc.title}
                  </h4>
                  
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">
                    {svc.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Section: 2 Core Modalities */}
        <div className="bg-gradient-to-br from-brand-dark to-brand-deep rounded-3xl p-8 sm:p-12 text-white border border-brand-navy/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Background Art */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0033660a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
          <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-brand-cyan/10 blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left modality text intro */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-brand-cyan/20 px-3 py-1.5 rounded-full text-brand-cyan text-xs font-semibold uppercase tracking-wider">
                <Share2 className="w-3.5 h-3.5" />
                <span>Formatos de Instalación</span>
              </div>
              <h4 className="font-display font-bold text-2xl sm:text-3xl">
                Dos Formas de Transformar tus Espacios
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                A través de nuestra propia infraestructura tecnológica basada en el Internet de las Cosas (IoT) y pasarelas de pago automatizadas, transformamos espacios físicos en nodos de alta productividad.
              </p>
            </div>

            {/* Right modality list columns */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Modality 1 */}
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl relative group hover:border-brand-cyan/40 hover:bg-white/10 transition-all duration-300">
                <span className="absolute -top-3 left-6 bg-brand-cyan text-brand-deep font-display font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Opción 1
                </span>
                <h5 className="font-display font-bold text-lg text-white mb-3 mt-1">
                  Espacios Compartidos
                </h5>
                <span className="block text-xs font-extrabold text-brand-cyan uppercase tracking-wider mb-2">
                  Coworkings, Dark Kitchens, Talleres
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Instalamos maquinaria especializada en zonas comunes bajo un modelo de <strong>explotación conjunta con ingresos compartidos (Revenue Share)</strong>. Los usuarios autónomos acceden al equipo mediante pago por uso móvil, y tu centro se lleva una <strong>comisión neta garantizada del rendimiento mensual</strong> solo por ceder el espacio, sin inversión inicial.
                </p>
              </div>

              {/* Modality 2 */}
              <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl relative group hover:border-brand-cyan/40 hover:bg-white/10 transition-all duration-300">
                <span className="absolute -top-3 left-6 bg-brand-navy text-white font-display font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider border border-brand-cyan/30 shadow-md">
                  Opción 2
                </span>
                <h5 className="font-display font-bold text-lg text-white mb-3 mt-1">
                  Centros Operativos
                </h5>
                <span className="block text-xs font-extrabold text-brand-cyan uppercase tracking-wider mb-2">
                  Clínicas, Talleres Mecánicos, Labs
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Suministramos las herramientas que tus empleados necesitan para abrir nuevas líneas de servicio premium. Estructuramos el acceso mediante <strong>tarifas planas de uso auditadas por telemetría</strong> o suscripciones operativas flexibles a mes vencido. Pagas a medida que los equipos generan facturación.
                </p>
              </div>

            </div>

          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>En EQUIPY nos ocupamos de la adquisición, integración remota y el mantenimiento integral preventivo.</p>
            <a
              href="#simulador"
              className="text-brand-cyan font-bold hover:underline flex items-center space-x-1 group"
            >
              <span>Prueba el Simulador ROI HaaS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Sectors and Target Clients Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-3">
              Sectores y Clientes de Destino
            </span>
            <h4 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy leading-tight">
              Soluciones HaaS a Medida de tu Sector
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sector 1: Salud & Bienestar */}
            <div className="bg-brand-gray-light border border-brand-gray-mid p-8 rounded-3xl relative group hover:border-brand-cyan/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-rose-500/10 text-rose-500 rounded-2xl flex items-center justify-center mb-6 font-bold group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                <Heart className="w-6 h-6" />
              </div>
              <h5 className="font-display font-bold text-lg text-brand-navy mb-3">
                Salud, Estética y Bienestar
              </h5>
              <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-4 block">
                Centros profesionales
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Maquinaria tecnológica especializada para <strong>Centros de Fisioterapia, Clínicas de Rehabilitación y Centros de Estética</strong>. Acceso instantáneo a aparatología avanzada bajo el esquema de pago por uso de forma flexible y con mantenimiento SAT integral.
              </p>
            </div>

            {/* Sector 2: Gastronomía & Alimentación */}
            <div className="bg-brand-gray-light border border-brand-gray-mid p-8 rounded-3xl relative group hover:border-brand-cyan/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 font-bold group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <Utensils className="w-6 h-6" />
              </div>
              <h5 className="font-display font-bold text-lg text-brand-navy mb-3">
                Gastronomía, Hostelería y Alimentación
              </h5>
              <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-4 block">
                Producción y cocina profesional
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Suministro de equipos industriales de última generación para <strong>Ghost Kitchens, Hubs Gastronómicos, Obradores de Panadería/Pastelería, Restaurantes y Hoteles</strong> en Barcelona, medido a través de telemetría segura.
              </p>
            </div>

            {/* Sector 3: Espacios Compartidos & Coworkings */}
            <div className="bg-brand-gray-light border border-brand-gray-mid p-8 rounded-3xl relative group hover:border-brand-cyan/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-brand-navy/10 text-brand-navy rounded-2xl flex items-center justify-center mb-6 font-bold group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                <Building2 className="w-6 h-6" />
              </div>
              <h5 className="font-display font-bold text-lg text-brand-navy mb-3">
                Espacios Compartidos y de Trabajo
              </h5>
              <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mb-4 block">
                Hubs de valor añadido
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Soluciones operativas de alta gama para <strong>Coworkings, Centros de Negocio, Hubs Tecnológicos y Talleres compartidos</strong>. Potencia tu oferta con servicios de valor sin realizar grandes desembolsos de capital inicial.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { ArrowRight, CheckCircle2, DollarSign, RefreshCw, Layers, ShieldX } from 'lucide-react';

export default function AboutUs() {
  const [activeModel, setActiveModel] = useState<'capex' | 'opex'>('opex');

  return (
    <section id="quienes-somos" className="py-24 bg-brand-gray-light border-y border-brand-gray-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-4">
            Quiénes Somos
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
            Redefiniendo el Acceso a la Tecnología Especializada
          </h3>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Mission/Story */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="font-display font-semibold text-2xl text-brand-navy">
              EQUIPY: Más servicios, más ingresos. Cero inversión.
            </h4>
            
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              En EQUIPY redefinimos la forma en que las empresas y los centros de trabajo compartidos acceden a la tecnología y maquinaria especializada de alta gama. Somos una firma de gestión de activos inteligentes especializada en el modelo <strong>Hardware-as-a-Service (HaaS)</strong>.
            </p>
            
            <p className="text-gray-600 text-base leading-relaxed">
              Creemos que la falta de capital inicial (CapEx) nunca debería ser un freno para el crecimiento de un negocio ni para la productividad de sus profesionales. Por eso, actuamos como el socio tecnológico estratégico que asume el 100% del riesgo financiero y operativo, transformando maquinaria especializada en soluciones ágiles, conectadas y de pago por uso. Nos encargamos de comprar, conectar y monitorizar el equipamiento de vanguardia para que nuestros partners solo tengan que preocuparse de una cosa: ver crecer su negocio y su facturación.
            </p>

            <div className="bg-brand-navy text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
              {/* Abstract decorative graphic inside the card */}
              <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-24 h-24 bg-brand-cyan/10 rounded-full blur-xl pointer-events-none" />
              
              <h5 className="font-display font-bold text-lg text-brand-cyan mb-2">
                Nuestra Promesa Operativa
              </h5>
              <p className="text-sm text-gray-200 leading-relaxed">
                "Dotamos a tu negocio de la maquinaria especializada de alta gama que tus clientes o empleados necesitan, asumiendo toda la inversión del activo y su soporte técnico. Multiplicas tu oferta, reduces tus riesgos, aumentas tus ingresos."
              </p>
            </div>
          </div>

          {/* Right Column: Paradigm Shift CAPEX to OPEX */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-brand-gray-mid relative">
            
            <div className="mb-6">
              <span className="text-xs uppercase font-extrabold text-brand-cyan block mb-2 tracking-wider">El Cambio de Paradigma</span>
              <h4 className="font-display font-bold text-xl sm:text-2xl text-brand-navy">
                Del CAPEX al OPEX
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                La industria está transitando de un modelo de propiedad a un modelo de uso eficiente. Transformar la inversión en capital (CAPEX) en gasto operativo (OPEX) es una decisión estratégica de agilidad.
              </p>
            </div>

            {/* Selector Toggles */}
            <div className="grid grid-cols-2 bg-brand-gray-light p-1.5 rounded-xl border border-brand-gray-mid mb-8">
              <button
                onClick={() => setActiveModel('capex')}
                className={`py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeModel === 'capex'
                    ? 'bg-red-50 text-red-700 shadow-sm border border-red-200'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Compra Tradicional (CAPEX)
              </button>
              <button
                onClick={() => setActiveModel('opex')}
                className={`py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeModel === 'opex'
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                HaaS: Hardware como Servicio
              </button>
            </div>

            {/* Model Breakdown Details */}
            {activeModel === 'capex' ? (
              <div className="space-y-4 animate-fade-in text-gray-600 text-sm">
                <div className="flex items-start space-x-3 bg-red-50/50 p-4 rounded-xl border border-red-100">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600 mt-0.5">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy mb-1">Inversión Inicial Devastadora</h5>
                    <p>Desembolso total del 100% del valor del activo al inicio, drenando la liquidez e interrumpiendo las reservas de caja críticas.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-red-50/50 p-4 rounded-xl border border-red-100">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600 mt-0.5">
                    <ShieldX className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy mb-1">Riesgo Total de Obsolescencia</h5>
                    <p>La devaluación del hardware es asumida completamente por ti. La máquina envejece y reemplazarla requiere una nueva gran inversión.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-red-50/50 p-4 rounded-xl border border-red-100">
                  <div className="bg-red-100 p-2 rounded-lg text-red-600 mt-0.5">
                    <RefreshCw className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy mb-1">Mantenimiento y SAT Complejos</h5>
                    <p>Costes de asistencia técnica imprevistos, búsqueda de piezas de repuesto difíciles y costes fijos de mantenimiento constantes.</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-fade-in text-gray-600 text-sm">
                <div className="flex items-start space-x-3 bg-brand-cyan/5 p-4 rounded-xl border border-brand-cyan/20">
                  <div className="bg-brand-cyan/20 p-2 rounded-lg text-brand-navy mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy mb-1 text-brand-navy">Desembolso Inicial Cero €</h5>
                    <p>Disfrutas del activo desde el primer día sin gastar capital. La inversión de adquisición la asume en su totalidad EQUIPY.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-brand-cyan/5 p-4 rounded-xl border border-brand-cyan/20">
                  <div className="bg-brand-cyan/20 p-2 rounded-lg text-brand-navy mt-0.5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy mb-1 text-brand-navy">Tecnología Siempre Actualizada</h5>
                    <p>Sin riesgo tecnológico. Al finalizar los plazos de uso u obsolescencia, actualizamos los equipos por modelos de última generación.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-brand-cyan/5 p-4 rounded-xl border border-brand-cyan/20">
                  <div className="bg-brand-cyan/20 p-2 rounded-lg text-brand-navy mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-navy mb-1 text-brand-navy">Mantenimiento y SAT Premium Incluidos</h5>
                    <p>Asistencia técnica experta y mantenimiento preventivo garantizados sin costes añadidos. Nos ocupamos de todo para garantizar la continuidad.</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-brand-gray-mid flex items-center justify-between text-xs text-gray-500">
              <span>* Fuente: Análisis comparativo de liquidez EQUIPY HaaS</span>
              <a href="#simulador" className="text-brand-cyan font-bold flex items-center space-x-1 hover:underline">
                <span>Ver simulación en vivo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
          
        </div>

        {/* ----------------- SECCIÓN DE FUNDADORES Y VISIÓN ----------------- */}
        <div className="mt-24 pt-16 border-t border-brand-gray-mid">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 px-3 py-1 rounded-full mb-3 inline-block">
              El Equipo de Liderazgo
            </span>
            <h4 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy">
              Nuestros Fundadores
            </h4>
            <p className="text-gray-600 text-sm sm:text-base mt-3">
              Uniendo experiencia en finanzas, ingeniería operativa, telemática IoT y gestión de activos para liderar la revolución del Hardware-as-a-Service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Carlos Pérez */}
            <div className="bg-white rounded-3xl p-8 border border-brand-gray-mid shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-brand-navy/10 text-brand-navy rounded-2xl flex items-center justify-center font-display font-extrabold text-2xl mb-6">
                  CP
                </div>
                <h5 className="font-display font-extrabold text-xl text-brand-navy">
                  Carlos Pérez
                </h5>
                <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4">
                  Co-Fundador & CEO
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Ingeniero de Sistemas con MBA. Lidera la visión estratégica global, el desarrollo de negocio y la expansión comercial de EQUIPY. Su enfoque se centra en alianzas corporativas, viabilidad financiera y en abrir nuevas oportunidades de mercado para el modelo HaaS.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-gray-light text-[11px] text-gray-400 font-mono flex items-center justify-between">
                <span>ESTRATEGIA & COMERCIAL</span>
                <span>BARCELONA</span>
              </div>
            </div>

            {/* Raul Correia */}
            <div className="bg-white rounded-3xl p-8 border border-brand-gray-mid shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-brand-navy/10 text-brand-navy rounded-2xl flex items-center justify-center font-display font-extrabold text-2xl mb-6">
                  RC
                </div>
                <h5 className="font-display font-extrabold text-xl text-brand-navy">
                  Raúl Correia
                </h5>
                <p className="text-xs font-semibold text-brand-cyan uppercase tracking-wider mb-4">
                  Co-Fundador & CTO
                </p>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  Ingeniero de Sistemas con MBA. Aporta su perfil tecnológico especializado en hardware, sistemas complejos y project management. Responsable de planificar el despliegue técnico de maquinaria y dirigir la ejecución operativa de los proyectos físicos.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-gray-light text-[11px] text-gray-400 font-mono flex items-center justify-between">
                <span>HARDWARE, SISTEMAS & PM</span>
                <span>BARCELONA</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

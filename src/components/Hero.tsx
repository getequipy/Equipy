import { ArrowRight, Cpu, ShieldCheck, TrendingUp } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-brand-gray-light pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0da19c08_1px,transparent_1px),linear-gradient(to_bottom,#0da19c08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-navy/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex self-center lg:self-start items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-full text-brand-cyan text-xs font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Innovación HaaS (Hardware-as-a-Service)</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-navy leading-tight tracking-tight">
              Equipy: Más servicios, más ingresos.{' '}
              <span className="text-brand-cyan block sm:inline">
                Cero inversión.
              </span>
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
              Maquinaria especializada sin Inversión Inicial. Paga por Uso. Conectado por IoT. Expandir tus operaciones nunca fue tan simple ni tan seguro.
            </p>

            {/* Explainer card for HaaS */}
            <div className="bg-[#edf6f9] border border-[#83c5be]/50 rounded-2xl p-4 sm:p-5 text-left max-w-2xl shadow-sm">
              <h4 className="font-display font-bold text-sm text-[#006d77] uppercase tracking-wide flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#006d77] block"></span>
                ¿Qué es el modelo HaaS?
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Proviene del inglés <strong className="text-[#006d77]">Hardware-as-a-Service</strong> y se traduce en español como <strong className="text-[#006d77]">"Hardware como Servicio"</strong>. 
                Significa que <strong className="text-slate-800">EQUIPY compra la maquinaria industrial premium por ti</strong>, asumiendo toda la inversión inicial (CapEx) y el mantenimiento técnico continuo. Tu negocio solo paga de forma flexible por el uso real o mediante suscripción (OpEx).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onDiscoverClick}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-cyan hover:bg-[#0c908c] text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(13,161,156,0.25)] hover:shadow-[0_4px_25px_rgba(13,161,156,0.4)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Descubre Nuestras Soluciones</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#simulador"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 border border-brand-navy/10 hover:border-brand-cyan/50 hover:bg-brand-navy/5 text-brand-navy font-semibold px-8 py-4 rounded-xl transition-all duration-200"
              >
                <span>Simulador de ROI</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-brand-gray-mid max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-brand-cyan">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-display font-bold text-lg text-brand-navy">0€</span>
                </div>
                <span className="text-xs text-gray-500 block mt-1">Inversión CapEx</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-brand-cyan">
                  <Cpu className="w-4 h-4" />
                  <span className="font-display font-bold text-lg text-brand-navy">100%</span>
                </div>
                <span className="text-xs text-gray-500 block mt-1">Conectividad IoT</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 text-brand-cyan">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-display font-bold text-lg text-brand-navy">Revenue Share</span>
                </div>
                <span className="text-xs text-gray-500 block mt-1">Explotación Conjunta</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-square lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden border border-brand-gray-mid shadow-[0_20px_50px_rgba(7,19,41,0.12)] bg-white group">
              {/* Outer Cyan Ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500 z-10 pointer-events-none" />
              
              <img
                src="/src/assets/images/equipy_premium_machinery_1782835890006.jpg"
                alt="Equipy Connected Machinery with IoT Telemetry"
                className="w-full h-full object-cover select-none scale-102 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Glowing Indicator UI overlay representing Telemetry */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-brand-gray-mid rounded-xl p-4 z-20 shadow-lg flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2.5 h-2.5 bg-brand-cyan rounded-full animate-ping" />
                  <div className="w-2.5 h-2.5 bg-brand-cyan rounded-full absolute" />
                  <div>
                    <span className="text-xs text-brand-cyan font-mono font-bold uppercase tracking-wider block">Telemetría Activa</span>
                    <span className="text-[10px] text-brand-navy/80 font-medium">Equipos Conectados y Transmitiendo</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-brand-navy bg-brand-gray-light border border-brand-gray-mid px-2.5 py-1 rounded">
                  Barcelona_Node_01
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

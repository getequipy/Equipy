import { ArrowRight, Cpu, ShieldCheck, TrendingUp } from 'lucide-react';
import heroImage from '../assets/images/equipy_coworking_machinery_1783932675005.jpg';

interface HeroProps {
  onDiscoverClick: () => void;
}

export default function Hero({ onDiscoverClick }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-24 flex items-center overflow-hidden bg-brand-deep"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={heroImage}
          alt="Equipy Connected Machinery with IoT Telemetry"
          className="w-full h-full object-cover select-none object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay with brand color gradients for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002226]/95 via-[#00373d]/90 to-[#005a63]/40 z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002226] via-transparent to-transparent opacity-70 z-1 pointer-events-none" />
      </div>

      {/* Background Decorative Grid Over the image but under text */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#83c5be0d_1px,transparent_1px),linear-gradient(to_bottom,#83c5be0d_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl flex flex-col space-y-6 text-left">
          
          {/* Tag */}
          <div className="inline-flex self-start items-center space-x-2 bg-brand-cyan/20 border border-brand-cyan/30 px-3 py-1.5 rounded-full text-brand-cyan text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Innovación HaaS (Hardware-as-a-Service)</span>
          </div>

          {/* Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            Equipy: Más servicios, más ingresos.{' '}
            <span className="text-brand-cyan block sm:inline">
              Cero inversión.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-100 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
            Maquinaria especializada sin Inversión Inicial. Paga por Uso. Monitorización por IoT. Expande tus operaciones agregando valor a tus clientes de forma simple y segura.
          </p>

          {/* Explainer card for HaaS on Dark Background */}
          <div className="bg-brand-deep/60 backdrop-blur-md border border-brand-cyan/20 rounded-2xl p-5 text-left max-w-2xl shadow-xl">
            <h4 className="font-display font-bold text-sm text-brand-cyan uppercase tracking-wide flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-cyan block animate-pulse"></span>
              ¿Qué es el modelo HaaS?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
              Proviene del inglés <strong className="text-brand-cyan font-semibold">Hardware-as-a-Service</strong> y se traduce en español como <strong className="text-brand-cyan font-semibold">"Hardware como Servicio"</strong>. 
              Significa que <strong className="text-white font-medium">EQUIPY compra la maquinaria industrial premium por ti</strong>, asumiendo toda la inversión inicial (CapEx) y el mantenimiento técnico continuo. Tu negocio solo paga de forma flexible por el uso real o mediante suscripción (OpEx).
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button
              onClick={onDiscoverClick}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-cyan hover:bg-[#99d5cf] text-brand-deep font-bold px-8 py-4 rounded-xl shadow-[0_4px_20px_rgba(131,197,190,0.3)] hover:shadow-[0_4px_25px_rgba(131,197,190,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Descubre Nuestras Soluciones</span>
              <ArrowRight className="w-5 h-5 text-brand-deep" />
            </button>
            
            <a
              href="#simulador"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-brand-cyan/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              <span>Simulador de ROI</span>
            </a>
          </div>

          {/* Micro Highlights */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-lg">
            <div>
              <div className="flex items-center space-x-2 text-brand-cyan">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span className="font-display font-bold text-lg text-white">0€</span>
              </div>
              <span className="text-xs text-gray-300 block mt-1">Inversión CapEx</span>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-brand-cyan">
                <Cpu className="w-4 h-4 text-brand-cyan" />
                <span className="font-display font-bold text-lg text-white">100%</span>
              </div>
              <span className="text-xs text-gray-300 block mt-1">Conectividad IoT</span>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-brand-cyan">
                <TrendingUp className="w-4 h-4 text-brand-cyan" />
                <span className="font-display font-bold text-lg text-white">Variables</span>
              </div>
              <span className="text-xs text-gray-300 block mt-1">Pago por Uso</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating active telemetry tag at the bottom-right of the whole screen */}
      <div className="absolute bottom-6 right-6 bg-brand-deep/80 backdrop-blur-md border border-brand-cyan/20 rounded-xl p-3 shadow-2xl flex items-center space-x-3 z-10 hidden sm:flex">
        <div className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
        </div>
        <div>
          <span className="text-[10px] text-brand-cyan font-mono font-bold uppercase tracking-wider block">Demo de Telemetría IoT</span>
          <span className="text-[9px] text-gray-300">Simulación en Vivo (Fase Piloto)</span>
        </div>
      </div>
    </section>
  );
}

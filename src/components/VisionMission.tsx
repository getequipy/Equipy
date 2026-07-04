import { Target, Compass, Sparkles } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-navy to-brand-dark text-white relative overflow-hidden">
      {/* Visual ornaments */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-white/10 border border-white/10 inline-block px-3.5 py-1.5 rounded-full mb-4">
            Propósito y Valores
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Nuestra Visión y Misión
          </h3>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Vision Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300 group shadow-lg">
            <div className="inline-flex p-4 rounded-2xl bg-brand-cyan/10 text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-8 h-8" />
            </div>
            
            <h4 className="font-display font-extrabold text-2xl text-white mb-4 flex items-center space-x-2">
              <span>Nuestra Visión</span>
              <Sparkles className="w-4 h-4 text-brand-cyan animate-pulse" />
            </h4>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              "Ser el socio estratégico líder para negocios que buscan escalar operaciones y servicios a través de soluciones HaaS inteligentes y sostenibles, impulsando la innovación y la eficiencia en cada sector."
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300 group shadow-lg">
            <div className="inline-flex p-4 rounded-2xl bg-brand-cyan/10 text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8" />
            </div>
            
            <h4 className="font-display font-extrabold text-2xl text-white mb-4">
              Nuestra Misión
            </h4>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              "Empoderar a nuestros clientes con acceso sin precedentes a tecnología de hardware avanzada, eliminando barreras de inversión y promoviendo un modelo de negocio flexible y conectado que maximice sus ingresos y capacidad de servicio."
            </p>
          </div>

        </div>

        {/* Corporate core value message */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-[0.2em]">
            EQUIPY INTELLIGENT ASSET MANAGEMENT • VALORES CORPORATIVOS
          </p>
          <p className="text-xs text-brand-cyan mt-2 font-semibold">
            Transparencia • Innovación • Eficiencia Financiera • Escalabilidad Sostenible
          </p>
        </div>

      </div>
    </section>
  );
}

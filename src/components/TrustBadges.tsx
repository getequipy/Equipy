import { ComponentType } from 'react';
import { ShieldCheck, Award, Lock, FileCheck, RefreshCw, Leaf } from 'lucide-react';

interface Badge {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  code: string;
}

export default function TrustBadges() {
  const badges: Badge[] = [
    {
      id: 'haas-cert',
      title: 'Garantía HaaS Certificada',
      subtitle: 'Modelo de Uso Protegido',
      description: 'Certificamos contractualmente riesgo financiero cero. EQUIPY asume el 100% de la inversión inicial (CapEx) y el riesgo de obsolescencia tecnológica.',
      icon: ShieldCheck,
      code: 'EQ-HAAS-2026'
    },
    {
      id: 'dist-oficial',
      title: 'Distribuidor y Partner Oficial',
      subtitle: 'Marcas de Primer Nivel',
      description: 'Alianzas directas y autorizadas con fabricantes líderes mundiales como Rational, Mychef, Alma Lasers y Zimmer, garantizando equipos 100% originales.',
      icon: Award,
      code: 'PARTNER-GOLD'
    },
    {
      id: 'iot-security',
      title: 'Seguridad Telemática IoT',
      subtitle: 'Conexión Cifrada y Segura',
      description: 'Infraestructura IoT de monitorización protegida bajo estándares ISO 27001 y cumplimiento estricto del RGPD para la privacidad de datos de tu negocio.',
      icon: Lock,
      code: 'TLS-1.3-SECURE'
    },
    {
      id: 'ce-marking',
      title: 'Marcado CE de Conformidad',
      subtitle: 'Seguridad Homologada',
      description: 'Toda la maquinaria facilitada cumple rigurosamente con las directivas de seguridad, salud y protección medioambiental de la Unión Europea.',
      icon: FileCheck,
      code: 'CE-COMPLIANT'
    },
    {
      id: 'sat-homologado',
      title: 'Soporte Técnico Homologado',
      subtitle: 'Mantenimiento Certificado',
      description: 'Servicios de Asistencia Técnica (SAT) preventivos y correctivos ejecutados por ingenieros formados por el fabricante, utilizando piezas de repuesto originales.',
      icon: RefreshCw,
      code: 'SAT-OFFICIAL'
    },
    {
      id: 'esg-sustainable',
      title: 'Compromiso Circular Sostenible',
      subtitle: 'Eco-Eficiencia Industrial',
      description: 'Fomentamos la economía circular reacondicionando equipos y seleccionando hardware con certificaciones energéticas de alta eficiencia (A+++).',
      icon: Leaf,
      code: 'ESG-GREEN-2026'
    }
  ];

  return (
    <section id="certificaciones" className="py-20 bg-brand-gray-light/60 border-b border-brand-gray-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-3">
            Garantías y Certificaciones
          </span>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
            Respaldados por los Estándares Más Exigentes del Sector
          </h3>
          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
            Operamos con total transparencia, rigor legal y técnico para que expandas tus servicios industriales con total tranquilidad y la máxima seguridad jurídica.
          </p>
          <div className="w-12 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={badge.id}
                className="group bg-white rounded-3xl p-6 border border-brand-gray-mid/50 hover:border-brand-cyan/45 hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top decorative glow */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Icon & Code Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="p-3 bg-brand-cyan/10 text-brand-navy group-hover:bg-brand-cyan group-hover:text-white rounded-2xl transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-gray-400 bg-brand-gray-light px-2.5 py-1 rounded-md tracking-wider">
                      {badge.code}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <span className="text-[10px] font-bold uppercase text-brand-cyan tracking-wider block mb-0.5">
                      {badge.subtitle}
                    </span>
                    <h4 className="font-display font-extrabold text-base text-brand-navy group-hover:text-brand-cyan transition-colors duration-200">
                      {badge.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-[12px] sm:text-xs leading-relaxed font-light mb-4">
                    {badge.description}
                  </p>
                </div>

                {/* Verification Check */}
                <div className="pt-4 border-t border-brand-gray-light flex items-center justify-between text-[10px] font-medium text-gray-400">
                  <span className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block"></span>
                    <span>Activo & Auditado</span>
                  </span>
                  <span className="font-mono">Verificación 2026</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small trust banner footer */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 border border-dashed border-brand-gray-mid p-5 rounded-2xl bg-white/50 text-center sm:text-left">
          <div className="flex -space-x-2">
            <span className="w-8 h-8 rounded-full bg-brand-navy text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">EU</span>
            <span className="w-8 h-8 rounded-full bg-brand-cyan text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">ISO</span>
            <span className="w-8 h-8 rounded-full bg-slate-800 text-white text-[9px] font-bold flex items-center justify-center border-2 border-white shadow-sm">CE</span>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-500 max-w-xl leading-normal">
            Todos nuestros contratos HaaS están estructurados de acuerdo con el <strong>Código de Comercio de España</strong> y las normativas europeas de arrendamiento operativo tecnológico, garantizando total seguridad jurídica y transparencia tributaria (100% deducible fiscalmente como OpEx).
          </p>
        </div>

      </div>
    </section>
  );
}

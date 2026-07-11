import { useState } from 'react';
import { Utensils, Sparkles, Activity } from 'lucide-react';

interface Brand {
  name: string;
  sector: string;
  description: string;
  origin: string;
  specialty: string;
  logoUrl: string;
  fallbackLogoUrl?: string;
}

export default function PartnerBrands() {
  const brands: Brand[] = [
    // Gastronomía y Cocina
    {
      name: 'Rational',
      sector: 'Gastronomía y Cocina',
      description: 'Estándar de oro mundial en hornos de convección inteligentes y sistemas de cocción multifuncional iCombi Pro.',
      origin: 'Alemania',
      specialty: 'Cocción Inteligente',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Rational_AG_logo.svg',
      fallbackLogoUrl: 'https://logo.clearbit.com/rational-online.com'
    },
    {
      name: 'Mychef',
      sector: 'Gastronomía y Cocina',
      description: 'Hornos profesionales de alta precisión y tecnología de inyección de vapor avanzado para alta cocina.',
      origin: 'España',
      specialty: 'Precisión de Vapor',
      logoUrl: 'https://logo.clearbit.com/mychefcooking.com',
      fallbackLogoUrl: 'https://mychefpro.com/wp-content/uploads/2021/04/Mychef_logo-1.png'
    },
    {
      name: 'Fagor',
      sector: 'Gastronomía y Cocina',
      description: 'Equipamiento industrial para hostelería y sistemas avanzados de lavado y preparación de alta gama.',
      origin: 'España',
      specialty: 'Equipamiento Integral',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Fagor_Logo.svg',
      fallbackLogoUrl: 'https://logo.clearbit.com/fagorindustrial.com'
    },
    
    // Estética y Dermatología
    {
      name: 'Alma Lasers',
      sector: 'Estética y Dermatología',
      description: 'Sistemas láser de diodo, radiofrecuencia y ultrasonido de vanguardia para tratamientos dermoestéticos avanzados.',
      origin: 'Israel',
      specialty: 'Láser Médico-Estético',
      logoUrl: 'https://logo.clearbit.com/almalasers.com',
      fallbackLogoUrl: 'https://logo.clearbit.com/almalasers.co.il'
    },
    {
      name: 'Lumenis',
      sector: 'Estética y Dermatología',
      description: 'Líder histórico pionero en soluciones clínicas mínimamente invasivas y tecnología láser de pulso ultra-rápido.',
      origin: 'EE.UU.',
      specialty: 'Sistemas Lumínicos',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Lumenis_logo.svg',
      fallbackLogoUrl: 'https://logo.clearbit.com/lumenis.com'
    },
    {
      name: 'Allergan Aesthetics',
      sector: 'Estética y Dermatología',
      description: 'Referente absoluto mundial en tratamientos estéticos respaldados por ciencia avanzada y medicina estética de élite.',
      origin: 'EE.UU.',
      specialty: 'Medicina Estética',
      logoUrl: 'https://logo.clearbit.com/allerganaesthetics.com',
      fallbackLogoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Allergan_logo.svg'
    },

    // Rehabilitación y Fisioterapia
    {
      name: 'Zimmer MedizinSysteme',
      sector: 'Rehabilitación y Fisio',
      description: 'Sistemas alemanes de crioterapia por aire, ondas de choque y estimulación electromagnética de alta energía.',
      origin: 'Alemania',
      specialty: 'Crioterapia y Ondas',
      logoUrl: 'https://logo.clearbit.com/zimmer.de',
      fallbackLogoUrl: 'https://logo.clearbit.com/zimmerusa.com'
    },
    {
      name: 'Chattanooga',
      sector: 'Rehabilitación y Fisio',
      description: 'El mayor fabricante global de equipos de rehabilitación clínica para tratar trastornos musculoesqueléticos.',
      origin: 'EE.UU.',
      specialty: 'Sistemas de Fisioterapia',
      logoUrl: 'https://logo.clearbit.com/chattanoogarehab.com',
      fallbackLogoUrl: 'https://logo.clearbit.com/djoglobal.com'
    },
    {
      name: 'Compex',
      sector: 'Rehabilitación y Fisio',
      description: 'Tecnología líder absoluta en electroestimulación muscular inteligente para rendimiento, recuperación y dolor.',
      origin: 'Suiza',
      specialty: 'Electroestimulación',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Compex_logo.svg',
      fallbackLogoUrl: 'https://logo.clearbit.com/compex.com'
    }
  ];

  // Map to track loading stage for each brand
  // 0: try primary, 1: try fallback, 2: render CSS fallback
  const [loadingStages, setLoadingStages] = useState<Record<string, number>>({});

  const handleImageError = (brandName: string) => {
    setLoadingStages((prev) => {
      const currentStage = prev[brandName] || 0;
      return {
        ...prev,
        [brandName]: currentStage + 1,
      };
    });
  };

  // Beautiful fallback CSS logos in case images fail to load
  const renderCSSFallback = (name: string) => {
    switch (name) {
      case 'Rational':
        return (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="font-sans font-black text-xl tracking-[0.05em] text-blue-950 uppercase">RATIONAL</span>
            <div className="w-16 h-1 bg-red-600 rounded-full mt-1" />
          </div>
        );
      case 'Mychef':
        return (
          <div className="flex items-center justify-center w-full h-full space-x-1.5">
            <span className="font-sans font-light text-xl text-slate-500">my</span>
            <span className="font-sans font-black text-xl text-slate-850">chef</span>
          </div>
        );
      case 'Fagor':
        return (
          <div className="flex items-center justify-center bg-red-600 w-full h-full rounded-2xl">
            <span className="font-sans font-black text-xl tracking-widest text-white uppercase">FAGOR</span>
          </div>
        );
      case 'Alma Lasers':
        return (
          <div className="flex flex-col items-center justify-center w-full h-full leading-none">
            <span className="font-sans font-bold text-lg text-slate-800 tracking-tight">alma</span>
            <span className="font-mono text-[7px] tracking-[0.3em] text-slate-400 uppercase mt-0.5">LASERS</span>
          </div>
        );
      case 'Lumenis':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <span className="font-sans font-bold text-lg text-slate-900 tracking-wider">LUMENIS</span>
          </div>
        );
      case 'Allergan Aesthetics':
        return (
          <div className="flex flex-col items-center justify-center w-full h-full leading-none">
            <span className="font-serif font-semibold text-base text-stone-900 tracking-wide">Allergan</span>
            <span className="text-[7px] tracking-[0.2em] text-stone-500 uppercase mt-0.5">Aesthetics</span>
          </div>
        );
      case 'Zimmer MedizinSysteme':
        return (
          <div className="flex flex-col items-center justify-center w-full h-full leading-none">
            <span className="font-sans font-black text-lg italic text-blue-900">Zimmer</span>
            <span className="text-[7px] tracking-wider text-slate-400 uppercase mt-0.5">MedizinSysteme</span>
          </div>
        );
      case 'Chattanooga':
        return (
          <div className="flex items-center justify-center w-full h-full">
            <span className="font-sans font-black text-sm text-slate-800 uppercase tracking-tight">chattanooga</span>
          </div>
        );
      case 'Compex':
        return (
          <div className="flex items-center justify-center w-full h-full bg-black rounded-2xl">
            <span className="font-sans font-black text-lg text-white italic">COMPEX</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center w-full h-full">
            <span className="font-sans font-extrabold text-base text-brand-navy uppercase tracking-wider">{name}</span>
          </div>
        );
    }
  };

  const getBrandLogoSource = (brand: Brand) => {
    const stage = loadingStages[brand.name] || 0;
    if (stage === 0) return brand.logoUrl;
    if (stage === 1) return brand.fallbackLogoUrl || '';
    return '';
  };

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case 'Gastronomía y Cocina':
        return <Utensils className="w-3.5 h-3.5 text-orange-500" />;
      case 'Estética y Dermatología':
        return <Sparkles className="w-3.5 h-3.5 text-purple-500" />;
      default:
        return <Activity className="w-3.5 h-3.5 text-emerald-500" />;
    }
  };

  return (
    <section id="marcas" className="py-24 bg-white border-b border-brand-gray-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-navy bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-4">
            Catálogo de Fabricantes Aliados
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
            Tecnología Premium de los Fabricantes Líderes Mundiales
          </h3>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Asumimos el 100% de la inversión y mantenimiento de los mejores equipos del mercado, listos para tu negocio en modalidad pago por uso.
          </p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-5 rounded-full" />
        </div>

        {/* Grid de Marcas Reducido y Optimizado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => {
            const stage = loadingStages[brand.name] || 0;
            const logoSrc = getBrandLogoSource(brand);
            const isFagorRed = brand.name === 'Fagor' && stage < 2;

            return (
              <div
                key={brand.name}
                className="group bg-brand-gray-light/40 border border-brand-gray-mid/50 rounded-3xl p-6 hover:bg-white hover:shadow-xl hover:border-brand-navy/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Brand Header Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center space-x-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 px-2.5 py-1 bg-brand-gray-light rounded-md">
                      {getSectorIcon(brand.sector)}
                      <span>{brand.sector}</span>
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {brand.origin}
                    </span>
                  </div>

                  {/* Hero Logo Box (PROTAGONIST) */}
                  <div className="mb-5 h-28 w-full relative flex items-center justify-center">
                    <div 
                      className={`w-full h-full flex items-center justify-center rounded-2xl border transition-all duration-300 p-4 ${
                        isFagorRed 
                          ? 'bg-red-600 border-transparent shadow-sm'
                          : 'bg-slate-50 border-slate-200/60 shadow-sm group-hover:bg-white group-hover:shadow-md'
                      }`}
                    >
                      {stage < 2 && logoSrc ? (
                        <img
                          src={logoSrc}
                          alt={`${brand.name} logo`}
                          onError={() => handleImageError(brand.name)}
                          className={`max-h-16 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105 ${
                            isFagorRed ? 'brightness-0 invert' : ''
                          }`}
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        renderCSSFallback(brand.name)
                      )}
                    </div>
                  </div>

                  {/* Brand Title & Specialty */}
                  <div className="flex items-baseline justify-between mb-1.5">
                    <h4 className="font-display font-bold text-sm text-brand-navy group-hover:text-brand-cyan transition-colors">
                      {brand.name}
                    </h4>
                    <span className="text-[9px] uppercase font-semibold tracking-wider text-brand-cyan">
                      {brand.specialty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-[11px] leading-relaxed font-light">
                    {brand.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner corporativo */}
        <div className="mt-16 p-8 bg-brand-navy text-white rounded-3xl text-center relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />
          <h4 className="font-display font-extrabold text-lg sm:text-xl mb-2">
            ¿Buscas una marca o modelo específico para tu centro?
          </h4>
          <p className="text-gray-300 text-xs max-w-2xl mx-auto mb-6 font-light leading-relaxed">
            En EQUIPY trabajamos directamente con los distribuidores oficiales. Si necesitas un activo que no figura en nuestro catálogo estándar, nuestro equipo lo evalúa, lo adquiere y te lo facilita bajo el mismo modelo de pago por uso.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center bg-brand-cyan hover:bg-white text-brand-navy hover:text-brand-navy font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
          >
            Solicitar Maquinaria a Medida
          </a>
        </div>

      </div>
    </section>
  );
}

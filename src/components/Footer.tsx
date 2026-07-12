import { Linkedin, Twitter, ArrowUp } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onNavigateToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-deep text-white border-t border-brand-navy/60">
      
      {/* Upper Footer: Logo and Navigation Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand Col */}
          <div className="md:col-span-8 space-y-4">
            <div
              onClick={() => onNavigateToSection('inicio')}
              className="flex items-center cursor-pointer group"
            >
              <Logo theme="light" />
            </div>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Firma líder en gestión de activos inteligentes especializada en el modelo Hardware-as-a-Service (HaaS) y explotación conjunta para negocios y espacios compartidos.
            </p>
            
            <p className="text-xs text-brand-cyan font-semibold">
              "Más servicios, más ingresos. Cero inversión."
            </p>

            <div className="pt-2 text-xs text-gray-400 flex items-center space-x-2">
              <span className="opacity-85">Contacto Directo:</span>
              <a href="mailto:contacto@getequipy.com" className="text-brand-cyan hover:underline transition-all font-medium">
                contacto@getequipy.com
              </a>
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-display font-bold text-sm uppercase tracking-wider text-gray-200">
              Navegación
            </h5>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigateToSection('inicio')} className="hover:text-brand-cyan transition-colors text-left">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('quienes-somos')} className="hover:text-brand-cyan transition-colors text-left">
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('servicios')} className="hover:text-brand-cyan transition-colors text-left">
                  Qué Hacemos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('marcas')} className="hover:text-brand-cyan transition-colors text-left">
                  Marcas Aliadas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateToSection('faq')} className="hover:text-brand-cyan transition-colors text-left">
                  FAQ (Dudas)
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright & Legal disclaimer */}
      <div className="bg-brand-dark/50 border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          
          <p>© {currentYear} EQUIPY. Todos los derechos reservados. Barcelona, España.</p>
          
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-mono text-gray-600">PROT_HaaS_v3.4</span>
            <button
              onClick={handleBackToTop}
              className="bg-brand-navy hover:bg-brand-cyan text-white hover:text-brand-deep p-2 rounded-xl transition-all shadow-md"
              title="Volver Arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}

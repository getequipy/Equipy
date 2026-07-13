import { useState, useEffect } from 'react';
import { Menu, X, Landmark, Calculator } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onNavigateToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigateToSection, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'quienes-somos', label: 'Quiénes Somos' },
    { id: 'servicios', label: 'Qué Hacemos' },
    { id: 'marcas', label: 'Marcas Aliadas' },
    { id: 'faq', label: 'FAQ (Dudas)' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavClick = (id: string) => {
    onNavigateToSection(id);
    setIsMobileMenuOpen(false);
  };

  const isHeaderLight = isScrolled || isMobileMenuOpen;

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isHeaderLight
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-brand-gray-mid/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('inicio')}
            className="flex items-center cursor-pointer group"
          >
            <Logo theme={isHeaderLight ? 'dark' : 'light'} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    isActive
                      ? isHeaderLight
                        ? 'text-brand-cyan bg-brand-cyan/10'
                        : 'text-brand-cyan bg-brand-cyan/25'
                      : isHeaderLight
                        ? 'text-slate-600 hover:text-brand-cyan hover:bg-slate-50'
                        : 'text-white/90 hover:text-brand-cyan hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('simulador')}
              className="ml-4 flex items-center space-x-1.5 bg-brand-cyan hover:bg-[#0c908c] text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-[0_4px_12px_rgba(13,161,156,0.2)] hover:shadow-[0_4px_16px_rgba(13,161,156,0.35)] transition-all duration-200"
            >
              <Calculator className="w-4 h-4" />
              <span>Simulador</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 focus:outline-none transition-colors ${
                isHeaderLight ? 'text-slate-700 hover:text-brand-cyan' : 'text-white hover:text-brand-cyan'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-lg border-b border-brand-gray-mid absolute top-full left-0 w-full animate-fade-in py-4 shadow-xl px-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left w-full px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'text-brand-cyan bg-brand-cyan/5'
                    : 'text-slate-600 hover:text-brand-cyan hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('simulador')}
              className="flex items-center justify-center space-x-2 bg-brand-cyan hover:bg-[#0c908c] text-white py-3.5 rounded-lg text-base font-bold shadow-md"
            >
              <Calculator className="w-5 h-5" />
              <span>Simulador HaaS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

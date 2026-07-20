import { useState, useEffect } from 'react';
import { Linkedin, Twitter, ArrowUp, X } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
}

export default function Footer({ onNavigateToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'legal' | 'privacy' | 'cookies' | null>(null);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<'legal' | 'privacy' | 'cookies'>;
      if (customEvent.detail) {
        setActiveModal(customEvent.detail);
      }
    };
    window.addEventListener('open-legal-modal', handleOpenModal);
    return () => window.removeEventListener('open-legal-modal', handleOpenModal);
  }, []);

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
      <div className="bg-brand-dark/50 border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <p>© {currentYear} EQUIPY. Todos los derechos reservados. Barcelona, España.</p>
            <span className="hidden sm:inline text-gray-700">|</span>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={() => setActiveModal('legal')} className="hover:text-brand-cyan transition-colors underline sm:no-underline">
                Aviso Legal
              </button>
              <span className="text-gray-800">•</span>
              <button onClick={() => setActiveModal('privacy')} className="hover:text-brand-cyan transition-colors underline sm:no-underline">
                Política de Privacidad
              </button>
              <span className="text-gray-800">•</span>
              <button onClick={() => setActiveModal('cookies')} className="hover:text-brand-cyan transition-colors underline sm:no-underline">
                Política de Cookies
              </button>
            </div>
          </div>
          
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

      {/* Compliance / Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white text-brand-navy rounded-3xl p-6 sm:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl border border-brand-gray-mid">
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-brand-navy bg-brand-gray-light hover:bg-brand-gray-mid p-2 rounded-full transition-all"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            {activeModal === 'legal' && (
              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <h4 className="font-display font-bold text-2xl text-brand-navy mb-4 border-b pb-2">
                  Aviso Legal y Condiciones de Uso
                </h4>
                <p className="text-xs text-gray-400">Última actualización: Julio de 2026</p>
                
                <p>
                  En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios del sitio web getequipy.com de los siguientes datos identificativos:
                </p>

                <h5 className="font-bold text-brand-navy mt-4">1. Datos Identificativos</h5>
                <p className="bg-brand-gray-light p-3 rounded-xl font-mono text-xs text-gray-600">
                  Denominación Social: EQUIPY HaaS, S.L. (en constitución)<br />
                  Domicilio Social: Barcelona, España<br />
                  Email de Contacto: contacto@getequipy.com<br />
                  Actividad: Gestión de activos industriales y Hardware-as-a-Service (HaaS)
                </p>

                <h5 className="font-bold text-brand-navy mt-4">2. Condiciones Generales de Uso</h5>
                <p>
                  El acceso y uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                </p>

                <h5 className="font-bold text-brand-navy mt-4">3. Propiedad Intelectual e Industrial</h5>
                <p>
                  EQUIPY es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, etc.). Todos los derechos reservados.
                </p>

                <h5 className="font-bold text-brand-navy mt-4">4. Exclusión de Garantías y Responsabilidad</h5>
                <p>
                  EQUIPY no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                </p>
              </div>
            )}

            {activeModal === 'privacy' && (
              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <h4 className="font-display font-bold text-2xl text-brand-navy mb-4 border-b pb-2">
                  Política de Privacidad (RGPD)
                </h4>
                <p className="text-xs text-gray-400">Última actualización: Julio de 2026</p>

                <p>
                  EQUIPY garantiza la protección y confidencialidad de los datos personales que nos proporcionen de acuerdo con lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
                </p>

                <h5 className="font-bold text-brand-navy mt-4">1. ¿Quién es el Responsable del tratamiento de sus datos?</h5>
                <p>
                  El responsable de sus datos es EQUIPY HaaS, S.L., con dirección de correo electrónico <a href="mailto:contacto@getequipy.com" className="text-brand-cyan hover:underline font-bold">contacto@getequipy.com</a>.
                </p>

                <h5 className="font-bold text-brand-navy mt-4">2. ¿Con qué finalidad tratamos sus datos personales?</h5>
                <p>
                  Tratamos la información que nos facilitan las personas interesadas con el fin de gestionar el envío de la información comercial que nos soliciten, responder consultas del formulario de contacto y proporcionar simulaciones personalizadas de Hardware-as-a-Service (HaaS). No se realizarán decisiones automatizadas con base en dicho perfil.
                </p>

                <h5 className="font-bold text-brand-navy mt-4">3. ¿Cuál es la legitimación para el tratamiento de sus datos?</h5>
                <p>
                  La base legal para el tratamiento de sus datos es el **consentimiento expreso** que nos otorga al marcar la casilla de aceptación en nuestros formularios de contacto, de acuerdo con el art. 6.1.a del RGPD.
                </p>

                <h5 className="font-bold text-brand-navy mt-4">4. ¿A qué destinatarios se comunicarán sus datos?</h5>
                <p>
                  Los datos no se comunicarán a terceros ajenos a EQUIPY, salvo obligación legal o para la correcta ejecución del servicio técnico (SAT) contratado. No se realizan transferencias internacionales de datos sin las debidas garantías del RGPD.
                </p>

                <h5 className="font-bold text-brand-navy mt-4">5. ¿Cuáles son sus derechos?</h5>
                <p>
                  Cualquier persona tiene derecho a obtener confirmación sobre si en EQUIPY estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Acceder a sus datos personales.</li>
                  <li>Solicitar la rectificación de los datos inexactos.</li>
                  <li>Solicitar su supresión (derecho al olvido) cuando los datos ya no sean necesarios.</li>
                  <li>Solicitar la limitación u oposición de su tratamiento.</li>
                  <li>Solicitar la portabilidad de los datos en formato estructurado.</li>
                </ul>
                <p className="mt-2">
                  Para ejercer estos derechos, puede enviar un correo electrónico a <a href="mailto:contacto@getequipy.com" className="text-brand-cyan hover:underline font-bold">contacto@getequipy.com</a> adjuntando copia de su documento de identidad (DNI/NIE).
                </p>
              </div>
            )}

            {activeModal === 'cookies' && (
              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <h4 className="font-display font-bold text-2xl text-brand-navy mb-4 border-b pb-2">
                  Política de Cookies
                </h4>
                <p className="text-xs text-gray-400">Última actualización: Julio de 2026</p>

                <p>
                  El sitio web getequipy.com utiliza cookies propias y de terceros para mejorar la navegación del usuario, almacenar de forma local los datos preferentes del simulador financiero de HaaS y analizar el tráfico de forma anónima.
                </p>

                <h5 className="font-bold text-brand-navy mt-4">1. ¿Qué es una cookie?</h5>
                <p>
                  Una cookie es un pequeño archivo de texto que un sitio web almacena en su navegador para recordar información sobre su visita, como su idioma de preferencia, cookies analíticas o configuraciones personalizadas del simulador.
                </p>

                <h5 className="font-bold text-brand-navy mt-4">2. Tipos de Cookies que utilizamos</h5>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Cookies Técnicas y Obligatorias:</strong> Son aquellas indispensables para el correcto funcionamiento de la web, navegación por las secciones, envío del formulario y mantenimiento de las variables del simulador de ROI de forma local (LocalStorage/SessionState).
                  </li>
                  <li>
                    <strong>Cookies de Análisis/Estadísticas:</strong> Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios de la web, con el fin de introducir mejoras técnicas y de contenido.
                  </li>
                </ul>

                <h5 className="font-bold text-brand-navy mt-4">3. Cómo desactivar o eliminar las cookies</h5>
                <p>
                  En cualquier momento puede ejercer su derecho de desactivación o eliminación de cookies de este sitio web mediante la configuración de las opciones del navegador instalado en su ordenador o dispositivo móvil.
                </p>
              </div>
            )}

            {/* Modal Bottom Close */}
            <div className="mt-8 pt-4 border-t border-brand-gray-mid flex justify-end">
              <button
                onClick={() => setActiveModal(null)}
                className="bg-brand-navy hover:bg-brand-dark text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}

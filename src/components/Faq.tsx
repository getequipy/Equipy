import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: '¿Qué es exactamente el modelo Hardware-as-a-Service (HaaS) de EQUIPY?',
      answer: 'Es un modelo que transforma la adquisición de maquinaria especializada. En lugar de desembolsar miles de euros en comprar un equipo (CapEx), EQUIPY adquiere la máquina por ti. Nosotros nos encargamos de su transporte, instalación, calibración, mantenimiento técnico regular (SAT) e incluso de actualizarla cuando queda obsoleta. Tú solo pagas una cuota de uso altamente flexible (gasto operativo u OpEx) basada en el uso real monitorizado por telemetría IoT.'
    },
    {
      question: '¿Cómo calcula EQUIPY el "pago por uso"?',
      answer: 'Instalamos dispositivos seguros de telemetría IoT de última generación directamente en la maquinaria (o conectados a su sistema de control). Estos sensores miden con total precisión los ciclos de trabajo, las horas de encendido o el volumen operativo consumido. Estos datos se envían encriptados a nuestra plataforma en la nube, donde tú puedes auditarlos en tiempo real. Pagas única y exclusivamente por la productividad real de la máquina.'
    },
    {
      question: '¿Qué ocurre si una máquina sufre una avería o requiere mantenimiento?',
      answer: 'La continuidad de tu negocio es nuestra prioridad número uno. Todos los costes de asistencia técnica especializada (SAT), mantenimiento preventivo anual, calibraciones y piezas de repuesto originales están cubiertos al 100% por EQUIPY sin ningún coste adicional para tu centro. Si un equipo no se puede reparar in situ en un plazo breve, lo sustituimos por otro equivalente.'
    },
    {
      question: '¿Cómo funciona la actualización o renovación de equipos?',
      answer: 'A diferencia de la compra tradicional donde asumes el riesgo total de obsolescencia, con EQUIPY tu centro tecnológico siempre estará a la vanguardia. Una vez finalizado el ciclo tecnológico pactado (o si surge un avance disruptivo en tu sector), retiramos la máquina antigua e instalamos el nuevo modelo de última generación de forma transparente, ajustando el plan operativo sin nuevas inversiones iniciales.'
    },
    {
      question: '¿Para qué sectores está diseñado el catálogo de EQUIPY?',
      answer: 'Actualmente ofrecemos soluciones llave en mano y cobertura integral para cuatro grandes sectores de alta demanda tecnológica: Gastronomía profesional (cocinas industriales, hornos de alta gama), Estética y Dermatología médica (láseres, criolipólisis), Rehabilitación y Fisioterapia (tecarterapia, ondas de choque, electroestimulación clínica), y Odontología Digital / Manufactura Aditiva (impresoras 3D biocompatibles y escáneres intraorales).'
    },
    {
      question: '¿Qué requisitos necesita mi empresa para solicitar un activo?',
      answer: 'Solo requerimos un breve estudio conjunto de viabilidad. Evaluamos la demanda esperada en tu centro, la idoneidad física del espacio donde irá instalado el hardware (suministros eléctricos, de agua, ventilación o red) y diseñamos el plan a medida. Al no requerir financiación bancaria pesada, el proceso de aprobación y puesta en marcha suele ser de pocos días laborables.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-gray-light border-y border-brand-gray-mid">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-4">
            Resolución de Dudas
          </span>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
            Preguntas Frecuentes (FAQ)
          </h3>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Todo lo que necesitas saber sobre el modelo de pago por uso, la telemetría IoT y nuestro soporte técnico premium garantizado.
          </p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Faq Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-brand-navy shadow-lg' 
                    : 'border-brand-gray-mid/60 hover:border-brand-navy/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-start space-x-3 sm:space-x-4 pr-4">
                    <HelpCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-brand-cyan' : 'text-gray-400'
                    }`} />
                    <span className="font-display font-bold text-sm sm:text-base text-brand-navy leading-snug">
                      {faq.question}
                    </span>
                  </span>
                  <span className="flex-shrink-0 p-1.5 bg-brand-gray-light rounded-xl text-brand-navy">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[500px] border-t border-brand-gray-light' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 text-gray-600 text-sm sm:text-base leading-relaxed font-light bg-brand-gray-light/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action card */}
        <div className="mt-12 text-center p-6 bg-white/65 rounded-2xl border border-brand-gray-mid/40">
          <p className="text-sm text-gray-500">
            ¿Tienes otra pregunta sobre la explotación conjunta o casos particulares? 
            <a href="#contacto" className="text-brand-cyan hover:underline font-bold ml-1">
              Contáctanos directamente
            </a> y resolveremos tu consulta en menos de 24h.
          </p>
        </div>

      </div>
    </section>
  );
}

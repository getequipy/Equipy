import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Gracias a Equipy, pudimos equipar nuestra clínica con tecnología de punta sin descapitalizarnos. ¡Un cambio de juego absoluto para incorporar nuevos tratamientos médicos!',
      name: 'Dr. Alejandro Mendoza',
      role: 'Director Médico',
      company: 'Clínica Dental OdontoSalud (Madrid)',
      initials: 'AM',
      avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=256&h=256',
      rating: 5
    },
    {
      text: 'La flexibilidad del pago por uso y la conectividad IoT han optimizado nuestras operaciones de manera impresionante. Los coworkers adoran el sistema de uso libre de cafetería.',
      name: 'Laura Gutiérrez',
      role: 'Gerente de Operaciones',
      company: 'Hub Creativo & Coworking Co-Work Space',
      initials: 'LG',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256',
      rating: 5
    },
    {
      text: 'Profesionalismo y eficiencia increíbles. Equipy nos permitió expandir nuestros servicios mecánicos avanzados y aumentar un 40% la facturación en solo tres meses.',
      name: 'Carlos J. Benítez',
      role: 'CEO & Fundador',
      company: 'Talleres Benítez Motoring Center',
      initials: 'CB',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256',
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-brand-gray-light border-y border-brand-gray-mid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-4">
            Testimonios
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
            Casos de Éxito de Nuestros Partners
          </h3>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Descubre cómo empresas de diversos sectores ya aceleran su crecimiento operativo y financiero de la mano de EQUIPY.
          </p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-brand-gray-mid shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute top-6 right-8 text-brand-cyan/15 pointer-events-none">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-brand-cyan text-brand-cyan" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 italic">
                  "{test.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4 pt-6 border-t border-brand-gray-mid">
                {test.avatar ? (
                  <img
                    src={test.avatar}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover shadow-[0_2px_8px_rgba(0,51,102,0.2)] border border-brand-gray-mid"
                  />
                ) : (
                  <div className="bg-brand-navy text-white font-display font-extrabold w-11 h-11 rounded-full flex items-center justify-center text-sm shadow-[0_2px_8px_rgba(0,51,102,0.2)]">
                    {test.initials}
                  </div>
                )}
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-navy">
                    {test.name}
                  </h4>
                  <p className="text-xs text-brand-cyan font-medium">
                    {test.role}
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {test.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { ShieldCheck, HelpCircle, XCircle, CheckCircle2, TrendingUp, Landmark, RefreshCw, Cpu } from 'lucide-react';
import { MODEL_COMPARISON } from '../data';

export default function Comparison() {
  const advantages = [
    {
      title: 'Eliminación del CapEx y Riesgo de Capital',
      points: [
        'Inversión Inicial Cero: Accede a equipamiento de alta gama con desembolso inicial de 0€.',
        'Preservación de Liquidez: Mantén intactas tus líneas de crédito y caja para expansión o marketing.',
        'Transferencia del Riesgo: EQUIPY asume el riesgo financiero de depreciación y compra del activo.'
      ],
      icon: Landmark
    },
    {
      title: 'Acceso a Tecnología Premium de Alta Gama',
      points: [
        'Maquinaria de Vanguardia: Suministramos herramientas de última generación que multiplican tu productividad.',
        'Conectividad IoT Integrada: Telemetría remota para control de accesos, auditorías y cobro automatizado.',
        'Protección de Obsolescencia: Disfruta de equipos actualizados sin devaluaciones en tus balances.'
      ],
      icon: Cpu
    },
    {
      title: 'Mantenimiento Integral y Continuidad',
      points: [
        'Asistencia SAT Premium: Mantenimiento preventivo y correctivo rápido (SAT < 24h en modalidades clave).',
        'Cero Costes Ocultos: Revisiones, repuestos y actualizaciones de software 100% incluidos en el acuerdo.',
        'Maximización de Up-time: Monitoreo IoT para anticiparnos a fallas y garantizar operaciones continuas.'
      ],
      icon: RefreshCw
    },
    {
      title: 'Modelos Comerciales Flexibles',
      points: [
        'Pago por Uso: a) Facturación mensual indexada de forma directa al uso real medido por telemetría IoT. b) Servicio prepagado por el usuario mediante pasarela de pago y código QR.',
        'Suscripción Mensual por Operador / Usuario: El espacio o hub comercializa un pase "Premium" o una membresía mensual para acceder a la maquinaria. El beneficio se reparte.',
        'Alquiler Fijo Mensual Tradicional: El partner abona una cuota fija recurrente por la disponibilidad exclusiva del equipo.'
      ],
      icon: TrendingUp
    }
  ];

  return (
    <section id="ventajas" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-4">
            Hardware como Servicio (HaaS)
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
            Ventajas Estratégicas del Modelo HaaS de EQUIPY
          </h3>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            La adquisición tradicional de maquinaria especializada representa barreras de capital y altos riesgos operativos. Con EQUIPY, rompes con el pasado impulsando la agilidad estratégica.
          </p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Detailed Advantage Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {advantages.map((adv, idx) => {
            const IconComponent = adv.icon;
            return (
              <div
                key={idx}
                className="bg-brand-gray-light rounded-3xl p-6 sm:p-8 border border-brand-gray-mid hover:border-brand-cyan/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-brand-navy p-3 rounded-2xl text-white shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-xl text-brand-navy">
                    {adv.title}
                  </h4>
                </div>
                
                <ul className="space-y-3">
                  {adv.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start space-x-2.5 text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-brand-navy rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          
          <div className="relative z-10">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-center mb-8">
              Resumen Comparativo de Modelos
            </h4>

            {/* Desktop & Mobile Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-gray-400 font-mono">
                    <th className="py-4 px-4 w-1/4">Característica / Impacto</th>
                    <th className="py-4 px-4 bg-white/5 border-x border-white/5 text-red-400 w-3/8">
                      Compra Tradicional (CapEx)
                    </th>
                    <th className="py-4 px-4 text-brand-cyan font-bold w-3/8">
                      Modelo HaaS EQUIPY (OpEx)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-5 px-4 font-semibold text-gray-300">Inversión Inicial</td>
                    <td className="py-5 px-4 bg-white/5 border-x border-white/5 text-gray-400">
                      Muy alta (desembolso total del valor del activo al comprarlo).
                    </td>
                    <td className="py-5 px-4 text-white font-medium">
                      <span className="text-brand-cyan font-bold block">Cero €</span>
                      Inversión asumida al 100% por EQUIPY.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 font-semibold text-gray-300">Riesgo Tecnológico</td>
                    <td className="py-5 px-4 bg-white/5 border-x border-white/5 text-gray-400">
                      Asumido por el cliente (devaluación acelerada y obsolescencia).
                    </td>
                    <td className="py-5 px-4 text-white font-medium">
                      <span className="text-brand-cyan font-bold block">Cero Riesgo</span>
                      EQUIPY actualiza y gestiona el ciclo de vida tecnológico.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 font-semibold text-gray-300">Mantenimiento y SAT</td>
                    <td className="py-5 px-4 bg-white/5 border-x border-white/5 text-gray-400">
                      Costes adicionales variables imprevistos y gestión compleja.
                    </td>
                    <td className="py-5 px-4 text-white font-medium">
                      <span className="text-brand-cyan font-bold block">Totalmente Incluido</span>
                      Soporte técnico preventivo y correctivo prémium sin coste.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-5 px-4 font-semibold text-gray-300">Estructura de Costes</td>
                    <td className="py-5 px-4 bg-white/5 border-x border-white/5 text-gray-400">
                      Coste de capital fijo inamovible con fuerte impacto negativo en balances.
                    </td>
                    <td className="py-5 px-4 text-white font-medium">
                      <span className="text-brand-cyan font-bold block">Flexible e Indexado</span>
                      Gasto operativo variable de bajo impacto o ingresos por uso compartido.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center text-xs text-gray-400 italic">
              Conclusión: Aliarse con EQUIPY permite modernizar infraestructuras de forma inmediata, monetizar espacios infrautilizados y ofrecer servicios de vanguardia con riesgo nulo.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

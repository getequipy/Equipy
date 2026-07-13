import { useState, useEffect, useRef } from 'react';
import { Cpu, Wifi, Activity, Server, AlertTriangle, ShieldCheck, Play, PlusCircle } from 'lucide-react';
import { TelemetryLog } from '../types';

export default function IotTelemetry() {
  const [logs, setLogs] = useState<TelemetryLog[]>([]);
  const [activeNodesCount, setActiveNodesCount] = useState<number>(14);
  const [totalCommissionToday, setTotalCommissionToday] = useState<number>(342.80);
  const [networkPing, setNetworkPing] = useState<number>(34);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const initialLogs: TelemetryLog[] = [
    { id: '1', timestamp: '09:12:14', assetName: 'Láser Diodo S-01', status: 'completed', message: 'Sesión de depilación avanzada finalizada.', metricValue: 'Uso: 45 min', splitEarnings: 18.00 },
    { id: '2', timestamp: '09:12:45', assetName: 'Horno Rational H-01', status: 'active', message: 'Horneado por convección a 180°C.', metricValue: 'Uso: 35 min', splitEarnings: 4.50 },
    { id: '3', timestamp: '09:13:01', assetName: 'Radiofrecuencia RF-02', status: 'active', message: 'Tratamiento de fisioterapia y termoterapia.', metricValue: 'Uso: 30 min' },
    { id: '4', timestamp: '09:13:30', assetName: 'Horno Mychef H-02', status: 'completed', message: 'Cocción mixta vaporizada completada.', metricValue: 'Uso: 20 min', splitEarnings: 3.20 }
  ];

  // Initialize logs
  useEffect(() => {
    setLogs(initialLogs);
  }, []);

  // Scroll to bottom of log terminal when log count changes
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Handle periodic log simulation (live ticking)
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      // Generate randomized telemetry events
      const assetOptions = [
        { name: 'Horno Rational H-01', message: 'Cocción por convección gourmet en curso.', metric: 'Uso: 40 min', split: 3.50, status: 'active' as const },
        { name: 'Láser Diodo S-01', message: 'Tratamiento de estética finalizado con éxito.', metric: 'Uso: 30 min', split: 18.00, status: 'completed' as const },
        { name: 'Horno Mychef H-02', message: 'Precalentamiento rápido de cámara completado.', metric: 'Uso: 15 min', split: 1.50, status: 'completed' as const },
        { name: 'Radiofrecuencia RF-02', message: 'Emisión de frecuencia para terapia celular activa.', metric: 'Uso: 25 min', status: 'active' as const },
        { name: 'Horno Convector H-03', message: 'Cocción lenta a baja temperatura finalizada.', metric: 'Uso: 120 min', split: 6.80, status: 'completed' as const }
      ];

      const chosenAsset = assetOptions[Math.floor(Math.random() * assetOptions.length)];
      const now = new Date();
      const timestampString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      const newLog: TelemetryLog = {
        id: Math.random().toString(),
        timestamp: timestampString,
        assetName: chosenAsset.name,
        status: chosenAsset.status,
        message: chosenAsset.message,
        metricValue: chosenAsset.metric,
        splitEarnings: chosenAsset.split || undefined
      };

      setLogs(prev => [...prev.slice(-3), newLog]); // Keep last 4 elements
      
      // Slightly fluctuate variables
      if (newLog.splitEarnings) {
        setTotalCommissionToday(prev => prev + (newLog.splitEarnings || 0));
      }
      setNetworkPing(prev => Math.max(12, Math.min(65, prev + (Math.random() > 0.5 ? 2 : -2))));
    }, 4500);

    return () => clearInterval(interval);
  }, [isSimulating]);

  // Manually trigger a user session transaction
  const handleTriggerManualTransaction = () => {
    const assetsWithSplits = [
      { name: 'Horno Rational H-01', message: 'Transacción HaaS: Horneado de menú especial.', metric: 'Uso: 60 min', split: 5.50 },
      { name: 'Láser Diodo S-01', message: 'Transacción HaaS: Sesión de estética corporal aprobada.', metric: 'Uso: 45 min', split: 22.00 },
      { name: 'Radiofrecuencia RF-02', message: 'Transacción HaaS: Tratamiento regenerativo muscular.', metric: 'Uso: 35 min', split: 12.50 },
      { name: 'Horno Mychef H-02', message: 'Transacción HaaS: Servicio de catering premium activo.', metric: 'Uso: 90 min', split: 8.40 }
    ];

    const randomAsset = assetsWithSplits[Math.floor(Math.random() * assetsWithSplits.length)];
    const now = new Date();
    const timestampString = now.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const manualLog: TelemetryLog = {
      id: Math.random().toString(),
      timestamp: timestampString,
      assetName: randomAsset.name,
      status: 'completed',
      message: randomAsset.message,
      metricValue: randomAsset.metric,
      splitEarnings: randomAsset.split
    };

    setLogs(prev => [...prev.slice(-3), manualLog]);
    setTotalCommissionToday(prev => prev + randomAsset.split);
    setActiveNodesCount(prev => Math.min(30, prev + 1));
  };

  return (
    <section id="telemetria" className="py-16 bg-brand-deep text-white border-b border-brand-navy/60 relative overflow-hidden">
      {/* Visual neon lines */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 inline-block px-3.5 py-1.5 rounded-full mb-4">
            IoT Hub Live Telemetry
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Transparencia Absoluta en Tiempo Real
          </h3>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Nuestros activos inteligentes informan de su rendimiento cada segundo. Auditamos el uso y coordinamos los pagos de forma automatizada mediante Internet de las Cosas (IoT), sin fricción ni papeleo.
          </p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Diagnostic Widget Bar Column 4 */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-start">
            
            {/* Widget 1: Network Ping / Telemetry health */}
            <div className="bg-brand-dark/80 border border-brand-navy/30 p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="bg-brand-cyan/10 p-2.5 rounded-xl text-brand-cyan">
                  <Wifi className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-mono">ESTADO DEL SERVIDOR</span>
                  <span className="text-base font-bold font-display text-white">Online & Conectado</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-green-400 bg-green-950/40 border border-green-500/20 px-2.5 py-1 rounded">
                {networkPing} ms
              </span>
            </div>

            {/* Simulated legend nodes status */}
            <div className="bg-brand-dark/50 border border-brand-navy/30 p-5 rounded-2xl">
              <span className="text-xs text-gray-400 block font-mono mb-3">CONEXIONES LOCALES DE MAQUINARIA</span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="flex items-center space-x-1.5 text-yellow-400">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span>Horno_Rational_H01 (Active)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Laser_Diodo_01 (OK)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Radiofrecuencia_RF02 (OK)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-yellow-400">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span>Horno_Mychef_H02 (Active)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal / Live Console Logs Column 8 */}
          <div className="lg:col-span-8 bg-black/80 rounded-3xl border border-brand-navy/30 overflow-hidden flex flex-col h-[380px] justify-between shadow-2xl">
            
            {/* Terminal Top Nav Bar */}
            <div className="bg-brand-dark px-6 py-4 border-b border-brand-navy/30 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-xs text-gray-400 font-mono pl-4">equipy-telemetry-cli://madrid-gateway</span>
              </div>

              <div className="flex items-center space-x-3 text-xs">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`flex items-center space-x-1.5 px-3 py-1 rounded-full border transition-colors ${
                    isSimulating
                      ? 'bg-green-950 border-green-500/20 text-green-400'
                      : 'bg-brand-navy border-brand-cyan/20 text-brand-cyan'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>{isSimulating ? 'Telemetría Live' : 'Pausado'}</span>
                </button>
              </div>
            </div>

            {/* Terminal Body Content Logs */}
            <div
              ref={logContainerRef}
              className="p-6 overflow-y-auto flex-1 font-mono text-xs sm:text-sm space-y-3 scrollbar-thin scrollbar-thumb-brand-navy scrollbar-track-black"
            >
              <div className="text-gray-500 text-xs">*** Conectado al gateway IoT central de EQUIPY ***</div>
              <div className="text-gray-500 text-xs">*** Escuchando transmisiones seguras encriptadas SSL ***</div>
              
              {logs.map((log) => {
                let badgeColor = 'text-green-400';
                if (log.status === 'active') badgeColor = 'text-yellow-400';
                if (log.status === 'idle') badgeColor = 'text-blue-400';
                
                return (
                  <div key={log.id} className="border-b border-white/5 pb-2 last:border-0 hover:bg-white/2 transition-colors duration-150 rounded px-1 flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div className="flex items-start space-x-2">
                      <span className="text-gray-500 shrink-0 text-xs mt-0.5">[{log.timestamp}]</span>
                      <div>
                        <span className={`font-bold shrink-0 ${badgeColor} mr-2`}>{log.assetName}:</span>
                        <span className="text-gray-200 leading-relaxed text-xs sm:text-sm">{log.message}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 pl-8 sm:pl-0 self-end sm:self-center shrink-0">
                      <span className="text-[10px] px-1.5 py-0.5 bg-white/5 text-gray-400 border border-white/10 rounded font-bold">
                        {log.metricValue}
                      </span>
                      {log.splitEarnings && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-green-950 text-green-400 border border-green-500/20 rounded font-bold flex items-center">
                          +{log.splitEarnings.toFixed(2)}€ Split
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Terminal Footer Console controls */}
            <div className="bg-brand-dark px-6 py-3 border-t border-brand-navy/30 text-[10px] text-gray-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span>Auditoría de telemetría IoT certificada bajo protocolo HaaS Equipy v3.4</span>
              <div className="flex items-center space-x-1 text-brand-cyan">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Auditoría cifrada SSL / TLS de extremo a extremo</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

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
    { id: '1', timestamp: '09:12:14', assetName: 'Láser Diodo S-01', status: 'completed', message: 'Sesión de depilación finalizada. Duración: 45 min.', metricValue: '1 ciclo', splitEarnings: 18.00 },
    { id: '2', timestamp: '09:12:45', assetName: 'Cafetera Espresso #12', status: 'active', message: 'Espresso Barista preparado - Pago aprobado por NFC.', metricValue: '1 taza', splitEarnings: 0.75 },
    { id: '3', timestamp: '09:13:01', assetName: 'Fresa CNC Router C-03', status: 'active', message: 'Inicio de mecanizado en 3D. Fresa activada.', metricValue: '8500 RPM' },
    { id: '4', timestamp: '09:13:30', assetName: 'Plotter Sublimación P-02', status: 'completed', message: 'Trabajo impreso correctamente. Formato 1.5m.', metricValue: '3.5 metros', splitEarnings: 7.50 },
    { id: '5', timestamp: '09:14:00', assetName: 'Escáner Dental D-08', status: 'idle', message: 'Dispositivo en espera de paciente. Calibración OK.', metricValue: '36.2 °C' }
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
        { name: 'Cafetera Espresso #12', message: 'Extracción completada. Taza servida.', metric: '1 taza', split: 0.75, status: 'completed' as const },
        { name: 'Fresa CNC Router C-03', message: 'Control numérico en curso. Avance: 84%.', metric: '9000 RPM', status: 'active' as const },
        { name: 'Impresora 3D Ind-04', message: 'Capa #842 extruida. Temperatura de boquilla estable.', metric: '215 °C', status: 'active' as const },
        { name: 'Láser Diodo S-01', message: 'Disparo de pulso láser. Densidad de energía: 22J/cm².', metric: '1 pulso', status: 'active' as const },
        { name: 'Plotter Sublimación P-02', message: 'Enfriamiento del cabezal térmico activo.', metric: '42 °C', status: 'idle' as const },
        { name: 'Escáner Dental D-08', message: 'Escaneo intraoral digital completado. Modelo dental exportado.', metric: '1 escaneo', status: 'completed' as const }
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

      setLogs(prev => [...prev.slice(-14), newLog]); // Keep last 15 elements
      
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
      { name: 'Cafetera Espresso #12', message: 'Transacción Manual NFC: Doble Cappuccino Premium preparado.', metric: '1 taza', split: 0.90 },
      { name: 'Impresora 3D Ind-04', message: 'Inicio manual de prototipado rápido HaaS.', metric: '2 horas', split: 12.00 },
      { name: 'Plotter Sublimación P-02', message: 'Impresión de lona promocional aprobada.', metric: '5 metros', split: 15.00 },
      { name: 'Fresa CNC Router C-03', message: 'Mecanizado de precisión para cliente autónomo completado.', metric: '1 hora', split: 24.00 }
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

    setLogs(prev => [...prev, manualLog]);
    setTotalCommissionToday(prev => prev + randomAsset.split);
    setActiveNodesCount(prev => Math.min(30, prev + 1));
  };

  return (
    <section id="telemetria" className="py-24 bg-brand-deep text-white border-b border-brand-navy/60 relative overflow-hidden">
      {/* Visual neon lines */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            
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

            {/* Widget 2: Node activity count */}
            <div className="bg-brand-dark/80 border border-brand-navy/30 p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3.5">
                <div className="bg-brand-cyan/10 p-2.5 rounded-xl text-brand-cyan">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-mono">ACTIVOS ACTIVOS (MADRID)</span>
                  <span className="text-base font-bold font-display text-white">{activeNodesCount} Máquinas IoT</span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-navy/60 border border-brand-cyan/20 px-2.5 py-1 rounded">
                SECURE_SSL
              </span>
            </div>

            {/* Widget 3: Live Earnings Counter Split */}
            <div className="bg-brand-navy/30 border border-brand-cyan/20 p-6 rounded-3xl flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-brand-cyan block mb-1">
                  INGRESOS SPLIT EN ESPACIOS HOY
                </span>
                <p className="text-3xl font-display font-black text-white">
                  {totalCommissionToday.toFixed(2)} €
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  Comisión del 30% neta liquidada automáticamente a las cuentas de los coworkings.
                </p>
              </div>
              
              <button
                onClick={handleTriggerManualTransaction}
                className="w-full bg-brand-cyan hover:bg-cyan-400 text-brand-deep font-bold py-3 rounded-xl flex items-center justify-center space-x-2 transition-transform duration-200 hover:scale-102"
              >
                <PlusCircle className="w-4 h-4 fill-brand-deep text-brand-cyan" />
                <span className="text-xs font-extrabold">Simular Uso en Coworking</span>
              </button>
            </div>

            {/* Simulated legend nodes status */}
            <div className="bg-brand-dark/50 border border-brand-navy/30 p-5 rounded-2xl">
              <span className="text-xs text-gray-400 block font-mono mb-3">CONEXIONES LOCALES DE MAQUINARIA</span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="flex items-center space-x-1.5 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Coffee_Espresso_12 (OK)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Laser_Diodo_01 (OK)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-yellow-400">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span>CNC_Router_C03 (Active)</span>
                </div>
                <div className="flex items-center space-x-1.5 text-green-400">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span>Subli_Plotter_P02 (OK)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Terminal / Live Console Logs Column 8 */}
          <div className="lg:col-span-8 bg-black/80 rounded-3xl border border-brand-navy/30 overflow-hidden flex flex-col h-[400px] lg:h-auto justify-between shadow-2xl">
            
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

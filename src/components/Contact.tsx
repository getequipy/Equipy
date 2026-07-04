import { useState, useEffect, FormEvent } from 'react';
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc, limit } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Database, RefreshCw, Trash2, Cpu } from 'lucide-react';
import { Lead } from '../types';

interface ContactProps {
  preFillData?: {
    vertical: string;
    asset: string;
    usage: number;
    message: string;
  } | null;
  onClearPreFill?: () => void;
}

export default function Contact({ preFillData, onClearPreFill }: ContactProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // UX State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Firestore Demo State
  const [leadsList, setLeadsList] = useState<Lead[]>([]);
  const [showDemoLeads, setShowDemoLeads] = useState(false);
  const [isLoadingLeads, setIsLoadingLeads] = useState(false);

  // Apply pre-filled data if available from the simulator
  useEffect(() => {
    if (preFillData) {
      setMessage(preFillData.message);
      // Automatically focus or highlight the message field if needed
    }
  }, [preFillData]);

  // Fetch leads from Firestore
  const fetchLeads = async () => {
    setIsLoadingLeads(true);
    try {
      const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'), limit(10));
      const querySnapshot = await getDocs(q);
      const fetched: Lead[] = [];
      querySnapshot.forEach((docSnapshot) => {
        const data = docSnapshot.data();
        fetched.push({
          id: docSnapshot.id,
          name: data.name || '',
          email: data.email || '',
          businessName: data.businessName || '',
          phone: data.phone || '',
          message: data.message || '',
          selectedAsset: data.selectedAsset || '',
          selectedVertical: data.selectedVertical || '',
          createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleString('es-ES') : 'N/A'
        });
      });
      setLeadsList(fetched);
    } catch (err: any) {
      console.error('Error fetching leads from Firestore:', err);
    } finally {
      setIsLoadingLeads(false);
    }
  };

  useEffect(() => {
    if (showDemoLeads) {
      fetchLeads();
    }
  }, [showDemoLeads]);

  // Submit form handler
  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setSubmitError('Por favor, rellena los campos obligatorios (Nombre, Email y Mensaje).');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Save data directly into Firestore
      const newLeadData = {
        name,
        email,
        businessName,
        phone,
        message,
        selectedVertical: preFillData?.vertical || 'General',
        selectedAsset: preFillData?.asset || 'Ninguno',
        createdAt: new Date() // Store JS Date which converts to Timestamp automatically
      };

      await addDoc(collection(db, 'leads'), newLeadData);

      // Handle UX success
      setSubmitSuccess(true);
      
      // Clear inputs
      setName('');
      setEmail('');
      setBusinessName('');
      setPhone('');
      setMessage('');
      if (onClearPreFill) onClearPreFill();

      // Refresh demo leads if active
      if (showDemoLeads) {
        fetchLeads();
      }

      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch (err: any) {
      console.error('Error saving lead to Firestore:', err);
      setSubmitError('Hubo un error al procesar tu solicitud. Por favor, vuelve a intentarlo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete lead (for demo debugging and verifying Firestore write/delete)
  const handleDeleteLead = async (leadId: string) => {
    try {
      await deleteDoc(doc(db, 'leads', leadId));
      setLeadsList(prev => prev.filter(l => l.id !== leadId));
    } catch (err) {
      console.error('Error deleting lead from Firestore:', err);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold tracking-widest text-brand-cyan bg-brand-navy/5 inline-block px-3.5 py-1.5 rounded-full mb-4">
            Contáctanos
          </h2>
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
            Comienza a Escalar tu Negocio Hoy Mismo
          </h3>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Escríbenos y nuestros especialistas en Hardware-as-a-Service diseñarán la propuesta comercial HaaS que mejor se adapte a tu espacio u operaciones.
          </p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Column 5: Info & Corporate details */}
          <div className="lg:col-span-5 space-y-8 bg-brand-navy text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan font-bold block mb-1">
                EQUIPY HQ
              </span>
              <h4 className="font-display font-bold text-2xl mb-4">
                Información de Contacto
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Nuestras oficinas centrales asumen la monitorización técnica remota de toda nuestra red conectada. ¡Háblanos sobre tu proyecto!
              </p>
            </div>

            <div className="space-y-6 pt-4">
              
              {/* Item Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-brand-cyan/20 p-3 rounded-xl text-brand-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-mono">ENVIAR CORREO</span>
                  <a href="mailto:info@equipy.com" className="text-sm font-semibold hover:text-brand-cyan hover:underline transition-colors block mt-1">
                    info@equipy.com
                  </a>
                </div>
              </div>

              {/* Item Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-brand-cyan/20 p-3 rounded-xl text-brand-cyan">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-mono">LLÁMANOS</span>
                  <a href="tel:+34123456789" className="text-sm font-semibold hover:text-brand-cyan hover:underline transition-colors block mt-1">
                    +34 123 456 789
                  </a>
                </div>
              </div>

              {/* Item Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-brand-cyan/20 p-3 rounded-xl text-brand-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 block font-mono">OFICINA CENTRAL</span>
                  <p className="text-sm font-semibold block mt-1 leading-relaxed">
                    Paseo de la Castellana 95, Planta 15,<br />
                    28046 Madrid, España
                  </p>
                </div>
              </div>

            </div>

            {/* Simulated Interactive Map */}
            <div className="bg-brand-dark rounded-2xl p-4 border border-white/5 relative overflow-hidden h-44 shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0033660a_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-30" />
              <div className="text-center relative z-10 space-y-2">
                <div className="w-8 h-8 rounded-full bg-brand-cyan text-brand-deep flex items-center justify-center mx-auto shadow-md animate-bounce">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] text-gray-400 block">MAPA DE COBERTURA INMEDIATA</span>
                <span className="text-xs font-bold text-white">Hub de Operaciones: Madrid & Barcelona</span>
              </div>
            </div>

          </div>

          {/* Column 7: Interactive Form connected to Firestore */}
          <div className="lg:col-span-7 bg-brand-gray-light rounded-3xl p-6 sm:p-8 border border-brand-gray-mid shadow-lg">
            
            <form onSubmit={handleSubmitForm} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-white border border-brand-gray-mid rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                    Email Corporativo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ejemplo@empresa.com"
                    className="w-full bg-white border border-brand-gray-mid rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                    Nombre de Tu Negocio
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Ej. Clínica Dental X"
                    className="w-full bg-white border border-brand-gray-mid rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                    Teléfono de Contacto
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. +34 600 000 000"
                    className="w-full bg-white border border-brand-gray-mid rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan"
                  />
                </div>
              </div>

              {/* Selected machinery prefilled indicator */}
              {preFillData && (
                <div className="bg-brand-cyan/10 border border-brand-cyan/20 p-3 rounded-xl text-xs text-brand-navy font-semibold flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>
                      Interés Pre-seleccionado: <strong>{preFillData.asset}</strong>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={onClearPreFill}
                    className="text-[10px] text-red-600 font-bold hover:underline"
                  >
                    Quitar filtro
                  </button>
                </div>
              )}

              <div>
                <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                  Cuéntanos sobre tu necesidad <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Detalla qué tipo de maquinaria especializada necesitas y qué sector operativo manejas..."
                  className="w-full bg-white border border-brand-gray-mid rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                />
              </div>

              {/* UI feedback */}
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex items-start space-x-3.5 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm">¡Mensaje Recibido con Éxito!</h5>
                    <p className="text-xs text-green-700 mt-1">
                      Tu solicitud de HaaS ha sido persistida en nuestra base de datos **Firebase Cloud Firestore**. Un asesor de Equipy te contactará en menos de 24 horas.
                    </p>
                  </div>
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-xl flex items-start space-x-3.5">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-xs">{submitError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-navy hover:bg-brand-dark text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Enviando Lead a Firestore...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensaje Comercial</span>
                  </>
                )}
              </button>

            </form>

          </div>

        </div>

        {/* FIREBASE PERSISTENCE DEMO HUB */}
        <div className="border border-brand-gray-mid bg-brand-gray-light rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <div className="bg-brand-navy text-white p-2.5 rounded-xl shrink-0">
                <Database className="w-6 h-6 text-brand-cyan" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-brand-navy">
                  Demostración del Almacenamiento Firebase Firestore
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  Para fines de revisión de la aplicación, este panel te permite ver las solicitudes guardadas de forma 100% real y persistente en la nube de Firebase.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowDemoLeads(!showDemoLeads)}
              className="bg-white hover:bg-brand-gray-mid text-brand-navy border border-brand-gray-mid font-bold px-4 py-2.5 rounded-xl text-xs flex items-center space-x-2 shrink-0 self-start sm:self-center"
            >
              <span>{showDemoLeads ? 'Ocultar Base de Datos' : 'Ver Base de Datos (Live)'}</span>
              <RefreshCw className={`w-3.5 h-3.5 ${isLoadingLeads ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Leads Viewer */}
          {showDemoLeads && (
            <div className="mt-6 pt-6 border-t border-brand-gray-mid space-y-4 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-extrabold text-brand-navy font-mono">
                  SOLICITUDES DE COLO EN FIRESTORE (ÚLTIMAS 10)
                </span>
                <button
                  onClick={fetchLeads}
                  className="text-xs text-brand-cyan font-bold hover:underline flex items-center space-x-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Actualizar</span>
                </button>
              </div>

              {isLoadingLeads ? (
                <div className="py-8 text-center text-xs text-gray-400 font-mono">
                  Cargando datos desde Firebase Firestore...
                </div>
              ) : leadsList.length === 0 ? (
                <div className="py-8 text-center text-xs text-gray-400 font-mono bg-white rounded-2xl border border-brand-gray-mid">
                  No hay solicitudes registradas todavía en la base de datos Firestore. Envía una solicitud arriba para verla aparecer aquí en tiempo real.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {leadsList.map((lead) => (
                    <div key={lead.id} className="bg-white border border-brand-gray-mid rounded-2xl p-4 text-xs space-y-2.5 relative hover:border-brand-cyan/20">
                      
                      <button
                        onClick={() => handleDeleteLead(lead.id!)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                        title="Eliminar de Firestore"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="space-y-1">
                        <div className="font-extrabold text-brand-navy text-sm">{lead.name}</div>
                        <div className="text-gray-400 text-[10px] font-mono">ID Firestore: {lead.id}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-gray-600">
                        <div>
                          <span className="text-[10px] text-gray-400 block font-mono">EMAIL</span>
                          <span className="font-medium break-all">{lead.email}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 block font-mono">TELÉFONO</span>
                          <span className="font-medium">{lead.phone || 'N/A'}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-gray-600">
                        <div>
                          <span className="text-[10px] text-gray-400 block font-mono">NEGOCIO / COMPAÑÍA</span>
                          <span className="font-medium">{lead.businessName || 'N/A'}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-gray-400 block font-mono">INTERÉS HAAS</span>
                          <span className="font-medium text-brand-cyan font-bold">{lead.selectedAsset}</span>
                        </div>
                      </div>

                      <div className="bg-brand-gray-light p-2.5 rounded-lg border border-brand-gray-mid">
                        <span className="text-[9px] text-gray-400 block font-mono uppercase">MENSAJE ENVIADO:</span>
                        <p className="text-gray-600 font-normal leading-relaxed mt-1 break-words">{lead.message}</p>
                      </div>

                      <div className="text-[9px] text-gray-400 text-right font-mono">
                        Creado: {lead.createdAt}
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>

      </div>
    </section>
  );
}

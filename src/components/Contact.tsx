import { useState, useEffect, FormEvent } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Send, CheckCircle2, AlertCircle, RefreshCw, Cpu } from 'lucide-react';

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

  // Apply pre-filled data if available from the simulator
  useEffect(() => {
    if (preFillData) {
      setMessage(preFillData.message);
    }
  }, [preFillData]);

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
      const selectedVertical = preFillData?.vertical || 'General';
      const selectedAsset = preFillData?.asset || 'Ninguno';

      // 1. Send email via FormSubmit API (Works flawlessly on GitHub Pages / Client-side)
      const emailResponse = await fetch('https://formsubmit.co/ajax/ing.carlosalberto@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `📩 Nuevo Lead de Contacto Comercial - Equipy [${name}]`,
          Nombre: name,
          Email: email,
          Empresa: businessName || 'No especificada',
          'Teléfono / Contacto': phone || 'No especificado',
          'Vertical de Interés': selectedVertical,
          'Maquinaria / Activo Seleccionado': selectedAsset,
          Mensaje: message,
          _honey: '' // Anti-spam hidden field
        })
      });

      if (!emailResponse.ok) {
        console.warn('FormSubmit returned a non-ok status. Proceeding to save in Firestore anyway.');
      }

      // 2. Save data directly into Firestore as a secure backup log
      const newLeadData = {
        name,
        email,
        businessName,
        phone,
        message,
        selectedVertical,
        selectedAsset,
        createdAt: new Date()
      };

      try {
        await addDoc(collection(db, 'leads'), newLeadData);
      } catch (firestoreErr) {
        console.error('Error saving lead to Firestore backup:', firestoreErr);
      }

      // Handle UX success
      setSubmitSuccess(true);
      
      // Clear inputs
      setName('');
      setEmail('');
      setBusinessName('');
      setPhone('');
      setMessage('');
      if (onClearPreFill) onClearPreFill();

      // Hide success message after 8 seconds
      setTimeout(() => setSubmitSuccess(false), 8000);
    } catch (err: any) {
      console.error('Error processing contact form:', err);
      setSubmitError('Hubo un error al procesar tu solicitud. Por favor, vuelve a intentarlo.');
    } finally {
      setIsSubmitting(false);
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

        {/* Centered Form Column */}
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-brand-gray-light rounded-3xl p-6 sm:p-10 border border-brand-gray-mid shadow-lg relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl pointer-events-none" />
            
            <form onSubmit={handleSubmitForm} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                    Nombre de Tu Negocio
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Ej. Clínica Dental X"
                    className="w-full bg-white border border-brand-gray-mid rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
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
                    className="w-full bg-white border border-brand-gray-mid rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                  />
                </div>
              </div>

              {/* Selected machinery prefilled indicator */}
              {preFillData && (
                <div className="bg-brand-cyan/10 border border-brand-cyan/20 p-3.5 rounded-xl text-xs text-brand-navy font-semibold flex items-center justify-between animate-fade-in">
                  <div className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4 text-brand-cyan" />
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
                      Tu solicitud de HaaS ha sido recibida y enviada a nuestro equipo de atención comercial. Nos pondremos en contacto contigo en menos de 24 horas.
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

              {/* RGPD Compliance Checkbox */}
              <div className="bg-white/40 p-4 rounded-2xl border border-brand-gray-mid">
                <label className="flex items-start space-x-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4.5 w-4.5 rounded border-brand-gray-mid text-brand-cyan focus:ring-brand-cyan shrink-0 transition-all cursor-pointer"
                  />
                  <span className="text-xs text-gray-500 leading-normal">
                    He leído y acepto expresamente la{' '}
                    <button
                      type="button"
                      onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: 'privacy' }));
                      }}
                      className="text-brand-cyan underline font-semibold hover:text-brand-navy inline-block"
                    >
                      Política de Privacidad
                    </button>{' '}
                    y autorizo a EQUIPY a recopilar y procesar mis datos para resolver esta consulta comercial según el reglamento europeo RGPD.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-navy hover:bg-brand-dark disabled:bg-gray-400 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transition-all"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin text-brand-cyan" />
                    <span>Enviando tu Solicitud...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-brand-cyan" />
                    <span>Enviar Mensaje Comercial</span>
                  </>
                )}
              </button>

              <div className="text-center pt-4 border-t border-brand-gray-mid/60 text-xs text-gray-500">
                O si lo prefieres, también puedes escribirnos directamente por email a:{' '}
                <a
                  href="mailto:contacto@getequipy.com"
                  className="font-bold text-brand-navy hover:text-brand-cyan transition-colors"
                >
                  contacto@getequipy.com
                </a>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

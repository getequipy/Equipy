/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import PartnerBrands from './components/PartnerBrands';
import RoiSimulator from './components/RoiSimulator';
import IotTelemetry from './components/IotTelemetry';
import VisionMission from './components/VisionMission';
import Comparison from './components/Comparison';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [preFillData, setPreFillData] = useState<{
    vertical: string;
    asset: string;
    usage: number;
    message: string;
  } | null>(null);

  // Intersection Observer to detect current view section for high-impact header updates
  useEffect(() => {
    const sections = [
      'inicio',
      'quienes-somos',
      'servicios',
      'simulador',
      'telemetria',
      'marcas',
      'faq',
      'contacto'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handlePreFillContact = (vertical: string, asset: string, usage: number, message: string) => {
    setPreFillData({ vertical, asset, usage, message });
    
    // Smooth scroll down to contact section
    setTimeout(() => {
      handleNavigateToSection('contacto');
    }, 100);
  };

  const handleClearPreFill = () => {
    setPreFillData(null);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#1e293b] antialiased">
      {/* Dynamic Navigation Header */}
      <Header
        onNavigateToSection={handleNavigateToSection}
        activeSection={activeSection}
      />

      {/* Main Corporate Sections */}
      <main>
        {/* 1. Hero Presentation */}
        <Hero
          onDiscoverClick={() => handleNavigateToSection('servicios')}
        />

        {/* 2. About Us - CapEx vs OpEx */}
        <AboutUs />

        {/* 2.5. Corporate Purpose Vision & Mission */}
        <VisionMission />

        {/* 3. Services Directory */}
        <Services />

        {/* 4. Strategic Advantages & Comparison Table */}
        <Comparison />

        {/* 5. Interactive ROI & HaaS Simulator */}
        <RoiSimulator
          onPreFillContact={handlePreFillContact}
        />

        {/* 6. Live IoT Telemetry Mock Console */}
        <IotTelemetry />

        {/* 7. Partner Brands (Marcas Aliadas) */}
        <PartnerBrands />

        {/* 8. FAQ Block */}
        <Faq />

        {/* 9. Contact form & live Firestore storage database review panel */}
        <Contact
          preFillData={preFillData}
          onClearPreFill={handleClearPreFill}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigateToSection={handleNavigateToSection}
      />
    </div>
  );
}


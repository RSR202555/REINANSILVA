import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { OnlineConsulting } from './components/OnlineConsulting';
import { BeforeAfter } from './components/BeforeAfter';
import { Testimonials } from './components/Testimonials';
import { Benefits } from './components/Benefits';
import { Differentials } from './components/Differentials';
import { Plans } from './components/Plans';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080A09] text-white selection:bg-[#A3F238] selection:text-[#080A09] relative">
      {/* HEADER NAVBAR */}
      <Header />

      {/* MAIN SECTIONS */}
      <main>
        <Hero />
        <About />
        <Specialties />
        <OnlineConsulting />
        <BeforeAfter />
        <Testimonials />
        <Benefits />
        <Differentials />
        <Plans />
        <FAQ />
        <FinalCTA />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING CONVERSION WHATSAPP */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;

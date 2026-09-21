import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIExperience from './components/AIExperience';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary text-sm"
        style={{ padding: '0.5rem 1rem' }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <AIExperience />
        <Portfolio />
        <Process />
        <WhyUs />
        <About />
        <FAQ />
        <Contact />
        <CTA />
      </main>

      <Footer />

      {/* Floating widgets */}
      <WhatsAppButton />
      <Chatbot />
    </>
  );
}

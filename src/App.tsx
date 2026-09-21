import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import AIExperience from './components/AIExperience';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#e5e5e0] selection:bg-[#a3e635] selection:text-[#080808]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-studio-primary text-xs"
      >
        Skip to main content
      </a>

      {/* Sticky Editorial Navigation */}
      <Navbar />

      {/* Art-Directed Sections with varied visual rhythm */}
      <main id="main-content">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <AIExperience />
        <About />
        <FAQ />
        <Contact />
      </main>

      {/* Minimalist Studio Footer */}
      <Footer />

      {/* Discrete Floating Assistants */}
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}

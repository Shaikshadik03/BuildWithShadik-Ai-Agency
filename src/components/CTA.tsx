import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

export default function CTA() {
  const handleScrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="cta"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 100% 80% at 50% 100%, rgba(163,230,53,0.06) 0%, transparent 60%), #0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
      aria-labelledby="cta-heading"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <span className="section-label block mb-6">Ready to Start?</span>

          {/* Headline */}
          <h2 id="cta-heading" className="section-heading mb-5">
            Your Business.
            <br />
            Your Vision.
            <br />
            <span style={{ color: '#a3e635' }}>Built Smarter.</span>
          </h2>

          <p className="mb-10 text-base mx-auto" style={{ color: 'rgba(245,245,245,0.55)', maxWidth: '460px', lineHeight: 1.7 }}>
            Let's turn your next idea into something useful. No pressure — just a conversation about what you want to build.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-7 py-3.5"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </a>
            <button
              onClick={handleScrollToServices}
              className="btn-secondary text-base px-7 py-3.5"
              aria-label="Scroll to explore services"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

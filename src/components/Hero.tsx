import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';
import logoImg from '../assets/logo.png';

const FLOATING_CARDS = [
  {
    label: 'AI Chatbot',
    sub: 'Automated support',
    icon: '🤖',
    delay: '0s',
    position: { top: '18%', right: '2%' },
  },
  {
    label: 'WhatsApp Automation',
    sub: 'Instant follow-ups',
    icon: '💬',
    delay: '2s',
    position: { top: '50%', right: '0%' },
  },
  {
    label: 'AI Voice Agent',
    sub: 'Conversational AI',
    icon: '🎙️',
    delay: '4s',
    position: { top: '75%', right: '4%' },
  },
];

const TRUST_ITEMS = [
  { label: 'Websites', icon: '🌐' },
  { label: 'AI Solutions', icon: '✦' },
  { label: 'Automation', icon: '⚡' },
  { label: 'Digital Growth', icon: '↗' },
];

export default function Hero() {
  const handleScrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(163,230,53,0.06) 0%, transparent 60%), #0a0a0a',
      }}
      aria-label="Hero section"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large logo watermark — geometric mark behind content */}
      <div
        className="absolute pointer-events-none select-none"
        aria-hidden="true"
        style={{
          top: '50%',
          right: '-80px',
          transform: 'translateY(-50%)',
          width: '520px',
          height: '520px',
          opacity: 0.06,
          filter: 'blur(1px)',
          zIndex: 1,
        }}
      >
        <img
          src={logoImg}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      {/* Floating accent orb */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)',
          top: '-100px',
          right: '-100px',
        }}
      />

      <div className="container-site relative z-10 pt-28 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="animate-fade-up flex items-center gap-3 mb-7">
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(163,230,53,0.1)',
                  border: '1px solid rgba(163,230,53,0.3)',
                  color: '#a3e635',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#a3e635',
                    display: 'inline-block',
                    animation: 'pulse 2s infinite',
                  }}
                />
                AI & Digital Solutions
              </span>
            </div>

            {/* Main headline */}
            <h1 className="animate-fade-up-delayed section-heading mb-4" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}>
              Build Smarter.
              <br />
              <span style={{ color: '#a3e635' }}>Grow Better.</span>
            </h1>

            {/* Supporting line */}
            <p
              className="animate-fade-up-delayed-2 mb-5 font-serif italic"
              style={{ color: 'rgba(245,245,245,0.5)', fontSize: '1.1rem' }}
            >
              Websites, AI, automation and digital systems built for modern businesses.
            </p>

            {/* Body */}
            <p
              className="animate-fade-up-delayed-2 mb-9 leading-relaxed"
              style={{ color: 'rgba(245,245,245,0.65)', fontSize: '1rem', maxWidth: '520px' }}
            >
              We help businesses build a stronger digital presence, automate repetitive work, and create better customer experiences using practical AI-powered solutions.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delayed-3 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Let's Build Together
                <ArrowRight size={16} />
              </a>
              <button
                onClick={handleScrollToServices}
                className="btn-secondary"
                aria-label="Scroll to services section"
              >
                Explore Services
                <ArrowDown size={16} />
              </button>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main workspace panel */}
            <div
              className="relative w-full max-w-sm mx-auto"
              style={{ height: '420px' }}
            >
              {/* Central dark card */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'rgba(20,20,20,0.9)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
                }}
                aria-hidden="true"
              >
                {/* Header bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                  <span
                    className="ml-auto text-xs font-mono"
                    style={{ color: 'rgba(255,255,255,0.2)' }}
                  >
                    BuildWithShadik AI
                  </span>
                </div>

                {/* Chat preview */}
                <div className="p-5 flex flex-col gap-3">
                  {/* Customer message */}
                  <div className="flex justify-end">
                    <div
                      className="rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm max-w-xs"
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(245,245,245,0.85)',
                      }}
                    >
                      Hi, I need a website for my business.
                    </div>
                  </div>
                  {/* AI reply */}
                  <div className="flex items-start gap-2">
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: 'rgba(163,230,53,0.2)', color: '#a3e635', border: '1px solid rgba(163,230,53,0.3)' }}
                      aria-hidden="true"
                    >
                      AI
                    </div>
                    <div
                      className="rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm max-w-xs leading-relaxed"
                      style={{
                        background: 'rgba(163,230,53,0.08)',
                        border: '1px solid rgba(163,230,53,0.15)',
                        color: 'rgba(245,245,245,0.85)',
                      }}
                    >
                      Absolutely! We build modern, responsive websites around your brand. Shall I share our portfolio?
                    </div>
                  </div>
                  {/* Status bar */}
                  <div
                    className="mt-3 flex items-center justify-between text-xs rounded-xl px-3 py-2"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      color: 'rgba(245,245,245,0.3)',
                    }}
                  >
                    <span>Lead captured ✓</span>
                    <span style={{ color: '#a3e635' }}>● live</span>
                  </div>

                  {/* Workflow steps */}
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {['Customer', 'AI Chat', 'Lead', 'WhatsApp', 'Meeting'].map((step, i) => (
                      <React.Fragment key={step}>
                        <span
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            background: i === 0 ? 'rgba(163,230,53,0.15)' : 'rgba(255,255,255,0.05)',
                            color: i === 0 ? '#a3e635' : 'rgba(245,245,245,0.4)',
                            border: `1px solid ${i === 0 ? 'rgba(163,230,53,0.3)' : 'rgba(255,255,255,0.06)'}`,
                          }}
                        >
                          {step}
                        </span>
                        {i < 4 && (
                          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.6rem' }}>→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {FLOATING_CARDS.map((card) => (
                <div
                  key={card.label}
                  className="absolute glass rounded-xl px-3 py-2.5 flex items-center gap-2.5"
                  style={{
                    ...card.position,
                    right: '-10%',
                    animation: `float 6s ease-in-out ${card.delay} infinite`,
                    minWidth: '170px',
                    zIndex: 10,
                  }}
                  aria-hidden="true"
                >
                  <span style={{ fontSize: '1.2rem' }}>{card.icon}</span>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: '#f5f5f5' }}>
                      {card.label}
                    </div>
                    <div className="text-xs" style={{ color: 'rgba(245,245,245,0.45)' }}>
                      {card.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust row */}
        <div
          className="animate-fade-up-delayed-3 mt-16 pt-8 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: 'rgba(245,245,245,0.3)' }}
            >
              What we do
            </span>
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2"
                style={{ color: 'rgba(245,245,245,0.55)' }}
              >
                <span style={{ color: '#a3e635', fontSize: '0.75rem' }}>{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        <span style={{ color: 'rgba(245,245,245,0.2)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <ArrowDown size={14} style={{ color: 'rgba(245,245,245,0.2)' }} />
      </div>
    </section>
  );
}

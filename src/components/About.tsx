import React from 'react';
import logoImg from '../assets/logo.png';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32"
      style={{
        background: '#0d0d0d',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
      aria-labelledby="about-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="section-label mb-6">About</p>
            <h2 id="about-heading" className="section-heading mb-6">
              Technology Should Make
              <br />
              <span style={{ color: '#a3e635' }}>Business Simpler.</span>
            </h2>

            <div className="flex flex-col gap-4 mb-10">
              <p style={{ color: 'rgba(245,245,245,0.65)', lineHeight: 1.8 }}>
                BuildWithShadik is an AI and digital solutions initiative focused on helping businesses adopt useful technology without unnecessary complexity.
              </p>
              <p style={{ color: 'rgba(245,245,245,0.65)', lineHeight: 1.8 }}>
                We combine modern web development, AI tools, automation and creative digital systems to create practical solutions for businesses that want to operate better and present themselves professionally online.
              </p>
            </div>

            {/* Founder */}
            <div
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{
                  background: 'rgba(163,230,53,0.12)',
                  border: '1px solid rgba(163,230,53,0.25)',
                  color: '#a3e635',
                }}
                aria-hidden="true"
              >
                S
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: '#f5f5f5' }}>
                  Shaik Shadik
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(245,245,245,0.4)' }}>
                  Founder · BuildWithShadik
                </p>
              </div>
            </div>
          </div>

          {/* Right: Brand card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="w-full max-w-sm rounded-2xl p-8 flex flex-col items-center justify-center gap-5"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.08)',
                minHeight: '320px',
              }}
              aria-label="BuildWithShadik brand"
            >
              {/* Logo */}
              <img
                src={logoImg}
                alt="BuildWithShadik logo"
                style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
              />

              <div className="text-center">
                <p
                  className="font-bold text-lg tracking-tight"
                  style={{ color: '#f5f5f5' }}
                >
                  BuildWithShadik
                </p>
                <p
                  className="text-xs mt-1 tracking-widest uppercase"
                  style={{ color: '#a3e635' }}
                >
                  by Shadi Creations
                </p>
              </div>

              <div
                className="w-full border-t pt-5"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <div className="flex flex-col gap-2 text-sm text-center" style={{ color: 'rgba(245,245,245,0.4)' }}>
                  <span>AI · Automation · Websites</span>
                  <span>Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CONTACT } from '../services/whatsappService';
import { getWhatsAppUrl } from '../services/whatsappService';
import logoImg from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  'Websites',
  'AI Photos',
  'Chatbots',
  'Automation',
  'Voice AI',
  'Booking',
  'Maps',
];

const SOCIAL_LINKS = [
  { label: 'Instagram', url: CONTACT.instagram },
  { label: 'LinkedIn', url: CONTACT.linkedin },
  { label: 'GitHub', url: CONTACT.github },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const activeSocials = SOCIAL_LINKS.filter((s) => s.url);

  return (
    <footer
      style={{
        background: '#080808',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
      aria-label="Site footer"
    >
      <div className="container-site py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={logoImg}
              alt="BuildWithShadik"
              style={{ height: '52px', width: 'auto', objectFit: 'contain', marginBottom: '0.75rem' }}
            />
            <p className="text-xs mb-1" style={{ color: '#a3e635', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              AI & Digital Solutions
            </p>
            <p className="text-xs mt-2" style={{ color: 'rgba(245,245,245,0.3)' }}>
              by Shadi Creations
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold mb-5 tracking-widest uppercase" style={{ color: 'rgba(245,245,245,0.35)' }}>
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm transition-colors"
                    style={{ color: 'rgba(245,245,245,0.5)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f5')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,245,0.5)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold mb-5 tracking-widest uppercase" style={{ color: 'rgba(245,245,245,0.35)' }}>
              Services
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <span className="text-sm" style={{ color: 'rgba(245,245,245,0.4)' }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold mb-5 tracking-widest uppercase" style={{ color: 'rgba(245,245,245,0.35)' }}>
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors"
                style={{ color: 'rgba(245,245,245,0.5)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a3e635')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,245,0.5)')}
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm transition-colors"
                style={{ color: 'rgba(245,245,245,0.5)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f5')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,245,0.5)')}
              >
                {CONTACT.email}
              </a>
              {activeSocials.length > 0 && (
                <div className="flex gap-3 mt-2">
                  {activeSocials.map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors"
                      style={{ color: 'rgba(245,245,245,0.4)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f5')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,245,0.4)')}
                      aria-label={s.label}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(245,245,245,0.25)' }}>
            © 2026 BuildWithShadik. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(245,245,245,0.2)' }}>
            Websites · AI · Automation
          </p>
        </div>
      </div>
    </footer>
  );
}

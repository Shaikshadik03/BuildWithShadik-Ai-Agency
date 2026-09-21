import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled
            ? 'rgba(10, 10, 10, 0.85)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        }}
      >
        <div className="container-site">
          <nav className="flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center flex-shrink-0"
              aria-label="BuildWithShadik home"
            >
              <img
                src="/brand/logo.png"
                alt="BuildWithShadik"
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              />
            </a>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="relative px-3 py-2 text-sm transition-colors duration-200 rounded-lg"
                      style={{
                        color: isActive ? '#a3e635' : 'rgba(245,245,245,0.7)',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) (e.currentTarget as HTMLElement).style.color = '#f5f5f5';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) (e.currentTarget as HTMLElement).style.color = 'rgba(245,245,245,0.7)';
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={getWhatsAppUrl("Hi Shaik, I'd like to talk about a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-5"
              >
                Let's Talk
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors"
              style={{
                background: menuOpen ? 'rgba(163,230,53,0.1)' : 'transparent',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X size={18} color="#f5f5f5" />
              ) : (
                <Menu size={18} color="#f5f5f5" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-8px)',
        }}
        aria-hidden={!menuOpen}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(12px)' }}
          onClick={() => setMenuOpen(false)}
        />
        {/* Menu content */}
        <div className="relative flex flex-col justify-center h-full px-8">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="flex items-center justify-between py-4 border-b text-xl font-medium transition-colors"
                    style={{
                      borderColor: 'rgba(255,255,255,0.06)',
                      color: 'rgba(245,245,245,0.85)',
                      transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ color: '#a3e635', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href={getWhatsAppUrl("Hi Shaik, I'd like to talk about a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center text-base"
                onClick={() => setMenuOpen(false)}
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

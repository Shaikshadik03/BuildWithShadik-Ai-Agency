import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';
import logoImg from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#principles' },
  { label: 'Studio', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="studio-container flex items-center justify-between">
          {/* Left: Distinctive Studio Brand Identity */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3.5 group"
            aria-label="BuildWithShadik Studio"
          >
            <img
              src={logoImg}
              alt="BuildWithShadik Logo"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-[13px] font-semibold tracking-tight text-[#f4f4f0] leading-none">
                BUILD WITH SHADIK
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#888888] mt-1 uppercase">
                HYD · DIGITAL STUDIO
              </span>
            </div>
          </a>

          {/* Center: Clean Editorial Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-[13px] font-medium text-[#888888] hover:text-[#f4f4f0] transition-colors duration-200 tracking-tight"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Thoughtful, deliberate Action */}
          <div className="hidden md:flex items-center gap-5">
            <span className="text-[11px] font-mono text-[#888888] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
              AVAILABLE Q1/Q2
            </span>
            <a
              href={getWhatsAppUrl("Hi Shaik, I'd like to discuss a project with your studio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold px-4 py-2 rounded border border-white/15 text-[#f4f4f0] hover:bg-white hover:text-[#080808] transition-all duration-200"
            >
              Let's Talk
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e5e5e0] hover:text-[#a3e635] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-12">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888]">
              Directory
            </span>
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-2xl font-serif-italic text-[#f4f4f0] hover:text-[#a3e635] flex items-center justify-between border-b border-white/[0.08] pb-3"
              >
                <span>{item.label}</span>
                <span className="text-xs font-mono text-[#888888]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#888888]">
              <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
              Currently taking select projects
            </div>
            <a
              href={getWhatsAppUrl("Hi Shaik, I'd like to talk about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-studio-primary text-center justify-center py-3.5 w-full"
            >
              Start A Conversation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-[#060606] text-[#888888] font-sans">
      <div className="studio-container space-y-12">
        {/* Top: 12-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="BuildWithShadik Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="text-sm font-semibold text-[#f4f4f0] tracking-tight">
                BUILD WITH SHADIK
              </span>
            </div>
            <p className="text-xs text-[#777777] leading-relaxed max-w-sm font-light">
              Independent digital engineering & AI solutions studio. We build bespoke websites,
              intelligent WhatsApp bots, and frictionless business automations.
            </p>
            <p className="text-xs font-mono text-[#a3e635]">
              by Shadi Creations · Maisammaguda, Hyderabad
            </p>
          </div>

          {/* Directory Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-[#e5e5e0]">
              Studio Navigation
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#777777]">
              <li><a href="#home" className="hover:text-[#f4f4f0] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#f4f4f0] transition-colors">Capabilities</a></li>
              <li><a href="#work" className="hover:text-[#f4f4f0] transition-colors">Selected Work</a></li>
              <li><a href="#process" className="hover:text-[#f4f4f0] transition-colors">Process</a></li>
              <li><a href="#about" className="hover:text-[#f4f4f0] transition-colors">Studio & Founder</a></li>
              <li><a href="#faq" className="hover:text-[#f4f4f0] transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#f4f4f0] transition-colors">Inquire</a></li>
            </ul>
          </div>

          {/* Direct Communication (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-[#e5e5e0]">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs font-mono text-[#777777]">
              <p>WhatsApp: <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="text-[#e5e5e0] hover:text-[#a3e635]">+91 8309432965</a></p>
              <p>Email: <a href="mailto:shaikshadik003@gmail.com" className="text-[#e5e5e0] hover:text-[#a3e635]">shaikshadik003@gmail.com</a></p>
              <p>Founder: <span className="text-[#e5e5e0]">Shaik Shadik</span></p>
            </div>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Hi Shaik, I'd like to discuss a project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a3e635] hover:underline"
              >
                Open WhatsApp Thread <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#555555]">
          <span>© {currentYear} BuildWithShadik. All rights reserved.</span>
          <span className="uppercase tracking-widest text-[10px]">
            Engineered with React 19 & Vite · No generic templates
          </span>
        </div>
      </div>
    </footer>
  );
}

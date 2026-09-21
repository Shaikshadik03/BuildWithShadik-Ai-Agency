import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

export default function Portfolio() {
  return (
    <section id="work" className="py-24 md:py-32 border-b border-white/[0.07]">
      <div className="studio-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="micro-label mb-3">
              <span className="micro-label-dot" />
              SELECTED WORK / 03
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-normal text-[#f4f4f0] tracking-tight mt-2">
              Built To Be Used.
              <br />
              <span className="font-serif-italic text-[#888888] font-light">
                Not Just Shown.
              </span>
            </h2>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs text-[#a3e635] bg-[#a3e635]/10 px-3 py-1.5 rounded border border-[#a3e635]/20">
              CONCEPT & LIVE DEMO PROTOTYPES
            </span>
          </div>
        </div>

        {/* 1. Large Featured Case Study (Automotive Detailing Concept) */}
        <div className="mb-14 rounded-lg bg-[#0e0e0e] border border-white/[0.1] overflow-hidden group">
          <div className="p-8 sm:p-12 border-b border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#888888]">PROJECT 01</span>
                <span className="text-white/20">/</span>
                <span className="font-mono text-xs text-[#a3e635]">DEMO CASE STUDY</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif-normal text-[#f4f4f0]">
                Apex Detailing Studio — Digital Booking & Quote Engine
              </h3>
              <p className="text-sm sm:text-base text-[#999999] max-w-2xl font-light">
                A high-contrast showcase website built for high-end vehicle detailing.
                Features an interactive before/after slider, clear tier comparison,
                and a 1-tap WhatsApp quotation workflow that captures vehicle model details.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={getWhatsAppUrl("Hi Shaik, I saw the Apex Detailing demo and want a similar quote workflow.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-studio-primary"
              >
                Inquire For This System
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Browser UI Preview Canvas */}
          <div className="p-6 sm:p-10 bg-[#090909]">
            <div className="rounded border border-white/[0.08] bg-[#121212] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="font-mono text-[11px] text-[#777777]">
                  https://apex-detailing.demo.internal
                </span>
                <span className="w-10" />
              </div>
              <div className="p-6 sm:p-10 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
                  <div>
                    <span className="font-mono text-xs text-[#a3e635] uppercase">
                      CERAMIC COATING & PAINT CORRECTION
                    </span>
                    <h4 className="text-xl sm:text-2xl font-serif-normal text-[#f4f4f0] mt-1">
                      Protect Your Investment With Ceramic Science.
                    </h4>
                  </div>
                  <span className="text-xs font-mono px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[#f4f4f0]">
                    Direct WhatsApp Quote →
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                  <div className="p-4 rounded bg-[#181818] border border-white/[0.05]">
                    <span className="text-[#888888]">STEP 01</span>
                    <p className="text-[#f4f4f0] mt-1 font-sans">Select Vehicle Class (Sedan/SUV)</p>
                  </div>
                  <div className="p-4 rounded bg-[#181818] border border-white/[0.05]">
                    <span className="text-[#888888]">STEP 02</span>
                    <p className="text-[#f4f4f0] mt-1 font-sans">Choose Coating Grade (3yr / 5yr)</p>
                  </div>
                  <div className="p-4 rounded bg-[#181818] border border-white/[0.05]">
                    <span className="text-[#888888]">STEP 03</span>
                    <p className="text-[#a3e635] mt-1 font-sans">Instant WhatsApp Quote Trigger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Secondary Asymmetric Projects (Restaurant + Salon + Workflow) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 2: Restaurant */}
          <div className="p-6 rounded-lg bg-[#0e0e0e] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#888888]">
                <span>PROJECT 02</span>
                <span className="text-[#a3e635]">DEMO</span>
              </div>
              <h4 className="text-xl font-serif-normal text-[#f4f4f0]">
                Oasis Dining & Lounge
              </h4>
              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed font-light">
                Modern mobile-first culinary website featuring live digital menus, table reservation requests, and Google Maps directions.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-[#777777]">WEB + RESERVATIONS</span>
              <a
                href={getWhatsAppUrl("Hi Shaik, I'd like a restaurant website like the Oasis demo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f4f4f0] hover:text-[#a3e635] flex items-center gap-1"
              >
                Inquire <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Project 3: Salon */}
          <div className="p-6 rounded-lg bg-[#0e0e0e] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#888888]">
                <span>PROJECT 03</span>
                <span className="text-[#a3e635]">DEMO</span>
              </div>
              <h4 className="text-xl font-serif-normal text-[#f4f4f0]">
                Lumière Studio Experience
              </h4>
              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed font-light">
                Boutique salon digital portal with service lookbooks, stylist availability schedules, and direct WhatsApp consultations.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-[#777777]">SALON + CALENDAR</span>
              <a
                href={getWhatsAppUrl("Hi Shaik, I'd like a booking system like the Lumière demo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f4f4f0] hover:text-[#a3e635] flex items-center gap-1"
              >
                Inquire <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Project 4: Business Automation Workflow */}
          <div className="p-6 rounded-lg bg-[#0e0e0e] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#888888]">
                <span>PROJECT 04</span>
                <span className="text-[#a3e635]">DEMO</span>
              </div>
              <h4 className="text-xl font-serif-normal text-[#f4f4f0]">
                SyncFlow Intake Automation
              </h4>
              <p className="text-xs sm:text-sm text-[#999999] leading-relaxed font-light">
                Full-funnel lead intake workflow connecting website inquiries to owner phone alerts, CRM spreadsheets, and auto-response sequences.
              </p>
            </div>
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
              <span className="text-[#777777]">N8N + WHATSAPP API</span>
              <a
                href={getWhatsAppUrl("Hi Shaik, I want to automate my business workflow like SyncFlow.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f4f4f0] hover:text-[#a3e635] flex items-center gap-1"
              >
                Inquire <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Ethical Transparency Note */}
        <p className="font-mono text-xs text-[#666666] text-center mt-12 uppercase tracking-wider">
          Note: Featured works are working prototypes & proof-of-concept architectures built by Shaik Shadik.
        </p>
      </div>
    </section>
  );
}

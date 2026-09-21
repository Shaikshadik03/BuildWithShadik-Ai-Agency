import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

export default function AIExperience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-b border-white/[0.07] bg-[#0b0b0b]">
      <div className="studio-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="micro-label mb-3">
              <span className="micro-label-dot" />
              SIGNATURE EXPERIENCE / 06
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-normal text-[#f4f4f0] tracking-tight mt-2">
              Autonomous Client Intake.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#888888] max-w-md font-light">
            Experience how our conversational assistants interact with real visitors:
            answering exact service questions, collecting lead details, and handing off cleanly.
          </p>
        </div>

        {/* Realistic Terminal / Chat Window Architecture */}
        <div className="max-w-4xl mx-auto rounded-lg bg-[#111111] border border-white/10 overflow-hidden shadow-2xl">
          {/* Chrome bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#161616] border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <div className="font-mono text-xs text-[#888888] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
              <span>LIVE DEMONSTRATION · SALON CLIENT FLOW</span>
            </div>
            <span className="font-mono text-[11px] text-[#666666]">ID: 8309-HYD</span>
          </div>

          {/* Conversation Stream */}
          <div className="p-6 sm:p-10 space-y-6 font-sans text-sm">
            {/* 1. Client query */}
            <div className="flex justify-end">
              <div className="max-w-md rounded-lg px-4 py-3 bg-white/10 text-[#f4f4f0] border border-white/10">
                "Hello, I need a modern website for our salon and an automated way for customers to view bridal packages and request appointments."
              </div>
            </div>

            {/* 2. AI intelligent parsing */}
            <div className="flex justify-start">
              <div className="max-w-lg rounded-lg p-5 bg-[#181818] border border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#a3e635]">
                  <span>AI ASSISTANT</span>
                  <span className="text-white/20">·</span>
                  <span className="text-[#888888]">INTENT PARSED IN 240MS</span>
                </div>
                <p className="text-[#e5e5e0] leading-relaxed">
                  "Understood. For a boutique salon, we recommend a 3-part system:
                </p>
                <ul className="text-xs font-mono space-y-1 text-[#b0b0a8] pl-2 border-l border-[#a3e635]/40">
                  <li>01. High-contrast visual showcase featuring your bridal lookbook</li>
                  <li>02. Clear transparent tier pricing with direct appointment calendar</li>
                  <li>03. Instant WhatsApp integration so clients can confirm dates with 1 tap</li>
                </ul>
                <p className="text-[#e5e5e0] text-xs pt-1">
                  Would you like to review our live salon prototype or discuss scope with Shaik Shadik?"
                </p>
              </div>
            </div>

            {/* 3. Action Trigger Callout */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#888888]">
                <span>RESULT: Lead verified ➔ Handed off to WhatsApp with prefilled spec</span>
              </div>
              <a
                href={getWhatsAppUrl("Hi Shaik, I tested the salon intake demo on your site and would like a similar system.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-studio-primary text-xs py-2 px-4"
              >
                Talk On WhatsApp
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

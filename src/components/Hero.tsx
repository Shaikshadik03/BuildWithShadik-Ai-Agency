import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

export default function Hero() {
  const handleScrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 border-b border-white/[0.07]"
    >
      <div className="studio-container w-full my-auto">
        {/* Editorial Top Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="micro-label">
              <span className="micro-label-dot" />
              BUILDWITHSHADIK / STUDIO
            </span>
            <span className="hidden sm:inline text-white/20 font-mono text-xs">/</span>
            <span className="hidden sm:inline font-mono text-[11px] text-[#888888] tracking-wider uppercase">
              HYDERABAD, IN
            </span>
          </div>

          <span className="font-mono text-[11px] text-[#888888] tracking-wider uppercase">
            EST. 2026 · SHADI CREATIONS
          </span>
        </div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 7 Columns Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-4xl sm:text-6xl xl:text-[4.75rem] font-serif-normal leading-[1.05] tracking-[-0.03em] text-[#f4f4f0] mb-8">
              Build Smarter.
              <br />
              <span className="font-serif-italic text-[#a3e635] font-light">
                Grow Better.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#999999] leading-relaxed max-w-xl font-light mb-10">
              Websites, AI systems and practical automations designed and engineered
              around how your business actually operates.
            </p>

            {/* Deliberate Action Row */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl("Hi Shaik, I'd like to build something with your studio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-studio-primary"
              >
                Let's Build Together
                <ArrowUpRight size={15} />
              </a>
              <button
                onClick={handleScrollToWork}
                className="btn-studio-secondary"
              >
                Selected Work
                <ArrowDown size={14} />
              </button>
            </div>
          </div>

          {/* Right: 5 Columns Genuine Digital Artifact Composition */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-lg bg-[#0e0e0e] border border-white/10 p-5 shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">
                  SYSTEM_MONITOR / ACTIVE
                </span>
              </div>

              {/* Layered Workflows - Real digital product representation */}
              <div className="space-y-3.5">
                {/* 1. Client Conversation */}
                <div className="p-3.5 rounded bg-[#141414] border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] mb-2">
                    <span>INCOMING_LEAD</span>
                    <span className="text-[#a3e635]">WHATSAPP · 2m ago</span>
                  </div>
                  <p className="text-xs text-[#e5e5e0] leading-snug">
                    "Hi, we need to redesign our clinic website and connect automated patient slot booking."
                  </p>
                </div>

                {/* 2. Automated Pipeline Node */}
                <div className="p-3.5 rounded bg-[#141414] border border-white/[0.06]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] mb-2">
                    <span>AI_AGENT_RESPONSE</span>
                    <span className="text-[#a3e635]">AUTONOMOUS</span>
                  </div>
                  <div className="text-xs text-[#b5b5b0] space-y-1">
                    <p>✓ Patient intent identified: Dental appointment</p>
                    <p>✓ Available slot allocated: Thu, 4:30 PM</p>
                    <p className="text-[#a3e635]">→ Calendar synced & WhatsApp confirmation dispatched</p>
                  </div>
                </div>

                {/* 3. Studio System Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06] text-center">
                  <div className="p-2 rounded bg-black/40">
                    <div className="text-xs font-mono text-[#f4f4f0]">100%</div>
                    <div className="text-[10px] text-[#777777] font-mono uppercase mt-0.5">Uptime</div>
                  </div>
                  <div className="p-2 rounded bg-black/40">
                    <div className="text-xs font-mono text-[#a3e635]">0.3s</div>
                    <div className="text-[10px] text-[#777777] font-mono uppercase mt-0.5">Response</div>
                  </div>
                  <div className="p-2 rounded bg-black/40">
                    <div className="text-xs font-mono text-[#f4f4f0]">Direct</div>
                    <div className="text-[10px] text-[#777777] font-mono uppercase mt-0.5">Handoff</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption underneath the composition */}
            <p className="font-mono text-[11px] text-[#666666] mt-3.5 text-right uppercase tracking-wider">
              FIG 01.1 — Integrated client-to-booking pipeline
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Bar */}
      <div className="studio-container w-full pt-8">
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-[#777777] font-mono uppercase tracking-widest border-t border-white/[0.06] pt-5">
          <div className="flex items-center gap-8">
            <span>[01] WEBSITES</span>
            <span>[02] CHATBOTS</span>
            <span>[03] AUTOMATION</span>
            <span>[04] VOICE SYSTEMS</span>
          </div>
          <span className="hidden sm:inline text-[#a3e635]">
            ● PRODUCTION CODE · NO NO-CODE LOCK-IN
          </span>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    focus: 'Discovery & Workflow Audit',
    description:
      'We study your actual business operations, customer communication channels, and administrative bottlenecks before writing a line of code.'
  },
  {
    step: '02',
    title: 'Design',
    focus: 'Architecture & Editorial Tone',
    description:
      'We craft a clean, high-contrast visual system and wireframe frictionless conversion paths customized to how your clients inquire.'
  },
  {
    step: '03',
    title: 'Build',
    focus: 'Clean Engineering & API Hooks',
    description:
      'We write high-performance frontend code and connect intelligent WhatsApp flows, booking systems, or automated AI responders.'
  },
  {
    step: '04',
    title: 'Deploy',
    focus: 'Production Launch & Iteration',
    description:
      'We verify domain settings, test real customer submission loops, hand over complete documentation, and provide ongoing refinement.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-b border-white/[0.07]">
      <div className="studio-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="micro-label mb-3">
              <span className="micro-label-dot" />
              METHODOLOGY / 04
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-normal text-[#f4f4f0] tracking-tight mt-2">
              Simple Process.
              <br />
              <span className="font-serif-italic text-[#888888] font-light">
                Measurable Outcomes.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#888888] max-w-sm font-light">
            No endless meetings or opaque technical jargon. Transparent, disciplined delivery from start to finish.
          </p>
        </div>

        {/* Desktop: Horizontal Continuous Timeline with thin connecting line */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative pt-6">
          {/* Subtle connecting line */}
          <div className="absolute top-[38px] left-0 right-0 h-px bg-white/[0.12] -z-0" />

          {PROCESS_STEPS.map((item, idx) => (
            <div key={item.step} className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#080808] border border-white/30 flex items-center justify-center font-mono text-[11px] text-[#a3e635]">
                  {item.step}
                </span>
                <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">
                  PHASE 0{idx + 1}
                </span>
              </div>

              <h3 className="text-2xl font-serif-normal text-[#f4f4f0] pt-2">
                {item.title}
              </h3>

              <div className="text-xs font-mono text-[#a3e635] uppercase tracking-wide">
                {item.focus}
              </div>

              <p className="text-sm text-[#999999] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet: Clean Vertical Timeline */}
        <div className="lg:hidden space-y-10 pl-4 border-l border-white/[0.12]">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step} className="relative pl-6 space-y-2">
              <span className="absolute -left-[23px] top-1 w-3.5 h-3.5 rounded-full bg-[#080808] border border-[#a3e635]" />
              <div className="font-mono text-xs text-[#888888]">PHASE {item.step}</div>
              <h3 className="text-xl font-serif-normal text-[#f4f4f0]">{item.title}</h3>
              <div className="text-xs font-mono text-[#a3e635] uppercase">{item.focus}</div>
              <p className="text-sm text-[#999999] font-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

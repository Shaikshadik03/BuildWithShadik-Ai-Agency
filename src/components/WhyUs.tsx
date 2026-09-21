import React from 'react';

const PRINCIPLES = [
  {
    num: '01',
    heading: 'Understand first.',
    text: 'We never suggest tech tools before analyzing how your business actually runs. Technology should mold to your workflow, not force you into complex new habits.'
  },
  {
    num: '02',
    heading: 'Build what matters.',
    text: 'Zero bloated template themes, zero useless animations, and zero gimmicks. We prioritize immediate speed, crisp typography, and direct customer inquiry channels.'
  },
  {
    num: '03',
    heading: 'Keep it simple.',
    text: 'A business owner should not need a computer science degree to operate their website or respond to leads. We make your digital systems intuitive and dependable.'
  },
  {
    num: '04',
    heading: 'Improve continuously.',
    text: 'A digital system is never truly finished. We remain available for ongoing technical adjustments, campaign launches, and iterative workflow refinements.'
  }
];

export default function WhyUs() {
  return (
    <section id="principles" className="py-24 md:py-32 border-b border-white/[0.07]">
      <div className="studio-container">
        {/* Large Statement Grid: 5 / 7 Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 5 Cols Editorial Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <span className="micro-label">
              <span className="micro-label-dot" />
              OUR CONVICTION / 05
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif-normal text-[#f4f4f0] leading-[1.1] tracking-tight">
              Technology should solve a problem.
              <br />
              <span className="font-serif-italic text-[#a3e635] font-light">
                Not create another one.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#999999] leading-relaxed font-light">
              Too many agencies sell complicated platforms that look impressive in a pitch
              deck but sit abandoned 3 months later. We build lightweight, resilient digital
              tools that work on day one.
            </p>
          </div>

          {/* Right Column: 7 Cols Typography & Spacing (NO identical cards) */}
          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-t lg:border-t-0 border-b border-white/[0.08]">
            {PRINCIPLES.map((item) => (
              <div key={item.num} className="py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline">
                <span className="sm:col-span-2 font-mono text-xs text-[#a3e635]">
                  [{item.num}]
                </span>
                <div className="sm:col-span-10 space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif-normal text-[#f4f4f0]">
                    {item.heading}
                  </h3>
                  <p className="text-sm text-[#999999] leading-relaxed font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

const REASONS = [
  {
    title: 'Practical Solutions',
    description:
      'We focus on tools that solve real business problems — not technology for its own sake.',
    icon: '◎',
  },
  {
    title: 'Built Around You',
    description:
      'Solutions are adapted to your business instead of forcing a fixed template on your needs.',
    icon: '◈',
  },
  {
    title: 'Modern Technology',
    description:
      'We use current AI, automation and web technologies where they actually make a difference.',
    icon: '◉',
  },
  {
    title: 'Clear & Simple',
    description:
      'No unnecessary technical complexity for the business owner. You focus on your business; we handle the tech.',
    icon: '◎',
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 md:py-32"
      style={{ background: '#0a0a0a' }}
      aria-labelledby="whyus-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="section-label mb-4">Why Build With Shadik?</p>
          <h2 id="whyus-heading" className="section-heading mb-5">
            Technology That Works
            <br />
            <span style={{ color: '#a3e635' }}>For Your Business.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{
                  background: 'rgba(163,230,53,0.08)',
                  border: '1px solid rgba(163,230,53,0.15)',
                  color: '#a3e635',
                }}
                aria-hidden="true"
              >
                {reason.icon}
              </div>
              <h3 className="font-semibold text-base" style={{ color: '#f5f5f5' }}>
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,245,245,0.5)' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

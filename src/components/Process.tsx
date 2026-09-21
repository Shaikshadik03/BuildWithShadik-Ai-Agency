import React from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We understand your business, customers and current digital setup before recommending anything.',
    icon: '◎',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'We create the right digital experience around your business goals and customer expectations.',
    icon: '◈',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'We build, test and connect the required tools — keeping you informed throughout.',
    icon: '◉',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'We help you launch and continue to improve the system as your business grows.',
    icon: '◎',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32"
      style={{
        background: '#0d0d0d',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      aria-labelledby="process-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Our Process</p>
          <h2 id="process-heading" className="section-heading mb-4">
            Simple Process.
            <br />
            <span style={{ color: '#a3e635' }}>Clear Results.</span>
          </h2>
          <p style={{ color: 'rgba(245,245,245,0.55)', lineHeight: 1.7 }}>
            No unnecessary complexity. We keep the process transparent and collaborative from start to finish.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute top-8 left-0 right-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(163,230,53,0.3) 20%, rgba(163,230,53,0.3) 80%, transparent)',
              }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <div key={step.number} className="flex flex-col">
                  {/* Dot */}
                  <div className="relative flex justify-start mb-8">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: '#a3e635',
                        boxShadow: '0 0 12px rgba(163,230,53,0.5)',
                      }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <span
                      className="text-xs font-mono font-bold mb-3 block"
                      style={{ color: 'rgba(163,230,53,0.5)' }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#f5f5f5' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'rgba(245,245,245,0.5)' }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden flex flex-col">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              {/* Left: line + dot */}
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0"
                  style={{
                    background: '#a3e635',
                    boxShadow: '0 0 10px rgba(163,230,53,0.4)',
                  }}
                  aria-hidden="true"
                />
                {i < STEPS.length - 1 && (
                  <div
                    className="w-px flex-1 mt-2"
                    style={{ background: 'rgba(163,230,53,0.2)', minHeight: '60px' }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Content */}
              <div className="pb-10">
                <span
                  className="text-xs font-mono font-bold mb-1 block"
                  style={{ color: 'rgba(163,230,53,0.5)' }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#f5f5f5' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(245,245,245,0.5)' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

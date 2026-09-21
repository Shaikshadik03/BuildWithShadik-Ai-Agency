import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const BG_COLORS = [
  'rgba(163,230,53,0.04)',
  'rgba(255,255,255,0.03)',
  'rgba(100,140,255,0.04)',
  'rgba(255,180,100,0.04)',
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 md:py-32"
      style={{ background: '#0a0a0a' }}
      aria-labelledby="portfolio-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="section-label mb-4">Selected Work</p>
          <h2 id="portfolio-heading" className="section-heading mb-5">
            Built To Be Used.
            <br />
            <span style={{ color: '#a3e635' }}>Not Just Shown.</span>
          </h2>
          <p style={{ color: 'rgba(245,245,245,0.55)', lineHeight: 1.7 }}>
            Each project below demonstrates a real digital solution. These are concept and demo projects — clearly marked as such.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {portfolio.map((item, i) => (
            <article
              key={item.id}
              className="group rounded-2xl overflow-hidden cursor-default"
              style={{
                border: '1px solid rgba(255,255,255,0.07)',
                background: 'rgba(14,14,14,0.8)',
                transition: 'border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
              aria-label={`Portfolio: ${item.title}`}
            >
              {/* Visual panel */}
              <div
                className="h-44 relative overflow-hidden"
                style={{ background: BG_COLORS[i % BG_COLORS.length] }}
                aria-hidden="true"
              >
                {/* Abstract visual */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                >
                  <div
                    className="w-32 h-20 rounded-xl flex items-center justify-center text-3xl"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {i === 0 ? '🍽️' : i === 1 ? '✂️' : i === 2 ? '🚗' : '⚡'}
                  </div>
                </div>
                {/* Demo badge */}
                <div
                  className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full tracking-widest uppercase"
                  style={{
                    background: 'rgba(255,200,50,0.1)',
                    border: '1px solid rgba(255,200,50,0.3)',
                    color: 'rgb(255,200,50)',
                  }}
                >
                  Demo Project
                </div>
                {/* Number */}
                <div
                  className="absolute top-3 right-3 text-xs font-mono font-bold"
                  style={{ color: 'rgba(245,245,245,0.2)' }}
                >
                  {item.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p
                      className="text-xs mb-1 font-medium tracking-wide uppercase"
                      style={{ color: 'rgba(163,230,53,0.7)' }}
                    >
                      {item.category}
                    </p>
                    <h3
                      className="font-semibold text-base"
                      style={{ color: '#f5f5f5' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-200 group-hover:bg-white group-hover:border-white"
                    style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={14}
                      style={{ color: 'rgba(245,245,245,0.5)' }}
                      className="group-hover:text-black transition-colors"
                    />
                  </div>
                </div>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgba(245,245,245,0.5)' }}>
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(245,245,245,0.4)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p
          className="text-center mt-10 text-sm"
          style={{ color: 'rgba(245,245,245,0.3)' }}
        >
          These are concept and demo projects. Client projects will be listed here as we grow.
        </p>
      </div>
    </section>
  );
}

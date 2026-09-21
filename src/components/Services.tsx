import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  MessageCircle, Sparkles, Globe, Bot, Zap, Mic, CalendarCheck, MapPin,
} from 'lucide-react';
import type { Service } from '../data/services';
import { services } from '../data/services';

const ICON_MAP: Record<string, React.ElementType> = {
  MessageCircle,
  Sparkles,
  Globe,
  Bot,
  Zap,
  Mic,
  CalendarCheck,
  MapPin,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = ICON_MAP[service.icon] ?? Globe;

  return (
    <article
      className="card-hover group rounded-2xl p-6 flex flex-col gap-4 cursor-default"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        animationDelay: `${index * 60}ms`,
      }}
      aria-label={`Service: ${service.title}`}
    >
      {/* Number + Badge */}
      <div className="flex items-start justify-between">
        <span
          className="text-xs font-mono font-semibold"
          style={{ color: 'rgba(163,230,53,0.5)' }}
          aria-hidden="true"
        >
          {service.number}
        </span>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(163,230,53,0.08)',
            border: '1px solid rgba(163,230,53,0.2)',
            color: '#a3e635',
          }}
        >
          {service.badge}
        </span>
      </div>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        aria-hidden="true"
      >
        <Icon
          size={20}
          style={{ color: '#a3e635', transition: 'filter 0.3s ease' }}
          className="group-hover:drop-shadow-[0_0_8px_rgba(163,230,53,0.6)]"
        />
      </div>

      {/* Title */}
      <h3
        className="font-semibold text-base leading-snug"
        style={{ color: '#f5f5f5' }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'rgba(245,245,245,0.55)' }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <div
        className="flex items-center gap-1.5 text-sm font-medium pt-2 border-t"
        style={{
          borderColor: 'rgba(255,255,255,0.06)',
          color: 'rgba(245,245,245,0.5)',
        }}
      >
        <span className="group-hover:text-white transition-colors duration-200">
          {service.cta}
        </span>
        <ArrowRight
          size={14}
          className="transition-all duration-200 group-hover:translate-x-1"
          style={{ color: '#a3e635' }}
          aria-hidden="true"
        />
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{ background: '#0a0a0a' }}
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="section-label mb-4">What We Build</p>
          <h2 id="services-heading" className="section-heading mb-5">
            Everything You Need to Build,
            <br />
            <span style={{ color: '#a3e635' }}>Automate & Grow.</span>
          </h2>
          <p style={{ color: 'rgba(245,245,245,0.55)', lineHeight: 1.7 }}>
            From your first website to AI-powered customer workflows, we build practical digital systems around your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

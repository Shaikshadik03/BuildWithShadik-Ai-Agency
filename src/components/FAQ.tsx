import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/faq';

function FAQItem({ item, isOpen, onToggle }: {
  item: { id: string; question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{
        background: isOpen ? 'rgba(163,230,53,0.04)' : 'rgba(255,255,255,0.025)',
        border: `1px solid ${isOpen ? 'rgba(163,230,53,0.2)' : 'rgba(255,255,255,0.07)'}`,
      }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
        id={`faq-question-${item.id}`}
      >
        <span
          className="font-medium text-sm md:text-base leading-snug"
          style={{ color: isOpen ? '#f5f5f5' : 'rgba(245,245,245,0.8)' }}
        >
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            color: isOpen ? '#a3e635' : 'rgba(245,245,245,0.4)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-answer-${item.id}`}
        role="region"
        aria-labelledby={`faq-question-${item.id}`}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          className="px-6 pb-5 text-sm leading-relaxed border-t"
          style={{
            color: 'rgba(245,245,245,0.6)',
            borderColor: 'rgba(255,255,255,0.05)',
            paddingTop: '1rem',
          }}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="py-24 md:py-32"
      style={{ background: '#0a0a0a' }}
      aria-labelledby="faq-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Header */}
          <div>
            <p className="section-label mb-4">FAQ</p>
            <h2 id="faq-heading" className="section-heading mb-5">
              Common
              <br />
              <span style={{ color: '#a3e635' }}>Questions.</span>
            </h2>
            <p style={{ color: 'rgba(245,245,245,0.55)', lineHeight: 1.7, maxWidth: '380px' }}>
              Still have questions? Reach out on WhatsApp or use the contact form below.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3" role="list">
            {faqItems.map((item) => (
              <div key={item.id} role="listitem">
                <FAQItem
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What kind of businesses do you typically partner with?',
    a: 'We work primarily with small, medium, and local service enterprises — including clinics, restaurants, salons, automotive studios, and modern consultancy firms who need a reliable, high-converting digital storefront and automated client communication.'
  },
  {
    q: 'Can you build a custom website with WhatsApp integration?',
    a: 'Yes. Every website we build is coded specifically around your customer path. We integrate one-tap WhatsApp inquiries, quote configurators, and lead capture forms that forward notifications directly to your phone in real-time.'
  },
  {
    q: 'How does your AI chatbot service work?',
    a: 'We deploy virtual assistants trained on your exact service menu, pricing structure, and FAQs. The bot answers questions around the clock, captures lead contacts, and seamlessly routes hot prospects to WhatsApp.'
  },
  {
    q: 'What can you automate across WhatsApp and our inbox?',
    a: 'We automate repetitive tasks like sending immediate booking confirmations, scheduling appointment reminders to reduce customer no-shows, and synchronizing new website leads directly into Google Sheets or your CRM via n8n and Make.'
  },
  {
    q: 'Can you create studio-grade AI visuals for our brand?',
    a: 'Yes. We generate high-fidelity product imagery, social media campaign visuals, and promotional graphics without the overhead of renting a commercial photography studio.'
  },
  {
    q: 'How do we get started on a new project?',
    a: 'Simply send a brief message outlining what you need via WhatsApp (+91 8309432965) or use the inquiry form below. Shaik Shadik will personally review your requirements and provide a clear, transparent scope proposal.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 border-b border-white/[0.07]">
      <div className="studio-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="micro-label mb-3">
              <span className="micro-label-dot" />
              CLARIFICATIONS / 08
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-normal text-[#f4f4f0] tracking-tight mt-2">
              Frequently Discussed.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#888888] max-w-sm font-light">
            Plain answers to common questions about our studio, delivery timelines, and technology stack.
          </p>
        </div>

        {/* Minimalist Editorial Accordion (Hairline rules, zero bulky cards) */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.q} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left gap-6 group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-2xl font-serif-normal text-[#e5e5e0] group-hover:text-[#f4f4f0] transition-colors">
                    {faq.q}
                  </span>
                  <span className="font-mono text-xs text-[#888888] group-hover:text-[#a3e635] flex items-center gap-1 transition-colors flex-shrink-0">
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#a3e635]' : ''}`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 text-sm sm:text-base text-[#999999] leading-relaxed font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

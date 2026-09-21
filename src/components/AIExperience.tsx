import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

const WORKFLOW_STEPS = [
  { label: 'Customer', icon: '👤' },
  { label: 'AI Chatbot', icon: '🤖' },
  { label: 'Lead Captured', icon: '✅' },
  { label: 'WhatsApp Follow-up', icon: '💬' },
  { label: 'Appointment', icon: '📅' },
];

export default function AIExperience() {
  return (
    <section
      id="ai-experience"
      className="py-24 md:py-32"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(163,230,53,0.04) 0%, transparent 70%), #0d0d0d',
      }}
      aria-labelledby="ai-experience-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <p className="section-label mb-4">AI in Action</p>
          <h2 id="ai-experience-heading" className="section-heading mb-5">
            See What AI Can Do
            <br />
            <span style={{ color: '#a3e635' }}>For Your Business.</span>
          </h2>
          <p style={{ color: 'rgba(245,245,245,0.55)', lineHeight: 1.7 }}>
            Here's a real example of how an AI system can handle a customer conversation and automatically move them through your workflow.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div
          className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(14,14,14,0.95)',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.7)',
          }}
          role="img"
          aria-label="AI chat workflow demo"
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-5 py-4 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-center gap-2">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
            </div>
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: 'rgba(245,245,245,0.3)' }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#a3e635',
                  display: 'inline-block',
                  animation: 'pulse 2s infinite',
                }}
              />
              BuildWithShadik AI — Live Demo
            </div>
            <div style={{ width: '60px' }} />
          </div>

          {/* Chat area */}
          <div className="p-6 flex flex-col gap-4">
            {/* Customer message */}
            <div className="flex justify-end">
              <div className="flex flex-col items-end gap-1">
                <span
                  className="text-xs mb-1"
                  style={{ color: 'rgba(245,245,245,0.3)' }}
                >
                  Customer
                </span>
                <div
                  className="rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(245,245,245,0.9)',
                  }}
                >
                  Hi, I want to know about your services.
                </div>
              </div>
            </div>

            {/* AI response */}
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: 'rgba(163,230,53,0.15)',
                  border: '1px solid rgba(163,230,53,0.3)',
                  color: '#a3e635',
                }}
                aria-hidden="true"
              >
                AI
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs" style={{ color: 'rgba(245,245,245,0.3)' }}>
                  BuildWithShadik AI
                </span>
                <div
                  className="rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed max-w-sm"
                  style={{
                    background: 'rgba(163,230,53,0.06)',
                    border: '1px solid rgba(163,230,53,0.15)',
                    color: 'rgba(245,245,245,0.85)',
                  }}
                >
                  Absolutely. We can help with websites, automation, AI chatbots, voice agents and more. Would you like to explore our services?
                </div>
                {/* Quick reply chips */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Websites', 'AI Chatbot', 'Automation'].map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1.5 rounded-full cursor-default"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: 'rgba(245,245,245,0.65)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className="border-t my-2"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            />

            {/* Workflow */}
            <div>
              <p
                className="text-xs font-semibold mb-4 tracking-widest uppercase"
                style={{ color: 'rgba(245,245,245,0.3)' }}
              >
                Automated workflow triggered
              </p>
              <div className="flex items-center flex-wrap gap-2">
                {WORKFLOW_STEPS.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
                      style={{
                        background: i === 0 ? 'rgba(163,230,53,0.1)' : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${i === 0 ? 'rgba(163,230,53,0.25)' : 'rgba(255,255,255,0.07)'}`,
                        color: i === 0 ? '#a3e635' : 'rgba(245,245,245,0.55)',
                      }}
                    >
                      <span>{step.icon}</span>
                      <span className="font-medium text-xs whitespace-nowrap">{step.label}</span>
                    </div>
                    {i < WORKFLOW_STEPS.length - 1 && (
                      <ArrowRight
                        size={12}
                        style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }}
                        aria-hidden="true"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* CTA bar */}
          <div
            className="px-6 py-4 border-t flex items-center justify-between flex-wrap gap-3"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <p
              className="text-xs"
              style={{ color: 'rgba(245,245,245,0.35)' }}
            >
              This is a concept demo. We build real AI systems for real businesses.
            </p>
            <a
              href={getWhatsAppUrl("Hi, I'd like to try your AI chatbot for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-5"
            >
              Build This For My Business
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

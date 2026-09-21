import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT } from '../services/whatsappService';

const SERVICE_OPTIONS = [
  'Website',
  'AI Photos',
  'AI Chatbot',
  'WhatsApp Automation',
  'AI Voice Agent',
  'Appointment Booking',
  'Maps / Local Presence',
  'Something Else',
];

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'A valid email is required.';
    }
    if (!form.message.trim()) errs.message = 'Please tell us what you need.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    // Demo: no real backend. Simulate a delay.
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '0.75rem 1rem',
    color: '#f5f5f5',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    marginBottom: '0.4rem',
    color: 'rgba(245,245,245,0.55)',
    letterSpacing: '0.04em',
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{
        background: '#0d0d0d',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
      aria-labelledby="contact-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <p className="section-label mb-4">Contact</p>
            <h2 id="contact-heading" className="section-heading mb-5">
              Let's Build
              <br />
              <span style={{ color: '#a3e635' }}>Something Useful.</span>
            </h2>
            <p className="mb-10" style={{ color: 'rgba(245,245,245,0.6)', lineHeight: 1.7 }}>
              Have an idea, business problem or project in mind? Let's discuss what can be built.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.15)' }}
                  aria-hidden="true"
                >
                  <Phone size={16} style={{ color: '#a3e635' }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'rgba(245,245,245,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Phone / WhatsApp
                  </p>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="text-sm font-medium transition-colors"
                    style={{ color: '#f5f5f5' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a3e635')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#f5f5f5')}
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.15)' }}
                  aria-hidden="true"
                >
                  <Mail size={16} style={{ color: '#a3e635' }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'rgba(245,245,245,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm font-medium transition-colors"
                    style={{ color: '#f5f5f5' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#a3e635')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#f5f5f5')}
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.15)' }}
                  aria-hidden="true"
                >
                  <MapPin size={16} style={{ color: '#a3e635' }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'rgba(245,245,245,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Location
                  </p>
                  <p className="text-sm font-medium" style={{ color: '#f5f5f5' }}>
                    {CONTACT.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Founder */}
            <div
              className="mt-10 p-4 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="text-sm font-semibold" style={{ color: '#f5f5f5' }}>
                Shaik Shadik
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(245,245,245,0.4)' }}>
                Founder · BuildWithShadik · by Shadi Creations
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center gap-5 rounded-2xl p-10"
                style={{
                  background: 'rgba(163,230,53,0.04)',
                  border: '1px solid rgba(163,230,53,0.2)',
                  minHeight: '400px',
                }}
                role="status"
                aria-live="polite"
              >
                <CheckCircle size={48} style={{ color: '#a3e635' }} aria-hidden="true" />
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#f5f5f5' }}>
                    Enquiry Received
                  </h3>
                  <p className="text-sm" style={{ color: 'rgba(245,245,245,0.55)', lineHeight: 1.7 }}>
                    Thanks — your enquiry has been received.
                    <br />
                    We'll be in touch soon.
                  </p>
                  <p className="text-xs mt-4" style={{ color: 'rgba(245,245,245,0.3)' }}>
                    Note: This is a demo submission. No email was sent yet — backend integration coming soon.
                  </p>
                </div>
                <button
                  className="btn-secondary text-sm"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-5"
                aria-label="Contact enquiry form"
              >
                {/* Name + Business */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      style={{
                        ...inputStyle,
                        borderColor: errors.name ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.1)',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.1)')}
                      autoComplete="name"
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      aria-required="true"
                    />
                    {errors.name && (
                      <p id="contact-name-error" role="alert" className="text-xs mt-1" style={{ color: 'rgb(255,100,100)' }}>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-business" style={labelStyle}>
                      Business Name
                    </label>
                    <input
                      id="contact-business"
                      type="text"
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="Your business (optional)"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      autoComplete="organization"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      style={{
                        ...inputStyle,
                        borderColor: errors.email ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.1)',
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.1)')}
                      autoComplete="email"
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      aria-required="true"
                    />
                    {errors.email && (
                      <p id="contact-email-error" role="alert" className="text-xs mt-1" style={{ color: 'rgb(255,100,100)' }}>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" style={labelStyle}>
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 ... (optional)"
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Service dropdown */}
                <div>
                  <label htmlFor="contact-service" style={labelStyle}>
                    What do you need?
                  </label>
                  <select
                    id="contact-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      cursor: 'pointer',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" style={{ background: '#1a1a1a' }}>
                      Select a service...
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} style={{ background: '#1a1a1a' }}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" style={labelStyle}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your business and what you're looking to build..."
                    rows={4}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '100px',
                      borderColor: errors.message ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.1)',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? 'rgba(255,80,80,0.5)' : 'rgba(255,255,255,0.1)')}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    aria-required="true"
                  />
                  {errors.message && (
                    <p id="contact-message-error" role="alert" className="text-xs mt-1" style={{ color: 'rgb(255,100,100)' }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary justify-center"
                  disabled={loading}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                        style={{ animation: 'spin 0.8s linear infinite', display: 'inline-block' }}
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send size={15} />
                    </>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: 'rgba(245,245,245,0.25)' }}>
                  Demo mode — form data is not sent to a server yet.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

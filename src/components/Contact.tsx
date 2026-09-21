import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

export default function Contact() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [service, setService] = useState('Website');
  const [contactInfo, setContactInfo] = useState('');
  const [notes, setNotes] = useState('');

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Shaik, I'm reaching out from BuildWithShadik website.
Name: ${name || 'N/A'}
Business: ${business || 'N/A'}
Service Needed: ${service}
Contact Details: ${contactInfo || 'N/A'}
Project Notes: ${notes || 'N/A'}`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-white/[0.07]">
      <div className="studio-container">
        {/* Asymmetric Split: 5 / 7 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: 5 Cols Direct Communication */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="micro-label mb-3">
                <span className="micro-label-dot" />
                INITIATE PROJECT / 09
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-normal text-[#f4f4f0] tracking-tight mt-2">
                Have a project in mind?
                <br />
                <span className="font-serif-italic text-[#a3e635] font-light">
                  Let's build something useful.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#999999] leading-relaxed font-light">
              We respond promptly to every serious inquiry. Direct conversation with the
              founder — no junior middlemen, no high-pressure sales scripts.
            </p>

            <div className="pt-6 border-t border-white/[0.08] space-y-4 font-mono text-xs">
              <div className="flex flex-col">
                <span className="text-[#666666] uppercase text-[10px]">DIRECT WHATSAPP / CALL</span>
                <a
                  href={getWhatsAppUrl("Hi Shaik, I'd like to talk about a project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f4f4f0] hover:text-[#a3e635] transition-colors text-sm font-sans mt-0.5"
                >
                  +91 8309432965
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-[#666666] uppercase text-[10px]">EMAIL INQUIRY</span>
                <a
                  href="mailto:shaikshadik003@gmail.com"
                  className="text-[#f4f4f0] hover:text-[#a3e635] transition-colors text-sm font-sans mt-0.5"
                >
                  shaikshadik003@gmail.com
                </a>
              </div>

              <div className="flex flex-col">
                <span className="text-[#666666] uppercase text-[10px]">BASE LOCATION</span>
                <span className="text-[#999999] text-sm font-sans mt-0.5">
                  Maisammaguda, Hyderabad, Telangana, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Cols Clean Studio Project Brief Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-lg bg-[#0e0e0e] border border-white/10">
            <h3 className="text-xl font-serif-normal text-[#f4f4f0] mb-2">
              Start A Conversation
            </h3>
            <p className="text-xs font-mono text-[#888888] mb-8">
              Fill in your project brief to open an immediate WhatsApp conversation with Shaik Shadik.
            </p>

            <form onSubmit={handleLaunchWhatsApp} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#888888] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded bg-[#161616] border border-white/10 text-sm text-[#f4f4f0] placeholder-[#555555] focus:outline-none focus:border-[#a3e635] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#888888] mb-2">
                    Business / Company
                  </label>
                  <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="e.g. Apex Studio"
                    className="w-full px-4 py-3 rounded bg-[#161616] border border-white/10 text-sm text-[#f4f4f0] placeholder-[#555555] focus:outline-none focus:border-[#a3e635] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#888888] mb-2">
                    Primary Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-[#161616] border border-white/10 text-sm text-[#f4f4f0] focus:outline-none focus:border-[#a3e635] transition-colors"
                  >
                    <option value="Business Website">Business Website</option>
                    <option value="AI Chatbot System">AI Chatbot System</option>
                    <option value="WhatsApp & Inbox Automation">WhatsApp & Inbox Automation</option>
                    <option value="AI Voice Agent">AI Voice Agent</option>
                    <option value="Appointment Booking System">Appointment Booking System</option>
                    <option value="AI-Generated Visuals">AI-Generated Visuals</option>
                    <option value="Google Maps & Local SEO">Google Maps & Local SEO</option>
                    <option value="Full Digital Infrastructure">Full Digital Infrastructure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase text-[#888888] mb-2">
                    Phone / WhatsApp or Email
                  </label>
                  <input
                    type="text"
                    required
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
                    placeholder="+91 or email"
                    className="w-full px-4 py-3 rounded bg-[#161616] border border-white/10 text-sm text-[#f4f4f0] placeholder-[#555555] focus:outline-none focus:border-[#a3e635] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-[#888888] mb-2">
                  Tell us briefly about what you want to achieve
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share any details about your current setup or goals..."
                  className="w-full px-4 py-3 rounded bg-[#161616] border border-white/10 text-sm text-[#f4f4f0] placeholder-[#555555] focus:outline-none focus:border-[#a3e635] transition-colors"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <span className="text-[11px] font-mono text-[#666666]">
                  Opens your WhatsApp directly with prefilled spec.
                </span>
                <button
                  type="submit"
                  className="btn-studio-primary w-full sm:w-auto"
                >
                  Send Project Brief
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

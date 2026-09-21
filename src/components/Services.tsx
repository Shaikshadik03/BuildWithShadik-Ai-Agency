import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

interface ServiceEntry {
  num: string;
  title: string;
  tag: string;
  summary: string;
  detail: string;
}

const SERVICES_LIST: ServiceEntry[] = [
  {
    num: '01',
    title: 'Custom Business Websites',
    tag: 'Web Engineering',
    summary: 'Fast, responsive sites coded in React and Vite. Zero clunky WordPress plugins.',
    detail: 'Clean typography, mobile-first layouts, WhatsApp chat buttons, and sensible forms that send inquiries directly to your phone.'
  },
  {
    num: '02',
    title: 'WhatsApp Automation & Alerts',
    tag: 'Messaging Workflows',
    summary: 'Send instant booking confirmations and alert owners when customers reach out.',
    detail: 'We connect your website forms to WhatsApp so you can reply in seconds without checking email all day.'
  },
  {
    num: '03',
    title: 'Customer Support Chatbots',
    tag: 'Chat Systems',
    summary: 'Helpful website assistants that answer pricing and location questions 24/7.',
    detail: 'Trained on your real menu, price sheet, or FAQ so customers get instant answers at midnight.'
  },
  {
    num: '04',
    title: 'WhatsApp Business Configuration',
    tag: 'Local Sales Channel',
    summary: 'Professional profile setup, catalog creation, and organized customer labels.',
    detail: 'Turn casual chats into structured sales with auto-greetings and catalog showcases.'
  },
  {
    num: '05',
    title: 'Phone Call Support Agents',
    tag: 'Voice Inquiries',
    summary: 'Automated voice answering for common questions and appointment bookings.',
    detail: 'Takes customer calls when your staff is busy and logs inquiries straight into your calendar.'
  },
  {
    num: '06',
    title: 'Self-Serve Appointment Scheduling',
    tag: 'Calendar Systems',
    summary: 'Let customers pick their own haircut or consultation slot directly online.',
    detail: 'Reduces phone tag with real-time slot selection and WhatsApp appointment reminders.'
  },
  {
    num: '07',
    title: 'Product & Social Media Visuals',
    tag: 'Graphic Assets',
    summary: 'Clean promotional graphics and product showcase images for your social feeds.',
    detail: 'High-resolution images sized for Instagram stories, banners, and digital menus.'
  },
  {
    num: '08',
    title: 'Google Maps & Local Presence',
    tag: 'Local Visibility',
    summary: 'Get found easily when people in Hyderabad search for your shop or service.',
    detail: 'Google Business Profile optimization, clear map directions, and WhatsApp review collection.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-b border-white/[0.07]">
      <div className="studio-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="micro-label mb-3">
              <span className="micro-label-dot" />
              CAPABILITIES / 02
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-normal text-[#f4f4f0] tracking-tight mt-2">
              What We Build & Automate.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#888888] max-w-md font-light">
            We build practical digital systems that remove repetitive manual tasks
            and make it effortless for customers to reach you.
          </p>
        </div>

        {/* Highlighted Hero Capability: Large Featured Component */}
        <div className="mb-14 p-8 sm:p-12 rounded-lg bg-[#0e0e0e] border border-white/[0.1] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#a3e635] bg-[#a3e635]/10 px-2.5 py-1 rounded">
                PRIMARY SERVICE
              </span>
              <span className="text-xs font-mono text-[#777777]">FEATURED DISCIPLINE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif-normal text-[#f4f4f0]">
              Bespoke Business Websites & Digital Systems
            </h3>
            <p className="text-[#999999] text-sm sm:text-base leading-relaxed font-light">
              Your website is your strongest sales representative. We engineer modern,
              editorial-grade web platforms designed around conversion: fast load times,
              accessible typography, direct WhatsApp inquiry hooks, and zero template cliches.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href={getWhatsAppUrl("Hi Shaik, I want to discuss a custom website for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-studio-primary"
              >
                Inquire For Website
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded bg-[#141414] border border-white/[0.06] font-mono text-xs text-[#888888] space-y-3">
            <div className="text-[#a3e635] border-b border-white/[0.08] pb-2 font-semibold">
              SPECIFICATION ARCHITECTURE
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span>STACK</span>
              <span className="text-[#e5e5e0]">React 19 / TypeScript / Vite</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span>LAYOUT</span>
              <span className="text-[#e5e5e0]">100% Fluid & Mobile-First</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span>INTEGRATION</span>
              <span className="text-[#e5e5e0]">WhatsApp / Forms / Booking</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.04]">
              <span>DELIVERY</span>
              <span className="text-[#e5e5e0]">7–14 Days Standard</span>
            </div>
          </div>
        </div>

        {/* Editorial Service Directory: Asymmetrical List with subtle hover interactions */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {SERVICES_LIST.slice(1).map((service) => (
            <div
              key={service.num}
              className="py-7 group flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors duration-200 hover:bg-white/[0.02] px-4 -mx-4 rounded"
            >
              <div className="flex items-start md:items-center gap-6">
                <span className="font-mono text-xs text-[#666666] group-hover:text-[#a3e635] transition-colors pt-1 md:pt-0">
                  [{service.num}]
                </span>
                <div>
                  <h4 className="text-xl sm:text-2xl font-serif-normal text-[#f4f4f0] group-hover:text-[#a3e635] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs font-mono text-[#777777] mt-1 uppercase tracking-wider">
                    {service.tag}
                  </p>
                </div>
              </div>

              <div className="max-w-md">
                <p className="text-sm text-[#999999] leading-relaxed font-light">
                  {service.summary}
                </p>
              </div>

              <a
                href={getWhatsAppUrl(`Hi Shaik, I'd like to explore your ${service.title} service.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start md:self-center font-mono text-xs uppercase tracking-widest text-[#888888] group-hover:text-[#f4f4f0] inline-flex items-center gap-1.5 transition-colors"
              >
                Discuss Scope
                <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

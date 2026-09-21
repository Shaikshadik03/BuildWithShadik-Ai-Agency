export interface PortfolioItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  isDemo: true;
}

export const portfolio: PortfolioItem[] = [
  {
    id: 'restaurant',
    number: '01',
    title: 'Local Restaurant Website',
    category: 'Business Website',
    description: 'Modern restaurant website with digital menu, location info, gallery and WhatsApp enquiry integration.',
    tags: ['Website', 'WhatsApp CTA', 'Mobile-First'],
    isDemo: true,
  },
  {
    id: 'salon',
    number: '02',
    title: 'Salon Digital Experience',
    category: 'Business Website + Booking',
    description: 'Service showcase, appointment enquiry flow and WhatsApp CTA built for a local salon.',
    tags: ['Website', 'Booking', 'AI Chatbot'],
    isDemo: true,
  },
  {
    id: 'automotive',
    number: '03',
    title: 'Automotive Detailing Website',
    category: 'Business Website',
    description: 'Before/after gallery, service packages, and quotation enquiry form for a detailing studio.',
    tags: ['Website', 'Gallery', 'Enquiry Form'],
    isDemo: true,
  },
  {
    id: 'automation',
    number: '04',
    title: 'Local Business Automation',
    category: 'Automation Workflow',
    description: 'Lead capture and follow-up workflow concept connecting WhatsApp, email and appointment booking.',
    tags: ['Automation', 'WhatsApp', 'Lead Capture'],
    isDemo: true,
  },
];

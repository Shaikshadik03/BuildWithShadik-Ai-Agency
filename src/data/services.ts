export interface Service {
  id: string;
  number: string;
  slug: string;
  title: string;
  description: string;
  badge: string;
  cta: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'whatsapp-business',
    number: '01',
    slug: 'whatsapp-business',
    title: 'WhatsApp Business Setup',
    description: 'Professional WhatsApp Business setup including business profile, catalogue, quick replies, labels and customer communication structure.',
    badge: 'No Coding',
    cta: 'Explore Service',
    icon: 'MessageCircle',
  },
  {
    id: 'ai-photos',
    number: '02',
    slug: 'ai-photos',
    title: 'AI-Generated Photos',
    description: 'High-quality AI-generated visuals for social media, products, advertisements, campaigns and business branding.',
    badge: 'Creative AI',
    cta: 'Explore Service',
    icon: 'Sparkles',
  },
  {
    id: 'websites',
    number: '03',
    slug: 'websites',
    title: 'Business Websites',
    description: 'Modern responsive websites designed around your business, services, brand identity and customer journey.',
    badge: 'Responsive',
    cta: 'View Website Demo',
    icon: 'Globe',
  },
  {
    id: 'ai-chatbot',
    number: '04',
    slug: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'AI-powered customer support and enquiry systems that can answer common questions and guide customers automatically.',
    badge: 'AI Powered',
    cta: 'Try Chatbot',
    icon: 'Bot',
  },
  {
    id: 'automation',
    number: '05',
    slug: 'automation',
    title: 'Inbox & WhatsApp Automation',
    description: 'Automate repetitive communication, lead follow-ups and workflows across business inboxes and messaging systems.',
    badge: 'Automation',
    cta: 'Explore Automation',
    icon: 'Zap',
  },
  {
    id: 'voice-agent',
    number: '06',
    slug: 'voice-agent',
    title: 'AI Voice Agent',
    description: 'AI voice systems designed to handle conversations, enquiries, lead qualification and customer interactions.',
    badge: 'Voice AI',
    cta: 'Try Voice Demo',
    icon: 'Mic',
  },
  {
    id: 'appointment-booking',
    number: '07',
    slug: 'appointment-booking',
    title: 'AI Appointment Booking',
    description: 'Simple booking systems that allow customers to select services, available times and submit appointment requests.',
    badge: 'Booking',
    cta: 'View Booking Demo',
    icon: 'CalendarCheck',
  },
  {
    id: 'maps-automation',
    number: '08',
    slug: 'maps-automation',
    title: 'Maps & Location Automation',
    description: 'Help businesses improve their local digital presence, location information, customer discovery and review workflows.',
    badge: 'Local Growth',
    cta: 'Explore Service',
    icon: 'MapPin',
  },
];

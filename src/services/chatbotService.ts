// Chatbot service - structured response system
// This service layer is designed so you can later replace getAIResponse
// with a real API call (OpenAI, Claude, Gemini, etc.) without changing any UI code.

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

// ─── Local response engine ──────────────────────────────────────────────────

interface ResponseRule {
  keywords?: string[];
  response: string;
  quickReplies?: string[];
}

const RESPONSE_RULES: ResponseRule[] = [
  {
    keywords: ['website', 'site', 'web', 'page'],
    response: `Absolutely. We build modern, responsive business websites designed around your brand and customers.\n\nEach website includes:\n• Mobile-first responsive design\n• WhatsApp integration\n• Contact & enquiry forms\n• Service/product showcase\n• SEO-ready structure\n\nWould you like to explore more?`,
    quickReplies: ['View Website Demo', 'Talk on WhatsApp', 'Pricing'],
  },
  {
    keywords: ['chatbot', 'chat bot', 'ai bot', 'bot', 'ai assistant'],
    response: `Great choice. Our AI chatbot system can handle common customer enquiries, guide visitors, and capture leads — all automatically.\n\nKey features:\n• 24/7 automated responses\n• Lead capture & qualification\n• WhatsApp handoff when needed\n• Customised for your business\n\nWant to know more?`,
    quickReplies: ['Explore AI Chatbot', 'Talk on WhatsApp', 'Our Services'],
  },
  {
    keywords: ['automation', 'automate', 'whatsapp', 'inbox', 'message'],
    response: `Our automation services help you handle leads and follow-ups without manually responding to every message.\n\nWe can automate:\n• WhatsApp Business responses\n• Lead follow-up sequences\n• Appointment reminders\n• Inbox workflows\n\nWould you like to discuss your specific needs?`,
    quickReplies: ['Explore Automation', 'Book a Consultation', 'Talk on WhatsApp'],
  },
  {
    keywords: ['voice', 'voice agent', 'phone', 'call'],
    response: `Our AI Voice Agent service creates conversational voice systems that can handle customer enquiries and lead qualification.\n\nUseful for:\n• Handling inbound enquiries\n• Collecting basic lead info\n• Answering common questions\n\nThis is still an emerging technology — we'll help you implement it practically.`,
    quickReplies: ['Try Voice Demo', 'Talk on WhatsApp', 'Our Services'],
  },
  {
    keywords: ['booking', 'appointment', 'schedule', 'book'],
    response: `Our appointment booking systems let customers choose a service, pick a time, and submit a request — all from your website.\n\nFeatures:\n• Simple calendar interface\n• WhatsApp confirmation\n• Email notification\n• Mobile friendly\n\nWant a demo?`,
    quickReplies: ['View Booking Demo', 'Talk on WhatsApp', 'Our Services'],
  },
  {
    keywords: ['photo', 'image', 'visual', 'ai photo', 'ai image', 'design'],
    response: `We create high-quality AI-generated visuals for social media, product listings, ads, and business branding.\n\nIdeal for:\n• Social media content\n• Product imagery\n• Marketing campaigns\n• Business branding\n\nNo photoshoot required.`,
    quickReplies: ['Explore AI Photos', 'Talk on WhatsApp', 'Our Services'],
  },
  {
    keywords: ['maps', 'local', 'google maps', 'location', 'gmb', 'google business'],
    response: `We help businesses improve their local digital presence so customers can find them easily on Google Maps and search.\n\nThis includes:\n• Google Business Profile setup\n• Location optimisation\n• Customer review workflows\n• Local discovery improvement`,
    quickReplies: ['Explore Local Growth', 'Talk on WhatsApp', 'Our Services'],
  },
  {
    keywords: ['price', 'cost', 'how much', 'pricing', 'rate', 'charge'],
    response: `Pricing depends on the specific service and scope of your project. We believe in fair, transparent pricing without surprise charges.\n\nThe best way to get an accurate idea is to share what you need — then we can suggest the right approach and give you a clear picture.\n\nWant to start a conversation?`,
    quickReplies: ['Talk on WhatsApp', 'Contact Us', 'Our Services'],
  },
  {
    keywords: ['services', 'what do you do', 'offer', 'help', 'solutions'],
    response: `Here's what we build at BuildWithShadik:\n\n• Business Websites\n• AI Chatbots\n• WhatsApp Automation\n• AI-Generated Visuals\n• AI Voice Agents\n• Appointment Booking\n• Maps & Local Presence\n\nWhat are you looking for?`,
    quickReplies: ['Website', 'AI Chatbot', 'Automation', 'Book a Consultation'],
  },
  {
    keywords: ['contact', 'reach', 'talk', 'speak', 'call', 'email'],
    response: `You can reach us directly:\n\n📱 WhatsApp: +91 8309432965\n✉️ Email: shaikshadik003@gmail.com\n📍 Hyderabad, Telangana\n\nOr use the Contact section on this page to send an enquiry.`,
    quickReplies: ['Open WhatsApp', 'Contact Form'],
  },
  {
    keywords: ['demo', 'example', 'sample', 'portfolio'],
    response: `We have demo projects showcasing what we can build:\n\n• Restaurant website\n• Salon booking experience\n• Automotive detailing site\n• Business automation workflow\n\nThese are clearly marked as demo projects. Check out the Work section on this page.`,
    quickReplies: ['View Our Work', 'Talk on WhatsApp'],
  },
  {
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good evening', 'hii', 'hlo'],
    response: `Hi there! 👋 Welcome to BuildWithShadik.\n\nI'm here to help you explore our services and find the right solution for your business.\n\nWhat are you looking for?`,
    quickReplies: ['Our Services', 'Website', 'AI Automation', 'Book a Consultation'],
  },
];

const FALLBACK_RESPONSE: ResponseRule = {
  response: `Thanks for your message. I'll make sure the right person follows up with you.\n\nFor a faster response, you can reach us directly:\n\n📱 WhatsApp: +91 8309432965\n✉️ shaikshadik003@gmail.com`,
  quickReplies: ['Talk on WhatsApp', 'Our Services', 'Contact Us'],
};

// ─── Core response function ──────────────────────────────────────────────────
// To connect a real API later, replace this function's body with an API call.
// The UI code doesn't need to change.

export async function getAIResponse(userMessage: string): Promise<{
  content: string;
  quickReplies?: string[];
}> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 400));

  const lower = userMessage.toLowerCase();
  const match = RESPONSE_RULES.find((rule) =>
    rule.keywords?.some((kw) => lower.includes(kw))
  );

  if (match) {
    return { content: match.response, quickReplies: match.quickReplies };
  }

  return {
    content: FALLBACK_RESPONSE.response,
    quickReplies: FALLBACK_RESPONSE.quickReplies,
  };
}

export const INITIAL_MESSAGE: ChatMessage = {
  id: 'init',
  role: 'assistant',
  content: `Hi! 👋 I'm the BuildWithShadik AI assistant.\n\nI can help you explore our services, demos and contact options. What can I help you with?`,
  timestamp: new Date(),
  quickReplies: ['Our Services', 'Website', 'AI Automation', 'AI Chatbot', 'Book a Consultation'],
};

// WhatsApp service - generates WhatsApp deep links
// Replace WHATSAPP_NUMBER with the actual number

const WHATSAPP_NUMBER = '918309432965'; // +91 8309432965
const DEFAULT_MESSAGE = "Hi Shaik, I found BuildWithShadik and would like to know more about your services.";

export function getWhatsAppUrl(message?: string): string {
  const text = encodeURIComponent(message ?? DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function openWhatsApp(message?: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export const CONTACT = {
  phone: '+91 8309432965',
  phoneRaw: '+918309432965',
  email: 'shaikshadik003@gmail.com',
  location: 'Maisammaguda, Hyderabad, Telangana, India',
  instagram: '', // Add URL when available
  linkedin: '',  // Add URL when available
  github: '',    // Add URL when available
};

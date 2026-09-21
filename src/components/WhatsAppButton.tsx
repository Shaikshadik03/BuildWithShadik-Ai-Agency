import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-40 flex items-center justify-center"
      style={{
        bottom: '5.5rem',
        right: '1.5rem',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#25D366',
        boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px) scale(1.05)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(37,211,102,0.55)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0) scale(1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(37,211,102,0.4)';
      }}
    >
      <MessageCircle size={20} color="#fff" fill="#fff" aria-hidden="true" />
    </a>
  );
}

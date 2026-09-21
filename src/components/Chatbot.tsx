import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Minimize2 } from 'lucide-react';
import {
  getAIResponse,
  INITIAL_MESSAGE,
  type ChatMessage,
} from '../services/chatbotService';
import { getWhatsAppUrl, openWhatsApp } from '../services/whatsappService';

let idCounter = 1;
function genId() {
  return `msg-${++idCounter}-${Date.now()}`;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: genId(),
      role: 'user',
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Handle special quick-reply actions
    if (text === 'Open WhatsApp') {
      openWhatsApp();
      setIsTyping(false);
      return;
    }
    if (text === 'Contact Form') {
      setIsTyping(false);
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    if (text === 'View Our Work') {
      setIsTyping(false);
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    try {
      const response = await getAIResponse(text, messages);
      const aiMsg: ChatMessage = {
        id: genId(),
        role: 'assistant',
        content: response.content,
        timestamp: new Date(),
        quickReplies: response.quickReplies,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: genId(),
          role: 'assistant',
          content: "Sorry, something went wrong. Please reach us directly on WhatsApp at +91 8309432965.",
          timestamp: new Date(),
          quickReplies: ['Talk on WhatsApp'],
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat panel */}
      <div
        className="fixed z-50"
        style={{
          bottom: '100px',
          right: '1.5rem',
          width: '340px',
          maxWidth: 'calc(100vw - 3rem)',
          pointerEvents: isOpen ? 'auto' : 'none',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="BuildWithShadik AI Assistant"
        aria-hidden={!isOpen}
      >
        <div
          style={{
            background: 'rgba(14,14,14,0.97)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '20px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '520px',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '1rem 1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(163,230,53,0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'rgba(163,230,53,0.15)',
                  border: '1px solid rgba(163,230,53,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#a3e635',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                }}
                aria-hidden="true"
              >
                AI
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p style={{ color: '#f5f5f5', fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.2 }}>
                    BuildWithShadik AI
                  </p>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      color: '#a3e635',
                      background: 'rgba(163,230,53,0.15)',
                      border: '1px solid rgba(163,230,53,0.3)',
                      padding: '1px 6px',
                      borderRadius: '999px',
                    }}
                  >
                    LIVE
                  </span>
                </div>
                <p style={{ color: 'rgba(245,245,245,0.4)', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#a3e635', display: 'inline-block' }} />
                  Powered by Groq · Llama 3.3
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '6px',
                color: 'rgba(245,245,245,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close chat"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,245,245,0.4)')}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              minHeight: 0,
            }}
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '85%',
                      padding: '0.625rem 0.875rem',
                      borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      background:
                        msg.role === 'user'
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(163,230,53,0.07)',
                      border: `1px solid ${msg.role === 'user' ? 'rgba(255,255,255,0.08)' : 'rgba(163,230,53,0.15)'}`,
                      color: 'rgba(245,245,245,0.9)',
                      fontSize: '0.825rem',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {msg.content}
                  </div>
                </div>

                {/* Quick replies */}
                {msg.role === 'assistant' && msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.375rem',
                      paddingLeft: '0',
                    }}
                  >
                    {msg.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => sendMessage(qr)}
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(255,255,255,0.15)',
                          borderRadius: '999px',
                          padding: '0.3rem 0.75rem',
                          color: 'rgba(245,245,245,0.65)',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(163,230,53,0.5)';
                          e.currentTarget.style.color = '#a3e635';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                          e.currentTarget.style.color = 'rgba(245,245,245,0.65)';
                        }}
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div style={{ display: 'flex', gap: '6px', padding: '0.5rem 0.75rem', alignItems: 'center' }} aria-label="AI is typing">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#a3e635',
                      display: 'inline-block',
                      animation: `float 1s ease-in-out ${i * 0.2}s infinite`,
                      opacity: 0.6,
                    }}
                  />
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '0.75rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              gap: '0.5rem',
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isTyping}
              aria-label="Chat input"
              style={{
                flex: 1,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '0.6rem 0.875rem',
                color: '#f5f5f5',
                fontSize: '0.825rem',
                outline: 'none',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(163,230,53,0.4)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              aria-label="Send message"
              style={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: input.trim() ? '#a3e635' : 'rgba(255,255,255,0.06)',
                border: 'none',
                cursor: input.trim() ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background 0.2s ease',
              }}
            >
              <Send size={14} color={input.trim() ? '#0a0a0a' : 'rgba(245,245,245,0.3)'} />
            </button>
          </form>
        </div>
      </div>

      {/* Subtle Floating Studio Assistant Button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#161616] text-[#e5e5e0] border border-white/15 hover:border-white/30 hover:bg-[#202020] transition-all duration-200 shadow-xl"
        style={{
          bottom: '1.5rem',
          right: '1.5rem',
        }}
        aria-label={isOpen ? 'Close studio assistant' : 'Open studio assistant'}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse" />
        <span className="text-xs font-mono tracking-tight font-medium">
          {isOpen ? 'Close' : 'Ask Studio AI'}
        </span>
      </button>
    </>
  );
}

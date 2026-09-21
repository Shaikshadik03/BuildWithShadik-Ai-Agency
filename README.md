<div align="center">

<img src="public/brand/logo.png" alt="BuildWithShadik Logo" width="220"/>

# BuildWithShadik
### AI & Digital Solutions · by Shadi Creations

**Modern Websites · AI Automation · Chatbots · Voice Agents · Digital Growth**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-BuildWithShadik-a3e635?style=for-the-badge)](https://buildwithshadik.com)
[![WhatsApp](https://img.shields.io/badge/💬_WhatsApp-+91_8309432965-25D366?style=for-the-badge)](https://wa.me/918309432965)
[![Email](https://img.shields.io/badge/✉️_Email-shaikshadik003@gmail.com-white?style=for-the-badge)](mailto:shaikshadik003@gmail.com)

---

*We help small and local businesses use modern websites, AI, automation, chatbots, AI-generated visuals, voice agents, appointment systems and digital tools to operate more efficiently and present themselves professionally online.*

</div>

---

## 🏢 About BuildWithShadik

**BuildWithShadik** is an AI and digital solutions initiative based in **Hyderabad, Telangana, India** — focused on helping businesses adopt useful technology without unnecessary complexity.

We combine modern web development, AI tools, automation and creative digital systems to create **practical solutions** for businesses that want to operate better and present themselves professionally online.

> **Founded by:** Shaik Shadik  
> **Brand:** BuildWithShadik · by Shadi Creations  
> **Location:** Maisammaguda, Hyderabad, Telangana, India

---

## 🛠️ Services

### 01 · WhatsApp Business Setup
**Badge:** No Coding Required

Set up a professional WhatsApp Business presence that makes your business easy to reach and trust.

**What's included:**
- WhatsApp Business profile setup (name, description, address, hours)
- Product/service catalogue configuration
- Quick replies for common customer questions
- Label system for organised customer management
- Automated greeting and away messages
- Customer communication workflow setup

**Best for:** Local shops, restaurants, salons, clinics, service providers

---

### 02 · AI-Generated Photos
**Badge:** Creative AI

High-quality AI-generated visuals — no photoshoot required.

**What's included:**
- Social media content images
- Product and service imagery
- Advertisement creatives
- Business branding visuals
- Campaign-specific visual sets
- Multiple format exports (square, story, banner)

**Best for:** Businesses needing regular content without a photography budget

---

### 03 · Business Websites
**Badge:** Responsive

Modern, professional websites built around your business, brand and customers.

**What's included:**
- Custom design based on your brand identity
- Mobile-first responsive layout
- Service/product showcase pages
- Contact and enquiry forms
- WhatsApp integration
- Google Maps embed
- Basic SEO setup
- Fast loading performance

**Best for:** Any business that needs a professional online presence

---

### 04 · AI Chatbot
**Badge:** AI Powered

An AI assistant on your website that handles customer questions automatically — 24/7.

**What's included:**
- Conversational AI trained on your business info
- Common question answering
- Lead capture and qualification
- Service exploration guidance
- WhatsApp handoff for complex enquiries
- Customised personality and tone
- Future API integration ready (OpenAI, Gemini, Claude)

**Best for:** Businesses with high volumes of repetitive customer enquiries

---

### 05 · Inbox & WhatsApp Automation
**Badge:** Automation

Automate your repetitive communication so you spend time on the work that matters.

**What's included:**
- WhatsApp Business automated responses
- Lead follow-up message sequences
- Appointment reminder messages
- New enquiry notifications
- Inbox workflow setup
- Integration with tools like n8n, Make, Zapier

**Best for:** Businesses spending hours manually responding to the same questions

---

### 06 · AI Voice Agent
**Badge:** Voice AI

AI voice systems that can handle inbound conversations and customer interactions.

**What's included:**
- Conversational voice AI setup
- Business information responses
- Lead qualification via voice
- FAQ handling
- Call routing logic
- Integration with your existing systems

**Best for:** Businesses that receive frequent phone enquiries and want to handle them efficiently

---

### 07 · AI Appointment Booking
**Badge:** Booking

A simple, professional booking system so customers can schedule themselves.

**What's included:**
- Calendar-based availability display
- Service selection flow
- Customer information collection
- WhatsApp / email confirmation
- Mobile-friendly booking interface
- Admin notification on new bookings

**Best for:** Salons, clinics, consultants, tutors, service providers with appointment-based businesses

---

### 08 · Maps & Location Automation
**Badge:** Local Growth

Help your business get discovered locally on Google Maps and Search.

**What's included:**
- Google Business Profile setup and optimisation
- Location and hours configuration
- Service area setup
- Photo uploads and optimisation
- Customer review request workflow
- Local discovery improvement strategies
- Q&A and messaging setup

**Best for:** Local businesses that rely on nearby customers finding them online

---

## 🔄 How We Work

```
01 UNDERSTAND → 02 DESIGN → 03 BUILD → 04 LAUNCH
```

| Step | What happens |
|------|-------------|
| **Understand** | We learn about your business, customers and current digital setup |
| **Design** | We plan the right solution around your specific needs |
| **Build** | We build, test and connect everything — keeping you informed |
| **Launch** | We help you go live and continue improving as you grow |

---

## 💻 The Website

This repository contains the **official BuildWithShadik agency website** — a production-quality React application.

### Tech Stack

| Technology | Purpose |
|---|---|
| React 19 + TypeScript | UI framework |
| Vite 8 | Build tool |
| Tailwind CSS v4 | Styling |
| Lucide React | Icons |
| Custom CSS animations | Micro-interactions |

### Sections

| Section | Description |
|---|---|
| **Hero** | Premium dark hero with animated floating AI cards and workflow preview |
| **Services** | 8 service cards with icons, badges, and hover effects |
| **AI Experience** | Interactive chat mockup showing AI automation workflow |
| **Portfolio** | Demo projects (clearly labelled) — real client work added over time |
| **Process** | 4-step process — horizontal timeline (desktop), vertical (mobile) |
| **Why Us** | 4 value propositions |
| **About** | Founder info and brand identity |
| **FAQ** | Animated accordion with 7 common questions |
| **Contact** | Full validated enquiry form — backend integration ready |
| **CTA** | Final call to action |
| **AI Chatbot** | Floating widget with 15+ topic responses — API swap ready |
| **WhatsApp Button** | Floating button with prefilled message |

### Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Sticky navbar with glass effect
│   ├── Hero.tsx             # Hero with logo watermark + floating cards
│   ├── Services.tsx         # 8 service cards grid
│   ├── AIExperience.tsx     # AI chat + workflow demo
│   ├── Portfolio.tsx        # Demo portfolio cards
│   ├── Process.tsx          # 4-step process timeline
│   ├── WhyUs.tsx            # Value proposition cards
│   ├── About.tsx            # About + founder section
│   ├── FAQ.tsx              # Accordion FAQ
│   ├── Contact.tsx          # Contact form with validation
│   ├── CTA.tsx              # Final CTA
│   ├── Footer.tsx           # Footer
│   ├── Chatbot.tsx          # AI chatbot widget
│   └── WhatsAppButton.tsx   # WhatsApp floating button
│
├── data/
│   ├── services.ts          # All 8 services data
│   ├── portfolio.ts         # Portfolio project entries
│   └── faq.ts              # FAQ questions and answers
│
├── services/
│   ├── chatbotService.ts    # AI response engine (swap for real API here)
│   └── whatsappService.ts   # WhatsApp URL + contact constants
│
└── pages/                  # Extensible service detail pages
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 🖼️ Brand Assets

Place brand files in `/public/brand/`:

| File | Usage | Recommended Size |
|---|---|---|
| `logo.png` | Navbar, About, Footer, Hero watermark | 1024×512px |
| `favicon.png` | Browser tab icon | 64×64px |
| `og-image.png` | Social media share preview | 1200×630px |

---

## 🔌 Integration Roadmap

The frontend architecture is designed for easy backend integration:

| Feature | Integration Point | Status |
|---|---|---|
| Real AI Chatbot | `src/services/chatbotService.ts` → `getAIResponse()` | Ready to connect |
| Contact Form Backend | `src/components/Contact.tsx` → `handleSubmit()` | Ready to connect |
| Supabase Database | Contact form + lead capture | Planned |
| WhatsApp Automation | n8n / Make webhook | Planned |
| Appointment Booking | Calendar API integration | Planned |
| Analytics | Google Analytics / Plausible | Planned |
| CMS | Headless CMS for portfolio/blog | Planned |

---

## 📱 Responsive Breakpoints

Tested and working at:
- 1440px — Large desktop
- 1280px — Desktop
- 1024px — Laptop / small desktop
- 768px — Tablet
- 430px — iPhone Pro Max
- 390px — iPhone 14
- 360px — Android standard

---

## ♿ Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on icon-only buttons
- Keyboard navigation support
- Visible focus states
- Screen reader accessible chatbot
- `aria-live` regions for dynamic content
- Skip to main content link
- Sufficient colour contrast
- `prefers-reduced-motion` respected

---

## 📞 Contact

<div>

**Shaik Shadik**  
Founder · BuildWithShadik · by Shadi Creations

| | |
|---|---|
| 📱 Phone / WhatsApp | [+91 8309432965](https://wa.me/918309432965?text=Hi+Shaik%2C+I+found+BuildWithShadik+and+would+like+to+know+more+about+your+services.) |
| ✉️ Email | [shaikshadik003@gmail.com](mailto:shaikshadik003@gmail.com) |
| 📍 Location | Maisammaguda, Hyderabad, Telangana, India |

</div>

---

<div align="center">

**BuildWithShadik · AI & Digital Solutions**  
*Websites · AI · Automation*

© 2026 BuildWithShadik. All rights reserved.

</div>

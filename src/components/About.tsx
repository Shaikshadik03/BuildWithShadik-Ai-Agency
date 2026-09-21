import React from 'react';
import logoImg from '../assets/logo.png';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-white/[0.07]">
      <div className="studio-container">
        {/* Editorial Split: 7 / 5 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: 7 Cols Studio Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="micro-label mb-3">
                <span className="micro-label-dot" />
                FOUNDER & PHILOSOPHY / 07
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-normal text-[#f4f4f0] tracking-tight mt-2">
                Crafted Personally.
                <br />
                <span className="font-serif-italic text-[#888888] font-light">
                  Rooted In Hyderabad.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-[#999999] leading-relaxed font-light">
              <p>
                <strong className="text-[#f4f4f0] font-normal">BuildWithShadik</strong> is an independent
                creative engineering and AI systems studio operating out of Maisammaguda, Hyderabad.
              </p>
              <p>
                We believe that modern technology should simplify business operations rather than
                overwhelm them with unnecessary corporate buzzwords. Every line of code, every
                interaction layout, and every automation node is personally designed and built by
                Shaik Shadik.
              </p>
              <p>
                Whether you run a local clinic, high-end studio, restaurant, or modern service firm,
                we treat your digital presence with the focus, clarity, and precision of a private workshop.
              </p>
            </div>

            {/* Technical Verification Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08] font-mono text-xs text-[#888888]">
              <div>
                <span className="text-[#666666] block uppercase tracking-wider text-[10px]">FOUNDER</span>
                <span className="text-[#e5e5e0] font-sans font-medium text-sm">Shaik Shadik</span>
              </div>
              <div>
                <span className="text-[#666666] block uppercase tracking-wider text-[10px]">LOCATION</span>
                <span className="text-[#e5e5e0]">Hyderabad, India</span>
              </div>
              <div>
                <span className="text-[#666666] block uppercase tracking-wider text-[10px]">AFFILIATION</span>
                <span className="text-[#a3e635]">Shadi Creations</span>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Cols Authentic Studio Artifact Card */}
          <div className="lg:col-span-5 p-8 rounded-lg bg-[#0e0e0e] border border-white/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#888888]">
                IDENTITY REGISTRATION
              </span>
              <span className="w-2 h-2 rounded-full bg-[#a3e635]" />
            </div>

            <div className="flex justify-center py-4">
              <img
                src={logoImg}
                alt="BuildWithShadik Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            <div className="space-y-1 text-center">
              <h3 className="text-xl font-serif-normal text-[#f4f4f0]">
                BuildWithShadik
              </h3>
              <p className="font-mono text-xs text-[#a3e635] tracking-widest uppercase">
                A Venture by Shadi Creations
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] font-mono text-xs text-[#777777] space-y-2">
              <div className="flex justify-between">
                <span>STUDIO BASE</span>
                <span className="text-[#b5b5b0]">Maisammaguda, HYD</span>
              </div>
              <div className="flex justify-between">
                <span>DISCIPLINES</span>
                <span className="text-[#b5b5b0]">Web / AI / Automation</span>
              </div>
              <div className="flex justify-between">
                <span>CONTACT</span>
                <span className="text-[#b5b5b0]">+91 8309432965</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

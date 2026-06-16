"use client";
import React, { useState } from "react";
import { ContactModal } from "../ContactModel";
export default function ContactHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[110svh] md:min-h-[100vh] md:h-[100vh] py-0 md:py-20 leading-tight tracking-tighter flex justify-center items-center md:items-center text-center overflow-hidden">
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Fade Container */}
        <div
          className="absolute inset-0 z-0"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.1) 90%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.1) 90%, transparent 75%)",
          }}
        >
          {/* Left Glow */}
          <div className="absolute left-[-180px] bottom-[-120px] sm:left-[-220px] lg:left-[-250px] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] bg-[#FFF95B]/20 blur-[120px] sm:blur-[180px] lg:blur-[220px] rounded-full" />

          {/* Right Glow */}
          <div className="absolute right-[-180px] bottom-[-120px] sm:right-[-220px] lg:right-[-250px] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] bg-[#FF930F]/20 blur-[120px] sm:blur-[180px] lg:blur-[220px] rounded-full" />

          {/* Bottom Center Atmospheric Glow */}
          <div className="absolute left-1/2 bottom-[-250px] -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-r from-[#FFF95B]/15 via-white/10 to-[#FF930F]/15 blur-[180px] rounded-full" />
        </div>
      </div>
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* LEFT CHARACTER */}
        <img
          src="/contact/contacthero4.png"
          alt="left"
          className="absolute bottom-0 lg:-left-2 w-[260px] md:w-[340px] lg:w-[370px] xl:w-[440px] h-auto max-h-[100vh] object-contain object-bottom z-10 select-none opacity-100"
        />

        {/* RIGHT CHARACTER */}
        <img
          src="/contact/contacthero5.png"
          alt="right"
          className="absolute bottom-0 lg:right-0 w-[260px] md:w-[340px] lg:w-[420px] xl:w-[560px] h-auto max-h-[100vh] object-contain object-bottom z-10 select-none opacity-100"
        />
      </div>

      {/* ADDED: pb-[25dvh] for mobile to reserve exact space for bottom image, reduced mobile gap slightly for smaller screens */}
      <div className="relative z-10 max-w-[1000px] w-full px-5 md:px-8 flex flex-col items-center gap-4 md:gap-8 pb-[180px] sm:pb-[220px] md:pb-0 mt-5 md:mt-0">
        {/* --- Orange Trust Badge --- */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-transparent border-2 border-[#FF6B35] mb-0 z-0">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" className="fill-[#FF6B35]" />
            <path
              d="M8 12L11 15L16 9"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#FF6B35] font-semibold text-[12px] md:text-[15px]">
            India's Trusted Digital Growth Partner
          </span>
        </div>

        {/* --- Main Headline --- */}
        <h1 className="text-[36px] sm:text-[58px] md:text-[58px] leading-tight tracking-tighter font-bold text-[#333333]">
          Need the Right <br className="block md:hidden" />
          <span className="relative inline-flex items-center justify-center border border-[#604BE3] text-[#604BE3] px-2 py-1.5 mx-2 bg-[#604BE3]/10 ">
            <span className="absolute -top-1 -left-1 md:-top-1.5 md:-left-1.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#604BE3] rounded-full"></span>
            <span className="absolute -top-1 -right-1 md:-top-1.5 md:-right-1.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#604BE3] rounded-full"></span>
            <span className="absolute -bottom-1 -left-1 md:-bottom-1.5 md:-left-1.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#604BE3] rounded-full"></span>
            <span className="absolute -bottom-1 -right-1 md:-bottom-1.5 md:-right-1.5 w-2.5 h-2.5 md:w-3 md:h-3 bg-[#604BE3] rounded-full"></span>
            Digital Strategy
          </span>
          <br className="block" />
          for Your Business?
        </h1>

        {/* --- Description --- */}
        <p className="text-[16px] md:text-[20px] text-[#000000]/60 leading-tight tracking-tighter max-w-[340px] md:max-w-3xl font-medium">
          Whether you need a high-converting website, performance marketing,
          branding, or business growth support — our team is here to help you
          build smarter digital success.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          {/* ADDED: max-w-[360px] to prevent horizontal overflow on very narrow devices like iPhone SE */}
          {/* Get Personalized Solutions */}
          <button
            onClick={() => setIsModalOpen(true)}
            onMouseMove={(e) => {
              const btn = e.currentTarget;
              const rect = btn.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              btn.style.setProperty("--x", `${x}px`);
              btn.style.setProperty("--y", `${y}px`);
            }}
            className="relative overflow-hidden group w-full max-w-[360px] md:max-w-none md:w-[280px] h-[60px] text-[16px] flex items-center justify-center gap-2 bg-[#604BE3] text-white font-semibold rounded-full shadow-md"
          >
            {/* Hover Fill */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[400px] group-hover:h-[400px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
            </span>

            {/* Text */}
            <span className="relative z-10">Get Personalized Solutions</span>

            {/* Arrow */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Talk to an Expert */}
          <button
            onClick={() => {
              window.open("tel:+916357665915");
            }}
            onMouseMove={(e) => {
              const btn = e.currentTarget;
              const rect = btn.getBoundingClientRect();

              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              btn.style.setProperty("--x", `${x}px`);
              btn.style.setProperty("--y", `${y}px`);
            }}
            className="relative overflow-hidden group w-full max-w-[360px] md:max-w-none md:w-[280px] h-[60px] text-[16px] flex items-center justify-center gap-2 bg-transparent border-2 border-[#604BE3] text-[#604BE3] font-semibold rounded-full"
          >
            {/* Hover Fill */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[400px] group-hover:h-[400px] bg-[#604BE3] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
            </span>

            {/* Icon */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 transition-colors duration-300 group-hover:text-white"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>

            {/* Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Talk to an Expert
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE HERO CHARACTER */}
      <div className="absolute inset-x-0 bottom-0 md:hidden pointer-events-none z-[1] flex justify-center items-end">
        {/* ADDED: max-h-[35dvh] ensures it scales perfectly and removed downward translation */}
        <img
          src="/contact/contacthero3.png"
          alt="aboutheromobile"
          className="w-[90%] max-w-[420px] h-auto max-h-[35vh] object-contain object-bottom select-none"
        />
      </div>
    </section>
  );
}

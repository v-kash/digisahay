"use client";
import React, { useState } from "react";
import { ContactModal } from "../ContactModel";

export default function HeroSection() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative flex flex-col items-center justify-between pt-20 md:pt-30 pb-0 bg-[#fcfbfa] overflow-hidden min-h-[100svh] md:min-h-[100vh] lg:min-h-screen font-sans">
        {/* Glow Effects */}
        <div className="absolute left-[-180px] bottom-[-120px] sm:left-[-220px] lg:left-[-250px] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] bg-[#FFF95B]/20 blur-[120px] sm:blur-[180px] lg:blur-[220px] rounded-full pointer-events-none" />
        <div className="absolute right-[-180px] bottom-[-120px] sm:right-[-220px] lg:right-[-250px] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] bg-[#FF930F]/20 blur-[120px] sm:blur-[180px] lg:blur-[220px] rounded-full pointer-events-none" />
        <div className="absolute left-1/2 bottom-[-250px] -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-r from-[#FFF95B]/15 via-white/10 to-[#FF930F]/15 blur-[180px] rounded-full pointer-events-none" />

        {/* Top Content Wrapper */}
        <div className="relative z-10 bg-transparent flex flex-col items-center w-full md:w-full px-4 mt-4 md:mt-4 leading-tight tracking-tighter md:leading-tight md:tracking-tight">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full  bg-transparent border-2 border-[#FF6B35] z-0 mb-4">
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

          <h1 className="text-[40px] md:text-[64px] font-bold text-[#333333] text-center md:max-w-4xl leading-11 md:leading-tight tracking-tighter md:mb-6 mb-2">
            Grow Your <br className="block md:hidden" />
            Business Faster <br className="block lg:hidden" /> with
            <br className="hidden lg:block" />
            <span className="relative inline-block border border-[#604BE3] text-[#604BE3] px-3 py-1 mx-2 bg-[#604BE3]/10 backdrop-blur-sm rounded-md">
              <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#604BE3] rounded-full"></span>
              <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#604BE3] rounded-full"></span>
              <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#604BE3] rounded-full"></span>
              <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#604BE3] rounded-full"></span>
              Smart Digital
            </span>
            Solutions
          </h1>

          <p className="text-[#6A6A6A] font-medium text-center max-w-[40rem] md:max-w-[50rem] text-[16px] md:text-[20px] mb-8 leading-tight tracking-tight">
            From websites to performance marketing, Digital Sahay helps startups
            and businesses scale with strategies that deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
            {/* <Link
              href={"/contact"}
              onMouseMove={(e) => {
                const btn = e.currentTarget;
                const rect = btn.getBoundingClientRect();

                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                btn.style.setProperty("--x", `${x}px`);
                btn.style.setProperty("--y", `${y}px`);
              }}
              className="relative overflow-hidden group w-[360px] md:w-[280px] h-[60px] flex items-center justify-center gap-2 bg-[#604BE3] text-white font-semibold rounded-full shadow-md"
            >
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[450px] group-hover:h-[450px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
              </span>

              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Get Free Consultation
              </span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link> */}
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
  className="relative overflow-hidden group w-[360px] md:w-[280px] h-[60px] flex items-center justify-center gap-2 bg-[#604BE3] text-white font-semibold rounded-full shadow-md"
>
  {/* Hover Fill */}
  <span className="absolute inset-0 rounded-full overflow-hidden">
    <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[450px] group-hover:h-[450px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
  </span>

  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    Get Free Consultation
  </span>

  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="relative z-10 transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</button>

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
              className="relative overflow-hidden group w-[360px] md:w-[280px] h-[60px] flex items-center justify-center gap-2 bg-transparent border-2 border-[#604BE3] text-[#604BE3] font-semibold rounded-full"
            >
              {/* Hover Fill */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[500px] group-hover:h-[550px] bg-[#604BE3] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
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

          <div className="hidden sm:flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-700 mb-8 md:mb-12">
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#374151"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Trusted by 100+ Businesses
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#374151"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Proven Growth Strategies
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#374151"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              ROI-Focused Execution
            </div>
          </div>
        </div>

        {/* Unified Bottom Area */}
        <div className="relative w-[110%] md:w-[125%] lg:w-full translate-x-0 md:translate-x-4 lg:translate-x-0  max-w-none -mt-0 md:-mt-18 lg:-mt-30 flex flex-col justify-end">
          {/* Main Hero Image */}
          <img
            src="/Hero/hero3.png"
            alt="Banner"
            className="block md:hidden lg:hidden mb-0 md:mb-4 lg:mb-0 -right-1 scale-[120%] md:scale-[120%] lg:scale-[100%] relative z-0 w-full h-auto object-cover"
          />

          {/* <img
            src="/Hero/HeroBanner4.png"
            alt="Banner"
            className="hidden md:hidden lg:block relative z-0 w-full h-auto object-cover"
          /> */}
          <img
            src="/Hero/hero3.png"
            alt="Banner"
            className="hidden md:hidden lg:block relative z-0 w-full h-auto object-cover"
          />
        </div>
      </section>

      <ContactModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>
    </>
  );
}
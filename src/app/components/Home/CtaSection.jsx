"use client";
import React, { useState } from "react";
import { ContactModal } from "../ContactModel";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full py-4 px-4 md:px-8 bg-[#F7F7FF] font-sans">
      <div className="max-w-full px-0 sm:px-4 md:px-14 py-2 mx-auto mt-2">
        {/* Main CTA Banner Container */}
        <div className="relative bg-[#604BE3] rounded-[36px] md:rounded-[48px] flex flex-col md:flex-row items-stretch justify-between overflow-hidden md:overflow-visible">
          {/* Decorative Background Arcs Container */}
          <div className="absolute inset-0 rounded-[36px] md:rounded-[40px] pointer-events-none z-0 overflow-hidden">
            {/* Desktop SVG Circle (Original) */}
            <div className="hidden md:hidden lg:block absolute top-0 right-0 w-full md:w-1/2 h-full overflow-hidden">
              <svg
                className="absolute -right-14 -bottom-40 w-[600px] h-[600px] text-[#FFFFFF]/20"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <circle cx="100" cy="100" r="100" />
              </svg>
            </div>

            {/* Mobile Purple Halo Bubble behind characters */}
            <div className="block md:block absolute -mr-6 md:-mr-0 bottom-[-15%] right-[-10%] w-[320px] h-[320px] bg-[#6B56EB] rounded-full z-0"></div>
          </div>

          {/* Left Content Area - Added bottom padding (pb-16) on mobile to give the absolute image room to breathe */}
          <div className="relative z-20 w-full md:w-full lg:w-3/5 p-6 pt-10 pb-16 sm:p-8 sm:pb-20 md:p-14 lg:p-20 flex flex-col items-start self-center">
            <h2 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold text-white leading-[1.2] md:leading-[1.12] mb-4 tracking-tighter w-[100%] md:w-full">
              Ready to Take Your <br className="hidden md:block" /> Business to
              the Next Level?
            </h2>

            <p className="text-[#C0B6FF] text-[14px] md:text-[16px] lg:text-[18px] leading-tight tracking-tighter mb-6 md:mb-8 max-w-[90%] md:max-w-lg font-medium pr-4 md:pr-0">
              Let Digital Sahay help you grow smarter, faster, and better. Book
              your free strategy call today and discover what's possible for
              your business.
            </p>

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
              className="relative overflow-hidden z-20 flex items-center justify-center gap-2 bg-[#ffffff] text-[#604BE3] text-[12px] md:text-[16px] font-bold px-6 py-4 md:px-8 md:py-4 rounded-full border hover:border-0.5 hover:border-white  group w-auto transition-colors duration-300"
            >
              {/* Hover Fill Layer */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute w-0 h-0 group-hover:w-[450px] group-hover:h-[450px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2 left-[var(--x)] top-[var(--y)]"></span>
              </span>

              {/* Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Book Free Consultation
              </span>

              {/* Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            {/* Urgency/Notice Text - Added max-w-[55%] on mobile so it doesn't collide with the absolute image */}
            <div className="relative z-20 flex items-start md:items-center gap-2.5 mt-6 mb-30 md:mb-0 md:mt-8 max-w-[55%] sm:max-w-[60%] md:max-w-xs">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#FFD166"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-0.5 md:mt-0 flex-shrink-0"
              >
                <circle cx="12" cy="12" r="10" fill="#FFD166" />
                <path
                  d="M12 6V12L16 14"
                  stroke="#604BE3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#FFE659] text-[12px] sm:text-[14px] md:text-[16px] font-semibold tracking-tighter leading-[1.3] md:leading-normal">
                Limited slots available for new{" "}
                <br className="hidden sm:block md:hidden" /> clients this month.
              </span>
            </div>
          </div>

          {/* Right Illustration Area - Positioned Absolute on Mobile, Relative on Desktop */}
          <div className="absolute md:relative lg:relative bottom-0 -mr-6 md:-mr-0 right-0 z-10 w-[75%] sm:w-[60%] md:w-[60%] lg:w-2/5 flex justify-end items-end pointer-events-none md:pointer-events-auto">
            <img
              src="/cta/img2.png"
              alt="Team collaborating"
              className="w-full max-w-[500px] h-auto md:h-[120%] lg:h-[120%] object-contain object-bottom rounded-br-[36px] md:rounded-br-[40px] lg:absolute lg:bottom-0"
            />
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

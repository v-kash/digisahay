"use client";

import Link from "next/link";
import React, { useState } from "react";

// Data array for easy management
const servicesData = [
  {
    title: "Website Development",
    description:
      "Fast, modern, and high-converting websites designed for growth.",
    imageSrc: "/services/new/2.png", // Populate this URL
  },
  {
    title: "SEO Optimization",
    description:
      "Improve rankings, increase visibility, and drive organic traffic.",
    imageSrc: "/services/new/3.png", // Populate this URL
  },
  {
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience effectively.",
    imageSrc: "/services/new/8.png", // Populate this URL
  },
  {
    title: "Performance Marketing",
    description:
      "ROI focused advertising campaigns across Google and Meta platforms.",
    imageSrc: "/services/new/6.png", // Populate this URL
  },
  {
    title: "Branding & Design",
    description: "Create a powerful and memorable brand identity.",
    imageSrc: "/services/new/7.png", // Populate this URL
  },
  {
    title: "Content Marketing",
    description:
      "Content strategies that attract, educate, and convert customers.",
    imageSrc: "/services/new/5.png", // Populate this URL
  },
  {
    title: "Lead Generation",
    description: "Generate consistent, high-quality leads for your business.",
    imageSrc: "/services/new/4.png", // Populate this URL
  },
  {
    title: "Business Growth Consulting",
    description: "Strategic guidance to help your business scale confidently.",
    imageSrc: "/services/new/1.png", // Populate this URL
  },
];

export default function ServicesSection() {
  // State to track which mobile accordion is open. Defaulting to 0 (the first one).
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-12 px-4 md:px-8 lg:px-12 bg-[#F7EFED] overflow-hidden font-sans">
      {/* mobile view svg */}
      {/* Top Left Decorative Shape (Purple) */}
      <div className="absolute md:hidden top-0 left-0 pointer-events-none opacity-90 -translate-x-2 -translate-y-2">
        <svg
          width="60"
          height="52"
          viewBox="0 0 118 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M105.094 -12C79.6371 -12 59 8.63709 59 34.0938V-12H0V0.90625C0 26.3629 20.6371 47 46.0938 47H0V106H12.9062C38.3629 106 59 85.3629 59 59.9062V106H118V93.0938C118 67.6371 97.3629 47 71.9062 47H118V-12H105.094Z"
            fill="#604BE3"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      <div className="absolute md:hidden top-0 right-0 pointer-events-none opacity-80 translate-x-2 -translate-y-2 rotate-45">
        <svg
          width="65"
          height="60"
          viewBox="0 0 125 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M92.0334 9.34445L125.719 -8.3289L137.827 14.7506L104.142 32.4234L140.457 43.7459L132.7 68.6271L96.3842 57.3046L114.057 90.9898L90.9781 103.098L73.3053 69.4129L61.9828 105.729L37.1016 97.9712L48.4241 61.6555L14.7384 79.3282L2.63059 56.2494L36.3157 38.5766L2.3393e-05 27.2541L7.75746 2.37285L44.0732 13.6953L26.4 -19.9905L49.4793 -32.0981L67.1521 1.58701L78.4746 -34.7287L103.356 -26.9713L92.0334 9.34445Z"
            fill="#FF6B35"
            fillOpacity="0.4"
          />
        </svg>
      </div>

      {/* desktop view svg */}
      <div className="absolute hidden md:block top-0 left-0 text-[#c8b6ff] pointer-events-none opacity-90 -translate-x-1/8 -translate-y-1/8">
        <svg
          width="140"
          height="118"
          viewBox="0 0 118 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M105.094 -12C79.6371 -12 59 8.63709 59 34.0938V-12H0V0.90625C0 26.3629 20.6371 47 46.0938 47H0V106H12.9062C38.3629 106 59 85.3629 59 59.9062V106H118V93.0938C118 67.6371 97.3629 47 71.9062 47H118V-12H105.094Z"
            fill="#604BE3"
            fillOpacity="0.4"
          />
        </svg>
      </div>
      {/* Top Right Decorative Shape (Orange) */}
      <div className="absolute hidden md:block top-0 right-0 text-[#ffb499] pointer-events-none opacity-80 translate-x-1/8 -translate-y-1/8 transform rotate-45">
        <svg
          width="150"
          height="142"
          viewBox="0 0 125 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M92.0334 9.34445L125.719 -8.3289L137.827 14.7506L104.142 32.4234L140.457 43.7459L132.7 68.6271L96.3842 57.3046L114.057 90.9898L90.9781 103.098L73.3053 69.4129L61.9828 105.729L37.1016 97.9712L48.4241 61.6555L14.7384 79.3282L2.63059 56.2494L36.3157 38.5766L2.3393e-05 27.2541L7.75746 2.37285L44.0732 13.6953L26.4 -19.9905L49.4793 -32.0981L67.1521 1.58701L78.4746 -34.7287L103.356 -26.9713L92.0334 9.34445Z"
            fill="#FF6B35"
            fillOpacity="0.4"
          />
        </svg>
      </div>
      {/* Section Header (Text-left on mobile, Text-center on desktop) */}
      <div className="relative z-10 text-left md:text-center max-w-3xl md:mx-auto mb-6 md:mb-14">
        <h2 className="text-[34px] md:text-[48px] font-bold text-gray-800 tracking-tighter leading-tight mb-2 md:mb-2">
          Everything You Need to Grow <br className="hidden sm:block" />
          <span className="text-[#FF6B35]">in One Place</span>
        </h2>
        <p className="text-[#6A6A6A] tracking-tighter font-medium text-[16px] md:text-[18px] max-w-62 md:max-w-none">
          Complete digital solutions tailored for modern businesses.
        </p>
      </div>
      {/* =========================================================
          MOBILE VIEW: ACCORDION LAYOUT (Visible only below 'md') 
          ========================================================= */}
      <div className="relative z-10 w-full flex flex-col md:hidden">
        {servicesData.map((service, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border-b border-[#000000]/40 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
              >
                <h3 className="text-[20px] font-semibold text-[#333333] tracking-tighter leading-tight pr-4">
                  {service.title}
                </h3>

                {/* Accordion Toggle Icon */}
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? "bg-[#375BC9]" : "bg-[#375BC9]"
                  }`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </button>

              {/* Expandable Content Box */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-6"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#6A6A6A] font-medium text-[16px] leading-tight tracking-tighter mb-0 pr-6">
                    {service.description}
                  </p>

                  {/* Image Placeholder/Render */}
                  {service.imageSrc ? (
                    <img
                      src={service.imageSrc}
                      alt={service.title}
                      className="w-full h-auto object-contain px-2"
                    />
                  ) : (
                    <div className="w-full h-40 border-2 border-dashed border-gray-200 rounded-[20px] flex items-center justify-center text-gray-400 text-sm">
                      Image Space
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* =========================================================
          DESKTOP VIEW: ORIGINAL GRID LAYOUT (Visible on 'md' and up) 
          ========================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <div key={index} className="relative group h-full cursor-pointer">
            {/* Background Fanning Layer 3 (Back-most) */}
            {/* <div className="absolute inset-0 bg-[#FC8866] rounded-[36px] border border-black/[0.05] shadow-sm transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 group-hover:opacity-100 origin-bottom group-hover:-translate-y-[28%] group-hover:-rotate-[2deg] group-hover:scale-[0.85] z-0 delay-[60ms]"></div> */}

            {/* Background Fanning Layer 2 */}
            <div className="absolute inset-0 bg-[#E0DFFD] rounded-[36px] border border-black/[0.05] shadow-sm transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 group-hover:opacity-100 origin-bottom group-hover:-translate-y-[20%] group-hover:rotate-[4deg] group-hover:scale-[0.90] z-0 delay-[30ms]"></div>

            {/* Background Fanning Layer 1 */}
            <div className="absolute inset-0 bg-[#FFC9B5] rounded-[36px] border border-black/[0.05] shadow-sm transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 group-hover:opacity-100 origin-bottom group-hover:-translate-y-[12%] group-hover:-rotate-[6deg] group-hover:scale-[0.95] z-0 delay-0"></div>

            {/* Main Card */}
            <div className="relative z-10 h-full bg-white rounded-[36px] px-5 py-5 flex flex-col items-center text-center border border-black/[0.04] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-2">
              {/* Image Container */}
              <div className="w-full h-50 flex items-center justify-center bg-transparent rounded-[40px] overflow-hidden">
                {service.imageSrc ? (
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="w-full h-full object-contain rounded-[40px]"
                  />
                ) : (
                  <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-[40px] flex items-center justify-center text-gray-400 text-sm">
                    Image Space
                  </div>
                )}
              </div>

              {/* Text Content */}
              <h3 className="text-[22px] font-bold text-gray-900 tracking-tighter mb-1">
                {service.title}
              </h3>
              <p className="text-gray-500 text-[16px] font-medium tracking-tighter leading-tight px-2 mb-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-10 flex justify-center mt-10 md:mt-14">
        <Link
          href={"/services"}
          onMouseMove={(e) => {
            const btn = e.currentTarget;
            const rect = btn.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            btn.style.setProperty("--x", `${x}px`);
            btn.style.setProperty("--y", `${y}px`);
          }}
          className="group relative overflow-hidden bg-[#604BE3] transition-all duration-300 text-white font-semibold tracking-tight rounded-full px-8 md:px-10 py-4 md:py-5 text-[16px] md:text-[16px] flex items-center gap-3"
        >
          {/* Hover Fill */}
          <span className="absolute inset-0 rounded-full overflow-hidden">
            <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[320px] group-hover:h-[320px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
          </span>

          {/* Text */}
          <span className="relative z-10">Explore All Services</span>

          {/* Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12H19" />
            <path d="M12 5L19 12L12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

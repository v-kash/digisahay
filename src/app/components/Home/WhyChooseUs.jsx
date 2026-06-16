"use client";

import React, { useState, useEffect, useRef } from "react";
import { ContactModal } from "../ContactModel";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.2 }, // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      id: 1,
      title: "Results-Driven Approach",
      description:
        "Every strategy is aligned with your business goals. We measure success by your growth, not just activity.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Affordable for MSMEs",
      description:
        "Premium digital services without the agency price tag. Built specifically for Indian small businesses.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Dedicated Experts",
      description:
        "A committed team assigned to your account — no rotating freelancers, no shortcuts.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Transparent Reporting",
      description:
        "Real-time dashboards and weekly reports. You always know exactly what's happening and why.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-8 pb-0 md:py-12 px-4 md:px-8 lg:px-12 bg-[#fafafc] font-sans overflow-hidden"
    >
      {/* Content Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center relative z-10">
        {/* Left Column: Content & Features */}
        <div className="flex flex-col pr-0 lg:pr-8">
          <h2
            className={`text-[30px] md:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tighter mb-10 md:mb-12 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Why Businesses Choose <br />
            <span className="text-[#604BE3]">Digital Sahay</span>
          </h2>

          <div className="flex flex-col">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                className={`flex items-start gap-5 pb-4 mb-4 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  index !== features.length - 1
                    ? "border-b-2 border-dashed border-gray-300"
                    : ""
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fbbd32] flex items-center justify-center shadow-sm mt-1">
                  {feature.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-[22px] md:text-[28px] font-medium tracking-tighter leading-tight text-[#000000] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#6A6A6A] text-[14px] md:text-[16px] tracking-tighter leading-tight font-medium max-w-sm md:max-w-md">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div
            className={`m-2 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${(features.length + 1) * 150}ms` }}
          >
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
              className="hidden md:inline-flex relative overflow-hidden items-center justify-center gap-2 bg-[#604BE3] text-white text-sm font-semibold px-8 py-5 rounded-full shadow-md group"
            >
              {/* Hover Fill Layer */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[350px] group-hover:h-[350px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
              </span>

              {/* Text */}
              <span className="relative z-10">
                Let's Grow Your Business Together
              </span>

              {/* Arrow Icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Mobile Layout Placeholder */}
        <div className="relative w-full lg:h-full min-h-[300px] flex items-center justify-end overflow-visible">
          {/* Mobile Image: Stays contained here */}
          <img
            src="/whychooseus/whychooseus2.png"
            alt="Team collaborating"
            className={`lg:hidden relative z-10 h-auto w-[115%] max-w-none object-contain transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-300 ${
              isVisible
                ? "opacity-100 translate-x-12"
                : "opacity-0 translate-x-24"
            }`}
          />
        </div>
      </div>

      <div className="hidden lg:flex absolute inset-y-0 right-0 w-[50vw] items-center justify-end pointer-events-none">
        <img
          src="/whychooseus/wcus.png"
          alt="Team collaborating"
          className={`relative z-10 h-auto max-h-[90%] w-full object-contain object-right drop-shadow-xl pointer-events-auto transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
          }`}
        />
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

"use client";
import React, { useRef } from "react";

export default function BranchesSection() {
  const scrollRef = useRef(null);

  const branches = [
    {
      id: 1,
      city: "Ahmedabad",
      address:
        "2nd Floor, President Plaza, Sg Highway, Thaltej, Ahmedabad, Gujarat 380054, India",
      phone: "+91 63576 65915",
      image: "/contact/branch3.png", // Replace with your image path
    },
    {
      id: 2,
      city: "Chennai",
      address:
        "46 Fanepet, 2nd Street, Subbu Towers, 3rd Floor, Nandanam, 600035.",
      phone: "+91 6357 665 925",
      image: "/contact/branch2.png", // Replace with your image path
    },
    {
      id: 3,
      city: "Pune",
      address:
        "Trade Centre, B - 102, N Main Rd, Liberty Phase 2, Ragvilas Society, Koregaon Park, Pune, Maharashtra 411001",
      phone: "+91 72111 98498",
      image: "/contact/branch1.png", // Replace with your image path
    },
  ];

  // Scroll function for mobile arrows
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-4 md:py-8 mb-8 md:mb-10 bg-[#F8F9FB] flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Hide scrollbar for mobile slider */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* --- Section Title --- */}
      <h2 className="text-[32px] md:text-[48px] font-bold text-[#333333] tracking-tighter mb-10 md:mb-12">
        Our <span className="text-[#604BE3]">Branches</span>
      </h2>

      {/* --- Cards Container --- */}
      <div
        ref={scrollRef}
        className="w-full max-w-[1140px] flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-2 md:pb-0"
      >
        {branches.map((branch) => (
          <div
            key={branch.id}
            // Adjusted widths to w-[85%] on mobile to allow adjacent cards to peek in
            className="w-[90%] sm:w-[340px] shrink-0 md:w-auto md:shrink md:min-w-0 snap-center bg-[#F5EFE5] border-[2px] border-[#333333]/40 rounded-[16px] flex flex-col items-center text-center pt-10 overflow-hidden relative transition-transform duration-300"
          >
            {/* City Name */}
            <h3 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-2 tracking-tighter leading-tight">
              {branch.city}
            </h3>

            {/* Address - Changed fixed width to w-full max-w to prevent stretching on mobile */}
            <div className="px-4 md:px-8 mb-0 min-h-[60px] md:min-h-[75px] w-full max-w-[320px] md:max-w-[360px] flex items-start justify-center tracking-tighter leading-tight">
              <p className="text-[16px] md:text-[16px] text-[#585858] font-medium tracking-tighter leading-tight">
                {branch.address}
              </p>
            </div>

            {/* Phone Number */}
            <div className="flex items-center text-[20px] md:text-[22px] font-semibold text-[#333333] tracking-tighter leading-tight mb-4 md:mb-0 relative z-10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#555555] mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{branch.phone}</span>
            </div>

            {/* Call Now Button (Mobile Only) */}
            <a
              href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
              className="md:hidden bg-[#604BE3] hover:bg-[#4D3CB6] text-white font-semibold py-3.5 px-8 rounded-full text-[16px] relative z-10 mb-3 transition-colors"
            >
              Call Now
            </a>

            {/* Illustration Image Container */}
            <div className="w-full mt-auto flex justify-center items-end h-[190px] sm:h-[180px] md:h-[240px] relative pointer-events-none select-none">
              <img
                src={branch.image}
                alt={`${branch.city} Skyline`}
                className="w-full h-full object-cover object-bottom"
              />
            </div>
          </div>
        ))}
      </div>

      {/* --- Mobile Navigation Arrows --- */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-6">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border-[1px] border-[#333333]/40 flex items-center justify-center text-[#333333] active:bg-gray-200 transition-colors"
          aria-label="Previous branch"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full border-[1px] border-[#333333]/40 flex items-center justify-center text-[#333333] active:bg-gray-200 transition-colors"
          aria-label="Next branch"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}

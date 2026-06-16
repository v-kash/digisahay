"use client";
import React from "react";

function LogoStrip() {
  const logos = [
    "/logo/1.png",
    "/logo/2.png",
    "/logo/3.png",
    "/logo/4.png",
    "/logo/5.png",
    "/logo/6.png",
    "/logo/7.png",
  ];
  return (
    <div className="-bottom-2 md:-bottom-4 lg:-bottom-0 left-0 w-full bg-[#fafafc] overflow-hidden z-20 py-3 md:py-6 lg:py-3">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 28s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
      `,
        }}
      />
      <h2 className="text-center text-[12px] md:text-[16px] font-medium mb-1 md:mb-6 lg:mb-6 text-[#585858]  tracking-tighter">
        Trusted by Growing Businesses Across India
      </h2>

      <div className="relative flex overflow-hidden mb-2 md:mb-0">
        <div className="flex min-w-max items-center animate-[marquee_28s_linear_infinite]">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center shrink-0 px-4 md:px-12"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-7 md:h-8 lg:h-10 w-auto object-contain opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoStrip;

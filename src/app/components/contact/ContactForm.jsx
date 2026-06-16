"use client";
import React from "react";
import ContactUs from "./ContactUs";

export default function ContactSection() {
  return (
    <section className="w-full py-16 md:py-10 bg-[#F8F9FA] flex flex-col items-center justify-center px-4 md:px-8 relative overflow-hidden">
      {/* --- Section Header --- */}
      <div className="flex flex-col items-center justify-center mb-10 md:mb-8 text-center z-10 relative max-w-3xl">
        <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-2">
          <div className="w-6 md:w-10 h-[1.5px] bg-[#BDB4F3]"></div>
          <span className="text-[#604BE3] font-semibold text-[14px] md:text-[18px] tracking-tighter leading-tight uppercase">
            Real Businesses. Real Digital Solutions.
          </span>
          <div className="w-6 md:w-10 h-[1.5px] bg-[#BDB4F3]"></div>
        </div>
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#333333] tracking-tighter leading-tight">
          <span className="text-[#FF6B35]">Let's Build</span> Something
          <br />
          Great Together
        </h2>
      </div>

      {/* --- Embedded Component --- */}
      <div className="w-full max-w-[1240px] flex justify-center relative z-10">
        <ContactUs />
      </div>
    </section>
  );
}

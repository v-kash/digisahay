import React from "react";
import Image from "next/image";

export default function FoundationSection() {
  return (
    <section className="relative w-full bg-[#F8E8DB] overflow-hidden py-8 lg:py-12 font-sans tracking-tighter leading-tight text-[#1A1A1A]">
      <div className="absolute -top-20 -left-20 pointer-events-none">
        <img src="/about/blur.png" alt="blurbackgroundimage" />
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
        {/* Left Content Column */}
        {/* Added: items-center text-center for mobile, lg:items-start lg:text-left for desktop */}
        <div className="w-full lg:w-[55%] flex flex-col z-10 items-center text-center lg:items-start lg:text-left">
          {/* Overline */}
          <span className="text-[#604BE3] font-semibold tracking-tighter leading-tight text-[14px] md:text-[18px] mb-4 uppercase">
            Our Foundation. Your Growth
          </span>

          {/* Main Heading */}
          <h2 className="text-[32px] md:text-[48px] text-[#333333] font-bold tracking-tighter leading-tight mb-4">
            Built on Trust.
            <br />
            Driven by<span className="text-[#604BE3]"> Expertise</span>
          </h2>

          {/* Description */}
          {/* Added: mx-auto for mobile centering, lg:mx-0 for desktop left alignment */}
          <p className="text-[#6A6A6A] font-medium text-[14px] md:text-[18px] tracking-tighter leading-tight mb-4 max-w-[91%] mx-auto lg:mx-0">
            Digital Sahay is powered by{" "}
            <strong className="font-bold text-[#604BE3]">
              NextGen Business Consultancy Private Limited
            </strong>
            , a trusted name in business advisory and strategic consulting.
            <br />
            Our strong foundation allows us to deliver digital solutions backed
            by real-world business <br className="block md:hidden" />{" "}
            intelligence.
          </p>

          {/* Awards Row */}
          {/* Added: flex-row justify-center for mobile to keep them side-by-side */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-2 md:gap-6 mb-8 w-full">
            {/* Wreath Badge */}
            <div className="flex flex-col">
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/about/awward1.png"
                  alt="Most Trusted Business Advisory"
                  // Added responsive scaling so they fit side-by-side on mobile
                  className="h-[80px] w-[170px] sm:h-[129px] sm:w-[288px] object-contain"
                />
              </div>
            </div>

            {/* Separator */}
            <div className="hidden sm:block w-[1px] h-26 bg-[#333333]/40"></div>

            {/* Outlook Award Text */}
            <div className="flex flex-row">
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/about/awward2.png"
                  alt="Outlook Business Award"
                  // Added responsive scaling so they fit side-by-side on mobile
                  className="h-[85px] w-[120px] sm:h-[136px] sm:w-[204px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Trust Pillars */}
          {/* Added: hidden lg:flex to match the provided mobile image which skips these pillars */}
          <div className="hidden lg:flex flex-col sm:flex-row justify-start gap-10 items-center w-full">
            {/* Item 1 */}
            <div className="flex flex-col pr-10 items-center justify-center text-center relative">
              <div className="w-11 h-11 rounded-full border border-[#8E857D] flex items-center justify-center mb-3 text-[#5E5650]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>

              <h4 className="text-[12px] font-semibold text-[#2D2D2D] leading-tight tracking-tighter mb-1">
                Trusted Legacy
              </h4>

              <p className="text-[12px] font-medium text-[#6E6A67] leading-tight tracking-tighter max-w-[120px]">
                Built on years of industry trust and client success.
              </p>

              {/* Divider */}
              <div className="hidden sm:block absolute right-0 h-[100%] w-[1px] border border-dashed border-[#333333]/20" />
            </div>

            {/* Item 2 */}
            <div className="flex flex-col pr-8 items-center justify-center text-center relative">
              <div className="w-11 h-11 rounded-full border border-[#8E857D] flex items-center justify-center mb-3 text-[#5E5650]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>

              <h4 className="text-[12px] font-semibold text-[#2D2D2D] leading-tight tracking-tighter mb-1">
                Expert Guidance
              </h4>

              <p className="text-[12px] font-medium text-[#6E6A67] leading-tight tracking-tighter max-w-[120px]">
                Helping businesses scale confidently.
              </p>

              {/* Divider */}
              <div className="hidden sm:block absolute right-0 h-[100%] w-[1px] border border-dashed border-[#333333]/20" />
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-11 h-11 rounded-full border border-[#8E857D] flex items-center justify-center mb-3 text-[#5E5650]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>

              <h4 className="text-[12px] font-semibold text-[#2D2D2D] leading-tight tracking-tighter mb-1">
                Proven Impact
              </h4>

              <p className="text-[12px] font-medium text-[#6E6A67] leading-tight tracking-tighter max-w-[120px]">
                Delivering measurable results across industries.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Trophy Image */}
        {/* Adjusted spacing for mobile layout */}
        <div className="w-[80%] lg:w-[45%] flex justify-center lg:justify-end relative mb-2 md:mb-0 mt-0 lg:mt-18">
          <div className="relative w-full max-w-[500px] md:max-w-[500px] aspect-square flex items-center justify-center">
            <Image
              src="/about/trophy-image.png"
              alt="Most Trusted Business Advisory Award Trophy"
              width={600}
              height={600}
              className="object-contain w-full h-full scale-110 pointer-events-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

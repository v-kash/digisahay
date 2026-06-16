"use client";

import React, { useState, useEffect, useRef } from "react";

// Custom component to handle the counting animation on scroll
const AnimatedNumber = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Trigger animation when the element comes into the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  // Smooth counting logic
  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const endValue = parseInt(value, 10);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Ease-out exponential easing function for a smooth finish
      const easeProgress =
        percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

      setCount(Math.floor(easeProgress * endValue));

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default function AboutSection() {
  return (
    <section className="relative w-full py-6 px-4 md:px-8 lg:px-12 bg-[#fafafc] overflow-hidden font-sans">
      <div className="absolute left-1/2 -translate-x-1/2 scale-[100%] md:scale-[120%] lg:scale-[100%] right-60 md:right-100 lg:right-auto rotate-45 md:rotate- lg:rotate-0 -top-50 md:-top-50 lg:-top-10 z-0 pointer-events-none block lg:block">
        <svg
          width="352"
          height="210"
          viewBox="0 0 352 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ld:hidden md:hidden block w-[300px] md:w-[600px] lg:w-[352px]"
        >
          <g clipPath="url(#clip0_129_2977)">
            <path
              d="M268.909 147.37C267.856 166.129 272.419 194.88 296.12 195.938C315.24 196.791 327.183 174.34 327.836 157.669C328.699 135.559 318.559 115.383 304.089 99.3209C300.112 94.8383 295.724 90.7387 290.98 87.0756C290.395 86.6325 288.393 85.3083 288.463 84.757C288.846 81.8264 290.645 78.2271 291.895 75.5646C295.833 67.0243 300.267 58.7211 305.174 50.6978C307.323 47.1288 309.867 43.4709 312.078 39.8576C304.824 39.1479 306.216 37.583 301.607 44.5156C298.802 48.7354 296.491 52.9848 293.975 57.3771C289.519 65.1536 286.232 73.2327 282.564 81.3532C280.524 79.1326 275.758 76.9777 273.085 75.4229C269.376 73.2652 265.852 71.935 261.957 70.3054C243.474 62.5719 223.73 58.3614 203.817 56.5396C200.189 56.2078 196.393 55.639 192.78 55.4893L146.052 53.4995C136.905 53.1322 126.82 52.9282 117.725 52.2451C110.061 51.6272 102.423 50.7171 94.8284 49.5171C85.4893 48.0413 76.4617 45.9946 67.4522 43.0957C65.3976 42.4346 63.287 41.9102 61.2579 41.1837C54.4378 38.6678 47.7844 35.7212 41.3382 32.3623C36.079 29.6256 26.0617 23.6256 21.6833 19.7498C21.4178 21.4135 20.4308 26.1548 21.5034 27.3283C23.1971 29.1815 27.7731 31.7389 30.0206 33.1077C47.14 43.4341 65.9632 50.6317 85.608 54.3631C89.4617 55.1264 94.2277 55.7737 98.2052 56.3659C109.612 58.0641 121.463 58.8648 132.983 59.4895C135.098 59.6043 137.346 59.5191 139.487 59.5994L168.178 60.6721C170.271 60.7403 172.6 60.5627 174.624 60.6754C181.545 61.0602 188.391 61.7242 195.284 62.3437C205.762 63.1887 216.194 64.5343 226.543 66.376C244.61 69.6007 265.355 76.7396 280.5 87.2929C278.878 90.7389 277.817 94.6803 276.741 98.3442C275.703 101.885 274.25 106.698 273.693 110.299C271.482 119.302 269.983 129.312 269.355 138.579C269.159 141.461 269.257 144.516 268.909 147.37ZM295.893 100.264C300.493 104.5 304.411 109.829 308.04 114.882C308.646 115.726 309.313 116.529 309.882 117.402C315.022 125.465 318.569 134.438 320.328 143.833C320.814 146.324 321.341 148.728 321.465 151.255C322.027 162.717 319.339 174.094 311.213 182.618C306.991 187.046 300.89 190.742 294.509 189.535C282.384 187.301 278.11 175.52 276.043 164.907C275.114 161.145 275.298 157.425 275.172 153.577C274.66 137.799 276.87 121.839 281.049 106.641C281.944 103.383 283.91 93.9777 285.781 91.5355L286.054 91.3973C287.671 92.1259 294.399 98.592 295.893 100.264Z"
              fill="#6C63FF"
              fillOpacity="0.18"
            />
          </g>

          <defs>
            <clipPath id="clip0_129_2977">
              <rect
                width="332.589"
                height="168.427"
                fill="white"
                transform="matrix(0.991936 0.126739 0.126739 -0.991936 0 167.068)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start pr-0 lg:pr-12">
          {/* Badge */}
          <div className="inline-block border-1 md:border-2 border-[#604BE3] text-[#604BE3] px-4 py-2 rounded-full text-[12px] md:text-[16px] font-semibold tracking-wide mb-6">
            ABOUT US
          </div>

          {/* Main Heading */}
          <h2 className="text-[30px] md:text-4xl lg:text-5xl font-bold max-w-[20rem] md:max-w-2xl md:w-5xl text-[#333333] leading-[1.2] md:leading-[1.2] tracking-tighter mb-6">
            We Don't Just Provide Services. We Build{" "}
            <span className="text-[#604BE3]">Growth Engines.</span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#6A6A6A] font-medium text-[16px] text-xs md:text-[18px] lg:text-[18px] tracking-tighter leading-tight mb-4 max-w-lg md:max-w-2xl">
            At Digital Sahay, we understand the challenges modern businesses
            face. That's why we combine strategy, creativity, and data-driven
            execution to help brands grow faster and smarter.
          </p>

          {/* Divider Line */}
          <div className="w-full max-w-md mb-4">
            <div className="w-40 md:w-98 h-[1.5px] bg-[#333333]/50"></div>
          </div>

          {/* Highlighted Footer Text */}
          <p className="text-[#604BE3] max-w-xs md:max-w-2xl text-[16px] md:text-md lg:text-[18px] tracking-tighter font-semibold">
            Our focus is simple: delivering measurable results, not
            <br className="hidden md:block" />
            empty promises.
          </p>
        </div>

        {/* Right Column: Stats Grid */}
        <div className="grid grid-cols-2 w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
          {/* Stat 1: Top Left */}
          <div className="p-6 md:p-10 border-b border-r border-[#333333] flex flex-col items-start">
            <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-[#fbbd32] flex items-center justify-center mb-5 md:mb-5 shadow-sm">
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
            </div>
            <h3 className="text-4xl md:text-5xl font-medium text-[#333333] mb-0 tracking-tighter">
              <AnimatedNumber value={100} suffix="+" />
            </h3>
            <p className="text-[#6A6A6A] font-medium tracking-tighter text-[16px] md:text-[20px]">
              Businesses Served
            </p>
          </div>

          {/* Stat 2: Top Right */}
          <div className="p-6 md:p-10 border-b border-[#333333] flex flex-col items-start">
            <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-[#fbbd32] flex items-center justify-center mb-5 shadow-sm">
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
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            </div>
            <h3 className="text-4xl md:text-5xl font-medium text-[#333333] mb-0 tracking-tighter">
              <AnimatedNumber value={3} suffix="X" />
            </h3>
            <p className="text-[#6A6A6A] font-medium tracking-tighter text-[16px] md:text-[20px]">
              Avg. Growth Rate
            </p>
          </div>

          {/* Stat 3: Bottom Left */}
          <div className="p-6 md:p-10 border-r border-[#333333] flex flex-col items-start">
            <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-[#fc8866] flex items-center justify-center mb-5 shadow-sm">
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
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                />
              </svg>
            </div>
            <h3 className="text-4xl md:text-5xl font-medium text-[#333333] mb-0 tracking-tighter">
              <AnimatedNumber value={5} suffix="X" />
            </h3>
            <p className="text-[#6A6A6A] font-medium tracking-tighter text-[16px] md:text-[20px]">
              ROI on Campaigns
            </p>
          </div>

          {/* Stat 4: Bottom Right */}
          <div className="p-6 md:p-10 flex flex-col items-start">
            <div className="w-14 md:w-16 h-14 md:h-16 rounded-full bg-[#fc8866] flex items-center justify-center mb-5 shadow-sm">
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h3 className="text-4xl md:text-5xl font-medium text-[#333333] mb-0 tracking-tighter">
              <AnimatedNumber value={95} suffix="%" />
            </h3>
            <p className="text-[#6A6A6A] font-medium tracking-tighter text-[16px] md:text-[20px]">
              Client Retention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

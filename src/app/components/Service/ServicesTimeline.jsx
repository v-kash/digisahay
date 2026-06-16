"use client";

import React, { useEffect, useState } from "react";
import { ContactModal } from "../ContactModel" // add this import — adjust path to match your actual file location

function ServicesTimeline() {
  const COUNTDOWN_DURATION = (0 * 60 * 60 + 59 * 60 + 43) * 1000;
const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const storageKey = "services-offer-end-time";

    let endTime = localStorage.getItem(storageKey);

    if (!endTime) {
      endTime = Date.now() + COUNTDOWN_DURATION;
      localStorage.setItem(storageKey, endTime);
    }

    const updateTimer = () => {
      const now = Date.now();
      let distance = Number(endTime) - now;

      if (distance <= 0) {
        endTime = Date.now() + COUNTDOWN_DURATION;
        localStorage.setItem(storageKey, endTime);

        distance = COUNTDOWN_DURATION;
      }

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#1B0B4D] border-y border-[#ffffff10]"
      style={{
        backgroundImage: "url('/services/timeline.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Shining Animation */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-180%) skewX(-20deg);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          100% {
            transform: translateX(260%) skewX(-20deg);
            opacity: 0;
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            box-shadow:
              0 0 12px rgba(255, 195, 87, 0.35),
              0 0 30px rgba(255, 195, 87, 0.18);
          }

          50% {
            box-shadow:
              0 0 20px rgba(255, 195, 87, 0.6),
              0 0 45px rgba(255, 195, 87, 0.3);
          }
        }

        .offer-badge {
          position: relative;
          overflow: hidden;
          animation: glowPulse 2.5s ease-in-out infinite;
        }

        .offer-badge::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.18),
            transparent 45%
          );
        }

        .offer-badge::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -60%;
          width: 38%;
          height: 220%;
          background: rgba(255, 255, 255, 0.75);
          filter: blur(8px);
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#7C4DFF]/30 blur-[120px] rounded-full" />

        <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF8A00]/20 blur-[120px] rounded-full" />
      </div>

      {/* Decorative Vertical Lines */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="absolute left-1/3 top-0 h-full w-[1px] bg-white" />
        <div className="absolute left-2/3 top-0 h-full w-[1px] bg-white" />
      </div>

      {/* Main Content */}
      <div className="hidden lg:grid relative z-10 max-w-7xl mx-auto px-4 sm:px-0 py-5 grid-cols-1 lg:grid-cols-3 items-center gap-12">
        {" "}
        {/* Left Content */}
        <div className="flex items-center gap-1 justify-center lg:justify-start text-center lg:text-left">
          <div className="hidden sm:flex w-7 h-7 -translate-y-10 items-center justify-center shrink-0">
            <img src="/services/fire.png" alt="fire" />
          </div>

          <div>
            <h3 className="text-white text-[22px] sm:text-[28px] font-semibold tracking-tighter leading-tight">
              Limited-Time Offer
            </h3>

            <p className="text-[#ffffff] mt-1 text-[15px] sm:text-[18px] font-semibold tracking-tighter leading-tight">
              Save Up to
              <span className="offer-badge mx-1 inline-flex items-center justify-center text-[18px] font-bold rounded-full bg-[#FFC357] px-4 py-1 text-[#1A0F41] shadow-[0_4px_18px_rgba(255,195,87,0.35)]">
                20%*
              </span>
              on Your First Booking!
            </p>

            <p className="text-[#ffffff] mt-1.5 text-[13px] sm:text-[16px] font-medium tracking-tighter leading-tight">
              Exclusive for{" "}
              <span className="text-[#FFD54A] font-medium">New Customers</span>
            </p>

            <span className="text-[8px] text-[#FFFFFF]/40 font-medium">
              *T&C Apply
            </span>
          </div>
        </div>
        {/* Center Timer */}
        <div className="flex flex-col items-center justify-center">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-3">
            {/* Left Line */}
            <svg
              width="40"
              height="1"
              viewBox="0 0 40 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 rotate-180"
            >
              <line
                x1="0.5"
                y1="0.5"
                x2="39.5"
                y2="0.5"
                stroke="url(#leftGradient)"
                strokeLinecap="round"
              />

              <defs>
                <linearGradient
                  id="leftGradient"
                  x1="0"
                  y1="1.5"
                  x2="40"
                  y2="1.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D1C3FF" />

                  <stop offset="1" stopColor="#D1C3FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Text */}
            <span className="text-[#D1C3FF]/90 text-[12px] sm:text-[14px] font-medium uppercase tracking-tighter leading-tight whitespace-nowrap">
              Hurry! Offer Ends In
            </span>

            {/* Right Line */}
            <svg
              width="40"
              height="1"
              viewBox="0 0 40 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <line
                x1="0.5"
                y1="0.5"
                x2="39.5"
                y2="0.5"
                stroke="url(#rightGradient)"
                strokeLinecap="round"
              />

              <defs>
                <linearGradient
                  id="rightGradient"
                  x1="0"
                  y1="1.5"
                  x2="40"
                  y2="1.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D1C3FF" />

                  <stop offset="1" stopColor="#D1C3FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Timer */}
          <div className="flex items-center">
            {[
              { value: timeLeft.hours, label: "HRS" },
              { value: timeLeft.minutes, label: "MINS" },
              { value: timeLeft.seconds, label: "SECS" },
            ].map((item, index) => (
              <React.Fragment key={index}>
                {/* Box */}
                <div className="w-[76px] h-[80px] rounded-[22px] bg-[#ffffff08] border border-[#ffffff12] backdrop-blur-md flex flex-col items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <span className="text-white text-[30px] font-semibold leading-tight tracking-tight">
                    {item.value}
                  </span>

                  <span className="text-[#B8A8E8] text-[14px] font-medium leading-tight tracking-tighter">
                    {item.label}
                  </span>
                </div>

                {/* Dots */}
                {index < 2 && (
                  <div className="flex flex-col items-center justify-center px-3 gap-1">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#D1C3FF]" />

                    <span className="w-[5px] h-[5px] rounded-full bg-[#D1C3FF]" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Right CTA */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-fit text-center lg:text-left">
            <p className="text-[#E5D9FF] text-[13px] sm:text-[16px] font-semibold max-w-[300px] tracking-tighter leading-tight mb-3">
              Book today and get premium digital services <br />
              <span className="text-[#FFC357]">
                at a special introductory price.
              </span>
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
  className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-[#E39F43] to-[#E94D8A] text-white text-[14px] font-bold tracking-tight shadow-[0_10px_30px_rgba(255,92,138,0.35)]"
>
              {/* Hover Fill */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[260px] group-hover:h-[260px] bg-gradient-to-r from-[#B87420] to-[#B83065] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
              </span>

              {/* Content */}
              <span className="relative z-10 flex items-center gap-2">
                Unlock My Offer
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>

                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className="lg:hidden relative z-10 w-full mx-auto aspect-[804/206] bg-center bg-contain bg-no-repeat flex items-center justify-between px-4 sm:px-8"
        style={{ backgroundImage: "url('/services/timeframe.png')" }}
      >
        {/* Left Text */}
        <div className="flex flex-col justify-center max-w-[55%]">
          <h3 className="text-[#FFC357] text-[24px] sm:text-[24px] font-bold tracking-tighter leading-tight">
            Save Up to 20%*
          </h3>
          <p className="text-white text-[22px] sm:text-[22px] font-semibold tracking-tighter leading-tight">
            on Your First Booking!
          </p>
          <span className="text-[8px] sm:text-[8px] text-[#FFFFFF]/40 font-medium mt-0.5">
            *T&C Apply
          </span>
        </div>

        {/* Right Timer */}
        <div className="flex flex-col items-center">
          <span className="text-[#D1C3FF]/90 text-[10px] sm:text-[10px] font-medium uppercase tracking-tighter leading-tight mb-3 whitespace-nowrap">
            Hurry! Offer Ends In
          </span>

          <div className="flex items-center gap-1">
            {[
              { value: timeLeft.hours, label: "HRS" },
              { value: timeLeft.minutes, label: "MINS" },
              { value: timeLeft.seconds, label: "SECS" },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div className="w-[48px] sm:w-[52px] h-[48px] sm:h-[52px] rounded-[14px] bg-[#ffffff08] border border-[#ffffff12] backdrop-blur-md flex flex-col items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <span className="text-white text-[16px] sm:text-[20px] font-semibold leading-tight tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-[#B8A8E8] text-[8px] sm:text-[9px] font-medium leading-tight tracking-tighter">
                    {item.label}
                  </span>
                </div>

                {index < 2 && (
                  <span className="text-[#D1C3FF] text-[16px] font-semibold pb-3">
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
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

export default ServicesTimeline;

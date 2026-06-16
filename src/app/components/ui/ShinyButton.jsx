"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ShinyButton({ children, onClick, className = "" }) {
  const shineRef = useRef(null);

  useEffect(() => {
    if (!shineRef.current) return;

    gsap.fromTo(
      shineRef.current,
      {
        left: "-180%",
        opacity: 0,
      },
      {
        left: "220%",
        opacity: 1,
        duration: 2.2,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 1.8,
      },
    );
  }, []);

  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btn.style.setProperty("--x", `${x}px`);
    btn.style.setProperty("--y", `${y}px`);
  };

  return (
    <button
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden group w-full py-3 px-4 rounded-full bg-[#604BE3] text-white font-bold text-[14px] tracking-tighter transition-all duration-300 ${className}`}
    >
      {/* Cursor Hover Fill */}
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[320px] group-hover:h-[320px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2" />
      </span>

      {/* Premium Shine */}
      <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <span
          ref={shineRef}
          className="absolute top-[-20%] -left-[180%] h-[160%] w-[38%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-[10px] opacity-80"
        />
      </span>

      {/* Top Reflection */}
      <span className="absolute inset-x-0 top-0 h-[1px] bg-white/30" />

      {/* Soft Inner Glow */}
      <span className="absolute inset-0 rounded-full" />

      {/* Hover Glow */}
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </button>
  );
}

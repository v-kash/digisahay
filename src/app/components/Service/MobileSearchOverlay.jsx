// components/MobileSearchOverlay.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function MobileSearchOverlay({
  open,
  inputValue,
  onChange,
  onBack,
  onSelect,
  suggestions,
  isSearching,
}) {
  const [mounted, setMounted] = useState(false);
  const overlayInputRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      // focus on next tick so the keyboard opens
      const t = setTimeout(() => overlayInputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed top-16 left-0 right-0 bottom-0 z-[9999] bg-white flex flex-col">
      {/* Sticky search bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-b border-gray-100 shrink-0">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 h-11">
          <input
            ref={overlayInputRef}
            type="text"
            value={inputValue}
            onChange={onChange}
            placeholder="Search for services..."
            className="w-full h-full bg-transparent border-none outline-none font-medium text-[#333333] text-[15px] tracking-tighter"
          />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 shrink-0">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto py-2">
        {isSearching ? (
          <div className="flex flex-col items-center justify-center py-20 px-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#604BE3] animate-bounce" />
            </div>
            <p className="text-[14px] font-medium text-[#6A6A6A] tracking-tight">
              Finding the best services for you...
            </p>
          </div>
        ) : inputValue.trim().length < 2 ? (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
            <p className="text-[14px] text-[#6A6A6A] font-medium">
              Start typing to search for services
            </p>
          </div>
        ) : suggestions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#604BE3]/10 flex items-center justify-center mb-4">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#604BE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 className="text-[16px] font-semibold text-[#333333] tracking-tighter mb-2">
              No matching services found
            </h3>
            <p className="text-[14px] text-[#6A6A6A] font-medium leading-relaxed max-w-[260px]">
              We couldn't find anything for{" "}
              <span className="text-[#604BE3] font-semibold">"{inputValue}"</span>
            </p>
            {/* <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              {["SEO", "Branding", "Website", "Marketing"].map((item, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-[#604BE3]/5 border border-[#604BE3]/10 text-[#604BE3] text-[12px] font-semibold">
                  {item}
                </span>
              ))}
            </div> */}
          </div>
        ) : (
          suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => onSelect(suggestion.service)}
              className="w-full text-left px-4 py-4 hover:bg-[#604BE3]/5 transition-all duration-150 group flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-[#604BE3]/10 flex items-center justify-center shrink-0 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#604BE3] transition-colors">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-semibold text-[#333333] group-hover:text-[#604BE3] transition-colors tracking-tighter">
                  {suggestion.service}
                </div>
                {suggestion.matchedKeywords.length > 0 && (
                  <div className="text-[13px] text-[#6A6A6A] font-medium mt-0.5 truncate">
                    Looking for: {suggestion.matchedKeywords.slice(0, 3).join(", ")}
                  </div>
                )}
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-[#604BE3] transition-colors shrink-0">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          ))
        )}
      </div>
    </div>,
    document.body
  );
}
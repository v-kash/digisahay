// Updated ServicesHero.jsx with search suggestions integrated
"use client";
import gsap from "gsap";
import React, { useState, useEffect, useRef } from "react";
import SearchSuggestions from "./SearchSuggestions";
import { getSuggestions } from "@/app/data/serviceSuggestions";
import MobileSearchOverlay from "./MobileSearchOverlay"; // ADD THIS

export default function ServicesHero({ onServiceSelect }) {
  const serviceTags = [
    "SEO",
    "Social Media",
    "Branding",
    "Website Development",
    "Marketing",
  ];

  const tagToCategoryMap = {
  "SEO": "SEO Optimization",
  "Social Media": "Social Media Marketing",
  "Branding": "Branding & Design",
  "Website Development": "Website & App Development",
  "Marketing": "Performance Marketing",
};

  // --- Animation States ---
  const [currentIndex, setCurrentIndex] = useState(0);
const [isMobile, setIsMobile] = useState(false); // ADD THIS
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);
  const [svgDims, setSvgDims] = useState({ width: 760, height: 72 });

  const servicesList = [
    "SEO...",
    "Social Media...",
    "Branding...",
    "Website Development...",
    "Marketing...",
  ];

  // --- Word Swipe Logic ---


  useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 640);
  check();
  window.addEventListener("resize", check);
  return () => window.removeEventListener("resize", check);
}, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesList.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [servicesList.length]);

  // --- Responsive SVG Resizer ---
  useEffect(() => {
    const el = searchContainerRef.current;
    if (!el) return;

    setSvgDims({ width: el.offsetWidth, height: el.offsetHeight });

    const observer = new ResizeObserver(() => {
      if (el) {
        setSvgDims({ width: el.offsetWidth, height: el.offsetHeight });
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // --- GSAP Border Animation ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

      tl.set(".glow-trace", {
        opacity: 0.5,
        attr: { "stroke-dasharray": "100 100", "stroke-dashoffset": "100" },
      });
      tl.set(".border-trace", {
        opacity: 1,
        attr: { "stroke-dasharray": "100 100", "stroke-dashoffset": "100" },
      });

      tl.to(".glow-trace, .border-trace", {
        duration: 2,
        ease: "power3.inOut",
        attr: { "stroke-dashoffset": "0" },
      });

      tl.to(
        ".glow-trace, .border-trace",
        {
          duration: 2,
          ease: "power3.inOut",
          attr: { "stroke-dashoffset": "-100" },
        },
        "+=0.15",
      );
    }, searchContainerRef);

    return () => ctx.revert();
  }, [svgDims]);

  // --- Smart Search Logic ---
  const handleInputChange = (e) => {
    const value = e.target.value;

    setInputValue(value);

    if (value.trim().length >= 2) {
      setIsSearching(true);
      setShowSuggestions(true);

      setTimeout(() => {
        const results = getSuggestions(value);
        setSuggestions(results);
        setShowSuggestions(true);
        setIsSearching(false);
      }, 400);
   } else {
  setSuggestions([]);
  setIsSearching(false);
  if (!isMobile) {
    setShowSuggestions(false);
  }
  // on mobile, keep overlay open — MobileSearchOverlay shows
  // its "Start typing to search" placeholder when inputValue < 2 chars
}
  };

  const handleSuggestionSelect = (service) => {
    if (service) {
      // Clear the input and hide suggestions
      setInputValue("");
      setSuggestions([]);
      setShowSuggestions(false);

      // Notify parent component
      if (onServiceSelect) {
        onServiceSelect(service);
      }
    } else {
      // Clicked outside
      setShowSuggestions(false);
    }
  };

  // const handleInputFocus = () => {
  //   setIsFocused(true);
  //   if (inputValue.trim().length >= 2 && suggestions.length > 0) {
  //     setShowSuggestions(true);
  //   }
  // };

  const handleInputFocus = () => {
  if (isMobile) {
    inputRef.current?.blur();
    setShowSuggestions(true);
    return;
  }
  setIsFocused(true);
  if (inputValue.trim().length >= 2 && suggestions.length > 0) {
    setShowSuggestions(true);
  }
};

  // const handleInputBlur = () => {
  //   // Delay to allow click on suggestion
  //   setTimeout(() => {
  //     setIsFocused(false);
  //     setShowSuggestions(false);
  //   }, 200);
  // };

  const handleInputBlur = () => {
  if (isMobile) return; // overlay handles its own close
  setTimeout(() => {
    setIsFocused(false);
    setShowSuggestions(false);
  }, 200);
};

const handleMobileOverlayBack = () => {
  setShowSuggestions(false);
};

  // --- Mathematical Path Generation ---
  const { width: w, height: h } = svgDims;
  const inset = 2;
  const r = Math.max(0, (h - 2 * inset) / 2);
  const midX = w / 2;
  const rightStartArcX = w - inset - r;
  const leftStartArcX = inset + r;
  const y0 = inset;
  const y1 = h - inset;

  const rightPath = `M ${midX} ${y0} L ${rightStartArcX} ${y0} A ${r} ${r} 0 0 1 ${rightStartArcX} ${y1} L ${midX} ${y1}`;
  const leftPath = `M ${midX} ${y0} L ${leftStartArcX} ${y0} A ${r} ${r} 0 0 0 ${leftStartArcX} ${y1} L ${midX} ${y1}`;

  return (
    <section className="relative w-full pt-30 md:pt-32 pb-20 md:pb-20 px-4 md:px-8 lg:px-16 flex flex-col items-center md:justify-center text-center overflow-hidden bg-[#fcfbfa] min-h-[110svh] md:min-h-[100vh]">
      {/* Decorative background blurs - KEEP EXACTLY THE SAME */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.2) 60%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.2) 60%, transparent 75%)",
          }}
        >
          <div className="absolute left-[-180px] bottom-[-120px] sm:left-[-220px] lg:left-[-250px] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] bg-[#FFF95B]/20 blur-[120px] sm:blur-[180px] lg:blur-[220px] rounded-full" />
          <div className="absolute right-[-180px] bottom-[-120px] sm:right-[-220px] lg:right-[-250px] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] bg-[#FF930F]/20 blur-[120px] sm:blur-[180px] lg:blur-[220px] rounded-full" />
          <div className="absolute left-1/2 bottom-[-250px] -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-r from-[#FFF95B]/15 via-white/10 to-[#FF930F]/15 blur-[180px] rounded-full" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main Headline - KEEP EXACTLY THE SAME */}
        <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[58px] font-bold text-[#333333] leading-tight tracking-tighter mb-4 lg:mb-6">
          Everything Your Business Needs to <br className="hidden sm:block" />
          <span className="text-[#FF6B35]">Grow,</span>{" "}
          <span className="text-[#57CC3A]">Scale,</span> and{" "}
          <span className="relative inline-block border border-[#604BE3] text-[#604BE3] px-3 py-1 mx-2 bg-[#604BE3]/10 backdrop-blur-sm rounded-md">
            <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#604BE3] rounded-full"></span>
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#604BE3] rounded-full"></span>
            <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#604BE3] rounded-full"></span>
            <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#604BE3] rounded-full"></span>
            Stand Out Online
          </span>
        </h1>

        {/* Sub-headline - KEEP EXACTLY THE SAME */}
        <p className="hidden md:block text-[#585858] text-[15px] sm:text-[16px] md:text-[20px] font-medium max-w-3xl mx-auto leading-normal tracking-tighter mb-12">
          From high-converting websites to performance-driven marketing, Digital
          Sahaay helps businesses build stronger online presence, generate
          quality leads, and achieve measurable growth with strategies designed
          for real results.
        </p>
        <p className="block md:hidden text-[#585858] text-[16px] font-medium max-w-xl mx-auto leading-tight tracking-tighter mb-6">
          From websites to marketing, Digital Sahay delivers smart digital
          solutions focused on growth and results.
        </p>

        {/* --- Search Bar Container --- */}
        <div
          ref={searchContainerRef}
          className="relative w-full max-w-[760px] mx-auto mb-6 rounded-full p-[2px] isolate overflow-visible"
        >
          {/* Static default border - KEEP EXACTLY THE SAME */}
          <div className="absolute inset-0 rounded-full pointer-events-none"></div>

          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <svg
              className="w-full h-full overflow-visible"
              viewBox={`0 0 ${w} ${h}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="movingGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#4285F4" />
                  <stop offset="25%" stopColor="#EA4335" />
                  <stop offset="50%" stopColor="#FBBC05" />
                  <stop offset="75%" stopColor="#34A853" />
                  <stop offset="100%" stopColor="#4285F4" />
                </linearGradient>

                <filter
                  id="subtleGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" result="blur1" />
                  <feGaussianBlur stdDeviation="6" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect
                x={inset}
                y={inset}
                width={w - 2 * inset}
                height={h - 2 * inset}
                rx={r}
                stroke="#E5E7EB"
                strokeWidth="1.5"
              />

              <path
                className="glow-trace"
                d={rightPath}
                stroke="url(#movingGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength="100"
                fill="none"
                opacity="0"
                filter="url(#subtleGlow)"
              />
              <path
                className="glow-trace"
                d={leftPath}
                stroke="url(#movingGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength="100"
                fill="none"
                opacity="0"
                filter="url(#subtleGlow)"
              />

              <path
                className="border-trace"
                d={rightPath}
                stroke="url(#movingGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength="100"
                fill="none"
                opacity="0"
              />
              <path
                className="border-trace"
                d={leftPath}
                stroke="url(#movingGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength="100"
                fill="none"
                opacity="0"
              />
            </svg>
          </div>

          {/* Input Wrapper - KEEP EXACTLY THE SAME but add relative positioning for dropdown */}
          <div
            className={`relative z-10 w-full h-full bg-[#ffffff] rounded-full flex items-center p-2 sm:p-1.5 border border-[#333333]/20`}
          >
            <div
              className="relative flex-1 h-[48px] sm:h-[56px] flex items-center px-6 overflow-hidden cursor-text"
              onClick={() => document.getElementById("heroSearch").focus()}
            >
              {/* Dynamic Animated Placeholder - KEEP EXACTLY THE SAME */}
              {!inputValue && (
                <div className="absolute inset-0 flex items-center px-6 pointer-events-none">
                  <span className="text-[#585858]/70 font-medium text-[15px] sm:text-[18px] tracking-tighter whitespace-nowrap">
                    Search for&nbsp;
                  </span>

                  <div className="relative flex-1 h-full overflow-hidden">
                    {servicesList.map((srv, index) => {
                      let positionClass = "translate-y-full opacity-0";
                      if (index === currentIndex) {
                        positionClass = "translate-y-0 opacity-100";
                      } else if (
                        index === currentIndex - 1 ||
                        (currentIndex === 0 &&
                          index === servicesList.length - 1)
                      ) {
                        positionClass = "-translate-y-full opacity-0";
                      }

                      return (
                        <div
                          key={index}
                          className={`absolute left-0 top-0 w-full h-full flex items-center transition-all duration-500 ease-in-out ${positionClass}`}
                        >
                          <span className="text-[#585858]/70 font-medium text-[15px] sm:text-[18px] tracking-tighter whitespace-nowrap">
                            {srv}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Actual User Input Field */}
              <input
                id="heroSearch"
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="w-full h-full bg-transparent border-none outline-none font-medium text-[#333333] text-[15px] sm:text-[18px] tracking-tighter leading-tight relative z-10"
              />
            </div>

            {/* Search Button - KEEP EXACTLY THE SAME */}
            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#604BE3] hover:bg-[#4D3CB6] flex items-center justify-center shrink-0 transition-colors z-20 relative">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {/* Search Suggestions Dropdown */}
            <SearchSuggestions
  suggestions={suggestions}
  onSelect={handleSuggestionSelect}
  visible={showSuggestions}
  inputRef={inputRef}
  isSearching={isSearching}
  searchValue={inputValue}
  isMobile={isMobile}
/>
          </div>
        </div>


<MobileSearchOverlay
  open={isMobile && showSuggestions}
  inputValue={inputValue}
  onChange={handleInputChange}
  onBack={handleMobileOverlayBack}
  onSelect={handleSuggestionSelect}
  suggestions={suggestions}
  isSearching={isSearching}
/>
        {/* Mobile Layout - KEEP EXACTLY THE SAME */}
        <div className="flex flex-col items-center gap-3 tracking-tighter leading-tight sm:hidden">
          <div className="flex items-center justify-center gap-3 w-full">
            {serviceTags.slice(0, 3).map((tag) => (
              <button
                key={tag}
                onClick={() => onServiceSelect && onServiceSelect(tagToCategoryMap[tag] || tag)}
                className="group flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-[#333333]/30 bg-transparent text-[#333333] hover:border-[#604BE3] hover:text-[#604BE3] hover:bg-[#604BE3]/5 transition-all text-[14px] font-semibold whitespace-nowrap"
              >
                {tag}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#333333] group-hover:text-[#604BE3] transition-colors shrink-0"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 w-full">
            {serviceTags.slice(3, 5).map((tag) => (
              <button
                key={tag}
                onClick={() => onServiceSelect && onServiceSelect(tagToCategoryMap[tag] || tag)}
                className="group flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#333333]/30 bg-transparent text-[#333333] hover:border-[#604BE3] hover:text-[#604BE3] hover:bg-[#604BE3]/5 transition-all text-[14px] font-semibold whitespace-nowrap"
              >
                {tag}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#333333] group-hover:text-[#604BE3] transition-colors shrink-0"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Layout - KEEP EXACTLY THE SAME */}
        <div className="hidden sm:flex flex-wrap items-center justify-center gap-2 md:gap-4 tracking-tighter leading-tight">
          {serviceTags.map((tag) => (
            <button
              key={tag}
              onClick={() => onServiceSelect && onServiceSelect(tagToCategoryMap[tag] || tag)}
              className="group flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#333333]/30 bg-transparent text-[#333333] hover:border-[#604BE3] hover:text-[#604BE3] hover:bg-[#604BE3]/5 transition-all text-[16px] font-semibold whitespace-nowrap"
            >
              {tag}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#333333] group-hover:text-[#604BE3] transition-colors shrink-0"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Character Illustration - KEEP EXACTLY THE SAME */}
      <div className="absolute sm:hidden bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none">
        <div className="absolute bottom-0 left-0 w-full z-20">
          <img
            src="/servicepage/border.png"
            alt="Hero Character"
            className=" relative z-20 mx-auto w-[100%] h-[10%] object-contain object-bottom"
          />
        </div>
        <img
          src="/servicepage/hero.png"
          alt="Hero Character"
          className=" relative z-10 mx-auto w-[100%] sm:w-[85%] md:w-[720px] lg:w-[860px] xl:w-[980px] object-contain object-bottom translate-y-[40px] sm:translate-y-[24px]"
        />
      </div>
    </section>
  );
}

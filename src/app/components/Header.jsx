// // "use client";

// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import React, { useState, useEffect, useRef } from "react";

// // // Define navigation items once to ensure flawless indexing and no typos
// // const NAV_ITEMS = [
// //   { name: "Home", path: "/" },
// //   { name: "Services", path: "/services" },
// //   { name: "Our Works", path: "/works" },
// //   { name: "Contact Us", path: "/contact" },
// // ];

// // export default function Header() {
// //   const pathname = usePathname();
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   // --- Smooth Tab Animation States ---
// //   const [activeTab, setActiveTab] = useState("Home");
// //   const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
// //   const navRefs = useRef([]);

// //   // --- Handle Scroll Background ---
// //   // useEffect(() => {
// //   //   const handleScroll = () => {
// //   //     setScrolled(window.scrollY > 50);
// //   //   };

// //   //   window.addEventListener("scroll", handleScroll);
// //   //   return () => window.removeEventListener("scroll", handleScroll);
// //   // }, []);

// //   useEffect(() => {
// //   const handleScroll = () => {
// //     setScrolled(window.scrollY > 50);
// //   };
// //   window.addEventListener("scroll", handleScroll);
// //   handleScroll(); // check current position immediately, including after back/forward nav
// //   return () => window.removeEventListener("scroll", handleScroll);
// // }, []);

// //   // --- Sync Active Tab with URL ---
// //   useEffect(() => {
// //     if (pathname === "/") {
// //       setActiveTab("Home");
// //     } else if (pathname.startsWith("/services")) {
// //       setActiveTab("Services");
// //     } else if (pathname.startsWith("/works")) {
// //       setActiveTab("Our Works");
// //     } else if (pathname.startsWith("/contact")) {
// //       setActiveTab("Contact Us");
// //     }
// //   }, [pathname]);

// //   // --- Smooth Tab Position Logic ---
// //   useEffect(() => {
// //     const updatePillPosition = () => {
// //       const activeIndex = NAV_ITEMS.findIndex(
// //         (item) => item.name === activeTab,
// //       );
// //       const activeElement = navRefs.current[activeIndex];

// //       if (activeElement) {
// //         setPillStyle({
// //           left: activeElement.offsetLeft,
// //           width: activeElement.offsetWidth,
// //           opacity: 1,
// //         });
// //       }
// //     };

// //     // Small delay ensures fonts and layout are fully painted before measuring
// //     const timeoutId = setTimeout(updatePillPosition, 50);

// //     // Re-calculate position on window resize to ensure it stays aligned
// //     window.addEventListener("resize", updatePillPosition);

// //     return () => {
// //       clearTimeout(timeoutId);
// //       window.removeEventListener("resize", updatePillPosition);
// //     };
// //   }, [activeTab]);

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-0 font-sans z-50 transition-colors duration-300 ${
// //         scrolled ? "bg-white/70 backdrop-blur-sm shadow-xs" : "bg-transparent"
// //       }`}
// //     >
// //       <div className="flex items-center gap-3 cursor-pointer z-10">
// //         <Link href="/" className="flex flex-col leading-none">
// //           <img
// //             src="/logo.svg"
// //             alt="Logo"
// //             className="h-16 md:h-14 lg:h-16 w-auto object-contain"
// //           />
// //         </Link>
// //       </div>

// //       {/* Center: True Absolute Center Navigation (Desktop Only) */}
// //       <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center bg-white/80 backdrop-blur-md border border-gray-800/20 shadow-xs rounded-[50px] p-1 z-10">
// //         {/* Animated Background Pill */}
// //         <div
// //           className="absolute top-1 bottom-1 rounded-[50px] bg-[#604BE3] transition-all duration-300 ease-out z-0 pointer-events-none"
// //           style={{
// //             left: `${pillStyle.left}px`,
// //             width: `${pillStyle.width}px`,
// //             opacity: pillStyle.opacity,
// //           }}
// //         />

// //         {/* Mapped Desktop Navigation */}
// //         {NAV_ITEMS.map((item, index) => (
// //           <Link
// //             key={item.name}
// //             href={item.path}
// //             ref={(el) => (navRefs.current[index] = el)}
// //             className={`relative z-10 text-[16px] font-semibold px-6 py-2.5 rounded-[50px] transition-colors duration-300 ${
// //               activeTab === item.name
// //                 ? "text-white"
// //                 : "text-[#333333] hover:text-gray-900"
// //             }`}
// //           >
// //             {item.name}
// //           </Link>
// //         ))}
// //       </nav>

// //       {/* Right: Phone Button & Hamburger Toggle */}
// //       <div className="flex items-center gap-2 sm:gap-4 z-10">
// //         {/* Phone Button */}
// //         <a
// //           href="tel:+916357665915"
// //           onMouseMove={(e) => {
// //             const btn = e.currentTarget;
// //             const rect = btn.getBoundingClientRect();

// //             const x = e.clientX - rect.left;
// //             const y = e.clientY - rect.top;

// //             btn.style.setProperty("--x", `${x}px`);
// //             btn.style.setProperty("--y", `${y}px`);
// //           }}
// //           className="relative overflow-hidden group flex items-center gap-[10px] bg-[#604BE3] text-[#ffffff] text-[14px] sm:text-[16px] font-medium px-4 sm:px-5 py-[12px] sm:py-[14px] rounded-[50px] shadow-sm"
// //         >
// //           {/* Hover Fill */}
// //           <span className="absolute inset-0 rounded-[50px] overflow-hidden">
// //             <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[260px] group-hover:h-[260px] bg-[#4F3CC9] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
// //           </span>

// //           {/* Icon */}
// //           <svg
// //             width="16"
// //             height="16"
// //             viewBox="0 0 16 16"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //             className="relative z-10 shrink-0"
// //           >
// //             <path
// //               fillRule="evenodd"
// //               clipRule="evenodd"
// //               d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H3.279C3.924 0 4.4865 0.4395 4.64325 1.065L5.472 4.38225C5.53916 4.65075 5.52559 4.93309 5.433 5.19392C5.34042 5.45474 5.17292 5.68244 4.9515 5.8485L3.98175 6.576C3.8805 6.65175 3.85875 6.76275 3.88725 6.84C4.31053 7.99114 4.97895 9.03653 5.84621 9.90379C6.71347 10.7711 7.75886 11.4395 8.91 11.8627C8.98725 11.8912 9.0975 11.8695 9.174 11.7682L9.9015 10.7985C10.0676 10.5771 10.2953 10.4096 10.5561 10.317C10.8169 10.2244 11.0993 10.2108 11.3678 10.278L14.685 11.1068C15.3105 11.2635 15.75 11.826 15.75 12.4718V13.5C15.75 14.0967 15.5129 14.669 15.091 15.091C14.669 15.5129 14.0967 15.75 13.5 15.75H11.8125C5.289 15.75 0 10.461 0 3.9375V2.25Z"
// //               fill="white"
// //             />
// //           </svg>

// //           {/* Desktop Text */}
// //           <span className="relative z-10 leading-tight tracking-tight hidden sm:block">
// //             8980704575
// //           </span>

// //           {/* Mobile Text */}
// //           <span className="relative z-10 leading-none tracking-[0.2px] sm:hidden">
// //             Call Now
// //           </span>
// //         </a>

// //         {/* Mobile Hamburger Menu Button */}
// //         <button
// //           className="md:hidden flex items-center justify-center w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 transition-colors"
// //           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //           aria-label="Toggle Menu"
// //           aria-expanded={isMobileMenuOpen}
// //         >
// //           {isMobileMenuOpen ? (
// //             <svg
// //               width="24"
// //               height="24"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             >
// //               <line x1="18" y1="6" x2="6" y2="18"></line>
// //               <line x1="6" y1="6" x2="18" y2="18"></line>
// //             </svg>
// //           ) : (
// //             <svg
// //               width="24"
// //               height="24"
// //               viewBox="0 0 24 24"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             >
// //               <line x1="4" y1="12" x2="20" y2="12"></line>
// //               <line x1="4" y1="6" x2="20" y2="6"></line>
// //               <line x1="4" y1="18" x2="20" y2="18"></line>
// //             </svg>
// //           )}
// //         </button>
// //       </div>

// //       {/* Mobile Navigation Dropdown */}
// //       {isMobileMenuOpen && (
// //         <div className="absolute top-[100%] left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-2 gap-2 md:hidden z-20">
// //           {NAV_ITEMS.map((item) => (
// //             <Link
// //               key={item.name}
// //               href={item.path}
// //               className={`${
// //                 activeTab === item.name
// //                   ? "bg-[#604BE3] text-white"
// //                   : "text-[#333333] hover:bg-gray-50"
// //               } text-base font-semibold px-4 py-3 rounded-full transition-colors`}
// //               onClick={() => setIsMobileMenuOpen(false)}
// //             >
// //               {item.name}
// //             </Link>
// //           ))}
// //         </div>
// //       )}
// //     </header>
// //   );
// // }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

// Define navigation items once to ensure flawless indexing and no typos
const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Our Works", path: "/works" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- Smooth Tab Animation States ---
  const [activeTab, setActiveTab] = useState("Home");
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef([]);

  // --- Handle Scroll Background ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check current position immediately, including after back/forward nav
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Sync Active Tab with URL ---
  useEffect(() => {
    if (pathname === "/") {
      setActiveTab("Home");
    } else if (pathname.startsWith("/services")) {
      setActiveTab("Services");
    } else if (pathname.startsWith("/works")) {
      setActiveTab("Our Works");
    } else if (pathname.startsWith("/contact")) {
      setActiveTab("Contact Us");
    }
  }, [pathname]);

  // --- Smooth Tab Position Logic ---
  useEffect(() => {
    let rafId;

    const updatePillPosition = () => {
      const activeIndex = NAV_ITEMS.findIndex(
        (item) => item.name === activeTab,
      );
      const activeElement = navRefs.current[activeIndex];

      if (activeElement) {
        setPillStyle({
          left: activeElement.offsetLeft,
          width: activeElement.offsetWidth,
          opacity: 1,
        });
      } else {
        // Refs not ready yet (e.g. right after back/forward navigation) - retry next frame
        rafId = requestAnimationFrame(updatePillPosition);
      }
    };

    // Wait for layout/paint to settle before measuring
    rafId = requestAnimationFrame(() => {
      rafId = requestAnimationFrame(updatePillPosition);
    });

    window.addEventListener("resize", updatePillPosition);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", updatePillPosition);
    };
  }, [activeTab]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-0 font-sans z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-sm shadow-xs" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3 cursor-pointer z-10">
        <Link href="/" className="flex flex-col leading-none">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-16 md:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>
      </div>

      {/* Center: True Absolute Center Navigation (Desktop Only) */}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center bg-white/80 backdrop-blur-md border border-gray-800/20 shadow-xs rounded-[50px] p-1 z-10">
        {/* Animated Background Pill */}
        <div
          className="absolute top-1 bottom-1 rounded-[50px] bg-[#604BE3] transition-all duration-300 ease-out z-0 pointer-events-none"
          style={{
            left: `${pillStyle.left}px`,
            width: `${pillStyle.width}px`,
            opacity: pillStyle.opacity,
          }}
        />

        {/* Mapped Desktop Navigation */}
        {NAV_ITEMS.map((item, index) => (
          <Link
            key={item.name}
            href={item.path}
            ref={(el) => (navRefs.current[index] = el)}
            className={`relative z-10 text-[16px] font-semibold px-6 py-2.5 rounded-[50px] transition-colors duration-300 ${
              activeTab === item.name
                ? "text-white"
                : "text-[#333333] hover:text-gray-900"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Right: Phone Button & Hamburger Toggle */}
      <div className="flex items-center gap-2 sm:gap-4 z-10">
        {/* Phone Button */}

        <a
          href="tel:+916357665915"
          onMouseMove={(e) => {
            const btn = e.currentTarget;
            const rect = btn.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            btn.style.setProperty("--x", `${x}px`);
            btn.style.setProperty("--y", `${y}px`);
          }}
          className="relative overflow-hidden group flex items-center gap-[10px] bg-[#604BE3] text-[#ffffff] text-[14px] sm:text-[16px] font-medium px-4 sm:px-5 py-[12px] sm:py-[14px] rounded-[50px] shadow-sm"
        >
          {/* Hover Fill */}
          <span className="absolute inset-0 rounded-[50px] overflow-hidden">
            <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[260px] group-hover:h-[260px] bg-[#4F3CC9] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
          </span>

          {/* Icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 shrink-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H3.279C3.924 0 4.4865 0.4395 4.64325 1.065L5.472 4.38225C5.53916 4.65075 5.52559 4.93309 5.433 5.19392C5.34042 5.45474 5.17292 5.68244 4.9515 5.8485L3.98175 6.576C3.8805 6.65175 3.85875 6.76275 3.88725 6.84C4.31053 7.99114 4.97895 9.03653 5.84621 9.90379C6.71347 10.7711 7.75886 11.4395 8.91 11.8627C8.98725 11.8912 9.0975 11.8695 9.174 11.7682L9.9015 10.7985C10.0676 10.5771 10.2953 10.4096 10.5561 10.317C10.8169 10.2244 11.0993 10.2108 11.3678 10.278L14.685 11.1068C15.3105 11.2635 15.75 11.826 15.75 12.4718V13.5C15.75 14.0967 15.5129 14.669 15.091 15.091C14.669 15.5129 14.0967 15.75 13.5 15.75H11.8125C5.289 15.75 0 10.461 0 3.9375V2.25Z"
              fill="white"
            />
          </svg>

          {/* Desktop Text */}
          <span className="relative z-10 leading-tight tracking-tight hidden sm:block">
            6357665915
          </span>

          {/* Mobile Text */}
          <span className="relative z-10 leading-none tracking-[0.2px] sm:hidden">
            Call Now
          </span>
        </a>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12"></line>
              <line x1="4" y1="6" x2="20" y2="6"></line>
              <line x1="4" y1="18" x2="20" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-2 gap-2 md:hidden z-20">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`${
                activeTab === item.name
                  ? "bg-[#604BE3] text-white"
                  : "text-[#333333] hover:bg-gray-50"
              } text-base font-semibold px-4 py-3 rounded-full transition-colors`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect, useRef } from "react";

// // ============================================================
// //  🎨 TWEAK THESE PARAMS — everything lives here
// // ============================================================
// const INK_CONFIG = {
//   // Pill color
//   pillColor: "#604BE3",

//   // How long the full animation takes (ms)
//   duration: 480,

//   // How many satellite ink droplets explode out
//   dropCount: 3,

//   // Max radius each drop reaches before getting sucked back (px)
//   dropMaxRadius: 18,       // first drop
//   dropMaxRadiusMid: 12,    // second drop
//   dropMaxRadiusSmall: 9,   // third drop

//   // How far droplets scatter from the target center (px)
//   dropScatterX: 30,
//   dropScatterY: 12,

//   // Stagger delay between drops (0–1 fraction of duration)
//   dropDelay1: 0,
//   dropDelay2: 0.06,
//   dropDelay3: 0.10,

//   // How much the pill squeezes vertically mid-travel (px inset top+bottom)
//   pillSqueezeAmount: 8,

//   // Easing: "easeInOut" | "easeOut" | "linear"
//   easing: "easeInOut",
// };
// // ============================================================

// const NAV_ITEMS = [
//   { name: "Home",       path: "/" },
//   { name: "Services",   path: "/services" },
//   { name: "Our Works",  path: "/works" },
//   { name: "Contact Us", path: "/contact" },
// ];

// // ── Easing helpers ──────────────────────────────────────────
// function applyEasing(t, type) {
//   t = Math.min(Math.max(t, 0), 1);
//   if (type === "easeOut")   return 1 - Math.pow(1 - t, 3);
//   if (type === "linear")    return t;
//   // easeInOut (default)
//   return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
// }

// function easeOut(t, power = 3) {
//   return 1 - Math.pow(1 - Math.min(t, 1), power);
// }

// // ── Canvas pill draw helper ──────────────────────────────────
// function drawPill(ctx, x, y, w, h, opacity, color) {
//   if (opacity <= 0 || w <= 0) return;
//   ctx.save();
//   ctx.globalAlpha = Math.min(Math.max(opacity, 0), 1);
//   ctx.fillStyle = color;
//   const r = h / 2;
//   ctx.beginPath();
//   ctx.moveTo(x + r, y);
//   ctx.lineTo(x + w - r, y);
//   ctx.arc(x + w - r, y + r, r, -Math.PI / 2, Math.PI / 2);
//   ctx.lineTo(x + r, y + h);
//   ctx.arc(x + r, y + r, r, Math.PI / 2, (3 * Math.PI) / 2);
//   ctx.closePath();
//   ctx.fill();
//   ctx.restore();
// }

// // ── Main Header ─────────────────────────────────────────────
// export default function Header() {
//   const pathname = usePathname();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled]                 = useState(false);
//   const [activeTab, setActiveTab]               = useState("Home");

//   const navRef      = useRef(null);
//   const canvasRef   = useRef(null);
//   const linkRefs    = useRef([]);
//   const activeElRef = useRef(null);
//   const rafRef      = useRef(null);
//   const animRef     = useRef(null); // stores ongoing anim state

//   // ── Scroll background ──────────────────────────────────────
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     onScroll();
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // ── Sync active tab with URL ───────────────────────────────
//   useEffect(() => {
//     if (pathname === "/")                    setActiveTab("Home");
//     else if (pathname.startsWith("/services")) setActiveTab("Services");
//     else if (pathname.startsWith("/works"))    setActiveTab("Our Works");
//     else if (pathname.startsWith("/contact"))  setActiveTab("Contact Us");
//   }, [pathname]);

//   // ── Canvas sizing ──────────────────────────────────────────
//   function resizeCanvas() {
//     const canvas = canvasRef.current;
//     const nav    = navRef.current;
//     if (!canvas || !nav) return;
//     const rect = nav.getBoundingClientRect();
//     canvas.width  = rect.width;
//     canvas.height = rect.height;
//   }

//   // ── Get element rect relative to nav ──────────────────────
//   function getRelRect(el) {
//     const nav = navRef.current;
//     if (!nav || !el) return null;
//     const nR = nav.getBoundingClientRect();
//     const eR = el.getBoundingClientRect();
//     return {
//       x:  eR.left - nR.left,
//       y:  eR.top  - nR.top,
//       w:  eR.width,
//       h:  eR.height,
//       cx: eR.left - nR.left + eR.width  / 2,
//       cy: eR.top  - nR.top  + eR.height / 2,
//     };
//   }

//   // ── Draw idle pill (no animation) ─────────────────────────
//   function drawIdle() {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     resizeCanvas();
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     const el = activeElRef.current;
//     if (!el) return;
//     const r = getRelRect(el);
//     if (!r) return;
//     const PAD = 4;
//     drawPill(ctx, r.x, PAD, r.w, r.h - PAD, 1, INK_CONFIG.pillColor);
//   }

//   // ── Ink drop animation ─────────────────────────────────────
//   function animateInkDrop(fromEl, toEl) {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");

//     const C   = INK_CONFIG;
//     const PAD = 4;

//     const from = getRelRect(fromEl);
//     const to   = getRelRect(toEl);
//     if (!from || !to) return;

//     // Build drops config from params
//     const dropsConfig = [
//       {
//         el: null, // we draw directly on canvas
//         ox: (Math.random() - 0.5) * C.dropScatterX * 2,
//         oy: (Math.random() - 0.5) * C.dropScatterY,
//         delay: C.dropDelay1,
//         maxR: C.dropMaxRadius,
//       },
//       {
//         ox: (Math.random() - 0.5) * C.dropScatterX,
//         oy: (Math.random() - 0.5) * C.dropScatterY,
//         delay: C.dropDelay2,
//         maxR: C.dropMaxRadiusMid,
//       },
//       {
//         ox: (Math.random() - 0.5) * C.dropScatterX * 1.5,
//         oy: (Math.random() - 0.5) * C.dropScatterY,
//         delay: C.dropDelay3,
//         maxR: C.dropMaxRadiusSmall,
//       },
//     ];

//     // Snapshot drop positions so they're stable across frames
//     const drops = dropsConfig.map((d) => ({ ...d }));

//     if (rafRef.current) cancelAnimationFrame(rafRef.current);

//     const startTime = performance.now();
//     const dur       = C.duration;

//     function frame(ts) {
//       const raw  = Math.min((ts - startTime) / dur, 1);
//       const t    = applyEasing(raw, C.easing);

//       resizeCanvas();
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Pill: slide from → to with squeeze
//       const mainX = from.x + (to.x - from.x) * t;
//       const mainW = from.w + (to.w - from.w) * t;
//       const sq    = Math.sin(raw * Math.PI) * C.pillSqueezeAmount;
//       drawPill(
//         ctx,
//         mainX,
//         PAD + sq,
//         mainW,
//         from.h - PAD - sq * 2,
//         1,
//         C.pillColor
//       );

//       // Satellite ink drops
//       drops.forEach((d) => {
//         const dt    = Math.max((raw - d.delay) / (1 - d.delay), 0);
//         // rise fast, collapse after halfway
//         const phase = Math.min(dt * 1.8, 1);
//         const r     =
//           easeOut(phase) *
//           d.maxR *
//           (1 - easeOut(Math.max(dt - 0.5, 0) * 2));

//         if (r > 0.5) {
//           ctx.save();
//           ctx.globalAlpha = Math.min(r / d.maxR + 0.1, 0.92);
//           ctx.fillStyle   = C.pillColor;
//           ctx.beginPath();
//           ctx.arc(
//             to.cx + d.ox * (1 - easeOut(dt, 2)),
//             to.cy + d.oy * (1 - easeOut(dt, 2)),
//             r,
//             0,
//             Math.PI * 2
//           );
//           ctx.fill();
//           ctx.restore();
//         }
//       });

//       if (raw < 1) {
//         rafRef.current = requestAnimationFrame(frame);
//       } else {
//         // settle to exact final position
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         const final = getRelRect(toEl);
//         if (final) drawPill(ctx, final.x, PAD, final.w, final.h - PAD, 1, C.pillColor);
//       }
//     }

//     rafRef.current = requestAnimationFrame(frame);
//   }

//   // ── Init canvas on mount + resize ─────────────────────────
//   useEffect(() => {
//     resizeCanvas();
//     // draw after fonts settle
//     const id = setTimeout(() => {
//       const el = linkRefs.current.find(
//         (a) => a?.textContent?.trim() === activeTab
//       );
//       activeElRef.current = el || null;
//       drawIdle();
//     }, 80);

//     const onResize = () => {
//       resizeCanvas();
//       drawIdle();
//     };
//     window.addEventListener("resize", onResize);
//     return () => {
//       clearTimeout(id);
//       window.removeEventListener("resize", onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   // ── Update active pill when tab changes ───────────────────
//   useEffect(() => {
//     const el = linkRefs.current.find(
//       (a) => a?.textContent?.trim() === activeTab
//     );
//     if (!el) return;

//     const prev = activeElRef.current;
//     activeElRef.current = el;

//     if (prev && prev !== el) {
//       animateInkDrop(prev, el);
//     } else {
//       requestAnimationFrame(() => {
//         requestAnimationFrame(drawIdle);
//       });
//     }
//   }, [activeTab]);

//   // ── Click handler ──────────────────────────────────────────
//   function handleTabClick(name) {
//     if (name === activeTab) return;
//     setActiveTab(name);
//   }

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 lg:px-16 py-0 font-sans z-50 transition-colors duration-300 ${
//         scrolled
//           ? "bg-white/70 backdrop-blur-sm shadow-xs"
//           : "bg-transparent"
//       }`}
//     >
//       {/* Logo */}
//       <div className="flex items-center gap-3 cursor-pointer z-10">
//         <Link href="/" className="flex flex-col leading-none">
//           <img
//             src="/logo.svg"
//             alt="Logo"
//             className="h-16 md:h-14 lg:h-16 w-auto object-contain"
//           />
//         </Link>
//       </div>

//       {/* Desktop Nav */}
//       <nav
//         ref={navRef}
//         className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center  bg-white/80 backdrop-blur-md border border-gray-800/20 shadow-xs rounded-[50px] p-1 z-10"
//       >
//         {/* Canvas layer for ink animation */}
//         <canvas
//           ref={canvasRef}
//           style={{
//             position:      "absolute",
//             top:           2.5,
//             left:          0,
//             width:         "100%",
//             height:        "100%",
//             pointerEvents: "none",
//             zIndex:        1,
//             borderRadius:  "50px",
//           }}
//         />

//         {NAV_ITEMS.map((item, index) => (
//           <Link
//             key={item.name}
//             href={item.path}
//             ref={(el) => (linkRefs.current[index] = el)}
//             onClick={() => handleTabClick(item.name)}
//             className={`relative z-10 flex items-center justify-center  text-[16px] font-semibold px-6 pt-2.5 pb-1.5 h-11 leading-none rounded-[50px] transition-colors duration-300 ${
//   activeTab === item.name
//     ? "text-white"
//     : "text-[#333333] hover:text-gray-900"
// }`}
//             style={{ zIndex: 2 }}
//           >
//             {item.name}
//           </Link>
//         ))}
//       </nav>

//       {/* Right: Phone + Hamburger */}
//       <div className="flex items-center gap-2 sm:gap-4 z-10">
//         <a
//           href="tel:+916357665915"
//           onMouseMove={(e) => {
//             const btn  = e.currentTarget;
//             const rect = btn.getBoundingClientRect();
//             btn.style.setProperty("--x", `${e.clientX - rect.left}px`);
//             btn.style.setProperty("--y", `${e.clientY - rect.top}px`);
//           }}
//           className="relative overflow-hidden group flex items-center gap-[10px] bg-[#604BE3] text-[#ffffff] text-[14px] sm:text-[16px] font-medium px-4 sm:px-5 py-[12px] sm:py-[14px] rounded-[50px] shadow-sm"
//         >
//           <span className="absolute inset-0 rounded-[50px] overflow-hidden">
//             <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[260px] group-hover:h-[260px] bg-[#4F3CC9] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2" />
//           </span>
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 shrink-0">
//             <path fillRule="evenodd" clipRule="evenodd" d="M0 2.25C0 1.65326 0.237053 1.08097 0.65901 0.65901C1.08097 0.237053 1.65326 0 2.25 0H3.279C3.924 0 4.4865 0.4395 4.64325 1.065L5.472 4.38225C5.53916 4.65075 5.52559 4.93309 5.433 5.19392C5.34042 5.45474 5.17292 5.68244 4.9515 5.8485L3.98175 6.576C3.8805 6.65175 3.85875 6.76275 3.88725 6.84C4.31053 7.99114 4.97895 9.03653 5.84621 9.90379C6.71347 10.7711 7.75886 11.4395 8.91 11.8627C8.98725 11.8912 9.0975 11.8695 9.174 11.7682L9.9015 10.7985C10.0676 10.5771 10.2953 10.4096 10.5561 10.317C10.8169 10.2244 11.0993 10.2108 11.3678 10.278L14.685 11.1068C15.3105 11.2635 15.75 11.826 15.75 12.4718V13.5C15.75 14.0967 15.5129 14.669 15.091 15.091C14.669 15.5129 14.0967 15.75 13.5 15.75H11.8125C5.289 15.75 0 10.461 0 3.9375V2.25Z" fill="white"/>
//           </svg>
//           <span className="relative z-10 leading-tight tracking-tight hidden sm:block">6357665915</span>
//           <span className="relative z-10 leading-none tracking-[0.2px] sm:hidden">Call Now</span>
//         </a>

//         <button
//           className="md:hidden flex items-center justify-center w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-800 transition-colors"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Toggle Menu"
//           aria-expanded={isMobileMenuOpen}
//         >
//           {isMobileMenuOpen ? (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
//             </svg>
//           ) : (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" />
//             </svg>
//           )}
//         </button>
//       </div>

//       {/* Mobile Dropdown */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-[100%] left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-2 gap-2 md:hidden z-20">
//           {NAV_ITEMS.map((item) => (
//             <Link
//               key={item.name}
//               href={item.path}
//               className={`${
//                 activeTab === item.name
//                   ? "bg-[#604BE3] text-white"
//                   : "text-[#333333] hover:bg-gray-50"
//               } text-base font-semibold px-4 py-3 rounded-full transition-colors`}
//               onClick={() => {
//                 handleTabClick(item.name);
//                 setIsMobileMenuOpen(false);
//               }}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

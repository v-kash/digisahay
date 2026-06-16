// "use client";

// import Lenis from "lenis";
// import { useEffect } from "react";
// import { usePathname } from "next/navigation";

// export default function SmoothScroll() {
//   const pathname = usePathname();

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       smoothWheel: true,
//       smoothTouch: false,
//       touchMultiplier: 2,
//     });

//     let rafId;

//     const raf = (time) => {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     };

//     rafId = requestAnimationFrame(raf);

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);

//   // Reset scroll on page change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }


"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Prevent the browser from restoring scroll position on back/forward —
    // this is what desyncs Lenis and causes the "odd" visual glitches.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisInstance = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  // Reset scroll on page change — use Lenis, not window.scrollTo,
  // so Lenis's internal state stays in sync with the real scroll position.
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
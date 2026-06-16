"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Srikanth",
      title: "Founder, Aumveda Wellness",
      quote:
        "Digital Sahay perfectly captured our vision and created a website that truly reflects our wellness brand. Their professionalism and attention to detail made the entire experience seamless.",
      bgColor: "bg-[#FFCDBA]",
    },
    {
      id: 2,
      name: "Joseph Rixon",
      title: "Founder, JJ Scrap Buyers",
      quote:
        "The team delivered exactly what we needed with excellent communication throughout the project. We appreciate their dedication and commitment to quality.",
      bgColor: "bg-[#D1C9FF]",
    },
    {
      id: 3,
      name: "Anilkumar Vithaldas",
      title: "Trustee, Mahi Education Trust",
      quote:
        "Digital Sahay developed a website that effectively represents our mission. Their professional approach and timely delivery exceeded our expectations.",
      bgColor: "bg-[#D4DEFC]",
    },
    {
      id: 4,
      name: "Neeraj Mahinder",
      title: "Director, HTC18",
      quote:
        "From planning to execution, the team demonstrated exceptional expertise and responsiveness. The final website was modern, efficient, and aligned with our goals.",
      bgColor: "bg-[#FFE0C2]",
    },
    {
      id: 5,
      name: "Abhilash",
      title: "Founder, Saranya Export",
      quote:
        "Digital Sahay understood our business requirements and transformed them into a strong digital presence. The entire process was smooth and professional.",
      bgColor: "bg-[#D4DEFC]",
    },
    {
      id: 6,
      name: "Neeraj Mahinder",
      title: "Trustee, Vithaldas Welfare",
      quote:
        "Their attention to detail and client-first approach made this collaboration a success. We are delighted with the final outcome.",
      bgColor: "bg-[#FFCDBA]",
    },
  ];

  // ==========================================
  // MOBILE: GSAP Animation State & Refs
  // ==========================================
  const cardsRef = useRef([]);
  const orderRef = useRef([0, 1, 2, 3]);
  const isAnimating = useRef(false);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const positions = [
    { x: -15, scale: 1, zIndex: 40, opacity: 1, blur: 0 },
    { x: 35, scale: 0.92, zIndex: 30, opacity: 1, blur: 2 },
    { x: 80, scale: 0.84, zIndex: 20, opacity: 1, blur: 4 },
    { x: 110, scale: 0.76, zIndex: 10, opacity: 0, blur: 6 },
  ];

  useEffect(() => {
    orderRef.current.forEach((cardIdx, posIdx) => {
      if (cardsRef.current[cardIdx]) {
        gsap.set(cardsRef.current[cardIdx], {
          x: positions[posIdx].x,
          scale: positions[posIdx].scale,
          zIndex: positions[posIdx].zIndex,
          opacity: positions[posIdx].opacity,
          filter: `blur(${positions[posIdx].blur}px)`,
          transformOrigin: "left center",
        });
      }
    });
  }, []);

  const moveNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const currentOrder = orderRef.current;
    const frontCard = currentOrder[0];
    const newOrder = [...currentOrder.slice(1), frontCard];

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to(
      cardsRef.current[frontCard],
      {
        x: -280,
        y: 20,
        rotation: -12,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      0,
    );

    tl.set(
      cardsRef.current[frontCard],
      {
        x: positions[3].x + 30,
        y: 0,
        rotation: 0,
        scale: positions[3].scale,
        zIndex: positions[3].zIndex,
        filter: `blur(${positions[1].blur}px)`,
      },
      0.3,
    );

    tl.to(
      cardsRef.current[frontCard],
      {
        x: positions[3].x,
        opacity: positions[3].opacity,
        duration: 0.4,
        ease: "power2.out",
      },
      0.3,
    );

    newOrder.forEach((cardIdx, posIdx) => {
      if (posIdx === 3) return;
      tl.to(
        cardsRef.current[cardIdx],
        {
          x: positions[posIdx].x,
          scale: positions[posIdx].scale,
          zIndex: positions[posIdx].zIndex,
          opacity: positions[posIdx].opacity,
          filter: `blur(${positions[posIdx].blur}px)`,
          duration: 0.5,
          ease: "expo.out",
        },
        0.1,
      );
    });

    orderRef.current = newOrder;
  };

  const movePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const currentOrder = orderRef.current;
    const backCard = currentOrder[currentOrder.length - 1];
    const newOrder = [
      backCard,
      ...currentOrder.slice(0, currentOrder.length - 1),
    ];

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.set(cardsRef.current[backCard], {
      x: -280,
      y: 20,
      rotation: -12,
      scale: positions[0].scale,
      zIndex: 50,
      opacity: 0,
      filter: `blur(${positions[0].blur}px)`,
    });

    tl.to(
      cardsRef.current[backCard],
      {
        x: positions[0].x,
        y: 0,
        rotation: 0,
        opacity: positions[0].opacity,
        duration: 0.5,
        ease: "expo.out",
      },
      0,
    );

    newOrder.forEach((cardIdx, posIdx) => {
      if (posIdx === 0) return;
      tl.to(
        cardsRef.current[cardIdx],
        {
          x: positions[posIdx].x,
          scale: positions[posIdx].scale,
          zIndex: positions[posIdx].zIndex,
          opacity: positions[posIdx].opacity,
          filter: `blur(${positions[posIdx].blur}px)`,
          duration: 0.5,
          ease: "expo.out",
        },
        0,
      );
    });

    orderRef.current = newOrder;
  };

  // Mobile Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      if (window.innerWidth < 1024) moveNext();
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 30;

    if (distance > minSwipeDistance) moveNext();
    if (distance < -minSwipeDistance) movePrev();

    setTouchStart(0);
    setTouchEnd(0);
  };

  // ==========================================
  // DESKTOP: Flawless Interval Marquee
  // ==========================================
  // const desktopTrackRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     if (desktopTrackRef.current) {
  //       const tl = gsap.timeline({ repeat: -1 });
  //       const pauseTime = 3.5;
  //       const scrollTime = 0.8;
  //       const easeType = "power2.inOut";

  //       // Because we now use `mr-6` on every card instead of flex gap,
  //       // exactly 1/8th (-12.5%) of the track mathematically equals 1 card + 1 margin.
  //       // This ensures pixel-perfect looping with zero drift.
  //       tl.to(desktopTrackRef.current, {
  //         xPercent: -12.5,
  //         duration: scrollTime,
  //         ease: easeType,
  //         delay: pauseTime,
  //       })
  //         .to(desktopTrackRef.current, {
  //           xPercent: -25,
  //           duration: scrollTime,
  //           ease: easeType,
  //           delay: pauseTime,
  //         })
  //         .to(desktopTrackRef.current, {
  //           xPercent: -37.5,
  //           duration: scrollTime,
  //           ease: easeType,
  //           delay: pauseTime,
  //         })
  //         .to(desktopTrackRef.current, {
  //           xPercent: -50,
  //           duration: scrollTime,
  //           ease: easeType,
  //           delay: pauseTime,
  //         })
  //         .set(desktopTrackRef.current, { xPercent: 0 });
  //     }
  //   });
  //   return () => ctx.revert();
  // }, []);

  const desktopTrackRef = useRef(null);
  const desktopTl = useRef(null);
  const desktopStep = useRef(0);
  const [desktopAutoplay, setDesktopAutoplay] = useState(true);
  const desktopAnimating = useRef(false);

  useEffect(() => {
    if (!desktopAutoplay) return;

    const ctx = gsap.context(() => {
      if (desktopTrackRef.current) {
        const tl = gsap.timeline({ repeat: -1 });
        const pauseTime = 3.5;
        const scrollTime = 0.8;
        const easeType = "power2.inOut";

        tl.to(desktopTrackRef.current, {
          xPercent: -12.5,
          duration: scrollTime,
          ease: easeType,
          delay: pauseTime,
        })
          .to(desktopTrackRef.current, {
            xPercent: -25,
            duration: scrollTime,
            ease: easeType,
            delay: pauseTime,
          })
          .to(desktopTrackRef.current, {
            xPercent: -37.5,
            duration: scrollTime,
            ease: easeType,
            delay: pauseTime,
          })
          .to(desktopTrackRef.current, {
            xPercent: -50,
            duration: scrollTime,
            ease: easeType,
            delay: pauseTime,
          })
          .set(desktopTrackRef.current, { xPercent: 0 });

        desktopTl.current = tl;
      }
    });
    return () => ctx.revert();
  }, [desktopAutoplay]);

  const STEP_PERCENT = 100 / (testimonials.length * 2); // % of track per single card
const TOTAL_STEPS = testimonials.length; // one full loop = back to start, seamless

  const stopDesktopAutoplay = () => {
    if (desktopAutoplay) {
      if (desktopTl.current) desktopTl.current.kill();
      gsap.set(desktopTrackRef.current, { xPercent: 0 });
      desktopStep.current = 0;
      setDesktopAutoplay(false);
    }
  };

 const desktopNext = () => {
  stopDesktopAutoplay();
  if (desktopAnimating.current) return;
  desktopAnimating.current = true;

  const nextStep = desktopStep.current + 1;

  gsap.to(desktopTrackRef.current, {
    xPercent: -(nextStep * STEP_PERCENT),
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => {
      if (nextStep >= TOTAL_STEPS) {
        // Reached the duplicated half — snap back to start instantly, invisible since it's identical content
        gsap.set(desktopTrackRef.current, { xPercent: 0 });
        desktopStep.current = 0;
      } else {
        desktopStep.current = nextStep;
      }
      desktopAnimating.current = false;
    },
  });
};

  const desktopPrev = () => {
  stopDesktopAutoplay();
  if (desktopAnimating.current) return;
  desktopAnimating.current = true;

  if (desktopStep.current === 0) {
    // Jump instantly to the duplicated end position (identical visual), then animate back one step
    gsap.set(desktopTrackRef.current, { xPercent: -(TOTAL_STEPS * STEP_PERCENT) });
    desktopStep.current = TOTAL_STEPS;
  }

  const prevStep = desktopStep.current - 1;

  gsap.to(desktopTrackRef.current, {
    xPercent: -(prevStep * STEP_PERCENT),
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => {
      desktopAnimating.current = false;
    },
  });

  desktopStep.current = prevStep;
};

  return (
    <section className="relative w-full py-6 md:py-14 bg-[#F8FAFC] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Top Header Area */}
        <div className="relative flex flex-col items-center text-center mb-10 md:mb-10 lg:mb-20 pt-4">
          <div className="hidden lg:block absolute left-4 top-0 w-56 h-56 z-0 pointer-events-none">
            <img
              src="/testimonial/test2.png"
              alt="Success rating"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden lg:block absolute right-4 top-0 w-56 h-56 z-0 pointer-events-none">
            <img
              src="/testimonial/test1.png"
              alt="Success rating"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-[30px] md:text-5xl lg:text-[54px] font-bold text-[#333333] leading-tight tracking-tighter mb-4">
              Success Stories from <br />
              <span className="text-[#604BE3]">Growing Brands</span>
            </h2>
            <p className="text-[#6A6A6A] font-medium text-[16px] md:text-[18px] leading-relaxed tracking-tight max-w-4xl mx-auto">
              From stronger branding to higher-quality leads, businesses trust
              Digital Sahay to deliver strategies that create measurable growth.
            </p>
          </div>
        </div>

        {/* ========================================================
            MOBILE VIEW: GSAP Stacked Auto-Swapping Carousel 
            ======================================================== */}
        <div
          className="lg:hidden relative w-[80%] sm:w-[90%] max-w-[340px] mx-auto h-[380px] mb-2 overflow-visible"
          style={{ touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`absolute top-0 left-0 w-full h-[360px] ${testimonial.bgColor} rounded-[2rem] p-6 flex flex-col shadow-sm`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-[20px] font-bold text-[#333333] tracking-tighter ">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#141414] text-[14px] font-medium tracking-tighter opacity-80">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] mt-2 bg-[#000000]/80 mb-4" />
              <p className="text-[#141414] font-medium text-[16px] max-w-[14rem] leading-tight tracking-tighter">
                "{testimonial.quote}"
              </p>
              <div className="w-18 h-18 ml-auto flex items-end justify-center rotate-180">
                <img
                  src="/comma.png"
                  alt="quote"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================
            DESKTOP VIEW: Interval Marquee Track (Scroll, Stop, Repeat)
            ======================================================== */}
        <div className="hidden lg:block overflow-hidden w-full mb-12 py-4">
          <div
            ref={desktopTrackRef}
            className="flex flex-row w-max items-center ml-2"
          >
            {/* Array is mapped together to maintain mathematical structure. 
                Right Margin (mr-6) replaces Flex Gap so the trail ends perfectly. */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className={`${testimonial.bgColor} h-[300px] w-[280px] lg:w-[385px] mr-6 shrink-0 rounded-[2rem] p-8 sm:p-10 flex flex-col shadow-sm transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="text-[22px] font-bold text-[#333333] tracking-tighter">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#141414] text-[15px] font-semibold opacity-80">
                      {testimonial.title}
                    </p>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0">
                    <img
                      src="/comma.png"
                      alt="quote"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#000000]/80 mb-4 "></div>
                <p className="text-[#333333] font-medium text-[16px] leading-relaxed tracking-tight">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls (Mobile Only) */}
        {/* <div className="flex items-center justify-center gap-4 lg:hidden">
          <button
            onClick={movePrev}
            className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200/50 hover:border-gray-500 transition-colors duration-300 group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={moveNext}
            className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200/50 hover:border-gray-500 transition-colors duration-300 group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div> */}
        {/* Carousel Controls (Mobile Only) */}
        <div className="flex items-center justify-center gap-4 lg:hidden">
          <button
            onClick={movePrev}
            className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200/50 hover:border-gray-500 transition-colors duration-300 group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={moveNext}
            className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200/50 hover:border-gray-500 transition-colors duration-300 group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Carousel Controls (Desktop Only) */}
        <div className="hidden lg:flex items-center justify-center gap-4 mt-2">
          <button
            onClick={desktopPrev}
            className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200/50 hover:border-gray-500 transition-colors duration-300 group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={desktopNext}
            className="w-14 h-14 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200/50 hover:border-gray-500 transition-colors duration-300 group"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

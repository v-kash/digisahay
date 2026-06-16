"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Understand Your Business",
      desc: "Deep-dive discovery session to understand your goals, market, competition, and current challenges.",
      image: "/howwework/work3.png",
      pin: "/howwework/orangepin.png",
      theme: {
        textHighlight: "text-[#FF6B35]",
        bg: "bg-[#FFC9B5]",
      },
      layout:
        "w-[49%] md:w-[49%] lg:w-full -rotate-10 lg:rotate-6 lg:-mt-18 z-10 lg:z-10",
    },
    {
      id: "02",
      title: "Build Strategy & Execute",
      desc: "Custom growth strategy designed for your business, executed by dedicated specialists with precision.",
      image: "/howwework/work2.png",
      pin: "/howwework/bluepin.png",
      theme: {
        textHighlight: "text-[#4051FF]",
        bg: "bg-[#D4DEFC]",
      },
      layout:
        "w-[49%] md:w-[49%] lg:w-full rotate-8 lg:-rotate-6 lg:mt-24 z-10 lg:z-10",
    },
    {
      id: "03",
      title: "Optimize & Scale",
      desc: "Continuous data-driven optimization to maximize ROI and scale what's working for sustainable growth.",
      image: "/howwework/work1.png",
      pin: "/howwework/orangepin.png",
      theme: {
        textHighlight: "text-[#57CC3A]",
        bg: "bg-[#E2FFC9]",
      },
      layout:
        "w-[50%] md:w-[49%] lg:w-full -mt-8 lg:mt-0 -rotate-0 lg:rotate-8 lg:-mt-10 z-20 lg:z-10",
    },
  ];

  return (
    <section className="relative w-full py-10 bg-[#FFEECC]/36 font-sans overflow-hidden">
      {/* Decorative Background Abstract Shapes (Corners) - UNTOUCHED */}
      <div className="hidden md:block absolute top-0 left-0 z-20 pointer-events-none">
        <svg
          width="117"
          height="98"
          viewBox="0 0 117 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.8411 0.880948L101.526 -16.7924L113.635 6.28706L79.9494 23.9599L116.265 35.2824L108.508 60.1636L72.192 48.8411L89.8648 82.5263L66.7859 94.6346L49.113 60.9494L37.7906 97.2652L12.9093 89.5077L24.2318 53.192L-9.45388 70.8647L-21.5617 47.7859L12.1235 30.1131L-24.1922 18.7906L-16.4348 -6.09065L19.8809 5.23182L2.20774 -28.454L25.287 -40.5616L42.9599 -6.87649L54.2823 -43.1922L79.1636 -35.4348L67.8411 0.880948Z"
            fill="#FFC9B5"
          />
        </svg>
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 z-20 pointer-events-none">
        <svg
          width="108"
          height="108"
          viewBox="0 0 108 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54 11.8125C54 35.1118 72.8882 54 96.1875 54H54V11.8125ZM0 65.8125C0 89.1118 18.8882 108 42.1875 108H54V65.8125C54 89.1118 72.8882 108 96.1875 108H108V0H0V11.8125C0 35.1118 18.8882 54 42.1875 54H0V65.8125Z"
            fill="#D4DEFC"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Top Header Area - UNTOUCHED */}
        <div className="flex flex-col items-center text-center mb-10 lg:mb-16">
          <div className="inline-block border-2 border-[#333333] text-[#333333] px-4 py-2 rounded-full text-md font-bold tracking-wide mb-2 bg-transparent backdrop-blur-sm">
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#333333] leading-tight tracking-tighter">
            Our Simple 3 Step{" "}
            <span className="text-[#FF6B35]">Growth Process</span>
          </h2>
        </div>

        {/* Cards Wrapper */}
        <div className="relative w-full flex flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-x-1 sm:gap-x-2 gap-y-0 lg:gap-18 px-1 lg:px-0">
          {/* Dashed Connecting Line (Background) - UNTOUCHED */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none hidden lg:block z-0 opacity-80">
            <svg
              width="100%"
              height="700"
              viewBox="0 0 1320 700"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:scale-90 md:scale-100 lg:scale-110"
            >
              <path
                d="M1.00018 1.00024C1.00018 1.00024 172.821 329.878 413.37 347.778C653.918 365.677 663.082 214.79 844.066 214.79C1025.05 214.79 1316 538 1316 538"
                stroke="#A5A5A5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          {/* Paper Plane 1 - UNTOUCHED */}
          <img
            src="/process/image1.png"
            alt="plane"
            className="hidden lg:block absolute z-10 top-[46%] left-[31%] w-10 rotate-[8deg] opacity-80 pointer-events-none"
          />

          {/* Paper Plane 2 - UNTOUCHED */}
          <img
            src="/process/image2.png"
            alt="plane"
            className="hidden lg:block absolute z-10 top-[15.5%] right-[31%] w-10 rotate-[8deg] opacity-80 pointer-events-none"
          />

          {/* Render Cards */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative min-w-[150px] lg:min-w-[240px] max-w-[350px] md:max-w-[240px] lg:max-w-[350px] transition-transform duration-300 ${step.layout}`}
            >
              {/* OUTER CARD - ANIMATED ENTRANCE & HOVER SHAKE */}
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.15,
                      type: "spring",
                      stiffness: 60,
                      damping: 12,
                    },
                  }),
                  hover: {
                    rotate: [0, -2, 2, -1.5, 1.5, 0], // Playful card shake
                    transition: { duration: 0.4 },
                  },
                }}
                className="bg-white p-[2px] lg:p-[2.5px] rounded-[24px] lg:rounded-[40px] relative"
              >
                {/* ---------- STICKY PIN - ANIMATED ENTRANCE & HOVER WIGGLE ---------- */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      },
                    },
                    hover: {
                      rotate: [0, -15, 15, -10, 10, 0], // Physical pin wiggle
                      transition: { duration: 0.4 },
                    },
                  }}
                  className="absolute -top-4 lg:-top-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-lg origin-bottom"
                >
                  <img
                    src={step.pin}
                    alt="pin"
                    className="h-10 w-10 md:h-14 md:w-14 lg:h-18 lg:w-18 object-contain"
                  />
                </motion.div>

                {/* INNER CARD - UNTOUCHED */}
                <div
                  className={`${step.theme.bg} rounded-[22px] lg:rounded-[36px] p-[4px] md:p-[6px] lg:p-[6px] h-[220px] md:h-[260px] lg:h-[380px] flex flex-col relative`}
                >
                  {/* Top Colored Spacer */}
                  <div className="h-10 lg:h-24 w-full"></div>

                  {/* BOTTOM WHITE CARD */}
                  <div className="bg-white rounded-[18px] lg:rounded-[30px] flex-1 p-3 lg:p-8 flex flex-col relative">
                    {/* Header Row: Big Number & Overlapping Image */}
                    <div className="relative flex justify-between items-start h-8 lg:h-16 mb-2 lg:mb-4">
                      {/* Left: Huge Step Number */}
                      <h3
                        className={`${step.theme.textHighlight} text-[28px] md:text-[42px] lg:text-[54px] font-semibold leading-none tracking-tighter`}
                      >
                        {step.id}
                      </h3>

                      {/* Right: Illustration */}
                      <div className="absolute -top-12 md:-top-14 lg:-top-24 -right-2 lg:-right-4 w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[160px] lg:h-[160px] z-20 drop-shadow-md pointer-events-none">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="true">
                      <h4 className="text-[14px] md:text-[18px] lg:text-[22px] font-bold text-[#333333] mb-1 lg:mb-2 leading-tight tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-[#6A6A6A] font-medium text-[12px] md:text-[16px] lg:text-[18px] leading-tight lg:leading-tight tracking-tighter">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

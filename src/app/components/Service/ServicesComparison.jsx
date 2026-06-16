"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Monitor,
  Search,
  Share2,
  TrendingUp,
  PenTool,
  Users,
  Briefcase,
  ChevronDown,
  Zap,
  ArrowRight,
  X,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { ContactModal } from "../ContactModel";
import gsap from "gsap";
import ShinyButton from "../ui/ShinyButton";

export default function ServicesComparison({ selectedService }) {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(
    "Website & App Development",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  // useEffect(() => {
  //   if (selectedService) {
  //     setActiveCategory(selectedService);

  //     setTimeout(() => {
  //       const comparisonSection = document.getElementById(
  //         "services-comparison",
  //       );
  //       if (comparisonSection) {
  //         comparisonSection.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //       }
  //     }, 100);
  //   }
  // }, [selectedService]);

  useEffect(() => {
    const target = selectedService || categoryFromUrl;

    if (target) {
      setActiveCategory(target);

      setTimeout(() => {
        const comparisonSection = document.getElementById(
          "services-comparison",
        );
        if (comparisonSection) {
          comparisonSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [selectedService, categoryFromUrl]);

  const [dropdownSvgDims, setDropdownSvgDims] = useState({
    width: 400,
    height: 70,
  });
  const [mobileTier, setMobileTier] = useState("professional");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const mobileCtaRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsRef.current || !sectionRef.current) return;

      const cardsRect = cardsRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();

      if (window.innerWidth >= 1024) {
        setShowStickyCTA(false);
        return;
      }

      const isCardsOut = cardsRect.top <= 20;

      const isSectionInView = mobileCtaRef.current
        ? mobileCtaRef.current.getBoundingClientRect().bottom > 0
        : sectionRect.bottom > 0;

      setShowStickyCTA(isCardsOut && isSectionInView);
    };

    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll, true);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll, true);
    };
  }, []);
  useEffect(() => {
    if (!shineRef.current) return;

    gsap.fromTo(
      shineRef.current,
      {
        left: "-150%",
      },
      {
        left: "150%",
        duration: 1.8,
        ease: "power3.inOut",
        repeat: -1,
        repeatDelay: 2.8,
      },
    );
  }, []);
  useEffect(() => {
    const el = dropdownRef.current;
    if (!el) return;

    setDropdownSvgDims({
      width: el.offsetWidth,
      height: el.offsetHeight,
    });

    const observer = new ResizeObserver(() => {
      if (el) {
        setDropdownSvgDims({
          width: el.offsetWidth,
          height: el.offsetHeight,
        });
      }
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2.5,
      });

      tl.set(".dropdown-glow-trace", {
        opacity: 0.6,
        attr: {
          "stroke-dasharray": "100 100",
          "stroke-dashoffset": "100",
        },
      });

      tl.set(".dropdown-border-trace", {
        opacity: 1,
        attr: {
          "stroke-dasharray": "100 100",
          "stroke-dashoffset": "100",
        },
      });

      tl.to(".dropdown-glow-trace, .dropdown-border-trace", {
        duration: 2,
        ease: "power3.inOut",
        attr: {
          "stroke-dashoffset": "0",
        },
      });

      tl.to(
        ".dropdown-glow-trace, .dropdown-border-trace",
        {
          duration: 2,
          ease: "power3.inOut",
          attr: {
            "stroke-dashoffset": "-100",
          },
        },
        "+=0.1",
      );
    }, dropdownRef);

    return () => ctx.revert();
  }, [dropdownSvgDims]);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.id = "services-comparison";
    }
  }, []);

  const categories = [
    { name: "Website & App Development", icon: Monitor },
    { name: "SEO Optimization", icon: Search },
    { name: "Social Media Marketing", icon: Share2 },
    { name: "Performance Marketing", icon: TrendingUp },
    { name: "Branding & Design", icon: PenTool },
    { name: "Business Consulting", icon: Briefcase },
  ];

  // Database of dynamic table data per service
  const allServicesData = {
    "Website & App Development": [
      {
        feature: "Best For",
        essential: "Individuals,\nfreelancers & startups",
        professional: "Growing businesses\n& brands",
        enterprise: "Large businesses &\nenterprise platforms",
      },
      {
        feature: "Website Type",
        essential: "Single Landing Page",
        professional: "Multi Page Business\nWebsite",
        enterprise: "CMS / E-Commerce /\nCustom Platform",
      },
      {
        feature: "Pages Included",
        essential: "Up to 8 High Conversion\nLanding Page",
        professional: "Up to 15 Strategic\nPages",
        enterprise: "Up to 15 / Dynamic\nPages",
      },
      {
        feature: "Design Style",
        essential: "Clean Modern\nUI Design",
        professional: "Custom UI/UX\nDesign",
        enterprise: "Premium Enterprise\nExperience",
      },
      {
        feature: "Mobile Optimization",
        essential: "Fully Responsive\nDesign",
        professional: "Advanced Responsive\nOptimization",
        enterprise: "Enterprise Grade\nOptimization",
      },
      {
        feature: "SEO Setup",
        essential: "Basic SEO Setup",
        professional: "Advanced SEO +\nPerformance Setup",
        enterprise: "Enterprise SEO\nArchitecture",
      },
      {
        feature: "Integrations",
        essential: "Contact Form\nIntegration",
        professional: "CRM + Lead\nGeneration",
        enterprise: "API + Booking +\nPayment Integration",
      },
      {
        feature: "Performance",
        essential: "Standard Speed\nOptimization",
        professional: "Performance\nOptimization",
        enterprise: "Advanced Core Web\nVitals",
      },
      {
        feature: "Admin Access",
        essential: "Basic Access",
        professional: "CMS / Admin Panel",
        enterprise: "Advanced Dashboard\nAccess",
      },
      {
        feature: "Content Support",
        essential: "Basic Content\nPlacement",
        professional: "Content Writing\nIncluded",
        enterprise: "Dynamic Content\nManagement",
      },
      {
        feature: "Custom Features",
        essential: "Basic Functionalities",
        professional: "Custom Sections &\nFeatures",
        enterprise: "Custom Feature\nIntegration",
      },
      {
        feature: "Database Integration",
        essential: "-",
        professional: "Basic Integration",
        enterprise: "Advanced Database\nArchitecture",
      },
      {
        feature: "App Development",
        essential: "Not Included",
        professional: "Basic Web App\nSupport",
        enterprise: "Custom Android & iOS\nApp Development",
      },
      {
        feature: "Revisions",
        essential: "1 Revision",
        professional: "2 Revisions",
        enterprise: "Multiple Revisions",
      },
      {
        feature: "Support",
        essential: "Email Support",
        professional: "Priority Support",
        enterprise: "Dedicated Support",
      },
    ],
    "SEO Optimization": [
      {
        feature: "Best For",
        essential: "Startups & local\nbusinesses",
        professional: "Growing brands &\nbusinesses",
        enterprise: "High-scale businesses &\nenterprise websites",
      },
      {
        feature: "Keyword Research",
        essential: "Up to 15\nKeywords",
        professional: "Up to 35\nKeywords",
        enterprise: "Up to 50+\nKeywords",
      },
      {
        feature: "On-Page SEO",
        essential: "Basic On-Page\nOptimization",
        professional: "Advanced On-Page &\nOff-Page SEO",
        enterprise: "Comprehensive SEO\nStrategy",
      },
      {
        feature: "Technical SEO",
        essential: "Basic Website\nAnalysis",
        professional: "Technical SEO Audit\n& Fixes",
        enterprise: "Advanced Technical\nMonitoring",
      },
      {
        feature: "Content Strategy",
        essential: "2 Blog Posts /\nMonth",
        professional: "4 Blogs /\nMonth",
        enterprise: "8 Premium Blogs /\nMonth",
      },
      {
        feature: "Link Building",
        essential: "Basic Setup",
        professional: "Link Building\nCampaign",
        enterprise: "Advanced Link\nBuilding",
      },
      {
        feature: "Local SEO",
        essential: "Google Business\nSetup",
        professional: "Local SEO\nOptimization",
        enterprise: "International SEO\nSupport",
      },
      {
        feature: "Schema Markup",
        essential: "-",
        professional: "Basic Schema\nImplementation",
        enterprise: "Advanced Schema\nArchitecture",
      },
      {
        feature: "Competitor Analysis",
        essential: "Basic Research",
        professional: "Competitor\nAnalysis",
        enterprise: "Advanced Market &\nCompetitor Tracking",
      },
      {
        feature: "Performance Tracking",
        essential: "Monthly Performance\nReport",
        professional: "Bi-Weekly Reports",
        enterprise: "Weekly Performance\nTracking",
      },
      {
        feature: "Analytics Setup",
        essential: "Basic Analytics\nSetup",
        professional: "Search Console +\nGA4 Setup",
        enterprise: "Advanced Analytics &\nCustom Tracking",
      },
      {
        feature: "Support",
        essential: "Email Support",
        professional: "Priority Support",
        enterprise: "Dedicated Account\nManager",
      },
    ],
    "Social Media Marketing": [
      {
        feature: "Best For",
        essential: "Small businesses &\nstartups",
        professional: "Growing brands",
        enterprise: "Established brands &\nenterprises",
      },
      {
        feature: "Social Platforms",
        essential: "Up to 2 Platforms",
        professional: "Up to 2 Platforms",
        enterprise: "Up to 3 Platforms",
      },
      {
        feature: "Content Volume",
        essential: "12 Posts + 3 Reels /\nMonth",
        professional: "42 Posts + 9 Reels /\nQuarter",
        enterprise: "96 Posts + 18 Reels / 6\nMonths",
      },
      {
        feature: "Content Design",
        essential: "Basic Graphic Content",
        professional: "Advanced Graphic\nContent",
        enterprise: "Custom Graphics & Video\nContent",
      },
      {
        feature: "Caption Strategy",
        essential: "Basic Captions",
        professional: "Caption & Hashtag\nStrategy",
        enterprise: "Advanced Copywriting &\nStrategy",
      },
      {
        feature: "Community Management",
        essential: "Basic Engagement",
        professional: "Community Management\n+ DM Handling",
        enterprise: "Advanced Community\nManagement",
      },
      {
        feature: "Analytics",
        essential: "Monthly Analytics Report",
        professional: "Monthly Analytics Report",
        enterprise: "Bi-Weekly Analytics Reports",
      },
      {
        feature: "Profile Setup",
        essential: "Profile Setup &\nOptimization",
        professional: "Profile Setup &\nOptimization",
        enterprise: "Profile Setup & Optimization",
      },
      {
        feature: "Additional Features",
        essential: "Basic Hashtag Research",
        professional: "Story Templates +\nContent Planning",
        enterprise: "Link-in-Bio Setup +\nCompetitor Analysis",
      },
      {
        feature: "Support",
        essential: "Email Support",
        professional: "Priority Support",
        enterprise: "Dedicated Support",
      },
    ],
    "Performance Marketing": [
      {
        feature: "Best For",
        essential: "Small businesses &\nlocal campaigns",
        professional: "Growing brands &\nlead generation",
        enterprise: "High-scale brands &\nenterprise campaigns",
      },
      {
        feature: "Ad Platforms",
        essential: "Facebook / Instagram Platforms",
        professional: "Meta + Google\nLead Platforms",
        enterprise: "Meta + Google Lead Platforms \n+Management",
      },
      {
        feature: "Lead Sources",
        essential: "Facebook / Instagram",
        professional: "Meta + Google\nLead Sources",
        enterprise: "Multi-Channel Lead\nAcquisition",
      },
      {
        feature: "Campaign Strategy",
        essential: "Basic Campaign\nSetup",
        professional: "Advanced Campaign\nStrategy",
        enterprise: "Comprehensive Funnel\nStrategy",
      },
      {
        feature: "Audience Targeting",
        essential: "Basic Audience\nTargeting",
        professional: "Audience\nSegmentation",
        enterprise: "Advanced Audience\nAnalytics",
      },
      {
        feature: "Ad Copywriting",
        essential: "Up to 5 Ads",
        professional: "A/B Tested Ad\nCopies",
        enterprise: "Dynamic Ad\nCreation",
      },
      {
        feature: "Budget Management",
        essential: "Basic Budget\nManagement",
        professional: "Conversion Focused\nOptimization",
        enterprise: "Advanced Budget &\nROAS Optimization",
      },
      {
        feature: "Landing Page Support",
        essential: "Basic Recommendations",
        professional: "Landing Page\nOptimization",
        enterprise: "Full Funnel\nOptimization",
      },
      {
        feature: "Conversion Tracking",
        essential: "Basic Tracking Setup",
        professional: "GA4 + Pixel\nIntegration",
        enterprise: "Custom Conversion\nTracking",
      },
      {
        feature: "Retargeting",
        essential: "-",
        professional: "Retargeting Campaign\nSetup",
        enterprise: "Advanced Retargeting\nFlows",
      },
      {
        feature: "Performance Reports",
        essential: "Monthly Performance\nReport",
        professional: "Bi-Weekly\nOptimization Reports",
        enterprise: "Weekly Performance\nReviews",
      },
      {
        feature: "Recommended Ad Spend",
        essential: "₹20K – ₹50K /\nMonth",
        professional: "₹50K – ₹1.5L /\nMonth",
        enterprise: "₹1.5L+ /\nMonth",
      },
      {
        feature: "Support",
        essential: "Email Support",
        professional: "Priority Support",
        enterprise: "Dedicated Campaign\nManager",
      },
    ],
    "Branding & Design": [
      {
        feature: "Best For",
        essential: "New businesses",
        professional: "Growing brands",
        enterprise: "Established brands",
      },
      {
        feature: "Logo Design",
        essential: "3 Concepts",
        professional: "5 Concepts",
        enterprise: "Unlimited Concepts",
      },
      {
        feature: "Brand Identity",
        essential: "Basic Brand Kit",
        professional: "Complete Brand Identity",
        enterprise: "Full Brand Strategy",
      },
      {
        feature: "Brand Guidelines",
        essential: "Basic",
        professional: "Comprehensive",
        enterprise: "Enterprise Level",
      },
      {
        feature: "Business Card Design",
        essential: "✔",
        professional: "✔",
        enterprise: "✔",
      },
      {
        feature: "Social Media Templates",
        essential: "5 Templates",
        professional: "15 Templates",
        enterprise: "Custom Template System",
      },
      {
        feature: "Packaging Design",
        essential: "-",
        professional: "Optional",
        enterprise: "Included",
      },
      {
        feature: "Marketing Collateral",
        essential: "Basic",
        professional: "Advanced",
        enterprise: "Complete Suite",
      },
      {
        feature: "Revisions",
        essential: "2 Rounds",
        professional: "3 Rounds",
        enterprise: "4 Rounds",
      },
      {
        feature: "Source Files",
        essential: "Standard Files",
        professional: "Editable Files",
        enterprise: "All Source Files",
      },
      {
        feature: "Support",
        essential: "Email Support",
        professional: "Priority Support",
        enterprise: "Dedicated Support",
      },
    ],
    "Business Consulting": [
      {
        feature: "Best For",
        essential: "Startups & small\nbusinesses",
        professional: "Growing businesses &\nexpanding brands",
        enterprise: "Large businesses &\nenterprise operations",
      },
      {
        feature: "Business Analysis",
        essential: "Basic Business\nReview",
        professional: "Detailed Business\nAnalysis",
        enterprise: "Comprehensive Business\nAudit",
      },
      {
        feature: "Market Research",
        essential: "Basic Market\nInsights",
        professional: "Competitor & Market\nResearch",
        enterprise: "Advanced Industry &\nConsumer Research",
      },
      {
        feature: "Sales Optimization",
        essential: "Basic Sales Funnel\nSuggestions",
        professional: "Sales Funnel\nOptimization",
        enterprise: "Advanced Conversion &\nRevenue Optimization",
      },
      {
        feature: "Lead Strategy",
        essential: "Basic Lead Generation\nGuidance",
        professional: "Lead Generation\nPlanning",
        enterprise: "Multi-Channel Lead\nAcquisition Strategy",
      },
      {
        feature: "Digital Transformation",
        essential: "Basic Digital\nConsultation",
        professional: "Business Automation\nGuidance",
        enterprise: "Full Digital\nTransformation Planning",
      },
      {
        feature: "Reporting",
        essential: "Monthly Consultation\nSummary",
        professional: "Detailed Strategy\nReports",
        enterprise: "Advanced Analytics &\nGrowth Reports",
      },
      {
        feature: "Support",
        essential: "Email Support",
        professional: "Priority Support",
        enterprise: "Dedicated Business\nConsultant",
      },
    ],
  };

  // Fallback to Website Development if a category isn't fully populated yet
  const tableData =
    allServicesData[activeCategory] ||
    allServicesData["Website & App Development"];

  // Dynamic Data Setup for the Sticky CTA
  const tierConfig = {
    essential: { name: "Essential", color: "#4F7CFF" },
    professional: { name: "Professional", color: "#604BE3" },
    enterprise: { name: "Enterprise", color: "#0FAF8E" },
  };
  const currentTier = tierConfig[mobileTier];

  // Find the icon dynamically based on the selected category
  const currentCategoryData = categories.find((c) => c.name === activeCategory);
  const CurrentIcon = currentCategoryData ? currentCategoryData.icon : Monitor;

  const { width: w, height: h } = dropdownSvgDims;

  const inset = 2;
  const r = Math.max(0, (h - 2 * inset) / 2);

  const midX = w / 2;

  const rightStartArcX = w - inset - r;
  const leftStartArcX = inset + r;

  const y0 = inset;
  const y1 = h - inset;

  const rightPath = `
                    M ${midX} ${y0}
                    L ${rightStartArcX} ${y0}
                    A ${r} ${r} 0 0 1 ${rightStartArcX} ${y1}
                    L ${midX} ${y1}
                    `;

  const leftPath = `
                    M ${midX} ${y0}
                    L ${leftStartArcX} ${y0}
                    A ${r} ${r} 0 0 0 ${leftStartArcX} ${y1}
                    L ${midX} ${y1}
                    `;

  return (
    <section
      ref={sectionRef}
      id="services-comparison"
      /* lg:overflow-visible added to prevent clipping and enable position: sticky for desktop */
      className="w-full py-8 px-4 md:px-8 bg-white min-h-screen font-sans relative overflow-x-hidden lg:overflow-visible"
    >
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* --- MOBILE VIEW (Visible only on screens smaller than lg) --- */}
      <div className="block lg:hidden max-w-md mx-auto">
        <h3 className="text-center text-[14px] font-bold text-[#333333] tracking-tighter leading-tight mb-4">
          Select a Service
        </h3>

        <div
          ref={dropdownRef}
          className="relative w-full mb-8 rounded-full p-[2px] isolate overflow-visible"
        >
          {/* SVG Animated Border */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              className="w-full h-full overflow-visible"
              viewBox={`0 0 ${w} ${h}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="dropdownGradient"
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
                  id="dropdownGlow"
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

              {/* Base Border */}
              <rect
                x={inset}
                y={inset}
                width={w - 2 * inset}
                height={h - 2 * inset}
                rx={r}
                stroke="#E5E7EB"
                strokeWidth="1.5"
              />

              {/* Glow Paths */}
              <path
                className="dropdown-glow-trace"
                d={rightPath}
                stroke="url(#dropdownGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength="100"
                fill="none"
                opacity="0"
                filter="url(#dropdownGlow)"
              />

              <path
                className="dropdown-glow-trace"
                d={leftPath}
                stroke="url(#dropdownGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                pathLength="100"
                fill="none"
                opacity="0"
                filter="url(#dropdownGlow)"
              />

              {/* Sharp Lines */}
              <path
                className="dropdown-border-trace"
                d={rightPath}
                stroke="url(#dropdownGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength="100"
                fill="none"
                opacity="0"
              />

              <path
                className="dropdown-border-trace"
                d={leftPath}
                stroke="url(#dropdownGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                pathLength="100"
                fill="none"
                opacity="0"
              />
            </svg>
          </div>

          {/* Actual Dropdown */}
          <div className="relative w-full border border-white/40 shadow-sm rounded-full p-2 pr-4 flex justify-between items-center tracking-tighter leading-tight bg-[#FFFFFF]">
            <select
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            <div className="flex items-center gap-3">
              <div className="bg-[#604BE3] p-3 rounded-full text-white">
                <CurrentIcon size={18} />
              </div>

              <span className="font-semibold text-[#333333] text-[14px]">
                {activeCategory}
              </span>
            </div>

            <div className="bg-gray-300 rounded-full p-0.5 flex items-center justify-center h-5 w-5">
              <ChevronDown size={14} className="text-white" />
            </div>
          </div>
        </div>

        {/* Tier Cards Selector - Added Ref here for scroll tracking */}
        <div
          ref={cardsRef}
          className="grid grid-cols-3 items-end gap-2 mb-6 w-full relative"
        >
          {/* Essential Tier */}
          <div
            onClick={() => setMobileTier("essential")}
            className={`flex flex-col items-center justify-between p-3 rounded-[18px] leading-tight tracking-tighter border transition-all cursor-pointer h-[140px] bg-white ${
              mobileTier === "essential"
                ? "border-[#604BE3] ring-1 ring-[#604BE3] shadow-sm"
                : "border-gray-200"
            }`}
          >
            <h4 className="font-bold text-[#4F7CFF] md:text-[#333333] text-[16px] ">
              Essential
            </h4>
            <p className="text-[14px] font-medium text-[#6A6A6A] text-center flex items-center flex-1 ">
              Ideal for startups
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className={`w-full py-1.5 mb-1 rounded-full text-[12px]  font-bold transition-all ${
                mobileTier === "essential"
                  ? "bg-[#604BE3] text-white"
                  : "border border-[#4F7CFF] md:border-[#604BE3] text-[#4F7CFF] md:text-[#604BE3] bg-white"
              }`}
            >
              {mobileTier === "essential" ? "Request Details" : "View Plan"}
            </button>
          </div>

          {/* Professional Tier */}
          <div
            onClick={() => setMobileTier("professional")}
            className={`flex flex-col rounded-[20px] transition-all cursor-pointer relative p-[2px] w-full ${
              mobileTier === "professional"
                ? "bg-[#604BE3] shadow-sm"
                : "bg-[#F0EDFF] border border-[#E6E0FF]"
            }`}
          >
            {/* Recommended Header Area */}
            <div
              className={`flex justify-center items-center p-2 gap-1 h-[24px] w-full leading-tight tracking-tighter ${
                mobileTier === "professional" ? "text-white" : "text-[#604BE3]"
              }`}
            >
              <Zap
                size={12}
                className={
                  mobileTier === "professional"
                    ? "fill-white stroke-white"
                    : "fill-[#604BE3] stroke-[#604BE3]"
                }
              />
              <span className="text-[12px] font-semibold">Recommended</span>
            </div>

            {/* Inner White Card */}
            <div className="bg-white rounded-[18px] flex flex-col items-center justify-between p-2 py-4 leading-tight tracking-tighter w-full h-[140px]">
              <h4 className="font-bold text-[#333333] text-[16px]">
                Professional
              </h4>
              <p className="text-[14px] text-[#6A6A6A] text-center font-medium flex items-center flex-1">
                Ideal for growing brands
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className={`w-full py-1.5 rounded-full text-[12px] font-bold transition-all ${
                  mobileTier === "professional"
                    ? "bg-[#604BE3] text-white"
                    : "border border-[#604BE3] text-[#604BE3] bg-white"
                }`}
              >
                {mobileTier === "professional"
                  ? "Request Details"
                  : "View Plan"}
              </button>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div
            onClick={() => setMobileTier("enterprise")}
            className={`flex flex-col items-center justify-between p-3 rounded-[18px] border transition-all cursor-pointer h-[140px] bg-white leading-tight tracking-tighter ${
              mobileTier === "enterprise"
                ? "border-[#604BE3] ring-1 ring-[#604BE3] shadow-sm"
                : "border-gray-200"
            }`}
          >
            <h4 className="font-bold text-[#0FAF8E] md:text-[#333333] text-[16px]">
              Enterprise
            </h4>
            <p className="text-[14px] text-[#6A6A6A] font-medium text-center flex items-center flex-1 ">
              Ideal for scaling businesses
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className={`w-full py-1.5 mb-1 rounded-full text-[12px] font-bold transition-all ${
                mobileTier === "enterprise"
                  ? "bg-[#604BE3] text-white"
                  : "border border-[#0FAF8E] md:border-[#604BE3] text-[#0FAF8E] md:text-[#604BE3] bg-white"
              }`}
            >
              {mobileTier === "enterprise" ? "Request Details" : "View Plan"}
            </button>
          </div>
        </div>

        {/* Feature List (Mobile Tabular View) */}
        <div className="flex flex-col tracking-tighter leading-tight pb-6">
          {(showAllFeatures ? tableData : tableData.slice(0, 6)).map(
            (row, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center py-3.5 border-b border-gray-100 last:border-0"
              >
                <span className="text-[16px] font-semibold text-[#333333] w-[45%] pr-2 break-words">
                  {row.feature.replace(/\n/g, " ")}
                </span>
                <span className="text-[16px] text-[#6A6A6A] font-medium text-right w-[55%] break-words">
                  {row[mobileTier].replace(/\n/g, " ")}
                </span>
              </div>
            ),
          )}
        </div>

        {/* Expand Features Toggle */}
        <button
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          className="w-full flex items-center justify-center gap-1.5 text-[#604BE3] text-[16px] font-semibold tracking-tighter leading-tight py-6 mb-2"
        >
          {showAllFeatures ? "View Less Features" : "View All Features"}
          <ChevronDown
            size={14}
            className={`transition-transform ${showAllFeatures ? "rotate-180" : ""}`}
          />
        </button>

        {/* Mobile CTA Card */}
        <div
          ref={mobileCtaRef}
          className="border border-[#333333]/40 tracking-tighter leading-tight rounded-[24px] p-5 relative overflow-hidden bg-white shadow-sm mt-2 mb-0"
        >
          <h4 className="relative font-bold text-[16px] text-[#333333] z-20 mb-2 pr-[90px]">
            Confused About Which Service Your Business Actually Needs?
          </h4>
          <p className="relative text-[14px] text-[#6A6A6A] font-medium mb-4 z-20 pr-[90px]">
            Get personalized recommendations based on your business goals,
            industry, and growth stage.
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
            className="relative overflow-hidden group px-4 py-2.5 rounded-full border border-[#333333] z-20 text-[14px] font-bold text-[#333333] bg-white"
          >
            {/* Hover Fill */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
              <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[240px] group-hover:h-[240px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
            </span>

            {/* Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Book a Free Call
            </span>
          </button>
          {/* CTA Illustration Graphic Placeholder */}
          <div className="absolute -bottom-2 -right-0 z-0 w-[160px] h-[160px] pointer-events-none">
            <img
              src="/servicepage/cta.png"
              alt=""
              className="w-full h-full z-0 object-contain"
            />
          </div>
        </div>
      </div>

      {/* --- DESKTOP VIEW (Untouched, wrapped to hide on mobile) --- */}
      <div className="hidden lg:flex max-w-[1400px] mx-auto flex-col lg:flex-row gap-12 xl:gap-20">
        {/* --- Left Sidebar --- */}
        {/* Sticky positioning applied here with self-start so it doesn't stretch and maintains correct internal spacing */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col lg:sticky lg:top-16 lg:self-start lg:z-10">
          <h3 className="text-[20px] font-semibold text-[#333333] tracking-tighter uppercase py-6  px-4">
            Service Categories
          </h3>

          <nav className="flex flex-col gap-1 mb-16">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-r-full sm:rounded-full lg:rounded-r-full lg:rounded-l-none text-left transition-all duration-200 ${
                    isActive
                      ? "bg-[#604BE3]/10 text-[#604BE3]  font-semibold border-l-4 border-[#604BE3]"
                      : "text-[#333333] hover:bg-gray-50 font-semibold border-l-4 border-transparent"
                  }`}
                >
                  <Icon
                    size={20}
                    className={isActive ? "text-[#604BE3]" : "text-gray-500"}
                  />
                  <span className="text-[16px]">{category.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Help / CTA Box */}
          <div className="mt-auto px-4">
            <h4 className="text-[#604BE3] font-bold text-[18px] tracking-tighter leading-tight mb-3">
              Confused About Which Service Your Business Actually Needs?
            </h4>
            <p className="text-[16px] text-[#6A6A6A] font-medium mb-5 tracking-tighter leading-tight">
              Get personalized recommendations based on your business goals,
              industry, and growth stage.
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
              className="relative overflow-hidden group px-4 py-2.5 rounded-full border border-[#333333]/60 z-20 text-[14px] font-bold text-[#333333] bg-white"
            >
              {/* Hover Fill */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[240px] group-hover:h-[240px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
              </span>

              {/* Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Book a Free Call
              </span>
            </button>
          </div>
        </div>

        {/* --- Right Content Area --- */}
        <div className="flex-1 min-w-0">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-[32px] font-bold text-[#333333] mb-3 tracking-tight">
                {activeCategory}
              </h2>
              <p className="text-[#6A6A6A] font-medium text-[18px] md:text-[18px] tracking-tighter">
                Modern, responsive and high-performing services designed to
                build credibility and generate leads.
              </p>
            </div>
            {/* Illustration Placeholder */}
            <div className="hidden lg:block w-[200px] h-[140px] rounded-xl relative overflow-hidden shrink-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/services/new/2.png" alt="" className="h-40 w-40" />
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm tracking-tighter leading-tight">
            <table className="w-full text-left border-collapse min-w-[100px]">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-6 w-[22%] align-top bg-[#333333]/5">
                    <span className="font-semibold text-[18px] text-[#333333] tracking-tighter">
                      Features
                    </span>
                  </th>
                  <th className="p-6 w-[26%] align-top bg-[#333333]/5 border-l border-gray-200">
                    <div className="mb-1 font-semibold text-[18px] text-[#333333] tracking-tighter">
                      Essential
                    </div>
                    <div className="text-[16px] text-[#6A6A6A] font-medium leading-tight tracking-tighter mb-4">
                      Ideal for startups
                    </div>
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
                      className="relative overflow-hidden group w-full py-2.5 px-4 rounded-full border border-[#604BE3] text-[#604BE3] font-bold text-[14px] leading-tight tracking-tighter"
                    >
                      {/* Hover Fill */}
                      <span className="absolute inset-0 rounded-full overflow-hidden">
                        <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[400px] group-hover:h-[400px] bg-[#EFEDFC] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
                      </span>

                      {/* Text */}
                      <span className="relative z-10 transition-colors duration-300">
                        Request Details
                      </span>
                    </button>
                  </th>
                  <th className="p-6 w-[26%] align-top bg-[#333333]/6 border-x-2 border-[#604BE3]/20">
                    <div className="mb-1 font-bold text-[18px] text-[#333333] tracking-tighter">
                      Professional
                    </div>
                    <div className="text-[16px] text-[#6A6A6A] font-medium leading-tight tracking-tighter mb-4">
                      Ideal for growing brands
                    </div>

                    <ShinyButton onClick={() => setIsModalOpen(true)}>
                      Get Free Consultation
                    </ShinyButton>
                  </th>
                  <th className="p-6 w-[26%] align-top bg-[#333333]/5 border-l border-gray-200">
                    <div className="mb-1 font-semibold text-[18px] text-[#333333] tracking-tighter">
                      Enterprise
                    </div>
                    <div className="text-[16px] text-[#6A6A6A] font-medium leading-tight tracking-tighter mb-4">
                      Ideal for scaling businesses
                    </div>
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
                      className="relative overflow-hidden group w-full py-2.5 px-4 rounded-full border border-[#604BE3] text-[#604BE3] font-bold text-[14px] leading-tight tracking-tighter"
                    >
                      {/* Hover Fill */}
                      <span className="absolute inset-0 rounded-full overflow-hidden">
                        <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[260px] group-hover:h-[260px] bg-[#EFEDFC] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
                      </span>

                      {/* Text */}
                      <span className="relative z-10 transition-colors duration-300 ">
                        Talk to an Expert
                      </span>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 last:border-0 hover:bg-gray-200/30 transition-colors"
                  >
                    <td className="p-5 font-semibold leading-tight tracking-tighter text-[#333333] text-[16px] align-middle whitespace-pre-line">
                      {row.feature}
                    </td>
                    <td className="p-5 text-[#6A6A6A] text-[16px] border-l border-gray-100 font-medium align-middle whitespace-pre-line">
                      {row.essential}
                    </td>
                    <td className="p-5 text-[#333333] text-[16px] font-semibold  border-x-2 border-[#604BE3]/20 bg-[#F8F7FF] align-middle whitespace-pre-line">
                      {row.professional}
                    </td>
                    <td className="p-5 text-[#6A6A6A] text-[16px] font-medium border-l border-gray-100 align-middle whitespace-pre-line">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* --- STICKY MOBILE CTA (Redesigned to Match Image) --- */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[800] w-full transition-all duration-400 ease-out block lg:hidden flex flex-col justify-center bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.12)] rounded-t-[24px] overflow-hidden ${
          showStickyCTA
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Compare Plans Banner */}
        <div className="w-full bg-[#F0EDFF] py-2 flex items-center justify-center gap-1 cursor-pointer hover:bg-[#E6E0FF] transition-colors">
          <span className="text-[#604BE3] text-[14px] font-medium tracking-tighter leading-tight">
            Compare Plans
          </span>
          <ArrowRight size={14} className="text-[#604BE3]" />
        </div>

        {/* Main CTA Content */}
        <div className="w-full max-w-md p-3 pt-3 pb-8 sm:pb-6 flex items-center justify-between gap-1 relative mx-auto">
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Dynamic Icon */}
            <div
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 shadow-sm"
              style={{ backgroundColor: currentTier.color }}
            >
              <CurrentIcon size={16} className="text-white" />
            </div>

            {/* Dynamic Text */}
            <div className="flex flex-col leading-tight tracking-tighter truncate">
              <div className="flex items-center gap-1 text-[16px] truncate">
                <span className="font-semibold text-[#333333] shrink-0">
                  You're Viewing:
                </span>
                <span
                  className="font-bold truncate"
                  style={{ color: currentTier.color }}
                >
                  {currentTier.name}
                </span>
              </div>
              <span className="text-[#8A8A8A] text-[14px] font-medium mt-0.5 truncate">
                {activeCategory}
              </span>
            </div>
          </div>

          {/* Dynamic Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="relative overflow-hidden text-white px-3 py-2 rounded-full text-[12px] font-bold flex items-center justify-center gap-1.5 shrink-0 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: currentTier.color }}
          >
            {/* Premium Shine Sweep */}
            <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <span
                ref={shineRef}
                className=" absolute top-0 h-full w-[55%] rotate-[25deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[8px] opacity-90"
              />
            </span>

            {/* Top Gloss */}
            <span className="absolute inset-x-0 top-0 h-[1px] bg-white/30 rounded-full" />

            {/* Content */}
            <span className="relative z-10">Request Details</span>

            <ArrowRight
              size={14}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

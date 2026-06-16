"use client";

import { useState } from "react";
import { ContactModal } from "../ContactModel";

export default function ServiceFaqSection() {
  // State to manage which FAQ is currently expanded
  const [openFaq, setOpenFaq] = useState(0); // Default to the first one open
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage which category is active
  const [activeCategory, setActiveCategory] = useState("General Questions");

  // Sidebar Categories
  const categories = [
    "General Questions",
    "Getting Started",
    "Working Process",
    "Pricing & Plans",
    "Support & Assistance",
  ];

  // FAQ Data mapped by category
  const faqData = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What services does Digital Sahay provide?",
          answer:
            "We provide complete digital growth solutions including website development, SEO, social media marketing, performance marketing, branding, lead generation, content marketing, and business consulting.",
        },
        {
          question: "Who are your services designed for?",
          answer:
            "Our services are tailored for startups, local businesses, growing brands, and enterprises looking to strengthen their digital presence.",
        },
        {
          question: "Do you work with businesses from all industries?",
          answer:
            "Yes. We work with businesses across multiple industries and customize strategies according to their goals and target audience.",
        },
        {
          question: "Why should I choose Digital Sahay?",
          answer:
            "We focus on practical growth strategies, transparent communication, modern execution, and measurable business outcomes.",
        },
        {
          question: "Can I hire Digital Sahay for a single service?",
          answer:
            "Absolutely. You can choose a single service or combine multiple solutions depending on your business needs.",
        },
        {
          question: "Do you provide customized digital solutions?",
          answer:
            "Yes. Every strategy and solution is tailored specifically for your business goals and growth stage.",
        },
      ],
    },
    {
      category: "Choosing the Right Service", // Note: Was "Getting Started" in categories array but named differently here, keeping your exact data
      questions: [
        {
          question:
            "I’m not sure which service my business needs. Can you help?",
          answer:
            "Yes. Our team and AI assistant can recommend the right services based on your business goals and challenges.",
        },
        {
          question: "How do I know which plan is right for me?",
          answer:
            "Each plan is designed for different business stages. We help you select the best option based on your objectives and budget.",
        },
        {
          question: "Can I combine multiple services together?",
          answer:
            "Absolutely. Many businesses combine services like website development, SEO, and marketing for better growth results.",
        },
        {
          question: "What if I only need consultation?",
          answer:
            "That’s completely fine. You can book a consultation to discuss your goals and receive expert guidance.",
        },
        {
          question: "Which service is best for generating leads?",
          answer:
            "Services like performance marketing, SEO, and lead generation strategies are highly effective for attracting quality leads.",
        },
        {
          question: "Which service is best for improving branding?",
          answer:
            "Branding, social media marketing, and website design work together to improve brand identity and visibility.",
        },
      ],
    },
    {
      category: "Plans & Deliverables",
      questions: [
        {
          question: "What is included in each plan?",
          answer:
            "Each plan includes different deliverables, support levels, and features depending on the selected package.",
        },
        {
          question: "Can deliverables be customized?",
          answer:
            "Yes. We can customize features and deliverables based on your business requirements.",
        },
        {
          question: "Do your plans include revisions?",
          answer:
            "Yes. Most plans include revision rounds depending on the package selected.",
        },
        {
          question: "Will I receive progress updates?",
          answer:
            "Absolutely. We provide regular project updates and maintain transparent communication throughout the process.",
        },
        {
          question: "Are your plans suitable for startups?",
          answer:
            "Yes. We offer flexible solutions specifically designed for startups and small businesses.",
        },
        {
          question: "Do plans include support after delivery?",
          answer:
            "Yes. Ongoing support and assistance are available depending on the selected service and plan.",
        },
      ],
    },
    {
      category: "Working Process",
      questions: [
        {
          question: "How does your process work?",
          answer:
            "We understand your goals, recommend the right solution, execute the strategy, and optimize continuously for better results.",
        },
        {
          question: "How long does a project usually take?",
          answer:
            "Project timelines vary depending on the service scope, but estimated timelines are shared before starting.",
        },
        {
          question: "Will I be involved during the project?",
          answer:
            "Yes. We involve clients during discussions, approvals, and feedback stages to ensure smooth collaboration.",
        },
        {
          question: "How do you communicate project updates?",
          answer:
            "We communicate through WhatsApp, calls, email, or your preferred communication method.",
        },
        {
          question: "What happens after project completion?",
          answer:
            "We continue providing support, optimization, and guidance depending on your selected services.",
        },
        {
          question: "Can I request changes during the project?",
          answer:
            "Yes. Feedback and revisions are part of the process to ensure the final outcome matches your expectations.",
        },
      ],
    },
    {
      category: "Pricing & Plans", // Updated to match your categories array
      questions: [
        {
          question: "Do you offer free consultation?",
          answer:
            "Yes. We offer free consultations to understand your business goals and recommend suitable solutions.",
        },
        {
          question: "Are your pricing plans fixed?",
          answer:
            "Some plans are standardized, while others can be customized depending on your requirements.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "No. We maintain transparent pricing and clearly explain deliverables and costs before starting.",
        },
        {
          question: "Can I upgrade my plan later?",
          answer:
            "Yes. You can expand or upgrade services anytime as your business grows.",
        },
        {
          question: "How can I get an exact quotation?",
          answer:
            "You can contact us or submit your requirements through the website to receive a customized quotation.",
        },
        {
          question: "Do you provide affordable solutions for small businesses?",
          answer:
            "Yes. Our services are designed to be flexible and budget-friendly for startups and MSMEs.",
        },
      ],
    },
    {
      category: "Support & Assistance",
      questions: [
        {
          question: "Do you provide support after project completion?",
          answer:
            "Yes. We offer ongoing support, maintenance, and optimization services after project delivery.",
        },
        {
          question: "What if I need updates or changes later?",
          answer:
            "You can contact us anytime for updates, improvements, or additional requirements.",
        },
        {
          question: "How quickly does your support team respond?",
          answer:
            "We aim to respond to all support requests within business hours as quickly as possible.",
        },
        {
          question: "How can I contact your team?",
          answer:
            "You can contact us through phone, email, WhatsApp, or the website contact form.",
        },
        {
          question: "Do you offer website maintenance support?",
          answer:
            "Yes. We provide website maintenance, security updates, and performance optimization support.",
        },
        {
          question: "What if I face technical issues?",
          answer:
            "Our team is available to help resolve technical issues and provide assistance whenever required.",
        },
      ],
    },
  ];

  // FIX: Use .find() to get the correct category object from the array instead of trying to access it like an object key
  const activeCategoryData = faqData.find(
    (data) => data.category === activeCategory,
  );

  // Fallback to empty array if no category is found or if matching categories have naming mismatches
  const currentFaqs = activeCategoryData ? activeCategoryData.questions : [];

  // Helper function to map categories to specific icons for mobile view
  const getMobileIcon = (category) => {
    switch (category) {
      case "General Questions":
        return (
          <svg
            width="16.5"
            height="16.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        );
      case "Getting Started":
        return (
          <svg
            width="16.5"
            height="16.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        );

      case "Working Process":
        return (
          <svg
            width="16.5"
            height="16.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        );
      case "Pricing & Plans":
        return (
          <svg
            width="16.5"
            height="16.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        );
      case "Support & Assistance":
        return (
          <svg
            width="16.5"
            height="16.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-8 lg:py-14 px-4 md:px-4 bg-[#E9EFFF] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-22">
        {/* =========================================================
            DESKTOP LEFT COLUMN (Hidden entirely on Mobile) 
            ========================================================= */}
        <div className="hidden lg:flex lg:col-span-4 flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-[48px] font-bold text-[#333333] leading-[1.15] mb-8 tracking-tighter">
            Frequently <br />
            Asked <span className="text-[#375BC9]">Questions</span>
          </h2>

          {/* Category List */}
          <ul className="flex flex-col gap-2 mb-4">
            {categories.map((category, index) => {
              const isActive = category === activeCategory;
              return (
                <li
                  key={index}
                  onClick={() => {
                    setActiveCategory(category);
                    setOpenFaq(0);
                  }}
                  className={`flex items-center gap-2 text-[20px] tracking-tighter font-semibold cursor-pointer transition-colors ${
                    isActive
                      ? "text-[#375BC9]"
                      : "text-[#333333]/40 hover:text-[#333333]/60"
                  }`}
                >
                  {category}
                  {isActive && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 mt-0.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Assistance Block */}
          <div className="mt-8 pt-6 tracking-tighter">
            <h4 className="text-[#375BC9] font-bold text-[20px] mb-2">
              Still Need Assistance?
            </h4>
            <p className="text-[#6A6A6A] text-[16px] font-medium leading-tight mb-4 min-w-xs">
              Can't find the information you're looking for? Our team is here to
              guide you every step of the way.
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
              className="relative overflow-hidden bg-[#FF6B35] text-white text-[15px] font-semibold px-6 py-3 rounded-full shadow-sm group"
            >
              {/* Hover Fill */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[250px] group-hover:h-[250px] bg-[#E85B29] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
              </span>

              {/* Text */}
              <span className="relative z-10">Book a Free Call</span>
            </button>
          </div>
        </div>

        {/* =========================================================
            MOBILE TOP SECTION (Hidden entirely on Desktop) 
            ========================================================= */}
        <div className="flex flex-col lg:hidden w-full mb-2">
          <h2 className="text-[30px] font-bold text-[#333333] text-center leading-[1.15] mb-8 tracking-tighter">
            Frequently Asked <br />
            <span className="text-[#375BC9]">Questions</span>
          </h2>

          {/* Horizontally scrolling Categories Row */}
          <div className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <ul className="flex flex-row justify-between w-max min-w-full px-2 border-b-2 border-[#E2E8F0] ">
              {categories.map((category, index) => {
                const isActive = category === activeCategory;
                const splitName = category.split(" ");
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenFaq(0);
                    }}
                    className="relative flex flex-col items-center justify-start cursor-pointer px-1 pb-3 transition-colors min-w-[70px]"
                  >
                    <div
                      className={`w-[42px] h-[42px] rounded-full flex items-center justify-center border transition-all duration-300 mb-2 ${
                        isActive
                          ? "bg-[#375BC9] border-[#375BC9] text-[#FFFFFF]"
                          : "bg-[#D2D2D2] border-[#CBD5E1] text-[#333333]/70 "
                      }`}
                    >
                      {getMobileIcon(category)}
                    </div>
                    <span
                      className={`text-[12px] font-semibold text-center leading-tight transition-colors ${
                        isActive ? "text-[#375BC9]" : "text-[#6B7280]"
                      }`}
                    >
                      {splitName[0]}
                      <br />
                      {splitName.slice(1).join(" ")}
                    </span>
                    {isActive && (
                      <div className="absolute bottom-[-2px] left-0 w-full h-[2.5px] bg-[#375BC9] rounded-t-sm z-10"></div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* =========================================================
            SHARED ACCORDION (Renders on Both Views)
            (Responsive lg: classes maintain desktop look)
            ========================================================= */}
        <div className="lg:col-span-8 flex flex-col lg:pt-0 tracking-tighter w-full">
          {currentFaqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={index}
                className="border-b border-[#333333]/60 lg:border-[#333333]/60 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex justify-between items-center py-3 md:py-4 lg:py-5 text-left focus:outline-none group"
                >
                  <span className="text-[18px] lg:text-[24px] font-semibold lg:font-semibold text-[#333333] group-hover:text-[#375BC9] tracking-tighter leading-tight transition-colors pr-4">
                    {faq.question}
                  </span>

                  {/* Toggle Icon - Responsive implementation */}
                  <div
                    className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border ${
                      isOpen
                        ? "bg-[#FFFFFF] text-[#375BC9] border-[#375BC9]"
                        : "bg-[#FFFFFF] text-[#375BC9] border-gray-200 lg:bg-[#375BC9] lg:text-white lg:border-[#375BC9]"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* Animated Expandable Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-4 lg:pb-2"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#6A6A6A] font-medium text-[14px] lg:text-[18px] leading-tight lg:leading-tight pr-4 md:pr-16">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            MOBILE BOTTOM SECTION (Hidden entirely on Desktop) 
            ========================================================= */}
        <div className="flex flex-col lg:hidden w-full mt-4 tracking-tighter text-center items-center pb-0">
          <h4 className="text-[#375BC9] font-bold text-[20px] mb-3">
            Still Need Assistance?
          </h4>
          <p className="text-[#6A6A6A] text-[14px] font-medium tracking-tighter leading-tight mb-6 max-w-xs px-2">
            Can't find the information you're looking for? Our team is here to
            guide you every step of the way.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FF6B35] hover:bg-[#E85B29] text-[#FFFFFF] text-[14px] font-bold px-8 py-4 rounded-full transition-colors duration-300 "
          >
            Book a Free Call
          </button>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

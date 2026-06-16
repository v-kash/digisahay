"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getLenis } from "../components/SmoothScroll"; // adjust path

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

  const tocItems = [
    { id: "introduction", title: "Introduction" },
    { id: "information-we-collect", title: "Information We Collect" },
    { id: "how-we-use", title: "How We Use Your Information" },
    { id: "cookies", title: "Cookies & Tracking" },
    { id: "third-party", title: "Third-Party Services" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "your-rights", title: "Your Rights & Choices" },
    { id: "childrens-privacy", title: "Children's Privacy" },
    { id: "updates", title: "Updates to This Policy" },
    { id: "contact", title: "Contact Information" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = tocItems.map((item) => document.getElementById(item.id));

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);

  //   if (element) {
  //     window.scrollTo({
  //       top: element.offsetTop - 110,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const target = element.offsetTop - 110;
    const lenis = getLenis();

    if (lenis) {
      lenis.scrollTo(target, { duration: 1 });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#604BE3] selection:text-white">
      <div className="relative bg-white pt-32 pb-24 px-6 md:px-12 overflow-hidden">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.1) 90%, transparent 75%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.1) 90%, transparent 75%)",
          }}
        >
          <div className="absolute left-[-180px] bottom-[-120px] sm:left-[-220px] lg:left-[-250px] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] bg-[#FFF95B]/20 blur-[120px] sm:blur-[180px] lg:blur-[220px] rounded-full" />
          <div className="absolute right-[-180px] bottom-[-120px] sm:right-[-220px] lg:right-[-250px] w-[380px] h-[380px] sm:w-[650px] sm:h-[650px] lg:w-[900px] lg:h-[900px] bg-[#FF930F]/20 blur-[120px] sm:blur-[180px] lg:blur-[220px] rounded-full" />
          <div className="absolute left-1/2 bottom-[-250px] -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-r from-[#FFF95B]/15 via-white/10 to-[#FF930F]/15 blur-[180px] rounded-full" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#604BE3]/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[16px] font-normal text-[#5A5550] hover:text-[#1A1614] transition-colors duration-200 tracking-tighter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#604BE3]/10 bg-[#604BE3]/5 text-sm font-medium tracking-tighter leading-tight text-[#604BE3] mb-2">
            Last Updated: June 2026
          </div>

          <h1 className="text-4xl md:text-[56px] font-bold tracking-tighter leading-[1.05] text-[#1A1614]">
            Privacy Policy
          </h1>

          <h2 className="text-xl md:text-[22px] text-[#333333]/80 tracking-tighter leading-tight font-semibold">
            Your Privacy Matters to Us
          </h2>

          <p className="text-base md:text-[17px] font-medium text-[#5A5550] max-w-2xl mx-auto tracking-tight leading-[1.9]">
            Learn how Digital Sahay collects, uses, stores, and protects your
            information when you interact with our website, services, and
            digital platforms.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 flex flex-col lg:flex-row gap-12 xl:gap-20">
        <div className="hidden lg:flex w-full lg:w-[300px] shrink-0 flex-col sticky top-20 self-start">
          <nav className="flex flex-col gap-1">
            {tocItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center px-4 py-3.5 rounded-r-full lg:rounded-r-full lg:rounded-l-none text-left transition-all duration-200 border-l-4 ${
                    isActive
                      ? "bg-[#604BE3]/10 text-[#604BE3] border-[#604BE3] font-semibold"
                      : "text-[#333333] border-transparent hover:bg-gray-100 font-medium"
                  }`}
                >
                  <span className="text-[16px] tracking-tighter leading-tight">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Mobile Dropdown */}
        <div className="block lg:hidden w-full mb-4">
          <div className="relative">
            <select
              value={activeSection}
              onChange={(e) => scrollToSection(e.target.value)}
              className="w-full appearance-none bg-white border border-[#333333]/10 rounded-2xl px-5 py-4 text-[#333333] font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#604BE3]/20"
            >
              {tocItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#333333]">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 max-w-4xl text-[#3A3530] space-y-16 leading-relaxed text-[16px] md:text-[17px]">
          {/* Section 1 */}
          <section id="introduction" className="scroll-mt-32 space-y-5">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              1. Introduction
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Welcome to Digital Sahay.
            </p>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              At Digital Sahay, we are committed to protecting your privacy and
              ensuring transparency in how we handle your information. This
              Privacy Policy explains what information we collect, how we use
              it, and the measures we take to safeguard your data.
            </p>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              By using our website or submitting information through our forms,
              you agree to the practices outlined in this Privacy Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section
            id="information-we-collect"
            className="scroll-mt-32 space-y-8"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              2. Information We Collect
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              We may collect information that helps us provide better services
              and improve your experience.
            </p>

            <div className="space-y-5">
              <h3 className="text-[24px] font-bold text-[#1A1614] tracking-tighter leading-tight">
                Information You Provide Directly
              </h3>

              <p className="text-[#5A5550] font-medium">When you:</p>

              <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3]">
                <li>Submit a consultation request</li>
                <li>Fill out a contact form</li>
                <li>Subscribe to updates</li>
                <li>Communicate with our team</li>
              </ul>

              <p className="text-[#5A5550] font-medium">We may collect:</p>

              <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
                <li>Full Name</li>
                <li>Business Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Project Requirements</li>
                <li>Business Information</li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-[24px] font-bold text-[#1A1614] tracking-tighter leading-tight">
                Information Collected Automatically
              </h3>

              <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
                When you visit our website, we may collect:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
                <li>Device Information</li>
                <li>Browser Type</li>
                <li>IP Address</li>
                <li>Pages Visited</li>
                <li>Session Duration</li>
                <li>Referral Sources</li>
                <li>Website Interaction Data</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="how-we-use" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              3. How We Use Your Information
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              We use collected information to:
            </p>

            <div className="space-y-6 tracking-tighter leading-tight">
              {[
                {
                  title: "Provide Services",
                  desc: "Understand your requirements and recommend suitable solutions.",
                },
                {
                  title: "Respond to Inquiries",
                  desc: "Contact you regarding consultations, proposals, or support requests.",
                },
                {
                  title: "Improve Website Performance",
                  desc: "Analyze visitor behavior to improve user experience.",
                },
                {
                  title: "Marketing & Communication",
                  desc: "Send relevant updates, insights, or service information when permitted.",
                },
                {
                  title: "Security & Compliance",
                  desc: "Protect our platform and comply with applicable legal requirements.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-7 rounded-[28px] border border-[#1A1614]/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  <h4 className="font-bold text-[#1A1614] text-[20px] mb-3 tracking-tighter leading-tight">
                    {item.title}
                  </h4>

                  <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section id="cookies" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              4. Cookies & Tracking Technologies
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Digital Sahay may use cookies and analytics technologies to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
              <li>Improve website functionality</li>
              <li>Remember user preferences</li>
              <li>Measure website performance</li>
              <li>Understand visitor behavior</li>
              <li>Enhance marketing effectiveness</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="third-party" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              5. Third-Party Services
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              To provide our services effectively, we may use trusted
              third-party platforms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 tracking-tighter leading-tight">
              {[
                "Google Analytics",
                "Google Ads",
                "Meta Platforms",
                "LinkedIn",
                "WhatsApp Business",
                "CRM Systems",
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-[#F8F7FF] border border-[#604BE3]/10 rounded-2xl p-5"
                >
                  <p className="font-semibold text-[#333333] tracking-tighter leading-tight">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section id="data-security" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              6. Data Security
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              We take reasonable technical and organizational measures to
              protect your information.
            </p>
          </section>

          {/* Section 7 */}
          <section id="data-retention" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              7. Data Retention
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              We retain your information only for as long as necessary.
            </p>
          </section>

          {/* Section 8 */}
          <section id="your-rights" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              8. Your Rights & Choices
            </h2>

            <div className="space-y-5 pl-5 border-l-2 border-[#604BE3]/20 tracking-tighter leading-tight">
              {[
                "Access Your Information",
                "Update Information",
                "Request Deletion",
                "Withdraw Consent",
              ].map((item, index) => (
                <div key={index}>
                  <h4 className="font-bold text-[#1A1614] text-[20px] mb-2">
                    {item}
                  </h4>

                  <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
                    Contact us to manage your personal information and privacy
                    preferences.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 9 */}
          <section id="childrens-privacy" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              9. Children's Privacy
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              We do not knowingly collect personal information from children
              under the age of 13.
            </p>
          </section>

          {/* Section 10 */}
          <section id="updates" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              10. Updates to This Policy
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              We may update this Privacy Policy from time to time.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              11. Contact Information
            </h2>

            <div className="bg-white border border-[#1A1614]/10 rounded-[32px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <h3 className="text-[26px] font-bold text-[#1A1614] mb-6 tracking-tighter leading-tight">
                Digital Sahay
              </h3>

              <div className="space-y-5 tracking-tighter leading-tight">
                <div>
                  <p className="text-[#8A8580] text-sm mb-1">Email</p>

                  <a
                    href="mailto:info@digitalsahaay.com"
                    className="text-[#604BE3] font-semibold hover:underline"
                  >
                    info@digitalsahaay.com
                  </a>
                </div>

                <div>
                  <p className="text-[#8A8580] text-sm mb-1">Phone</p>

                  <a
                    href="tel:+919876543210"
                    className="text-[#333333] font-semibold"
                  >
                    +91 63576 65915
                  </a>
                </div>

                <div>
                  <p className="text-[#8A8580] text-sm mb-1">Address</p>

                  <p className="text-[#5A5550] font-medium leading-[1.8]">
2nd Floor, President Plaza, Sg Highway                    <br />
                    Thaltej, Ahmedabad - 380054
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <section className="bg-[#F8F7FF] rounded-[32px] p-8 text-center">
            <p className="text-[#5A5550] font-medium italic tracking-tighter leading-tight">
              Digital Sahay is committed to maintaining transparency, protecting
              your privacy, and handling your information responsibly.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

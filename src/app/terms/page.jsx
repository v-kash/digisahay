"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getLenis } from "../components/SmoothScroll"; // adjust path

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("acceptance");

  const tocItems = [
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "about", title: "About Digital Sahay" },
    { id: "services", title: "Services Offered" },
    { id: "responsibilities", title: "Client Responsibilities" },
    { id: "consultations", title: "Consultations & Proposals" },
    { id: "payments", title: "Payments & Billing" },
    { id: "intellectual-property", title: "Intellectual Property" },
    { id: "timelines", title: "Project Timelines & Deliverables" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "termination", title: "Termination of Services" },
    { id: "changes", title: "Changes to Terms" },
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
      {/* Hero Section */}
      <div className="relative bg-white pt-32 pb-24 px-6 md:px-12 overflow-hidden">
        {/* Atmospheric Overlay */}
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
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#604BE3]/10 bg-[#604BE3]/5 text-sm font-medium tracking-tighter leading-tight text-[#604BE3] mb-2">
            Last Updated: June 2026
          </div>

          <h1 className="text-4xl md:text-[56px] font-bold tracking-tighter leading-[1.05] text-[#1A1614]">
            Terms of Service
          </h1>

          <h2 className="text-xl md:text-[22px] text-[#333333]/80 tracking-tighter leading-tight font-semibold">
            Terms & Conditions for Using Digital Sahay
          </h2>

          <p className="text-base md:text-[17px] font-medium text-[#5A5550] max-w-2xl mx-auto tracking-tight leading-[1.9]">
            Please read these Terms of Service carefully before using our
            website, submitting inquiries, or engaging with our services.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 flex flex-col lg:flex-row gap-12 xl:gap-20">
        {/* Sidebar */}
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

        <div className="flex-1 min-w-0 max-w-4xl text-[#3A3530] space-y-16 leading-relaxed text-[16px] md:text-[17px]">
          {/* Section 1 */}
          <section id="acceptance" className="scroll-mt-32 space-y-5">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              1. Acceptance of Terms
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Welcome to Digital Sahay.
            </p>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              By accessing our website, submitting forms, requesting
              consultations, or engaging our services, you agree to comply with
              these Terms of Service.
            </p>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              If you do not agree with any part of these terms, please
              discontinue the use of our website and services.
            </p>
          </section>

          {/* Section 2 */}
          <section id="about" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              2. About Digital Sahay
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Digital Sahay provides digital growth solutions designed to help
              businesses build stronger online presence and achieve measurable
              growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Website Development",
                "SEO Optimization",
                "Social Media Marketing",
                "Performance Marketing",
                "Branding & Design",
                "Lead Generation",
                "Business Consulting",
                "Creative & Digital Solutions",
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

          {/* Section 3 */}
          <section id="services" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              3. Services Offered
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              All services provided by Digital Sahay are subject to project
              requirements, scope, timelines, and mutual agreement.
            </p>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Service deliverables may vary depending on:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
              <li>Selected package</li>
              <li>Business requirements</li>
              <li>Project complexity</li>
              <li>Third-party dependencies</li>
              <li>Client approvals</li>
            </ul>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Any custom requirements beyond the agreed scope may require
              additional discussion and approval.
            </p>
          </section>

          {/* Section 4 */}
          <section id="responsibilities" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              4. Client Responsibilities
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              To ensure successful project delivery, clients agree to:
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Provide Accurate Information",
                  desc: "Share correct business, project, and contact details.",
                },
                {
                  title: "Submit Required Materials",
                  desc: "Provide content, branding assets, approvals, and feedback within reasonable timelines.",
                },
                {
                  title: "Review Deliverables Promptly",
                  desc: "Review and approve submitted work to avoid project delays.",
                },
                {
                  title: "Maintain Professional Communication",
                  desc: "Communicate respectfully and cooperatively throughout the engagement.",
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

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Digital Sahay shall not be responsible for delays caused by
              incomplete information or delayed approvals.
            </p>
          </section>

          {/* Section 5 */}
          <section id="consultations" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              5. Consultations & Proposals
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Free consultations are provided for informational purposes and do
              not create any contractual obligation.
            </p>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Project proposals may include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
              <li>Scope of Work</li>
              <li>Deliverables</li>
              <li>Timelines</li>
              <li>Recommended Services</li>
              <li>Commercial Terms</li>
            </ul>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Projects officially begin only after confirmation and agreement
              from both parties.
            </p>
          </section>

          {/* Section 6 */}
          <section id="payments" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              6. Payments & Billing
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Payment terms will be outlined within project proposals,
              quotations, or service agreements.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-7 rounded-[28px] border border-[#1A1614]/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h4 className="font-bold text-[#1A1614] text-[20px] mb-3 tracking-tighter leading-tight">
                  Payment Requirements
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
                  <li>
                    Advance payments may be required before project initiation.
                  </li>
                  <li>
                    Remaining payments may be linked to project milestones.
                  </li>
                  <li>
                    Final deliverables may be released after full payment is
                    received.
                  </li>
                </ul>
              </div>

              <div className="bg-white p-7 rounded-[28px] border border-[#1A1614]/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <h4 className="font-bold text-[#1A1614] text-[20px] mb-3 tracking-tighter leading-tight">
                  Late Payments
                </h4>

                <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
                  <li>Project suspension</li>
                  <li>Delivery delays</li>
                  <li>Temporary service interruptions</li>
                </ul>
              </div>
            </div>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              All applicable taxes shall be borne by the client unless otherwise
              stated.
            </p>
          </section>

          {/* Section 7 */}
          <section
            id="intellectual-property"
            className="scroll-mt-32 space-y-8"
          >
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              7. Intellectual Property
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Client-Owned Assets",
                  desc: "Any content, logos, trademarks, images, or materials provided by the client remain the property of the client.",
                },
                {
                  title: "Digital Sahay Deliverables",
                  desc: "Ownership of approved project deliverables transfers to the client upon full payment unless otherwise specified.",
                },
                {
                  title: "Portfolio Rights",
                  desc: "Digital Sahay reserves the right to showcase completed projects, designs, and case studies within its portfolio and marketing materials unless otherwise agreed.",
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

          {/* Section 8 */}
          <section id="timelines" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              8. Project Timelines & Deliverables
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Project timelines are estimated based on:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
              <li>Project scope</li>
              <li>Availability of required materials</li>
              <li>Client approvals</li>
              <li>Third-party services</li>
            </ul>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              While we strive to meet agreed timelines, delays caused by
              external factors or client-side dependencies may impact delivery
              schedules.
            </p>
          </section>

          {/* Section 9 */}
          <section id="liability" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              9. Limitation of Liability
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Digital Sahay shall not be liable for:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
              <li>Business losses</li>
              <li>Revenue loss</li>
              <li>Indirect damages</li>
              <li>Data loss caused by third-party services</li>
              <li>Website downtime outside our control</li>
              <li>
                Platform policy changes by Google, Meta, or other providers
              </li>
            </ul>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              While we work toward achieving positive outcomes, specific
              business results cannot be guaranteed.
            </p>
          </section>

          {/* Section 10 */}
          <section id="termination" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              10. Termination of Services
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Either party may terminate an engagement under reasonable
              circumstances.
            </p>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Termination may occur due to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
              <li>Breach of agreement</li>
              <li>Non-payment</li>
              <li>Unethical activities</li>
              <li>Misuse of services</li>
              <li>Mutual agreement</li>
            </ul>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Any completed work delivered before termination remains billable.
            </p>
          </section>

          {/* Section 11 */}
          <section id="changes" className="scroll-mt-32 space-y-6">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              11. Changes to Terms
            </h2>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Digital Sahay may update these Terms of Service from time to time.
            </p>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              Updates may occur due to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-[#5A5550] font-medium marker:text-[#604BE3] tracking-tighter leading-tight">
              <li>Legal requirements</li>
              <li>Service improvements</li>
              <li>Business policy changes</li>
              <li>Technology updates</li>
            </ul>

            <p className="text-[#5A5550] font-medium tracking-tighter leading-tight">
              The latest version will always be available on this page.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-32 space-y-8">
            <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1614] tracking-tighter leading-tight">
              12. Contact Information
            </h2>

            <div className="bg-white border border-[#1A1614]/10 rounded-[32px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
              <h3 className="text-[26px] font-bold text-[#1A1614] mb-6 tracking-tighter leading-tight">
                Digital Sahay
              </h3>

              <div className="space-y-5">
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
Thaltej, Ahmedabad - 380054                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <section className="bg-[#F8F7FF] rounded-[32px] p-8 text-center">
            <p className="text-[#5A5550] font-medium italic tracking-tighter leading-tight">
              By using Digital Sahay's website and services, you acknowledge
              that you have read, understood, and agreed to these Terms of
              Service. We are committed to maintaining transparent,
              professional, and trustworthy business relationships with every
              client.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

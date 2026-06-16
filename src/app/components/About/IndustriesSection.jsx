"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { ContactModal } from "../ContactModel";

// --- Fully Dynamic JSON Data Structure ---
const industryData = [
  {
    id: "Manufacturing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
        />
      </svg>
    ),
    portfolios: [
      {
        companyName: "HTC18 ENTERPRISES",
        description:
          "A visually engaging website developed to showcase premium crafted and customized bags, strengthen brand credibility, and drive increased wholesale inquiries and business growth.",
        services: ["Website Design", "UI/UX ", "Lead Generation"],
        websiteUrl: "https://www.htc18.com",
        stats: [
          {
            value: "3X",
            label: "Increase in Leads",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            ),
          },
          {
            value: "60%",
            label: "Growth in Wholesale Inquiries",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            ),
          },
          {
            value: "40%",
            label: "Increase in Business Orders",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/htc18.webp",
        websitebannercard: "/about/projects/htc18.png",
      },
      {
        companyName: "Saranya Exports",
        description:
          "A professionally designed website showcasing recycled yarn manufacturing, sustainable textile production, eco-friendly practices, and nationwide supply capabilities.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://saranyaexport.in",
        stats: [
          {
            value: "10+",
            label: "Years Industry Experience",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0Z"
                />
              </svg>
            ),
          },
          {
            value: "200+",
            label: "Happy Clients",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0Zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Z"
                />
              </svg>
            ),
          },
          {
            value: "PAN India",
            label: "Supply Network",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18Zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582"
                />
              </svg>
            ),
          },
        ],
        image: "/about/saryanna.webp",
        websitebannercard: "/about/projects/saranya.png",
      },
    ],
  },
  {
    id: "Healthcare",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
    portfolios: [
      {
        companyName: "DR. MALIK\nDIAGNOSTICS",
        description:
          "Modern diagnostic healthcare website for pathology, radiology, and health checkup services with a clean user-friendly experience.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://drmalikdiagnostic.com",
        stats: [
          {
            value: "100+",
            label: "Diagnostic Tests",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z"
                />
              </svg>
            ),
          },
          {
            value: "24/7",
            label: "Patient Support",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0Z"
                />
              </svg>
            ),
          },
          {
            value: "Accurate",
            label: "Diagnostic Reports",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 7.5h-9m9 4.5h-9m6 4.5h-6M6.75 3.75h10.5A2.25 2.25 0 0119.5 6v12a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V6a2.25 2.25 0 012.25-2.25Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/hisar.webp",
        websitebannercard: "/about/projects/hisar.png",
      },
    ],
  },
  {
    id: "Engineering",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
        />
      </svg>
    ),
    portfolios: [
      {
        companyName: "V.K. Electricals",
        description:
          "A modern electrical services website showcasing power infrastructure, contracting, installation, and consultancy solutions with a focus on expertise, reliability.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://v-k-electricals.vercel.app/",
        stats: [
          {
            value: "End-to-End",
            label: "Electrical Solutions",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
                />
              </svg>
            ),
          },
          {
            value: "Industrial",
            label: "Infrastructure Projects",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            ),
          },
          {
            value: "Reliable",
            label: "Power Services",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/vk.webp",
        websitebannercard: "/about/projects/vk.png",
      },
    ],
  },
  {
    id: "Agriculture",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
    portfolios: [
      {
        companyName: "BK Fruits",
        description:
          "BK Fruits is focused on fruit export services, strong distribution networks, and efficient supply chain solutions ensuring consistent quality, smooth logistics, and reliable delivery across markets.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://bkfruits.com",
        stats: [
          {
            value: "20+",
            label: "Export Markets",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18Zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                />
              </svg>
            ),
          },
          {
            value: "Premium",
            label: "Fruit Quality",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z"
                />
              </svg>
            ),
          },
          {
            value: "Worldwide",
            label: "Distribution Network",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5h18M3 12h18M3 16.5h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9m0-18c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9"
                />
              </svg>
            ),
          },
        ],
        image: "/about/bk.webp",
        websitebannercard: "/about/projects/aam.png",
      },
    ],
  },
  {
    id: "Travel Agency",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
    portfolios: [
      {
        companyName: "Endless Trips",
        description:
          "Endless Trips offers curated tour packages, popular destinations, and seamless travel planning to simplify and enhance the travel experience.",
        services: [
          "Website Design",
          "UI/UX Design",
          "Travel Website",
          "SEO Optimization",
        ],
        websiteUrl: "https://endlesstrips.in",
        stats: [
          {
            value: "50+",
            label: "Tour Packages",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18Zm0 0c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3"
                />
              </svg>
            ),
          },
          {
            value: "Top",
            label: "Travel Destinations",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10.5a3 3 0 110-6 3 3 0 010 6Z"
                />
              </svg>
            ),
          },
          {
            value: "24/7",
            label: "Travel Assistance",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/endless.webp",
        websitebannercard: "/about/projects/endlesstrips.png",
      },
    ],
  },
  {
    id: "Jewellery & Fashion",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
    portfolios: [
      {
        companyName: "Sri Saravana",
        description:
          "Sri Saranya is a fashion platform featuring silk sarees, ethnic wear, and jewellery collections, delivering a smooth and elegant shopping experience for traditional fashion buyers.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://www.sri-saravana.in",
        stats: [
          {
            value: "1000+",
            label: "Fashion Products",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 12 3l9 4.5M4.5 9.75V16.5L12 21l7.5-4.5V9.75M12 12l9-4.5M12 12 3 7.5"
                />
              </svg>
            ),
          },
          {
            value: "Premium",
            label: "Jwellery Collections",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557L3.04 10.385a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5Z"
                />
              </svg>
            ),
          },
          {
            value: "Trusted",
            label: "Shopping Experience",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/sarvanna.webp",
        websitebannercard: "/about/projects/srisaravana.png",
      },
    ],
  },
  {
    id: "Organic & Wellness",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22c4-4 7-8 7-13a7 7 0 1 0-14 0c0 5 3 9 7 13z" />
        <path d="M12 14V7" />
        <path d="M12 10c-2-2-4-2-5-1" />
        <path d="M12 12c2-2 4-2 5-1" />
      </svg>
    ),
    portfolios: [
      {
        companyName: "Aumveda Wellness",
        description:
          "Aumveda Wellness is a wellness platform offering Ayurvedic products, natural healthcare solutions, and holistic wellness services focused on promoting balanced and healthy living.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://aumvedawellness.com",
        stats: [
          {
            value: "Ayurvedic",
            label: "Wellness Solutions",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.75c3.75 0 6.75 3 6.75 6.75 0 6-6.75 9.75-7.5 9.75S4.5 16.5 4.5 10.5c0-3.75 3-6.75 6.75-6.75Z"
                />
              </svg>
            ),
          },
          {
            value: "Natural",
            label: "Healthcare Products",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z"
                />
              </svg>
            ),
          },
          {
            value: "Holistic",
            label: "Wellness Approach",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9 9 0 100-18 9 9 0 000 18Zm0-18c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9m0-18c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9"
                />
              </svg>
            ),
          },
        ],
        image: "/about/amvuda.webp",
        websitebannercard: "/about/projects/aumweda.png",
      },
    ],
  },
  {
    id: "SmartLiving",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
        />
      </svg>
    ),
    portfolios: [
      {
        companyName: "AIIVA Automation",
        description:
          "AIIVA Automation offers smart home automation, security systems, and connected living solutions for a more convenient and controlled lifestyle.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://aiivaautomation.com",
        stats: [
          {
            value: "Smart",
            label: "Home Solutions",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9.776 12 3l8.25 6.776V20.25A.75.75 0 0119.5 21h-15a.75.75 0 01-.75-.75V9.776Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 21v-6h6v6"
                />
              </svg>
            ),
          },
          {
            value: "Advanced",
            label: "Automation Systems",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364 6.364-2.121-2.121M8.757 8.757 6.636 6.636m11.728 0-2.121 2.121M8.757 15.243l-2.121 2.121"
                />
                <circle cx="12" cy="12" r="4" />
              </svg>
            ),
          },
          {
            value: "24/7",
            label: "Connected Living",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a3.375 3.375 0 116.75 0c0 1.258-.69 2.355-1.71 2.933-.48.272-.79.786-.79 1.338v.229m-4.5 0h4.5m-4.5 3h4.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3a9 9 0 100 18 9 9 0 000-18Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/automation.webp",
        websitebannercard: "/about/projects/white.png",
      },
    ],
  },
  {
    id: "Recycling",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    ),
    portfolios: [
      {
        companyName: "JJ Scrap Buyers",
        description:
          "JJ Scrap Buyers provides scrap purchasing services, metal recycling, and efficient waste management solutions focused on sustainability, resource recovery, and responsible recycling operations.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://jjscrapbuyers.com",
        stats: [
          {
            value: "All Types",
            label: "Scrap Collection",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            ),
          },
          {
            value: "Industrial",
            label: "Recycling Solutions",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            ),
          },
          {
            value: "Eco",
            label: "Waste Management",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.75c3.75 0 6.75 3 6.75 6.75 0 6-6.75 9.75-7.5 9.75S4.5 16.5 4.5 10.5c0-3.75 3-6.75 6.75-6.75Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/jj.webp",
        websitebannercard: "/about/projects/jj.png",
      },
      {
        companyName: "Veeyen Traders",
        description:
          "Vee Yen Traders provides scrap trading services, metal recycling, and sustainable waste management solutions focused on efficient resource recovery and environmentally responsible operations.",
        services: ["Website Design", "UI/UX Design", "SEO Optimization"],
        websiteUrl: "https://veeyentraders.in",
        stats: [
          {
            value: "Trusted",
            label: "Scrap Trading",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            ),
          },
          {
            value: "Industrial",
            label: "Metal Recycling",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            ),
          },
          {
            value: "Eco",
            label: "Waste Solutions",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.75c3.75 0 6.75 3 6.75 6.75 0 6-6.75 9.75-7.5 9.75S4.5 16.5 4.5 10.5c0-3.75 3-6.75 6.75-6.75Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/veeyen.webp",
        websitebannercard: "/about/projects/veeyen.png",
      },
    ],
  },
  {
    id: "NGO & Nonprofit",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Heart */}
        <path d="M14 22s-8-5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 22 11c0 6-8 11-8 11z" />

        {/* Hands */}
        <path d="M6 17c2 1.5 4 2 6 2" />
        <path d="M22 17c-2 1.5-4 2-6 2" />
      </svg>
    ),
    portfolios: [
      {
        companyName: "Vithaldass Welfare Foundation",
        description:
          "A social welfare organization focused on community development, education support, healthcare initiatives, and empowering underserved communities through impactful programs.",
        services: [
          "Website Design",
          "UI/UX Design",
          "NGO Website",
          "SEO Optimization",
        ],
        websiteUrl: "https://vithaldasswelfare.in",
        stats: [
          {
            value: "Community",
            label: "Welfare Programs",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0Zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Z"
                />
              </svg>
            ),
          },
          {
            value: "Education",
            label: "Social Initiatives",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            ),
          },
          {
            value: "Impact",
            label: "Community Support",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z"
                />
              </svg>
            ),
          },
        ],
        image: "/about/vithaldass.webp",
        websitebannercard: "/about/projects/vitthaldas.png",
      },
      {
        companyName: "Mahi Education Trust",
        description:
          "A non-profit organization focused on education initiatives, student development programs, and community-driven learning support aimed at empowering students and strengthening access to quality education.",
        services: [
          "Website Design",
          "UI/UX Design",
          "NGO Website ",
          "SEO Optimization",
        ],
        websiteUrl: "https://mahieducationtrust.org",
        stats: [
          {
            value: "Education",
            label: "Learning Programs",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14L3 9l9-5 9 5-9 5Zm0 0v6m-6-3c0 1.657 2.686 3 6 3s6-1.343 6-3"
                />
              </svg>
            ),
          },
          {
            value: "Community",
            label: "Educational Impact",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0Zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0Z"
                />
              </svg>
            ),
          },
          {
            value: "Growth",
            label: "Student Development",
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.2}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            ),
          },
        ],
        image: "/about/mahi.webp",
        websitebannercard: "/about/projects/mahi.png",
      },
    ],
  },
];

function CinematicModal({ industry, portfolio, originRect, onClose }) {
  const [expanded, setExpanded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    // Push fake history state
    window.history.pushState(
      { cinematicModal: true },
      "",
      window.location.href,
    );

    const handlePopState = () => {
      handleClose();
    };

    window.addEventListener("popstate", handlePopState);

    const t1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => setExpanded(true));
    });

    const t2 = setTimeout(() => setContentVisible(true), 400);

    return () => {
      cancelAnimationFrame(t1);
      clearTimeout(t2);

      window.removeEventListener("popstate", handlePopState);

      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleClose = () => {
    setContentVisible(false);
    setClosing(true);
    setExpanded(false);

    // Remove modal history state safely
    if (window.history.state?.cinematicModal) {
      window.history.back();
    }

    setTimeout(onClose, 620);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-[100] bg-black/80 transition-opacity duration-500 ${
          expanded && !closing
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Animated Shell */}
      <div
        className="fixed z-[1001] overflow-hidden overscroll-contain"
        style={{
          top: expanded && !closing ? 0 : `${originRect.top}px`,
          left: expanded && !closing ? 0 : `${originRect.left}px`,
          width: expanded && !closing ? "100dvw" : `${originRect.width}px`,
          height: expanded && !closing ? "100dvh" : `${originRect.height}px`,
          borderRadius: expanded && !closing ? "0px" : "26px",
          transition: closing
            ? "all 0.4s cubic-bezier(0.4,0,0.2,1)"
            : expanded
              ? "all 0.4s cubic-bezier(0.4,0,0.2,1)"
              : "none",
        }}
      >
        {/* Background Image */}
        <img
          src={portfolio.websitebannercard}
          alt={portfolio.companyName}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div
          className={`absolute inset-0 z-0 pointer-events-none transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            contentVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          <div
            className="absolute bottom-0 left-0 w-full h-[80vh]"
            style={{
              backgroundImage: "url('/about/cinematic-overlay.png')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
              backgroundRepeat: "no-repeat",

              backdropFilter: "blur(42px)",
              WebkitBackdropFilter: "blur(42px)",

              maskImage:
                "linear-gradient(to top, black 0%, black 70%, transparent 100%)",

              WebkitMaskImage:
                "linear-gradient(to top, black 0%, black 70%, transparent 100%)",
            }}
          />

          {/* Extra vignette for cinematic look */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.45) 100%)",
            }}
          />
        </div>

        {/* Close */}
        <button
          onClick={handleClose}
          className={`absolute top-5 left-5 z-20 w-11 h-11 rounded-full bg-white/10 backdrop-blur-1px border border-white/20 flex items-center justify-center text-white transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]
          ${contentVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-95"}`}
          style={{ transitionDelay: "300ms", willChange: "transform, opacity" }}
        >
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 2. Content Layer (Single Mask, Unified Movement) */}
        <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden pointer-events-none">
          {/* Sped up container transition to 800ms */}
          <div
            className={`w-full p-4 md:p-12 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              contentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="flex flex-col pointer-events-auto">
              {/* Industry */}
              <div
                className={`inline-flex items-center self-start border-[0.01px] border-[#ffffff]/50 gap-2 bg-transparent backdrop-blur-[10px] text-[#FFFFFF] px-4 py-2.5 rounded-full text-[12px] font-semibold mb-4 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  contentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "0ms" }}
              >
                <div className="w-3.5 h-3.5 [&>svg]:w-full [&>svg]:h-full">
                  {industry.icon}
                </div>
                {industry.id}
              </div>

              {/* Title */}
              <h2
                className={`text-white text-[22px] font-bold uppercase tracking-tighter leading-tight mb-2 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  contentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "50ms" }}
              >
                {portfolio.companyName}
              </h2>

              {/* Description */}
              <p
                className={`text-[#FFFFFF]/80 max-w-[540px] text-[14px] md:text-[14px] leading-tight tracking-tighter mb-4 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  contentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                {portfolio.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {portfolio.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      contentVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${150 + i * 50}ms`,
                    }}
                  >
                    <div className="flex items-center justify-center leading-tight tracking-tighter shrink-0 w-10 h-10 rounded-full border border-white/10 bg-white/30 backdrop-blur-[10px] text-white [&>svg]:w-5 [&>svg]:h-5">
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="text-[#FFFFFF] text-[24px] font-semibold leading-tight tracking-tighter">
                        {stat.value}
                      </h3>
                      <p className="text-white/80 text-[14px] w-full leading-tight tracking-tighter font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services Title */}
              <h5
                className={`text-[18px] font-bold text-[#ffffff] mb-5 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  contentVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: "250ms" }}
              >
                Services Used
              </h5>

              {/* Services Array */}
              <div className="flex flex-wrap gap-2 mb-6">
                {portfolio.services.map((service, i) => (
                  <span
                    key={i}
                    className={`w-[160px] md:w-[180px] py-3.5 shrink-0 flex items-center justify-center text-center rounded-full bg-white/10 border border-white/10 backdrop-blur-xl text-white text-[12px] font-medium px-4 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      contentVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${300 + i * 40}ms`,
                    }}
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2 w-full max-w-[520px]">
                {/* Visit Website */}
                <a
                  href={portfolio.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-5 bg-white text-[14px] leading-tight tracking-tighter text-[#333333] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    contentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "450ms" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <span>Visit Website</span>
                  <span className="text-[18px]">→</span>
                </a>

                {/* Build Similar Website */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full py-4.5 text-[14px] bg-white/5 backdrop-blur-xl leading-tight tracking-tighter border border-white text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    contentVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: "550ms" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <span>Build Similar Website</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Derive flat array of all portfolios mapped with their parent industry metadata
  // This enables scaling to multiple projects per industry without changing the UI flow.
  const flatData = useMemo(() => {
    return industryData.flatMap((ind, indIdx) =>
      ind.portfolios.map((port, portIdx) => ({
        industry: ind,
        portfolio: port,
        indIdx,
        portIdx,
      })),
    );
  }, []);

  const activeItem = flatData[activeIndex];
  const activeData = activeItem.industry;
  const portfolio = activeItem.portfolio;

  // Touch & Swipe logic refs
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const hasSwiped = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalData, setModalData] = useState(null); // { industry, portfolio, originRect }
  // ref for each mobile card so we can read its rect
  const mobileCardRefs = useRef({});

  const handleTouchStart = (e) => {
    if (modalData) return; // Prevent interaction if modal is open

    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = true;
    hasSwiped.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || modalData) return;

    touchEndX.current = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const deltaX = Math.abs(touchStartX.current - touchEndX.current);
    const deltaY = Math.abs(touchStartY.current - currentY);

    // Horizontal intent detection: Ensure swipe is horizontal and ignore tiny finger jitters
    if (deltaX > deltaY && deltaX > 10) {
      hasSwiped.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current || modalData) return;

    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // swipe sensitivity threshold

    if (hasSwiped.current) {
      if (distance > threshold) {
        handleNext();
      } else if (distance < -threshold) {
        handlePrev();
      }
    }

    isDragging.current = false;

    // Prevent ghost clicks by delaying the reset of the hasSwiped flag
    setTimeout(() => {
      hasSwiped.current = false;
    }, 50);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? flatData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === flatData.length - 1 ? 0 : prev + 1));
  };

  // NEW: open modal from a DOM element's bounding rect
  const openModal = (industry, portfolio, el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setModalData({
      industry,
      portfolio,
      originRect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
    });
  };

  const handleCardClick = (industry, portfolio, idx) => {
    // Prevent modal opening during swipe
    if (hasSwiped.current) return;

    // Prevent accidental open while dragging
    if (isDragging.current) return;

    // Only allow opening active card
    if (idx !== activeIndex) return;

    openModal(industry, portfolio, mobileCardRefs.current[idx]);
  };

  return (
    <section className="bg-[#F8F9FE] pt-8 md:pt-12 pb-8 md:pb-16 px-4 md:px-8 w-full font-sans text-[#333333] tracking-tighter leading-tight overflow-hidden">
      {/* MODAL — rendered at top level so it overlays everything */}
      {modalData && (
        <CinematicModal
          industry={modalData.industry}
          portfolio={modalData.portfolio}
          originRect={modalData.originRect}
          onClose={() => setModalData(null)}
        />
      )}

      {/* --- Section Header --- */}
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-px bg-[#604BE3] w-8 md:w-12"></div>
          <p className="text-[#604BE3] font-semibold text-[14px] sm:text-[16px] md:text-[18px] tracking-tighter leading-tight uppercase">
            Real Businesses. Real Digital Solutions.
          </p>
          <div className="h-px bg-[#604BE3] w-8 md:w-12"></div>
        </div>

        <h2 className="text-[28px] md:text-[48px] font-bold mb-2 md:mb-4 text-[#333333] tracking-tighter leading-tight">
          <span className="text-[#FF6B35]">Industries</span> We've Worked With
        </h2>

        <p className="text-[#6A6A6A] font-medium text-[16px] md:text-[18px] max-w-[350px] md:max-w-2xl mx-auto tracking-tighter leading-tight">
          Explore how Digital Sahaay helps businesses across industries build a
          stronger online presence and achieve measurable growth.
        </p>
      </div>

      {/* --- Main Content Grid --- */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 tracking-tighter leading-tight">
        {/* --- Left Sidebar (Browse by Industry) - DESKTOP ONLY --- */}
        <div className="bg-white rounded-[20px] border border-[#6A6A6A]/20 py-6 overflow-hidden h-fit hidden lg:block">
          <h3 className="text-[20px] font-bold text-[#1a1a1a] px-6 mb-6 tracking-tighter leading-tight">
            BROWSE BY INDUSTRY
          </h3>
          <ul className="flex flex-col">
            {industryData.map((ind, index) => (
              <li
                key={ind.id}
                onClick={() => {
                  const firstIdx = flatData.findIndex(
                    (item) => item.indIdx === index,
                  );
                  setActiveIndex(firstIdx);
                }}
                className={`flex items-center gap-3 px-6 py-4 cursor-pointer transition-all duration-200 ${
                  activeItem.indIdx === index
                    ? "bg-[#F3F0FF] text-[#604BE3] border-l-[3px] border-[#604BE3] rounded-r-full mr-4"
                    : "text-[#333333] hover:bg-gray-50 border-l-[3px] border-transparent"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={
                    activeItem.indIdx === index
                      ? "text-[#604BE3]"
                      : "text-[#333333]"
                  }
                >
                  {ind.icon}
                </svg>
                <span
                  className={`text-[18px] ${
                    activeItem.indIdx === index
                      ? "font-semibold"
                      : "font-medium"
                  }`}
                >
                  {ind.id}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Right Content Card - DESKTOP ONLY --- */}
        <div className="hidden lg:block bg-white rounded-3xl border border-[#6A6A6A]/20 p-6 sm:p-8 lg:px-10 lg:py-8 relative">
          {/* Top Row: Dynamic Tag & Arrows */}
          <div className="flex justify-between items-center mb-4">
            <div className="inline-flex items-center gap-2 bg-[#F3F0FF] text-[#604BE3] px-4 py-3 rounded-full text-[16px] font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {activeData.icon}
              </svg>
              {activeData.id}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Inner Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1.3fr] gap-10 xl:gap-14">
            {/* Left Side: Dynamic Text Details */}
            <div className="flex flex-col">
              <h4 className="text-[28px] md:text-[35px] font-bold text-[#1a1a1a] mb-2 tracking-tight uppercase">
                {portfolio.companyName}
              </h4>
              <p className="text-[#6A6A6A] max-w-[300px] text-[16px] font-medium leading-tight tracking-tighter mb-6">
                {portfolio.description}
              </p>

              <h5 className="text-[18px] font-bold text-[#333333] mb-6">
                Services Used
              </h5>
              <div className="flex flex-wrap gap-2.5 mb-6">
                {portfolio.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="bg-[#604BE3]/10 text-[#604BE3] w-[140px] py-3 rounded-full text-[14px] font-semibold text-center"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <hr className="border-[#604BE3]/20 max-w-[280px] mb-6" />

              <div className="flex flex-col gap-3 max-w-[280px]">
                {/* Build Similar Website */}
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
                  className="relative overflow-hidden group flex items-center justify-center gap-2 bg-[#604BE3] text-white py-4 px-6 rounded-full font-semibold w-full"
                >
                  {/* Hover Fill */}
                  <span className="absolute inset-0 rounded-full overflow-hidden">
                    <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[320px] group-hover:h-[320px] bg-[#4d3ab8] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
                  </span>

                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>

                  {/* Text */}
                  <span className="relative z-10">Build Similar Website</span>

                  {/* Arrow */}
                  <span className="relative z-10 ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Visit Website */}
                <a
                  href={portfolio.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseMove={(e) => {
                    const btn = e.currentTarget;
                    const rect = btn.getBoundingClientRect();

                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    btn.style.setProperty("--x", `${x}px`);
                    btn.style.setProperty("--y", `${y}px`);
                  }}
                  className="relative overflow-hidden group flex items-center justify-center gap-2 border-[1.5px] border-[#604BE3] text-[#604BE3] py-3.5 px-6 rounded-full font-semibold w-full"
                >
                  {/* Hover Fill */}
                  <span className="absolute inset-0 rounded-full overflow-hidden">
                    <span className="absolute left-[var(--x)] top-[var(--y)] w-0 h-0 group-hover:w-[320px] group-hover:h-[320px] bg-[#F3F0FF] rounded-full transition-all duration-500 ease-out -translate-x-1/2 -translate-y-1/2"></span>
                  </span>

                  {/* Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative z-10"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>

                  {/* Text */}
                  <span className="relative z-10">Visit Website</span>

                  {/* Arrow */}
                  <span className="relative z-10 ml-1 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right Side: Dynamic Stats & Mockup */}
            <div className="flex flex-col -translate-x-15">
              {/* Dynamic Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-16">
                {portfolio.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="bg-[#FBBF45]/40 text-[#333333] p-2.5 rounded-[10px] shrink-0 mt-1">
                      {stat.icon}
                    </div>
                    <div>
                      <h5 className="text-[28px] font-medium text-[#333333] tracking-tighter leading-tight">
                        {stat.value}
                      </h5>
                      <p className="text-[12px] text-[#6A6A6A] font-medium tracking-tighter leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dynamic Laptop Mockup Placeholder */}
              <div className="w-full relative mx-auto max-w-[500px] ">
                <img
                  src={portfolio.image}
                  alt={`${portfolio.companyName} Mockup`}
                  className="w-full h-auto scale-160"
                />
              </div>
            </div>
          </div>

          {/* Pagination Dots at Bottom */}
          <div className="flex justify-center items-center gap-2 mt-8 md:mt-10">
            {industryData.map((_, i) => {
              const distance = Math.abs(i - activeItem.indIdx);

              let size = "w-1 h-1";
              let bg = "bg-gray-300";
              let opacity = "opacity-40";

              if (distance === 0) {
                size = "w-3 h-3";
                bg = "bg-[#604BE3]/50";
                opacity = "opacity-100";
              } else if (distance === 1) {
                size = "w-2.5 h-2.5";
                opacity = "opacity-70";
              } else if (distance === 2) {
                size = "w-2 h-2";
                opacity = "opacity-50";
              }

              return (
                <div
                  key={i}
                  className={` rounded-full transition-all duration-300 ${size} ${bg} ${opacity}`}
                />
              );
            })}
          </div>
        </div>

        {/* --- MOBILE VIEW: CUSTOM UI --- */}
        <div className="block lg:hidden w-full relative leading-tight tracking-tighter">
          {/* Mobile Browse by Industry Native Select UI */}
          <div className="mb-8 max-w-[380px] mx-auto text-center">
            <h3 className="text-[#333333] font-semibold text-[16px] mb-3 leading-tight tracking-tighter">
              Browse by Industry
            </h3>
            <div className="relative bg-white border border-[#333333]/20 rounded-full py-2 px-2 flex items-center justify-between ">
              <div className="flex items-center gap-3">
                <div className="bg-[#604BE3] text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {activeData.icon}
                  </div>
                </div>
                <span className="font-semibold text-[#333333] text-[18px] leading-tight tracking-tighter">
                  {activeData.id}
                </span>
              </div>
              <div className="pr-3 text-[#333333]/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l-5-5 1.5-1.5L10 9l3.5-3.5L15 7l-5 5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* Native Dropdown Overlay */}
              <select
                className="absolute inset-0 w-full h-full opacity-0 appearance-none cursor-pointer"
                value={activeItem.indIdx}
                onChange={(e) => {
                  const firstIdx = flatData.findIndex(
                    (d) => d.indIdx === Number(e.target.value),
                  );
                  setActiveIndex(firstIdx);
                }}
              >
                {industryData.map((ind, i) => (
                  <option key={i} value={i}>
                    {ind.id}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Swiping Carousel with Fixed Smaller Height (451px) */}
          <div
            className="w-full overflow-hidden relative pb-6 pt-2 touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform items-center"
              style={{
                transform: `translateX(calc(50% - 145px - ${activeIndex * 290}px))`,
              }}
            >
              {flatData.map((item, idx) => (
                <div
                  key={idx}
                  className="w-[290px] shrink-0 flex justify-center"
                >
                  <div
                    ref={(el) => {
                      mobileCardRefs.current[idx] = el;
                    }}
                    onClick={() =>
                      handleCardClick(item.industry, item.portfolio, idx)
                    }
                    className={`w-[306px] h-[451px] shrink-0 relative rounded-[26px] overflow-hidden bg-[#333333] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center ${
                      activeIndex === idx
                        ? "scale-100 opacity-100 z-10"
                        : "scale-[0.85] opacity-100 z-0"
                    }`}
                  >
                    {/* Background Image & Gradient */}
                    <img
                      src={item.portfolio.websitebannercard}
                      alt={item.portfolio.companyName}
                      className="absolute inset-0 w-full h-full object-cover opacity-100"
                    />
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 pointer-events-none">
                        <div
                          className="absolute bottom-0 left-0 w-full h-[65%] backdrop-blur-[45px]"
                          style={{
                            WebkitMaskImage:
                              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.78) 65%, transparent 100%)",

                            maskImage:
                              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.78) 65%, transparent 100%)",

                            background:
                              "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.68) 38%, rgba(0,0,0,0.28) 72%, transparent 100%)",

                            mixBlendMode: "multiply",
                          }}
                        />
                      </div>
                    </div>
                    {/* Card Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-2.5">
                      <h4 className="text-white font-bold text-[18px] tracking-tighter uppercase leading-tight">
                        {item.portfolio.companyName}
                      </h4>
                      <p className="text-[#ffffff]/50 text-[14px] font-medium tracking-tighter leading-tight line-clamp-3 mb-1.5">
                        {item.portfolio.description}
                      </p>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsModalOpen(true);
                        }}
                        className="bg-white text-[#333333] hover:bg-gray-100 transition-colors w-full py-3.5 rounded-full text-[14px] font-bold flex items-center justify-center gap-2"
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Build Similar Website <span className="ml-1">→</span>
                      </button>

                      {/* CHANGED: triggers cinematic modal from this card's rect */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();

                          if (hasSwiped.current) return;

                          openModal(
                            item.industry,
                            item.portfolio,
                            mobileCardRefs.current[idx],
                          );
                        }}
                        className="border border-white/30 text-white hover:bg-white/10 transition-colors w-full py-3.5 rounded-full text-[13px] font-bold flex items-center justify-center gap-2"
                      >
                        <svg
                          width="16"
                          height="16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                        Explore Case Study <span className="ml-1">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Arrows Navigation */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="w-[42px] h-[42px] rounded-full border border-[#6A6A6A] flex items-center justify-center text-[#333333] hover:bg-gray-100 transition-colors"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 18l-6-6 6-6"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-[42px] h-[42px] rounded-full border border-[#6A6A6A] flex items-center justify-center text-[#333333] hover:bg-gray-100 transition-colors"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 18l6-6-6-6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}

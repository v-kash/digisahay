import React from "react";
import AboutHero from "../components/About/AboutHero";
import IndustriesSection from "../components/About/IndustriesSection";
import FoundationSection from "../components/About/FoundationSection";
import CtaSection from "../components/Home/CtaSection";

function About() {
  return (
    <div>
      <AboutHero />
      <IndustriesSection />
      <FoundationSection />
      <CtaSection />
    </div>
  );
}

export default About;

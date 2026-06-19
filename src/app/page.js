import AboutSection from "./components/Home/AboutSection";
import CtaSection from "./components/Home/CtaSection";
import FaqSection from "./components/Home/FaqSection";
import HeroSection from "./components/Home/HeroSection";
import LogoStrip from "./components/Home/LogoStrip";
import ProcessSection from "./components/Home/ProcessSection";
import ServicesSection from "./components/Home/ServicesSection";
import TestimonialSection from "./components/Home/TestimonialSection";
import WhyChooseUs from "./components/Home/WhyChooseUs";
export { metadata } from "@/app/metadata";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoStrip />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}

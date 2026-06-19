"use client";
import React, { useState, Suspense } from "react";
import ServicesHero from "../components/Service/ServicesHero";
import ServicesComparison from "../components/Service/ServicesComparison";
import ServiceFaqSection from "../components/Service/ServiceFaq";
import CtaSection from "../components/Home/CtaSection";
import ServicesTimeline from "../components/Service/ServicesTimeline";

function ServicePage() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };
  return (
    <div>
      <ServicesHero onServiceSelect={handleServiceSelect} />
      <ServicesTimeline />
      <Suspense fallback={<div>Loading...</div>}>
        <ServicesComparison selectedService={selectedService} />
      </Suspense>
      <ServiceFaqSection />
      <CtaSection />
    </div>
  );
}

export default ServicePage;

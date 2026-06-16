import React from "react";

import CtaSection from "../components/Home/CtaSection";
import ContactHero from "../components/contact/ContatHero";
import ContactSection from "../components/contact/ContactForm";
import BranchesSection from "../components/contact/BranchesSection";

function ContactPage() {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <BranchesSection />
      <CtaSection />
    </div>
  );
}

export default ContactPage;

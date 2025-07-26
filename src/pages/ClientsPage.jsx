import React from "react";
import ClientsPageHero from "@/components/sections/clientspage/ClientsPageHero";
import GovernmentClients from "@/components/sections/clientspage/GovernmentClients";
import CorporateClients from "@/components/sections/clientspage/CorporateClients";
import PartnershipProof from "@/components/sections/clientspage/PartnershipProof";
import ClientTestimonials from "@/components/sections/clientspage/ClientTestimonials";
import PartnershipCTA from "@/components/sections/clientspage/PartnershipCTA";

// Data for the components, structured for clarity
const pageData = {
  hero: {
    headline:
      "Trusted by India's Leading Infrastructure Companies & Government Agencies",
    body: "Our reputation is built on the trust placed in us by a distinguished list of clients. We are proud to be registered contractors and trusted subcontractors for government agencies like Indian Railways, NHAI, GAIL, and ONGC, as well as corporate giants like L&T and TATA. These partnerships are a testament to our professional integrity and our consistent delivery of high-quality results.",
    cta: "Become Our Next Valued Partner",
  },
  governmentClients: {
    title: "Trusted Government & Public Sector Partners",
    logos: ["Indian Railways", "NHAI", "GAIL", "ONGC"],
  },
  corporateClients: {
    title: "Leading Corporate & Private Sector Clients",
    logos: ["L&T", "TATA"],
  },
  partnershipProof: {
    stats: [
      { label: "Years of Partnership with Industry Leaders", value: "15+" },
      { label: "Successful High-Value Projects", value: "100+" },
      { label: "Registered Government Contractor", value: "Certified" },
    ],
  },
  testimonials: {
    title: "What Our Partners Say",
  },
  cta: {
    title: "Let's Build a Lasting Partnership",
    cta: "Become Our Next Valued Partner",
  },
};

const ClientsPage = () => {
  return (
    <div>
      <ClientsPageHero
        headline={pageData.hero.headline}
        body={pageData.hero.body}
        cta={pageData.hero.cta}
      />
      <GovernmentClients
        title={pageData.governmentClients.title}
        logos={pageData.governmentClients.logos}
      />
      <CorporateClients
        title={pageData.corporateClients.title}
        logos={pageData.corporateClients.logos}
      />
      <PartnershipProof stats={pageData.partnershipProof.stats} />
      <ClientTestimonials title={pageData.testimonials.title} />
      <PartnershipCTA title={pageData.cta.title} cta={pageData.cta.cta} />
    </div>
  );
};

export default ClientsPage;

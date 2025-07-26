import { ClientLogosSection } from "@/components/sections/homepage/ClientLogosSection";
import FinalCTASection from "@/components/sections/homepage/FinalCTASection";
import HomepageHero from "@/components/sections/homepage/HomepageHeroSection";
import ProjectsShowcaseSection from "@/components/sections/homepage/ProjectsShowcaseSection";
import ServicesHighlightSection from "@/components/sections/homepage/ServicesHighlightSection";
import ValuePropositionSection from "@/components/sections/homepage/ValuePropositionSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <HomepageHero />
      <ClientLogosSection />
      <ServicesHighlightSection />
      <ValuePropositionSection />
      <ProjectsShowcaseSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;

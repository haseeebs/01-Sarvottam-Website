import React from 'react';
import { ClientLogosSection } from '@/components/sections/homepage/ClientLogosSection';
import FinalCTASection from '@/components/sections/homepage/FinalCTASection';
import HomepageHero from '@/components/sections/homepage/HomepageHeroSection';
import ProjectsShowcaseSection from '@/components/sections/homepage/ProjectsShowcaseSection';
import ServicesHighlightSection from '@/components/sections/homepage/ServicesHighlightSection';
import ValuePropositionSection from '@/components/sections/homepage/ValuePropositionSection';
import heroImage1 from '@/assets/images/Hero-image-1.jpg';

const HomePage = () => {
  return (
    <>
      <HomepageHero
        headline='Pioneering Trenchless Technology in India for Over 15 Years'
        body='For over 15 years, Sarvottam Enterprises has been the trusted partner...'
        cta='Request a Quote'
        imageSrc={heroImage1}
        imageAlt='Trenchless Technology Project'
      />
      <ClientLogosSection />
      <ServicesHighlightSection />
      <ValuePropositionSection />
      <ProjectsShowcaseSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;

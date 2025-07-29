import React from 'react';
import { ClientLogosSection } from '@/components/sections/homepage/ClientLogosSection';
import HomepageHero from '@/components/sections/homepage/HomepageHeroSection';
import ProjectsShowcaseSection from '@/components/sections/homepage/ProjectsShowcaseSection';
import ServicesHighlightSection from '@/components/sections/homepage/ServicesHighlightSection';
import ValuePropositionSection from '@/components/sections/homepage/ValuePropositionSection';
import heroImage1 from '@/assets/images/Hero-image-2.jpg';
import WhyChooseUs from '@/components/sections/servicepage/WhyChooseUs';
import CtaSection from '@/components/sections/CTASection';

const splitSectionContent = {
  title: 'Precision and Safety for Critical Corridors',
  // Passing the highlights array to the body prop for a list view
  body: [
    'Minimal Disruption to active transport corridors.',
    'Advanced techniques for hard rock and unstable soil.',
    'Uncompromising commitment to safety and compliance.',
  ],
};

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

      <WhyChooseUs
        title={splitSectionContent.title}
        body={splitSectionContent.body}
      />

      <ValuePropositionSection />
      <ProjectsShowcaseSection />
      <CtaSection />
    </>
  );
};

export default HomePage;

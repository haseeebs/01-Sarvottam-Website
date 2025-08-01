import React from 'react';
import HomepageHero from '@/components/sections/homepage/HomepageHeroSection';
import ValuePropositionSection from '@/components/sections/homepage/ValuePropositionSection';
import heroImage1 from '@/assets/images/Hero-image-2.jpg';
import CTA from '@/components/common/CTA';
import ClientLogosNew from '@/components/common/ClientLogos';
import ServiceSection from '@/components/common/ServiceSection';
import ExpertiseHighlights from '@/components/common/ExpertiseHighlights';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import { services } from '@/data/projectData';

const HomePage = () => {
  return (
    <>
      <HomepageHero
        headline='The Expertise to Cross Any Obstacle. The Machinery to Guarantee It.'
        body='Your Trusted Partner for High-Stakes Government & Private Infrastructure Projects.'
        cta='Request a Quote'
        imageSrc={heroImage1}
        imageAlt='Trenchless Technology Project'
      />
      <ClientLogosNew layout='marquee' />

      <ServiceSection services={services} />
      <ExpertiseHighlights />

      <ValuePropositionSection />
      <ProjectShowcaseSection />
      <CTA
        variant='image-left'
        title='Ready to Discuss Your Next Infrastructure Challenge?'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.'
        buttonText='Request a Quote'
        buttonLink='/contact?subject=QuoteRequest'
        buttonVariant='primary'
      />
    </>
  );
};

export default HomePage;

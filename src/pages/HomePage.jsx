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
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <HomepageHero
        body='Your Trusted Partner for High-Stakes Government & Private Infrastructure Projects.'
        cta='Request a Project Quote'
        imageSrc={heroImage1}
        imageAlt='Trenchless Technology Project'
      >
        The Expertise to Cross Any Obstacle. The{' '}
        <Link to='/equipment'>
          <i className='hover:text-my-accent underline'>Machinery</i>
        </Link>{' '}
        to Guarantee It.
      </HomepageHero>
      <ClientLogosNew layout='marquee' />

      <ServiceSection services={services} />
      <ExpertiseHighlights />

      {/* <ValuePropositionSection />  */}
      <ProjectShowcaseSection />
      <CTA
        variant='image-left'
        title='Ready to Discuss Your Next Infrastructure Challenge?'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.'
        buttonText='Explore Our Projects'
        buttonLink='/contact?subject=QuoteRequest'
        buttonVariant='primary'
      />
    </>
  );
};

export default HomePage;

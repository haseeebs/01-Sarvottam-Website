import React from 'react';
import HomepageHero from '@/components/sections/homepage/HomepageHeroSection';
import ProjectsShowcaseSection from '@/components/sections/homepage/ProjectsShowcaseSection';
import ServicesHighlightSection from '@/components/sections/homepage/ServicesHighlightSection';
import ValuePropositionSection from '@/components/sections/homepage/ValuePropositionSection';
import heroImage1 from '@/assets/images/Hero-image-2.jpg';
import boxpushingImg from '@/assets/images/Box-pushing.jpg';
import pipelineImg from '@/assets/images/NormalImg-1.jpg';
import CTA from '@/components/sections/CTA';
import ClientLogosNew from '@/components/sections/ClientLogos';

const services = [
  {
    title: 'Tunnel & Pipeline Crossing',
    link: '/services/pipeline-crossing',
    imgSrc: pipelineImg,
    imgAlt: 'Specialized equipment for tunnel and pipeline crossing.',
  },
  {
    title: 'Box Pushing & Pipe Jacking',
    link: '/services/pushing-jacking',
    imgSrc: boxpushingImg,
    imgAlt: 'Hydraulic jacks for box pushing and pipe jacking projects.',
  },
  {
    title: 'Precision Boring Services',
    link: '/services/auger-boring',
    imgSrc:
      'https://images.unsplash.com/photo-1593349122513-c357671fad43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    imgAlt: 'Auger boring machine for precision underground services.',
  },
];

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
      <ClientLogosNew layout='marquee' />
      <ServicesHighlightSection services={services} />

      <ValuePropositionSection />
      <ProjectsShowcaseSection />
      <CTA
        variant='image-left'
        title='Ready to Discuss Your Next Infrastructure Challenge?'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.'
        buttonText='Request a Quote'
        buttonLink='/contact?subject=QuoteRequest'
        buttonStyle='solid-accent'
        // imgUrl prop yahan de sakte hain, warna default image istemal hogi
      />
    </>
  );
};

export default HomePage;

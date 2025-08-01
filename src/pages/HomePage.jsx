import React from 'react';
import { Link } from 'react-router-dom';
import HomepageHero from '@/components/sections/homepage/HomepageHeroSection';
import CTA from '@/components/common/CTA';
import ClientLogosNew from '@/components/common/ClientLogos';
import ServiceSection from '@/components/common/ServiceSection';
import ExpertiseHighlights from '@/components/common/ExpertiseHighlights';
import { services } from '@/data/projectData';
import heroImage1 from '@/assets/images/Hero-image-2.jpg';
import { Landmark, FileText, Mountain } from 'lucide-react';
import KeyBenefits from '@/components/common/KeyBenefits';

const HomePage = () => {
  const whyChooseUsData = {
    title: 'The Sarvottam Advantage',
    description:
      'Why leading organizations trust us with their most critical infrastructure projects.',
    features: [
      {
        name: 'Proven Project Expertise',
        description:
          "For over 15 years, we have delivered complex projects for India's leading infrastructure firms and government bodies like L&T, MEIL, and Indian Railways. Our track record is a testament to our reliability.",
        Icon: Landmark,
      },
      {
        name: 'Government & Tender Specialists',
        description:
          'We possess deep experience navigating the complexities of government tenders, ensuring we meet the most stringent technical and compliance requirements for public sector projects.',
        Icon: FileText,
      },
      {
        name: 'Mastery Over Tough Terrains',
        description:
          'Our true strength lies in executing trenchless projects in challenging conditions, from hard rock to water-logged areas. We have the machinery and the know-how to cross any obstacle.',
        Icon: Mountain,
      },
    ],
  };

  return (
    <>
      <HomepageHero
        body='Your Trusted Partner for High-Stakes Government & Private Infrastructure Projects.'
        cta='Request a Project Quote'
        imageSrc={heroImage1}
        ctaLink='/contact'
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

      <KeyBenefits
        title={whyChooseUsData.title}
        description={whyChooseUsData.description}
        features={whyChooseUsData.features}
      />

      <CTA
        variant='image-left'
        title='Ready to Discuss Your Next Infrastructure Challenge?'
        description="With 15 years of proven experience, we are equipped to handle the most demanding projects. Let's build the future together."
        buttonText='Get In Touch'
        buttonLink='/contact'
        buttonVariant='primary'
      />
    </>
  );
};

export default HomePage;

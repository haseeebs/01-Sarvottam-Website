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
import { getYearsOfExperience } from '@/utils/getYearsOfExperience';

const HomePage = () => {
  const whyChooseUsData = {
    title: 'The Sarvottam Advantage',
    description:
      'Why leading organizations and government bodies trust us with their most critical infrastructure projects.',
    features: [
      {
        name: '15+ Years of Proven Expertise',
        description:
          'Our extensive portfolio includes complex projects for industry leaders like L&T, MEIL, and Indian Railways, demonstrating our reliability in high-stakes environments.',
        Icon: Landmark,
      },
      {
        name: 'Government & Tender Specialists',
        description:
          'We possess deep experience navigating the rigorous technical and compliance requirements of government tenders, ensuring project success from bid to completion.',
        Icon: FileText,
      },
      {
        name: 'Mastery Over Challenging Terrains',
        description:
          'Our core strength is executing trenchless projects in difficult geological conditions, including hard rock, water-logged areas, and dense urban corridors. We overcome obstacles that others cannot.',
        Icon: Mountain,
      },
    ],
  };

  return (
    <>
      <HomepageHero
        body='Your trusted partner in trenchless technology and specialized underground engineering for India’s most demanding infrastructure projects.'
        cta='Request a Project Consultation'
        imageSrc={heroImage1}
        ctaLink='/contact'
        imageAlt='Trenchless technology project in action'
      >
        Pioneering Underground Infrastructure for Over {getYearsOfExperience()}{' '}
        Years.
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
        description={`With ${getYearsOfExperience()} years of proven experience, we are equipped to handle the most demanding projects. Let's build the future together.`}
        buttonText='Get In Touch'
        buttonLink='/contact'
        buttonVariant='primary'
      />
    </>
  );
};

export default HomePage;

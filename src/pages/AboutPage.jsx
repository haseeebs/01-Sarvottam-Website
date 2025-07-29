import React from 'react';
import AboutPageHero from '@/components/sections/aboutpage/AboutPageHero';
import CompanyPrinciples from '@/components/sections/aboutpage/CompanyPrinciples';
import ExpertiseHighlights from '@/components/sections/aboutpage/ExpertiseHighlights';
import ClientLogos from '@/components/sections/aboutpage/ClientLogos';
import LogoCloud from '@/components/sections/LogoCloud';
import LogoCloudWithHeading from '@/components/sections/LogoCloudWithHeading';
import heroImage1 from '@/assets/images/Hero-image-1.jpg';
import TeamImg from '@/assets/images/TeamImg.jpg';
import CtaSection from '@/components/sections/CTASection';

const AboutPage = () => {
  const heroContent = {
    headline:
      'Our Legacy: 15 Years of Trust, Determination, and Engineering Excellence',
    body: "Founded on the principles of 'Vishwas + dridh sankalp', Sarvottam Enterprises has spent 15 years building a legacy of reliability in the infrastructure sector. Our journey is defined by a commitment to solving the toughest underground challenges, specializing in projects that require deep expertise in crossing water bodies, hard rock, and unstable soil. As government-approved pipeline contractors, our skilled and experienced team is adept at navigating the complexities of government tenders and delivering results that meet the highest standards of quality and safety.",
    cta: 'Discuss Your Project Requirements',
  };
  const principlesData = [
    {
      title: 'Trust',
      description:
        'Building lasting partnerships on a foundation of reliability and transparency.',
    },
    {
      title: 'Determination',
      description:
        'Overcoming the most difficult challenges with unwavering commitment and perseverance.',
    },
    {
      title: 'Engineering Excellence',
      description:
        'Delivering superior quality and innovative solutions that set industry standards.',
    },
  ];

  const expertiseStats = [
    { value: '15+', label: 'Years Experience' },
    { value: 'Govt.', label: 'Approved Contractor' },
    { value: 'Tough', label: 'Terrains Mastered' },
    { value: '100%', label: 'Safety Compliance' },
  ];
  const clientLogosData = [
    {
      name: 'Larsen & Toubro',
      logoUrl: 'https://logo.clearbit.com/ltconstruction.com',
    },
    { name: 'GAIL', logoUrl: 'https://logo.clearbit.com/gailonline.com' },
    { name: 'Indian Oil', logoUrl: 'https://logo.clearbit.com/iocl.com' },
    { name: 'NTPC', logoUrl: 'https://logo.clearbit.com/ntpc.co.in' },
    {
      name: 'Reliance Industries',
      logoUrl: 'https://logo.clearbit.com/ril.com',
    },
  ];
  return (
    <>
      <AboutPageHero
        content={heroContent}
        imageUrl={heroImage1}
        imageAlt='Senior engineer at a project site'
      />
      <CompanyPrinciples principles={principlesData} />
      <ExpertiseHighlights stats={expertiseStats} />
      <ClientLogos
        title='Trusted By Industry Leaders'
        clients={clientLogosData}
      />
      <LogoCloud />
      <LogoCloudWithHeading />
      <CtaSection
        title="Let's Build the Future, Together."
        buttonText='Request a Quote'
        buttonLink='#'
        imgUrl={TeamImg}
      />
    </>
  );
};
export default AboutPage;

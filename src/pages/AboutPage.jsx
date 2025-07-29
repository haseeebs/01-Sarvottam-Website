import React from 'react';
import AboutPageHero from '@/components/sections/aboutpage/AboutPageHero';
import CompanyPrinciples from '@/components/sections/aboutpage/CompanyPrinciples';
import CompanyHistory from '@/components/sections/aboutpage/CompanyHistory';
import ExpertiseHighlights from '@/components/sections/aboutpage/ExpertiseHighlights';
import ClientLogos from '@/components/sections/aboutpage/ClientLogos';
import AboutPageCTA from '@/components/sections/aboutpage/AboutPageCTA';

const AboutPage = () => {
  const heroContent = {
    headline:
      'Our Legacy: 15 Years of Trust, Determination, and Engineering Excellence',
    body: "Founded on the principles of 'Vishwas + dridh sankalp', Sarvottam Enterprises has spent 15 years building a legacy of reliability in the infrastructure sector. Our journey is defined by a commitment to solving the toughest underground challenges, specializing in projects that require deep expertise in crossing water bodies, hard rock, and unstable soil. As government-approved pipeline contractors, our skilled and experienced team is adept at navigating the complexities of government tenders and delivering results that meet the highest standards of quality and safety.",
    cta: 'Discuss Your Project Requirements',
  };
  const principlesData = [
    {
      title: 'Vishwas (Trust)',
      description:
        'Building lasting partnerships on a foundation of reliability and transparency.',
    },
    {
      title: 'Dridh Sankalp (Determination)',
      description:
        'Overcoming the most difficult challenges with unwavering commitment and perseverance.',
    },
    {
      title: 'Engineering Excellence',
      description:
        'Delivering superior quality and innovative solutions that set industry standards.',
    },
  ];
  const historyPointsData = [
    '2009: Sarvottam Enterprises was founded with a mission to tackle complex infrastructure projects.',
    '2012: Completed our first major river-crossing project, establishing our expertise.',
    '2015: Became a government-approved contractor, opening doors to large-scale public works.',
    '2020: Expanded services to include hard rock drilling and unstable soil solutions.',
    'Present: Celebrating 15 years of trust, growth, and engineering success across the nation.',
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
        imageUrl='https://images.unsplash.com/photo-1581092921539-a0a4556551b8?q=80&w=1974&auto=format&fit=crop'
        imageAlt='Senior engineer at a project site'
      />
      <CompanyPrinciples principles={principlesData} />
      <CompanyHistory
        title='Our 15-Year Journey'
        historyPoints={historyPointsData}
        imageUrl='https://images.unsplash.com/photo-1521790797524-2c4094a41312?q=80&w=2070&auto=format&fit=crop'
        imageAlt='A visual timeline of company projects from past to present'
      />
      <ExpertiseHighlights stats={expertiseStats} />
      <ClientLogos
        title='Trusted By Industry Leaders'
        clients={clientLogosData}
      />
      <AboutPageCTA
        title="Let's Build the Future, Together."
        buttonText='Request a Quote'
      />
    </>
  );
};
export default AboutPage;

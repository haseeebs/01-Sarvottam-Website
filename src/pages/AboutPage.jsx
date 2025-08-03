import React from 'react';
import AboutPageHero from '@/components/sections/aboutpage/AboutPageHero';
import ExpertiseHighlights from '@/components/common/ExpertiseHighlights';
import CTA from '@/components/common/CTA';
import ClientLogosNew from '@/components/common/ClientLogos';
import { getYearsOfExperience } from '@/utils/getYearsOfExperience';

const AboutPage = () => {
  const heroContent = {
    headline: `Our Legacy: ${getYearsOfExperience()} Years of Trust, Determination, and Engineering Excellence`,
    cta: 'View Our Project Portfolio',
    ctaHref: '/projects',
  };

  return (
    <>
      <AboutPageHero
        content={heroContent}
        imageUrl={'https://i.ibb.co/MkLSqzxX/hero-img-1.webp'}
        imageAlt='Senior engineer at a project site'
      />
      <ExpertiseHighlights />
      <ClientLogosNew grayscale />
      <CTA
        variant='image-left'
        title="Let's Build the Future, Together."
        description='Our combination of a skilled team, owned specialized machinery, and proven experience makes us the ideal partner for your next infrastructure project. Discover how our capabilities can drive your success.'
        buttonText='Explore Our Services'
        buttonLink='/services/hdd'
        buttonVariant='primary'
        imgUrl={'https://i.ibb.co/zvy6JMz/team-img.webp'}
      />
    </>
  );
};
export default AboutPage;

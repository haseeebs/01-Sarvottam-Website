import React from 'react';
import AboutPageHero from '@/components/sections/aboutpage/AboutPageHero';
import ExpertiseHighlights from '@/components/common/ExpertiseHighlights';
import heroImage1 from '@/assets/images/Hero-image-1.jpg';
import TeamImg from '@/assets/images/TeamImg.jpg';
import CTA from '@/components/common/CTA';
import ClientLogosNew from '@/components/common/ClientLogos';

const AboutPage = () => {
  const heroContent = {
    headline:
      'Our Legacy: 15 Years of Trust, Determination, and Engineering Excellence',
    cta: 'View Our Project Portfolio',
  };

  return (
    <>
      <AboutPageHero
        content={heroContent}
        imageUrl={heroImage1}
        imageAlt='Senior engineer at a project site'
      />
      <ExpertiseHighlights />
      <ClientLogosNew grayscale />
      <CTA
        variant='image-left'
        title="Let's Build the Future, Together."
        buttonText='Discover Our Services'
        buttonLink='#'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.'
        buttonVariant='primary'
        imgUrl={TeamImg}
      />
    </>
  );
};
export default AboutPage;

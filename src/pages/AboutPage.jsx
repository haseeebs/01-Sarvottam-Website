import React from 'react';
import AboutPageHero from '@/components/sections/aboutpage/AboutPageHero';
import ExpertiseHighlights from '@/components/sections/aboutpage/ExpertiseHighlights';
import heroImage1 from '@/assets/images/Hero-image-1.jpg';
import TeamImg from '@/assets/images/TeamImg.jpg';
import CTA from '@/components/sections/CTA';
import ClientLogosNew from '@/components/sections/ClientLogos';

const AboutPage = () => {
  const heroContent = {
    headline:
      'Our Legacy: 15 Years of Trust, Determination, and Engineering Excellence',
    body: "Founded on the principles of 'Vishwas + dridh sankalp', Sarvottam Enterprises has spent 15 years building a legacy of reliability in the infrastructure sector. Our journey is defined by a commitment to solving the toughest underground challenges, specializing in projects that require deep expertise in crossing water bodies, hard rock, and unstable soil. As government-approved pipeline contractors, our skilled and experienced team is adept at navigating the complexities of government tenders and delivering results that meet the highest standards of quality and safety.",
    cta: 'Discuss Your Project Requirements',
  };

  const expertiseStats = [
    { value: '15+', label: 'Years Experience' },
    { value: 'Govt.', label: 'Approved Contractor' },
    { value: 'Tough', label: 'Terrains Mastered' },
    { value: '100%', label: 'Safety Compliance' },
  ];

  return (
    <>
      <AboutPageHero
        content={heroContent}
        imageUrl={heroImage1}
        imageAlt='Senior engineer at a project site'
      />
      <ExpertiseHighlights stats={expertiseStats} />
      <ClientLogosNew grayscale />
      <CTA
        variant='image-left'
        title="Let's Build the Future, Together."
        buttonText='Request a Quote'
        buttonLink='#'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.'
        buttonStyle='solid-accent'
        imgUrl={TeamImg}
      />
    </>
  );
};
export default AboutPage;

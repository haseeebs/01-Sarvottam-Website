import React from 'react';
import HomepageHero from '@/components/sections/homepage/HomepageHeroSection';
import CTA from '@/components/common/CTA';
import ClientLogosNew from '@/components/common/ClientLogos';
import ServiceSection from '@/components/common/ServiceSection';
import ExpertiseHighlights from '@/components/common/ExpertiseHighlights';
import { services } from '@/data/projectData';
import { Landmark, FileText, Mountain } from 'lucide-react';
import KeyBenefits from '@/components/common/KeyBenefits';
import { getYearsOfExperience } from '@/utils/getYearsOfExperience';
import { galleryImages } from '@/data/galleryData'; // galleryImages ko import karein
import { Helmet } from 'react-helmet-async';
// import ImageGalleryCarousel from '@/components/common/ImageGalleryCarousel'; // Iski ab zaroorat nahi

const HomePage = () => {
  const years = getYearsOfExperience();
  const whyChooseUsData = {
    title: 'The Sarvottam Advantage',
    description:
      'Why leading organizations and government bodies trust us with their most critical infrastructure projects.',
    features: [
      {
        name: `Over ${getYearsOfExperience()} Years of Proven Expertise`,
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
      <Helmet>
        <title>
          Sarvottam Enterprises: Trenchless Technology & Pipeline Experts
        </title>
        <meta
          name='description'
          content={`With over ${years} years of experience, Sarvottam Enterprises is your trusted partner for HDD, box pushing, and specialized underground engineering services in India.`}
        />
        <link rel='canonical' href='https://www.your-domain.com/' />
      </Helmet>
      <HomepageHero
        body='Your trusted partner in trenchless technology and specialized underground engineering for India’s most demanding infrastructure projects.'
        cta='Request a Project Consultation'
        ctaLink='/contact'
        // Naya prop pass karein
        carouselImages={galleryImages}
        // Purane props (imageSrc, imageAlt) hata dein ya comment kar dein
        // imageSrc={heroImage1}
        // imageAlt='Trenchless technology project in action'
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

      {/* Yeh section ab yahan nahi rahega */}
      {/* 
      <ImageGalleryCarousel
        images={galleryImages}
        title='Glimpses of Our Work'
        description='A visual journey through our diverse projects, showcasing our commitment to excellence and precision engineering on the ground.'
      /> 
      */}

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

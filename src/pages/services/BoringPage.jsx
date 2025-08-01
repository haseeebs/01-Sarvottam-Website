import React from 'react';

import ServiceBreakdown from '@/components/common/ServiceBreakdown';
import KeyBenefits from '@/components/common/KeyBenefits';

import { GitBranchPlus, Mountain, Gauge } from 'lucide-react';
import CTA from '@/components/common/CTA';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData';

const BoringPage = () => {
  const boringProjects = allProjects.filter((p) => p.category === 'Boring');

  const heroContent = {
    headline: 'Precision Auger Boring & Pipe Ramming Services',
    body: 'Our auger boring and pipe ramming services provide an excellent trenchless solution for installing steel casing pipes underground. This method is ideal for working under roads, railways, and other sensitive areas where minimal surface disruption is required.',
    cta: 'Get a Quote for Your Boring Project',
    ctaLink: '/contact?subject=BoringProjectQuote',
  };

  const boringTypesContent = {
    service1: {
      title: 'Auger Boring',
      description:
        'A proven method for installing steel casing pipes in various ground conditions, from common soil to soft rock. Our high-grade equipment ensures great accuracy.',
    },
    service2: {
      title: 'Pipe Ramming',
      description:
        'When the ground is rocky (cobbles/boulders), pipe ramming is an excellent choice. In this technique, a pneumatic hammer drives the pipe into the ground, displacing obstacles in its path. It is particularly useful for short-distance crossings.',
    },
    imageSrc:
      'https://images.unsplash.com/photo-1619463261749-51d2047a5137?q=80&w=2940&auto=format&fit=crop',
  };

  const keyBenefitsContent = {
    title: 'Why Choose Our Boring Services?',
    features: [
      {
        name: 'Minimal Surface Disruption',
        description:
          'Our trenchless methods minimize the impact on traffic, businesses, and the environment.',
        Icon: GitBranchPlus,
      },
      {
        name: 'Versatile Ground Capability',
        description:
          'We are equipped to handle all types of ground conditions, from soft soil to hard rock.',
        Icon: Mountain,
      },
      {
        name: 'High Accuracy & Control',
        description:
          'With advanced guidance systems, we control the line and grade of the pipeline with excellent precision.',
        Icon: Gauge,
      },
    ],
  };

  const CTAContent = {
    title: 'Have a Boring Project in Mind?',
    buttonText: 'Inquire About Boring service',
    buttonLink: '/contact?subject=BoringInquiry',
  };

  return (
    <div>
      <PageHero
        intent='light'
        headline={heroContent.headline}
        body={heroContent.body}
        cta={heroContent.cta}
        ctaLink={heroContent.ctaLink}
      />
      <ServiceBreakdown
        service1={boringTypesContent.service1}
        service2={boringTypesContent.service2}
        imageSrc={boringTypesContent.imageSrc}
      />
      <KeyBenefits
        title={keyBenefitsContent.title}
        features={keyBenefitsContent.features}
      />
      <ProjectShowcaseSection
        title={'Specialized Boring & Drilling Projects'}
        projects={boringProjects}
      />
      <CTA
        title={CTAContent.title}
        buttonText={CTAContent.buttonText}
        buttonLink={CTAContent.buttonLink}
      />
    </div>
  );
};

export default BoringPage;

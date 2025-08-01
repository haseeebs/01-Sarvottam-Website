import React from 'react';

import KeyBenefits from '@/components/common/KeyBenefits';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import CTA from '@/components/common/CTA';

// Lucide React se Icons import karein
import { GitMerge, Waves, ShieldCheck, Minimize2 } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData';
import { hddContent } from '@/data/serviceData';
import ServiceBreakdown from '@/components/common/ServiceBreakdown';

const HDDPage = () => {
  const hddProjects = allProjects.filter((p) => p.category === 'HDD');

  const heroContent = {
    headline: 'Horizontal Directional Drilling (HDD) Specialists',
    body: 'Our advanced HDD services provide a steerable, trenchless solution for installing pipelines and conduits under sensitive obstacles like rivers, highways, and railways. We ensure pinpoint accuracy with minimal environmental disruption.',
    cta: 'Get a Quote for Your HDD Project',
    ctaLink: '/contact?subject=HDDProjectQuote',
  };

  const keyBenefitsContent = {
    title: 'Advantages of Our HDD Services',
    features: [
      {
        name: 'River and Waterbody Crossings',
        description:
          'Safely install pipelines deep beneath rivers and other water bodies without affecting marine life or water flow.',
        Icon: Waves,
      },
      {
        name: 'Minimal Surface Disruption',
        description:
          'Ideal for urban and environmentally sensitive areas, HDD requires only small entry/exit points, preserving the landscape.',
        Icon: Minimize2,
      },
      {
        name: 'Precision and Control',
        description:
          'Our advanced guidance systems allow for precise, steerable drilling paths, avoiding underground obstacles with ease.',
        Icon: GitMerge,
      },
      {
        name: 'Enhanced Project Safety',
        description:
          'By eliminating the need for deep, open trenches, we significantly reduce risks to workers and the public.',
        Icon: ShieldCheck,
      },
    ],
  };

  const CtaContent = {
    title: 'Have a Complex Crossing Challenge?',
    buttonText: 'Consult with our HDD Experts',
    buttonLink: '/contact?subject=HDDInquiry',
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
        service1={hddContent.service1}
        service2={hddContent.service2}
        imageSrc={hddContent.imageSrc}
      />
      <KeyBenefits
        title={keyBenefitsContent.title}
        features={keyBenefitsContent.features}
      />
      <ProjectShowcaseSection
        title={'Featured HDD Projects'}
        projects={hddProjects}
      />
      <CTA
        title={CtaContent.title}
        buttonText={CtaContent.buttonText}
        buttonLink={CtaContent.buttonLink}
      />
    </div>
  );
};

export default HDDPage;

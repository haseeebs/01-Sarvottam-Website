import React from 'react';

import KeyBenefits from '@/components/common/KeyBenefits';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import CTA from '@/components/common/CTA';

// Lucide React se Icons import karein
import { TrainFrontTunnel, Layers, Droplets, Flame } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData';
import { crossingContent } from '@/data/serviceData';
import ServiceBreakdown from '@/components/common/ServiceBreakdown';

const CrossingPage = () => {
  const crossingProjects = allProjects.filter((p) => p.category === 'Crossing');

  const heroContent = {
    headline: 'Expert Tunnel & Pipeline Crossing Services',
    body: 'We are premier railway and highway line crossing contractors, specializing in trenchless methods that preserve surface integrity and ensure project timelines. From busy urban corridors to remote terrains, we deliver with precision.',
    cta: 'Get a Quote for Your Crossing Project',
    ctaLink: '/contact?subject=CrossingProjectQuote',
  };

  const keyBenefitsContent = {
    title: 'Our Crossing Capabilities',
    features: [
      {
        name: 'Tunnel Crossing',
        description:
          'Creating stable and secure underpasses for railways and highways using advanced boring and jacking technologies.',
        Icon: TrainFrontTunnel,
      },
      {
        name: 'Sewer Line Crossing',
        description:
          'Installing critical sewer infrastructure beneath active corridors with minimal environmental and community impact.',
        Icon: Layers, // Yahan 'Layers' icon istemal kiya gaya hai
      },
      {
        name: 'Water Line Crossing',
        description:
          'Reliable installation of main water lines across challenging terrains like rivers, canals, and highways.',
        Icon: Droplets,
      },
      {
        name: 'Gas Line Installation',
        description:
          'Safe and compliant installation of high-pressure gas pipelines under sensitive and high-traffic areas.',
        Icon: Flame,
      },
    ],
  };

  // 6. Data for PrimaryCTA (CrossingServicesCTA ka naya version)
  const CtaContent = {
    title: 'Have a Critical Crossing Project?',
    buttonText: 'Inquire About Crossing service',
    buttonLink: '/contact?subject=CrossingInquiry',
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
        service1={crossingContent.service1}
        service2={crossingContent.service2}
        imageSrc={crossingContent.imageSrc}
      />
      <KeyBenefits
        title={keyBenefitsContent.title}
        features={keyBenefitsContent.features}
      />
      <ProjectShowcaseSection
        title={'Our Proven Experience in Crossing Projects'}
        projects={crossingProjects}
      />
      <CTA
        title={CtaContent.title}
        buttonText={CtaContent.buttonText}
        buttonLink={CtaContent.buttonLink}
      />
    </div>
  );
};

export default CrossingPage;

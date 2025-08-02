import React from 'react';
import ServiceBreakdown from '@/components/common/ServiceBreakdown';
import KeyBenefits from '@/components/common/KeyBenefits';

import { Users, Wrench, Crosshair } from 'lucide-react';
import CTA from '@/components/common/CTA';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData';
import { boxpushingContent } from '@/data/serviceData';

const PushingJackingPage = () => {
  const pushingJackingProjects = allProjects.filter(
    (p) => p.category === 'Pushing & Jacking',
  );

  const heroContent = {
    headline: 'Advanced Pipe Jacking & Box Pushing Contractors',
    body: 'We engineer and execute heavy-duty underground crossings with precision. Our services are critical for Railway Under-Bridges (RUBs), culverts, and large-diameter pipelines, all installed with minimal surface disruption.',
    cta: 'Plan Your Pushing & Jacking Project',
    ctaLink: '/contact?subject=PushingJackingProject',
  };

  // Data for KeyBenefits
  const keyBenefitsContent = {
    title: 'Our Core Strengths',
    features: [
      {
        name: 'Experienced Team',
        description:
          'Our crew has decades of combined experience in executing complex trenchless projects safely and efficiently.',
        Icon: Users,
      },
      {
        name: 'Powerful Machinery',
        description:
          'We utilize a modern fleet of high-capacity hydraulic jacks and specialized equipment to handle any soil condition.',
        Icon: Wrench,
      },
      {
        name: 'Precise Execution',
        description:
          'Leveraging advanced guidance systems, we ensure millimeter-level accuracy for all pipeline and box installations.',
        Icon: Crosshair,
      },
    ],
  };

  // Data for CTA
  const CTAContent = {
    title: 'Ready to Execute a Demanding Project?',
    buttonText: 'Inquire About Pushing & Jacking service',
    buttonLink: '/contact?subject=PushingJackingInquiry',
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
        service1={boxpushingContent.service1}
        service2={boxpushingContent.service2}
        imageSrc={boxpushingContent.imageSrc}
      />
      <KeyBenefits
        title={keyBenefitsContent.title}
        features={keyBenefitsContent.features}
      />
      <ProjectShowcaseSection
        title={'Pushing & Jacking Projects in Action'}
        projects={pushingJackingProjects}
      />
      <CTA
        title={CTAContent.title}
        buttonText={CTAContent.buttonText}
        buttonLink={CTAContent.buttonLink}
      />
    </div>
  );
};

export default PushingJackingPage;

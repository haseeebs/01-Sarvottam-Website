import React from 'react';
import ServiceBreakdown from '@/components/common/ServiceBreakdown';
import KeyBenefits from '@/components/common/KeyBenefits';
import CTA from '@/components/common/CTA';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData';

import { jackPushingContent } from '@/data/serviceData';
import { Maximize, Layers, Droplets } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const JackPushingPage = () => {
  const jackPushingProjects = allProjects.filter(
    (p) => p.category === 'Jack Pushing',
  );

  const heroContent = {
    headline: 'Heavy-Duty Jack Pushing for Large Diameter Pipelines',
    body: 'We specialize in installing large diameter pipelines (600mm and above) for critical infrastructure like water supply, sewer networks, and lift irrigation projects using powerful jack pushing methods.',
    cta: 'Get a Quote for Your Pipeline Project',
    ctaLink: '/contact?subject=JackPushing-PipelineProject',
  };

  const keyBenefitsContent = {
    title: 'Why Choose Our Jack Pushing Service?',
    features: [
      {
        name: 'Handles Large Diameters',
        description:
          'Expertly managing pipe sizes from 600mm up to 3900mm and above for the most demanding projects.',
        Icon: Maximize,
      },
      {
        name: 'Ideal for Lift Irrigation',
        description:
          'Our core strength lies in executing large-scale Lift Irrigation projects across states like M.P., U.P., and Rajasthan.',
        Icon: Droplets,
      },
      {
        name: 'Multi-Utility Application',
        description:
          'Perfect for water supply (PHE, PWD), gas pipelines, and underground power cable protection.',
        Icon: Layers,
      },
    ],
  };

  const CtaContent = {
    title: 'Ready for a large-scale pipeline project?',
    buttonText: 'Contact Our Jack Pushing Team',
    buttonLink: '/contact?subject=JackPushingInquiry',
  };

  return (
    <div>
      <Helmet>
        <title>Heavy-Duty Jack Pushing Services | Sarvottam Enterprises</title>
        <meta name='description' content={heroContent.body} />
        <link
          rel='canonical'
          href='https://www.your-domain.com/services/jack-pushing'
        />
      </Helmet>
      <PageHero
        intent='light'
        headline={heroContent.headline}
        body={heroContent.body}
        cta={heroContent.cta}
        ctaLink={heroContent.ctaLink}
      />
      <ServiceBreakdown
        title='Our Jack Pushing Process'
        service1={jackPushingContent.service1}
        service2={jackPushingContent.service2}
        imageSrc={jackPushingContent.imageSrc}
      />
      <KeyBenefits
        title={keyBenefitsContent.title}
        features={keyBenefitsContent.features}
      />
      <ProjectShowcaseSection
        title={'Featured Jack Pushing Projects'}
        projects={jackPushingProjects}
      />
      <CTA
        title={CtaContent.title}
        buttonText={CtaContent.buttonText}
        buttonLink={CtaContent.buttonLink}
      />
    </div>
  );
};

export default JackPushingPage;

import React from 'react';
import ServiceBreakdown from '@/components/common/ServiceBreakdown';
import KeyBenefits from '@/components/common/KeyBenefits';
import CTA from '@/components/common/CTA';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData';
import { boxPushingContent } from '@/data/serviceData';
import { Train, ShieldCheck, Construction } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BoxPushingPage = () => {
  const boxPushingProjects = allProjects.filter(
    (p) => p.category === 'Box Pushing',
  );

  const heroContent = {
    headline: 'Specialized Box Pushing for Railway Crossings',
    body: 'We are leaders in constructing underpasses beneath active railway lines using advanced box pushing technology, ensuring project continuity without disrupting national rail networks.',
    cta: 'Plan Your Railway Crossing Project',
    ctaLink: '/contact?subject=BoxPushing-RailwayProject',
  };

  const keyBenefitsContent = {
    title: 'Advantages of Our Box Pushing Method',
    features: [
      {
        name: 'Railway Approved Methods',
        description:
          'Our techniques meet the stringent safety and quality standards set by Indian Railways for under-bridge constructions.',
        Icon: Train,
      },
      {
        name: 'Zero Traffic Disruption',
        description:
          'Eliminates the need to stop or divert train traffic, saving critical time and resources for the project.',
        Icon: ShieldCheck,
      },
      {
        name: 'Structural Safety & Durability',
        description:
          'We use high-strength pre-cast concrete boxes that ensure long-term durability and safety for underpasses.',
        Icon: Construction,
      },
    ],
  };

  const CtaContent = {
    title: 'Need a Railway Under-Bridge (RUB)?',
    buttonText: 'Consult Our Box Pushing Experts',
    buttonLink: '/contact?subject=BoxPushingInquiry',
  };

  return (
    <div>
      <Helmet>
        <title>
          Specialized Box Pushing for Railway Crossings | Sarvottam Enterprises
        </title>
        <meta name='description' content={heroContent.body} />
        <link
          rel='canonical'
          href='https://www.your-domain.com/services/box-pushing'
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
        title='How We Execute Railway Crossings'
        service1={boxPushingContent.service1}
        service2={boxPushingContent.service2}
        imageSrc={boxPushingContent.imageSrc}
      />
      <KeyBenefits
        title={keyBenefitsContent.title}
        features={keyBenefitsContent.features}
      />
      <ProjectShowcaseSection
        title={'Featured Box Pushing Projects'}
        projects={boxPushingProjects}
      />
      <CTA
        title={CtaContent.title}
        buttonText={CtaContent.buttonText}
        buttonLink={CtaContent.buttonLink}
      />
    </div>
  );
};

export default BoxPushingPage;

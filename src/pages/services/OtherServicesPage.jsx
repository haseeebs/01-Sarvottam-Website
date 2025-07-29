import React from 'react';
import ServicePageHero from '@/components/sections/otherservicepage/ServicePageHero';
import SupportServicesGrid from '@/components/sections/otherservicepage/SupportServicesGrid';
import IntegratedApproach from '@/components/sections/otherservicepage/IntegratedApproach';
import PrimaryCTA from '@/components/sections/otherservicepage/PrimaryCTA';
import CoreServicesLink from '@/components/sections/otherservicepage/CoreServicesLink';

// Data derived from the provided JSON content
const pageContent = {
  hero: {
    headline: 'Integrated Support Services for Turnkey Project Execution',
    body: 'To complement our core offerings, we provide essential support services that ensure a complete, end-to-end solution. This includes professional Shuttering, comprehensive Trenchless Technology consulting, and certified Welding services. Our integrated approach guarantees seamless project execution and reinforces our commitment to being a reliable, full-service partner for our clients.',
    cta: 'Inquire About Our Full Capabilities',
  },
  supportGrid: {
    title: 'Our Essential Support Services',
    cards: [
      {
        title: 'Professional Shuttering',
        icon: 'shuttering',
        description:
          'Providing robust and precise formwork to ensure structural integrity and shape for your projects.',
      },
      {
        title: 'Trenchless Tech Consulting',
        icon: 'consulting',
        description:
          'Expert guidance on non-invasive underground utility installation to minimize disruption and cost.',
      },
      {
        title: 'Certified Welding',
        icon: 'welding',
        description:
          'Ensuring structural soundness and durability with high-quality, certified welding for critical components.',
      },
    ],
  },
  integratedApproach: {
    subtitle:
      'Our integrated approach guarantees seamless project execution from start to finish.',
    title: 'Your Reliable, Full-Service Partner',
    // The body text is part of the component's default props, so it doesn't need to be passed here unless overridden.
  },
  primaryCTA: {
    title: "Let's Build Your Project, End-to-End.",
    buttonText: 'Inquire About Our Full Capabilities',
  },
  coreServices: {
    title: 'Explore Our Core Engineering Services',
    // The service cards are part of the component's default props.
  },
};

const OtherServicesPage = () => {
  return (
    <div>
      <ServicePageHero
        headline={pageContent.hero.headline}
        body={pageContent.hero.body}
        cta={pageContent.hero.cta}
      />
      <SupportServicesGrid
        title={pageContent.supportGrid.title}
        cards={pageContent.supportGrid.cards}
      />
      <IntegratedApproach
        subtitle={pageContent.integratedApproach.subtitle}
        title={pageContent.integratedApproach.title}
      />
      <PrimaryCTA
        title={pageContent.primaryCTA.title}
        buttonText={pageContent.primaryCTA.buttonText}
      />
      <CoreServicesLink title={pageContent.coreServices.title} />
    </div>
  );
};

export default OtherServicesPage;

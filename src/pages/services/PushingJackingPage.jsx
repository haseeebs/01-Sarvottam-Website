import React from 'react';
import ServiceBreakdown from '@/components/common/ServiceBreakdown';
import KeyBenefits from '@/components/common/KeyBenefits';

import { Users, Wrench, Crosshair } from 'lucide-react';
import CTA from '@/components/common/CTA';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData';

const PushingJackingPage = () => {
  const pushingJackingProjects = allProjects.filter(
    (p) => p.category === 'Pushing & Jacking',
  );

  const heroContent = {
    headline: 'Advanced Pipe Jacking & Box Pushing Contractors',
    body: 'Our pushing and jacking services are engineered for projects requiring heavy-duty underground passage. We specialize in Box Pushing (RCC/Precast) for creating railway underbridges and pedestrian subways, alongside Pipe Pushing and Jacking for large-diameter water and sewer pipelines. Our experienced team and powerful machinery ensure precise execution for even the most demanding projects.',
    cta: 'Plan Your Pushing & Jacking Project',
  };

  // Data for ServiceBreakdown
  const serviceBreakdownContent = {
    service1: {
      title: 'Box Pushing (RCC/Precast)',
      description:
        'Ideal for creating robust underpasses for railways or pedestrians. We use powerful hydraulic systems to push precast concrete box segments into place with minimal surface disruption, ensuring structural integrity and timely project completion.',
    },
    service2: {
      title: 'Pipe Pushing & Jacking',
      description:
        'A trenchless method for installing large-diameter pipelines for water, sewage, or utility conduits. This technique minimizes environmental impact and is perfect for crossing roads, railways, and other sensitive areas without open-cut excavation.',
    },
    imageSrc:
      'https://placehold.co/800x800/e2e8f0/334155?text=Technical+Schematic',
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
  };

  return (
    <div>
      <PageHero
        intent='light'
        headline={heroContent.headline}
        body={heroContent.body}
        cta={heroContent.cta}
      />
      <ServiceBreakdown
        service1={serviceBreakdownContent.service1}
        service2={serviceBreakdownContent.service2}
        imageSrc={serviceBreakdownContent.imageSrc}
      />
      <KeyBenefits
        title={keyBenefitsContent.title}
        features={keyBenefitsContent.features}
      />
      <ProjectShowcaseSection
        title={'Pushing & Jacking Projects in Action'}
        projects={pushingJackingProjects}
      />
      <CTA title={CTAContent.title} buttonText={CTAContent.buttonText} />
    </div>
  );
};

export default PushingJackingPage;

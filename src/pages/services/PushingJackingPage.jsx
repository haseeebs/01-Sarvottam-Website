import React from 'react';
import ServicePageHero from '@/components/sections/PushingJackingPage/ServicePageHero';
import ServiceBreakdown from '@/components/sections/PushingJackingPage/ServiceBreakdown';
import KeyBenefits from '@/components/sections/PushingJackingPage/KeyBenefits';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import CTA from '@/components/sections/PushingJackingPage/CTA';
import OtherServices from '@/components/sections/PushingJackingPage/OtherServices';

// Assume you are using a library like 'lucide-react' for icons.
// npm install lucide-react
import {
  Users,
  Wrench,
  Crosshair,
  TrainFrontTunnel,
  ScanLine,
  Tally3,
} from 'lucide-react';

const PushingJackingPage = () => {
  // Data for ServicePageHero
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

  // Data for ProjectShowcase
  const projectShowcaseContent = {
    title: 'Pushing & Jacking Projects in Action',
    projects: [
      {
        id: 1,
        title: 'NH-44 Railway Underbridge',
        location: 'Panipat, Haryana',
        category: 'Pushing & Jacking',
        imageSrc:
          'https://images.unsplash.com/photo-1599676793332-95f743534d49?q=80&w=1974&auto=format&fit=crop',
      },
      {
        id: 2,
        title: 'City Water Main Upgrade',
        location: 'Jaipur, Rajasthan',
        category: 'Pushing & Jacking',
        imageSrc:
          'https://images.unsplash.com/photo-1557022765-7170c1737e3d?q=80&w=2070&auto=format&fit=crop',
      },
      {
        id: 3,
        title: 'Pedestrian Subway Construction',
        location: 'Nagpur, Maharashtra',
        category: 'Pushing & Jacking',
        imageSrc:
          'https://images.unsplash.com/photo-1506935354899-351a705191a8?q=80&w=2070&auto=format&fit=crop',
      },
    ],
  };

  // Data for CTA
  const CTAContent = {
    title: 'Ready to Execute a Demanding Project?',
    buttonText: 'Plan Your Pushing & Jacking Project',
  };

  // Data for OtherServices
  const otherServicesContent = {
    title: 'Explore Our Other Services',
    services: [
      {
        name: 'Auger Boring & Pipe Ramming',
        description:
          'Precision boring for medium-diameter steel casings under roadways and railways.',
        to: '/services/boring',
        Icon: TrainFrontTunnel,
      },
      {
        name: 'Microtunneling',
        description:
          'Advanced, remotely-controlled tunneling for critical sewer and water line installations in urban areas.',
        to: '/services/microtunneling',
        Icon: ScanLine,
      },
      {
        name: 'Pipeline Crossing Solutions',
        description:
          'Specialized solutions for safely installing pipelines across rivers, canals, and other challenging terrains.',
        to: '/services/pipeline-crossing',
        Icon: Tally3,
      },
    ],
  };

  return (
    <div>
      <ServicePageHero
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
      <ProjectShowcase
        title={projectShowcaseContent.title}
        projects={projectShowcaseContent.projects}
      />
      <CTA title={CTAContent.title} buttonText={CTAContent.buttonText} />
      <OtherServices
        title={otherServicesContent.title}
        services={otherServicesContent.services}
      />
    </div>
  );
};

export default PushingJackingPage;

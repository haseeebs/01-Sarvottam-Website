import React from 'react';
import CoreServiceOfferings from '@/components/sections/CrossingPage/CoreServiceOfferings';
import RelatedProjects from '@/components/sections/CrossingPage/RelatedProjects';
import ServicePageHero from '@/components/common/PageHero';
import CTA from '@/components/common/CTA';

// Data for the page, extracted from the JSON
const heroContent = {
  headline: 'Expert Tunnel & Pipeline Crossing Services...',
  body: 'We are premier railway and highway line...',
  cta: 'Get a Quote for Your Crossing Project',
};

const featureGridContent = {
  title: 'Our Crossing Capabilities',
  features: [
    { name: 'Tunnel Crossing', icon: 'tunnel' },
    { name: 'Sewer Line Crossing', icon: 'pipe' },
    { name: 'Water Line Crossing', icon: 'water_drop' },
    { name: 'Gas Line Installation', icon: 'flame' },
  ],
};

const cardGridContent = {
  title: 'Our Proven Experience in Crossing Projects',
  // Sample projects based on the JSON structure
  projects: [
    {
      image_url:
        'https://images.unsplash.com/photo-1542621334-a254cf477633?q=80&w=1287&auto=format&fit=crop',
      title: 'GAIL Gas Line Crossing, Mumbai',
      tags: 'Pipeline Crossing, Hard Rock',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1521790797524-24016a155556?q=80&w=1287&auto=format&fit=crop',
      title: 'Railway Underpass, Bengaluru',
      tags: 'Tunnel Boring, Urban Area',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1605705335934-f6598586b3a1?q=80&w=1287&auto=format&fit=crop',
      title: 'NH-44 Water Main Relocation',
      tags: 'Water Line, Highway Crossing',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1599481238623-7140000a6848?q=80&w=1287&auto=format&fit=crop',
      title: 'City Sewer System Expansion, Pune',
      tags: 'Sewer Line, Micro-tunneling',
    },
  ],
};

const ctaContent = {
  title: 'Have a Critical Crossing Project?',
  buttonText: 'Get a Quote for Your Crossing Project',
  buttonLink: '#',
};

const CrossingPage = () => {
  return (
    <div>
      <PageHero
        intent='light'
        headline={heroContent.headline}
        body={heroContent.body}
        cta={heroContent.cta}
      />
      <CoreServiceOfferings
        title={featureGridContent.title}
        features={featureGridContent.features}
      />
      <RelatedProjects
        title={cardGridContent.title}
        projects={cardGridContent.projects}
      />
      <CTA
        variant='inline'
        title={ctaContent.title}
        buttonText={ctaContent.buttonText}
        buttonLink='#'
        buttonStyle='outline-amber'
      />
    </div>
  );
};

export default CrossingPage;

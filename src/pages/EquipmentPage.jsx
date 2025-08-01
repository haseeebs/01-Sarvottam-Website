import React from 'react';
import PageHero from '@/components/common/PageHero';
import EquipmentGallery from '@/components/sections/equipmentpage/EquipmentGallery';
import FleetAdvantages from '@/components/sections/equipmentpage/FleetAdvantages';
import CTA from '@/components/common/CTA';
import { MapPin, Settings, Landmark } from 'lucide-react';

// In a real application, this data would likely come from a CMS or API.
const pageData = {
  hero: {
    headline:
      'Our State-of-the-Art Fleet: Heavy Machinery for Demanding Projects',
    body: 'Our investment in modern, heavy machinery is central to our operational excellence. Our fleet includes high-capacity Boring Machines like Horizontal Drilling Machines (HDD) with a 150mm - 590mm capacity, powerful Breakers for rock excavation, and a comprehensive range of deegar auzaar (other tools) required for specialized underground utility installation. This advanced equipment empowers us to undertake and execute high-value projects with precision and efficiency.',
  },
  gallery: {
    title: 'Our Fleet',
    categories: [
      'All',
      'Boring Machines',
      'Pushing & Jacking',
      'Excavation & Breakers',
      'Support Equipment',
    ],
    equipment: [
      {
        id: 1,
        name: 'HDD Maxi-Rig',
        category: 'Boring Machines',
        imageUrl:
          'https://images.unsplash.com/photo-1553142289-216a6a1b2d7e?q=80&w=2940&auto=format&fit=crop',
      },
      {
        id: 2,
        name: 'Compact Auger Drill',
        category: 'Boring Machines',
        imageUrl:
          'https://images.unsplash.com/photo-1629930784483-53d712a833a6?q=80&w=2940&auto=format&fit=crop',
      },
      {
        id: 3,
        name: 'Hydraulic Pipe Jack',
        category: 'Pushing & Jacking',
        imageUrl:
          'https://images.unsplash.com/photo-1617208100025-55e1de75333f?q=80&w=2864&auto=format&fit=crop',
      },
      {
        id: 4,
        name: 'Heavy-Duty Rock Breaker',
        category: 'Excavation & Breakers',
        imageUrl:
          'https://images.unsplash.com/photo-1522022718485-7096e5792d47?q=80&w=2940&auto=format&fit=crop',
      },
      {
        id: 5,
        name: 'Trenching Machine',
        category: 'Excavation & Breakers',
        imageUrl:
          'https://images.unsplash.com/photo-1628258334105-2a0b3d6ef5f3?q=80&w=2940&auto=format&fit=crop',
      },
      {
        id: 6,
        name: 'Mobile Generator Unit',
        category: 'Support Equipment',
        imageUrl:
          'https://images.unsplash.com/photo-1600579038714-353278563345?q=80&w=2866&auto=format&fit=crop',
      },
      {
        id: 7,
        name: 'Directional Drill',
        category: 'Boring Machines',
        imageUrl:
          'https://images.unsplash.com/photo-1619463261749-51d2047a5137?q=80&w=2940&auto=format&fit=crop',
      },
      {
        id: 8,
        name: 'Pneumatic Pipe Rammer',
        category: 'Pushing & Jacking',
        imageUrl:
          'https://images.unsplash.com/photo-1543373122-6c16c6808dc1?q=80&w=2940&auto=format&fit=crop',
      },
      {
        id: 9,
        name: 'Portable Air Compressor',
        category: 'Support Equipment',
        imageUrl:
          'https://images.unsplash.com/photo-1621992300039-f9c381f1816f?q=80&w=2940&auto=format&fit=crop',
      },
    ],
  },
  advantages: {
    title: 'Why Our Equipment Makes a Difference',
    features: [
      {
        name: 'High Capacity & Precision',
        description:
          'Our advanced machinery, like HDD rigs, ensures projects are completed with utmost accuracy and efficiency.',
        icon: MapPin,
      },
      {
        name: 'Modern & Well-Maintained',
        description:
          'We invest in the latest technology and rigorous maintenance schedules to minimize downtime and maximize performance.',
        icon: Settings,
      },
      {
        name: 'Ready for High-Value Projects',
        description:
          'Our powerful and diverse fleet is capable of handling the most demanding and complex infrastructure contracts.',
        icon: Landmark,
      },
    ],
  },
  cta: {
    title: 'Have a project that requires our specialized fleet?',
    buttonText: 'Request a Project Consultation',
  },
};

const EquipmentPage = () => {
  return (
    <div>
      {/* NOTE: Child components must be updated to accept these props. */}

      <PageHero headline={pageData.hero.headline} body={pageData.hero.body} />

      <EquipmentGallery
        title={pageData.gallery.title}
        categories={pageData.gallery.categories}
        equipment={pageData.gallery.equipment}
      />

      <FleetAdvantages
        title={pageData.advantages.title}
        features={pageData.advantages.features}
      />

      <CTA title={pageData.cta.title} buttonText={pageData.cta.buttonText} />
    </div>
  );
};

export default EquipmentPage;

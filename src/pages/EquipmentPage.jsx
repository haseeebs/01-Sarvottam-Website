import React from 'react';
import PageHero from '@/components/common/PageHero';
import EquipmentGallery from '@/components/sections/equipmentpage/EquipmentGallery';
import CTA from '@/components/common/CTA';
import { MapPin, Settings, Landmark } from 'lucide-react';
import KeyBenefits from '@/components/common/KeyBenefits';

// In a real application, this data would likely come from a CMS or API.
const pageData = {
  hero: {
    headline:
      'Our State-of-the-Art Fleet: Heavy Machinery for Demanding Projects',
    body: 'Our robust fleet is the backbone of our operations. We own and maintain a wide range of specialized machinery, ensuring we are prepared for any project challenge, from trenchless boring to heavy-duty pipe jacking.',
    cta: 'Discuss Your Project Needs',
    ctaLink: '/contact?subject=EquipmentInquiry',
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
        name: 'Hydraulic Rock Splitter',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },
      {
        id: 2,
        name: 'Compact Auger Drill',
        category: 'Boring Machines',
        imageUrl: null,
      },
      {
        id: 3,
        name: 'Hydraulic Pipe Jack',
        category: 'Pushing & Jacking',
        imageUrl: null,
      },
      {
        id: 4,
        name: 'Heavy-Duty Rock Breaker',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },
      {
        id: 5,
        name: 'Trenching Machine',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },
      {
        id: 6,
        name: 'Mobile Generator Unit',
        category: 'Support Equipment',
        imageUrl: null,
      },
      {
        id: 7,
        name: 'Directional Drill',
        category: 'Boring Machines',
        imageUrl: null,
      },
      {
        id: 8,
        name: 'Pneumatic Pipe Rammer',
        category: 'Pushing & Jacking',
        imageUrl: null,
      },
      {
        id: 9,
        name: 'Portable Air Compressor',
        category: 'Support Equipment',
        imageUrl: null,
      },
      {
        id: 10,
        name: 'HDD Maxi-Rig',
        category: 'Boring Machines',
        imageUrl: null,
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
        Icon: MapPin,
      },
      {
        name: 'Modern & Well-Maintained',
        description:
          'We invest in the latest technology and rigorous maintenance schedules to minimize downtime and maximize performance.',
        Icon: Settings,
      },
      {
        name: 'Ready for High-Value Projects',
        description:
          'Our powerful and diverse fleet is capable of handling the most demanding and complex infrastructure contracts.',
        Icon: Landmark,
      },
    ],
  },
  cta: {
    title: 'Have a project that requires our specialized fleet?',
    buttonText: 'Request a Project Consultation',
    buttonLink: '/contact?subject=FleetConsultation',
  },
};

const EquipmentPage = () => {
  return (
    <div>
      <PageHero
        headline={pageData.hero.headline}
        body={pageData.hero.body}
        cta={pageData.hero.cta}
        ctaLink={pageData.hero.ctaLink}
      />

      <EquipmentGallery
        title={pageData.gallery.title}
        categories={pageData.gallery.categories}
        equipment={pageData.gallery.equipment}
      />

      <KeyBenefits
        title={pageData.advantages.title}
        features={pageData.advantages.features}
      />

      <CTA
        title={pageData.cta.title}
        buttonText={pageData.cta.buttonText}
        buttonLink={pageData.cta.buttonLink}
      />
    </div>
  );
};

export default EquipmentPage;

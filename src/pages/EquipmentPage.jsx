import React from 'react';
import PageHero from '@/components/common/PageHero';
import EquipmentGallery from '@/components/sections/equipmentpage/EquipmentGallery';
import CTA from '@/components/common/CTA';
import { MapPin, Settings, Landmark } from 'lucide-react';
import KeyBenefits from '@/components/common/KeyBenefits';

const pageData = {
  hero: {
    headline: 'The Powerhouse Behind Your Project: Our Specialized Fleet',
    body: "Our robust fleet isn't just machinery; it's your project's guarantee for success. We own and meticulously maintain a wide range of specialized equipment, from trenchless boring rigs to heavy-duty jacks, ensuring we conquer any challenge with precision and power.",
    cta: 'Discuss Your Project Needs',
    ctaLink: '/contact?subject=EquipmentInquiry',
  },
  gallery: {
    title: 'Our Equipment & Resources',
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
        name: 'Hard Rock Breaker',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },

      {
        id: 2,
        name: 'Smart Rock Breaker',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },

      {
        id: 3,
        name: 'Electric Breaker',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },

      {
        id: 4,
        name: 'Air Compressor Breaker',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },

      {
        id: 5,
        name: 'Air Compressor',
        category: 'Support Equipment',
        imageUrl: null,
      },

      {
        id: 6,
        name: 'Rock Splitter',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },

      {
        id: 7,
        name: 'Oxygen Air Filter',
        category: 'Support Equipment',
        imageUrl: null,
      },

      {
        id: 8,
        name: 'Power Pack & Jacks',
        category: 'Pushing & Jacking',
        imageUrl: null,
      },

      {
        id: 9,
        name: 'hard Rock Cutting Machine',
        category: 'Excavation & Breakers',
        imageUrl: null,
      },

      {
        id: 10,
        name: 'Auger Boring Machine',
        category: 'Boring Machines',
        imageUrl: null,
      },

      {
        id: 11,
        name: 'HDD Machine',
        category: 'Boring Machines',
        imageUrl: null,
      },

      {
        id: 12,
        name: 'Box Pushing Tools',
        category: 'Pushing & Jacking',
        imageUrl: null,
      },

      {
        id: 13,
        name: 'Shuttering & Railing',
        category: 'Support Equipment',
        imageUrl: null,
      },

      {
        id: 14,
        name: 'Dewatering System',
        category: 'Support Equipment',
        imageUrl: null,
      },

      {
        id: 15,
        name: 'DG Set',
        category: 'Support Equipment',
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

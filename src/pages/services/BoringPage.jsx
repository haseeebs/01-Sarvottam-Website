import React from 'react';

import ServiceBreakdown from '@/components/common/ServiceBreakdown';
import KeyBenefits from '@/components/common/KeyBenefits';

import { GitBranchPlus, Mountain, Gauge } from 'lucide-react';
import CTA from '@/components/common/CTA';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData';

const BoringPage = () => {
  const boringProjects = allProjects.filter((p) => p.category === 'Boring');

  const heroContent = {
    headline: 'Precision Auger Boring & Pipe Ramming Services',
    body: 'Humari auger boring aur pipe ramming services zameen ke neeche steel casing pipes install karne ke liye ek behtareen trenchless solution faraham karti hain. Yeh tareeqa roads, railways, aur deegar hassas ilaqon ke neeche kaam karne ke liye ideal hai, jahan oopri satah par kam se kam kharabi matloob ho.',
    cta: 'Get a Quote for Your Boring Project',
  };

  // Data for BoringTypesGrid (assuming it's similar to ServiceBreakdown)
  const boringTypesContent = {
    service1: {
      title: 'Auger Boring',
      description:
        'Yeh ek mustanad (proven) tareeqa hai jo aam mitti se lekar naram chattanon tak, mukhtalif qisam ki zameeni halaton mein steel casing pipes install karne ke liye istemal hota hai. Humara aala darjay ka saaz-o-samaan (equipment) azeem durusti (accuracy) ko yaqeeni banata hai.',
    },
    service2: {
      title: 'Pipe Ramming',
      description:
        'Jab zameen pathreeli (cobbles/boulders) ho, to pipe ramming ek behtareen intikhab hai. Is technique mein, ek pneumatic hammer pipe ko zameen mein dhakelta hai, jo raastay mein anay wali rukawaton ko hata deta hai. Yeh short-distance crossings ke liye khaas taur par mufeed hai.',
    },
    imageSrc:
      'https://placehold.co/800x800/e2e8f0/334155?text=Boring+Schematic', // Placeholder image
  };

  // Data for KeyBenefits (or RockBoringSpecialists)
  const keyBenefitsContent = {
    title: 'Why Choose Our Boring Services?',
    features: [
      {
        name: 'Minimal Surface Disruption',
        description:
          'Humare trenchless tareeqay traffic, karobar, aur mahol par asar ko kam se kam rakhte hain.',
        Icon: GitBranchPlus,
      },
      {
        name: 'Versatile Ground Capability',
        description:
          'Hum naram mitti se lekar sakht chattanon tak, har qisam ki zameeni halat se nimatne ke liye tayyar hain.',
        Icon: Mountain,
      },
      {
        name: 'High Accuracy & Control',
        description:
          'Advanced guidance systems ki madad se hum pipeline ki line aur grade ko behtareen durusti ke saath control karte hain.',
        Icon: Gauge,
      },
    ],
  };

  // Data for CTA
  const CTAContent = {
    title: 'Have a Boring Project in Mind?',
    buttonText: 'Inquire About Boring service',
  };

  return (
    <div>
      <PageHero
        intent='light'
        headline={heroContent.headline}
        body={heroContent.body} // Maine prop ka naam `body` rakha hai, agar aapka component `subheadline` expect karta hai to isay badal lein
      />
      {/* Aapke component ke aitebar se props ke naam adjust karein */}
      <ServiceBreakdown
        service1={boringTypesContent.service1}
        service2={boringTypesContent.service2}
        imageSrc={boringTypesContent.imageSrc}
      />
      {/* Aapke component ke aitebar se props ke naam adjust karein */}
      <KeyBenefits
        title={keyBenefitsContent.title}
        features={keyBenefitsContent.features}
      />
      {/* Aapke component ke aitebar se props ke naam adjust karein */}
      <ProjectShowcaseSection
        title={'Specialized Boring & Drilling Projects'}
        projects={boringProjects}
      />
      <CTA title={CTAContent.title} buttonText={CTAContent.buttonText} />
    </div>
  );
};

export default BoringPage;

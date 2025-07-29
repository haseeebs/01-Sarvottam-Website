import React from 'react';

// Apne project ke aitebar se sahi path dein
import ServicePageHero from '@/components/sections/PushingJackingPage/ServicePageHero';
import ServiceBreakdown from '@/components/sections/PushingJackingPage/ServiceBreakdown';
import KeyBenefits from '@/components/sections/PushingJackingPage/KeyBenefits';
import ProjectShowcase from '@/components/sections/ProjectShowcase';
import PrimaryCTA from '@/components/sections/PushingJackingPage/PrimaryCTA';
import OtherServices from '@/components/sections/PushingJackingPage/OtherServices';

// 'lucide-react' se zaroori icons import karein
// npm install lucide-react
import {
  GitBranchPlus,
  Mountain,
  Gauge,
  Tally3,
  ScanLine,
  TrainFrontTunnel,
} from 'lucide-react';

const BoringPage = () => {
  // Data for ServicePageHero
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

  // Data for ProjectShowcase (or EquipmentSpotlight)
  const projectShowcaseContent = {
    title: 'Our Boring Projects',
    projects: [
      {
        id: 1,
        title: 'Highway 7 Gas Line Casing',
        location: 'Mumbai, Maharashtra',
        category: 'Auger Boring',
        imageSrc:
          'https://images.unsplash.com/photo-1618882083389-3545b2b7b752?q=80&w=2070&auto=format&fit=crop', // Replace with actual project image
      },
      {
        id: 2,
        title: 'Railway Culvert Installation',
        location: 'Ahmedabad, Gujarat',
        category: 'Pipe Ramming',
        imageSrc:
          'https://images.unsplash.com/photo-1557022765-7170c1737e3d?q=80&w=2070&auto=format&fit=crop', // Replace with actual project image
      },
      {
        id: 3,
        title: 'City Sewer Line Project',
        location: 'Delhi, NCR',
        category: 'Auger Boring',
        imageSrc:
          'https://images.unsplash.com/photo-1506935354899-351a705191a8?q=80&w=2070&auto=format&fit=crop', // Replace with actual project image
      },
    ],
  };

  // Data for PrimaryCTA
  const primaryCtaContent = {
    title: 'Have a Boring Project in Mind?',
    buttonText: 'Discuss Your Requirements',
  };

  // Data for OtherServices
  const otherServicesContent = {
    title: 'Explore Our Other Trenchless Solutions',
    services: [
      {
        name: 'Pushing & Jacking',
        description:
          'Bade size ke concrete boxes aur pipes ke liye, jo underpass aur bari pipelines ke liye istemal hotay hain.',
        to: '/services/pushing-jacking',
        Icon: TrainFrontTunnel,
      },
      {
        name: 'Microtunneling',
        description:
          'Shehri ilaqon mein nazuk (critical) sewer aur water lines ke liye advanced, remote-controlled tunneling.',
        to: '/services/microtunneling',
        Icon: ScanLine,
      },
      {
        name: 'Pipeline Crossing',
        description:
          'Daryao, nahron aur deegar mushkil ilaqon ke paar pipelines install karne ke liye makhsoos hal.',
        to: '/services/pipeline-crossing',
        Icon: Tally3,
      },
    ],
  };

  return (
    <div>
      <ServicePageHero
        headline={heroContent.headline}
        body={heroContent.body} // Maine prop ka naam `body` rakha hai, agar aapka component `subheadline` expect karta hai to isay badal lein
        cta={heroContent.cta}
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
      <ProjectShowcase
        title={projectShowcaseContent.title}
        projects={projectShowcaseContent.projects}
      />
      <PrimaryCTA
        title={primaryCtaContent.title}
        buttonText={primaryCtaContent.buttonText}
      />
      <OtherServices
        title={otherServicesContent.title}
        services={otherServicesContent.services}
      />
    </div>
  );
};

export default BoringPage;

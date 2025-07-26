import React from "react";
import ServicePageHero from "@/components/sections/boringpage/ServicePageHero";
import BoringTypesGrid from "@/components/sections/boringpage/BoringTypesGrid";
import RockBoringSpecialists from "@/components/sections/boringpage/RockBoringSpecialists";
import EquipmentSpotlight from "@/components/sections/boringpage/EquipmentSpotlight";
import PrimaryCTA from "@/components/sections/boringpage/PrimaryCTA";
import OtherServices from "@/components/sections/boringpage/OtherServices";

// JSON data ko ek constant mein store kiya gaya hai
const pageData = [
  {
    taskName: "Build Hero Component",
    componentName: "Hero.jsx",
    context: {
      content: {
        headline: "Advanced Pipe Jacking & Box Pushing Contractors",
        subheadline:
          "Our pushing and jacking services are engineered for maximum power and surgical precision, enabling complex underground infrastructure projects without surface disruption.",
        cta: "Plan Your Pushing & Jacking Project",
      },
    },
  },
  {
    taskName: "Build TwoColumnContent Component",
    componentName: "TwoColumnContent.jsx",
    context: {
      content: {
        services: [
          {
            name: "Box Pushing (RCC/Precast)",
            description:
              "Ideal for creating underpasses, culverts, and tunnels under railways and highways with minimal traffic disruption. We use powerful hydraulic systems to push precast concrete box segments into place with millimeter accuracy.",
          },
          {
            name: "Pipe Pushing & Jacking",
            description:
              "A trenchless method for installing pipelines and conduits. We handle a wide range of diameters for water mains, sewer lines, and utility casings, ensuring environmental preservation and structural integrity.",
          },
        ],
      },
    },
  },
  {
    taskName: "Build FeatureGrid Component",
    componentName: "FeatureGrid.jsx",
    context: {
      content: {
        title: "Our Core Strengths",
        benefits: [
          {
            name: "Experienced Team",
            description:
              "Our crew consists of seasoned engineers and operators with a proven track record of successfully completing challenging projects.",
          },
          {
            name: "Powerful Machinery",
            description:
              "We deploy a state-of-the-art fleet of hydraulic jacks and boring machines capable of handling immense loads and difficult ground conditions.",
          },
          {
            name: "Precise Execution",
            description:
              "Combining advanced surveying technology with expert control, we ensure every push and jack meets exact project specifications.",
          },
        ],
      },
    },
  },
  {
    taskName: "Build ProjectSlider Component",
    componentName: "ProjectSlider.jsx",
    context: {
      content: {
        title: "Pushing & Jacking Projects in Action",
      },
    },
  },
  {
    taskName: "Build CallToAction Component",
    componentName: "CallToAction.jsx",
    context: {
      content: {
        title: "Ready to Execute a Demanding Project?",
        buttonText: "Plan Your Pushing & Jacking Project",
      },
    },
  },
  {
    taskName: "Build CardGrid Component",
    componentName: "CardGrid.jsx",
    context: {
      content: {
        title: "Explore Our Other Services",
      },
    },
  },
];

const BoringPage = () => {
  // Data ko destructure karke variables mein assign karna for better readability
  const heroContent = pageData[0].context.content;
  const twoColumnContent = pageData[1].context.content;
  const featureGridContent = pageData[2].context.content;
  const projectSliderContent = pageData[3].context.content;
  const ctaContent = pageData[4].context.content;
  const cardGridContent = pageData[5].context.content;

  return (
    <div>
      <ServicePageHero
        headline={heroContent.headline}
        subheadline={heroContent.subheadline}
        cta={heroContent.cta}
      />

      {/* Note: Mapping component names to the data provided. */}
      {/* 'BoringTypesGrid' is mapped to 'TwoColumnContent' data */}
      <BoringTypesGrid services={twoColumnContent.services} />

      {/* 'RockBoringSpecialists' is mapped to 'FeatureGrid' data */}
      <RockBoringSpecialists
        title={featureGridContent.title}
        benefits={featureGridContent.benefits}
      />

      {/* 'EquipmentSpotlight' is mapped to 'ProjectSlider' data */}
      <EquipmentSpotlight title={projectSliderContent.title} />

      {/* 'PrimaryCTA' is mapped to 'CallToAction' data */}
      <PrimaryCTA title={ctaContent.title} buttonText={ctaContent.buttonText} />

      {/* 'OtherServices' is mapped to 'CardGrid' data */}
      <OtherServices title={cardGridContent.title} />
    </div>
  );
};

export default BoringPage;

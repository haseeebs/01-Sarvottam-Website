import React from "react";
import ServicesPageHero from "@/components/sections/servicepage/ServicesPageHero";
import ServiceCategories from "@/components/sections/servicepage/ServiceCategories";
import WhyChooseUs from "@/components/sections/servicepage/WhyChooseUs";
import ServiceProcess from "@/components/sections/servicepage/ServiceProcess";
import ProjectsHighlight from "@/components/sections/servicepage/ProjectsHighlight";
import ServicesPageCTA from "@/components/sections/servicepage/ServicesPageCTA";

const serviceCategoriesData = {
  title: "Our Service Portfolio",
  services: [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Tunnel & Pipeline Crossing",
      description:
        "Expert solutions for creating crossings under critical infrastructure like railways, highways, and waterways with minimal disruption.",
      link: "/services/pipeline-crossing",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/224924/pexels-photo-224924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Horizontal Directional Drilling (HDD)",
      description:
        "A steerable, trenchless method for installing underground pipes, conduits, and cables along a prescribed bore path.",
      link: "/services/hdd",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Auger Boring & Pipe Jacking",
      description:
        "Precise, powerful techniques for installing large-diameter steel pipes and concrete culverts over long distances.",
      link: "/services/auger-boring",
    },
    {
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/38275/hdri-hdr-pipeline-plumbing-38275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Utility Installation & Relocation",
      description:
        "Comprehensive services for the installation of new utilities and relocation of existing ones for infrastructure projects.",
      link: "/services/utility-installation",
    },
  ],
};

const whyChooseUsData = {
  title: "Our Commitment to Excellence",
  imageSrc:
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  imageAlt: "A dedicated engineering team collaborating on project blueprints",
  imagePosition: "right",
};

const serviceProcessData = {
  title: "How We Deliver Our Services",
  steps: [
    {
      title: "Consultation & Planning",
      description:
        "We begin with a thorough site analysis and collaborative planning to define project scope, challenges, and optimal solutions.",
    },
    {
      title: "Precise Execution",
      description:
        "Our skilled teams use state-of-the-art equipment and proven methodologies to execute the plan with precision and safety.",
    },
    {
      title: "Quality Assurance & Delivery",
      description:
        "We conduct rigorous post-execution checks and provide comprehensive documentation to ensure project success and client satisfaction.",
    },
  ],
};

const projectsData = {
  title: "See Our Services in Action",
  projects: [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      projectName: "NH-48 Underpass, Gurgaon",
      serviceType: "Box Pushing",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/834607/pexels-photo-834607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      projectName: "City Metro Line Crossing, Delhi",
      serviceType: "Auger Boring",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      projectName: "Riverbed Gas Pipeline, Yamuna",
      serviceType: "Horizontal Directional Drilling",
    },
  ],
};

const ServicePage = () => {
  return (
    <div>
      {/* ✅ Matches ServicesPageHero */}
      <ServicesPageHero
        headline="Comprehensive Trenchless Engineering & Underground Solutions"
        body="Sarvottam Enterprises offers a full spectrum of specialized underground construction services designed for modern infrastructure needs. Our expertise in trenchless engineering solutions minimizes surface disruption and environmental impact. From critical pipeline crossings under railways and highways to large-scale boring and jacking, our services are categorized to meet the specific technical demands of our clients, including government agencies and major private contractors."
      />

      {/* ✅ Matches ServiceCategories */}
      <ServiceCategories
        title={serviceCategoriesData.title}
        services={serviceCategoriesData.services}
      />

      {/* ✅ Matches WhyChooseUs */}
      <WhyChooseUs
        title={whyChooseUsData.title}
        imageSrc={whyChooseUsData.imageSrc}
        imageAlt={whyChooseUsData.imageAlt}
        imagePosition={whyChooseUsData.imagePosition}
      >
        <div className="space-y-6 font-sans text-slate-700 text-lg leading-relaxed">
          <p>
            At Sarvottam Enterprises, our reputation is built on a foundation of
            unwavering commitment to quality, safety, and innovation. We don't
            just complete projects; we build lasting partnerships by
            consistently exceeding expectations.
          </p>
          <ul className="space-y-4 pl-4">
            <li className="flex items-start">
              <span className="text-blue-800 font-bold mr-3">✔</span>
              <span>
                <strong>Advanced Technology:</strong> We invest in the latest
                trenchless equipment to ensure efficiency, precision, and
                minimal environmental impact.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-800 font-bold mr-3">✔</span>
              <span>
                <strong>Experienced Professionals:</strong> Our team consists of
                seasoned engineers and technicians with decades of collective
                experience in complex underground projects.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-800 font-bold mr-3">✔</span>
              <span>
                <strong>Safety First Culture:</strong> We adhere to the
                strictest safety protocols to protect our team, our clients, and
                the public on every job site.
              </span>
            </li>
          </ul>
        </div>
      </WhyChooseUs>

      {/* ✅ Matches ServiceProcess */}
      <ServiceProcess
        title={serviceProcessData.title}
        steps={serviceProcessData.steps}
      />

      {/* ✅ Matches ProjectsHighlight */}
      <ProjectsHighlight
        title={projectsData.title}
        projects={projectsData.projects}
      />

      {/* ✅ Matches ServicesPageCTA */}
      <ServicesPageCTA
        title="Ready to Discuss Your Technical Requirements?"
        buttonText="Request a Quote"
        buttonLink="/contact"
      />
    </div>
  );
};

export default ServicePage;

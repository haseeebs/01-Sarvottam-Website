import React from "react";
import { Handshake, Mountain, Award } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

const CompanyPrinciples = ({ principles }) => {
  const principleIcons = {
    "vishwas (trust)": Handshake,
    "dridh sankalp (determination)": Mountain,
    "engineering excellence": Award,
  };

  return (
    <SectionWrapper className="bg-gray-100">
      <h2 className="text-center font-display text-4xl font-bold text-primary">
        Our Core Principles
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => {
          const key = principle.title.trim().toLowerCase();
          const IconComponent = principleIcons[key] || Award;

          return (
            <div key={index} className="block text-center">
              <IconComponent className="mx-auto h-16 w-16 text-primary hover:scale-110 transition-transform" />

              <h3 className="mt-4 font-display text-xl font-bold text-primary">
                {principle.title}
              </h3>
              <p className="mt-2 font-body text-base text-accent">
                {principle.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default CompanyPrinciples;

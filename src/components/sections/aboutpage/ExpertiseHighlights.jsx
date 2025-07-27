import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
const ExpertiseHighlights = ({ stats }) => {
  return (
    <SectionWrapper className="bg-primary">
      <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-lg p-4"
          >
            <h2 className="order-first font-display text-5xl font-bold text-accent">
              {stat.value}
            </h2>
            <p className="mt-2 font-body text-base text-white">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default ExpertiseHighlights;

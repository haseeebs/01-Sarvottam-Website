import React from "react";

// Placeholder icons for demonstration. In a real app, you'd use an icon library.
const TrustIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const DeterminationIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6M9 19H5m4 0h6m-6 0H5m4 0h6M5 19h14"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14" />
  </svg>
);

const ExcellenceIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M17 3l-1.172 1.172a4 4 0 00-5.656 0L9 3m0 18l1.172-1.172a4 4 0 005.656 0L17 21"
    />
  </svg>
);

const CompanyPrinciples = ({ principles }) => {
  const principleIcons = {
    "Vishwas (Trust)": TrustIcon,
    "Dridh Sankalp (Determination)": DeterminationIcon,
    "Engineering Excellence": ExcellenceIcon,
  };

  return (
    <section className="bg-[#F4F6F8]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <h2 className="text-center font-montserrat text-4xl font-bold text-[#0D2C54]">
          Our Core Principles
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => {
            const IconComponent =
              principleIcons[principle.title] || ExcellenceIcon;
            return (
              <div key={index} className="block text-center">
                <IconComponent className="mx-auto h-16 w-16 text-[#F5B841] transition-transform duration-300 ease-in-out hover:scale-110" />

                <h3 className="mt-4 font-montserrat text-xl font-bold text-[#0D2C54]">
                  {principle.title}
                </h3>

                <p className="mt-2 font-lato text-base text-[#212529]">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyPrinciples;

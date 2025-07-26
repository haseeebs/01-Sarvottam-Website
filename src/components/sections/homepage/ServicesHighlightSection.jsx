import React from "react";

const ServiceCard = ({ title, link }) => (
  <a
    href={link}
    className="group block rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-lg"
  >
    <div className="flex h-full flex-col justify-between">
      <h3 className="text-xl font-bold text-[#212529]">{title}</h3>
      <div className="mt-4 self-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  </a>
);

export default function ServicesHighlightSection({ title, features }) {
  const defaultTitle = "Our Core Specializations";
  const defaultFeatures = [
    {
      title: "Tunnel & Pipeline Crossing",
      link: "/services/pipeline-crossing",
    },
    {
      title: "Box Pushing & Pipe Jacking",
      link: "/services/pushing-jacking",
    },
    {
      title: "Precision Boring Services",
      link: "/services/auger-boring",
    },
  ];

  const displayTitle = title || defaultTitle;
  const displayFeatures = features || defaultFeatures;

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#212529] sm:text-4xl">
            {displayTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Expertise in trenchless technology for modern infrastructure
            challenges.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayFeatures.map((feature) => (
            <ServiceCard
              key={feature.title}
              title={feature.title}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

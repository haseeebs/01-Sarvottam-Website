import React from "react";

// Placeholder Icon
const ArrowRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const coreServicesData = [
  {
    title: "Auger Boring",
    description:
      "Precision boring for utility installation with minimal surface disruption.",
    href: "/services/auger-boring",
  },
  {
    title: "Pipe Jacking",
    description:
      "Advanced trenchless solutions for installing large-diameter pipelines and culverts.",
    href: "/services/pushing-jacking",
  },
  {
    title: "HDD Crossing",
    description:
      "Specialized horizontal drilling for complex river, road, and rail crossings.",
    href: "/services/hdd-crossing",
  },
];

const CoreServicesLink = ({ title, services = coreServicesData }) => {
  const defaultContent = {
    title: "Explore Our Core Engineering Services",
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title || defaultContent.title}
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group flex flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <h3 className="text-xl font-semibold leading-8 text-gray-900">
                {service.title}
              </h3>
              <p className="mt-4 flex-grow text-base leading-7 text-gray-600">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-x-2 font-semibold text-amber-500">
                <span>View Service</span>
                <ArrowRightIcon
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreServicesLink;

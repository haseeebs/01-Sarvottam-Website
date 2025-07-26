import React from "react";

// This is a sub-component. In a real project, it might be in its own file.
const ServiceCard = ({ imageUrl, title, description, link }) => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col">
      {/* Visual/Image part */}
      <div className="aspect-video">
        <img
          src={imageUrl}
          alt={`Visual for ${title}`}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      {/* Content part */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-sans font-bold text-xl text-blue-800 mb-3">
          {title}
        </h3>
        <p className="font-sans text-base text-slate-700 mb-5 flex-grow">
          {description}
        </p>
        <a
          href={link}
          className="font-sans font-bold text-base text-yellow-600 hover:text-yellow-500 transition-colors self-start"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

const ServiceCategories = ({ title, services = [] }) => {
  return (
    <div className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-blue-800 mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;

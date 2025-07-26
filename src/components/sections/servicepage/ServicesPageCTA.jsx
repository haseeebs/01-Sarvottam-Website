import React from "react";

const ServicesPageCTA = ({ title, buttonText, buttonLink = "#" }) => {
  return (
    <section className="bg-blue-800">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-sans font-extrabold text-white sm:text-4xl">
          <span className="block">{title}</span>
        </h2>
        <a
          href={buttonLink}
          className="mt-8 w-full inline-flex items-center justify-center px-8 py-3 border-2 border-white rounded-md text-base font-sans font-medium text-white hover:bg-white hover:text-blue-800 transition-colors duration-300 sm:w-auto"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default ServicesPageCTA;

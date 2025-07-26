import React from "react";

const ServicePageHero = ({ headline, body, cta }) => {
  return (
    <div
      className="relative w-full bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200 md:mx-0 mx-auto">
            {body}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
            <button
              type="button"
              className="rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors"
            >
              {cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;

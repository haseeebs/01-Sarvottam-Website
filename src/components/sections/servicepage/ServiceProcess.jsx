import React from "react";

// Helper component for the connecting arrow graphic.
const ProcessArrow = () => (
  <div
    aria-hidden="true"
    className="hidden md:block absolute top-10 right-0 transform translate-x-1/2 -translate-y-1/2 w-20"
  >
    <svg viewBox="0 0 84 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 7.5H75"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 6"
      />
      <path
        d="M76 1.5L82.5 7.5L76 13.5"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// The main component. It expects 'steps' to be an array of objects, e.g., [{ title: '...', description: '...' }]
const ServiceProcess = ({ title, steps = [] }) => {
  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-blue-800 mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center px-4">
              <span className="font-sans font-extrabold text-5xl text-yellow-600">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 font-sans font-bold text-xl text-blue-800">
                {step.title}
              </h3>

              <p className="mt-2 font-sans text-base text-slate-600">
                {step.description}
              </p>

              {/* Render arrow on all but the last item for desktop view */}
              {index < steps.length - 1 && <ProcessArrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;

import React from "react";

const StartProjectCTA = ({ title = "Have a similar project in mind?" }) => {
  return (
    <div className="bg-[#0D2C54]">
      <div className="max-w-4xl mx-auto text-center py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-montserrat text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base font-lato text-[#8D99AE] sm:text-lg">
          Let's discuss how our expertise can bring your vision to life.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-bold font-montserrat rounded-md shadow-sm text-[#0D2C54] bg-[#F2B705] transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D2C54] focus:ring-[#F2B705]"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartProjectCTA;

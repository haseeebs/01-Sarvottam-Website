import React from "react";

const ExpertiseHighlights = ({ stats }) => {
  // Assuming stats is an array of objects: [{ value: '15+', label: 'Years Experience' }, ...]
  return (
    <div className="bg-[#0D2C54]">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg p-4"
            >
              <h2 className="order-first font-montserrat text-5xl font-bold text-[#F5B841]">
                {stat.value}
              </h2>
              <p className="mt-2 font-lato text-base text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseHighlights;

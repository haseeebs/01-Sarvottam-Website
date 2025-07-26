import React from "react";

// Placeholder logo data - in a real app, this would come from a CMS or asset directory
const logoSources = {
  "L&T":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Larsen_%26_Toubro_logo.svg/1024px-Larsen_%26_Toubro_logo.svg.png",
  TATA: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/TATA_logo.svg/1280px-TATA_logo.svg.png",
};

const CorporateClients = ({ title, logos }) => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
          {title}
        </h2>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:justify-center">
          {logos.map((logoName) => (
            <div key={logoName} className="flex justify-center">
              <img
                className="max-h-16 w-full object-contain grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-105"
                src={logoSources[logoName]}
                alt={logoName}
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorporateClients;

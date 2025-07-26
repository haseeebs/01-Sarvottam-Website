import React from "react";

const HistoryMarkerIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-120.34a8,8,0,0,1,0,11.32l-64,64a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L112,148.69l58.34-58.35A8,8,0,0,1,173.66,95.66Z"></path>
  </svg>
);

const CompanyHistory = ({ title, historyPoints, imageUrl, imageAlt }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <img
              alt={imageAlt}
              src={imageUrl}
              className="h-full w-full rounded-lg object-cover shadow-lg"
            />
          </div>

          <div>
            <h2 className="font-montserrat text-3xl font-bold text-[#0D2C54] sm:text-4xl">
              {title}
            </h2>

            <ul className="mt-8 space-y-5">
              {historyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0">
                    <HistoryMarkerIcon className="mt-0.5 h-6 w-6 text-[#F5B841]" />
                  </span>
                  <p className="ml-4 font-lato text-base leading-relaxed text-[#212529]">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;

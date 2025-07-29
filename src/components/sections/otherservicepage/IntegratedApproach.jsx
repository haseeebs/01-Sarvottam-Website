import React from "react";

const IntegratedApproach = ({ subtitle, title, body, imageUrl }) => {
  const defaultContent = {
    subtitle:
      "Our integrated approach guarantees seamless project execution from start to finish.",
    title: "Your Reliable, Full-Service Partner",
    body: "By consolidating services like shuttering, trenchless technology, and welding under one roof, we eliminate communication gaps and scheduling conflicts. This streamlined process saves you valuable time, reduces coordination complexities, and ensures consistent quality control across all project phases. Our unified team works in synergy, delivering a cohesive and efficient solution that you can depend on.",
    imageUrl:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Content Column */}
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h4 className="font-body text-base font-bold leading-7 text-amber-500">
                {subtitle || defaultContent.subtitle}
              </h4>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title || defaultContent.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {body || defaultContent.body}
              </p>
            </div>
          </div>
          {/* Image Column */}
          <img
            src={imageUrl || defaultContent.imageUrl}
            alt="A team of engineers and welders collaborating over blueprints on a construction site."
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:w-[36rem] lg:w-[48rem] justify-self-end"
          />
        </div>
      </div>
    </div>
  );
};

export default IntegratedApproach;

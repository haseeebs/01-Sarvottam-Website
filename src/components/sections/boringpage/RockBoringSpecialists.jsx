import React from "react";
import {
  UserGroupIcon,
  Cog8ToothIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const icons = [
  { icon: UserGroupIcon },
  { icon: Cog8ToothIcon },
  { icon: CheckBadgeIcon },
];

const RockBoringSpecialists = ({ title, benefits }) => {
  return (
    <div className="bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const IconComponent = icons[index % icons.length].icon;
              return (
                <div key={benefit.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                    <IconComponent
                      className="h-12 w-12 flex-none text-yellow-500"
                      aria-hidden="true"
                    />
                    {benefit.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default RockBoringSpecialists;

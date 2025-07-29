import React from 'react';
import { Building2, Spline, Droplet, Flame } from 'lucide-react';

// Icon Map: Maps icon names to imported Lucide components for consistency.
const icons = {
  tunnel: Building2,
  pipe: Spline,
  water_drop: Droplet,
  flame: Flame,
};

const CoreServiceOfferings = ({ title, features }) => {
  return (
    <section className='bg-slate-100 py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
        </div>

        <div className='mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <div
                key={feature.name}
                className='group flex flex-col items-center text-center'
              >
                <div className='flex h-20 w-20 items-center justify-center'>
                  {Icon && (
                    <Icon className='h-12 w-12 text-amber-500 transition-transform duration-300 ease-in-out group-hover:scale-110' />
                  )}
                </div>
                <h3 className='text-my-primary mt-4 font-serif text-xl font-bold'>
                  {feature.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServiceOfferings;

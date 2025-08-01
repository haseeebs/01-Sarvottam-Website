import React from 'react';
import { MapPin, Settings, Landmark } from 'lucide-react';

const defaultFeatures = [
  {
    name: 'High Capacity & Precision',
    description:
      'Our advanced machinery, like HDD rigs, ensures projects are completed with utmost accuracy and efficiency.',
    icon: MapPin,
  },
  {
    name: 'Modern & Well-Maintained',
    description:
      'We invest in the latest technology and rigorous maintenance schedules to minimize downtime and maximize performance.',
    icon: Settings,
  },
  {
    name: 'Ready for High-Value Projects',
    description:
      'Our powerful and diverse fleet is capable of handling the most demanding and complex infrastructure contracts.',
    icon: Landmark,
  },
];

const FleetAdvantages = ({
  title = 'Why Our Equipment Makes a Difference',
  features = defaultFeatures,
}) => {
  return (
    <div className='bg-slate-50 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title} {/* Title is rendered from props */}
          </h2>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <div
                key={feature.name}
                className='flex flex-col items-center text-center lg:items-start lg:text-left'
              >
                <dt className='flex flex-col items-center gap-y-4'>
                  <div className='bg-my-primary/50 flex h-12 w-12 items-center justify-center rounded-sm'>
                    {/* The icon is now dynamically rendered based on the 'icon' property of each feature object */}
                    <feature.icon
                      className='text-my-accent/90 h-6 w-6'
                      aria-hidden='true'
                    />
                  </div>
                  <h3 className='text-xl leading-7 font-semibold text-gray-900'>
                    {feature.name}
                  </h3>
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FleetAdvantages;

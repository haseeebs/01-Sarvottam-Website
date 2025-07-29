import React from 'react';
import {
  ArrowsRightLeftIcon,
  CircleStackIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

// Dummy data for other services, as none was provided in the JSON
const otherServices = [
  {
    name: 'Pipeline & River Crossing',
    description:
      'Specialized techniques for installing pipelines under rivers, roads, and other obstacles with minimal environmental impact.',
    to: '/services/pipeline-crossing',
    icon: ArrowsRightLeftIcon,
  },
  {
    name: 'Auger Boring',
    description:
      'A reliable method for installing steel casings in a wide range of ground conditions, ideal for utility conduits.',
    to: '/services/boring',
    icon: CogIcon,
  },
  {
    name: 'Microtunneling',
    description:
      'Precision-guided pipe jacking for installing pipelines with extreme accuracy over long distances and challenging alignments.',
    to: '/services/microtunneling',
    icon: CircleStackIcon,
  },
];

const OtherServices = ({ title }) => {
  return (
    <div className='bg-gray-100 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {otherServices.map((service) => (
            <a
              key={service.name}
              to={service.to}
              className='group hover:ring-my-primary/60 block rounded-sm bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all duration-300 ease-in-out ring-inset hover:shadow-lg'
            >
              <div>
                <span className='bg-my-primary/20 inline-flex rounded-sm p-3 ring-4 ring-white'>
                  <service.icon
                    className='text-my-primary h-8 w-8'
                    aria-hidden='true'
                  />
                </span>
              </div>
              <div className='mt-6'>
                <h3 className='text-lg leading-8 font-semibold tracking-tight text-gray-900'>
                  {service.name}
                </h3>
                <p className='mt-2 text-base leading-7 text-gray-600'>
                  {service.description}
                </p>
                <p className='text-my-primary mt-6 text-sm font-semibold transition-opacity duration-300 group-hover:opacity-100 lg:opacity-0'>
                  Learn More <span aria-hidden='true'>→</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;

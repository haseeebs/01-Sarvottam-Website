import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const coreServicesData = [
  {
    title: 'Auger Boring',
    description:
      'Precision boring for utility installation with minimal surface disruption.',
    to: '/services/auger-boring',
  },
  {
    title: 'Pipe Jacking',
    description:
      'Advanced trenchless solutions for installing large-diameter pipelines and culverts.',
    to: '/services/pushing-jacking',
  },
  {
    title: 'HDD Crossing',
    description:
      'Specialized horizontal drilling for complex river, road, and rail crossings.',
    to: '/services/hdd-crossing',
  },
];

const CoreServicesLink = ({ title, services = coreServicesData }) => {
  const defaultContent = {
    title: 'Explore Our Core Engineering Services',
  };

  return (
    <div className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title || defaultContent.title}
          </h2>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className='group flex flex-col rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:ring-2 focus:ring-amber-500 focus:outline-none'
            >
              <h3 className='text-xl leading-8 font-semibold text-gray-900'>
                {service.title}
              </h3>
              <p className='mt-4 flex-grow text-base leading-7 text-gray-600'>
                {service.description}
              </p>
              <div className='mt-6 flex items-center gap-x-2 font-semibold text-amber-500'>
                <span>View Service</span>
                <ArrowRight className='h-5 w-5 transition-transform group-hover:translate-x-1' />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreServicesLink;

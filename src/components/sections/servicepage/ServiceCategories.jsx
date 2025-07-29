import React from 'react';
import { Link } from 'react-router-dom';

// This is a sub-component. In a real project, it might be in its own file.
const ServiceCard = ({ imageUrl, title, description, link }) => {
  return (
    <div className='flex flex-col rounded-lg border border-slate-200 bg-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl'>
      {/* Visual/Image part */}
      <div className='aspect-video'>
        <img
          src={imageUrl}
          alt={`Visual for ${title}`}
          className='h-full w-full rounded-t-lg object-cover'
        />
      </div>
      {/* Content part */}
      <div className='flex flex-grow flex-col p-6'>
        <h3 className='mb-3 font-sans text-xl font-bold text-blue-800'>
          {title}
        </h3>
        <p className='mb-5 flex-grow font-sans text-base text-slate-700'>
          {description}
        </p>
        <Link
          to={link}
          className='self-start font-sans text-base font-bold text-yellow-600 transition-colors hover:text-yellow-500'
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

const ServiceCategories = ({ title, services = [] }) => {
  return (
    <div className='bg-slate-50 py-16 sm:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-12 text-center font-sans text-3xl font-bold text-blue-800 md:text-4xl'>
          {title}
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCategories;

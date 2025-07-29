import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesHighlightSection = ({ services }) => {
  return (
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8'>
        <section aria-labelledby='details-heading'>
          <div className='flex flex-col items-center text-center'>
            <h2
              id='details-heading'
              className='text-my-primary text-3xl font-extrabold tracking-tight sm:text-4xl'
            >
              Our Core Specializations
            </h2>
            <p className='text-my-secondary mt-4 max-w-3xl text-lg'>
              Expertise in trenchless technology for modern infrastructure
              challenges.
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-2 lg:grid-cols-3'>
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className='group block text-left'
              >
                <img
                  alt={service.imgAlt}
                  src={service.imgSrc}
                  className='aspect-3/2 h-96 w-full rounded-sm object-cover'
                />
                <div className='mt-6 flex items-start justify-between'>
                  <h3 className='text-my-primary text-xl font-bold'>
                    {service.title}
                  </h3>
                  <div className='ml-4 flex-shrink-0'>
                    <ArrowRight className='text-my-secondary group-hover:text-my-accent h-6 w-6 transition-transform duration-300 group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesHighlightSection;

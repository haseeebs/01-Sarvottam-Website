import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceListSection = ({ title, services }) => {
  return (
    <div className='bg-white py-12 sm:py-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center'>
          <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
        </div>
        <div className='space-y-12'>
          {services.map((service, index) => (
            <Link
              key={service.link}
              to={service.link}
              className={cn(
                'group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white',
                'transition-all duration-300 ease-in-out',
                'hover:border-my-primary hover:-translate-y-1 hover:shadow-xl md:flex-row md:gap-x-6',
              )}
            >
              <div
                className={cn('w-full flex-shrink-0 overflow-hidden md:w-1/2', {
                  'md:order-last': index % 2 !== 0,
                })}
              >
                <img
                  src={service.imgSrc}
                  alt={service.imgAlt}
                  className='h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.02]'
                  style={{ willChange: 'transform' }}
                />
              </div>

              <div className='flex w-full flex-grow flex-col justify-center p-8 md:w-1/2 md:p-10'>
                <h3 className='group-hover:text-my-primary text-2xl font-bold text-gray-900 transition-colors'>
                  {service.title}
                </h3>

                {service.description && (
                  <p className='mt-4 text-base leading-relaxed text-gray-600'>
                    {service.description}
                  </p>
                )}

                <div className='text-my-primary group-hover:text-my-primary mt-6 flex items-center font-semibold transition-colors duration-300'>
                  <span>Learn More</span>
                  <ArrowRight className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5' />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceListSection;

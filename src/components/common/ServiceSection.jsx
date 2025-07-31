import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';

const ServiceSection = ({ services }) => {
  return (
    <div className='bg-creative-scatter bg-gray-50'>
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

          <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                // Apply button styles directly to the Link component
                // We use the 'outline' variant and override some layout properties
                className={cn(
                  buttonVariants({ variant: 'outline-primary' }),
                  'group h-auto flex-col items-stretch justify-start overflow-hidden p-0',
                )}
              >
                {/* Image container */}
                <div className='overflow-hidden'>
                  <img
                    alt={service.imgAlt}
                    src={service.imgSrc}
                    className='h-96 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                  />
                </div>

                {/* Content container with padding */}
                <div className='flex flex-grow flex-col justify-between p-6'>
                  {/* Title and Arrow in same line */}
                  <div className='flex items-center justify-between'>
                    <h3 className='text-my-primary group-hover:text-my-secondary text-xl font-bold'>
                      {service.title}
                    </h3>
                    <ArrowRight className='text-my-primary group-hover:text-my-accent h-6 w-6 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1' />
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

export default ServiceSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Make sure your CSS file with the .bg-creative-scatter class is imported
// import './globals.css';

const ServicesHighlightSectionCreative = ({ services }) => {
  return (
    // Humne yahan 'bg-gray-900' ko 'bg-creative-scatter' se badal diya hai
    <div className='bg-creative-scatter'>
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-20 lg:px-8'>
        <section aria-labelledby='details-heading'>
          <div className='flex flex-col items-center text-center'>
            <h2
              id='details-heading'
              // Text color ko light background ke liye adjust kiya hai
              className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'
            >
              Our Core Specializations
            </h2>
            <p
              // Text color ko light background ke liye adjust kiya hai
              className='mt-4 max-w-3xl text-lg text-gray-600'
            >
              Expertise in trenchless technology for modern infrastructure
              challenges.
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.link}
                // Card ka design waisa hi rakha hai kyunki woh already behtareen hai
                className='group relative block overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl'
              >
                <img
                  alt={service.imgAlt}
                  src={service.imgSrc}
                  className='h-96 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                />
                {/* Gradient overlay content ko image se alag aur readable rakhta hai */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
                <div className='absolute inset-0 flex flex-col justify-end p-6'>
                  <div className='transform transition-transform duration-500 ease-in-out group-hover:-translate-y-4'>
                    <h3 className='text-xl font-bold text-white'>
                      {service.title}
                    </h3>
                    <div className='mt-2 flex items-center text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                      <p className='text-sm font-medium'>View Details</p>
                      <ArrowRight className='ml-2 h-5 w-5' />
                    </div>
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

export default ServicesHighlightSectionCreative;

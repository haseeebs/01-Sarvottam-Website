import { ArrowRight } from 'lucide-react';
import React from 'react';

const ServicesHighlightSection = () => {
  const services = [
    {
      title: 'Tunnel & Pipeline Crossing',
      link: '/services/pipeline-crossing',
      imgSrc:
        'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
      imgAlt: 'Specialized equipment for tunnel and pipeline crossing.',
    },
    {
      title: 'Box Pushing & Pipe Jacking',
      link: '/services/pushing-jacking',
      imgSrc:
        'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg',
      imgAlt: 'Hydraulic jacks for box pushing and pipe jacking projects.',
    },
    {
      title: 'Precision Boring Services',
      link: '/services/auger-boring',
      imgSrc:
        'https://images.unsplash.com/photo-1593349122513-c357671fad43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      imgAlt: 'Auger boring machine for precision underground services.',
    },
  ];

  return (
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8'>
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

          <div className='mt-16 grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3'>
            {services.map((service) => (
              <a
                key={service.title}
                href={service.link}
                className='group block text-left'
              >
                <img
                  alt={service.imgAlt}
                  src={service.imgSrc}
                  className='aspect-3/2 w-full rounded-sm object-cover'
                />
                <div className='mt-6 flex items-start justify-between'>
                  <h3 className='text-my-primary text-xl font-bold'>
                    {service.title}
                  </h3>
                  <div className='ml-4 flex-shrink-0'>
                    <ArrowRight className='text-my-secondary group-hover:text-my-accent h-6 w-6 transition-transform duration-300 group-hover:translate-x-1' />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesHighlightSection;

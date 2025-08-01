import React from 'react';

const ServiceBreakdown = ({
  title, // Optional title for the whole section
  service1,
  service2,
  imageSrc,
  imageAlt, // Optional alt text for the image
}) => {
  // Agar zaroori data na ho to component render na karein
  if (!service1 || !service2) {
    return null;
  }

  return (
    // Component ko site ki theme ke mutabiq banane ke liye bg-gray-50 use kiya gaya hai
    <section className='bg-gray-50 py-16 font-sans sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Optional Title, KeyBenefits component jaisa */}
        {title && (
          <div className='mx-auto mb-16 max-w-2xl text-center lg:max-w-4xl'>
            <h2 className='font-display text-my-primary text-3xl font-bold tracking-tight sm:text-4xl'>
              {title}
            </h2>
          </div>
        )}

        <div className='grid grid-cols-1 items-center gap-y-16 sm:gap-x-16 md:grid-cols-2'>
          {/* Text Content Column */}
          <div className='space-y-12'>
            {/* Hum dono services ko map kar rahe hain taake code repeat na ho */}
            {[service1, service2].map((service) => (
              <div key={service.title} className='relative pl-16'>
                {/* Ab hum data se Icon render kar rahe hain */}
                <div className='bg-my-primary absolute top-1 left-0 flex h-10 w-10 items-center justify-center rounded-sm'>
                  {/* service.Icon ab ek component hai */}
                  <service.Icon
                    className='text-my-accent h-6 w-6'
                    aria-hidden='true'
                  />
                </div>
                {/* Brand ke colors aur fonts ka istemal */}
                <h3 className='font-body text-my-primary text-xl leading-relaxed font-bold'>
                  {service.title}
                </h3>
                <p className='font-body text-my-secondary mt-2 text-base leading-7'>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Column */}
          <div className='border-my-primary order-first rounded-md border-2 md:order-last'>
            <img
              src={imageSrc}
              alt={
                imageAlt ||
                'Technical schematic of the described construction services'
              }
              className='aspect-[4/3] h-auto w-full rounded-lg bg-gray-100 object-cover shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;

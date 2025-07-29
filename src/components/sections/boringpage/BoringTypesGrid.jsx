import React from 'react';

const BoringTypesGrid = ({ services }) => {
  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-x-16 gap-y-16 sm:gap-y-20 lg:grid-cols-2'>
          {/* Content Column */}
          <div className='order-last md:order-first'>
            {services.map((service, index) => (
              <div key={service.name} className={index > 0 ? 'mt-12' : ''}>
                <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                  {service.name}
                </h3>
                <p className='mt-4 text-lg leading-8 text-gray-600'>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image Column */}
          <div className='order-first md:order-last'>
            <img
              src='https://images.unsplash.com/photo-1621947081720-869708235779?q=80&w=1932&auto=format&fit=crop'
              alt='Technical schematic showing box pushing and pipe jacking processes.'
              className='w-full rounded-sm shadow-xl ring-1 ring-gray-400/10'
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoringTypesGrid;

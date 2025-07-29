import React from 'react';

const WhyChooseUs = ({
  title,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  children,
}) => {
  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <h2 className='text-my-primary mb-16 text-center font-sans text-3xl font-bold md:text-4xl'>
          {title}
        </h2>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2'>
          {/* Content Column */}
          <div className={imagePosition === 'left' ? 'md:order-last' : ''}>
            {children}
          </div>

          {/* Image Column */}
          <div className={imagePosition === 'left' ? 'md:order-first' : ''}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className='h-auto w-full rounded-sm shadow-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

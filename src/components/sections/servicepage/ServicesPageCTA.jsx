import React from 'react';

const ServicesPageCTA = ({ title, buttonText, buttonLink = '#' }) => {
  return (
    <section className='bg-blue-800'>
      <div className='mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8'>
        <h2 className='font-sans text-3xl font-extrabold text-white sm:text-4xl'>
          <span className='block'>{title}</span>
        </h2>
        <a
          href={buttonLink}
          className='mt-8 inline-flex w-full items-center justify-center rounded-md border-2 border-white px-8 py-3 font-sans text-base font-medium text-white transition-colors duration-300 hover:bg-white hover:text-blue-800 sm:w-auto'
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default ServicesPageCTA;

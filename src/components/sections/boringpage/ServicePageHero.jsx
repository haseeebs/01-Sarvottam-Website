import React from 'react';

const ServicePageHero = ({ headline, subheadline, cta }) => {
  return (
    <div
      className='relative w-full bg-cover bg-center'
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1593349122524-7446587c69da?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-blue-900/60'></div>

      {/* Content Container */}
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='flex min-h-[70vh] items-center'>
          <div className='w-full max-w-3xl text-center md:text-left'>
            <h1 className='text-5xl leading-tight font-bold text-white'>
              {headline}
            </h1>
            <p className='mt-6 text-lg text-white/85'>{subheadline}</p>
            <div className='mt-10'>
              <button className='rounded-md bg-yellow-400 px-8 py-3 text-base font-bold text-blue-900 shadow-lg transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400'>
                {cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;

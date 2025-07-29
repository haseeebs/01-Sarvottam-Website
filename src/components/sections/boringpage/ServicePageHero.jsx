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
      <div className='bg-my-primary/60 absolute inset-0'></div>

      {/* Content Container */}
      <div className='relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='flex min-h-[70vh] items-center'>
          <div className='w-full max-w-3xl text-center md:text-left'>
            <h1 className='text-5xl leading-tight font-bold text-white'>
              {headline}
            </h1>
            <p className='mt-6 text-lg text-white/85'>{subheadline}</p>
            <div className='mt-10'>
              <button className='bg-my-accent text-my-primary hover:bg-my-accent/80 focus-visible:outline-my-accent rounded-sm px-8 py-3 text-base font-bold shadow-lg transition focus-visible:outline focus-visible:outline-offset-2'>
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

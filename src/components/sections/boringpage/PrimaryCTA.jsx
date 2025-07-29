import React from 'react';

const PrimaryCTA = ({ title, buttonText }) => {
  return (
    <div className='bg-my-primary'>
      <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='bg-my-primary relative isolate overflow-hidden px-6 pt-16 text-center shadow-2xl sm:rounded-sm sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
          <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              {title}
            </h2>
            <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
              <button
                type='button'
                className='text-my-pribg-my-primary bg-my-accent hover:bg-my-accent/80 focus-visible:outline-my-accent rounded-sm px-8 py-3 text-base font-bold shadow-lg transition focus-visible:outline focus-visible:outline-offset-2'
              >
                {buttonText}
              </button>
            </div>
          </div>
          {/* This empty div is for a potential decorative graphic in the future, maintaining the layout */}
          <div className='relative mt-16 h-80 lg:mt-8'></div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCTA;

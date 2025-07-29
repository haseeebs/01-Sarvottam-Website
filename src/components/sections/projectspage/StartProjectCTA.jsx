import React from 'react';

const StartProjectCTA = ({ title = 'Have a similar project in mind?' }) => {
  return (
    <div className='bg-my-primary'>
      <div className='mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8'>
        <h2 className='font-display text-3xl font-bold text-white sm:text-4xl'>
          {title}
        </h2>
        <p className='font-body text-my-secondary mt-4 text-base sm:text-lg'>
          Let's discuss how our expertise can bring your vision to life.
        </p>
        <div className='mt-8 flex justify-center'>
          <button
            type='button'
            className='font-display text-my-primary bg-my-accent focus:ring-offset-my-primary focus:ring-my-accent inline-flex items-center rounded-sm border border-transparent px-8 py-3 text-base font-bold shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none'
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartProjectCTA;

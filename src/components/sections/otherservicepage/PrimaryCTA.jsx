import React from 'react';

const PrimaryCTA = ({ title, buttonText }) => {
  const defaultContent = {
    title: "Let's Build Your Project, End-to-End.",
    buttonText: 'Inquire About Our Full Capabilities',
  };

  return (
    <div className='bg-my-primary'>
      <div className='mx-auto max-w-7xl px-6 py-16 text-center sm:py-24 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          {title || defaultContent.title}
        </h2>
        <div className='mt-10 flex justify-center'>
          <button
            type='button'
            className='text-my-primary rounded-sm bg-amber-500 px-6 py-3 text-base font-semibold shadow-sm transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'
          >
            {buttonText || defaultContent.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCTA;

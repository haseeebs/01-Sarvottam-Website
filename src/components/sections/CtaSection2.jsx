import React from 'react';

const CtaSection2 = ({
  title = 'Have a Trenchless Project?',
  buttonText = 'Get a Quote for Your Project',
  buttonLink = '#',
}) => {
  return (
    <div className='bg-my-primary border-b-1'>
      <div className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8'>
        <h2 className='max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
          {title}
        </h2>
        <div className='mt-10 flex cursor-pointer items-center gap-x-6 lg:mt-0 lg:shrink-0'>
          <a
            buttonLink={buttonLink}
            className='hover:text-my-primary rounded-sm border-2 border-amber-400 bg-transparent px-6 py-3 text-sm font-semibold text-amber-400 shadow-sm transition-colors duration-300 ease-in-out hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CtaSection2;

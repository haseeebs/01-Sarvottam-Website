import React from 'react';

const CrossingServiceCTA = ({ title, button_text, href = '#' }) => {
  return (
    <div className='bg-my-primary'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
        <div className='bg-my-primary relative isolate overflow-hidden px-6 pt-16 text-center sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
          {/* Decorative SVG elements */}
          <svg
            viewBox='0 0 1024 1024'
            className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            aria-hidden='true'
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            />
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stopColor='#f59e0b' />
                <stop offset={1} stopColor='#0d2c54' />
              </radialGradient>
            </defs>
          </svg>
          <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              {title || 'Have a Critical Crossing Project?'}
            </h2>
            <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
              <a
                href={href}
                className='hover:text-my-primary rounded-md border-2 border-amber-400 bg-transparent px-6 py-3 text-sm font-semibold text-amber-400 shadow-sm transition-colors duration-300 ease-in-out hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
              >
                {button_text || 'Get a Quote for Your Crossing Project'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossingServiceCTA;

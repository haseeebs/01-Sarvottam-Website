import React from 'react';

// Icon Map: Yeh function icon ka naam leta hai aur uske corresponding SVG JSX return karta hai.
const Icon = ({ name, className }) => {
  const icons = {
    tunnel: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={className}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 6v12m-6-6h12M4 6a8 8 0 0116 0v0a8 8 0 01-16 0z'
        />
        <path strokeLinecap='round' strokeLinejoin='round' d='M2 18h20' />
      </svg>
    ),
    pipe: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={className}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10.5 6h3m-3 12h3m-3-6h3m-6.75 3H3m9 0h3.75M3 12h3.75m9 0h3.75M3 6h3.75m9 0H21m-9 6h3.75'
        />
      </svg>
    ),
    water_drop: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={className}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
        />
      </svg>
    ),
    flame: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={className}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M15.364 5.12l-1.414-1.414A5.964 5.964 0 0012 3a6 6 0 00-6 6c0 1.657.672 3.157 1.757 4.243l3.536 3.536a2 2 0 002.828 0l3.536-3.536A6 6 0 0015.364 5.12z'
        />
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M12 12.75a2.25 2.25 0 002.25-2.25H9.75A2.25 2.25 0 0012 12.75z'
        />
      </svg>
    ),
  };
  return icons[name] || null;
};

const CoreServiceOfferings = ({ title, features }) => {
  return (
    <section className='bg-slate-100 py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
        </div>

        <div className='mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
          {features.map((feature) => (
            <div
              key={feature.name}
              className='group flex flex-col items-center text-center'
            >
              <div className='flex h-20 w-20 items-center justify-center'>
                <Icon
                  name={feature.icon}
                  className='h-12 w-12 text-amber-500 transition-transform duration-300 ease-in-out group-hover:scale-110'
                />
              </div>
              <h3 className='mt-4 font-serif text-xl font-bold text-blue-900'>
                {feature.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServiceOfferings;

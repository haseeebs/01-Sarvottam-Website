import React from 'react';

const ClientsPageHero = ({ headline, body, cta }) => {
  return (
    <div className='bg-slate-50'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-4xl py-24 sm:py-32'>
          <div className='text-center'>
            <h1 className='text-my-primary text-4xl leading-tight font-bold tracking-tight sm:text-[42px] sm:leading-tight'>
              {headline}
            </h1>
            <p className='mx-auto mt-6 max-w-[750px] text-lg leading-8 text-slate-700'>
              {body}
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'
              >
                {cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPageHero;

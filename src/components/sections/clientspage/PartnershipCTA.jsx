import React from 'react';
import { Link } from 'react-router-dom';

const PartnershipCTA = ({ title, cta }) => {
  return (
    <div className='bg-my-primary'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            {title}
          </h2>
          <div className='flex-shrink-0'>
            <Link
              to='#'
              className='rounded-md bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500'
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipCTA;

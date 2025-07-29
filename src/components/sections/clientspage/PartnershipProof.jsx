import React from 'react';

const PartnershipProof = ({ stats }) => {
  return (
    <div className='bg-blue-900 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className='mx-auto flex max-w-xs flex-col gap-y-4'
            >
              <dt className='text-base leading-7 text-white/90'>
                {stat.label}
              </dt>
              <dd className='order-first text-5xl font-bold tracking-tight text-amber-500'>
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default PartnershipProof;

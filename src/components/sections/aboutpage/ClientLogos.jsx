import React from 'react';

const ClientLogos = ({ title, clients }) => {
  return (
    <div className='py-20'>
      <h2 className='font-display text-primary text-center text-3xl leading-8 font-bold'>
        {title}
      </h2>
      <div className='mx-auto mt-20 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
        {clients.map((client) => (
          <img
            key={client.name}
            className='col-span-1 max-h-12 w-full object-contain grayscale transition hover:grayscale-0'
            src={client.logoUrl}
            alt={client.name}
            width={158}
            height={48}
          />
        ))}
      </div>
    </div>
  );
};
export default ClientLogos;

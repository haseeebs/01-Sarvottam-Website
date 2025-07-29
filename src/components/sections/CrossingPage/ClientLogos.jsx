import React from 'react';

const ClientLogos = ({ title, logos }) => {
  // Placeholder logos agar props mein na diye jayein
  const placeholderLogos = [
    { name: 'GAIL', alt: 'GAIL India Limited' },
    { name: 'NHAI', alt: 'National Highways Authority of India' },
    { name: 'Indian Railways', alt: 'Indian Railways' },
    { name: 'Larsen & Toubro', alt: 'Larsen & Toubro' },
    { name: 'Afcons Infrastructure', alt: 'Afcons Infrastructure' },
  ];

  const logosToDisplay = logos || placeholderLogos;

  return (
    <div className='bg-gray-50 py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-xl leading-8 font-semibold text-gray-800'>
          {title || 'Trusted By Leading Agencies & Contractors'}
        </h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
          {logosToDisplay.map((logo) => (
            <img
              key={logo.name}
              className='col-span-1 max-h-12 w-full object-contain grayscale transition-all duration-300 ease-in-out hover:grayscale-0'
              src={`https://tailwindui.com/img/logos/158x48/${
                logo.name.toLowerCase().split(' ')[0]
              }-logo-gray-900.svg`}
              alt={logo.alt}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;

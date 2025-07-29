import React from 'react';

// Placeholder logo data - in a real app, this would come from a CMS or asset directory
const logoSources = {
  'Indian Railways':
    'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Indian_Railways_logo.svg/1200px-Indian_Railways_logo.svg.png',
  'NHAI':
    'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/NHAI_Logo.svg/1200px-NHAI_Logo.svg.png',
  'GAIL':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/GAIL_Logo.svg/1200px-GAIL_Logo.svg.png',
  'ONGC':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/ONGC_Logo.svg/1200px-ONGC_Logo.svg.png',
};

const GovernmentClients = ({ title, logos }) => {
  return (
    <div className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-3xl leading-8 font-semibold text-gray-900'>
          {title}
        </h2>
        <div className='mx-auto mt-12 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          {logos.map((logoName) => (
            <img
              key={logoName}
              className='col-span-1 max-h-16 w-full object-contain grayscale transition-all duration-300 ease-in-out hover:scale-105 hover:grayscale-0'
              src={logoSources[logoName]}
              alt={logoName}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GovernmentClients;

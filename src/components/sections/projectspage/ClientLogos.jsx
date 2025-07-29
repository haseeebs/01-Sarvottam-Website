import React from 'react';

const logosData = [
  {
    name: 'L&T',
    src: 'https://tailwindui.com/img/logos/158x48/larsen-toubro-logo-gray-900.svg',
  },
  {
    name: 'GAIL',
    src: 'https://tailwindui.com/img/logos/158x48/gail-logo-gray-900.svg',
  },
  {
    name: 'TransUnion',
    src: 'https://tailwindui.com/img/logos/158x48/transunion-logo-gray-900.svg',
  },
  {
    name: 'Tuple',
    src: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
  },
  {
    name: 'Statamic',
    src: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
  },
  {
    name: 'NHAI',
    src: 'https://tailwindui.com/img/logos/158x48/nhai-logo-gray-900.svg',
  },
];

const ClientLogos = ({ title = 'Trusted by Industry Leaders' }) => {
  return (
    <div className='bg-[#F4F6F8]'>
      <div className='mx-auto max-w-[1200px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='text-center'>
          <h3 className='font-display text-my-primary text-[28px] font-bold'>
            {title}
          </h3>
        </div>
        <div className='mt-12'>
          <div className='flex flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:gap-x-12'>
            {logosData.map((logo) => (
              <div key={logo.name} className='flex justify-center'>
                <img
                  className='max-h-12 w-full object-contain grayscale filter transition-all duration-300 ease-in-out hover:-translate-y-1 hover:grayscale-0'
                  src={logo.src}
                  alt={logo.name}
                  width={158}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;

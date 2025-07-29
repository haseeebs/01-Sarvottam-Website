import React from 'react';

// Placeholder Icons for demonstration purposes
const ShutteringIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
    />
  </svg>
);

const ConsultingIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z'
    />
  </svg>
);

const WeldingIcon = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
    />
  </svg>
);

const iconMap = {
  shuttering: <ShutteringIcon className='h-12 w-12 text-amber-500' />,
  consulting: <ConsultingIcon className='h-12 w-12 text-amber-500' />,
  welding: <WeldingIcon className='h-12 w-12 text-amber-500' />,
};

const serviceData = [
  {
    title: 'Professional Shuttering',
    icon: 'shuttering',
    description:
      'Providing robust and precise formwork to ensure structural integrity and shape for your projects.',
  },
  {
    title: 'Trenchless Tech Consulting',
    icon: 'consulting',
    description:
      'Expert guidance on non-invasive underground utility installation to minimize disruption and cost.',
  },
  {
    title: 'Certified Welding',
    icon: 'welding',
    description:
      'Ensuring structural soundness and durability with high-quality, certified welding for critical components.',
  },
];

const SupportServicesGrid = ({ title, cards = serviceData }) => {
  return (
    <div className='bg-gray-50 py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
        </div>
        <div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3'>
          {cards.map((card) => (
            <div
              key={card.title}
              className='flex flex-col items-center rounded-sm bg-white p-8 text-center shadow-lg transition-transform hover:-translate-y-1'
            >
              <div className='flex-shrink-0'>{iconMap[card.icon]}</div>
              <div className='mt-6'>
                <h3 className='text-xl leading-8 font-semibold text-gray-900'>
                  {card.title}
                </h3>
                <p className='mt-2 text-base leading-7 text-gray-600'>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportServicesGrid;

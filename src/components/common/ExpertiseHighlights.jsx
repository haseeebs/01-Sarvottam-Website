import React from 'react';

const expertiseStats = [
  { value: '15+', label: 'Years Experience' },
  { value: 'Govt.', label: 'Approved Contractor' },
  { value: 'Tough', label: 'Terrains Mastered' },
  { value: '100%', label: 'Safety Compliance' },
];

const ExpertiseHighlights = ({ stats = expertiseStats }) => {
  return (
    <div className='bg-my-primary py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center rounded-sm p-4'
              >
                <h2 className='font-display text-accent order-first text-5xl font-bold'>
                  {stat.value}
                </h2>
                <p className='font-body mt-2 text-base text-white'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseHighlights;

import React from 'react';
import { getYearsOfExperience } from '@/utils/getYearsOfExperience'; // isey import karein

const expertiseStats = [
  { value: `${getYearsOfExperience()}+`, label: 'Years Experience' }, // Isey dynamic banayein
  { value: 'Govt.', label: 'Approved Contractor' },
  { value: 'Tough', label: 'Terrains Mastered' },
  { value: '100%', label: 'Safety Compliance' },
];

const ExpertiseHighlights = ({ stats = expertiseStats }) => {
  return (
    <div className='bg-my-primary border-b-1 py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-none'>
          <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4'>
            {stats.map((stat, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center rounded-sm p-4'
              >
                <div className='font-display text-my-accent order-first text-5xl font-bold'>
                  {stat.value}
                </div>
                <p className='font-body mt-2 text-base text-white/80'>
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

import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
const ExpertiseHighlights = ({ stats }) => {
  return (
    <SectionWrapper className='bg-primary'>
      <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-4'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center rounded-lg p-4'
          >
            <h2 className='font-display text-accent order-first text-5xl font-bold'>
              {stat.value}
            </h2>
            <p className='font-body mt-2 text-base text-white'>{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
export default ExpertiseHighlights;

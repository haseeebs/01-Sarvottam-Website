import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
const CompanyHistory = ({ title, historyPoints, imageUrl, imageAlt }) => {
  return (
    <SectionWrapper className='bg-white'>
      <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20'>
        <div className='relative mx-auto w-full max-w-md'>
          <img
            alt={imageAlt}
            src={imageUrl}
            className='h-full w-full rounded-lg object-cover shadow-lg'
          />
        </div>
        <div>
          <h2 className='font-display text-primary text-3xl font-bold sm:text-4xl'>
            {title}
          </h2>

          <ul className='mt-8 space-y-5'>
            {historyPoints.map((point, index) => (
              <li key={index} className='flex items-start'>
                <span className='flex-shrink-0'>
                  <CheckCircle2 className='text-accent mt-0.5 h-6 w-6' />
                </span>
                <p className='font-body ml-4 text-base leading-relaxed text-gray-700'>
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};
export default CompanyHistory;

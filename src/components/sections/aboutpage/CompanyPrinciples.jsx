import React from 'react';
import { Handshake, Mountain, Award } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

const CompanyPrinciples = ({ principles }) => {
  const principleIcons = {
    'vishwas (trust)': Handshake,
    'dridh sankalp (determination)': Mountain,
    'engineering excellence': Award,
  };

  return (
    <div className='bg-gray-100'>
      <h2 className='font-display text-primary text-center text-4xl font-bold'>
        Our Core Principles
      </h2>
      <div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {principles.map((principle, index) => {
          const key = principle.title.trim().toLowerCase();
          const IconComponent = principleIcons[key] || Award;

          return (
            <div key={index} className='block text-center'>
              <IconComponent className='text-primary mx-auto h-16 w-16 transition-transform hover:scale-110' />

              <h3 className='font-display text-primary mt-4 text-xl font-bold'>
                {principle.title}
              </h3>
              <p className='font-body text-accent mt-2 text-base'>
                {principle.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyPrinciples;

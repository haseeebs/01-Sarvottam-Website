import React from 'react';

// Helper component for the connecting arrow graphic.
const ProcessArrow = () => (
  <div
    aria-hidden='true'
    className='absolute top-10 right-0 hidden w-20 translate-x-1/2 -translate-y-1/2 transform md:block'
  >
    <svg viewBox='0 0 84 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 7.5H75'
        stroke='#94A3B8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeDasharray='6 6'
      />
      <path
        d='M76 1.5L82.5 7.5L76 13.5'
        stroke='#94A3B8'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </div>
);

// The main component. It expects 'steps' to be an array of objects, e.g., [{ title: '...', description: '...' }]
const ServiceProcess = ({ title, steps = [] }) => {
  return (
    <section className='bg-slate-100 py-16 sm:py-24'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <h2 className='text-my-primary/60 mb-16 text-center font-sans text-3xl font-bold md:text-4xl'>
          {title}
        </h2>

        <div className='grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3'>
          {steps.map((step, index) => (
            <div key={index} className='relative px-4 text-center'>
              <span className='text-my-accent/80 font-sans text-5xl font-extrabold'>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className='text-my-primary/60 mt-4 font-sans text-xl font-bold'>
                {step.title}
              </h3>

              <p className='mt-2 font-sans text-base text-slate-600'>
                {step.description}
              </p>

              {/* Render arrow on all but the last item for desktop view */}
              {index < steps.length - 1 && <ProcessArrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;

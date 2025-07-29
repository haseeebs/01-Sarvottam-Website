import React from 'react';

const ProjectsPageHero = ({ headline, body }) => {
  return (
    <div className='relative bg-gray-900'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1529369627985-136f3228994b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Completed landmark infrastructure project'
          className='h-full w-full object-cover'
        />
        <div
          className='bg-my-primary/60 absolute inset-0'
          aria-hidden='true'
        ></div>
      </div>

      {/* Content */}
      <div className='relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl py-16 text-center md:py-24'>
          <h1 className='font-display animate-fade-in-up text-4xl font-bold text-white md:text-5xl'>
            {headline}
          </h1>
          <p
            className='font-body animate-fade-in-up mx-auto mt-6 max-w-[700px] text-base text-[#8D99AE] md:text-lg'
            style={{ animationDelay: '200ms' }}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageHero;

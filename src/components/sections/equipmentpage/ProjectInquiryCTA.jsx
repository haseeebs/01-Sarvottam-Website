import React from 'react';

const ProjectInquiryCTA = () => {
  return (
    <div className='bg-blue-800'>
      <div className='mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-20'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          <span className='block'>Have a project that requires</span>
          <span className='block text-yellow-400'>our specialized fleet?</span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <a
              href='#'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-400 px-5 py-3 text-base font-medium text-gray-900 hover:bg-yellow-300'
            >
              Request a Project Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInquiryCTA;

import React from 'react';

export default function FinalCTASection({ title, buttonText, buttonLink }) {
  const defaultTitle = 'Ready to Discuss Your Next Infrastructure Challenge?';
  const defaultButtonText = 'Request a Quote';
  const defaultButtonLink = '/contact?subject=QuoteRequest';

  const displayTitle = title || defaultTitle;
  const displayButtonText = buttonText || defaultButtonText;
  const displayButtonLink = buttonLink || defaultButtonLink;

  return (
    <div className='bg-my-primary'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='flex flex-col items-center justify-between gap-8 rounded-lg bg-gray-800/50 p-8 md:flex-row md:gap-4 md:p-12'>
          <div className='flex-1'>
            <h2 className='text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-left'>
              <span className='block'>{displayTitle}</span>
            </h2>
          </div>
          <div className='mt-4 flex-shrink-0 md:mt-0'>
            <a
              href={displayButtonLink}
              className='text-my-primary focus:ring-offset-my-primary bg-my-accent focus:ring-my-accent inline-flex items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-bold shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:brightness-105 focus:ring-2 focus:ring-offset-2 focus:outline-none'
            >
              {displayButtonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

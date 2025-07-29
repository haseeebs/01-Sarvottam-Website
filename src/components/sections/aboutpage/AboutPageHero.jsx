import React from 'react';

const AboutPageHero = ({ content, imageUrl, imageAlt }) => {
  if (!content) {
    return null;
  }

  return (
    <section className='bg-gray-50'>
      <div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:py-24 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-16'>
          <div className='order-last md:order-first'>
            <div className='mx-auto max-w-xl text-center md:mx-0 md:text-left'>
              <h1 className='font-display text-my-primary text-4xl font-bold sm:text-[42px] sm:leading-tight'>
                {content.headline}
              </h1>

              <p className='font-body text-my-primary mt-6 text-lg leading-relaxed'>
                {content.body}
              </p>

              <div className='mt-8 flex flex-wrap justify-center gap-4 md:justify-start'>
                <a
                  className='font-display text-my-primary hover:bg-opacity-90 bg-my-accent focus:ring-my-accent block w-full rounded-md px-12 py-3 text-center text-base font-bold shadow transition focus:ring-2 focus:ring-offset-2 focus:outline-none sm:w-auto'
                  href='#'
                >
                  {content.cta}
                </a>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1'>
            <img
              alt={imageAlt}
              src={imageUrl}
              className='h-full w-full rounded-lg object-cover shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;

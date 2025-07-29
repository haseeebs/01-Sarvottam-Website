import React from 'react';

const ContactPageHero = ({ headline, body, cta }) => {
  return (
    <section className='w-full bg-slate-50 py-20 md:py-28'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center space-y-6 text-center md:space-y-8'>
          <h1 className='max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-5xl'>
            {headline}
          </h1>
          <p className='max-w-[750px] text-lg text-gray-600 md:text-xl'>
            {body}
          </p>
          {cta && (
            <a
              href='#contact'
              className='bg-my-primary/50 hover:bg-my-primary focus-visible:outline-my-primary inline-block rounded-sm px-8 py-3 text-lg font-semibold text-white shadow-sm transition-colors duration-300 focus-visible:outline focus-visible:outline-offset-2'
            >
              {cta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPageHero;

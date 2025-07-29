import React from 'react';

const CrossingServicesHero = ({ content, imageUrl }) => {
  // Props se content extract karna
  const { headline, body, cta } = content;

  return (
    <section className='bg-gray-50 py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-16'>
          {/* Image section (DOM mein pehle, taaki mobile par upar dikhe) */}
          <div className='lg:order-2'>
            <img
              className='aspect-video h-auto w-full rounded-xl object-cover shadow-xl'
              src={
                imageUrl ||
                'https://images.unsplash.com/photo-1599481238623-7140000a6848?q=80&w=1287&auto=format&fit=crop'
              }
              alt='Completed tunnel crossing under a highway'
            />
          </div>

          {/* Text content section (Desktop par left mein, mobile par neeche) */}
          <div className='text-center lg:order-1 lg:text-left'>
            {/* Headline */}
            <h1 className='text-my-primary mt-2 font-serif text-4xl font-bold tracking-tight sm:text-5xl'>
              {headline}
            </h1>

            {/* Body */}
            <p className='mx-auto mt-6 max-w-2xl font-sans text-lg leading-8 text-gray-700 lg:mx-0'>
              {body}
            </p>

            {/* CTA Button */}
            <div className='mt-8'>
              <a
                href='#quote'
                className='text-my-primary inline-block rounded-md bg-amber-400 px-8 py-3 text-base font-semibold shadow-lg transition-colors hover:bg-amber-500 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:outline-none'
              >
                {cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossingServicesHero;

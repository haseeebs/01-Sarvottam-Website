import React from 'react';

const AboutPageHero = ({ content, imageUrl, imageAlt }) => {
  if (!content) {
    return null;
  }

  return (
    // Component 1 ka main structure, Component 2 se background color (bg-gray-50)
    <section className='relative bg-gray-50'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        {/* === LEFT COLUMN (TEXT CONTENT) === */}
        {/* Component 1 se column structure (col-span, padding, etc.) */}
        <div className='px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-12 lg:pb-20 xl:col-span-6'>
          <div className='mx-auto max-w-lg text-center md:mx-0 md:text-left'>
            {/* Headline (h1) - Component 2 se style aur content */}
            <h1 className='font-display text-my-primary text-4xl font-bold sm:text-[42px] sm:leading-tight'>
              {content.headline}
            </h1>

            {/* Body (p) - Component 2 se style aur content */}
            <p className='font-body text-my-primary mt-6 text-lg leading-relaxed'>
              {content.body}
            </p>

            {/* CTA Button - Component 2 se 'a' tag, style aur content */}
            <div className='mt-8 flex justify-center md:justify-start'>
              <a
                href={content.ctaHref || '#'}
                className='font-display text-my-primary hover:bg-opacity-90 bg-my-accent focus:ring-my-accent block w-full rounded-md px-12 py-3 text-center text-base font-bold shadow transition focus:ring-2 focus:ring-offset-2 focus:outline-none sm:w-auto'
              >
                {content.cta}
              </a>
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN (IMAGE) === */}
        {/* Component 1 se advanced image positioning structure */}
        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          <img
            src={imageUrl}
            alt={imageAlt}
            // Classes C1 aur C2 se combine ki gayi hain: C1 se layout/aspect, C2 se styling (rounded, shadow)
            className='aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;

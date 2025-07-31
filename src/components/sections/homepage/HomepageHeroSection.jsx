import React from 'react';
import { Button } from '@/components/ui/Button';

const HomepageHero = ({ headline, body, cta, imageSrc, imageAlt }) => {
  return (
    // Component 1 ka main structure, lekin background color Component 2 se liya gaya hai.
    <div className='bg-my-primary relative'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        {/* === LEFT COLUMN (TEXT CONTENT) === */}
        <div className='px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-12 lg:pb-20 xl:col-span-6'>
          <div className='mx-auto max-w-lg lg:mx-0'>
            {/* Headline (h1) - Text Component 2 se aur structure Component 1 se */}
            <h1 className='font-family-display mt-10 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-5xl'>
              {headline}
            </h1>

            {/* Body (p) - Text Component 2 se aur structure Component 1 se */}
            <p className='text-my-secondary font-family-body mt-8 text-lg font-medium sm:text-xl/8'>
              {body}
            </p>

            {/* CTA Button - Style aur content Component 2 se */}
            <div className='mt-10 flex items-center'>
              <Button variant={'primary'} size={'lg'}>
                {cta}
              </Button>
            </div>
          </div>
        </div>

        {/* === RIGHT COLUMN (IMAGE) === */}
        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          <img
            src={imageSrc}
            alt={imageAlt}
            className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;

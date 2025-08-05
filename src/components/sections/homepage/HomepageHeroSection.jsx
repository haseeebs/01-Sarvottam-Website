import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import HeroCarousel from '@/components/common/HeroCarousel'; // Naya component import karein

// Props mein carouselImages ko add karein
const HomepageHero = ({
  children,
  body,
  cta,
  imageSrc,
  imageAlt,
  carouselImages,
}) => {
  const [isCarouselReady, setIsCarouselReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCarouselReady(true);
    }, 5000); // 2-second ka delay

    // Cleanup function: agar component unmount ho jaye to timer clear kar dein
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-my-primary relative min-h-screen'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <div className='px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-12 lg:pb-20 xl:col-span-6'>
          <div className='mx-auto max-w-lg lg:mx-0'>
            <h1 className='font-family-display mt-10 text-4xl font-bold tracking-tight text-white sm:mt-10 sm:text-5xl'>
              {children}
            </h1>

            <p className='text-my-secondary font-family-body mt-8 text-lg font-medium sm:text-xl/8'>
              {body}
            </p>

            <div className='mt-10 flex items-center'>
              <Button variant={'primary'} size={'lg'}>
                {cta}
              </Button>
            </div>
          </div>
        </div>

        {/* Image/Carousel Section ko conditionally render karein */}
        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          {isCarouselReady ? (
            // Agar carousel ready hai, to poora carousel dikhayein
            <HeroCarousel images={carouselImages} />
          ) : (
            // Warna, shuruaat mein sirf pehli image dikhayein
            <img
              src={imageSrc}
              alt={imageAlt}
              className='aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
              loading='eager' // Pehli image hamesha eager honi chahiye
              fetchpriority='high'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomepageHero;

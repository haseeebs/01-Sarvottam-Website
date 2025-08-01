import React from 'react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPageHero = ({ content, imageUrl, imageAlt }) => {
  if (!content) {
    return null;
  }

  return (
    <section className='relative'>
      <div className='mx-auto min-h-screen max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <div className='px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-12 lg:pb-20 xl:col-span-6'>
          <div className='mx-auto max-w-lg text-center md:mx-0 md:text-left'>
            <h1 className='font-display text-my-primary text-4xl font-bold sm:text-[42px] sm:leading-tight'>
              {content.headline}
            </h1>

            <p className='font-family-body text-my-primary mt-6 text-lg leading-relaxed'>
              ...our skilled and experienced team is adept at navigating the
              complexities of government tenders and{' '}
              <Link to='/projects' className='font-bold hover:underline'>
                <i>delivering results</i>
              </Link>{' '}
              that meet the highest standards of quality and safety.
            </p>

            <div className='mt-8 flex justify-center md:justify-start'>
              <Button variant={'outline-primary'} size={'lg'}>
                <Link to={content.ctaHref || '#'}>{content.cta}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          <img
            src={imageUrl}
            alt={imageAlt}
            className='aspect-[3/2] w-full object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;

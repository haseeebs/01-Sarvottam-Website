import React from 'react';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import CTAImg from '@/assets/images/CTAImg.jpg';

// 1. CVA ke Saath Variants Define Karna
// Base classes aur variant-specific classes yahan define ki jaati hain.
const ctaVariants = cva(
  'bg-my-primary relative', // Base classes
  {
    variants: {
      variant: {
        'image-left': 'border-b-1',
        'inline': 'border-b-1',
        'stacked-center': 'py-16 sm:py-24',
      },
    },
    defaultVariants: {
      variant: 'inline',
    },
  },
);

/**
 * Ek versatile Call-to-Action component jo CVA istemal karta hai.
 * @param {object} props - Component ke liye props.
 * @param {'image-left' | 'inline' | 'stacked-center'} [props.variant='inline'] - CTA ka layout variant.
 * @param {React.ReactNode} props.title - CTA mein dikhaya jaane wala mukhya text ya title.
 * @param {string} [props.description] - Title ke neeche dikhaya jaane wala optional vivaran.
 * @param {string} props.buttonText - Button par dikhaya jaane wala text.
 * @param {string} [props.buttonLink='/contact'] - Button ka navigation link.
 * @param {'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'} [props.buttonVariant='default'] - Button component ka variant.
 * @param {string} [props.imgUrl=CTAImg] - 'image-left' variant ke liye image ka URL.
 * @param {string} [props.className] - Bahar se di jaane wali extra CSS classes.
 */
const CTA = React.forwardRef(
  (
    {
      className,
      variant = 'inline',
      title,
      description,
      buttonText,
      buttonLink = '/contact',
      buttonVariant = 'primary',
      imgUrl = CTAImg,
      ...props
    },
    ref,
  ) => {
    // Har variant ke liye alag se content structure render karna.
    const renderContent = () => {
      switch (variant) {
        case 'image-left':
          return (
            <>
              <div className='relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2'>
                <img
                  alt='Infrastructure project'
                  src={imgUrl}
                  className='size-full object-cover'
                />
              </div>
              <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-24'>
                <div className='pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32'>
                  <h2 className='mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
                    {title}
                  </h2>
                  {description && (
                    <p className='mt-6 text-base/7 text-gray-300'>
                      {description}
                    </p>
                  )}
                  <div className='mt-8'>
                    <Button variant={buttonVariant} size='lg' asChild>
                      <Link to={buttonLink}>{buttonText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          );
        case 'inline':
          return (
            <div className='mx-auto max-w-7xl px-6 py-16 sm:px-6 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8'>
              <div>
                <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                  {title}
                </h2>
                {description && (
                  <p className='mt-4 max-w-xl text-base text-gray-300'>
                    {description}
                  </p>
                )}
              </div>
              <div className='mt-8 flex lg:mt-0 lg:shrink-0'>
                <Button variant={buttonVariant} size='lg' asChild>
                  <Link to={buttonLink}>{buttonText}</Link>
                </Button>
              </div>
            </div>
          );
        case 'stacked-center':
          return (
            <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
              <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                {title}
              </h2>
              {description && (
                <p className='mx-auto mt-6 max-w-2xl text-lg/8 text-gray-300'>
                  {description}
                </p>
              )}
              <div className='mt-10 flex justify-center'>
                <Button variant={buttonVariant} size='lg' asChild>
                  <Link to={buttonLink}>{buttonText}</Link>
                </Button>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      // 3. CVA variants ko `cn` ke zariye apply karna
      <div
        className={cn(ctaVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {renderContent()}
      </div>
    );
  },
);
CTA.displayName = 'CTA';

export default CTA;

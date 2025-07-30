import React from 'react';
import { Link } from 'react-router-dom';

// Ek default image import karein, agar koi image na di jaaye toh yeh istemal hogi.
// Apne project ke structure ke hisab se is path ko aavashyakta anusaar badlein.
import CTAImg from '@/assets/images/CTAImg.jpg';

/**
 * Button ke style ke liye CSS classes laane wala ek helper function.
 * @param {string} style - Button ka style ('solid-accent', 'solid-amber', 'outline-amber', 'outline-white').
 * @returns {string} Tailwind CSS classes.
 */
const getButtonClasses = (style) => {
  switch (style) {
    case 'solid-amber':
      return 'rounded-sm bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500';
    case 'outline-white':
      return 'mt-8 inline-flex w-full items-center justify-center rounded-sm border-2 border-white px-8 py-3 font-sans text-base font-medium text-white transition-colors duration-300 hover:bg-white hover:text-my-primary/60 sm:w-auto';
    case 'outline-amber':
      return 'rounded-sm border-2 border-amber-400 bg-transparent px-6 py-3 text-sm font-semibold text-amber-400 shadow-sm transition-colors duration-300 ease-in-out hover:bg-amber-400 hover:text-my-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400';
    case 'solid-accent':
    default:
      return 'text-my-primary focus:ring-offset-my-primary bg-my-accent focus:ring-my-accent inline-flex items-center justify-center rounded-sm border border-transparent px-8 py-3 text-base font-bold shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:brightness-105 focus:ring-2 focus:ring-offset-2 focus:outline-none';
  }
};

/**
 * Ek versatile Call-to-Action component jo alag-alag layout aur style support karta hai.
 *
 * @param {object} props - Component ke liye props.
 * @param {'image-left' | 'inline' | 'stacked-center'} [props.variant='inline'] - CTA ka layout variant.
 * @param {React.ReactNode} props.title - CTA mein dikhaya jaane wala mukhya text ya title.
 * @param {string} [props.description] - Title ke neeche dikhaya jaane wala optional vivaran.
 * @param {string} props.buttonText - Button par dikhaya jaane wala text.
 * @param {string} [props.buttonLink='#'] - Button ka navigation link.
 * @param {'solid-accent' | 'solid-amber' | 'outline-amber' | 'outline-white'} [props.buttonStyle='solid-accent'] - Button ka visual style.
 * @param {string} [props.imgUrl=CTAImg] - 'image-left' variant ke liye image ka URL.
 */
const CTA = ({
  variant = 'inline',
  title,
  description,
  buttonText,
  buttonLink = '#',
  buttonStyle = 'solid-accent',
  imgUrl = CTAImg,
}) => {
  const buttonClasses = getButtonClasses(buttonStyle);

  // Variant 1: Left mein image, Right mein content (CtaSection.jsx jaisa)
  if (variant === 'image-left') {
    return (
      <div className='bg-my-primary relative border-b-1'>
        {/* Decorative image aur gradient */}
        <div className='relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2'>
          <img
            alt='Infrastructure project'
            src={imgUrl}
            className='size-full object-cover'
          />
          <svg
            viewBox='0 0 926 676'
            aria-hidden='true'
            className='absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]'
          >
            <path
              d='m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z'
              fill='url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)'
              fillOpacity='.4'
            />
            <defs>
              <linearGradient
                id='60c3c621-93e0-4a09-a0e6-4c228a0116d8'
                x1='926.392'
                x2='-109.635'
                y1='.176'
                y2='321.024'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#776FFF' />
                <stop offset={1} stopColor='#FF4694' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Content */}
        <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-24'>
          <div className='pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32'>
            <h2 className='mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
              {title}
            </h2>
            {description && (
              <p className='mt-6 text-base/7 text-gray-300'>{description}</p>
            )}
            <div className='mt-8'>
              <Link to={buttonLink} className={buttonClasses}>
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Variant 2: Left mein title, Right mein button (CtaSection2.jsx jaisa)
  if (variant === 'inline') {
    return (
      <div className='bg-my-primary border-b-1'>
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
            <Link to={buttonLink} className={buttonClasses}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Variant 3: Center mein text aur button, ek ke neeche ek (PrimaryCTA.jsx jaisa)
  if (variant === 'stacked-center') {
    return (
      <div className='bg-my-primary'>
        <div className='mx-auto max-w-7xl px-6 py-16 text-center sm:py-24 lg:px-8'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            {title}
          </h2>
          {description && (
            <p className='mx-auto mt-6 max-w-2xl text-lg/8 text-gray-300'>
              {description}
            </p>
          )}
          <div className='mt-10 flex justify-center'>
            <Link to={buttonLink} className={buttonClasses}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CTA;

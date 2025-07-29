import { Link } from 'react-router-dom';

const CtaSection = ({ title, buttonText, buttonLink }) => {
  const defaultTitle = 'Ready to Discuss Your Next Infrastructure Challenge?';
  const defaultButtonText = 'Request a Quote';
  const defaultButtonLink = '/contact?subject=QuoteRequest';

  const displayTitle = title || defaultTitle;
  const displayButtonText = buttonText || defaultButtonText;
  const displayButtonLink = buttonLink || defaultButtonLink;

  return (
    <div className='bg-my-primary/95 relative'>
      <div className='relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2'>
        <img
          alt=''
          src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply'
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
      <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-24'>
        <div className='pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32'>
          <p className='mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl'>
            {displayTitle}
          </p>
          <p className='mt-6 text-base/7 text-gray-300'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className='mt-8'>
            <Link
              to={displayButtonLink}
              className='text-my-primary focus:ring-offset-my-primary bg-my-accent focus:ring-my-accent inline-flex items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-bold shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:brightness-105 focus:ring-2 focus:ring-offset-2 focus:outline-none'
            >
              {displayButtonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

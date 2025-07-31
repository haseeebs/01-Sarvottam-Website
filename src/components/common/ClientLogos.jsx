import React from 'react';
// Maan lein ki Marquee component yahan uplabdh hai, jaisa ki ek source file mein tha
// Agar aapke paas yah component nahin hai, to aap `layout='marquee'` ka upyog nahin kar payenge
// aur is import ko hata sakte hain.
import { Marquee } from '@/components/magicui/marquee';

// Props na diye jaane par istemal hone wala default data
const defaultTitle = 'Trusted By Leading Teams & Companies';
const defaultLogos = [
  {
    name: 'Larsen & Toubro',
    logoUrl: 'https://logo.clearbit.com/ltconstruction.com',
  },
  { name: 'GAIL', logoUrl: 'https://logo.clearbit.com/gailonline.com' },
  { name: 'Indian Oil', logoUrl: 'https://logo.clearbit.com/iocl.com' },
  { name: 'NTPC', logoUrl: 'https://logo.clearbit.com/ntpc.co.in' },
  {
    name: 'Reliance Industries',
    logoUrl: 'https://logo.clearbit.com/ril.com',
  },
  { name: 'NHAI', logoUrl: 'https://logo.clearbit.com/nhai.gov.in' },
  {
    name: 'Indian Railways',
    logoUrl: 'https://logo.clearbit.com/indianrailways.gov.in',
  },
  {
    name: 'Afcons Infrastructure',
    logoUrl: 'https://logo.clearbit.com/afcons.com',
  },
  {
    name: 'Dilip Buildcon',
    logoUrl:
      'https://upload.wikimedia.org/wikipedia/commons/d/dd/Dilip_Buildcon_Logo.png',
  },
  {
    name: 'Tata',
    logoUrl: 'https://cdn.worldvectorlogo.com/logos/tata-logo.svg',
  },
];

/**
 * Ek versatile client logos component jo props (jaise title, logos) le sakta hai.
 * @param {object} props - Component ke props.
 * @param {string} [props.title] - Logos ke upar dikhaya jaane wala title.
 * @param {Array<object>} [props.logos] - Logo objects ka ek array. Har object mein 'name' aur 'logoUrl' hona chahiye.
 * @param {'grid' | 'marquee'} [props.layout='grid'] - Logos ko dikhaane ke liye layout.
 * @param {boolean} [props.grayscale=false] - Kya logos ko grayscale mein dikhana hai.
 */
const ClientLogosNew = ({
  title = defaultTitle,
  logos = defaultLogos,
  layout = 'grid',
  grayscale = false, // Grayscale ke liye naya prop, default 'false'
}) => {
  // Agar 'logos' prop khaali array hai to default logos ka istemal karein
  const logosToDisplay = logos && logos.length > 0 ? logos : defaultLogos;

  // Grayscale prop ke aadhar par className ko dynamically generate karein
  const getLogoClassName = (baseClasses) => {
    let finalClasses = `${baseClasses} transition-all duration-300 ease-in-out dark:brightness-0 dark:invert`;
    if (grayscale) {
      finalClasses += ' grayscale hover:grayscale-0';
    }
    return finalClasses;
  };

  const GridView = () => (
    <div className='mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
      {logosToDisplay.map((logo) => (
        <img
          key={logo.name}
          className={getLogoClassName(
            'col-span-1 max-h-12 w-full object-contain',
          )}
          src={logo.logoUrl}
          alt={`${logo.name} logo`}
          width={158}
          height={48}
        />
      ))}
    </div>
  );

  const MarqueeView = () => (
    <div className='relative mt-10'>
      <Marquee pauseOnHover className='[--duration:50s]'>
        {logosToDisplay.map((logo, idx) => (
          <img
            key={idx}
            src={logo.logoUrl}
            alt={`${logo.name} logo`}
            className={getLogoClassName(
              'mx-4 h-16 w-36 cursor-pointer object-contain',
            )}
          />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-gray-50 dark:from-gray-900'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-gray-50 dark:from-gray-900'></div>
    </div>
  );

  return (
    <section className='bg-gray-50 py-16 sm:py-24 dark:bg-gray-900'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-xl leading-8 font-semibold text-gray-800 dark:text-gray-200'>
          {title}
        </h2>
        {layout === 'marquee' ? <MarqueeView /> : <GridView />}
      </div>
    </section>
  );
};

export default ClientLogosNew;

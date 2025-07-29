import SectionWrapper from '@/components/ui/SectionWrapper';

const LogoCloud = ({ title }) => {
  // logos should be an array of objects: [{ src: '/path/to/logo.png', alt: 'Client Name' }]

  const logos = [
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
  ];

  return (
    <SectionWrapper>
      <h3 className='text-muted-foreground text-center text-xl font-semibold'>
        {title}
      </h3>
      <div className='mt-8 flow-root'>
        <div className='-m-2 flex flex-wrap justify-center gap-x-8 gap-y-4'>
          {logos.map((logo) => (
            <div
              key={logo.name}
              className='flex flex-shrink-0 justify-center text-center'
            >
              <img
                className='h-12 w-auto object-contain'
                src={logo.logoUrl}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LogoCloud;

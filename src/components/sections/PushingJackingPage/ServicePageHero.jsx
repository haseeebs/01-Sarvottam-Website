const ServicePageHero = ({ headline, body, cta }) => {
  return (
    <div className='relative w-full bg-cover bg-center font-sans'>
      {/* Corporate Blue Overlay */}
      <div className='bg-opacity-60 bg-my-primary absolute inset-0'></div>

      <div className='relative mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:px-8'>
        <div className='text-center md:text-left'>
          <h1 className='text-4xl font-bold text-white md:text-5xl'>
            {/* Font: Montserrat (Requires font setup in your project) */}
            {headline}
          </h1>
          <p className='mx-auto mt-6 max-w-3xl text-lg text-white/85 md:mx-0'>
            {/* Font: Lato (Requires font setup in your project) */}
            {body}
          </p>
          <div className='mt-10'>
            <a
              href='#'
              className='text-my-primary inline-block rounded-sm bg-amber-400 px-8 py-3 text-base font-semibold shadow-sm transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;

const PrimaryCTA = ({ title, buttonText }) => {
  return (
    <div className='bg-my-primary font-sans'>
      <div className='mx-auto max-w-7xl px-6 py-16 text-center sm:py-24 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          {/* Font: Montserrat (Requires font setup in your project) */}
          {title}
        </h2>
        <div className='mt-8 flex justify-center'>
          <a
            href='#'
            className='text-my-primary inline-block rounded-md bg-amber-400 px-8 py-3 text-base font-semibold shadow-sm transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400'
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCTA;

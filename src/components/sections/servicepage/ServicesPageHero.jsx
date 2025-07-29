const ServicesPageHero = ({ headline, body }) => {
  return (
    <section className='bg-slate-50 py-20 sm:py-28'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-my-primary/60 font-sans text-3xl font-bold tracking-tight md:text-5xl'>
            {headline}
          </h1>
          <p className='mx-auto mt-6 max-w-3xl font-sans text-base leading-relaxed text-slate-700 md:text-lg'>
            {body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPageHero;

const KeyBenefits = ({ title, features }) => {
  return (
    <div className='bg-gray-50 py-16 font-sans sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-my-primary text-3xl font-bold tracking-tight sm:text-4xl'>
            {title}
          </h2>
        </div>
        <div className='mx-auto mt-16 max-w-lg sm:mt-20 lg:mt-24 lg:max-w-none'>
          <div className='grid grid-cols-1 gap-y-12 sm:gap-x-8 lg:grid-cols-3'>
            {features.map((feature) => (
              <div key={feature.name} className='sm:text-left'>
                <div className='flex items-center sm:justify-start'>
                  {/* The Icon component should be passed as a prop */}
                  <feature.Icon
                    className='text-my-accent h-12 w-12'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-my-primary mt-5 text-xl leading-7 font-semibold'>
                  {feature.name}
                </h3>
                <p className='text-my-secondary mt-2 text-base leading-7'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;

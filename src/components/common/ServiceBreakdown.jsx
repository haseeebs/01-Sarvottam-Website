const ServiceBreakdown = ({ service1, service2, imageSrc }) => {
  return (
    <section className='bg-white py-16 font-sans sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-y-12 sm:gap-x-16 md:grid-cols-2'>
          {/* Text Content Column */}
          <div className='text-left'>
            {/* Box Pushing Block */}
            <div>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                {service1.title}
              </h3>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                {service1.description}
              </p>
            </div>

            {/* Pipe Pushing Block */}
            <div className='mt-10'>
              <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                {service2.title}
              </h3>
              <p className='mt-4 text-lg leading-8 text-gray-600'>
                {service2.description}
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className='order-first md:order-last'>
            <img
              src={imageSrc}
              alt='Isometric 3D schematic of Box Pushing and Pipe Jacking processes'
              className='aspect-square h-auto w-full rounded-sm bg-gray-100 object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;

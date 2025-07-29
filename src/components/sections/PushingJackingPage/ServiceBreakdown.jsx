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
              className='aspect-square h-auto w-full rounded-lg bg-gray-100 object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBreakdown;
// Example of how to use this component with props:
/*
<TwoColumnContent 
  service1={{
    title: "Box Pushing (RCC/Precast)",
    description: "Ideal for creating robust underpasses for railways or pedestrians. We use powerful hydraulic systems to push precast concrete box segments into place with minimal surface disruption, ensuring structural integrity and timely project completion."
  }}
  service2={{
    title: "Pipe Pushing & Jacking",
    description: "A trenchless method for installing large-diameter pipelines for water, sewage, or utility conduits. This technique minimizes environmental impact and is perfect for crossing roads, railways, and other sensitive areas without open-cut excavation."
  }}
  // Replace with your actual image path for the schematic
  imageSrc="https://placehold.co/800x800/e2e8f0/334155?text=Technical+Schematic" 
/>
*/

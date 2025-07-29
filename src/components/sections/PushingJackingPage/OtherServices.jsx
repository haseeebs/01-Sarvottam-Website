import { Link } from 'react-router-dom';

const OtherServices = ({ title, services }) => {
  return (
    <div className='bg-white py-16 font-sans sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {services.map((service) => (
            <Link
              key={service.name}
              to={service.to}
              className='group flex flex-col items-start rounded-lg border border-gray-200 p-8 transition-all duration-300 hover:border-transparent hover:shadow-lg'
            >
              <div className='flex-shrink-0'>
                {/* The Icon component should be passed via props */}
                <service.Icon
                  className='h-10 w-10 text-blue-900 transition-colors group-hover:text-amber-500'
                  aria-hidden='true'
                />
              </div>
              <div className='mt-6'>
                <h3 className='text-lg leading-7 font-semibold text-gray-900'>
                  {service.name}
                </h3>
                <p className='mt-2 text-base leading-7 text-gray-600'>
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherServices;

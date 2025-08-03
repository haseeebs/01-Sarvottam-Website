import React from 'react';

const ClientGrid = ({ clients, title }) => {
  // If there are no clients, don't render the component
  if (!clients || clients.length === 0) {
    return null;
  }

  return (
    <div className='bg-my-primary font-body py-12 sm:py-16'>
      <div className='container mx-auto max-w-7xl px-4 text-center'>
        {/* The title for the client section */}
        {title && (
          <h2 className='mb-8 text-xl font-semibold tracking-wider text-white/80 uppercase sm:mb-12 sm:text-2xl'>
            {title}
          </h2>
        )}

        {/* The responsive grid for client names */}
        <div className='grid grid-cols-2 text-left sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {clients.map((client, index) => (
            <div key={index} className='flex items-center border-1 p-5'>
              <p className='text-base font-medium text-white/90 sm:text-lg'>
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientGrid;

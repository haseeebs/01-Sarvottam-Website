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
        <div className='grid grid-cols-2 gap-4 text-left sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5'>
          {clients.map((client, index) => (
            <div
              key={index}
              className='group flex items-center justify-center rounded-lg border-2 border-white/20 bg-white/5 p-4 transition-all duration-300 ease-in-out hover:scale-105 hover:border-white/40 hover:bg-white/10'
              style={{
                animation: `fadeInUp 0.5s ${index * 0.05}s ease-out forwards`,
                opacity: 0,
              }}
            >
              <p className='text-center text-base font-medium text-white/90 sm:text-lg'>
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ClientGrid;

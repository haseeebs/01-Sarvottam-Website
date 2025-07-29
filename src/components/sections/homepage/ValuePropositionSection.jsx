import React from 'react';

export default function ValuePropositionSection({ imageSrc, body }) {
  const defaultBody =
    "Built on a foundation of 'Vishwas + dridh sankalp' (Trust and Determination), we specialize in delivering expert trenchless technology, tunnel crossing, and box pushing services.";
  const defaultImage =
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80';

  const contentBody = body || defaultBody;
  const displayImage = imageSrc || defaultImage;

  return (
    <section className='bg-white py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16'>
          <div className='order-last lg:order-first'>
            <div className='max-w-lg'>
              <p className='text-base font-semibold tracking-wider text-[#D4AF37] uppercase'>
                Our Foundation
              </p>
              <h2 className='mt-2 text-3xl font-extrabold tracking-tight text-[#212529] sm:text-4xl'>
                Commitment through Trust and Determination
              </h2>
              <p className='mt-6 text-lg leading-relaxed text-gray-600'>
                {contentBody}
              </p>
            </div>
          </div>
          <div className='h-80 w-full lg:h-full'>
            <img
              className='h-full w-full rounded-xl object-cover shadow-lg'
              src={displayImage}
              alt='A dedicated construction team working on a project, representing trust and determination.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

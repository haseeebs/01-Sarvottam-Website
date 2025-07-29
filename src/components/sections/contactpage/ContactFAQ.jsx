import React, { useState } from 'react';

const ContactFAQ = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='bg-white py-20 sm:py-24'>
      <div className='container mx-auto max-w-3xl px-4'>
        <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
          {title}
        </h2>
        <div className='mt-12 space-y-4'>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className='border-b border-gray-200 last:border-b-0'
              >
                <button
                  onClick={() => handleToggle(index)}
                  className='flex w-full items-center justify-between py-4 text-left'
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className='text-lg font-bold text-gray-900'>
                    {item.question}
                  </span>
                  <span className='ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center'>
                    <span
                      className={`relative h-6 w-6 transform transition-transform duration-300 ease-in-out ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      <span className='absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-gray-500'></span>
                      <span className='absolute top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-500'></span>
                    </span>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className='overflow-hidden transition-all duration-500 ease-in-out'
                  style={{ maxHeight: isOpen ? '20rem' : '0' }}
                >
                  <div className='pr-10 pb-4'>
                    <div className='rounded-md bg-slate-100 p-4'>
                      <p className='text-base leading-relaxed text-gray-700'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;

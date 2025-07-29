import React from 'react';

// Dummy data to populate the component. In a real application, this would be passed as props.
const testimonials = [
  {
    quote:
      'Their commitment to quality and timelines is unmatched. Working with them on the national highway expansion project was a seamless experience. True professionals who understand the scale and complexity of infrastructure demands.',
    name: 'Rohan Verma',
    title: 'Project Lead, NHAI Division',
    // image: 'path/to/image1.jpg' // Optional image
  },
  // Add more testimonials here to be used by a slider library
];

const ClientTestimonials = ({ title }) => {
  // We will render only the first testimonial to represent the style of a single slide.
  // A real implementation would use a library like Swiper.js or Embla Carousel.
  const testimonial = testimonials[0];

  return (
    <section className='relative isolate overflow-hidden bg-slate-100 px-6 py-24 sm:py-32 lg:px-8'>
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>
        <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          {title}
        </h2>
        <figure className='mt-16'>
          <blockquote className='relative text-center text-xl leading-8 font-medium text-slate-800 sm:text-2xl sm:leading-9'>
            <div className='absolute -top-4 -left-2 -z-10 text-8xl font-black text-slate-200/80 sm:-left-4'>
              “
            </div>
            <p>“{testimonial.quote}”</p>
          </blockquote>
          <figcaption className='mt-10'>
            {/* Optional: Add image here if available */}
            {/* <img className="mx-auto h-10 w-10 rounded-full" src={testimonial.image} alt="" /> */}
            <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
              <cite className='font-semibold text-gray-900 not-italic'>
                {testimonial.name}
              </cite>
              <svg
                viewBox='0 0 2 2'
                width={3}
                height={3}
                aria-hidden='true'
                className='fill-gray-900'
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <cite className='text-gray-600 not-italic'>
                {testimonial.title}
              </cite>
            </div>
          </figcaption>
        </figure>
        {/* Placeholder for slider navigation dots */}
        <div className='mt-12 flex justify-center gap-x-3'>
          <button
            aria-label='Go to slide 1'
            className='bg-my-primary h-2.5 w-2.5 rounded-full'
          ></button>
          <button
            aria-label='Go to slide 2'
            className='h-2.5 w-2.5 rounded-full bg-slate-400 hover:bg-slate-500'
          ></button>
          <button
            aria-label='Go to slide 3'
            className='h-2.5 w-2.5 rounded-full bg-slate-400 hover:bg-slate-500'
          ></button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;

import React from 'react';
import { Link } from 'react-router-dom';
// NOTE: For a functional slider, a library like Swiper.js is recommended.
// Installation: `npm install swiper`
// This component is structured to be easily integrated with Swiper.

// A sub-component for individual project cards.
const ProjectCard = ({ imageUrl, projectName, serviceType }) => (
  <Link
    to='#'
    className='group relative block aspect-[4/3] overflow-hidden rounded-lg shadow-lg'
  >
    <img
      src={imageUrl}
      alt={`Project: ${projectName}`}
      className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
    />
    <div
      className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent'
      aria-hidden='true'
    ></div>
    <div className='absolute bottom-0 left-0 w-full p-4 text-white'>
      <h3 className='font-sans text-lg leading-tight font-bold'>
        {projectName}
      </h3>
      <p className='mt-1 font-sans text-sm opacity-90'>{serviceType}</p>
    </div>
  </Link>
);

const ProjectsHighlight = ({ title, projects = [] }) => {
  return (
    <section className='bg-slate-50 py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='text-my-primary/60 mb-12 text-center font-sans text-3xl font-bold md:text-4xl'>
          {title}
        </h2>

        {/* 
          Slider Container: This would be your <Swiper> component.
          The responsive `slidesPerView` prop (e.g., 1.5 for mobile, 2 for tablet, 3 for desktop)
          would be configured on this component. Navigation elements would be linked here.
        */}
        <div className='relative'>
          {/* This grid is a static fallback. In a real implementation with Swiper,
              you would map over `projects` and render each card inside a `<SwiperSlide>` tag. */}
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                imageUrl={project.imageUrl}
                projectName={project.projectName}
                serviceType={project.serviceType}
              />
            ))}
          </div>

          {/* 
            Slider Navigation: These are placeholder buttons. A library like Swiper
            would handle their functionality. They are styled to be clean and minimalist.
          */}
          <button
            aria-label='Previous project'
            className='absolute top-1/2 left-0 flex hidden h-10 w-10 -translate-x-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-colors hover:bg-white lg:flex'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-slate-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button
            aria-label='Next project'
            className='absolute top-1/2 right-0 flex hidden h-10 w-10 translate-x-12 -translate-y-1/2 transform items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-colors hover:bg-white lg:flex'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-slate-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;

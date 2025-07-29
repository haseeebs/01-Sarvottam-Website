import React from 'react';
// NOTE: This component requires the 'swiper' library.
// Install it with: npm install swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MapPinIcon } from '@heroicons/react/24/solid';

// Dummy data representing projects filtered by the "Pushing & Jacking" category
const projects = [
  {
    title: 'NH-48 Underpass Construction',
    location: 'Gurugram, Haryana',
    category: 'Pushing & Jacking',
    imageUrl:
      'https://images.unsplash.com/photo-1519408436233-34502b183a26?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Railway Line Box Culvert',
    location: 'Mumbai, Maharashtra',
    category: 'Pushing & Jacking',
    imageUrl:
      'https://images.unsplash.com/photo-1593349122524-7446587c69da?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'City Metro Tunneling Support',
    location: 'Bangalore, Karnataka',
    category: 'Pushing & Jacking',
    imageUrl:
      'https://images.unsplash.com/photo-1599303217595-3004b901615f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    title: 'Urban Sewer Line Installation',
    location: 'Delhi, NCT',
    category: 'Pushing & Jacking',
    imageUrl:
      'https://images.unsplash.com/photo-1614359828283-e7b39a3fed9a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'River Crossing Utility Casing',
    location: 'Kolkata, West Bengal',
    category: 'Pushing & Jacking',
    imageUrl:
      'https://images.unsplash.com/photo-1551711204-358a14356403?q=80&w=2070&auto=format&fit=crop',
  },
];

const EquipmentSpotlight = ({ title }) => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          {title}
        </h2>
      </div>
      <div className='mt-16'>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={16}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className='!pr-6 !pl-6 sm:!pr-8 sm:!pl-8'
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <div className='group aspect-[4/3] w-full overflow-hidden rounded-sm shadow-lg'>
                <img
                  src={project.imageUrl}
                  alt={`Image of ${project.title}`}
                  className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
                <div className='absolute bottom-0 w-full p-4 md:p-6'>
                  <p className='text-my-accent/90 text-sm font-semibold tracking-wider uppercase'>
                    {project.category}
                  </p>
                  <h3 className='mt-1 text-lg font-bold text-white'>
                    {project.title}
                  </h3>
                  <p className='mt-2 flex items-center text-sm text-gray-200'>
                    <MapPinIcon
                      className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-300'
                      aria-hidden='true'
                    />
                    {project.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EquipmentSpotlight;

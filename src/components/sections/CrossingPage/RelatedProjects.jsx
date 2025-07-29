import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProjects = ({ title, projects }) => {
  // Fallback data agar projects prop na diya jaye, component ko demonstrate karne ke liye.
  const exampleProjects = [
    {
      image_url:
        'https://images.unsplash.com/photo-1542621334-a254cf477633?q=80&w=1287&auto=format&fit=crop',
      title: 'GAIL Gas Line Crossing, Mumbai',
      tags: 'Pipeline Crossing, Hard Rock',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1521790797524-24016a155556?q=80&w=1287&auto=format&fit=crop',
      title: 'Railway Underpass, Bengaluru',
      tags: 'Tunnel Boring, Urban Area',
    },
  ];

  const projectsToDisplay =
    projects && projects.length > 0 ? projects : exampleProjects;

  return (
    <div className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title || 'Our Proven Experience'}
          </h2>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          {projectsToDisplay.map((project) => (
            <article
              key={project.title}
              className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:pt-48 lg:pt-80'
            >
              <img
                src={project.image_url}
                alt={project.title}
                className='absolute inset-0 -z-10 h-full w-full object-cover'
              />
              <div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
              <div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset' />

              <div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
                {project.tags.split(',').map((tag, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <div className='mx-2 flex-none'>-</div>}
                    <div className='flex items-center gap-x-2.5'>
                      {tag.trim()}
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <h3 className='mt-3 text-lg leading-6 font-semibold text-white'>
                <Link to='#'>
                  <span className='absolute inset-0' />
                  {project.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProjects;

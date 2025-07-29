import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ image, category, title, location, link }) => (
  <Link
    to={link}
    className='group focus:ring-my-accent block overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none'
  >
    <div className='relative h-56 w-full'>
      <img
        src={image}
        alt={`Project image for ${title}`}
        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
      />
      <div className='bg-my-accent absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold tracking-wide text-white uppercase'>
        {category}
      </div>
    </div>
    <div className='p-6'>
      <h3 className='text-my-primary text-xl font-bold'>{title}</h3>
      <p className='mt-1 text-base text-gray-600'>{location}</p>
    </div>
  </Link>
);

export default function ProjectsShowcaseSection({ title, cta, projects }) {
  const defaultTitle = 'Our Landmark Projects';
  const defaultCta = { text: 'Explore All Projects', link: '/projects' };

  const defaultProjects = [
    {
      image:
        'https://images.unsplash.com/photo-1593349129539-a0a38b191a3c?auto=format&fit=crop&w=800&q=80',
      category: 'Box Pushing',
      title: 'Nagpur Metro Rail Corridor',
      location: 'Nagpur, Maharashtra',
      link: '/projects/nagpur-metro',
    },
    {
      image:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      category: 'Tunnel Crossing',
      title: 'Yamuna Expressway Utility Tunnel',
      location: 'Greater Noida, Uttar Pradesh',
      link: '/projects/yamuna-expressway',
    },
  ];

  const displayTitle = title || defaultTitle;
  const displayCta = cta || defaultCta;
  const projectsToShow = projects || defaultProjects;

  return (
    <section className='bg-gray-50 py-16 sm:py-20 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-my-primary text-3xl font-extrabold tracking-tight sm:text-4xl'>
            {displayTitle}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600'>
            Showcasing our capability in executing complex projects with
            precision and excellence.
          </p>
        </div>

        <div className='mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2'>
          {projectsToShow.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              category={project.category}
              title={project.title}
              location={project.location}
              link={project.link}
            />
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Link
            to={displayCta.link}
            className='bg-my-primary focus:ring-my-primary inline-block rounded-md px-8 py-3 text-base font-semibold text-white shadow-md transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#343a40] focus:ring-2 focus:ring-offset-2 focus:outline-none'
          >
            {displayCta.text}
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Pawati + Shipralink Project',
    description:
      'A landmark achievement in trenchless technology, this project involved complex pipeline crossings under critical infrastructure, ensuring minimal disruption and maximum efficiency.',
    stats: [
      { label: 'Scope', value: 'Pipeline Crossing' },
      { label: 'Client', value: 'L&T' },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1504917595217-d4dc5b70703b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caseStudyUrl: '#',
  },
  {
    id: 2,
    title: 'L&T Narmada Shipra Project',
    description:
      'Our team provided crucial expertise and execution support for the L&T Narmada Shipra Project, a vital initiative for regional water management and supply.',
    stats: [
      { label: 'Role', value: 'Execution Partner' },
      { label: 'Technology', value: 'Trenchless Solutions' },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caseStudyUrl: '#',
  },
];

const FeaturedProjectsSection = ({ projects }) => (
  <section className='bg-slate-50 py-16 md:py-24'>
    <div className='container mx-auto px-4 md:px-6'>
      <div className='mb-12 text-center md:mb-16'>
        <h2 className='text-my-primary text-3xl font-bold md:text-4xl'>
          Landmark Project Highlights
        </h2>
      </div>
      <div className='space-y-16'>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12'
          >
            <div className={index % 2 !== 0 ? 'md:order-last' : ''}>
              {project.imageSrc ? (
                <img
                  className='aspect-video h-auto w-full rounded-sm object-cover shadow-md'
                  src={project.imageSrc}
                  alt={`Image for ${project.title}`}
                />
              ) : (
                <div className='flex h-full min-h-[250px] w-full items-center justify-center rounded-sm bg-slate-200 text-slate-500'>
                  <p className='font-semibold'>{project.client}</p>
                </div>
              )}
            </div>
            <div className='flex flex-col items-start'>
              <h3 className='text-my-accent text-2xl font-bold'>
                {project.title}
              </h3>
              <p className='text-my-primary mt-4 max-w-prose text-base'>
                {project.challenge}
              </p>
              <Link
                to='#'
                className='text-my-primary mt-6 inline-block text-base font-bold underline-offset-4 hover:underline'
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedProjectsSection;

import React from 'react';

const projectsData = [
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

const FeaturedProjects = ({ title, projects = projectsData }) => {
  return (
    <section className='bg-[#F4F6F8] py-16 md:py-24'>
      <div className='mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8'>
        <div className='mb-16 text-center md:mb-24'>
          <h2 className='font-display text-my-primary text-3xl font-bold md:text-4xl'>
            {title}
          </h2>
        </div>

        <div className='space-y-16 md:space-y-24'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className='grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12'
            >
              {/* Image Column */}
              <div className={index % 2 !== 0 ? 'md:order-last' : ''}>
                <img
                  className='aspect-video h-auto w-full rounded-lg object-cover shadow-md'
                  src={project.imageUrl}
                  alt={`Image for ${project.title}`}
                />
              </div>

              {/* Text Column */}
              <div className='flex flex-col items-start'>
                <h3 className='font-display text-my-accent text-[28px] font-bold'>
                  {project.title}
                </h3>
                <p className='font-body mt-4 max-w-prose text-base text-[#212529]'>
                  {project.description}
                </p>
                <div className='mt-5 space-y-2'>
                  {project.stats.map((stat) => (
                    <p key={stat.label} className='font-body text-sm'>
                      <span className='font-bold text-[#8D99AE]'>
                        {stat.label}:
                      </span>
                      <span className='ml-2 text-[#212529]'>{stat.value}</span>
                    </p>
                  ))}
                </div>
                <a
                  href={project.caseStudyUrl}
                  className='font-display text-my-primary mt-6 inline-block text-base font-bold underline-offset-4 hover:underline'
                >
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

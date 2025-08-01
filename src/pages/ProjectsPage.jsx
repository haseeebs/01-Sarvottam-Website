import React from 'react';
import CTA from '@/components/common/CTA';
import PageHero from '@/components/common/PageHero';
import { allProjects } from '@/data/projectData'; // Apni master file import karein
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';

// Yeh component baaki sabhi projects ko ek simple grid mein dikhayega
const AllProjectsGrid = ({ projects }) => (
  <section className='bg-white py-16 md:py-24'>
    <div className='container mx-auto px-4 md:px-6'>
      <div className='mb-12 text-center'>
        <h2 className='text-my-primary text-3xl font-bold md:text-4xl'>
          Our Comprehensive Portfolio
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='flex h-full flex-col rounded-sm bg-slate-50 p-6 shadow-md'
          >
            <p className='text-xs font-semibold tracking-wider text-amber-500 uppercase'>
              {project.category}
            </p>
            <h3 className='text-my-primary mt-1 text-xl font-bold'>
              {project.title}
            </h3>
            <p className='mt-1 text-sm text-gray-500'>{project.location}</p>
            <p className='mt-4 flex-grow text-sm text-gray-600'>
              {project.challenge}
            </p>
            <p className='mt-4 text-sm font-semibold text-gray-800'>
              Client: {project.client}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsPage = () => {
  const heroContent = {
    headline: 'Discuss Your Project with an Expert',
    body: 'Our portfolio demonstrates a consistent track record of successful project delivery for esteemed clients like L&T and Indian Railways.',
  };

  // Featured aur baaki projects ko alag karein
  const featuredProjects = allProjects.filter((p) => p.isFeatured);
  const otherProjects = allProjects.filter((p) => !p.isFeatured);

  return (
    <div>
      <PageHero
        intent='light'
        headline={heroContent.headline}
        body={heroContent.body}
      />

      <ProjectShowcaseSection
        title={'Landmark Project Highlights'}
        projects={featuredProjects}
      />

      {/* Section 2: Baaki sabhi projects ko grid mein dikhayein */}
      <AllProjectsGrid projects={otherProjects} />

      <CTA
        title='Have a similar project in mind?'
        buttonText='Contact Us Today'
        description="Let's discuss how our expertise can bring your vision to life."
      />
    </div>
  );
};

export default ProjectsPage;

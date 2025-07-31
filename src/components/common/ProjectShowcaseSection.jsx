import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building } from 'lucide-react';

const FallbackDisplay = ({ clientName }) => (
  <div className='flex h-full min-h-[250px] w-full items-center justify-center rounded-sm bg-slate-200 p-4'>
    <div className='text-center text-slate-500'>
      <Building className='mx-auto h-12 w-12' />
      <p className='mt-2 text-lg font-semibold'>{clientName}</p>
      {/* <p className='text-xs'>Project Image Not Available</p> */}
    </div>
  </div>
);

const ProjectAccordionItem = ({ project, isExpanded, onToggle }) => {
  return (
    <div className='overflow-hidden rounded-sm bg-slate-50 shadow-lg'>
      {/* Accordion Header */}
      <div
        className='grid cursor-pointer grid-cols-1 items-center gap-6 p-6 md:grid-cols-2 md:gap-12'
        onClick={onToggle}
      >
        {/* Image/Fallback Section */}
        <div className='w-full'>
          {project.imageSrc ? (
            <img
              src={project.imageSrc}
              alt={`Image of ${project.title}`}
              className='aspect-video w-full rounded-sm object-cover shadow-md'
            />
          ) : (
            <FallbackDisplay clientName={project.client} />
          )}
        </div>
        {/* Title & Toggle Button Section */}
        <div className='flex flex-col'>
          <p className='text-sm font-semibold tracking-wider text-amber-500 uppercase'>
            {project.subCategory}
          </p>
          <h3 className='text-my-primary mt-1 text-2xl font-bold'>
            {project.title}
          </h3>
          <button className='mt-4 flex items-center font-bold text-amber-600'>
            {isExpanded ? 'Hide Details' : 'View Details'}
            {isExpanded ? (
              <ChevronUp className='ml-2 h-5 w-5' />
            ) : (
              <ChevronDown className='ml-2 h-5 w-5' />
            )}
          </button>
        </div>
      </div>

      {/* Accordion Body (Collapsible Content) */}
      {isExpanded && (
        <div className='px-6 pb-6 md:px-12 md:pb-8'>
          <div className='space-y-4 border-t border-gray-200 pt-4'>
            <div>
              <h4 className='font-bold text-gray-800'>Challenge:</h4>
              <p className='mt-1 text-base text-gray-600'>
                {project.challenge}
              </p>
            </div>
            <div>
              <h4 className='font-bold text-gray-800'>Our Solution:</h4>
              <p className='mt-1 text-base text-gray-600'>{project.solution}</p>
            </div>
            {project.testimonial && (
              <figure className='border-t border-gray-200 pt-4'>
                <blockquote className='text-gray-700 italic'>
                  “{project.testimonial.quote}”
                </blockquote>
                <figcaption className='mt-2 text-right text-sm font-semibold text-gray-900'>
                  — {project.testimonial.author}
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectShowcaseSection = ({ title, projects = [] }) => {
  const [expandedId, setExpandedId] = useState(null);

  if (!projects || projects.length === 0) return null;

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='mb-12 text-center'>
          <h2 className='text-my-primary text-3xl font-bold tracking-tight sm:text-4xl'>
            {title}
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600'>
            Explore our landmark projects that demonstrate our deep expertise
            and commitment to excellence.
          </p>
        </div>
        <div className='space-y-8'>
          {projects.map((project) => (
            <ProjectAccordionItem
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;

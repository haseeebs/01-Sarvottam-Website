import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Building } from 'lucide-react';
import { Button } from '../ui/Button';

const FallbackDisplay = ({ clientName }) => (
  <div className='flex h-full min-h-[250px] w-full items-center justify-center rounded-sm bg-slate-200 p-4'>
    <div className='text-center text-slate-500'>
      <Building className='mx-auto h-12 w-12' />
      <p className='mt-2 text-lg font-semibold'>{clientName}</p>
      {/* <p className="text-xs">Project Image Not Available</p> */}
    </div>
  </div>
);

const ProjectAccordionItem = ({ project, isExpanded, onToggle }) => {
  return (
    <div className='overflow-hidden rounded-sm bg-slate-50 shadow-lg'>
      <div
        className='grid cursor-pointer grid-cols-1 items-center gap-6 p-6 md:grid-cols-2 md:gap-12'
        onClick={onToggle}
      >
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
        <div className='flex flex-col'>
          <p className='text-sm font-semibold tracking-wider text-amber-500 uppercase'>
            {project.subCategory}
          </p>
          <h3 className='text-my-primary mt-1 text-2xl font-bold'>
            {project.title}
          </h3>
          <Button variant={'ghost2'} size={'lg'} className='mt-8'>
            {isExpanded ? 'Hide Details' : 'View Details'}
            {isExpanded ? (
              <ChevronUp className='ml-2 h-5 w-5' />
            ) : (
              <ChevronDown className='ml-2 h-5 w-5' />
            )}
          </Button>
        </div>
      </div>
      {isExpanded && (
        <div className='px-6 pb-6 md:px-12 md:pb-8'>
          <div className='space-y-6 border-t border-gray-200 pt-6'>
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
            {/* === YAHAN KEYSTATS ADD KIYE GAYE HAIN === */}
            {project.keyStats && project.keyStats.length > 0 && (
              <div>
                <h4 className='font-bold text-gray-800'>Key Project Stats:</h4>
                <dl className='mt-2 grid grid-cols-2 gap-x-6 gap-y-3'>
                  {project.keyStats.map((stat) => (
                    <div
                      key={stat.label}
                      className='rounded-sm bg-white p-3 shadow-sm'
                    >
                      <dt className='text-sm font-medium text-gray-500'>
                        {stat.label}
                      </dt>
                      <dd className='text-my-primary text-base font-semibold'>
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
            {/* ========================================= */}
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
  const handleToggle = (id) => setExpandedId(expandedId === id ? null : id);

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

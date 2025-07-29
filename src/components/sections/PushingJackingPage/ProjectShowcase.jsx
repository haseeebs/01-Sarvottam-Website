import { Link } from 'react-router-dom';

const ProjectShowcase = ({ title, projects }) => {
  // In a real app, you would filter projects based on a category prop.
  // For this example, we assume the 'projects' prop is already filtered.

  return (
    <section className='bg-white py-16 font-sans sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          {title}
        </h2>
      </div>

      {/* Slider Container */}
      <div className='mt-12'>
        <div className='relative'>
          <div className='no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-8 lg:gap-8 lg:px-8'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='w-[80%] flex-shrink-0 snap-start sm:w-[45%] md:w-[40%] lg:w-[calc(33.333%-1.334rem)]'
              >
                <article className='flex h-full flex-col overflow-hidden rounded-lg bg-gray-50 shadow-md transition hover:shadow-xl'>
                  <img
                    alt={project.title}
                    src={project.imageSrc}
                    className='h-56 w-full object-cover'
                  />
                  <div className='flex flex-1 flex-col p-6'>
                    <div>
                      <p className='inline-block rounded-full bg-blue-100 px-3 py-1 text-xs leading-6 font-semibold text-blue-800'>
                        {project.category}
                      </p>
                    </div>
                    <div className='mt-4'>
                      <h3 className='text-lg font-semibold text-gray-900'>
                        <Link to='#'>
                          {/* This could be a link to the project details page */}
                          <span className='absolute inset-0' />
                          {project.title}
                        </Link>
                      </h3>
                      <p className='mt-2 text-sm text-gray-600'>
                        {project.location}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

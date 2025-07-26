const ProjectShowcase = ({ title, projects }) => {
  // In a real app, you would filter projects based on a category prop.
  // For this example, we assume the 'projects' prop is already filtered.

  return (
    <section className="bg-white py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
      </div>

      {/* Slider Container */}
      <div className="mt-12">
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory lg:gap-8 px-6 lg:px-8 no-scrollbar">
            {projects.map((project) => (
              <div
                key={project.id}
                className="snap-start flex-shrink-0 w-[80%] sm:w-[45%] md:w-[40%] lg:w-[calc(33.333%-1.334rem)]"
              >
                <article className="flex flex-col h-full overflow-hidden rounded-lg shadow-md transition hover:shadow-xl bg-gray-50">
                  <img
                    alt={project.title}
                    src={project.imageSrc}
                    className="h-56 w-full object-cover"
                  />
                  <div className="flex flex-col flex-1 p-6">
                    <div>
                      <p className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold leading-6 text-blue-800">
                        {project.category}
                      </p>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        <a href="#">
                          {/* This could be a link to the project details page */}
                          <span className="absolute inset-0" />
                          {project.title}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
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

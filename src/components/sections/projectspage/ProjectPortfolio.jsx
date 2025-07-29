import React, { useState, useEffect } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Expressway Culvert Crossing',
    category: 'Crossing Services',
    imageUrl:
      'https://images.unsplash.com/photo-1618062582882-99c55b77fac1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Railway Line Box Pushing',
    category: 'Pushing & Jacking',
    imageUrl:
      'https://images.unsplash.com/photo-1552882462-429a3a1f82e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'City Center Utility Tunnel',
    category: 'Boring Services',
    imageUrl:
      'https://images.unsplash.com/photo-1581094541334-875953684a96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'Riverbed Pipeline Installation',
    category: 'Crossing Services',
    imageUrl:
      'https://images.unsplash.com/photo-1542037104857-4bb4b98e2474?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: 'Urban Micro-tunneling',
    category: 'Boring Services',
    imageUrl:
      'https://images.unsplash.com/photo-1589599069491-23a6979893a6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    title: 'Canal Underpass Construction',
    category: 'Pushing & Jacking',
    imageUrl:
      'https://images.unsplash.com/photo-1628437330329-8774f76b971e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const filters = [
  'All',
  'Crossing Services',
  'Pushing & Jacking',
  'Boring Services',
];

const ProjectPortfolio = ({ title = 'Our Complete Portfolio' }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === activeFilter),
      );
    }
  }, [activeFilter]);

  return (
    <div className='bg-white py-16 md:py-24'>
      <div className='mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8'>
        <h2 className='font-display text-my-primary mb-12 text-center text-3xl font-bold md:text-4xl'>
          {title}
        </h2>

        {/* Filter Controls */}
        <div className='mb-12 flex flex-wrap justify-center gap-3'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-display rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                activeFilter === filter
                  ? 'bg-my-accent text-my-primary'
                  : 'text-my-primary bg-[#E0E4E8] hover:bg-[#cdd2d8]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Gallery */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className='overflow-hidden rounded-lg bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl'
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className='h-48 w-full object-cover'
              />
              <div className='p-6'>
                <h3 className='font-display text-my-primary text-xl font-bold'>
                  {project.title}
                </h3>
                <p className='font-body text-my-secondary mt-2 text-sm'>
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;

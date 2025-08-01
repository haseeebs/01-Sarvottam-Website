import React, { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/common/ProjectCard';
import { cn } from '@/lib/utils';

/**
 * A reusable and theme-aligned component to showcase projects.
 * @param {object} props
 * @param {string} props.title - The main heading for the section.
 * @param {string} [props.description] - A subtitle or description.
 * @param {Array} props.projects - The array of project objects to display.
 * @param {boolean} [props.showFilters=false] - Whether to display the category filter buttons.
 * @param {string} [props.className] - Additional classes for the container.
 */
const ProjectShowcaseSection = ({
  title,
  description,
  projects = [],
  showFilters = false,
  className,
}) => {
  // Agar filters dikhane hain, to hum categories nikalenge aur state manage karenge
  const categories = useMemo(() => {
    if (!showFilters) return [];
    // 'All' ko pehle rakhenge, phir unique categories
    return ['All', ...new Set(projects.map((p) => p.category))];
  }, [projects, showFilters]);

  const [activeCategory, setActiveCategory] = useState('All');

  // Active category ke hisab se projects filter honge
  const filteredProjects = useMemo(() => {
    if (!showFilters || activeCategory === 'All') {
      return projects;
    }
    return projects.filter((project) => project.category === activeCategory);
  }, [projects, activeCategory, showFilters]);

  // Agar projects hi nahi hain to section render na karein
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className={cn('bg-gray-50 py-16 sm:py-24', className)}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='font-family-display text-my-primary text-3xl font-bold tracking-tight sm:text-4xl'>
            {title}
          </h2>
          {description && (
            <p className='font-family-body text-my-secondary mt-4 text-lg leading-relaxed'>
              {description}
            </p>
          )}
        </div>

        {/* Filter Controls (sirf agar showFilters true hai) */}
        {showFilters && categories.length > 1 && (
          <div className='mt-12 flex flex-wrap items-center justify-center gap-2'>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'font-family-body rounded-sm px-4 py-2 text-sm font-semibold transition-all duration-200',
                  activeCategory === category
                    ? 'bg-my-primary text-white shadow-md'
                    : 'text-my-primary border border-gray-300 bg-white hover:bg-gray-200',
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className='mx-auto mt-16 max-w-none'>
          {filteredProjects.length > 0 ? (
            <div className='grid grid-cols-1 gap-8'>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className='text-my-secondary text-center'>
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;

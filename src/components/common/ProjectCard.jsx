// src/components/common/ProjectCard.jsx

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/Card';
import { MapPin, Building2, ChevronDown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const ProjectCard = ({ project }) => {
  // State to manage expanded view
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the view
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const hasExtraDetails =
    project.challenge || project.solution || project.keyStats?.length > 0;

  return (
    <Card className='border-my-primary flex flex-col overflow-hidden rounded-md border-2 transition-shadow duration-300 hover:shadow-lg md:flex-row'>
      {/* Left side: Image */}
      <div className='relative w-full flex-shrink-0 md:w-1/3 xl:w-1/4'>
        <img
          src={project.imageSrc || '/placeholder.svg'}
          alt={project.title}
          className='h-56 w-full object-cover md:h-full'
        />
        {project.isFeatured && (
          <Badge className='bg-my-accent/90 hover:bg-my-accent absolute top-3 left-3 cursor-pointer'>
            <Star className='mr-1 h-3 w-3' />
            Featured
          </Badge>
        )}
      </div>

      {/* Right side: Content */}
      <div className='flex flex-grow flex-col justify-between p-6'>
        <div>
          <div className='mb-2 flex items-center justify-between gap-4'>
            <Badge variant='outline' className='text-xs'>
              {project.category} / {project.subCategory}
            </Badge>
          </div>
          {/* Highlighted Details */}
          <h3 className='font-display text-my-primary text-2xl leading-tight font-bold'>
            {project.title}
          </h3>
          <div className='mt-2 flex flex-col gap-2 text-sm text-gray-700 sm:flex-row sm:gap-6'>
            <div className='flex items-center gap-2'>
              <MapPin className='text-my-accent h-4 w-4 flex-shrink-0' />
              <span className='font-semibold'>{project.location}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Building2 className='text-my-accent h-4 w-4 flex-shrink-0' />
              <span className='font-semibold'>{project.client}</span>
            </div>
          </div>
        </div>

        {/* Collapsible Section for extra details */}
        <div
          className={cn(
            'overflow-hidden transition-[max-height] duration-500 ease-in-out',
            isExpanded ? 'max-h-[1000px]' : 'max-h-0',
          )}
        >
          <div className='mt-4 space-y-4 border-t pt-4'>
            {project.challenge && (
              <div>
                <h4 className='text-sm font-bold text-gray-800'>Challenge</h4>
                <p className='text-sm leading-relaxed text-gray-600'>
                  {project.challenge}
                </p>
              </div>
            )}
            {project.solution && (
              <div>
                <h4 className='text-sm font-bold text-gray-800'>Solution</h4>
                <p className='text-sm leading-relaxed text-gray-600'>
                  {project.solution}
                </p>
              </div>
            )}
            {project.keyStats && project.keyStats.length > 0 && (
              <div>
                <h4 className='mb-2 text-sm font-bold'>Key Statistics</h4>
                <div className='grid grid-cols-1 gap-1 text-sm'>
                  {project.keyStats.map((stat, index) => (
                    <div key={index} className='flex justify-between'>
                      <span className='text-gray-600'>{stat.label}:</span>
                      <span className='font-medium'>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Show More/Less Button */}
        {hasExtraDetails && (
          <div className='mt-4 border-t pt-4'>
            <Button
              variant='link'
              onClick={toggleExpand}
              className='text-my-primary flex items-center gap-2 px-0 text-sm font-bold'
            >
              <span>{isExpanded ? 'Show Less' : 'Show Full Details'}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 transition-transform',
                  isExpanded && 'rotate-180',
                )}
              />
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;

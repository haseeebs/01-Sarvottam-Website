import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { MapPin, Building2, Quote, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Card className='border-my-primary overflow-hidden rounded-md border-2 transition-shadow duration-300 hover:shadow-lg'>
      <div className='relative'>
        <img
          src={project.imageSrc || '/placeholder.svg'}
          alt={project.title}
          className='h-48 w-full object-cover'
        />
        {project.isFeatured && (
          <Badge className='bg-my-accent/90 hover:bg-my-accent absolute top-3 left-3 cursor-pointer'>
            <Star className='mr-1 h-3 w-3' />
            Featured
          </Badge>
        )}
        <div className='absolute top-3 right-3'>
          <Badge variant='secondary' className='bg-white/90 text-gray-800'>
            {project.category}
          </Badge>
        </div>
      </div>

      <CardHeader className='pb-3'>
        <div className='space-y-2'>
          <Badge variant='outline' className='w-fit text-xs'>
            {project.subCategory}
          </Badge>
          <h3 className='text-xl leading-tight font-bold'>{project.title}</h3>
          <div className='flex items-center gap-4 text-sm text-gray-600'>
            <div className='flex items-center gap-1'>
              <MapPin className='h-4 w-4' />
              {project.location}
            </div>
            <div className='flex items-center gap-1'>
              <Building2 className='h-4 w-4' />
              {project.client}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-4'>
        <div className='space-y-3'>
          {project.challenge && (
            <div>
              <h4 className='mb-1 text-sm font-semibold text-red-600'>
                Challenge
              </h4>
              <p className='text-sm leading-relaxed text-gray-700'>
                {project.challenge}
              </p>
            </div>
          )}

          {project.solution && (
            <div>
              <h4 className='mb-1 text-sm font-semibold text-green-600'>
                Solution
              </h4>
              <p className='text-sm leading-relaxed text-gray-700'>
                {project.solution}
              </p>
            </div>
          )}
        </div>

        {project.keyStats && project.keyStats.length > 0 && (
          <div className='grid grid-cols-1 gap-2'>
            <h4 className='mb-2 text-sm font-semibold'>Key Statistics</h4>
            {project.keyStats.map((stat, index) => (
              <div
                key={index}
                className='flex items-center justify-between border-b border-gray-100 py-1 last:border-b-0'
              >
                <span className='text-sm text-gray-600'>{stat.label}</span>
                <span className='text-sm font-medium'>{stat.value}</span>
              </div>
            ))}
          </div>
        )}

        {project.testimonial && project.testimonial.quote && (
          <div className='bg-my-secondary/20 rounded-sm p-3'>
            <div className='flex items-start gap-2'>
              <Quote className='mt-1 h-4 w-4 flex-shrink-0 text-gray-400' />
              <div>
                <p className='mb-2 text-sm text-gray-700 italic'>
                  "{project.testimonial.quote}"
                </p>
                <p className='text-xs font-medium text-gray-500'>
                  — {project.testimonial.author}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

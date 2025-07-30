import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button'; // Assuming Button.jsx is in the same directory
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'; // Assuming Card.jsx is in the same directory

const showcaseSectionVariants = cva('w-full', {
  variants: {
    background: {
      default: 'bg-transparent',
      muted: 'bg-muted/20',
    },
    spacing: {
      default: 'py-16 md:py-24',
      compact: 'py-12 md:py-16',
    },
  },
  defaultVariants: {
    background: 'default',
    spacing: 'default',
  },
});

const ProjectShowcaseSection = React.forwardRef(
  (
    {
      className,
      background,
      spacing,
      title,
      projects,
      ctaButtonText = 'View Project',
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          showcaseSectionVariants({ background, spacing, className }),
        )}
        {...props}
      >
        <div className='container px-4 md:px-6'>
          <div className='mb-10 flex flex-col items-center justify-center space-y-4 text-center md:mb-16'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              {title}
            </h2>
          </div>
          {projects?.length > 0 ? (
            <div className='mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3'>
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className='group flex h-full w-full flex-col transition-all hover:-translate-y-1 hover:shadow-xl'
                >
                  <img
                    src={project.imageSrc}
                    alt={`Image of ${project.title}`}
                    className='aspect-video w-full rounded-t-sm object-cover'
                  />
                  <div className='flex flex-1 flex-col justify-between p-6'>
                    <div className='space-y-2'>
                      <p className='text-my-accent text-sm font-medium tracking-widest uppercase'>
                        {project.category}
                      </p>
                      <CardTitle className='text-xl'>{project.title}</CardTitle>
                      <CardDescription>{project.location}</CardDescription>
                    </div>
                    <div className='pt-6'>
                      <Button variant='outline' className='w-full'>
                        {ctaButtonText}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className='text-muted-foreground text-center'>
              No projects to display.
            </div>
          )}
        </div>
      </section>
    );
  },
);

ProjectShowcaseSection.displayName = 'ProjectShowcaseSection';

export { ProjectShowcaseSection, showcaseSectionVariants };

import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const ImageGalleryCarousel = ({ images = [], title, description }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className='bg-my-primary border-b-2 py-16 sm:py-24'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center lg:max-w-4xl'>
          <h2 className='font-display text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            {title || 'Glimpses of Our Work'}
          </h2>
          {description && (
            <p className='font-body text-my-secondary mt-4 text-lg'>
              {description}
            </p>
          )}
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className='mt-16 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl'
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem
                key={image.id}
                className='md:basis-1/2 lg:basis-1/3'
              >
                <div className='p-1'>
                  <Card className='border-my-accent/50 overflow-hidden border-2'>
                    <CardContent className='flex aspect-video items-center justify-center p-0'>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className='h-full w-full object-cover'
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='text-my-primary hover:bg-my-accent hover:text-my-primary ml-12' />
          <CarouselNext className='text-my-primary hover:bg-my-accent hover:text-my-primary mr-12' />
        </Carousel>
      </div>
    </div>
  );
};

export default ImageGalleryCarousel;

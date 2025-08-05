import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const HeroCarousel = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className='h-full w-full'
    >
      <CarouselContent className='m-0 h-full'>
        {images.map((image, index) => (
          <CarouselItem key={image.id} className='p-0'>
            <div className='relative h-full w-full cursor-grab active:cursor-grabbing'>
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding='async'
                className='h-[75vh] w-full object-cover lg:h-screen' // Responsive Height!
                onDragStart={(e) => e.preventDefault()}
              />
              <div
                className='absolute inset-0 bg-black/20'
                aria-hidden='true'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;

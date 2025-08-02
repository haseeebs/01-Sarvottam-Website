import React, { useState, useEffect, useCallback, memo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { PauseIcon, PlayIcon, XIcon } from 'lucide-react'; // For better icons

const ImageGalleryCarousel = ({ images = [], title, description }) => {
  // --- STATE MANAGEMENT ---
  // State for the Embla Carousel API to control it programmatically
  const [api, setApi] = useState();

  // State to track autoplay status for our custom play/pause button
  const [isPlaying, setIsPlaying] = useState(true);

  // State for the Lightbox/Modal
  const [selectedImage, setSelectedImage] = useState(null);

  // --- HOOKS & LOGIC ---

  // UX Improvement: Add a dedicated play/pause button.
  const togglePlay = useCallback(() => {
    if (!api) return;
    const autoplay = api.plugins().autoplay;
    if (autoplay) {
      // The `stopOnInteraction` option is false in the Autoplay plugin by default.
      // We are manually handling this.
      autoplay.isPlaying() ? autoplay.stop() : autoplay.play();
    }
  }, [api]);

  // Keep our `isPlaying` state in sync with the carousel's actual state.
  useEffect(() => {
    if (!api) return;

    const onPlay = () => setIsPlaying(true);
    const onStop = () => setIsPlaying(false);

    const autoplay = api.plugins().autoplay;
    if (autoplay) {
      api.on('autoplay:play', onPlay);
      api.on('autoplay:stop', onStop);
    }

    // Cleanup on unmount
    return () => {
      if (autoplay) {
        api.off('autoplay:play', onPlay);
        api.off('autoplay:stop', onStop);
      }
    };
  }, [api]);

  // UX Improvement: Allow closing the lightbox with the 'Escape' key.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <section className='bg-my-primary w-full py-16 sm:py-24'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto mb-12 max-w-3xl text-center sm:mb-16'>
            <h2 className='font-display text-4xl font-bold tracking-tight text-white sm:text-5xl'>
              {title || 'Glimpses of Our Work'}
            </h2>
            {description && (
              <p className='font-body text-my-secondary mt-4 text-lg leading-8'>
                {description}
              </p>
            )}
          </div>

          <Carousel
            setApi={setApi} // Get the API instance
            opts={{
              align: 'center',
              loop: true,
              containScroll: 'trimSnaps',
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false, // We handle this manually for better control
                stopOnMouseEnter: true, // A good UX practice
              }),
            ]}
            className='w-full'
          >
            <CarouselContent className='-ml-4'>
              {images.map((image) => (
                <CarouselItem
                  key={image.id}
                  className='pl-4 md:basis-1/2 lg:basis-1/3'
                  // UX Improvement: Open lightbox on click/tap
                  onClick={() => setSelectedImage(image)}
                >
                  <div className='group relative aspect-video h-full w-full cursor-pointer overflow-hidden rounded-lg shadow-2xl'>
                    <img
                      src={image.src}
                      alt={image.alt} // Correct semantic use of 'alt'
                      loading='lazy'
                      decoding='async'
                      className='h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                    />
                    <div
                      className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'
                      aria-hidden='true'
                    />
                    {/* UI & UX Fix: Caption is now always visible, better for touch */}
                    {image.caption && (
                      <div className='absolute bottom-0 left-0 p-4 sm:p-6'>
                        <p className='font-body text-sm font-semibold text-white/90 sm:text-base'>
                          {image.caption}
                        </p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* A11y & UX: Use styled but clear navigation buttons with aria-labels */}
            <CarouselPrevious
              aria-label='Previous slide'
              className={cn(
                'absolute top-1/2 left-[-12px] -translate-y-1/2 sm:left-2',
                'size-12 rounded-full border-2 border-white/50 bg-white/20 text-white backdrop-blur-sm',
                'hover:bg-my-accent hover:text-my-primary hover:border-my-accent transition-all duration-300',
                'focus:ring-my-accent focus:ring-offset-my-primary focus:ring-2 focus:ring-offset-2',
                'disabled:opacity-50',
              )}
            />
            <CarouselNext
              aria-label='Next slide'
              className={cn(
                'absolute top-1/2 right-[-12px] -translate-y-1/2 sm:right-2',
                'size-12 rounded-full border-2 border-white/50 bg-white/20 text-white backdrop-blur-sm',
                'hover:bg-my-accent hover:text-my-primary hover:border-my-accent transition-all duration-300',
                'focus:ring-my-accent focus:ring-offset-my-primary focus:ring-2 focus:ring-offset-2',
                'disabled:opacity-50',
              )}
            />

            {/* A11y & UX: Autoplay control button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
              className={cn(
                'absolute bottom-[-50px] left-1/2 -translate-x-1/2',
                'size-10 rounded-full border border-white/50 bg-white/20 text-white backdrop-blur-sm',
                'flex items-center justify-center transition-colors hover:bg-white/30',
                'focus:ring-my-accent focus:ring-offset-my-primary focus:ring-2 focus:ring-offset-2',
              )}
            >
              {isPlaying ? (
                <PauseIcon className='size-5' />
              ) : (
                <PlayIcon className='size-5' />
              )}
            </button>
          </Carousel>
        </div>
      </section>

      {/* UX Improvement: The Lightbox Modal */}
      {selectedImage && (
        <div
          // A11y: The modal container
          role='dialog'
          aria-modal='true'
          aria-labelledby='lightbox-caption'
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
          onClick={() => setSelectedImage(null)} // Click outside to close
        >
          <div
            className='relative mx-4 max-h-[90vh] w-full max-w-4xl'
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the modal
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className='h-auto max-h-[85vh] w-full rounded-lg object-contain'
            />
            {selectedImage.caption && (
              <p
                id='lightbox-caption'
                className='mt-4 text-center text-white/90'
              >
                {selectedImage.caption}
              </p>
            )}
          </div>
          <button
            onClick={() => setSelectedImage(null)}
            aria-label='Close lightbox'
            className='absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-black/50 text-white/80 transition-colors hover:bg-white/20 hover:text-white'
          >
            <XIcon className='size-6' />
          </button>
        </div>
      )}
    </>
  );
};

export default memo(ImageGalleryCarousel);

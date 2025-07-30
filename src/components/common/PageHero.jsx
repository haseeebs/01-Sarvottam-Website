import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Hero component ke variants
const heroVariants = cva(
  'relative w-full', // Base classes
  {
    variants: {
      intent: {
        light: 'bg-white text-my-primary',
        dark: 'bg-my-primary text-white',
        // 'accent' variant yahan se hata diya gaya hai
      },
      style: {
        'split-screen': 'grid md:grid-cols-2 gap-8 items-center',
        // Hum image position ko JSX mein handle karenge
      },
    },
    defaultVariants: {
      intent: 'light',
    },
  },
);

// Button ke liye alag CVA
const buttonVariants = cva(
  'inline-block rounded-sm px-10 py-3 text-base font-semibold shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      intent: {
        light:
          'bg-my-accent text-my-primary hover:bg-amber-300 focus-visible:outline-amber-400',
        light:
          'bg-my-accent text-my-primary hover:bg-amber-300 focus-visible:outline-amber-400',
        dark: 'bg-my-accent text-my-primary hover:bg-amber-300 focus-visible:outline-amber-400',
        // 'accent' variant yahan se hata diya gaya hai
      },
    },
    defaultVariants: {
      intent: 'light',
    },
  },
);

const PageHero = ({
  className,
  intent,
  style, // 'image-right', 'centered' etc.
  headline,
  body,
  cta,
  ctaLink = '#',
  imageUrl,
  ...props
}) => {
  // Check karein ke style image-based hai ya nahi
  // 'image-left' check hata diya gaya hai
  const isImageStyle = style === 'image-right';

  return (
    <section
      className={twMerge(heroVariants({ intent }), className)}
      {...props}
    >
      <div className='relative mx-auto max-w-7xl px-4 py-8 sm:py-16 lg:px-8'>
        <div
          className={twMerge(
            'grid items-center gap-12',
            isImageStyle && 'md:grid-cols-2 md:gap-16',
          )}
        >
          {/* == Image Section == */}
          {isImageStyle && imageUrl && (
            // 'image-left' ke liye conditional ordering ('md:order-last') hata di gayi hai
            <div className='w-full'>
              <img
                src={imageUrl}
                alt={headline}
                className='rounded-lg object-cover shadow-2xl'
              />
            </div>
          )}

          {/* == Content Section == */}
          <div className='flex h-full flex-col justify-center text-left'>
            <h1 className='font-display text-4xl font-bold sm:text-[42px] sm:leading-tight'>
              {headline}
            </h1>

            <p
              className={twMerge(
                'font-family-body mt-6 max-w-2xl text-lg leading-relaxed',
                intent === 'dark' ? 'text-white/80' : 'text-gray-600',
              )}
            >
              {body}
            </p>

            {cta && (
              <div className='mt-10'>
                <Link to={ctaLink} className={buttonVariants({ intent })}>
                  {cta}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;

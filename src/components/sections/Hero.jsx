import { Button } from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';

const Hero = ({ title, body, cta, imageUrl }) => {
  return (
    <SectionWrapper>
      <div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-4xl font-bold md:text-5xl'>{title}</h1>
          <p className='text-muted-foreground text-lg'>{body}</p>
          {cta && (
            <div className='mt-4'>
              <Button size='lg' asChild>
                {cta}
              </Button>
            </div>
          )}
        </div>
        {imageUrl && (
          <div>
            <img
              src={imageUrl}
              alt={title}
              className='h-auto w-full rounded-lg object-cover shadow-lg'
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Hero;

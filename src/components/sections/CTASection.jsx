import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import SectionWrapper from '@/components/shared/SectionWrapper';

const CTASection = ({ title, body, ctaText, ctaLink, className, ...props }) => {
  return (
    <SectionWrapper className={`bg-card text-center ${className}`} {...props}>
      <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>{title}</h2>
      {body && (
        <p className='text-muted-foreground mx-auto mt-4 max-w-2xl text-lg'>
          {body}
        </p>
      )}
      {ctaText && ctaLink && (
        <div className='mt-8'>
          <Button size='lg' asChild>
            <Link to={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default CTASection;

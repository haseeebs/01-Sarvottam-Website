import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
const AboutPageCTA = ({ title, buttonText }) => {
  return (
    <SectionWrapper className='bg-primary text-center'>
      <h2 className='font-display text-4xl font-bold text-white sm:text-[36px]'>
        {title}
      </h2>
      <div className='mt-8'>
        <Button asChild variant='outline' size='lg'>
          <Link to='/contact'>{buttonText}</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
};
export default AboutPageCTA;

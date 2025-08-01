import React from 'react';
import CTA from '@/components/common/CTA';
import PageHero from '@/components/common/PageHero';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import { allProjects } from '@/data/projectData'; // Import all projects

const ProjectsPage = () => {
  const heroContent = {
    headline: 'Proven Expertise, Delivered Projects',
    body: 'Our portfolio demonstrates a consistent track record of successful project delivery for esteemed clients like L&T, MEIL, and various government bodies.',
  };

  return (
    <div>
      <PageHero
        intent='light'
        headline={heroContent.headline}
        body={heroContent.body}
      />

      {/* Naye component ka istemal */}
      <ProjectShowcaseSection
        title='Our Proven Work'
        description='Discover our portfolio of successful infrastructure projects across India, showcasing innovation, expertise, and commitment to excellence.'
        projects={allProjects}
        showFilters={true} // Filters yahan show honge
      />

      <CTA
        title='Have a similar project in mind?'
        buttonText='Contact Us Today'
        description="Let's discuss how our expertise can bring your vision to life."
        buttonLink='/contact?subject=ProjectInquiry'
      />
    </div>
  );
};

export default ProjectsPage;

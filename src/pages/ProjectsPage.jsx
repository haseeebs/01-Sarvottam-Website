import React from 'react';
import ProjectsPageHero from '@/components/sections/projectspage/ProjectsPageHero';
import FeaturedProjects from '@/components/sections/projectspage/FeaturedProjects';
import ProjectPortfolio from '@/components/sections/projectspage/ProjectPortfolio';
import StartProjectCTA from '@/components/sections/projectspage/StartProjectCTA';

// Content ko manage karne ke liye ek alag object banaya gaya hai
const projectsPageContent = {
  hero: {
    headline: 'A Proven Track Record of Landmark Infrastructure Projects',
    body: 'Our portfolio showcases our ability to deliver on complex and high-stakes projects across India. Notable achievements include the successful completion of the Pawati + Shipralink Project and our critical role in the L&T Narmada Shipra Project. These projects highlight our technical expertise in trenchless solutions and our capacity to partner with industry leaders on projects of national importance.',
  },
  featuredProjects: {
    title: 'Landmark Project Highlights',
  },
  portfolio: {
    title: 'Our Complete Portfolio',
  },
  clients: {
    title: 'Trusted by Industry Leaders',
  },
  cta: {
    title: 'Have a similar project in mind?',
  },
};

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsPageHero
        headline={projectsPageContent.hero.headline}
        body={projectsPageContent.hero.body}
      />
      <FeaturedProjects
        title={projectsPageContent.featuredProjects.title}
        // Note: Individual project data is assumed to be inside the component itself
      />
      <ProjectPortfolio
        title={projectsPageContent.portfolio.title}
        // Note: Filter and project data is assumed to be inside the component
      />
      <StartProjectCTA title={projectsPageContent.cta.title} />
    </div>
  );
};

export default ProjectsPage;

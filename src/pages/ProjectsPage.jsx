import React from 'react';
import CTA from '@/components/common/CTA';
import PageHero from '@/components/common/PageHero';
import ProjectShowcaseSection from '@/components/common/ProjectShowcaseSection';
import { allProjects } from '@/data/projectData'; // Import all projects
import ClientTicker from '@/components/common/ClientTicker';
import { Helmet } from 'react-helmet-async';
const ProjectsPage = () => {
  const heroContent = {
    headline: 'Proven Expertise, Delivered Projects',
    body: 'We provide a complete, in-house inventory of all specialized equipment and machinery required for any tunnel crossing project, ensuring seamless execution from start to finish.',
  };
  const ourClients = [
    'L&T',
    'Jain Irrigation',
    'Kalpataru',
    'Megha Engineering (MEIL)',
    'VA Tech Wabag',
    'BS Infra',
    'GAIL Gas',
    'BDEL',
    'BHEL',
    'NTPC',
    'TATA Projects',
    'Indian Railways',
    'HPCL',
    'NHAI',
    'PWD & PHE Depts.',
    'Namami Gange Project',
    'L&T OFFSHORE',
    'GINDA PIR',
    'ANOX',
    'D.D.C.',
    'L&T KUNDLIYA',
    'L&T SHIV PURI',
    'L&T DEWAS',
    'L&T KSIPRA LINK',
    'NARMADA LINK L&T - ASHTA',
    'L&T SEHORE',
    'L&T UJJAIN',
    'L&T RANCHI',
    'L&T DELHI',
    'L&T BOMBAY',
    'L&T VISTA',
    'STATE HIGHWAY UNDER GROUND. CROSSING',
  ];
  return (
    <div>
      <Helmet>
        <title>Our Projects Portfolio | Sarvottam Enterprises</title>
        <meta
          name='description'
          content='View our portfolio of successfully delivered infrastructure projects across India, including work for L&T, MEIL, and Indian Railways. See our expertise in action.'
        />
        <link rel='canonical' href='https://www.your-domain.com/projects' />
      </Helmet>
      <PageHero
        intent='light'
        headline={heroContent.headline}
        body={heroContent.body}
      />
      <ClientTicker
        title='Trusted by Industry Leaders and Government Bodies'
        clients={ourClients}
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

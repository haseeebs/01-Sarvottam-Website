import React from 'react';
import PageHero from '@/components/common/PageHero';
import ContactFormAndDetails from '@/components/sections/contactpage/ContactFormAndDetails';
import ContactFAQ from '@/components/sections/contactpage/ContactFAQ';

// Content derived from the provided JSON data
const pageData = {
  hero: {
    headline: 'Contact Our Experts to Discuss Your Next Project',
    body: "Let's build the future together. Whether you require a detailed quote, a technical consultation for an upcoming tender, or wish to explore a partnership, our team is ready to assist. Reach out to us to leverage our 15 years of experience in underground pipeline, crossing, and trenchless technology services for your project's success.",
    cta: 'Request a Quote Today',
  },
  formAndDetails: {
    title: "Let's Build the Future Together",
    bodyText:
      "Let's build the future together. Whether you require a detailed quote, a technical consultation for an upcoming tender, or wish to explore a partnership, our team is ready to assist. Reach out to us to leverage our 15 years of experience in underground pipeline, crossing, and trenchless technology services for your project's success.",
    contactInfo: [
      {
        type: 'Address',
        value: 'Sarvottam Enterprises, Office Address, City, State, PIN',
      },
      {
        type: 'Phone',
        value: '+91-9876543210',
      },
      {
        type: 'Email',
        value: 'contact@sarvottamenterprises.com',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How do I request a detailed quote?',
        answer:
          'Please fill out the contact form with your project details, including scope, location, and any technical documents. Our team will review it and get back to you promptly.',
      },
      {
        question: 'Do you offer technical consultations for tenders?',
        answer:
          'Yes, we leverage our 15 years of experience to provide technical consultations to help you prepare for complex project tenders. Mention this in the contact form message.',
      },
      {
        question: 'What is your primary service area?',
        answer:
          'We operate on projects across India, specializing in challenging terrains and critical infrastructure corridors.',
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <div>
      <PageHero
        headline={pageData.hero.headline}
        body={pageData.hero.body}
        cta={pageData.hero.cta}
      />
      <ContactFormAndDetails
        title={pageData.formAndDetails.title}
        bodyText={pageData.formAndDetails.bodyText}
        contactInfo={pageData.formAndDetails.contactInfo}
      />
      <ContactFAQ title={pageData.faq.title} items={pageData.faq.items} />
    </div>
  );
};

export default ContactPage;

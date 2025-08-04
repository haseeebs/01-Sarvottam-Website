import React from 'react';
import PageHero from '@/components/common/PageHero';
import ContactFormAndDetails from '@/components/sections/contactpage/ContactFormAndDetails';
import ContactFAQ from '@/components/sections/contactpage/ContactFAQ';
import { getYearsOfExperience } from '@/utils/getYearsOfExperience';
import { Helmet } from 'react-helmet-async';

// Content derived from the provided JSON data
const pageData = {
  hero: {
    headline: 'Contact Our Experts to Discuss Your Next Project',
    body: `Let's build the future together. Whether you require a detailed quote, a technical consultation for an upcoming tender, or wish to explore a partnership, our team is ready to assist. Reach out to us to leverage our ${getYearsOfExperience()} years of experience in underground pipeline, crossing, and trenchless technology services for your project's success.`,
    cta: 'Request a Quote Today',
    ctaLink: '#contact',
  },
  formAndDetails: {
    title: 'Connect With Our Experts',
    bodyText:
      "We're here to help and answer any question you might have. We look forward to hearing from you.",
    contactInfo: [
      {
        type: 'Phone',
        value: '+91 777 180 6888',
      },
      {
        type: 'Phone',
        value: '+91 79746 36790',
      },
      {
        type: 'Email',
        value: 'sarvottam24365@gmail.com',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'How do I request a detailed quote?',
        answer:
          'Please fill out the contact form with your project details, including scope, location, and any technical documents. Our team will review it and get back to you promptly. You can also connect with us on WhatsApp for a faster response.',
      },
      {
        question: 'Do you offer technical consultations for tenders?',
        answer: `Yes, we leverage our ${getYearsOfExperience()} years of experience to provide technical consultations to help you prepare for complex project tenders. Mention this in the contact form message.`,
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
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': pageData.faq.items.map((item) => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer.replace(
          '${getYearsOfExperience()}',
          getYearsOfExperience(),
        ),
      },
    })),
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us | Sarvottam Enterprises | Get a Quote</title>
        <meta
          name='description'
          content='Reach out to Sarvottam Enterprises for a project quote, technical consultation, or partnership inquiries. Contact our experts via form, phone, or WhatsApp.'
        />
        <link rel='canonical' href='https://www.your-domain.com/contact' />
        <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <PageHero
        intent='light'
        headline={pageData.hero.headline}
        body={pageData.hero.body}
        cta={pageData.hero.cta}
        ctaLink={pageData.hero.ctaLink}
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

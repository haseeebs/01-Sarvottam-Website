import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ContactFAQ = ({ title, items }) => {
  return (
    <section className='bg-white py-20 sm:py-24'>
      <div className='container mx-auto max-w-3xl px-4'>
        <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl'>
          {title}
        </h2>
        <div className='mt-12'>
          <Accordion type='single' collapsible className='w-full'>
            {items.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <span className='text-left text-lg font-bold text-gray-900'>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className='pr-10 pb-4'>
                    <div className='rounded-sm bg-slate-100 p-4'>
                      <p className='text-base leading-relaxed text-gray-700'>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;

import React, { useState } from "react";

const ContactFAQ = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center">
          {title}
        </h2>
        <div className="mt-12 space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-bold text-gray-900">
                    {item.question}
                  </span>
                  <span className="ml-4 flex h-7 w-7 flex-shrink-0 items-center justify-center">
                    <span
                      className={`relative h-6 w-6 transform transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <span className="absolute h-full w-0.5 bg-gray-500 top-0 left-1/2 -translate-x-1/2"></span>
                      <span className="absolute w-full h-0.5 bg-gray-500 top-1/2 -translate-y-1/2"></span>
                    </span>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? "20rem" : "0" }}
                >
                  <div className="pb-4 pr-10">
                    <div className="bg-slate-100 p-4 rounded-md">
                      <p className="text-base text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;

import React from "react";

const ContactPageHero = ({ headline, body, cta }) => {
  return (
    <section className="bg-slate-50 w-full py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-4xl">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-[750px]">
            {body}
          </p>
          {cta && (
            <a
              href="#contact"
              className="inline-block rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-300"
            >
              {cta}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPageHero;

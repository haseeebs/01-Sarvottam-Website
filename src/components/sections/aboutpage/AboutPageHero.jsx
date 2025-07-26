import React from "react";

const AboutPageHero = ({ content, imageUrl, imageAlt }) => {
  if (!content) {
    return null;
  }

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-16">
          <div className="order-last md:order-first">
            <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left">
              <h1 className="font-montserrat text-4xl font-bold text-[#0D2C54] sm:text-[42px] sm:leading-tight">
                {content.headline}
              </h1>

              <p className="mt-6 font-lato text-lg leading-relaxed text-[#212529]">
                {content.body}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  className="block w-full rounded-md bg-[#F5B841] px-12 py-3 text-center font-montserrat text-base font-bold text-[#0D2C54] shadow transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#F5B841] focus:ring-offset-2 sm:w-auto"
                  href="#"
                >
                  {content.cta}
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <img
              alt={imageAlt}
              src={imageUrl}
              className="h-full w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHero;

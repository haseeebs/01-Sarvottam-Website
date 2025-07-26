import React from "react";

const AboutPageCTA = ({ title, buttonText }) => {
  return (
    <section className="bg-[#0D2C54]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-montserrat text-4xl font-bold text-white sm:text-[36px]">
          {title}
        </h2>

        <div className="mt-8">
          <a
            href="#"
            className="inline-block rounded-md border-2 border-[#F5B841] bg-transparent px-12 py-3 font-montserrat font-bold text-[#F5B841] transition-colors duration-300 hover:bg-[#F5B841] hover:text-[#0D2C54] focus:outline-none focus:ring-2 focus:ring-[#F5B841] focus:ring-offset-2 focus:ring-offset-[#0D2C54]"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPageCTA;

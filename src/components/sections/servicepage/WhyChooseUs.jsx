import React from "react";

const WhyChooseUs = ({
  title,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  children,
}) => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-bold text-3xl md:text-4xl text-blue-800 mb-16">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className={imagePosition === "left" ? "md:order-last" : ""}>
            {children}
          </div>

          {/* Image Column */}
          <div className={imagePosition === "left" ? "md:order-first" : ""}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

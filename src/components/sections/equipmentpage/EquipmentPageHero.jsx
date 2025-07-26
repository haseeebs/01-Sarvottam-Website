import React from "react";

const EquipmentPageHero = ({ headline, body }) => {
  return (
    <div className="relative bg-gray-800">
      {/* Background Image - Assuming a class or inline style will be used for the actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581144079978-005d41c8f6b1?q=80&w=2940&auto=format&fit=crop')",
        }}
      ></div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="font-montserrat text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {headline}
          </h1>
          <p className="font-lato mt-6 text-lg leading-8 text-white max-w-3xl mx-auto">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPageHero;

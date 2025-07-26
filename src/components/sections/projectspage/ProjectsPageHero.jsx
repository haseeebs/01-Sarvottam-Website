import React from "react";

const ProjectsPageHero = ({ headline, body }) => {
  return (
    <div className="relative bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529369627985-136f3228994b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Completed landmark infrastructure project"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-[#0D2C54]/60"
          aria-hidden="true"
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center py-16 md:py-24">
          <h1 className="font-montserrat text-4xl font-bold text-white md:text-5xl animate-fade-in-up">
            {headline}
          </h1>
          <p
            className="mt-6 font-lato text-base text-[#8D99AE] md:text-lg max-w-[700px] mx-auto animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPageHero;

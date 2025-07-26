import React from "react";

const CrossingServicesHero = ({ content, imageUrl }) => {
  // Props se content extract karna
  const { breadcrumbs, headline, body, cta } = content;

  // Breadcrumbs ko display ke liye taiyaar karna
  const breadcrumbItems = breadcrumbs ? breadcrumbs.split(" > ") : [];

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-2 lg:gap-x-16">
          {/* Image section (DOM mein pehle, taaki mobile par upar dikhe) */}
          <div className="lg:order-2">
            <img
              className="w-full h-auto rounded-xl object-cover shadow-xl aspect-video"
              src={
                imageUrl ||
                "https://images.unsplash.com/photo-1599481238623-7140000a6848?q=80&w=1287&auto=format&fit=crop"
              }
              alt="Completed tunnel crossing under a highway"
            />
          </div>

          {/* Text content section (Desktop par left mein, mobile par neeche) */}
          <div className="lg:order-1 text-center lg:text-left">
            {/* Breadcrumbs */}
            {breadcrumbItems.length > 0 && (
              <div className="text-sm font-sans text-gray-500">
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <span
                      className={
                        index === breadcrumbItems.length - 1
                          ? "font-semibold text-gray-800"
                          : ""
                      }
                    >
                      {item}
                    </span>
                    {index < breadcrumbItems.length - 1 && (
                      <span className="mx-2">></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Headline */}
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-blue-900 sm:text-5xl">
              {headline}
            </h1>

            {/* Body */}
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-700 lg:mx-0 font-sans">
              {body}
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#quote"
                className="inline-block rounded-md bg-amber-400 px-8 py-3 text-base font-semibold text-blue-900 shadow-lg transition-colors hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                {cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossingServicesHero;

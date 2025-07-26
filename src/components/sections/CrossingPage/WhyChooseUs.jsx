import React from "react";

// Ek simple list component, agar 'body' prop ek array of strings ho to use karne ke liye.
const FeatureList = ({ items }) => (
  <ul className="mt-6 space-y-4 text-gray-600">
    {items.map((item, index) => (
      <li key={index} className="flex gap-x-3">
        <svg
          className="mt-1 h-5 w-5 flex-none text-indigo-600"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const WhyChooseUs = ({ title, body, imageUrl, imageSide = "right" }) => {
  // Determine column order based on imageSide prop
  const textOrderClass = imageSide === "right" ? "lg:order-1" : "lg:order-2";
  const imageOrderClass = imageSide === "right" ? "lg:order-2" : "lg:order-1";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Text Column */}
          <div className={`lg:pt-4 ${textOrderClass}`}>
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h2>
              {typeof body === "string" ? (
                <p className="mt-6 text-lg leading-8 text-gray-600">{body}</p>
              ) : (
                <FeatureList items={body} />
              )}
            </div>
          </div>

          {/* Image Column */}
          <div className={`flex items-start justify-end ${imageOrderClass}`}>
            <img
              src={
                imageUrl ||
                "https://images.unsplash.com/photo-1553102222-167d53da3445?q=80&w=1287&auto=format&fit=crop"
              }
              alt="Engineering team at a construction site"
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:w-[48rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

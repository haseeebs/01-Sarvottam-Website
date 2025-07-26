const KeyBenefits = ({ title, features }) => {
  return (
    <div className="bg-gray-50 font-sans py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-lg sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start">
                  {/* The Icon component should be passed as a prop */}
                  <feature.Icon
                    className="h-12 w-12 text-amber-500"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyBenefits;

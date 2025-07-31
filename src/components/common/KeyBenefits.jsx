const KeyBenefits = ({ title, features }) => {
  // features prop ke maujood na hone ki soorat mein default empty array set karein
  const featuresToShow = features || [];
  const numFeatures = featuresToShow.length;

  // Features ki tadad ke hisab se Tailwind CSS class chunein
  let gridColsClass;

  if (numFeatures === 4) {
    gridColsClass = 'lg:grid-cols-4';
  } else if (numFeatures === 2) {
    gridColsClass = 'lg:grid-cols-2';
  } else {
    // Default 3 columns par rakhein agar 3 features hon, ya 5 ya us se zyada hon.
    // Yeh layout ko saaf rakhta hai.
    gridColsClass = 'lg:grid-cols-3';
  }

  // Agar sirf 1 feature ho, to usay alag se handle karein taake woh ajeeb na lage.
  if (numFeatures === 1) {
    gridColsClass = 'lg:grid-cols-1 lg:max-w-md mx-auto'; // Center mein dikhane ke liye
  }

  return (
    <div className='bg-gray-50 py-16 font-sans sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-my-primary text-3xl font-bold tracking-tight sm:text-4xl'>
            {title}
          </h2>
        </div>
        <div className='mx-auto mt-16 max-w-lg sm:mt-20 lg:mt-24 lg:max-w-none'>
          {/* Yahan dynamic class ko lagaya gaya hai */}
          <div
            className={`grid grid-cols-1 gap-y-12 sm:gap-x-8 ${gridColsClass}`}
          >
            {featuresToShow.map((feature) => (
              <div key={feature.name} className='sm:text-left'>
                <div className='flex items-center sm:justify-start'>
                  {/* The Icon component should be passed as a prop */}
                  <feature.Icon
                    className='text-my-accent h-12 w-12'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-my-primary mt-5 text-xl leading-7 font-semibold'>
                  {feature.name}
                </h3>
                <p className='text-my-secondary mt-2 text-base leading-7'>
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

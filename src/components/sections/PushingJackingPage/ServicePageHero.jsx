const ServicePageHero = ({ headline, body, cta }) => {
  return (
    <div
      className="relative w-full bg-cover bg-center font-sans"
      // Replace with your actual image path for the RCC box and hydraulic jacks
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519443834782-61ac4d785311?q=80&w=1974&auto=format&fit=crop')",
      }}
    >
      {/* Corporate Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:px-8">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-white text-4xl md:text-5xl">
            {/* Font: Montserrat (Requires font setup in your project) */}
            {headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85 mx-auto md:mx-0">
            {/* Font: Lato (Requires font setup in your project) */}
            {body}
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-block rounded-md bg-amber-400 px-8 py-3 text-base font-semibold text-blue-900 shadow-sm transition hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              {cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageHero;

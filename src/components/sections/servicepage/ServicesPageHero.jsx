const ServicesPageHero = ({ headline, body }) => {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-sans font-bold text-3xl text-blue-800 md:text-5xl tracking-tight">
            {headline}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto font-sans text-base text-slate-700 md:text-lg leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPageHero;

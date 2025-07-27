import SectionWrapper from "@/components/ui/SectionWrapper";

const LogoCloud = ({ title, logos }) => {
  // logos should be an array of objects: [{ src: '/path/to/logo.png', alt: 'Client Name' }]
  return (
    <SectionWrapper>
      <h3 className="text-center text-xl font-semibold text-muted-foreground">
        {title}
      </h3>
      <div className="mt-8 flow-root">
        <div className="-m-2 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex flex-shrink-0 justify-center text-center"
            >
              <img
                className="h-12 w-auto object-contain"
                src={logo.src}
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LogoCloud;

import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const Hero = ({ title, body, cta, imageUrl }) => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          <p className="text-lg text-muted-foreground">{body}</p>
          {cta && (
            <div className="mt-4">
              <Button size="lg" asChild>
                {cta}
              </Button>
            </div>
          )}
        </div>
        {imageUrl && (
          <div>
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Hero;

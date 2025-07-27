import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/layout/SectionWrapper";

const CTASection = ({ title, body, cta }) => {
  return (
    <SectionWrapper className="bg-card rounded-lg text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{body}</p>
      {cta && (
        <div className="mt-6">
          <Button size="lg" asChild>
            {cta}
          </Button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default CTASection;

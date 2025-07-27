import { cn } from "@/lib/utils/cn";

const SectionWrapper = ({ children, className }) => {
  return (
    <section className={cn("container py-8 md:py-12 lg:py-16", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;

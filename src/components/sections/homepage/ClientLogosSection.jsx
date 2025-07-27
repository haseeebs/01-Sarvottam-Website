import { Marquee } from "@/components/magicui/marquee";

// Step 1: Puraane array ko naye data se replace karein
const clientLogosData = [
  {
    name: "Larsen & Toubro",
    logoUrl: "https://logo.clearbit.com/ltconstruction.com",
  },
  { name: "GAIL", logoUrl: "https://logo.clearbit.com/gailonline.com" },
  { name: "Indian Oil", logoUrl: "https://logo.clearbit.com/iocl.com" },
  { name: "NTPC", logoUrl: "https://logo.clearbit.com/ntpc.co.in" },
  {
    name: "Reliance Industries",
    logoUrl: "https://logo.clearbit.com/ril.com",
  },
];

export function ClientLogosSection() {
  return (
    <section id="companies">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-md font-semibold text-gray-500">
            TRUSTED BY LEADING TEAMS
          </h3>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s]">
              {/* Step 2: Naye data array par map function chalayein */}
              {clientLogosData.map((company, idx) => (
                <img
                  key={idx}
                  // Step 3: src aur alt ko object ki properties se update karein
                  src={company.logoUrl}
                  alt={company.name}
                  // `object-contain` add karne se logo ajeeb nahi dikhenge
                  className="h-16 w-36 object-contain dark:brightness-0 dark:invert"
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

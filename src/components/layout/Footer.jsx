import React from "react";

// Navigation links ka data, Component 2 ke content ke hisaab se.
const navigation = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Projects", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  services: [
    { name: "Trenchless Technology", href: "#" },
    { name: "Tunnel Crossing", href: "#" },
    { name: "Box Pushing", href: "#" },
    { name: "Rock Boring", href: "#" },
  ],
};

const Footer = () => {
  return (
    // Component 2 se background, font, aur primary text color
    <footer className="bg-[#0D2C54] font-sans">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        {/* Component 1 ka main grid layout (left: company info, right: links) */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Left Column: Company Info & Socials */}
          <div className="space-y-8">
            {/* Component 2 se company ka naam aur styling */}
            <h2
              className="text-3xl font-bold text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Sarvottam
            </h2>
            {/* Component 2 se description aur styling */}
            <p className="text-sm/6 text-[#8D99AE]">
              Pioneering trenchless technology with a foundation of trust and
              determination for over 15 years.
            </p>
          </div>

          {/* Right Columns: Links & Contact Info */}
          {/* Grid structure Component 1 se, lekin content Component 2 se */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
            {/* Company Links */}
            <div>
              <h3
                className="text-sm font-semibold tracking-wider uppercase text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-[#8D99AE] hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="mt-10 sm:mt-0">
              <h3
                className="text-sm font-semibold tracking-wider uppercase text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Services
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-[#8D99AE] hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Isko humne alag se add kiya hai Component 2 se */}
            <div className="mt-10 sm:mt-0">
              <h3
                className="text-sm font-semibold tracking-wider uppercase text-white"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Contact
              </h3>
              <ul className="mt-6 space-y-4 text-base text-[#8D99AE]">
                <li>
                  <p>
                    123 Infrastructure Lane,
                    <br />
                    New Delhi, India 110001
                  </p>
                </li>
                <li>
                  <a
                    href="mailto:contact@sarvottam.com"
                    className="hover:text-white"
                  >
                    sarvottam24365@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+911234567890" className="hover:text-white">
                    +91 777 180 6888
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        {/* Border aur text color ko Component 2 ke style ke hisaab se adjust kiya gaya hai */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm text-[#8D99AE]">
            © {new Date().getFullYear()} Sarvottam Enterprises. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

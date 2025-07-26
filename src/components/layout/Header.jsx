import React, { useState, useEffect } from "react";

// Placeholder for the logo component as specified.
const SarvottamEnterprisesLogo = () => (
  <a
    href="/"
    className="flex items-center gap-3"
    aria-label="Sarvottam Enterprises Home"
  >
    {/* Placeholder Icon */}
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L2 7L12 12L22 7L12 2Z"
        stroke="#212529"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M2 17L12 22L22 17"
        stroke="#212529"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 12L12 17L2 12"
        stroke="#212529"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-xl font-bold text-[#212529] tracking-wide">
      Sarvottam Enterprises
    </span>
  </a>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="font-lato relative py-2 text-base font-bold text-[#212529] group"
  >
    {children}
    <span className="absolute bottom-0 left-0 block h-[2px] w-full bg-[#D4AF37] transition-transform duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
  </a>
);

export default function Header({ navigationLinks }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = navigationLinks || [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Projects", path: "/projects" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-20 w-full bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_4px_12px_rgba(0,0,0,0.05)]" : ""
        }`}
      >
        <div className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <SarvottamEnterprisesLogo />
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.label} href={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              className="z-30 p-2 text-[#212529]"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-10 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="font-lato text-2xl font-bold text-[#212529]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

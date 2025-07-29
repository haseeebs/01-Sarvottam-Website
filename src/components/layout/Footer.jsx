import React from 'react';
import { Link } from 'react-router-dom';

// Navigation links ka data, Component 2 ke content ke hisaab se.
const navigation = {
  company: [
    { name: 'About Us', to: '#' },
    { name: 'Our Projects', to: '#' },
    { name: 'Careers', to: '#' },
    { name: 'Blog', to: '#' },
  ],
  services: [
    { name: 'Trenchless Technology', to: '#' },
    { name: 'Tunnel Crossing', to: '#' },
    { name: 'Box Pushing', to: '#' },
    { name: 'Rock Boring', to: '#' },
  ],
};

const Footer = () => {
  return (
    // Component 2 se background, font, aur primary text color
    <footer className='bg-my-primary font-sans'>
      <div className='mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32'>
        {/* Component 1 ka main grid layout (left: company info, right: links) */}
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          {/* Left Column: Company Info & Socials */}
          <div className='space-y-8'>
            {/* Component 2 se company ka naam aur styling */}
            <h2 className='font-family-body text-3xl font-bold text-white'>
              Sarvottam
            </h2>
            {/* Component 2 se description aur styling */}
            <p className='text-my-secondary text-sm/6'>
              Pioneering trenchless technology with a foundation of trust and
              determination for over 15 years.
            </p>
          </div>

          {/* Right Columns: Links & Contact Info */}
          {/* Grid structure Component 1 se, lekin content Component 2 se */}
          <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0'>
            {/* Company Links */}
            <div>
              <h3 className='font-family-display text-sm font-semibold tracking-wider text-white uppercase'>
                Company
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className='text-my-secondary text-base hover:text-white'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className='mt-10 sm:mt-0'>
              <h3 className='font-family-display text-sm font-semibold tracking-wider text-white uppercase'>
                Services
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.to}
                      className='text-my-secondary text-base hover:text-white'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info - Isko humne alag se add kiya hai Component 2 se */}
            <div className='mt-10 sm:mt-0'>
              <h3 className='font-family-body text-sm font-semibold tracking-wider text-white uppercase'>
                Contact
              </h3>
              <ul className='text-my-secondary mt-6 space-y-4 text-base'>
                <li>
                  <p>
                    123 Infrastructure Lane,
                    <br />
                    New Delhi, India 110001
                  </p>
                </li>
                <li>
                  <a
                    href='mailto:contact@sarvottam.com'
                    className='hover:text-white'
                  >
                    sarvottam24365@gmail.com
                  </a>
                </li>
                <li>
                  <a href='tel:+911234567890' className='hover:text-white'>
                    +91 777 180 6888
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        {/* Border aur text color ko Component 2 ke style ke hisaab se adjust kiya gaya hai */}
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-my-secondary text-sm'>
            © {new Date().getFullYear()} Sarvottam Enterprises. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { footerNav } from '@/config/navigation';
import Logo from '@/assets/images/Logo.webp';
import { getYearsOfExperience } from '@/utils/getYearsOfExperience';

const Footer = () => {
  return (
    <footer className='bg-my-primary font-sans'>
      <div className='mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <Link to='/'>
              {/* <img
                className='mb-8 h-10 w-50'
                src={Logo}
                alt='Sarvottam Enterprises Logo'
              /> */}
              <h2 className='font-family-display text-xl font-bold text-white sm:text-2xl'>
                Sarvottam Enterprises
              </h2>
            </Link>
            <p className='text-my-secondary text-sm/6'>
              Pioneering trenchless technology with a foundation of trust and
              determination for over {getYearsOfExperience()} years.
            </p>
          </div>

          <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0'>
            {/* Company Links */}
            <div>
              <h3 className='font-family-display text-sm font-semibold tracking-wider text-white uppercase'>
                Company
              </h3>
              <ul role='list' className='mt-6 space-y-4'>
                {footerNav.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
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
                {footerNav.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className='text-my-secondary text-base hover:text-white'
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className='mt-10 sm:mt-0'>
              <h3 className='font-family-body text-sm font-semibold tracking-wider text-white uppercase'>
                Contact
              </h3>
              <ul className='text-my-secondary mt-6 space-y-4 text-base'>
                <li>
                  <a
                    href={`mailto:${footerNav.contact.email}`}
                    className='hover:text-white'
                  >
                    {footerNav.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footerNav.contact.phone}`}
                    className='hover:text-white'
                  >
                    {footerNav.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${footerNav.contact.phone2}`}
                    className='hover:text-white'
                  >
                    {footerNav.contact.phone2}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

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

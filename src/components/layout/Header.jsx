import React, { useState, useEffect } from 'react';
import Logo from '@/assets/images/Logo.webp';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className='font-body group text-my-primary relative py-2 text-base font-bold'
  >
    {children}
    <span className='bg-my-accent absolute bottom-0 left-0 block h-[2px] w-full origin-left scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100'></span>
  </Link>
);

export default function Header({ navigationLinks }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = navigationLinks || [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-20 w-full bg-white transition-shadow duration-300 ${
          isScrolled ? 'shadow-[0_4px_12px_rgba(0,0,0,0.05)]' : ''
        }`}
      >
        <div className='mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0'>
            <div className='flex-shrink-0'>
              <img src={Logo} alt='Logo' className='h-54 w-auto' />
            </div>
          </div>

          <nav className='hidden items-center gap-8 md:flex'>
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle navigation menu'
              className='text-my-primary z-30 p-2'
            >
              {isMenuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
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
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className='flex h-full flex-col items-center justify-center gap-10'>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className='font-body text-my-primary text-2xl font-bold'
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

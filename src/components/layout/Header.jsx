// src/components/layout/Header.jsx

import React, { useState, useEffect, useRef } from 'react';
import Logo from '@/assets/images/Logo.webp';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { primaryNav } from '@/config/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils'; // ✨ CN utility import karein

const NavLink = ({ to, children, hasDropdown }) => (
  <div className='relative'>
    <Link
      to={to}
      className='font-body group text-my-primary relative flex items-center gap-1 py-2 text-base font-bold'
    >
      {children}
      {hasDropdown && (
        <ChevronDown className='h-4 w-4 transition-transform duration-200 group-hover:rotate-180' />
      )}
      <span className='bg-my-accent absolute bottom-0 left-0 block h-[2px] w-full origin-left scale-x-0 transform transition-transform duration-300 ease-out group-hover:scale-x-100'></span>
    </Link>
  </div>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleMouseEnter = (itemName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const navItems = primaryNav;

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-20 w-full bg-white transition-shadow duration-300',
          isScrolled && 'shadow-[0_4px_12px_rgba(0,0,0,0.05)]',
        )}
      >
        <div className='mx-auto flex h-[80px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex-shrink-0'>
            <Link to='/'>
              <img src={Logo} alt='Logo' className='h-10 w-auto' />
            </Link>
          </div>

          <nav className='hidden items-center gap-8 md:flex'>
            {navItems.map((item) => (
              <div
                key={item.name}
                className='relative'
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.name)
                }
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <NavLink to={item.path} hasDropdown={!!item.dropdown}>
                  {item.name}
                </NavLink>
                {item.dropdown && openDropdown === item.name && (
                  <div className='ring-opacity-5 absolute top-full left-0 mt-2 w-64 origin-top-right rounded-sm bg-white py-2 shadow-lg ring-1 ring-black'>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className='flex items-center md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle navigation menu'
              className='text-my-primary z-30 p-2'
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-10 bg-white transition-transform duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* ✨ FIX: Naya mobile menu logic. Har item alag se render hoga. */}
        <nav className='mt-20 flex h-full flex-col px-8'>
          {navItems.map((item) =>
            item.dropdown ? (
              // Case 1: Agar item ke paas dropdown hai (e.g., Services)
              <Accordion
                type='single'
                collapsible
                className='w-full border-b'
                key={item.name}
              >
                <AccordionItem value={item.name} className='border-b-0'>
                  <AccordionTrigger className='font-body text-my-primary py-4 text-2xl font-bold no-underline hover:no-underline'>
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col space-y-4 py-4 pl-4'>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className='font-body text-my-secondary text-xl font-medium'
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              // Case 2: Agar item ek simple link hai (e.g., Home, Projects)
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className='font-body text-my-primary block w-full border-b py-4 text-left text-2xl font-bold'
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;

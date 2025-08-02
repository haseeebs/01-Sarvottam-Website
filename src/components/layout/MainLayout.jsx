import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SmoothScrollToTop from '../common/SmoothScrollToTop';

const LoadingSpinner = () => (
  <div className='flex h-96 w-full items-center justify-center'>
    <div className='border-my-accent size-16 animate-spin rounded-full border-4 border-dashed'></div>
  </div>
);

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className='flex-grow'>
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <SmoothScrollToTop />
    </>
  );
};

export default MainLayout;

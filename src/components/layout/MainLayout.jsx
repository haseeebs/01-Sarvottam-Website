import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import SmoothScrollToTop from '../common/SmoothScrollToTop';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <SmoothScrollToTop />
    </>
  );
};

export default MainLayout;

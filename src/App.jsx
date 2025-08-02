import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy } from 'react';

// Layout Component
import MainLayout from './components/layout/MainLayout';

// Lazy Loaded Pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const EquipmentPage = lazy(() => import('./pages/EquipmentPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Service Pages
const HDDPage = lazy(() => import('./pages/services/HDDPage'));
const BoringPage = lazy(() => import('./pages/services/BoringPage'));
const BoxPushingPage = lazy(() => import('./pages/services/BoxPushingPage'));
const JackPushingPage = lazy(() => import('./pages/services/JackPushingPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'equipment', element: <EquipmentPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'contact', element: <ContactPage /> },
      {
        path: 'services',
        children: [
          { path: 'hdd', element: <HDDPage /> },
          { path: 'box-pushing', element: <BoxPushingPage /> },
          { path: 'jack-pushing', element: <JackPushingPage /> },
          { path: 'auger-boring', element: <BoringPage /> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

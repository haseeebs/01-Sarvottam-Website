import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout Component
import MainLayout from './components/layout/MainLayout';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EquipmentPage from './pages/EquipmentPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Service Page Components
import HDDPage from './pages/services/HDDPage';
import BoringPage from './pages/services/BoringPage';
import BoxPushingPage from './pages/services/BoxPushingPage';
import JackPushingPage from './pages/services/JackPushingPage';

// Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      // Main Pages
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'equipment',
        element: <EquipmentPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },

      // Services Pages (Nested Structure)
      {
        path: 'services',
        children: [
          {
            path: 'hdd',
            element: <HDDPage />,
          },
          {
            path: 'box-pushing',
            element: <BoxPushingPage />,
          },
          {
            path: 'jack-pushing',
            element: <JackPushingPage />,
          },
          {
            path: 'auger-boring',
            element: <BoringPage />,
          },
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

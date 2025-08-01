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
import CrossingPage from './pages/services/CrossingPage';
import PushingJackingPage from './pages/services/PushingJackingPage';
import BoringPage from './pages/services/BoringPage';

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
            path: 'pipeline-crossing',
            element: <CrossingPage />,
          },
          {
            path: 'pushing-jacking',
            element: <PushingJackingPage />,
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

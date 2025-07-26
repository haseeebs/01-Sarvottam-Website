import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout Component
import MainLayout from "./components/layout/MainLayout";

// Page Components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EquipmentPage from "./pages/EquipmentPage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

// Service Page Components
import ServicesPage from "./pages/services/ServicesPage";
import CrossingPage from "./pages/services/CrossingPage";
import PushingJackingPage from "./pages/services/PushingJackingPage";
import BoringPage from "./pages/services/BoringPage";
import OtherServicesPage from "./pages/services/OtherServicesPage";

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      // Main Pages
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "equipment",
        element: <EquipmentPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "clients",
        element: <ClientsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },

      // Services Pages (Nested Structure)
      {
        path: "services",
        children: [
          {
            index: true,
            element: <ServicesPage />,
          },
          {
            path: "pipeline-crossing",
            element: <CrossingPage />,
          },
          {
            path: "pushing-jacking",
            element: <PushingJackingPage />,
          },
          {
            path: "auger-boring",
            element: <BoringPage />,
          },
          {
            path: "other",
            element: <OtherServicesPage />,
          },
        ],
      },

      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;
export default Router;

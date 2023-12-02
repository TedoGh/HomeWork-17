import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import FactPage from "../pages/FactPage";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/fact/:factId",
    element: <FactPage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;

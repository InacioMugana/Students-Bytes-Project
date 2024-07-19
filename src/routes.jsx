import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Students } from "./pages/students";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/error-page";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

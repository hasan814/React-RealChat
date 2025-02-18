import { createBrowserRouter } from "react-router-dom";

import NotFound from "@/pages/NotFound";
import Client from "@/pages/Client";
import Agent from "@/pages/Agent";
import Home from "@/pages/Home";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/client", element: <Client /> },
      { path: "/agent", element: <Agent /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;

import { RouterProvider } from "react-router-dom";
import { SocketProvider } from "./context/SocketProvider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import router from "./routes";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  </StrictMode>
);

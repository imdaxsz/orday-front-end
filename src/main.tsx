import * as React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "@/App.tsx";

import "@/styles/font.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

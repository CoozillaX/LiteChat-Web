import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import App from "@/views/App.tsx";
import "@/styles/index.scss";
import "@/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

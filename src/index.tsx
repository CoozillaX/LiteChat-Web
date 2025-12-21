import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/state/store";
import App from "@/views/App";
import "./index.scss";
import "@/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/state/store";
import App from "@/views/App";
import i18n from "@/i18n";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        onBeforeLift={() => {
          // Set i18n language from persisted state
          const lng = store.getState().app.language;
          if (lng) {
            i18n.changeLanguage(lng);
          }
        }}
      >
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

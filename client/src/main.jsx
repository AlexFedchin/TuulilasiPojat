import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </I18nextProvider>
);

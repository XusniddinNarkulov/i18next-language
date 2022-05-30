import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import HttpApi from "i18next-http-backend";

i18n
   .use(initReactI18next) // passes i18n down to react-i18next
   .use(LanguageDetector)
   .use(HttpApi)
   .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)

      // lng: "en", // if you're using a language detector, do not define the lng option
      // fallbackLng: "ru",
      supportedLngs: ["en", "fr", "ar"],

      detection: {
         order: [
            "htmlTag",
            "querystring",
            "cookie",
            "localStorage",
            "sessionStorage",
            "navigator",
            "path",
            "subdomain",
         ],
         caches: ["localStorage", "cookie"],
      },

      backend: { loadPath: "/assets/locales/{{lng}}/translation.json" },
      // react: { useSuspense: false },

      interpolation: {
         escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
   });

function App() {
   const { t } = useTranslation();

   return <h2>{t("welcome_to_react")}</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

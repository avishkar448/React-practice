import { createContext, useContext, useState } from "react";

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  const localizedString = {
    en: {
      greeting: "Hello World!!",
      welcome: "Welcome to my app",
    },
    es: {
      greeting: "Hola mundo!!",
      welcome: "Bienvenido a mi application",
    },
  };

  const translate = (key) => {
    return localizedString[locale][key];
  };

  return (
    <LocalizationContext.Provider value={{ locale, setLocale, translate }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocal = () => {
  return useContext(LocalizationContext);
};

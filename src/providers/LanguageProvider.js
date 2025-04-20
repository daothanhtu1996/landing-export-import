import React, { createContext, useState, useEffect } from "react";
import { en } from "../lang/en";
import { vi } from "../lang/vi";

export const LanguageContext = createContext();

const dictionaries = { en, vi };

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLanguage(savedLang);
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, dictionary: dictionaries }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

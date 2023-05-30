import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'nl'
  );

  const handleChangeLanguage = (e) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, handleChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

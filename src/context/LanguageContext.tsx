import { createContext, useContext, useState } from 'react';

export type Lang = 'de' | 'en';

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({ lang: 'de', toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) || 'de';
  });

  const toggle = () => {
    setLang(l => {
      const next = l === 'de' ? 'en' : 'de';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

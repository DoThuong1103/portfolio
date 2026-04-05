"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '@/i18n';
import type { Locale, Translations } from '@/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const initLocale = () => {
      const saved = localStorage.getItem('portfolio-locale') as Locale | null;
      if (saved && ['vi', 'en', 'ja'].includes(saved)) {
        setLocaleState(saved);
      }
    };
    initLocale();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('portfolio-locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

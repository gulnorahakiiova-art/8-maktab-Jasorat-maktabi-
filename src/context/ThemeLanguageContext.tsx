import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language } from '../types';
import { translations, Translations } from '../i18n/translations';

interface ThemeLanguageContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export const ThemeLanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('school_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Language state
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('school_lang') as Language;
    if (savedLang && ['uz', 'ru', 'en'].includes(savedLang)) return savedLang;
    
    // Check browser language
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith('ru')) return 'ru';
    if (navLang.startsWith('en')) return 'en';
    return 'uz';
  });

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('school_theme', theme);
  }, [theme]);

  // Sync language with localStorage and HTML lang attribute
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('school_lang', lang);
    document.documentElement.lang = lang;
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const t = translations[language];

  return (
    <ThemeLanguageContext.Provider value={{ theme, toggleTheme, language, setLanguage, t }}>
      {children}
    </ThemeLanguageContext.Provider>
  );
};

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    throw new Error('useThemeLanguage must be used within a ThemeLanguageProvider');
  }
  return context;
};

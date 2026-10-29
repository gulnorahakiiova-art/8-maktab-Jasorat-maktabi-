import React, { useState, useEffect } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../types';
import { Sun, Moon, Menu, X, Download, Shield, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, language, setLanguage, t } = useThemeLanguage();
  const { isInstallable, install, isIOS } = usePWAInstall();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll for glass navbar and progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#jasorat', label: t.nav.jasorat, special: true },
    { href: '#subjects', label: t.nav.subjects },
    { href: '#achievements', label: t.nav.achievements },
    { href: '#teachers', label: t.nav.teachers },
    { href: '#resources', label: t.nav.resources },
    { href: '#tools', label: t.nav.tools },
    { href: '#news', label: t.nav.news },
    { href: '#contact', label: t.nav.contact }
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'Z", flag: "🇺🇿" },
    { code: 'ru', label: "РУ", flag: "🇷🇺" },
    { code: 'en', label: "EN", flag: "🇬🇧" }
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-amber-400 to-emerald-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-black/5 py-3'
            : 'bg-gradient-to-b from-black/60 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-950 p-1 flex items-center justify-center shadow-md border border-amber-400/40 group-hover:scale-105 transition-transform duration-200">
              <img src="/logo.svg" alt="8-Maktab Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-lg font-bold font-heading tracking-tight leading-tight flex items-center gap-1.5 ${
                isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'
              }`}>
                8-Maktab
                <span className="text-amber-500 text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 flex items-center gap-1">
                  <Shield className="w-3 h-3 text-amber-500 inline" />
                  Jasorat
                </span>
              </span>
              <span className={`text-[11px] font-medium leading-none ${
                isScrolled ? 'text-slate-500 dark:text-slate-400' : 'text-slate-200'
              }`}>
                Mingbuloq tumani
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors duration-200 relative py-1 ${
                  link.special
                    ? 'text-amber-500 hover:text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1'
                    : isScrolled
                    ? 'text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-amber-400'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.special && <Sparkles className="w-3.5 h-3.5 text-amber-500 inline" />}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Language Switcher + Theme Toggle + Contact CTA) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Language Switcher Pills */}
            <div className={`flex items-center p-0.5 rounded-lg border text-xs font-medium ${
              isScrolled
                ? 'bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700'
                : 'bg-black/30 backdrop-blur-md border-white/20 text-white'
            }`}>
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLanguage(item.code)}
                  className={`px-2 py-1 rounded-md transition-all duration-200 cursor-pointer ${
                    language === item.code
                      ? 'bg-blue-600 text-white shadow-sm font-semibold'
                      : 'hover:text-amber-400 opacity-80 hover:opacity-100'
                  }`}
                  title={item.label}
                >
                  <span className="mr-1 hidden sm:inline">{item.flag}</span>
                  {item.label}
                </button>
              ))}
            </div>

            {/* Dark/Light Mode Animated Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className={`p-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                isScrolled
                  ? 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-400'
                  : 'bg-black/30 hover:bg-black/40 border-white/20 text-amber-300'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            {/* PWA Install Button if available */}
            {isInstallable && (
              <button
                onClick={install}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-semibold shadow-md transition-transform duration-150 active:scale-95"
                title={t.nav.installApp}
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.nav.installApp}</span>
              </button>
            )}

            {/* Primary Action Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-600/20 transition-all duration-200 active:scale-95 hover:shadow-blue-600/40"
            >
              {t.nav.contact}
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 rounded-lg border transition-colors cursor-pointer ${
                isScrolled
                  ? 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white'
                  : 'bg-black/30 border-white/20 text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-[#0B1F4B] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200 dark:border-slate-800">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <img src="/logo.svg" alt="Logo" className="w-8 h-8 object-contain" />
                  <span className="font-bold text-slate-900 dark:text-white font-heading">
                    8-Maktab
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      link.special
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold flex items-center justify-between'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.special && <Shield className="w-4 h-4 text-amber-500" />}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              {isInstallable && (
                <button
                  onClick={() => {
                    install();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm shadow"
                >
                  <Download className="w-4 h-4" />
                  {t.nav.installApp}
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

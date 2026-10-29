import React, { useState, useEffect } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { SCHOOL_CONTACT } from '../data/schoolData';
import { Shield, ArrowUp, Heart, Phone, Mail, MapPin, Send, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, language, setLanguage, theme, toggleTheme } = useThemeLanguage();

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070e1e] text-slate-300 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      
      {/* Top Gradient Glow Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-amber-400 to-emerald-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-950 p-1 flex items-center justify-center border border-amber-400/40">
                <img src="/logo.svg" alt="8-Maktab Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-lg font-bold font-heading text-white tracking-tight flex items-center gap-1.5">
                  8-Maktab
                  <span className="text-amber-400 text-xs font-semibold px-1.5 py-0.5 rounded bg-amber-400/10 border border-amber-400/30">
                    Jasorat
                  </span>
                </span>
                <span className="text-xs text-slate-400 block">Mingbuloq tumani</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {t.footer.aboutSchool}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SCHOOL_CONTACT.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-500 flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href={SCHOOL_CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-rose-600 hover:border-rose-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SCHOOL_CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-red-600 hover:border-red-500 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#jasorat" className="hover:text-amber-400 transition-colors text-amber-300 font-medium">
                  {t.nav.jasorat}
                </a>
              </li>
              <li>
                <a href="#subjects" className="hover:text-amber-400 transition-colors">
                  {t.nav.subjects}
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-amber-400 transition-colors">
                  {t.nav.achievements}
                </a>
              </li>
              <li>
                <a href="#teachers" className="hover:text-amber-400 transition-colors">
                  {t.nav.teachers}
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-amber-400 transition-colors">
                  {t.nav.resources}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              {t.contact.title}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_CONTACT.addressUz}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SCHOOL_CONTACT.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{SCHOOL_CONTACT.email}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Language & Preferences (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Til & Rejim
            </h4>
            
            <div className="flex flex-col gap-1.5">
              {[
                { code: 'uz', label: "O'zbekcha (Lotin)" },
                { code: 'ru', label: "Русский язык" },
                { code: 'en', label: "English" }
              ].map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLanguage(item.code as any)}
                  className={`text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    language === item.code
                      ? 'bg-blue-600 text-white font-bold'
                      : 'hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="mt-2 text-xs py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-amber-400 transition-colors w-full text-center cursor-pointer"
            >
              {theme === 'dark' ? "☀️ Yorug' rejim" : "🌙 Tungi rejim"}
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Made with Love */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            {t.footer.copyright}
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>{t.footer.madeWithLove}</span>
          </div>
        </div>

      </div>

      {/* Floating Back-to-Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30 transition-transform duration-200 active:scale-95 cursor-pointer hover:-translate-y-1"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </footer>
  );
};

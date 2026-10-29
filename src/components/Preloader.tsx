import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';

export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const { language } = useThemeLanguage();

  const welcomeTexts = {
    uz: "8-sonli umumiy o'rta ta'lim maktabi — Jasorat Maktabi",
    ru: "Школа № 8 Мингбулакского района — Школа Мужества",
    en: "Mingbuloq School No. 8 — School of Courage"
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070e1e] text-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute -inset-4 rounded-full border border-dashed border-amber-400/40"
            />
            
            {/* Logo container with pulse & scale */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 mb-6 relative flex items-center justify-center"
            >
              <img src="/logo.svg" alt="Maktab Logosi" className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(245,179,1,0.5)]" />
            </motion.div>

            {/* School Motto & Welcome */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="text-xl md:text-2xl font-bold font-serif tracking-wide text-amber-400 mb-2">
                BILIM · JASORAT · KELAJAK
              </div>
              <p className="text-sm text-slate-300 max-w-md">
                {welcomeTexts[language]}
              </p>
            </motion.div>

            {/* Progress line */}
            <div className="w-48 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-blue-600 via-amber-400 to-emerald-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

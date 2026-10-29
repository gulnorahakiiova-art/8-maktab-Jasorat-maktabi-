import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { ACHIEVEMENTS } from '../data/schoolData';
import { AchievementCategory } from '../types';
import { Award, Trophy, Medal, Calendar, User, Sparkles, Filter } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: t.achievements.filterAll },
    { id: 'math', label: t.achievements.filterMath },
    { id: 'physics', label: t.achievements.filterPhysics },
    { id: 'english', label: t.achievements.filterEnglish },
    { id: 'military', label: t.achievements.filterMilitary },
    { id: 'sports', label: t.achievements.filterSports },
  ];

  const years = ['all', 2026, 2025, 2024, 2023, 2022, 2021];

  // Filter achievements
  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || item.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  const getPlaceBadge = (place: 1 | 2 | 3) => {
    if (place === 1) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold text-xs border border-amber-500/30">
          <Trophy className="w-3.5 h-3.5 text-amber-500 inline" />
          {t.achievements.place1}
        </span>
      );
    }
    if (place === 2) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs border border-slate-300 dark:border-slate-600">
          <Medal className="w-3.5 h-3.5 text-slate-400 inline" />
          {t.achievements.place2}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-900/15 text-amber-800 dark:text-amber-600 font-bold text-xs border border-amber-800/30">
        <Medal className="w-3.5 h-3.5 text-amber-700 inline" />
        {t.achievements.place3}
      </span>
    );
  };

  const getLevelLabel = (level: string) => {
    if (level === 'international') return t.achievements.levelInternational;
    if (level === 'republic') return t.achievements.levelRepublic;
    if (level === 'region') return t.achievements.levelRegion;
    return t.achievements.levelDistrict;
  };

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-[#091326] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>{t.achievements.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.achievements.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.achievements.subtitle}
          </p>
        </div>

        {/* Filter Controls: Categories & Years */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Year Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
            {years.map((y) => (
              <button
                key={String(y)}
                onClick={() => setSelectedYear(y as any)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-colors cursor-pointer ${
                  selectedYear === y
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {y === 'all' ? t.achievements.filterAll : y}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-blue-500/30 dark:border-blue-400/20 ml-4 md:ml-32 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Year Marker on Left (Desktop) */}
                <div className="hidden md:block absolute -left-36 top-1.5 text-right w-28">
                  <span className="text-xl font-bold font-heading text-blue-600 dark:text-amber-400 tabular-nums">
                    {item.year}
                  </span>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.date}
                  </div>
                </div>

                {/* Timeline node icon */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Medal className="w-4 h-4 text-amber-500" />
                </div>

                {/* Achievement Card */}
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {getPlaceBadge(item.place)}
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {getLevelLabel(item.level)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      <User className="w-3.5 h-3.5" />
                      <span>{item.studentName}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description[language]}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state fallback */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
            Tanlangan parametrlar bo'yicha yutuqlar topilmadi.
          </div>
        )}

      </div>
    </section>
  );
};

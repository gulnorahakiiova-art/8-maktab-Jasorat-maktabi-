import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { IMAGES, SCHOOL_STATS } from '../data/schoolData';
import { ChevronDown, ArrowRight, Shield, Award, Sparkles, BookOpen, Atom } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  // Slideshow slides array for Ken Burns effect
  const heroSlides = [
    {
      image: IMAGES.heroCampus,
      tag: "CAMPUS & ENVIRONMENT",
      captionUz: "Zamonaviy ta'lim sharoitlari va obod maskan",
      captionRu: "Современная инфраструктура и ухоженная территория",
      captionEn: "State-of-the-art campus and inspiring grounds"
    },
    {
      image: IMAGES.jasoratHall,
      tag: "JASORAT MAKTABI",
      captionUz: "Shon-sharaf zali va harbiy-vatanparvarlik tarbiyasi",
      captionRu: "Зал воинской славы и патриотическое воспитание",
      captionEn: "Cadet Hall of Honor & Leadership Excellence"
    },
    {
      image: IMAGES.physicsLab,
      tag: "SCIENCE & LABS",
      captionUz: "Fizika laboratoriyasi va amaliy tadqiqotlar",
      captionRu: "Лаборатория физики и научные исследования",
      captionEn: "Advanced Physics Laboratory & Practical Research"
    },
    {
      image: IMAGES.sportsField,
      tag: "SPORTS & DRILLS",
      captionUz: "Sport majmuasi va harakatli sog'lom hayot",
      captionRu: "Спортивный стадион и физическая закалка",
      captionEn: "Athletic Stadium & Physical Endurance Training"
    },
    {
      image: IMAGES.libraryStudy,
      tag: "LIBRARY & COMMONS",
      captionUz: "Boy raqamli kutubxona va ingliz tili to'garaklari",
      captionRu: "Богатая библиотека и разговорные клубы",
      captionEn: "Comprehensive Library & Collaborative Study Spaces"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#070e1e] text-white">
      {/* Background Slideshow with Ken Burns Zoom & Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1.4, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>

        {/* Measured Contrast Scrims for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e1e] via-[#070e1e]/75 to-[#070e1e]/40 z-10" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070e1e]/40 to-[#070e1e]/85 z-10" />
      </div>

      {/* Floating Animated Symbols (Math, Science, English, Courage) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none">
        {/* Floating Pi π */}
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 8, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[8%] text-3xl md:text-5xl font-mono font-bold text-amber-400/20"
        >
          π
        </motion.div>

        {/* Floating Sigma ∑ */}
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 5, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-[10%] text-4xl md:text-6xl font-mono font-bold text-blue-400/20"
        >
          ∑
        </motion.div>

        {/* Floating Square Root √ */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-[15%] text-3xl md:text-4xl font-mono text-emerald-400/20"
        >
          √x²
        </motion.div>

        {/* Floating English letters A, B, C */}
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-[20%] text-2xl md:text-3xl font-serif text-amber-300/20"
        >
          Aa Bb
        </motion.div>

        {/* Floating Atom icon */}
        <motion.div
          animate={{ rotate: 360, y: [0, -15, 0] }}
          transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          className="absolute top-1/5 right-[35%] opacity-20 text-cyan-300"
        >
          <Atom className="w-10 h-10" />
        </motion.div>

        {/* Floating Shield */}
        <motion.div
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-[8%] opacity-20 text-amber-400"
        >
          <Shield className="w-12 h-12" />
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Top Pill / Trust marker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-amber-300 mb-6"
          >
            <Shield className="w-4 h-4 text-amber-400" />
            <span>{t.hero.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
            <span className="text-white/80">Jasorat Maktabi</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-tight mb-4"
          >
            {t.hero.title}
            <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent font-serif italic">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-700/30 flex items-center gap-2 group transition-all duration-200 active:scale-95"
            >
              <span>{t.hero.aboutBtn}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base transition-all duration-200 active:scale-95 flex items-center gap-2"
            >
              <span>{t.hero.contactBtn}</span>
            </a>
          </motion.div>
        </div>

        {/* Slideshow Indicator & Active Slide Caption */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wider font-semibold text-amber-400">
              {heroSlides[currentSlide].tag}
            </span>
            <span>·</span>
            <span className="text-slate-300">
              {language === 'uz'
                ? heroSlides[currentSlide].captionUz
                : language === 'ru'
                ? heroSlides[currentSlide].captionRu
                : heroSlides[currentSlide].captionEn}
            </span>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index
                    ? 'w-8 bg-amber-400'
                    : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 4-Column KPI Stats Strip */}
      <div className="relative z-20 bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Stat 1: Years */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-400 tabular-nums">
                {SCHOOL_STATS.yearsActive}+
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1">
                {t.hero.statsYears}
              </span>
            </div>

            {/* Stat 2: Students */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-blue-400 tabular-nums">
                {SCHOOL_STATS.studentsCount}+
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1">
                {t.hero.statsStudents}
              </span>
            </div>

            {/* Stat 3: Teachers */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400 tabular-nums">
                {SCHOOL_STATS.teachersCount}+
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1">
                {t.hero.statsTeachers}
              </span>
            </div>

            {/* Stat 4: Higher Ed Rate */}
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-yellow-300 tabular-nums">
                {SCHOOL_STATS.higherEdRate}
              </span>
              <span className="text-xs sm:text-sm text-slate-300 mt-1">
                {t.hero.statsHigherEdu}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-[11px] uppercase tracking-wider">{t.hero.scrollDown}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

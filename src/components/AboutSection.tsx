import React from 'react';
import { motion } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { SCHOOL_STATS, IMAGES } from '../data/schoolData';
import { BookOpen, Shield, Heart, Award, CheckCircle, Target, Compass, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useThemeLanguage();

  const coreValues = [
    {
      icon: <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: t.about.val1Title,
      desc: t.about.val1Desc,
      bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/60"
    },
    {
      icon: <Shield className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
      title: t.about.val2Title,
      desc: t.about.val2Desc,
      bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60"
    },
    {
      icon: <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      title: t.about.val3Title,
      desc: t.about.val3Desc,
      bg: "bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60"
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: t.about.val4Title,
      desc: t.about.val4Desc,
      bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#091326] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.about.title}
          </h2>
        </div>

        {/* 2-Column Story: Left Narrative, Right Image Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: History, Mission & Vision (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* History Card */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                {t.about.historyTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                {t.about.historyText1}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.about.historyText2}
              </p>
            </div>

            {/* Mission & Vision Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  {t.about.missionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-4 shadow-sm">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                  {t.about.visionTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Photo Collage (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: School Campus */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 group aspect-[4/3]">
                <img
                  src={IMAGES.heroCampus}
                  alt="Mingbuloq 8-maktab binosi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlapping Secondary Card: Courage Hall */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 hidden sm:block group aspect-[4/3]">
                <img
                  src={IMAGES.jasoratHall}
                  alt="Jasorat shon-sharaf zali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-300/40">
                <Shield className="w-8 h-8 text-slate-950 shrink-0" />
                <div>
                  <div className="font-extrabold text-sm uppercase tracking-wide">
                    Jasorat Maktabi
                  </div>
                  <div className="text-[11px] font-medium text-slate-900">
                    44 yillik boy an'analar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Bento Cards */}
        <div className="mt-12">
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-6 text-center">
            {t.about.valuesTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${val.bg}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-xs mb-4">
                  {val.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-[#0B1F4B] to-slate-950 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-400 tabular-nums">
                {SCHOOL_STATS.studentsCount}
              </div>
              <div className="text-xs text-slate-300 mt-1">{t.about.statStudents}</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-blue-400 tabular-nums">
                {SCHOOL_STATS.teachersCount}
              </div>
              <div className="text-xs text-slate-300 mt-1">{t.about.statTeachers}</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400 tabular-nums">
                {SCHOOL_STATS.graduatesCount}+
              </div>
              <div className="text-xs text-slate-300 mt-1">{t.about.statGraduates}</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-amber-400 tabular-nums">
                {SCHOOL_STATS.awardsCount}+
              </div>
              <div className="text-xs text-slate-300 mt-1">{t.about.statAwards}</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-blue-400 tabular-nums">
                {SCHOOL_STATS.yearsActive}
              </div>
              <div className="text-xs text-slate-300 mt-1">{t.about.statYears}</div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-emerald-400 tabular-nums">
                {SCHOOL_STATS.classroomsCount}
              </div>
              <div className="text-xs text-slate-300 mt-1">{t.about.statClassrooms}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

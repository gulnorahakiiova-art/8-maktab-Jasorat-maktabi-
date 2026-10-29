import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { IMAGES } from '../data/schoolData';
import { Shield, Award, Users, MapPin, Flag, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const JasoratSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const jasoratActivities = [
    {
      month: { uz: "Sentabr - Oktabr", ru: "Сентябрь - Октябрь", en: "September - October" },
      title: {
        uz: "'Shunqorlar' va 'Vatanparvar' harbiy-sport saralash musobaqalari",
        ru: "Военно-спортивные отборочные игры «Шункорлар» и «Ватанпарвар»",
        en: "Qualifying Rounds of 'Shunqorlar' & 'Vatanparvar' Tactical Games"
      },
      desc: {
        uz: "Saf tayyorgarligi, AK-74 to'liq bo'lmagan qismlarga ajratish va yig'ish, kross yugurish va to'siqlar yo'lagi.",
        ru: "Строевая выправка, разборка-сборка автомата, легкоатлетический кросс и полоса препятствий.",
        en: "Ceremonial squad drills, field marksmanship, cross-country run, and obstacle course traversal."
      }
    },
    {
      month: { uz: "Noyabr - Dekabr", ru: "Ноябрь - Декабрь", en: "November - December" },
      title: {
        uz: "Qurolli Kuchlar ofitserlari va faxriylari bilan 'Jasorat darslari'",
        ru: "«Уроки Мужества» с офицерами Вооруженных Сил и ветеранами",
        en: "'Lessons of Courage' with Military Veterans and Commissioned Officers"
      },
      desc: {
        uz: "Vatan himoyachilari kuni arafasida davra suhbatlari, jonli ma'naviyat soatlari va harbiy qasamyod sadoqati.",
        ru: "Круглые столы, открытые дискуссии и воспитание верности воинской присяге.",
        en: "Live interactive forums, inspiring memoirs of service, and moral fortitude seminars."
      }
    },
    {
      month: { uz: "Yanvar - Fevral", ru: "Январь - Февраль", en: "January - February" },
      title: {
        uz: "Favqulodda vaziyatlarda qutqaruv va tezkor tibbiy yordam o'quv-mashg'ulotlari",
        ru: "Тактико-специальные учения по первой помощи и спасению при ЧС",
        en: "Tactical Civil Defense & Emergency Tactical Trauma Care Drills"
      },
      desc: {
        uz: "FVV mutaxassislari bilan hamkorlikda zilzila, yong'in va jarohatlarda birinchi yordam ko'rsatish simulyatsiyalari.",
        ru: "Отработка действий при пожаре, землетрясении и эвакуации совместно со службами МЧС.",
        en: "Coordinated exercises with emergency services covering triage, fire safety, and CPR."
      }
    },
    {
      month: { uz: "Mart - May", ru: "Март - Май", en: "March - May" },
      title: {
        uz: "Tarixiy obidalar va harbiy qismlarga o'quv-tanishuv harbiy ekspeditsiyalari",
        ru: "Военно-исторические экспедиции в музеи боевой славы и воинские части",
        en: "Educational Field Expeditions to Military Academies and Historical Sites"
      },
      desc: {
        uz: "Samarqand, Buxoro va Toshkent shaharlaridagi harbiy muzeylar va qadamjolarga sayohatlar.",
        ru: "Экскурсии по памятникам истории полководцев Востока и посещение гарнизонов.",
        en: "Field journeys to major historical landmarks, national defense institutes, and war memorial halls."
      }
    }
  ];

  return (
    <section id="jasorat" className="py-24 bg-gradient-to-b from-[#070e1e] via-[#0B1F4B] to-[#070e1e] text-white relative overflow-hidden">
      
      {/* Background Decorative Crest Outline */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-5 pointer-events-none">
        <Shield className="w-[600px] h-[600px] text-amber-400" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>{t.jasorat.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-4 text-white">
            {t.jasorat.title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.jasorat.subtitle}
          </p>
        </div>

        {/* Highlighted Banner with Shield Emblem & Quotes */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/80 to-slate-900/90 border border-amber-500/30 shadow-2xl backdrop-blur-md mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 8 cols: Explanation */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Flag className="w-4 h-4" />
                <span>O'zbekiston Respublikasi Jasorat Maktabi dasturi</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Vatanparvarlik, Temir Intizom va Yuksak Ma'naviyat
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.jasorat.desc1}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.jasorat.desc2}
              </p>

              {/* Motto quote */}
              <div className="pt-4 border-t border-white/10 text-amber-300 font-serif italic text-base sm:text-lg">
                {t.jasorat.moto}
              </div>
            </div>

            {/* Right 4 cols: Visual Emblem Showcase */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/40 border border-amber-400/20 text-center">
              <div className="w-24 h-24 mb-4 relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping" />
                <img src="/logo.svg" alt="Jasorat Maktabi Emblemasi" className="w-20 h-20 object-contain relative z-10" />
              </div>
              <span className="font-extrabold text-amber-400 text-lg font-heading">JASORAT MAKTABI</span>
              <span className="text-xs text-slate-300 mt-1">Mingbuloq tumani 8-sonli maktab</span>
              
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Maxsus akkreditatsiya qilingan</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.jasorat.card1Title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.jasorat.card1Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.jasorat.card2Title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.jasorat.card2Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.jasorat.card3Title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.jasorat.card3Desc}</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.jasorat.card4Title}</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.jasorat.card4Desc}</p>
          </div>
        </div>

        {/* Timeline of Jasorat Activities */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-heading text-white text-center mb-10 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            {t.jasorat.timelineTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jasoratActivities.map((act, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-colors relative"
              >
                <div className="inline-block px-3 py-1 rounded-md bg-amber-400/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  {act.month[language]}
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {act.title[language]}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {act.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Gallery Slider Card */}
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[16/10] md:aspect-auto">
              <img
                src={IMAGES.jasoratHall}
                alt="Jasorat shon-sharaf zali"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-8 sm:p-12 bg-slate-900/90 flex flex-col justify-center">
              <div className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                {t.jasorat.galleryTitle}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">
                Jasorat va Shon-Sharaf zali
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Maktabimizning maxsus muzey zali — o'quvchilarimiz qo'lga kiritgan Respublika va viloyat kuboklari, faxriy orden va medallar, shuningdek milliy qahramonlarimizga bag'ishlangan ekspozitsiyani o'z ichiga oladi.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-amber-300">
                  <Award className="w-4 h-4" /> 135+ sovrinlar
                </span>
                <span>·</span>
                <span>Saf tayyorgarligi</span>
                <span>·</span>
                <span>Elektron tir</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

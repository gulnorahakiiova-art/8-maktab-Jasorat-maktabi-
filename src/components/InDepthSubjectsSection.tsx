import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { IMAGES } from '../data/schoolData';
import { BookOpen, Atom, Calculator, Shield, Activity, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const InDepthSubjectsSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const [activeSubject, setActiveSubject] = useState<'english' | 'physics' | 'math' | 'military' | 'pe'>('english');

  const subjectTabs = [
    { id: 'english', label: t.subjects.english, icon: BookOpen, color: 'text-blue-500' },
    { id: 'physics', label: t.subjects.physics, icon: Atom, color: 'text-cyan-500' },
    { id: 'math', label: t.subjects.math, icon: Calculator, color: 'text-amber-500' },
    { id: 'military', label: t.subjects.military, icon: Shield, color: 'text-red-500' },
    { id: 'pe', label: t.subjects.pe, icon: Activity, color: 'text-emerald-500' }
  ];

  const subjectsData = {
    english: {
      name: { uz: "Chuqurlashtirilgan Ingliz tili", ru: "Углубленный английский язык", en: "Advanced English Language Track" },
      hours: { uz: "Haftasiga 6-8 akademik soat", ru: "6-8 академических часов в неделю", en: "6-8 academic hours weekly" },
      image: IMAGES.libraryStudy,
      description: {
        uz: "Oxford va Cambridge xalqaro darsliklari asosida olib boriladi. Dastur CEFR B2/C1 va IELTS 7.0+ darajalarini qo'lga kiritish hamda xalqaro OTM larda erkin ta'lim olishga tayyorlaydi.",
        ru: "Обучение по аутентичным пособиям Oxford и Cambridge. Фокус на получении международных сертификатов IELTS 7.0+ и уровней CEFR B2/C1.",
        en: "Anchored in authentic Oxford & Cambridge curricula. Focuses on CEFR B2/C1, IELTS 7.0+, and academic debate proficiency."
      },
      highlights: {
        uz: [
          "Speaking Club — har shanba xorijlik talabalar bilan erkin suhbat",
          "Academic Writing: Insho va ilmiy maqolalar yozish ko'nikmasi",
          "30 dan ortiq o'quvchi xalqaro til sertifikatiga ega",
          "Interaktiv multimedia sinflari va xalqaro debatlar"
        ],
        ru: [
          "Speaking Club — еженедельная практика живой речи",
          "Academic Writing — написание эссе и аналитических текстов",
          "Более 30 учащихся имеют сертификаты IELTS и CEFR",
          "Интерактивные медиа-классы и дебатный клуб"
        ],
        en: [
          "Speaking Club — interactive weekly dialogues with native speakers",
          "Academic Essay Writing & Rhetorical Presentation drills",
          "30+ students accredited with IELTS 7.0+ and CEFR B2/C1",
          "Modern multimedia language lab and Model UN debates"
        ]
      },
      olympiad: {
        uz: "Viloyat notiqlik tanlovi g'olibi (2024), 12 nafar tuman olimpiadasi sovrindorlari.",
        ru: "Победитель областного турнира ораторов (2024), 12 призеров районного этапа.",
        en: "1st Place Regional English Oratorical Contest (2024), 12 district Olympiad honors."
      },
      teachers: "N. Xasanova (IELTS 8.5), M. Yusupova (CEFR C1)"
    },
    physics: {
      name: { uz: "Chuqurlashtirilgan Fizika va STEM", ru: "Углубленная физика и STEM", en: "Advanced Physics & Applied STEM" },
      hours: { uz: "Haftasiga 5-7 akademik soat", ru: "5-7 академических часов в неделю", en: "5-7 academic hours weekly" },
      image: IMAGES.physicsLab,
      description: {
        uz: "Nazariya va amaliy laboratoriya uyg'unligi. O'quvchilar optika, lazer fizikasi, elektrodinamika va kvant mexanikasi qonuniyatlarini eng zamonaviy stendlarda tadqiq etadilar.",
        ru: "Синтез теории и лабораторных открытий. Исследование волновой оптики, лазерных систем, полупроводников и электродинамики.",
        en: "Harmonizing fundamental theory with empirical lab practice. Covers wave optics, laser systems, circuit dynamics, and mechanics."
      },
      highlights: {
        uz: [
          "Zamonaviy optika va lazer tadqiqot stendlari",
          "STEM robototexnika va avtomatlashtirish to'garagi",
          "PhET virtual laboratoriyalari va kompyuter modellashtirish",
          "Xalqaro olimpiadalar uchun maxsus yechimlar kursi"
        ],
        ru: [
          "Оборудованные стенды для экспериментов по оптике и лазерам",
          "Кружок прикладной робототехники и автоматики",
          "Виртуальные лаборатории PhET и моделирование физических сред",
          "Специальный курс олимпиадного решения задач"
        ],
        en: [
          "Modern optics, laser refraction, and circuitry workstations",
          "STEM robotics and micro-controller automation club",
          "PhET virtual laboratory simulations and analytical modeling",
          "Specialized Olympiad analytical coaching track"
        ]
      },
      olympiad: {
        uz: "Xalqaro yosh fiziklar turniri Kumush medali (2025), Viloyat 1-o'rini.",
        ru: "Серебро Международного физического турнира (2025), 1-е место в области.",
        en: "Silver Medal at International Youth Physics Cup (2025), Regional Champion."
      },
      teachers: "R. Oripov (Oliy toifa), J. Tursunov (STEM rahbari)"
    },
    math: {
      name: { uz: "Chuqurlashtirilgan Matematika", ru: "Углубленная математика и логика", en: "Advanced Mathematics & Discrete Logic" },
      hours: { uz: "Haftasiga 6-8 akademik soat", ru: "6-8 академических часов в неделю", en: "6-8 academic hours weekly" },
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800",
      description: {
        uz: "Al-Xorazmiy merosi asosida: mantiqiy fikrlash, kombinatorika, sonlar nazariyasi va differensial hisob asoslarini chuqur o'rganish dasturi.",
        ru: "Наследие Аль-Хорезми: углубленное освоение высшей алгебры, теории чисел, комбинаторики и нестандартной геометрии.",
        en: "Inspired by the legacy of Al-Khwarizmi: mastery of discrete mathematics, calculus, combinatorics, and geometry."
      },
      highlights: {
        uz: [
          "Al-Xorazmiy olimpiadalari uchun intensiv tayyorgarlik kursi",
          "Mantiqiy topishmoqlar va matematik modellashtirish",
          "OTM kirish imtihonlari test banki bilan ishlash",
          "Respublika matematika olimpiadasida 1-o'rin (2026)"
        ],
        ru: [
          "Интенсивные тренинги к олимпиадам имени Аль-Хорезми",
          "Математическое моделирование и дискретная логика",
          "Проработка специализированного тестового банка для поступления",
          "1-е место на Республиканской олимпиаде (2026)"
        ],
        en: [
          "Accelerated preparation for Al-Khwarizmi Olympiads",
          "Mathematical modeling and proof-based reasoning",
          "Standardized test prep for premier technical universities",
          "National First Place Gold Medalist (2026)"
        ]
      },
      olympiad: {
        uz: "Respublika fan olimpiadasi Oltin medali (2026, Mirzayev Asadbek).",
        ru: "Золотая медаль Республиканской олимпиады (2026, Асадбек Мирзаев).",
        en: "National Gold Medal at State Academic Olympiad (2026)."
      },
      teachers: "D. Sobirova (Oliy toifa), Sh. Qodirova (Olimpiada koordinatori)"
    },
    military: {
      name: { uz: "ChQBT va Jasorat Maktabi dasturi", ru: "НДП и программа Школы Мужества", en: "Initial Military Drill & Cadet Readiness" },
      hours: { uz: "Haftasiga 4 akademik soat + amaliy mashg'ulotlar", ru: "4 часа в неделю + полевые сборы", en: "4 weekly hours + tactical field drills" },
      image: IMAGES.sportsField,
      description: {
        uz: "O'quvchilarda jismoniy chidamlilik, harbiy intizom, quroldan xavfsiz foydalanish va fuqaro muhofazasi bo'yicha mustahkam ko'nikmalarni shakllantirish.",
        ru: "Формирование строевой выправки, выносливости, навыков безопасного обращения с учебным оружием и гражданской обороны.",
        en: "Developing physical endurance, tactical coordination, safe handling of simulated arms, and first responder capabilities."
      },
      highlights: {
        uz: [
          "Elektron nishonga otish tiri va nishonni mo'ljalga olish mashqlari",
          "Harbiy saf yurishlari va komandirlik ko'nikmalari",
          "Favqulodda vaziyatlarda qutqaruv va shoshilinch tibbiy yordam",
          "'Shunqorlar' respublika chempionligi (2025)"
        ],
        ru: [
          "Электронный тир и отработка меткой стрельбы",
          "Строевая подготовка и развитие лидерских качеств",
          "Тактическая медицина и действия в условиях ЧС",
          "Чемпионы республиканских игр «Шункорлар» (2025)"
        ],
        en: [
          "Laser marksmanship simulator and concentration drills",
          "Ceremonial squad precision and youth platoon leadership",
          "Civil defense emergency response and tactical tourniquet application",
          "National Champions at Republican 'Shunqorlar' Games (2025)"
        ]
      },
      olympiad: {
        uz: "'Shunqorlar' Respublika harbiy-sport o'yinlari 1-o'rin kubogi (2025).",
        ru: "Кубок за 1-е место на республиканских играх «Шункорлар» (2025).",
        en: "First Place Trophy at Republican 'Shunqorlar' Military Games (2025)."
      },
      teachers: "Mayor F. Karimov ('Jasorat' medali sohibi)"
    },
    pe: {
      name: { uz: "Jismoniy tarbiya va Milliy Kurash", ru: "Физическая культура и спорт", en: "Physical Fitness & National Wrestling" },
      hours: { uz: "Haftasiga 4 akademik soat + sport seksiyalari", ru: "4 часа в неделю + спортивные секции", en: "4 weekly hours + sports academy clubs" },
      image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&q=80&w=800",
      description: {
        uz: "O'quvchilar salomatligi va jismoniy kamoloti uchun zamonaviy stadion, yugurish yo'lakchalari, basketbol va voleybol maydonlari hamda Kurash gilami xizmat qiladi.",
        ru: "Современный легкоатлетический комплекс, волейбольные и футбольные площадки, борцовский ковер для всесторонней подготовки.",
        en: "Full athletic stadium, tartan track, football turf, volleyball courts, and traditional Kurash wrestling dojo."
      },
      highlights: {
        uz: [
          "Milliy Kurash bo'yicha sport ustaligiga nomzodlar yetishtirish",
          "Futbol, voleybol va basketbol maktab ligalari",
          "Umumjismoniy tayyorgarlik va chidamlilik me'yorlari",
          "Tuman hokimi kubogi sohiblari (2026)"
        ],
        ru: [
          "Подготовка кандидатов в мастера спорта по Курашу",
          "Школьные лиги по футболу, баскетболу и волейболу",
          "Регулярная сдача норм ГТО и спортивного многоборья",
          "Обладатели кубка хокима района (2026)"
        ],
        en: [
          "Coaching Candidate Masters of Sport in Kurash wrestling",
          "School championship leagues in football and volleyball",
          "Comprehensive athletic stamina and obstacle standards",
          "District Governor's Cup Champions (2026)"
        ]
      },
      olympiad: {
        uz: "Respublika yoshlar kurash chempionatida Bronza medal (Yoqubov Diyorbek).",
        ru: "Бронзовая медаль Чемпионата Узбекистана по Курашу среди юношей.",
        en: "National Bronze Medal at Uzbekistan Youth Kurash Championship."
      },
      teachers: "Sh. Polvonov (Kurash bo'yicha sport ustasi)"
    }
  };

  const activeData = subjectsData[activeSubject];

  return (
    <section id="subjects" className="py-24 bg-slate-50 dark:bg-[#070e1e] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <Atom className="w-4 h-4" />
            <span>{t.subjects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.subjects.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.subjects.subtitle}
          </p>
        </div>

        {/* Tab Controls (Functional Segmented Control) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm max-w-3xl mx-auto mb-12">
          {subjectTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubject === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubject(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : tab.color}`} />
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Subject Showcase Bento Card */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left 7 cols: Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                {/* Subject Badge & Hours */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                  <span className="px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-semibold">
                    {activeData.name[language]}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activeData.hours[language]}</span>
                  </span>
                </div>

                {/* Subject Title */}
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                  {activeData.name[language]}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {activeData.description[language]}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-3 mb-8">
                  {activeData.highlights[language].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Metadata: Olympiad & Faculty */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-medium">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{t.subjects.olympiadResults}: {activeData.olympiad[language]}</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{t.subjects.teachersList}:</span> {activeData.teachers}
                </div>
              </div>
            </div>

            {/* Right 5 cols: Media with Overlay */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={activeData.image}
                alt={activeData.name[language]}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-white text-xs">
                  <div className="font-bold text-amber-300 uppercase tracking-wide">
                    8-Maktab chuqurlashtirilgan dasturi
                  </div>
                  <div className="text-slate-200 mt-1">
                    Nazariy bilimlar va amaliy tadqiqotlar uyg'unligi
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

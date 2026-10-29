import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { FAQS, TESTIMONIALS, UNIVERSITY_PARTNERS } from '../data/schoolData';
import { ClipboardList, ChevronDown, CheckCircle, FileText, Download, GraduationCap, Quote, Building2 } from 'lucide-react';

export const AdmissionFAQSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [downloadNotice, setDownloadNotice] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleDownloadApp = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  const docs = [
    t.admission.doc1,
    t.admission.doc2,
    t.admission.doc3,
    t.admission.doc4,
    t.admission.doc5,
  ];

  return (
    <section id="admission" className="py-24 bg-white dark:bg-[#091326] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <ClipboardList className="w-4 h-4" />
            <span>{t.admission.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.admission.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.admission.subtitle}
          </p>
        </div>

        {/* 3 Steps Admission Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
            <span className="text-4xl font-extrabold font-heading text-blue-600/20 dark:text-blue-400/20 absolute top-6 right-6">
              01
            </span>
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold mb-6 shadow-md shadow-blue-600/30">
              1
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
              {t.admission.step1Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.admission.step1Desc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
            <span className="text-4xl font-extrabold font-heading text-amber-500/20 dark:text-amber-400/20 absolute top-6 right-6">
              02
            </span>
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold mb-6 shadow-md shadow-amber-500/30">
              2
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
              {t.admission.step2Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.admission.step2Desc}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
            <span className="text-4xl font-extrabold font-heading text-emerald-600/20 dark:text-emerald-400/20 absolute top-6 right-6">
              03
            </span>
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-6 shadow-md shadow-emerald-600/30">
              3
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2">
              {t.admission.step3Title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.admission.step3Desc}
            </p>
          </div>
        </div>

        {/* 2-Column: Required Documents & FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-start">
          
          {/* Required Docs (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40">
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              {t.admission.requiredDocsTitle}
            </h3>

            <div className="space-y-3 mb-6">
              {docs.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleDownloadApp}
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.admission.downloadApplication}</span>
            </button>

            {downloadNotice && (
              <div className="mt-3 text-center text-xs text-emerald-600 dark:text-emerald-400 font-semibold animate-pulse">
                ✓ Ariza namunasi PDF yuklab olindi!
              </div>
            )}
          </div>

          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-4">
              {t.admission.faqTitle}
            </h3>

            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q[language]}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600 dark:text-amber-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                      {faq.a[language]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Testimonials from Alumni & Parents */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Bitiruvchilar va Ota-onalar e'tirofi
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              8-maktab tarbiyalagan barkamol shaxslar va ularning oilalari fikri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-amber-400/40 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                    "{item.text[language]}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-amber-400/60"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                      {item.role[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* University Partners Marquee Strip */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-[#0B1F4B] to-slate-950 text-white text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            BITIRUVCHILARIMIZ TALABA BO'LGAN NUFUZLI OTM LAR
          </div>
          <p className="text-xs text-slate-300 mb-6 max-w-xl mx-auto">
            Maktabimiz bitiruvchilarining 94% dan ortig'i davlat granti va xalqaro universitetlarga qabul qilinmoqda.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {UNIVERSITY_PARTNERS.map((uni, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white/90 hover:bg-white/20 transition-colors"
              >
                {uni.name} ({uni.short})
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

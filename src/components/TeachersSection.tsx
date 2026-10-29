import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { TEACHERS } from '../data/schoolData';
import { Teacher, TeacherCategory } from '../types';
import { Search, UserCheck, Award, Briefcase, Mail, Phone, X, Sparkles, GraduationCap } from 'lucide-react';

export const TeachersSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [activeTeacher, setActiveTeacher] = useState<Teacher | null>(null);

  // Administration vs Teaching staff
  const adminStaff = TEACHERS.filter(item => item.isAdministration);
  const teachingStaff = TEACHERS.filter(item => !item.isAdministration);

  // Filter staff
  const filteredTeachingStaff = teachingStaff.filter((teacher) => {
    const nameMatch = teacher.fullName[language].toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = selectedCategory === 'all' || teacher.category === selectedCategory;
    const subjectMatch = selectedSubject === 'all' || teacher.subjectCode === selectedSubject;
    return nameMatch && categoryMatch && subjectMatch;
  });

  const getCategoryBadge = (category: TeacherCategory) => {
    switch (category) {
      case 'oliy':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold text-xs border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-500" />
            {t.teachers.filterOliy}
          </span>
        );
      case '1-toifa':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-500/30">
            {t.teachers.filter1}
          </span>
        );
      case '2-toifa':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-xs border border-emerald-500/30">
            {t.teachers.filter2}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium text-xs">
            {t.teachers.filterMutaxassis}
          </span>
        );
    }
  };

  return (
    <section id="teachers" className="py-24 bg-slate-50 dark:bg-[#070e1e] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>{t.teachers.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.teachers.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.teachers.subtitle}
          </p>
        </div>

        {/* Administration Block */}
        <div className="mb-20">
          <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-blue-600 dark:text-amber-400" />
            <span>{t.teachers.adminTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adminStaff.map((admin) => (
              <div
                key={admin.id}
                onClick={() => setActiveTeacher(admin)}
                className="group p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={admin.photo}
                      alt={admin.fullName[language]}
                      className="w-16 h-16 rounded-xl object-cover border-2 border-amber-400/50 shadow-sm group-hover:scale-105 transition-transform"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      {getCategoryBadge(admin.category)}
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                        {admin.fullName[language]}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {admin.role[language]}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-4">
                    {admin.bio[language]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{admin.experienceYears} {t.teachers.expYears}</span>
                  </span>
                  <span className="text-blue-600 dark:text-amber-400 font-semibold group-hover:underline">
                    {t.teachers.viewProfile} →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filter Controls for Teachers */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
              {t.teachers.teachersTitle}
            </h3>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t.teachers.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: t.teachers.filterAll },
              { id: 'oliy', label: t.teachers.filterOliy },
              { id: '1-toifa', label: t.teachers.filter1 },
              { id: '2-toifa', label: t.teachers.filter2 },
              { id: 'mutaxassis', label: t.teachers.filterMutaxassis },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeachingStaff.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => setActiveTeacher(teacher)}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square w-full rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={teacher.photo}
                    alt={teacher.fullName[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="mb-2">
                  {getCategoryBadge(teacher.category)}
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                  {teacher.fullName[language]}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-3">
                  {teacher.subject[language]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{teacher.experienceYears} {t.teachers.expYears}</span>
                <span className="text-blue-600 dark:text-amber-400 font-semibold">
                  {t.teachers.viewProfile} →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Teacher Details Modal */}
        {activeTeacher && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-xl rounded-3xl bg-white dark:bg-[#0B1F4B] p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setActiveTeacher(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label={t.teachers.closeModal}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <img
                  src={activeTeacher.photo}
                  alt={activeTeacher.fullName[language]}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left">
                  <div className="mb-2">{getCategoryBadge(activeTeacher.category)}</div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                    {activeTeacher.fullName[language]}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1">
                    {activeTeacher.role[language]}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {activeTeacher.experienceYears} {t.teachers.expYears}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {t.teachers.biographyLabel}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeTeacher.bio[language]}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  {t.teachers.achievementsLabel}
                </h4>
                <div className="space-y-2">
                  {activeTeacher.achievements[language].map((ach, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contacts if available */}
              {(activeTeacher.email || activeTeacher.phone) && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                  {activeTeacher.email && (
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-500" />
                      <span>{activeTeacher.email}</span>
                    </span>
                  )}
                  {activeTeacher.phone && (
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{activeTeacher.phone}</span>
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

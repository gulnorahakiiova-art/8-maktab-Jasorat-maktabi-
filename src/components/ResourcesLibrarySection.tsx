import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { RESOURCES } from '../data/schoolData';
import { ResourceItem, ResourceType } from '../types';
import { BookOpen, Search, Download, ExternalLink, FileText, Presentation, Video, CheckSquare, Layers, Sparkles } from 'lucide-react';

export const ResourcesLibrarySection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const subjects = [
    { id: 'all', label: t.resources.allSubjects },
    { id: 'english', label: t.subjects.english },
    { id: 'physics', label: t.subjects.physics },
    { id: 'math', label: t.subjects.math },
    { id: 'military', label: t.subjects.military },
    { id: 'pe', label: t.subjects.pe },
  ];

  const types = [
    { id: 'all', label: t.resources.allTypes },
    { id: 'pdf', label: t.resources.typePdf },
    { id: 'worksheet', label: t.resources.typeWorksheet },
    { id: 'presentation', label: t.resources.typePresentation },
    { id: 'test', label: t.resources.typeTest },
    { id: 'video', label: t.resources.typeVideo },
    { id: 'link', label: t.resources.typeLink },
  ];

  const grades = ['all', 7, 8, 9, 10, 11];

  // Filtering
  const filteredResources = RESOURCES.filter((res) => {
    const matchesSearch = res.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.description[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || res.subject === selectedSubject;
    const matchesGrade = selectedGrade === 'all' || res.grade === Number(selectedGrade);
    const matchesType = selectedType === 'all' || res.type === selectedType;
    return matchesSearch && matchesSubject && matchesGrade && matchesType;
  });

  const getTypeIcon = (type: ResourceType) => {
    switch (type) {
      case 'pdf': return <FileText className="w-4 h-4 text-rose-500" />;
      case 'presentation': return <Presentation className="w-4 h-4 text-amber-500" />;
      case 'video': return <Video className="w-4 h-4 text-purple-500" />;
      case 'test': return <CheckSquare className="w-4 h-4 text-emerald-500" />;
      case 'worksheet': return <Layers className="w-4 h-4 text-blue-500" />;
      default: return <ExternalLink className="w-4 h-4 text-cyan-500" />;
    }
  };

  const handleAction = (res: ResourceItem) => {
    if (res.type === 'link') {
      window.open(res.url, '_blank', 'noopener,noreferrer');
      return;
    }
    // Simulate instantaneous educational download
    setDownloadNotice(res.title[language]);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 3500);
  };

  return (
    <section id="resources" className="py-24 bg-white dark:bg-[#091326] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <BookOpen className="w-4 h-4" />
            <span>{t.resources.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.resources.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.resources.subtitle}
          </p>
        </div>

        {/* Search & Multi-Filters Toolbar */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-10 space-y-4">
          
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.resources.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter Pills row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            
            {/* Subject Selector */}
            <div className="flex flex-wrap items-center gap-1.5">
              {subjects.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    selectedSubject === sub.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>

            {/* Grade & Type Selectors */}
            <div className="flex items-center gap-2">
              {/* Grade Dropdown */}
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none"
              >
                <option value="all">{t.resources.allGrades}</option>
                {grades.filter(g => g !== 'all').map((g) => (
                  <option key={String(g)} value={String(g)}>
                    {g}-{t.resources.gradeLabel}
                  </option>
                ))}
              </select>

              {/* Type Dropdown */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none"
              >
                {types.map((ty) => (
                  <option key={ty.id} value={ty.id}>
                    {ty.label}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Download Feedback Notification */}
        {downloadNotice && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm flex items-center justify-between shadow-md">
            <span>✅ <strong>"{downloadNotice}"</strong> yuklab olish jarayoni boshlandi. (O'quv portali)</span>
            <button onClick={() => setDownloadNotice(null)} className="text-emerald-600 hover:text-emerald-900 font-bold ml-4">✕</button>
          </div>
        )}

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {getTypeIcon(res.type)}
                    <span>{res.type.toUpperCase()}</span>
                  </span>

                  <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">
                    {res.grade}-{t.resources.gradeLabel}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-2 leading-snug">
                  {res.title[language]}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {res.description[language]}
                </p>
              </div>

              {/* Action & Size */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{res.fileSize} · {res.downloads} {t.resources.downloadsCount}</span>

                <button
                  onClick={() => handleAction(res)}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {res.type === 'link' ? (
                    <>
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.resources.openBtn}</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.resources.downloadBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400 text-sm">
            {t.resources.emptyText}
          </div>
        )}

      </div>
    </section>
  );
};

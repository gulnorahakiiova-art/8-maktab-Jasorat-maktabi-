import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { NEWS } from '../data/schoolData';
import { NewsItem } from '../types';
import { Newspaper, Calendar, Clock, ArrowRight, Share2, Search, X, Check, Eye } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = [
    { id: 'all', label: t.news.categoryAll },
    { id: 'jasorat', label: "Jasorat" },
    { id: 'olympiad', label: "Olimpiada" },
    { id: 'science', label: "Ilm-fan" },
    { id: 'sports', label: "Sport" },
    { id: 'events', label: "Tadbirlar" },
  ];

  // Filtering
  const filteredNews = NEWS.filter((item) => {
    const matchesSearch = item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.excerpt[language].toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = filteredNews[0] || NEWS[0];
  const listArticles = filteredNews.slice(1);

  const handleShare = (item: NewsItem) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="news" className="py-24 bg-white dark:bg-[#091326] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <Newspaper className="w-4 h-4" />
            <span>{t.news.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.news.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.news.subtitle}
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.news.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Featured Card + Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Featured Large Card (7 cols) */}
          {featuredArticle && (
            <div
              onClick={() => setActiveArticle(featuredArticle)}
              className="lg:col-span-7 rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
                  {t.news.featured}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featuredArticle.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredArticle.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors mb-3">
                    {featuredArticle.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {featuredArticle.excerpt[language]}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-amber-400">
                  <span className="flex items-center gap-1 group-hover:underline">
                    {t.news.readMore} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-slate-400 font-normal">Muallif: {featuredArticle.author}</span>
                </div>
              </div>
            </div>
          )}

          {/* List of Other Articles (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {listArticles.slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveArticle(item)}
                className="group p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all duration-200 cursor-pointer flex gap-4 items-center"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-1">
                    <span>{item.date}</span>
                    <span>·</span>
                    <span className="uppercase text-blue-600 dark:text-blue-400 font-semibold">{item.category}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title[language]}
                  </h4>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                    {item.excerpt[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Modal for News Reading */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-[#0B1F4B] p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto">
              {/* Close */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title[language]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-3">
                <div className="flex items-center gap-2">
                  <span>{activeArticle.date}</span>
                  <span>·</span>
                  <span className="uppercase font-semibold text-blue-600 dark:text-blue-400">{activeArticle.category}</span>
                </div>

                <button
                  onClick={() => handleShare(activeArticle)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer text-xs"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? t.news.copiedLink : t.news.shareArticle}</span>
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white mb-4">
                {activeArticle.title[language]}
              </h3>

              <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 mb-6">
                <p>{activeArticle.content[language]}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                <span>Muallif: {activeArticle.author}</span>
                <span>Mingbuloq 8-maktab matbuot xizmati</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

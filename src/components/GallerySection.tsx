import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { Image, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: t.gallery.all },
    { id: 'jasorat', label: t.gallery.jasorat },
    { id: 'lessons', label: t.gallery.lessons },
    { id: 'sports', label: t.gallery.sports },
    { id: 'events', label: t.gallery.events },
    { id: 'campus', label: t.gallery.campus },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-[#070e1e] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <Image className="w-4 h-4" />
            <span>{t.gallery.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title[language]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {item.category.toUpperCase()}
                </span>
                <h4 className="text-base font-bold font-heading mb-1">
                  {item.title[language]}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {item.caption[language]}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs text-amber-300 font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Kattalashtirib ko'rish</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label={t.gallery.close}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label={t.gallery.prev}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
              aria-label={t.gallery.next}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title[language]}
                className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl mb-4"
                referrerPolicy="no-referrer"
              />
              <div className="text-center text-white px-4">
                <h3 className="text-lg font-bold font-heading text-amber-400 mb-1">
                  {filteredItems[lightboxIndex].title[language]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                  {filteredItems[lightboxIndex].caption[language]}
                </p>
                <div className="text-[11px] text-slate-400 mt-2">
                  {lightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

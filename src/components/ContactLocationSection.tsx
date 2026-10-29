import React, { useState } from 'react';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { SCHOOL_CONTACT } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ExternalLink, MessageSquare, SendHorizontal } from 'lucide-react';

export const ContactLocationSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('sending');
    // Simulate instantaneous delivery to school administration / Telegram bot webhook
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', contact: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#070e1e] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Left Contact Info & Map, Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Cards + Map (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Address */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {t.contact.addressLabel}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                  {SCHOOL_CONTACT.addressUz}
                </p>
              </div>

              {/* Phones */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {t.contact.phoneLabel}
                </h4>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white space-y-0.5">
                  <div>{SCHOOL_CONTACT.phones[0]}</div>
                  <div>{SCHOOL_CONTACT.phones[1]}</div>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {t.contact.emailLabel}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {SCHOOL_CONTACT.email}
                </p>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {t.contact.hoursLabel}
                </h4>
                <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                  {t.contact.hoursValue}
                </p>
              </div>

            </div>

            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md relative bg-slate-200 dark:bg-slate-800">
              <div className="aspect-[16/9] w-full">
                <iframe
                  title="8-maktab xaritasi"
                  src={SCHOOL_CONTACT.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Map location"
                />
              </div>

              {/* Directions Button Overlay */}
              <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">
                  Mingbuloq tumani markazi va Gulbog' hududi
                </div>
                <a
                  href={SCHOOL_CONTACT.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.contact.getDirections}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-amber-400 mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Onlayn murojaat</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
                Taklif, savol yoki farzandingizni o'qishga kiritish bo'yicha ma'muriyatga bevosita xabar qoldiring.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Ism va familiya *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Contact (Phone or Email) */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Telefon raqam yoki elektron pochta *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contact.phonePlaceholder}
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Murojaat mavzusi
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Xabar matni *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={t.contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{t.contact.successMessage}</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs">
                    {t.contact.errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
                >
                  <SendHorizontal className="w-4 h-4" />
                  <span>{formStatus === 'sending' ? t.contact.sending : t.contact.sendButton}</span>
                </button>
              </form>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 text-center text-xs text-slate-400">
              🔒 Sizning ma'lumotlaringiz maxfiyligi kafolatlanadi.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

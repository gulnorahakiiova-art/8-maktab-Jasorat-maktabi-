import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useThemeLanguage } from '../context/ThemeLanguageContext';
import { INTERACTIVE_TOOLS_DATA } from '../data/schoolData';
import { Volume2, CheckCircle2, XCircle, Clock, Sparkles, BookOpen, Lightbulb, Calendar, Send, HelpCircle } from 'lucide-react';

export const InteractiveWidgetsSection: React.FC = () => {
  const { t, language } = useThemeLanguage();

  // English Word Pronunciation (Web Speech API)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const handlePronounce = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      utterance.onstart = () => setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Math Challenge State
  const [userMathAnswer, setUserMathAnswer] = useState('');
  const [mathResult, setMathResult] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showMathExplanation, setShowMathExplanation] = useState(false);

  const checkMathAnswer = () => {
    if (userMathAnswer.trim() === INTERACTIVE_TOOLS_DATA.mathChallenge.correctAnswer) {
      setMathResult('correct');
      setShowMathExplanation(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      setMathResult('wrong');
    }
  };

  // Schedule Viewer State
  const [selectedClass, setSelectedClass] = useState<'5-A' | '9-B' | '11-A'>('9-B');

  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(INTERACTIVE_TOOLS_DATA.upcomingEvent.targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Poll State
  const [pollVoted, setPollVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const pollOptions = [
    { id: 1, label: { uz: "STEM Robototexnika va Sun'iy intellekt", ru: "STEM Робототехника и ИИ", en: "STEM Robotics & AI" }, votes: 45 },
    { id: 2, label: { uz: "IELTS & Speaking Club xalqaro debatlar", ru: "IELTS & Speaking Club дебаты", en: "IELTS & International Speaking Club" }, votes: 38 },
    { id: 3, label: { uz: "Harbiy taktika va merganlik tiri", ru: "Военная тактика и тир", en: "Tactical Defense & Marksmanship" }, votes: 32 },
    { id: 4, label: { uz: "Milliy Kurash va sport gimnastikasi", ru: "Борьба Кураш и гимнастика", en: "National Kurash & Athletic Gymnastics" }, votes: 20 },
  ];

  return (
    <section id="tools" className="py-24 bg-slate-50 dark:bg-[#070e1e] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-amber-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{t.tools.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            {t.tools.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            {t.tools.subtitle}
          </p>
        </div>

        {/* 3 Interactive Daily Widgets: Word of Day, Math Challenge, Physics Fact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Widget 1: English Word of the Day */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  {t.tools.wordOfTheDayTitle}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 font-mono">
                  {INTERACTIVE_TOOLS_DATA.wordOfTheDay.partOfSpeech}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-heading">
                  {INTERACTIVE_TOOLS_DATA.wordOfTheDay.word}
                </h3>
                <button
                  onClick={() => handlePronounce(INTERACTIVE_TOOLS_DATA.wordOfTheDay.word)}
                  className={`p-2 rounded-xl transition-colors cursor-pointer ${
                    isPlayingAudio
                      ? 'bg-amber-400 text-slate-950 scale-105'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white'
                  }`}
                  title={t.tools.listenPronounce}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                {INTERACTIVE_TOOLS_DATA.wordOfTheDay.phonetic}
              </div>

              <div className="text-xs text-slate-700 dark:text-slate-300 mb-3 bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl">
                <span className="font-semibold text-slate-900 dark:text-white">{t.tools.translationLabel}: </span>
                {INTERACTIVE_TOOLS_DATA.wordOfTheDay.translation[language]}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                "{INTERACTIVE_TOOLS_DATA.wordOfTheDay.example}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Oxford Dictionary CEFR B2/C1</span>
              <button
                onClick={() => handlePronounce(INTERACTIVE_TOOLS_DATA.wordOfTheDay.word)}
                className="text-blue-600 dark:text-amber-400 font-semibold hover:underline cursor-pointer"
              >
                {t.tools.listenPronounce}
              </button>
            </div>
          </div>

          {/* Widget 2: Math Challenge of the Day */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  {t.tools.mathChallengeTitle}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 font-bold">
                  Mantiq
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed mb-4">
                {INTERACTIVE_TOOLS_DATA.mathChallenge.question[language]}
              </p>

              {/* Input & Check */}
              <div className="flex items-center gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Javobni kiriting (masalan: 48)"
                  value={userMathAnswer}
                  onChange={(e) => setUserMathAnswer(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  onClick={checkMathAnswer}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs whitespace-nowrap shadow-xs cursor-pointer transition-colors"
                >
                  {t.tools.checkAnswer}
                </button>
              </div>

              {/* Result Feedback */}
              {mathResult === 'correct' && (
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.tools.correctAnswer}</span>
                </div>
              )}

              {mathResult === 'wrong' && (
                <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-300 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs flex items-center gap-2 mb-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{t.tools.wrongAnswer}</span>
                </div>
              )}

              {showMathExplanation && (
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  {INTERACTIVE_TOOLS_DATA.mathChallenge.explanation[language]}
                </p>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Al-Xorazmiy olimpiada to'plami</span>
              <button
                onClick={() => setShowMathExplanation(!showMathExplanation)}
                className="text-amber-600 dark:text-amber-400 font-semibold hover:underline cursor-pointer"
              >
                {showMathExplanation ? "Yashirish" : "Yechimni ko'rish"}
              </button>
            </div>
          </div>

          {/* Widget 3: Physics Fact of the Day */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  {t.tools.physicsFactTitle}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 font-bold">
                  {INTERACTIVE_TOOLS_DATA.physicsFact.tag}
                </span>
              </div>

              <h4 className="text-base font-bold font-heading text-slate-900 dark:text-white mb-3">
                {INTERACTIVE_TOOLS_DATA.physicsFact.title[language]}
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {INTERACTIVE_TOOLS_DATA.physicsFact.fact[language]}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Fizika laboratoriyasi tadqiqotlari</span>
              <span className="text-cyan-500 font-mono">c = 299,792 km/s</span>
            </div>
          </div>

        </div>

        {/* 2-Column Split: Timetable Viewer & Flagship Event Countdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left 7 cols: Lesson Schedule Viewer */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                  {t.tools.scheduleTitle}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  2026/2027 o'quv yili namunaviy dars jadvali
                </p>
              </div>

              {/* Class Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">{t.tools.selectClass}:</span>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-blue-300 focus:outline-none"
                >
                  <option value="5-A">5-A sinf (Umumiy)</option>
                  <option value="9-B">9-B sinf (Fizika-Matematika)</option>
                  <option value="11-A">11-A sinf (Ingliz tili & ChQBT)</option>
                </select>
              </div>
            </div>

            {/* Schedule Table/Grid */}
            <div className="space-y-3">
              {INTERACTIVE_TOOLS_DATA.schedules[selectedClass].map((dayItem, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <span className="font-bold text-xs text-slate-900 dark:text-white w-28 shrink-0">
                    {dayItem.day}:
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {dayItem.lessons.map((lesson, lIdx) => (
                      <span
                        key={lIdx}
                        className="text-[11px] px-2 py-0.5 rounded bg-white dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600/50 text-slate-700 dark:text-slate-200"
                      >
                        {lIdx + 1}. {lesson}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 5 cols: Upcoming Event Countdown & Community Poll */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Event Countdown Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900 via-[#0B1F4B] to-slate-950 text-white shadow-xl border border-blue-800/40">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                <Clock className="w-4 h-4" />
                <span>{t.tools.countdownTitle}</span>
              </div>

              <h4 className="text-xl font-bold font-heading mb-2">
                {INTERACTIVE_TOOLS_DATA.upcomingEvent.title[language]}
              </h4>
              <p className="text-xs text-slate-300 mb-6">
                📍 {INTERACTIVE_TOOLS_DATA.upcomingEvent.location[language]}
              </p>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-2 text-center mb-2">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="text-2xl font-extrabold font-heading text-amber-400 tabular-nums">
                    {timeLeft.days}
                  </div>
                  <div className="text-[10px] text-slate-300">{t.tools.days}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="text-2xl font-extrabold font-heading text-blue-300 tabular-nums">
                    {timeLeft.hours}
                  </div>
                  <div className="text-[10px] text-slate-300">{t.tools.hours}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="text-2xl font-extrabold font-heading text-emerald-300 tabular-nums">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-[10px] text-slate-300">{t.tools.minutes}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                  <div className="text-2xl font-extrabold font-heading text-yellow-300 tabular-nums">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-[10px] text-slate-300">{t.tools.seconds}</div>
                </div>
              </div>
            </div>

            {/* Community Feedback Poll */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-amber-400 mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>{t.tools.pollTitle}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                {t.tools.pollQuestion}
              </h4>

              {/* Options */}
              <div className="space-y-2 mb-4">
                {pollOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(opt.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all duration-150 cursor-pointer flex items-center justify-between ${
                      selectedOption === opt.id
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300'
                        : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{opt.label[language]}</span>
                    {pollVoted && (
                      <span className="font-bold text-blue-600 dark:text-amber-400 tabular-nums">
                        {opt.votes + (selectedOption === opt.id ? 1 : 0)}%
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Vote button or thank you */}
              {!pollVoted ? (
                <button
                  disabled={selectedOption === null}
                  onClick={() => setPollVoted(true)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer ${
                    selectedOption !== null
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {t.tools.pollVote}
                </button>
              ) : (
                <div className="text-center p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                  {t.tools.pollThankYou}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

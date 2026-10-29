/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeLanguageProvider } from './context/ThemeLanguageContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JasoratSection } from './components/JasoratSection';
import { InDepthSubjectsSection } from './components/InDepthSubjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { TeachersSection } from './components/TeachersSection';
import { ResourcesLibrarySection } from './components/ResourcesLibrarySection';
import { InteractiveWidgetsSection } from './components/InteractiveWidgetsSection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionFAQSection } from './components/AdmissionFAQSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <ThemeLanguageProvider>
      {/* Interactive School Preloader */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Main Single Page Application */}
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070e1e] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* Sticky Glass Navbar */}
        <Navbar />

        {/* 5.1 Hero Section */}
        <HeroSection />

        <main className="flex-1">
          {/* 5.2 About School */}
          <AboutSection />

          {/* 5.3 Jasorat Maktabi (Special Highlighted Section) */}
          <JasoratSection />

          {/* 5.4 Achievements (Yutuqlar) */}
          <AchievementsSection />

          {/* 5.5 News (Yangiliklar) */}
          <NewsSection />

          {/* 5.6 Teachers & School Administration */}
          <TeachersSection />

          {/* 5.7 In-Depth Specialized Subjects (English, Physics, Math, Military, PE) */}
          <InDepthSubjectsSection />

          {/* 5.8 Digital Library & Learning Resources */}
          <ResourcesLibrarySection />

          {/* 5.9 Interactive Tools & Online Learning Sandbox */}
          <InteractiveWidgetsSection />

          {/* 5.9.1 School Photo & Video Gallery with Lightbox */}
          <GallerySection />

          {/* 5.9.2 Admission Requirements, FAQs & Testimonials */}
          <AdmissionFAQSection />

          {/* 5.10 Location & Contact Form + Embedded Google Map */}
          <ContactLocationSection />
        </main>

        {/* 5.11 Comprehensive Footer */}
        <Footer />

      </div>
    </ThemeLanguageProvider>
  );
}

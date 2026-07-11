/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ParallaxBackground from './components/ParallaxBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Partners from './components/Partners';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-theme-bg text-theme-text selection:bg-purple-600 selection:text-white transition-colors duration-300">
        {/* Interactive mouse tracking backdrop */}
        <ParallaxBackground />

        {/* Floating glassmorphic header navigation */}
        <Navbar />

        <main className="relative z-10">
          {/* Interactive console style home/hero panel */}
          <Hero />

          {/* Dynamic tabs narrative - Story, Vision, Mission, Community Duty */}
          <OurStory />

          {/* Staggered grid of 3D-tilt service cards */}
          <Services />

          {/* Dynamic views and followers milestones dashboards */}
          <Achievements />

          {/* Infinite marquee partner logo arrays */}
          <Partners />

          {/* Focus styled contact portal with click-to-dial contacts */}
          <ContactSection />
        </main>

        {/* Modern credits footer */}
        <Footer />
      </div>
    </LanguageProvider>
  </ThemeProvider>
  );
}


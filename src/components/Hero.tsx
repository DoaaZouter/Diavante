import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Tv, ArrowLeft } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t, isRtl } = useLanguage();

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Decorative vertical lines representing branding timeline lanes */}
      <div className="absolute inset-y-0 right-1/4 w-[1px] bg-purple-500/5 hidden lg:block animate-pulse" />
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-purple-500/5 hidden lg:block animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center justify-center text-center space-y-8">
        
        {/* Neon Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-5 py-2 rounded-full text-purple-400 text-xs sm:text-sm font-semibold select-none"
        >
          <Sparkles size={14} className="text-purple-400 animate-spin" />
          <span>{t('hero.badge')}</span>
        </motion.div>

        {/* Main Display Headline with real Logo graphic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center space-y-6 w-full"
        >
          <Logo height={180} showSubtitle={true} className="w-full max-w-[420px] sm:max-w-[540px] md:max-w-[660px] drop-shadow-[0_0_20px_rgba(168,85,247,0.2)]" />
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-theme-text tracking-tight leading-tight mt-4 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400">
              {t('hero.title')}
            </span>
          </h1>
        </motion.div>

        {/* Intro Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-theme-muted leading-relaxed max-w-3xl text-center"
        >
          {t('hero.desc')}
        </motion.p>

        {/* Interactive CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto relative group overflow-hidden flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-purple-500/20 cursor-pointer transition-all duration-300 text-sm hover:shadow-purple-500/30 hover:scale-[1.02]"
          >
            <span>{t('hero.ctaServices')}</span>
            <ArrowLeft size={16} className={isRtl ? "" : "rotate-180"} />
            {/* Highlight flare reflex */}
            <div className="absolute inset-0 w-full h-full bg-white/10 -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000" />
          </button>

          <button
            onClick={() => {
              document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-theme-card hover:bg-theme-card-hover border border-theme-border hover:border-purple-500/30 text-theme-muted hover:text-purple-600 dark:hover:text-purple-300 font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 text-sm cursor-pointer hover:scale-[1.02]"
          >
            <span>{t('hero.ctaStory')}</span>
            <Tv size={14} className="text-purple-500 dark:text-purple-400" />
          </button>
        </motion.div>

      </div>

      {/* Slide hint chevron indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40 hover:opacity-80 transition-opacity duration-300 pointer-events-none select-none">
        <span className="text-[10px] text-gray-500 tracking-[0.2em] font-sans font-semibold mb-2">{t('hero.scrollHint')}</span>
        <motion.div 
          className="w-1.5 h-6 rounded-full border border-gray-600 flex justify-center p-0.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-1 bg-purple-500 rounded-full" />
        </motion.div>
      </div>

    </section>
  );
}

import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, lang, isRtl } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-theme-secondary border-t border-theme-border py-12 overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Logo & Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="cursor-pointer select-none group transition-transform duration-300 hover:scale-[1.03]" onClick={scrollToTop}>
              <Logo height={56} showSubtitle={true} />
            </div>
            <p className="mt-3 text-xs text-gray-500 max-w-xs text-center md:text-start leading-relaxed">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Quick Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs text-gray-400">
            <a href="mailto:info@diavante.net" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-1.5 text-start">
              <Mail size={12} className="text-purple-500" />
              <span>info@diavante.net</span>
            </a>
            <span className="hidden sm:inline text-purple-950">|</span>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <a href="tel:00963938540491" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-1.5 text-start" dir="ltr">
                <span>00963 938 540 491</span>
                <Phone size={12} className="text-purple-500" />
              </a>
              <span className="hidden sm:inline text-purple-950">/</span>
              <a href="tel:00963983468108" className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-1.5 text-start" dir="ltr">
                <span>00963 983 468 108</span>
                <Phone size={12} className="text-purple-500" />
              </a>
            </div>
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 bg-theme-card border border-theme-border rounded-full text-purple-400 hover:text-white hover:border-purple-500/35 hover:scale-105 shadow-lg shadow-purple-950/25 transition-all duration-300 cursor-pointer"
              aria-label={isRtl ? "الرجوع إلى الأعلى" : "Back to top"}
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Lower row */}
        <div className="mt-12 pt-8 border-t border-purple-500/5 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
            <span>{t('footer.madeWith')}</span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
            <span>{t('footer.forDiavante')}</span>
          </div>
          <p className="font-sans">
            &copy; {new Date().getFullYear()} DIAVANTE CONTENT HOUSE. {t('footer.rights')}
          </p>
        </div>

      </div>
    </footer>
  );
}

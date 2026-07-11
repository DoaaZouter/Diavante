import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, MessageSquare, Sun, Moon } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { lang, toggleLanguage, t, isRtl } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section on scroll
      const sections = ['home', 'story', 'services', 'achievements', 'partners', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'story', label: t('nav.story') },
    { id: 'services', label: t('nav.services') },
    { id: 'achievements', label: t('nav.achievements') },
    { id: 'partners', label: t('nav.partners') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-theme-bg/85 backdrop-blur-md border-b border-theme-border shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              onClick={() => scrollTo('home')}
              className="cursor-pointer select-none group transition-transform duration-300 hover:scale-[1.03]"
            >
              <Logo height={56} showSubtitle={true} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative font-sans text-sm font-medium transition-colors duration-300 py-1.5 px-1 cursor-pointer ${
                    activeSection === item.id ? 'text-purple-500 dark:text-purple-400' : 'text-theme-muted hover:text-theme-text'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-purple-500 to-violet-600 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Contact quick button, Language & Theme Switcher */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/15 text-purple-500 dark:text-purple-300 hover:text-purple-600 dark:hover:text-white p-2.5 rounded-full cursor-pointer transition-all duration-300"
                title={isDark ? 'الوضع النهاري / Light Mode' : 'الوضع الليلي / Dark Mode'}
              >
                {isDark ? (
                  <Sun size={14} className="text-yellow-500 dark:text-yellow-400 animate-pulse" />
                ) : (
                  <Moon size={14} className="text-violet-600 dark:text-indigo-300" />
                )}
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/15 text-purple-500 dark:text-purple-300 hover:text-purple-600 dark:hover:text-white px-3.5 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-300"
              >
                <Globe size={13} className="text-purple-500 dark:text-purple-400" />
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="relative overflow-hidden group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg shadow-purple-500/10 cursor-pointer transition-all duration-300"
              >
                <span>{t('nav.startProject')}</span>
                <MessageSquare size={13} />
                {/* Glow reflex */}
                <div className="absolute inset-0 w-full h-full bg-white/10 -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center p-2 border border-purple-500/10 bg-purple-500/5 rounded-lg text-purple-500 dark:text-purple-300 hover:text-purple-600 dark:hover:text-white cursor-pointer"
                title={isDark ? 'Light Mode' : 'Dark Mode'}
              >
                {isDark ? (
                  <Sun size={15} className="text-yellow-500 dark:text-yellow-400" />
                ) : (
                  <Moon size={15} className="text-violet-600 dark:text-indigo-300" />
                )}
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 p-2 border border-purple-500/10 bg-purple-500/5 rounded-lg text-purple-500 dark:text-purple-300 hover:text-purple-600 dark:hover:text-white text-xs font-semibold cursor-pointer"
              >
                <Globe size={13} className="text-purple-500 dark:text-purple-400" />
                <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-theme-muted hover:text-theme-text hover:bg-purple-500/10 focus:outline-none transition-colors duration-200"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 inset-x-0 z-40 md:hidden bg-theme-bg/95 border-b border-theme-border backdrop-blur-lg shadow-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col text-start">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer text-start ${
                    activeSection === item.id 
                      ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold' 
                      : 'text-theme-muted hover:bg-purple-500/5 hover:text-theme-text'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-theme-border flex justify-center">
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-purple-500/15 flex items-center justify-center gap-2"
                >
                  <span>{t('nav.contact')}</span>
                  <MessageSquare size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

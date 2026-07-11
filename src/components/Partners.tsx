import React from 'react';
import { motion } from 'motion/react';
import { partnersData } from '../data';
import { Handshake, Award, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Partners() {
  const { t, lang, isRtl } = useLanguage();

  // Container variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="partners" className="relative py-24 sm:py-32 overflow-hidden bg-theme-bg">
      {/* Background ambient light effects */}
      <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-4 text-purple-400 text-xs font-semibold"
          >
            <Handshake size={12} />
            <span>{t('partners.tag')}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl text-theme-text tracking-tight"
          >
            {lang === 'ar' ? (
              <>شركاء <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">النجاح والانتشار</span></>
            ) : (
              <>Partners in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">Success & Reach</span></>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-theme-muted leading-relaxed"
          >
            {t('partners.desc')}
          </motion.p>
        </div>

        {/* Premium Interactive Partners Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {partnersData.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                scale: 1.03,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className="relative h-24 rounded-2xl bg-theme-card/40 backdrop-blur-md border border-theme-border hover:border-purple-500/30 hover:bg-theme-card/85 p-4 flex flex-col items-center justify-center transition-colors duration-300 group cursor-pointer overflow-hidden shadow-lg shadow-purple-950/5"
            >
              {/* Dynamic spotlight hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Modern corner tech accents on hover */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-purple-500/0 group-hover:border-purple-500/30 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-purple-500/0 group-hover:border-purple-500/30 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
              
              {/* Decorative accent icon indicator on hover */}
              <div className="absolute top-2.5 end-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <ArrowUpRight size={12} className="text-purple-400" />
              </div>

              {/* Brand Typography logo */}
              <span className="font-sans font-bold text-base sm:text-lg tracking-wide text-theme-muted group-hover:text-theme-text transition-colors duration-300 text-center select-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-muted to-theme-muted group-hover:from-purple-600 group-hover:to-indigo-600 dark:group-hover:from-white dark:group-hover:to-purple-300">
                  {partner.logoText}
                </span>
              </span>

              {/* Minimalist interactive light underline */}
              <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/60 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative commitment stats badge */}
        <div className="mt-16 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-purple-500/5 border border-purple-500/10 px-6 py-4 rounded-2xl text-purple-400 text-xs sm:text-sm font-semibold text-center max-w-2xl shadow-lg shadow-purple-950/5 hover:border-purple-500/30 transition-colors duration-300"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span>
              {lang === 'ar' 
                ? 'نقوم بدراسة وتحليل كافة الأسواق والمنصات باستمرار لضمان تميز عملائنا وريادتهم.' 
                : 'We continuously analyze all markets and platforms to guarantee our clients distinction and leadership.'}
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

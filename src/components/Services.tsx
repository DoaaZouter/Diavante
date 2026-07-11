import React from 'react';
import { motion } from 'motion/react';
import { servicesData } from '../data';
import ServiceCard from './ServiceCard';
import { Sparkles, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t, lang } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const translatedServices = servicesData.map((service, index) => ({
    ...service,
    title: t(`services.s${index + 1}.title`),
    description: t(`services.s${index + 1}.desc`)
  }));

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-theme-bg">
      {/* Interactive backlighting */}
      <div className="absolute top-[20%] right-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-10 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-4 text-purple-400 text-xs font-semibold"
          >
            <HelpCircle size={12} />
            <span>{t('services.tag')}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl text-theme-text tracking-tight"
          >
            {lang === 'ar' ? (
              <>خدماتنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">الإبداعية المتكاملة</span></>
            ) : (
              <>Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">Integrated Creative</span> Services</>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-theme-muted leading-relaxed"
          >
            {t('services.desc')}
          </motion.p>
        </div>

        {/* Services Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {translatedServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Dynamic Highlight Badge */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-500/5 border border-theme-border px-6 py-4 rounded-2xl"
          >
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm font-semibold text-theme-muted">
              {t('services.qualityBadge')}
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

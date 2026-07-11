import React from 'react';
import { motion } from 'motion/react';
import { achievementsData } from '../data';
import Counter from './Counter';
import { TrendingUp, Award, Tv, Youtube, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Achievements() {
  const { t, lang, isRtl } = useLanguage();

  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return <Tv className="text-blue-400" size={28} />;
      case 2:
        return <Youtube className="text-red-500" size={28} />;
      default:
        return <Users className="text-purple-400" size={28} />;
    }
  };

  const getGradient = (id: number) => {
    switch (id) {
      case 1:
        return 'from-blue-500/20 via-indigo-500/5 to-transparent';
      case 2:
        return 'from-red-500/20 via-pink-500/5 to-transparent';
      default:
        return 'from-purple-500/20 via-violet-500/5 to-transparent';
    }
  };

  const getBorder = (id: number) => {
    switch (id) {
      case 1:
        return 'hover:border-blue-500/30 border-blue-500/5';
      case 2:
        return 'hover:border-red-500/30 border-red-500/5';
      default:
        return 'hover:border-purple-500/30 border-purple-500/5';
    }
  };

  const translatedAchievements = achievementsData.map((item) => {
    const titleTrimmed = item.title.trim();
    let title = item.title;
    if (titleTrimmed === 'ديف') {
      title = `${t('achievements.creator')} ${lang === 'ar' ? 'ديف' : 'Dev'}`;
    } else if (titleTrimmed === 'مؤيد') {
      title = `${t('achievements.creator')} ${lang === 'ar' ? 'مؤيد' : 'Moayad'}`;
    }

    let suffix = item.suffix;
    if (suffix.includes('مليار')) {
      suffix = t('achievements.b');
    } else if (suffix.includes('مليون')) {
      suffix = t('achievements.m');
    }

    let subtext = item.subtext;
    if (subtext.includes('ميتا')) {
      subtext = t('achievements.meta');
    } else if (subtext.includes('يوتيوب')) {
      subtext = t('achievements.youtube');
    } else if (subtext.includes('متابع')) {
      subtext = t('achievements.followers');
    }

    return {
      ...item,
      title,
      suffix,
      subtext
    };
  });

  return (
    <section id="achievements" className="relative py-24 sm:py-32 overflow-hidden bg-theme-secondary/40">
      {/* Background glow radiating up */}
      <div className="absolute bottom-0 inset-x-0 h-[400px] bg-gradient-to-t from-purple-950/5 dark:from-purple-950/15 to-transparent pointer-events-none" />

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
            <TrendingUp size={12} />
            <span>{t('achievements.tag')}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl text-theme-text tracking-tight"
          >
            {lang === 'ar' ? (
              <>تأثير رقمي <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">يتحدث لغة المليارات</span></>
            ) : (
              <>A digital impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">speaking the language of billions</span></>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-theme-muted leading-relaxed"
          >
            {t('achievements.desc')}
          </motion.p>
        </div>

        {/* Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translatedAchievements.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: item.id * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative bg-theme-card/80 dark:bg-[#110e1f]/70 backdrop-blur-md rounded-2xl p-8 border ${getBorder(item.id)} hover:border-purple-500/30 transition-all duration-300 group overflow-hidden flex flex-col justify-between shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-500/10 hover:bg-theme-card-hover/90`}
            >
              {/* Card gradient reflex */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(item.id)} opacity-20 dark:opacity-40 pointer-events-none transition-opacity duration-300`} />

              {/* Header inside card */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 bg-purple-500/5 dark:bg-white/5 rounded-xl border border-purple-500/10 dark:border-white/5 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  {getIcon(item.id)}
                </div>
                <div className="text-start">
                  <span className="text-xs font-semibold text-purple-500 dark:text-purple-400 tracking-wider block uppercase font-sans">
                    {t('achievements.creator')}
                  </span>
                  <h3 className="text-lg font-bold text-theme-text mt-1 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-300">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Number counter */}
              <div className="my-6 relative z-10 text-start">
                <div className="flex items-baseline gap-2 font-sans">
                  <span className="text-5xl sm:text-6xl font-bold text-theme-text tracking-tight drop-shadow-sm transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-300">
                    <Counter value={item.value} decimals={item.id === 1 ? 1 : 0} />
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">
                    {item.suffix}
                  </span>
                </div>
                <p className="text-sm font-semibold text-theme-muted mt-2 group-hover:text-theme-text transition-colors duration-300">
                  {item.subtext}
                </p>
              </div>

              {/* Visual equalizer/waves effect representing digital views */}
              <div className="mt-4 pt-4 border-t border-purple-500/10 dark:border-white/5 flex items-end justify-between h-8 relative z-10">
                <span className="text-[10px] text-theme-sub font-mono">LIVE TRACKING</span>
                <div className="flex items-end gap-[3px] h-full">
                  {[...Array(12)].map((_, i) => {
                    const delay = (i % 4) * 0.15;
                    return (
                      <motion.div
                        key={i}
                        className="w-[3px] bg-purple-500/40 rounded-full"
                        animate={{
                          height: ['20%', '100%', '20%']
                        }}
                        transition={{
                          duration: 1 + delay,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        style={{ height: '30%' }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Glow particle inside card */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-600/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Special highlight box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-900 to-indigo-950 dark:from-purple-900/20 dark:via-violet-950/35 dark:to-indigo-950/20 border border-purple-500/30 rounded-2xl p-8 text-center relative overflow-hidden flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:gap-8 shadow-xl shadow-purple-950/10"
        >
          {/* Subtle neon path */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 via-transparent to-transparent pointer-events-none" />

          <div className="flex-1 relative z-10 text-start">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-400 animate-pulse" />
              <span>
                {lang === 'ar' ? 'مستعد لصناعة التريند القادم؟' : 'Ready to shape the next trend?'}
              </span>
            </h4>
            <p className="text-sm text-purple-100 dark:text-gray-300 mt-2 max-w-2xl leading-relaxed">
              {lang === 'ar' 
                ? 'تلتزم ديفانتي بالعمل بالشراكة التامة خطوة بخطوة لتحويل حضورك أو حضور علامتك التجارية إلى تأثير حقيقي رائج وقوي، وليس مجرد ملاحقة للرائج.'
                : 'Diavante is committed to working with you step-by-step to transform your brand into a real, trending, and powerful impact, not just chasing trends.'
              }
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-purple-950 hover:bg-purple-50 text-sm font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative z-10 shrink-0"
          >
            {lang === 'ar' ? 'دعنا نتحدث عن مشروعك' : "Let's talk about your project"}
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

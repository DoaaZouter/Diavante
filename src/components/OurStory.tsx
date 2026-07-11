import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, Target, Compass, Heart, Award, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function OurStory() {
  const { t, lang, isRtl } = useLanguage();
  const [activeTab, setActiveTab] = useState<'story' | 'vision' | 'mission' | 'how' | 'community' | null>('story');

  const tabs = [
    { id: 'story', label: t('story.tab_story'), icon: Sparkles, data: t('story.tab_story_content') },
    { id: 'vision', label: t('story.tab_vision'), icon: Eye, data: t('story.tab_vision_content') },
    { id: 'mission', label: t('story.tab_mission'), icon: Target, data: t('story.tab_mission_content') },
    { id: 'how', label: t('story.tab_how'), icon: Compass, data: t('story.tab_how_content') },
    { id: 'community', label: t('story.tab_community'), icon: Heart, data: t('story.tab_community_content') }
  ] as const;

  const missionPath = [
    { label: t('story.path1_label'), sub: t('story.path1_sub') },
    { label: t('story.path2_label'), sub: t('story.path2_sub') },
    { label: t('story.path3_label'), sub: t('story.path3_sub') }
  ];

  const toggleTab = (id: 'story' | 'vision' | 'mission' | 'how' | 'community') => {
    setActiveTab(prev => prev === id ? null : id);
  };

  return (
    <section id="story" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative radial lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-4 text-purple-400 text-xs font-semibold"
          >
            <Sparkles size={12} />
            <span>{t('story.tag')}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl text-theme-text tracking-tight"
          >
            {lang === 'ar' ? (
              <>نصنع قصصاً <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">تلامس القلوب</span> وتلهم العالم</>
            ) : (
              <>We craft stories that <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">touch hearts</span> and inspire the world</>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-theme-muted leading-relaxed"
          >
            {t('story.subHeadline')}
          </motion.p>
        </div>

        {/* Dynamic Accordion List */}
        <div className="max-w-4xl mx-auto w-full flex flex-col space-y-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <div 
                key={tab.id}
                className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                  isActive 
                    ? 'bg-theme-card border-purple-500/40 shadow-xl shadow-purple-500/5' 
                    : 'bg-theme-card/60 border-theme-border hover:border-purple-500/40 hover:bg-theme-card-hover hover:shadow-lg'
                } group/accordion`}
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleTab(tab.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 cursor-pointer outline-none transition-colors duration-300 text-start"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-purple-500/10 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 group-hover/accordion:bg-purple-600 group-hover/accordion:text-white'
                    }`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="font-sans font-bold text-lg sm:text-xl block text-theme-text transition-colors duration-300 group-hover/accordion:text-purple-600 dark:group-hover/accordion:text-purple-300">
                        {tab.label}
                      </span>
                    </div>
                  </div>
                  
                  {/* Chevron Indicator with smooth rotation */}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-500 dark:text-purple-400 p-1 group-hover/accordion:text-purple-600 dark:group-hover/accordion:text-purple-300"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Accordion Content Panel */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-purple-500/5 text-start">
                    <p className="text-base text-theme-muted leading-relaxed whitespace-pre-line">
                      {tab.data}
                    </p>

                    {/* Special progress path for Mission tab */}
                    {tab.id === 'mission' && (
                      <div className="mt-6 pt-6 border-t border-purple-500/10">
                        <p className="text-xs font-semibold text-purple-400 mb-4 text-start">
                          {t('story.pathTag')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {missionPath.map((step, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="bg-theme-card-hover border border-theme-border p-3.5 rounded-xl text-center flex flex-col items-center justify-center gap-1 hover:border-purple-500/30 transition-colors duration-300"
                            >
                              <span className="text-theme-text font-sans text-xs sm:text-sm font-bold">{step.label}</span>
                              <span className="text-[9px] text-purple-400 tracking-wider font-mono">{step.sub}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Special interactive badge */}
                    <div className="mt-6 pt-4 border-t border-purple-500/5 flex items-center gap-2 text-purple-400/60 text-xs">
                      <Award size={14} className="animate-pulse" />
                      <span className="font-sans font-medium">
                        {lang === 'ar' ? 'ديـفـانـتـي - صناعة المحتوى الذكي' : 'Diavante - Smart Content House'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

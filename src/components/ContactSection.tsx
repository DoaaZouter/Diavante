import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t, lang, isRtl } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    t("services.s1.title"),
    t("services.s2.title"),
    t("services.s3.title"),
    t("services.s4.title"),
    t("services.s5.title"),
    t("services.s6.title"),
    t("services.s7.title"),
    t("services.s8.title"),
    t("services.s9.title"),
    t("services.s10.title")
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow radiating up */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-4 text-purple-400 text-xs font-semibold"
          >
            <MessageSquare size={12} />
            <span>{t('contact.tag')}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-bold text-3xl sm:text-4xl text-theme-text tracking-tight"
          >
            {lang === 'ar' ? (
              <>دعنا نصنع <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">نجاحك القادم معاً</span></>
            ) : (
              <>Let's create your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">next success together</span></>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-theme-muted leading-relaxed"
          >
            {t('contact.desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Card (Left/Right depending on RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-theme-card border border-theme-border rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl text-start font-sans"
          >
            <div>
              <h3 className="font-sans font-bold text-2xl text-theme-text mb-2">
                {t('contact.info')}
              </h3>
              <p className="text-sm text-theme-muted leading-relaxed mb-8">
                {t('contact.infoDesc')}
              </p>

              {/* Direct Communication Items */}
              <div className="space-y-6">
                
                {/* Email Item */}
                <motion.a
                  href="mailto:info@diavante.net"
                  whileHover={{ x: isRtl ? -4 : 4 }}
                  className="flex items-center gap-4 group cursor-pointer text-start"
                >
                  <div className="p-3.5 bg-purple-500/5 group-hover:bg-purple-600 group-hover:text-white border border-purple-500/10 group-hover:border-purple-500/0 text-purple-400 rounded-xl transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 block">{t('contact.email')}</span>
                    <span className="text-base font-sans font-semibold text-theme-text group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors duration-300">
                      info@diavante.net
                    </span>
                  </div>
                </motion.a>

                {/* Phone Item 1 */}
                <motion.a
                  href="tel:00963938540491"
                  whileHover={{ x: isRtl ? -4 : 4 }}
                  className="flex items-center gap-4 group cursor-pointer text-start"
                >
                  <div className="p-3.5 bg-purple-500/5 group-hover:bg-purple-600 group-hover:text-white border border-purple-500/10 group-hover:border-purple-500/0 text-purple-400 rounded-xl transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 block">{t('contact.phone1')}</span>
                    <span className="text-base font-sans font-semibold text-theme-text group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors duration-300" dir="ltr">
                      00963 938 540 491
                    </span>
                  </div>
                </motion.a>

                {/* Phone Item 2 */}
                <motion.a
                  href="tel:00963983468108"
                  whileHover={{ x: isRtl ? -4 : 4 }}
                  className="flex items-center gap-4 group cursor-pointer text-start"
                >
                  <div className="p-3.5 bg-purple-500/5 group-hover:bg-purple-600 group-hover:text-white border border-purple-500/10 group-hover:border-purple-500/0 text-purple-400 rounded-xl transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 block">{t('contact.phone2')}</span>
                    <span className="text-base font-sans font-semibold text-theme-text group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors duration-300" dir="ltr">
                      00963 983 468 108
                    </span>
                  </div>
                </motion.a>

                {/* Location Item */}
                <div className="flex items-center gap-4 text-start">
                  <div className="p-3.5 bg-purple-500/5 border border-purple-500/10 text-purple-400 rounded-xl">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 block">{t('contact.location')}</span>
                    <span className="text-base font-sans font-semibold text-theme-text">
                      {t('contact.syria')}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Glowing note */}
            <div className="mt-8 pt-6 border-t border-purple-500/10 text-xs font-medium text-purple-400/80 text-start">
              {t('contact.timingNote')}
            </div>
          </motion.div>

          {/* Interactive Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-theme-card border border-theme-border rounded-2xl p-8 sm:p-10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6 text-start">
              
              {/* Row: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-theme-muted mb-2">
                    {t('contact.fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-theme-input border border-theme-border hover:border-purple-500/35 hover:bg-theme-card-hover/40 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 rounded-xl px-4 py-3 text-theme-text placeholder-theme-sub outline-none transition-all duration-300 font-sans text-start"
                    placeholder={t('contact.placeholderName')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-theme-muted mb-2">
                    {t('contact.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-theme-input border border-theme-border hover:border-purple-500/35 hover:bg-theme-card-hover/40 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 rounded-xl px-4 py-3 text-theme-text placeholder-theme-sub outline-none transition-all duration-300 font-sans text-start"
                    placeholder="username@example.com"
                  />
                </div>
              </div>

              {/* Service Selection dropdown */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-theme-muted mb-2">
                  {t('contact.reqService')}
                </label>
                <select
                  id="service"
                  value={formData.service || services[0]}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-theme-input border border-theme-border hover:border-purple-500/35 hover:bg-theme-card-hover/40 focus:border-purple-500/50 rounded-xl px-4 py-3 text-theme-text outline-none transition-all duration-300 font-sans cursor-pointer appearance-none text-start"
                >
                  {services.map((service, idx) => (
                    <option key={idx} value={service} className="bg-theme-dropdown text-theme-text py-2 text-start">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-theme-muted mb-2">
                  {t('contact.messageDetails')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-theme-input border border-theme-border hover:border-purple-500/35 hover:bg-theme-card-hover/40 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 rounded-xl px-4 py-3 text-theme-text placeholder-theme-sub outline-none transition-all duration-300 font-sans resize-none text-start"
                  placeholder={t('contact.placeholderMessage')}
                />
              </div>

              {/* Action Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-500 hover:to-violet-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-purple-500/10 transition-all duration-300 cursor-pointer ${
                    (isSubmitting || isSubmitted) ? 'opacity-70 pointer-events-none' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span>{t('contact.sending')}</span>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mx-2" />
                    </>
                  ) : isSubmitted ? (
                    <>
                      <span>{t('contact.sent')}</span>
                      <CheckCircle size={18} className="text-emerald-400 mx-2" />
                    </>
                  ) : (
                    <>
                      <span>{t('contact.sendBtn')}</span>
                      <Send size={16} className="mx-2" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

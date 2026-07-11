import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.story': 'قصتنا',
    'nav.services': 'خدماتنا',
    'nav.achievements': 'إنجازاتنا',
    'nav.partners': 'شركاء النجاح',
    'nav.contact': 'تواصل معنا',
    'nav.startProject': 'ابدأ مشروعك',

    // Hero
    'hero.badge': 'نحن لا نقدم خدمات تقليدية... بل نصنع التأثير',
    'hero.title': 'صُنّاع التأثير الرقمي',
    'hero.desc': 'خبرة تزيد عن 10 سنوات في فك شفرة الانتشار الرقمي. نصنع محتوىً أصلياً لعلامتك التجارية يحولكم إلى قادة رأي ومؤثرين في مجالاتكم، ونحقق أهدافكم التسويقية بأرقام ونجاحات ملموسة.',
    'hero.ctaServices': 'اكتشف خدماتنا',
    'hero.ctaStory': 'اقرأ قصتنا',
    'hero.scrollHint': 'SCROLL TO DISCOVER',

    // OurStory
    'story.tag': 'من نحن',
    'story.headline': 'نصنع قصصاً تلامس القلوب وتلهم العالم',
    'story.subHeadline': 'في ديفانتي، نحن لا نصنع أرقاماً جافة، بل نصنع محتوىً ينبض بالشغف ويصنع تأثيراً رقمياً مستداماً.',
    'story.pathTag': 'مسار انتشارنا الرقمي:',
    'story.path1_label': 'من سوريا',
    'story.path1_sub': 'FROM SYRIA',
    'story.path2_label': 'إلى الوطن العربي',
    'story.path2_sub': 'TO ARAB WORLD',
    'story.path3_label': 'إلى العالم',
    'story.path3_sub': 'TO THE WORLD',
    'story.tab_story': 'قصتنا',
    'story.tab_story_content': 'تأسست شركتنا من اندماج خبرة صنّاع المحتوى محمد المصري (ديف) ومؤيد الحافظ الممتدة لأكثر من 10 سنوات في صناعة المحتوى، مع فكر إبداعي لشباب شغوفين بفك شفرة الانتشار الرقمي. نحن لا نقدم خدمات تقليدية، بل نصنع محتوىً أصلياً لعلامتنا ولعملائنا يحوّلهم إلى قادة رأي ومؤثرين في مجالاتهم؛ هدفنا صياغة التأثير الحقيقي الذي يصنع "التريند" ويحقق الأهداف التسويقية بأرقام ونجاحات ملموسة.',
    'story.tab_vision': 'رؤيتنا',
    'story.tab_vision_content': 'أن نكون المرجعية الأولى والقوة الإبداعية الأبرز في صناعة المحتوى الرقمي في سوريا، من خلال تمكين العلامات التجارية والمبدعين من قيادة المشهد، وتحويل حضورهم الرقمي إلى تأثير حقيقي ومستدام يصنع الرائج ولا يكتفي بمتابعته.',
    'story.tab_mission': 'رسالتنا',
    'story.tab_mission_content': 'رسالتنا هي دمج الخبرة مع روح الشباب المبدع لصناعة محتوى ذكي ومؤثر؛ نسعى لرفع جودة المحتوى في سوريا لينافس المحتوى العربي والعالمي، مع التركيز على هوية واضحة ولمسة مميزة تعكس رؤية شركتنا وأسلوبنا الخاص.',
    'story.tab_how': 'كيف نعمل؟',
    'story.tab_how_content': 'بينما يرى الآخرون صناعة المحتوى كـ "بزنس" وأرقام جافة، نراه نحن كشغف وحياة؛ تميزنا يبدأ من كوننا صناع محتوى حقيقيين في الميدان، دمجنا خبرتنا الطويلة بروح شبابنا المبدع لنمنحك أسرار الانتشار الحقيقي. نحن لا نبيعك خططاً تسويقية ونمضي، بل نلتزم بالشراكة معك ومتابعة التنفيذ خطوة بخطوة لتحقيق أهدافك التسويقية بأرقام ملموسة؛ سواء كانت لبناء الوعي بالعلامة التجارية، أو جذب العملاء المحتملين، أو زيادة المبيعات.',
    'story.tab_community': 'الواجب المجتمعي',
    'story.tab_community_content': 'نهدف إلى دعم وتمكين صناع المحتوى والمؤثرين من خلال تقديم خدمات لوجستية تساعدهم على إنتاج محتوى مميز وتمكين الشركات من تطوير محتواها الإعلامي والتسويقي، إضافة إلى تدريب وتأهيل الراغبين بدخول مجال صناعة المحتوى، بما يسهم في رفع جودة المحتوى العربي وتعزيز تأثيره.',

    // Services
    'services.tag': 'ماذا نقدم لعملائنا',
    'services.headline': 'خدماتنا الإبداعية المتكاملة',
    'services.desc': 'نحن هنا لنرافقك في كافة مراحل حضورك الرقمي؛ من التخطيط الاستراتيجي إلى صناعة المحتوى المتكامل وإطلاق الحملات المؤثرة.',
    'services.qualityBadge': 'جميع خدماتنا يتم تقديمها وتصميمها وتنفيذها بأعلى جودة لمنافسة المحتوى العالمي',
    
    'services.s1.title': 'الدراسة والتحليل التسويقي',
    'services.s1.desc': 'تحليل السوق بدقة لتحديد نقاط القوة والضعف والفرص المتاحة، مع دراسة تفصيلية لسلوك واحتياجات الفئة المستهدفة.',
    'services.s2.title': 'التخطيط والاستراتيجية',
    'services.s2.desc': 'بناء خطة تسويقية متكاملة تضمن للشركة تواصلاً رقمياً فعالاً، وحضوراً قوياً ومستداماً على كافة المنصات المناسبة.',
    'services.s3.title': 'المونتاج والـ AI',
    'services.s3.desc': 'يتولى إنتاج الفيديو أشخاص محترفون يستخدمون أحدث الأدوات والتوجهات العالمية، لتقديم محتوى مرئي ديناميكي وجاذب للمشاهد.',
    'services.s4.title': 'التصميم والموشن جرافيك',
    'services.s4.desc': 'نعمل على ابتكار مواد فنية وتصاميم إبداعية فريدة تعزز الهوية الرقمية للشركة وتترك انطباعاً قوياً لدى الجمهور المستهدف.',
    'services.s5.title': 'التصوير الاحترافي',
    'services.s5.desc': 'نضم فريقاً كبيراً من المصورين المختصين بخبرات عالية وتجارب هامة محلياً وعالمياً، لتوثيق أعمالكم بأعلى معايير الدقة البصرية.',
    'services.s6.title': 'الحملات الإعلانية المتكاملة',
    'services.s6.desc': 'نخطط وننفذ حملات إعلانية ممولة رقمية، طرقية، ومتلفزة لضمان أعلى عوائد استثمارية.',
    'services.s7.title': 'إدارة المنصات وتحليل الأداء',
    'services.s7.desc': 'نتولى إدارة حسابات التواصل الاجتماعي يومياً مع رصد دقيق للتفاعل وتحليل الأداء لضمان التطوير المستمر.',
    'services.s8.title': 'صناعة وكتابة المحتوى',
    'services.s8.desc': 'نصيغ محتوىً إبداعياً يترجم قيم الشركة ورؤيتها ويخاطب الجمهور المستهدف مباشرة لتحديد الأهداف التسويقية المطلوبة.',
    'services.s9.title': 'التغطية اللوجستية للمعارض',
    'services.s9.desc': 'نضمن تغطية شاملة للمعارض والفعاليات الخاصة بالشركة، من تصميم وتنفيذ مع تقديم الدعم اللوجستي والفني الكامل لتمثيل الشركة بأفضل صورة.',
    'services.s10.title': 'التسويق عبر المؤثرين',
    'services.s10.desc': 'ننسق شراكات استراتيجية مع مؤثرين وصناع محتوى بارزين يمثلون الشركة بشكل ملائم ويدعمون انتشارها أمام الجمهور.',

    // Achievements
    'achievements.tag': 'إنجازاتنا بالأرقام',
    'achievements.headline': 'تأثير رقمي يتحدث لغة المليارات',
    'achievements.desc': 'نحن لا نطلق مجرد حملات، بل نحقق أرقاماً ونجاحات ملموسة تصنع التأثير الحقيقي وتتصدر اتجاهات البحث الرقمي.',
    'achievements.creator': 'صانع المحتوى',
    'achievements.meta': 'مشاهدة على منصات ميتا (Meta)',
    'achievements.youtube': 'مشاهدة على يوتيوب (YouTube)',
    'achievements.followers': 'متابع في أقل من سنة',
    'achievements.b': 'مليار+',
    'achievements.m': 'مليون+',

    // Partners
    'partners.tag': 'علامات تجارية نعتز بها',
    'partners.headline': 'شركاء النجاح والانتشار',
    'partners.desc': 'سعدنا بالعمل والتعاون الاستراتيجي مع كبرى العلامات التجارية المحلية والعالمية لتحقيق أهدافها وصناعة هويتها الرقمية.',

    // Contact
    'contact.tag': 'ابدأ الآن',
    'contact.headline': 'دعنا نصنع نجاحك القادم معاً',
    'contact.desc': 'تواصل معنا اليوم لبدء التخطيط لحملتك القادمة أو لبناء حضورك الرقمي وصناعة التأثير الحقيقي.',
    'contact.info': 'معلومات التواصل',
    'contact.infoDesc': 'نحن متاحون للرد على استفساراتكم طوال أيام الأسبوع؛ لا تتردد في الاتصال بنا أو مراسلتنا مباشرة.',
    'contact.email': 'بريدنا الإلكتروني',
    'contact.phone1': 'اتصل بنا (رقم رئيسي)',
    'contact.phone2': 'اتصل بنا (رقم ثانٍ)',
    'contact.location': 'مقرنا الرئيسي',
    'contact.syria': 'الجمهورية العربية السورية، دمشق',
    'contact.timingNote': '* سنقوم بالتواصل معك في غضون 24 ساعة من استلام طلبك.',
    'contact.fullName': 'الاسم الكامل',
    'contact.placeholderName': 'مثال: محمد السوري',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.reqService': 'الخدمة المطلوبة',
    'contact.messageDetails': 'تفاصيل المشروع / الرسالة',
    'contact.placeholderMessage': 'اكتب لنا تفاصيل مشروعك أو فكرتك الإبداعية هنا...',
    'contact.sending': 'جارٍ إرسال طلبك...',
    'contact.sent': 'تم إرسال طلبك بنجاح!',
    'contact.sendBtn': 'أرسل طلبك الإبداعي',

    // Footer
    'footer.desc': 'نفك شفرة الانتشار الرقمي ونصنع التأثير الحقيقي الذي يدوم ويصنع التريند.',
    'footer.copyright': 'جميع الحقوق محفوظة لشركة ديفانتي ©'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.story': 'Our Story',
    'nav.services': 'Services',
    'nav.achievements': 'Achievements',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact Us',
    'nav.startProject': 'Start Project',

    // Hero
    'hero.badge': "We don't offer conventional services... we create impact",
    'hero.title': 'Digital Impact Makers',
    'hero.desc': 'Over 10 years of experience in decoding digital virality. We create original content for your brand that transforms you into opinion leaders and influencers in your fields, achieving your marketing goals with tangible numbers and successes.',
    'hero.ctaServices': 'Discover Services',
    'hero.ctaStory': 'Read Our Story',
    'hero.scrollHint': 'SCROLL TO DISCOVER',

    // OurStory
    'story.tag': 'Who We Are',
    'story.headline': 'We craft stories that touch hearts and inspire the world',
    'story.subHeadline': "At Diavante, we don't just generate cold numbers; we craft content that beats with passion and shapes sustainable digital influence.",
    'story.pathTag': 'Our digital footprint path:',
    'story.path1_label': 'From Syria',
    'story.path1_sub': 'FROM SYRIA',
    'story.path2_label': 'To the Arab World',
    'story.path2_sub': 'TO ARAB WORLD',
    'story.path3_label': 'To the World',
    'story.path3_sub': 'TO THE WORLD',
    'story.tab_story': 'Our Story',
    'story.tab_story_content': 'Our company was established from the merger of content creators Mohammad Al-Masri (Dev) and Moayad Al-Hafez, with over 10 years of experience in content creation combined with the creative thinking of passionate youth to decode digital virality. We do not offer conventional services; instead, we craft original content for our brand and our clients that transforms them into opinion leaders and influencers in their fields. Our goal is to shape real impact that sets trends and achieves marketing goals with tangible numbers and successes.',
    'story.tab_vision': 'Our Vision',
    'story.tab_vision_content': 'To be the premier reference and most prominent creative force in digital content creation in Syria, by empowering brands and creators to lead the scene, converting their digital presence into real and sustainable impact that shapes trends rather than merely following them.',
    'story.tab_mission': 'Our Mission',
    'story.tab_mission_content': "Our mission is to merge experience with the spirit of creative youth to craft smart, impactful content. We strive to elevate content quality in Syria to compete both regionally and globally, maintaining a clear identity and a unique touch that reflects our company's vision and style.",
    'story.tab_how': 'How We Work',
    'story.tab_how_content': "While others view content creation as merely business and dry numbers, we see it as a passion and a way of life. Our distinction begins from being real content creators on the ground, combining our long-standing expertise with our creative youth's spirit to reveal the secrets of genuine virality. We don't just sell you marketing plans and leave; we commit to a partnership with you, following up on execution step-by-step to achieve your marketing goals with tangible numbers—whether building brand awareness, capturing potential leads, or boosting sales.",
    'story.tab_community': 'Community Duty',
    'story.tab_community_content': 'We aim to support and empower content creators and influencers by providing logistical services that help them produce distinctive content, and enabling businesses to develop their media and marketing content, alongside training and qualifying those wishing to enter the content creation field, contributing to elevating Arabic content quality and enhancing its impact.',

    // Services
    'services.tag': 'What We Offer',
    'services.headline': 'Our Integrated Creative Services',
    'services.desc': 'We are here to accompany you through all stages of your digital presence. From strategic planning to integrated content creation and launching impactful campaigns.',
    'services.qualityBadge': 'All our services are provided, designed, and executed with the highest quality to compete with global content',
    
    'services.s1.title': 'Marketing Study & Analysis',
    'services.s1.desc': 'Accurately analyzing the market to determine strengths, weaknesses, and opportunities, with a detailed study of target audience behavior and needs.',
    'services.s2.title': 'Planning & Strategy',
    'services.s2.desc': 'Building an integrated marketing plan that guarantees effective digital communication and a strong, sustainable presence on all appropriate platforms.',
    'services.s3.title': 'Editing & AI',
    'services.s3.desc': 'Video production is handled by professionals using the latest tools and global trends to deliver dynamic, engaging visual content.',
    'services.s4.title': 'Design & Motion Graphics',
    'services.s4.desc': "We innovate unique artistic assets and creative designs that strengthen the company's digital identity and leave a strong impression.",
    'services.s5.title': 'Professional Photography',
    'services.s5.desc': 'We house a large team of specialized photographers with rich local and global experiences to document your work to the highest visual standards.',
    'services.s6.title': 'Integrated Ad Campaigns',
    'services.s6.desc': 'We plan and execute sponsored digital, outdoor, and television advertising campaigns to guarantee the highest return on investment.',
    'services.s7.title': 'Platform Management & Performance',
    'services.s7.desc': 'We manage social media accounts daily, with close monitoring of engagement and performance analysis to ensure continuous growth.',
    'services.s8.title': 'Content Creation & Copywriting',
    'services.s8.desc': 'We craft creative copy that translates company values and vision, addressing the target audience directly to meet key marketing goals.',
    'services.s9.title': 'Logistical Coverage for Exhibitions',
    'services.s9.desc': 'We ensure comprehensive coverage of company exhibitions and events, providing complete design, execution, technical, and logistical support.',
    'services.s10.title': 'Influencer Marketing',
    'services.s10.desc': 'We coordinate strategic partnerships with prominent influencers and content creators who represent the company appropriately and support its reach before the audience.',

    // Achievements
    'achievements.tag': 'Our Achievements in Numbers',
    'achievements.headline': 'A Digital Impact That Speaks Billions',
    'achievements.desc': "We don't just launch campaigns; we deliver tangible metrics and success stories that drive real impact and lead digital trends.",
    'achievements.creator': 'Content Creator',
    'achievements.meta': 'views on Meta platforms',
    'achievements.youtube': 'views on YouTube',
    'achievements.followers': 'followers in less than a year',
    'achievements.b': 'Billion+',
    'achievements.m': 'Million+',

    // Partners
    'partners.tag': 'Brands We Cherish',
    'partners.headline': 'Success & Reach Partners',
    'partners.desc': 'We are pleased to strategically collaborate with major local and global brands to achieve their goals and craft their digital identities.',

    // Contact
    'contact.tag': 'Start Now',
    'contact.headline': "Let's Create Your Next Success Together",
    'contact.desc': 'Contact us today to start planning your next campaign, building your digital presence, and creating real impact.',
    'contact.info': 'Contact Info',
    'contact.infoDesc': 'We are available to answer your inquiries throughout the week. Do not hesitate to contact us or message us directly.',
    'contact.email': 'Our Email',
    'contact.phone1': 'Call Us (Primary)',
    'contact.phone2': 'Call Us (Secondary)',
    'contact.location': 'Headquarters',
    'contact.syria': 'Syrian Arab Republic, Damascus',
    'contact.timingNote': '* We will contact you within 24 hours of receiving your request.',
    'contact.fullName': 'Full Name',
    'contact.placeholderName': 'e.g., Mohammad Al-Souri',
    'contact.emailLabel': 'Email Address',
    'contact.reqService': 'Requested Service',
    'contact.messageDetails': 'Project Details / Message',
    'contact.placeholderMessage': 'Write your project details or creative ideas here...',
    'contact.sending': 'Sending request...',
    'contact.sent': 'Request sent successfully!',
    'contact.sendBtn': 'Send Your Creative Request',

    // Footer
    'footer.desc': 'We decode digital virality and create a real, lasting impact that sets trends.',
    'footer.copyright': 'All rights reserved to Diavante ©'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('diavante_lang');
    return (saved as Language) || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('diavante_lang', lang);
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  const isRtl = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

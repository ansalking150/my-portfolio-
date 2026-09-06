import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type Lang = 'en' | 'ar';

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

// ---------------------------------------------------------------------------
// Translation strings
// ---------------------------------------------------------------------------
const translations: Record<Lang, Record<string, string>> = {
  en: {
    // ── Meta ─────────────────────────────────────────────────────────────────
    'meta-title': 'Anas Ahmed Hasan - Frontend Developer & UI Engineer',
    'meta-description':
      'Professional frontend developer specializing in React, TypeScript, and modern web technologies. Creating beautiful, high-performance web applications.',

    // ── Language toggle ───────────────────────────────────────────────────────
    'lang-toggle': 'عربي',

    // ── Navbar ────────────────────────────────────────────────────────────────
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-services': 'Services',
    'nav-contact': 'Contact',
    'nav-cta': 'Get In Touch',
    'nav-role': 'Frontend Developer',
    'nav-open-menu': 'Open menu',
    'nav-close-menu': 'Close menu',

    // ── Hero ──────────────────────────────────────────────────────────────────
    'hero-badge': 'Welcome to my portfolio',
    'hero-role': 'Frontend Developer',
    'hero-role-sep': '/',
    'hero-role2': 'UI Engineer',
    'hero-subtitle':
      'Crafting pixel-perfect, high-performance web experiences with modern technologies and creative design solutions',
    'hero-cta-work': 'View My Work',
    'hero-cta-contact': 'Get In Touch',

    // ── About ─────────────────────────────────────────────────────────────────
    'about-label': 'About Me',
    'about-heading': 'WHO I AM',
    'about-img-alt': 'About Anas Ahmed',
    'about-years': 'Years',
    'about-subtitle':
      'Passionate Frontend Developer specializing in',
    'about-subtitle-highlight': 'Modern Web Technologies',
    'about-bio-1':
      "I'm a frontend developer with over 5 years of experience creating beautiful, responsive, and user-friendly web applications. My expertise lies in translating complex designs into clean, efficient code.",
    'about-bio-2':
      'I specialize in React, TypeScript, and modern CSS frameworks, with a strong focus on performance optimization and accessibility. I believe in writing code that\'s not only functional but also maintainable and scalable.',
    'about-bio-3':
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, and staying up-to-date with the latest industry trends.",
    'about-highlight-clean-title': 'Clean Code',
    'about-highlight-clean-desc': 'Writing maintainable, scalable code following best practices',
    'about-highlight-pixel-title': 'Pixel Perfect',
    'about-highlight-pixel-desc': 'Attention to detail in every design implementation',
    'about-highlight-perf-title': 'Performance',
    'about-highlight-perf-desc': 'Optimized for speed and excellent user experience',
    'about-highlight-quality-title': 'Quality First',
    'about-highlight-quality-desc': 'Committed to delivering exceptional results',
    'about-cta': 'Download Resume',

    // ── Skills ────────────────────────────────────────────────────────────────
    'skills-label': 'My Expertise',
    'skills-heading': 'SKILLS & TECHNOLOGIES',
    'skills-cat-frontend': 'Frontend Development',
    'skills-cat-styling': 'Styling & Design',
    'skills-cat-uiux': 'UI/UX Implementation',
    'skills-cat-backend': 'Backend & Tools',
    'skills-cat-mobile': 'Mobile & Performance',
    'skills-cat-modern': 'Modern Stack',
    'skills-tools-heading': 'Other Tools & Technologies',

    // ── Projects ──────────────────────────────────────────────────────────────
    'projects-badge': 'MY WORK',
    'projects-heading': 'Featured',
    'projects-heading-highlight': 'Projects',
    'projects-subtitle': 'Explore my latest work and creative solutions',
    'projects-cat-all': 'All',
    'projects-cat-corporate': 'Corporate',
    'projects-cat-ecommerce': 'E-Commerce',
    'projects-cat-webapp': 'Web App',
    'projects-cat-landing': 'Landing Page',
    'projects-github-cta': 'View More on GitHub',

    // Project 0 – NEGM GLOBAL TEX
    'project-0-title': 'NEGM GLOBAL TEX',
    'project-0-desc':
      'A bilingual (Arabic/English) e-commerce and corporate website for a uniform and garment manufacturing company, featuring a product catalog organized by industry and WhatsApp-based checkout.',

    // Project 1 – PX Store
    'project-1-title': 'PX Store',
    'project-1-desc':
      'A next-gen gaming e-commerce store specialising in PlayStation 5, PlayStation 4, games, accessories, and gift cards — featuring a futuristic dark UI with 3D animations and a seamless shopping experience.',

    // Project 2 – Restaurant Page with JS
    'project-2-title': 'Restaurant Page with JS',
    'project-2-desc':
      'A modern restaurant website with interactive JavaScript features, clean layout, and engaging user experience.',

    // Project 3 – FURNI Page
    'project-3-title': 'FURNI Page',
    'project-3-desc':
      'A stylish furniture landing page with elegant sections, responsive design, and modern UI presentation.',

    // Project 4 – APPEXY
    'project-4-title': 'APPEXY',
    'project-4-desc':
      'A modern landing page for an activity manager product with smooth layout, pricing, and marketing sections.',

    // Project 5 – Strict Page
    'project-5-title': 'Strict Page',
    'project-5-desc':
      'A clean and professional website template with strong typography, structured sections, and responsive layout.',

    // Project 6 – Craftsman Page
    'project-6-title': 'Craftsman Page',
    'project-6-desc':
      'A polished business-style website with professional design, strong branding, and responsive sections.',

    // Project 7 – Watches Store
    'project-7-title': 'Watches Store',
    'project-7-desc':
      'A modern watches store website with a sleek design and interactive features.',

    // Project 8 – Handmade Store
    'project-8-title': 'Handmade Store',
    'project-8-desc':
      'A premium e-commerce platform showcasing authentic Egyptian artisan crafts, heritage pieces, and sustainable luxury ceramics.',

    // Project 9 – Tech Store
    'project-9-title': 'Tech Store',
    'project-9-desc':
      'A store for selling tech products with a sleek, modern design and interactive features.',

    // Project 10 – Malaz Caffe
    'project-10-title': 'Malaz Caffe',
    'project-10-desc':
      'A modern coffee shop website with an elegant design and seamless user experience.',

    // Project 11 – Academic Enterprise
    'project-11-title': 'Academic Enterprise',
    'project-11-desc':
      'A platform for academic institutions to showcase their programs and research.',

    // Project 12 – Travel Agency
    'project-12-title': 'Travel Agency',
    'project-12-desc': 'Mobile-first marketing site for a modern neobank.',

    // Project 13 – Flagxin
    'project-13-title': 'Flagxin',
    'project-13-desc': 'Flags shop website with a sleek design and interactive features.',

    // Project 14 – Aurum Shop
    'project-14-title': 'Aurum Shop',
    'project-14-desc':
      'A modern perfume shop website with a sleek design and interactive features.',

    // Project 15 – Apex Gym
    'project-15-title': 'Apex Gym',
    'project-15-desc':
      'A modern fitness center website with a sleek design and interactive features.',

    // Project 16 – Furni Store
    'project-16-title': 'Furni Store',
    'project-16-desc':
      'A modern furniture store website with a sleek design and interactive features.',

    // Project 17 – Savior Restaurant
    'project-17-title': 'Savior Restaurant',
    'project-17-desc':
      'A modern restaurant website with a sleek design and interactive features.',

    // Project 18 – Portofloi Website
    'project-18-title': 'Portofloi Website',
    'project-18-desc':
      'A modern portfolio website with a sleek design and interactive features.',

    // Project 19 – EduComp
    'project-19-title': 'EduComp',
    'project-19-desc':
      'A comprehensive student competition portal and dashboard for WE School, facilitating registration, team browsing, and leaderboard tracking.',

    // Project 20 – Maison
    'project-20-title': 'Maison',
    'project-20-desc':
      'A premium high-end e-commerce fashion website featuring a minimalist quiet luxury aesthetic and responsive design.',

    // ── Project card ──────────────────────────────────────────────────────────
    'card-live-demo': 'Live Demo',
    'card-view-project': 'View Project',

    // ── Services ──────────────────────────────────────────────────────────────
    'services-label': 'What I Offer',
    'services-heading': 'MY SERVICES',
    'services-subtitle': 'Comprehensive frontend solutions tailored to your project needs',

    // Service 0 – Frontend Development
    'service-0-title': 'Frontend Development',
    'service-0-desc':
      'Building modern, responsive web applications using React, Next.js, and TypeScript with clean, maintainable code.',
    'service-0-feat-0': 'React & Next.js',
    'service-0-feat-1': 'TypeScript',
    'service-0-feat-2': 'State Management',
    'service-0-feat-3': 'API Integration',

    // Service 1 – UI/UX Implementation
    'service-1-title': 'UI/UX Implementation',
    'service-1-desc':
      'Converting designs from Figma, Adobe XD, or Sketch into pixel-perfect, interactive user interfaces.',
    'service-1-feat-0': 'Figma to Code',
    'service-1-feat-1': 'Responsive Design',
    'service-1-feat-2': 'Design Systems',
    'service-1-feat-3': 'Component Libraries',

    // Service 2 – Mobile-First Design
    'service-2-title': 'Mobile-First Design',
    'service-2-desc':
      'Creating mobile-optimized experiences that work seamlessly across all devices and screen sizes.',
    'service-2-feat-0': 'Responsive Layouts',
    'service-2-feat-1': 'Touch Interactions',
    'service-2-feat-2': 'Progressive Web Apps',
    'service-2-feat-3': 'Cross-browser Testing',

    // Service 3 – Performance Optimization
    'service-3-title': 'Performance Optimization',
    'service-3-desc':
      'Optimizing web applications for speed, efficiency, and excellent user experience.',
    'service-3-feat-0': 'Code Splitting',
    'service-3-feat-1': 'Lazy Loading',
    'service-3-feat-2': 'SEO Optimization',
    'service-3-feat-3': 'Bundle Size Reduction',

    // Service 4 – Web Application Development
    'service-4-title': 'Web Application Development',
    'service-4-desc':
      'Full-stack web application development with modern frameworks and best practices.',
    'service-4-feat-0': 'SaaS Platforms',
    'service-4-feat-1': 'E-commerce Sites',
    'service-4-feat-2': 'Dashboards',
    'service-4-feat-3': 'Admin Panels',

    // Service 5 – Consulting & Code Review
    'service-5-title': 'Consulting & Code Review',
    'service-5-desc':
      'Providing expert advice on architecture, best practices, and code quality improvements.',
    'service-5-feat-0': 'Code Audits',
    'service-5-feat-1': 'Architecture Planning',
    'service-5-feat-2': 'Tech Stack Selection',
    'service-5-feat-3': 'Performance Analysis',

    'services-cta-heading': 'Have a project in mind?',
    'services-cta-body':
      "Let's work together to bring your ideas to life. I'm available for freelance projects, consulting, and full-time opportunities.",
    'services-cta-btn': 'Start a Project',

    // ── Contact ───────────────────────────────────────────────────────────────
    'contact-label': 'Get In Touch',
    'contact-heading': "LET'S WORK TOGETHER",
    'contact-subtitle':
      "Have a project in mind? Let's discuss how I can help bring your ideas to life",
    'contact-talk-heading': "Let's talk about",
    'contact-talk-heading-highlight': 'your project',
    'contact-talk-body':
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    'contact-info-email': 'Email',
    'contact-info-phone': 'Phone',
    'contact-info-location': 'Location',
    'contact-follow': 'Follow Me',
    'contact-available': 'Available for freelance projects',
    'contact-form-name': 'Your Name',
    'contact-form-email': 'Your Email',
    'contact-form-subject': 'Subject',
    'contact-form-message': 'Message',
    'contact-form-ph-name': 'John Doe',
    'contact-form-ph-email': 'john@example.com',
    'contact-form-ph-subject': 'Project Inquiry',
    'contact-form-ph-message': 'Tell me about your project...',
    'contact-send': 'Send Message',
    'contact-sending': 'Sending...',
    'contact-success': "Message sent successfully! I'll get back to you soon.",
    'contact-error': 'Failed to send message. Please try again or email me directly.',

    // ── Footer ────────────────────────────────────────────────────────────────
    'footer-role': 'Frontend Developer',
    'footer-tagline':
      'Crafting exceptional digital experiences with modern web technologies. Passionate about clean code, beautiful design, and user-centric solutions.',
    'footer-made-with': 'Made with',
    'footer-made-with-tech': 'using React & Tailwind CSS',
    'footer-nav-heading': 'Navigation',
    'footer-services-heading': 'Services',
    'footer-connect-heading': 'Connect',
    'footer-nav-home': 'Home',
    'footer-nav-about': 'About',
    'footer-nav-skills': 'Skills',
    'footer-nav-projects': 'Projects',
    'footer-svc-frontend': 'Frontend Development',
    'footer-svc-uiux': 'UI/UX Implementation',
    'footer-svc-webapps': 'Web Applications',
    'footer-svc-consulting': 'Consulting',
    'footer-connect-github': 'GitHub',
    'footer-connect-linkedin': 'LinkedIn',
    'footer-connect-twitter': 'Twitter',
    'footer-connect-email': 'Email',
    'footer-copyright': `© ${new Date().getFullYear()} Anas Ahmed Hasan. All rights reserved.`,
    'footer-privacy': 'Privacy Policy',
    'footer-terms': 'Terms of Service',
    'footer-scroll-top': 'Scroll to top',
  },

  // ═══════════════════════════════════════════════════════════════════════════
  ar: {
    // ── Meta ─────────────────────────────────────────────────────────────────
    'meta-title': 'أنس أحمد حسن - مطوّر واجهات أمامية ومهندس واجهات المستخدم',
    'meta-description':
      'مطوّر واجهات أمامية محترف متخصص في React وTypeScript وأحدث تقنيات الويب. أصنع تطبيقات ويب جميلة وعالية الأداء.',

    // ── Language toggle ───────────────────────────────────────────────────────
    'lang-toggle': 'EN',

    // ── Navbar ────────────────────────────────────────────────────────────────
    'nav-home': 'الرئيسية',
    'nav-about': 'عن',
    'nav-skills': 'المهارات',
    'nav-projects': 'المشاريع',
    'nav-services': 'الخدمات',
    'nav-contact': 'تواصل',
    'nav-cta': 'تواصل معي',
    'nav-role': 'مطوّر واجهات أمامية',
    'nav-open-menu': 'فتح القائمة',
    'nav-close-menu': 'إغلاق القائمة',

    // ── Hero ──────────────────────────────────────────────────────────────────
    'hero-badge': 'مرحباً بك في معرض أعمالي',
    'hero-role': 'مطوّر واجهات أمامية',
    'hero-role-sep': '/',
    'hero-role2': 'مهندس واجهات المستخدم',
    'hero-subtitle':
      'أصنع تجارب ويب عالية الدقة والأداء باستخدام أحدث التقنيات وأساليب التصميم الإبداعية',
    'hero-cta-work': 'استعرض أعمالي',
    'hero-cta-contact': 'تواصل معي',

    // ── About ─────────────────────────────────────────────────────────────────
    'about-label': 'عن نفسي',
    'about-heading': 'من أنا',
    'about-img-alt': 'صورة أنس أحمد',
    'about-years': 'سنوات',
    'about-subtitle': 'مطوّر واجهات أمامية شغوف متخصص في',
    'about-subtitle-highlight': 'تقنيات الويب الحديثة',
    'about-bio-1':
      'أنا مطوّر واجهات أمامية يمتلك أكثر من 5 سنوات من الخبرة في بناء تطبيقات ويب جميلة ومتجاوبة وسهلة الاستخدام. تكمن خبرتي في تحويل التصميمات المعقدة إلى كود نظيف وفعّال.',
    'about-bio-2':
      'أتخصص في React وTypeScript وأطر CSS الحديثة، مع تركيز قوي على تحسين الأداء وإمكانية الوصول. أؤمن بكتابة كود لا يكون وظيفياً فحسب، بل قابلاً للصيانة والتوسع أيضاً.',
    'about-bio-3':
      'في وقت فراغي، أستكشف التقنيات الجديدة، وأساهم في مشاريع مفتوحة المصدر، وأتابع أحدث اتجاهات المجال.',
    'about-highlight-clean-title': 'كود نظيف',
    'about-highlight-clean-desc': 'كتابة كود قابل للصيانة والتوسع وفق أفضل الممارسات',
    'about-highlight-pixel-title': 'دقة متناهية',
    'about-highlight-pixel-desc': 'اهتمام بالتفاصيل في كل تنفيذ تصميمي',
    'about-highlight-perf-title': 'أداء عالٍ',
    'about-highlight-perf-desc': 'محسّن للسرعة وتجربة مستخدم ممتازة',
    'about-highlight-quality-title': 'الجودة أولاً',
    'about-highlight-quality-desc': 'ملتزم بتقديم نتائج استثنائية',
    'about-cta': 'تحميل السيرة الذاتية',

    // ── Skills ────────────────────────────────────────────────────────────────
    'skills-label': 'خبرتي',
    'skills-heading': 'المهارات والتقنيات',
    'skills-cat-frontend': 'تطوير الواجهة الأمامية',
    'skills-cat-styling': 'التنسيق والتصميم',
    'skills-cat-uiux': 'تنفيذ واجهات المستخدم',
    'skills-cat-backend': 'الخلفية والأدوات',
    'skills-cat-mobile': 'الجوّال والأداء',
    'skills-cat-modern': 'التقنيات الحديثة',
    'skills-tools-heading': 'أدوات وتقنيات أخرى',

    // ── Projects ──────────────────────────────────────────────────────────────
    'projects-badge': 'أعمالي',
    'projects-heading': 'أبرز',
    'projects-heading-highlight': 'المشاريع',
    'projects-subtitle': 'استعرض أحدث أعمالي وحلولي الإبداعية',
    'projects-cat-all': 'الكل',
    'projects-cat-corporate': 'مؤسسي',
    'projects-cat-ecommerce': 'تجارة إلكترونية',
    'projects-cat-webapp': 'تطبيق ويب',
    'projects-cat-landing': 'صفحة هبوط',
    'projects-github-cta': 'عرض المزيد على GitHub',

    // Project 0 – NEGM GLOBAL TEX
    'project-0-title': 'NEGM GLOBAL TEX',
    'project-0-desc':
      'موقع مؤسسي وتجارة إلكترونية ثنائي اللغة (عربي/إنجليزي) لشركة متخصصة في تصنيع الزي الموحد والملابس، يضم كتالوج منتجات مُنظَّماً حسب القطاع وإتمام الطلبات عبر WhatsApp.',

    // Project 1 – PX Store
    'project-1-title': 'PX Store',
    'project-1-desc':
      'متجر إلكتروني للألعاب من الجيل التالي متخصص في PlayStation 5 وPlayStation 4 والألعاب والملحقات وبطاقات الهدايا، بواجهة داكنة مستقبلية مع رسوم متحركة ثلاثية الأبعاد وتجربة تسوق سلسة.',

    // Project 2 – Restaurant Page with JS
    'project-2-title': 'صفحة مطعم بـ JavaScript',
    'project-2-desc':
      'موقع مطعم عصري بميزات JavaScript تفاعلية وتصميم أنيق وتجربة مستخدم جذابة.',

    // Project 3 – FURNI Page
    'project-3-title': 'صفحة FURNI',
    'project-3-desc':
      'صفحة هبوط أنيقة لمتجر أثاث بأقسام متميزة وتصميم متجاوب وعرض واجهة مستخدم حديثة.',

    // Project 4 – APPEXY
    'project-4-title': 'APPEXY',
    'project-4-desc':
      'صفحة هبوط عصرية لمنتج إدارة الأنشطة بتخطيط سلس وأقسام تسعير وتسويق.',

    // Project 5 – Strict Page
    'project-5-title': 'Strict Page',
    'project-5-desc':
      'قالب موقع احترافي نظيف بطباعة قوية وأقسام منظمة وتصميم متجاوب.',

    // Project 6 – Craftsman Page
    'project-6-title': 'Craftsman Page',
    'project-6-desc':
      'موقع بأسلوب تجاري متقن بتصميم احترافي وهوية بصرية قوية وأقسام متجاوبة.',

    // Project 7 – Watches Store
    'project-7-title': 'متجر الساعات',
    'project-7-desc': 'موقع متجر ساعات عصري بتصميم أنيق وميزات تفاعلية.',

    // Project 8 – Handmade Store
    'project-8-title': 'متجر المنتجات اليدوية',
    'project-8-desc':
      'منصة تجارة إلكترونية راقية تعرض الحرف اليدوية المصرية الأصيلة والقطع التراثية والسيراميك الفاخر المستدام.',

    // Project 9 – Tech Store
    'project-9-title': 'متجر التقنية',
    'project-9-desc': 'متجر لبيع المنتجات التقنية بتصميم عصري أنيق وميزات تفاعلية.',

    // Project 10 – Malaz Caffe
    'project-10-title': 'كافيه ملاذ',
    'project-10-desc': 'موقع مقهى عصري بتصميم أنيق وتجربة مستخدم سلسة.',

    // Project 11 – Academic Enterprise
    'project-11-title': 'المؤسسة الأكاديمية',
    'project-11-desc': 'منصة للمؤسسات الأكاديمية لعرض برامجها وأبحاثها.',

    // Project 12 – Travel Agency
    'project-12-title': 'وكالة السفر',
    'project-12-desc': 'موقع تسويقي يُعطي الأولوية للجوّال لبنك رقمي حديث.',

    // Project 13 – Flagxin
    'project-13-title': 'Flagxin',
    'project-13-desc': 'موقع متجر للأعلام بتصميم أنيق وميزات تفاعلية.',

    // Project 14 – Aurum Shop
    'project-14-title': 'Aurum Shop',
    'project-14-desc': 'موقع متجر عطور عصري بتصميم أنيق وميزات تفاعلية.',

    // Project 15 – Apex Gym
    'project-15-title': 'Apex Gym',
    'project-15-desc': 'موقع مركز لياقة بدنية عصري بتصميم أنيق وميزات تفاعلية.',

    // Project 16 – Furni Store
    'project-16-title': 'متجر Furni',
    'project-16-desc': 'موقع متجر أثاث عصري بتصميم أنيق وميزات تفاعلية.',

    // Project 17 – Savior Restaurant
    'project-17-title': 'مطعم Savior',
    'project-17-desc': 'موقع مطعم عصري بتصميم أنيق وميزات تفاعلية.',

    // Project 18 – Portofloi Website
    'project-18-title': 'موقع معرض أعمال',
    'project-18-desc': 'موقع معرض أعمال عصري بتصميم أنيق وميزات تفاعلية.',

    // Project 19 – EduComp
    'project-19-title': 'EduComp',
    'project-19-desc':
      'بوابة شاملة لمسابقات الطلاب ولوحة تحكم لمدرسة WE، تُيسّر التسجيل وتصفح الفرق ومتابعة لوحة المتصدرين.',

    // Project 20 – Maison
    'project-20-title': 'Maison',
    'project-20-desc':
      'موقع أزياء راقٍ للتجارة الإلكترونية بجماليات الرفاهية الهادئة وتصميم متجاوب.',

    // ── Project card ──────────────────────────────────────────────────────────
    'card-live-demo': 'معاينة مباشرة',
    'card-view-project': 'عرض المشروع',

    // ── Services ──────────────────────────────────────────────────────────────
    'services-label': 'ما أقدّمه',
    'services-heading': 'خدماتي',
    'services-subtitle': 'حلول واجهات أمامية شاملة مُصمَّمة خصيصاً لاحتياجات مشروعك',

    // Service 0
    'service-0-title': 'تطوير الواجهة الأمامية',
    'service-0-desc':
      'بناء تطبيقات ويب عصرية ومتجاوبة باستخدام React وNext.js وTypeScript بكود نظيف وقابل للصيانة.',
    'service-0-feat-0': 'React و Next.js',
    'service-0-feat-1': 'TypeScript',
    'service-0-feat-2': 'إدارة الحالة',
    'service-0-feat-3': 'تكامل الواجهات البرمجية',

    // Service 1
    'service-1-title': 'تنفيذ واجهات المستخدم',
    'service-1-desc':
      'تحويل التصميمات من Figma أو Adobe XD أو Sketch إلى واجهات مستخدم تفاعلية دقيقة بالبكسل.',
    'service-1-feat-0': 'تحويل Figma إلى كود',
    'service-1-feat-1': 'التصميم المتجاوب',
    'service-1-feat-2': 'أنظمة التصميم',
    'service-1-feat-3': 'مكتبات المكوّنات',

    // Service 2
    'service-2-title': 'التصميم الأول للجوّال',
    'service-2-desc':
      'إنشاء تجارب محسّنة للجوّال تعمل بسلاسة عبر جميع الأجهزة وأحجام الشاشات.',
    'service-2-feat-0': 'تخطيطات متجاوبة',
    'service-2-feat-1': 'تفاعلات اللمس',
    'service-2-feat-2': 'تطبيقات الويب التقدمية',
    'service-2-feat-3': 'اختبار عبر المتصفحات',

    // Service 3
    'service-3-title': 'تحسين الأداء',
    'service-3-desc': 'تحسين تطبيقات الويب من حيث السرعة والكفاءة وتجربة المستخدم.',
    'service-3-feat-0': 'تقسيم الكود',
    'service-3-feat-1': 'التحميل الكسول',
    'service-3-feat-2': 'تحسين SEO',
    'service-3-feat-3': 'تقليص حجم الحزمة',

    // Service 4
    'service-4-title': 'تطوير تطبيقات الويب',
    'service-4-desc': 'تطوير تطبيقات ويب متكاملة باستخدام أطر عمل حديثة وأفضل الممارسات.',
    'service-4-feat-0': 'منصات SaaS',
    'service-4-feat-1': 'مواقع التجارة الإلكترونية',
    'service-4-feat-2': 'لوحات التحكم',
    'service-4-feat-3': 'لوحات الإدارة',

    // Service 5
    'service-5-title': 'الاستشارات ومراجعة الكود',
    'service-5-desc':
      'تقديم توجيه خبير في الهندسة المعمارية وأفضل الممارسات وتحسين جودة الكود.',
    'service-5-feat-0': 'تدقيق الكود',
    'service-5-feat-1': 'التخطيط المعماري',
    'service-5-feat-2': 'اختيار التقنيات',
    'service-5-feat-3': 'تحليل الأداء',

    'services-cta-heading': 'هل لديك مشروع في ذهنك؟',
    'services-cta-body':
      'لنعمل معاً لتحويل أفكارك إلى واقع. أنا متاح للمشاريع المستقلة والاستشارات والفرص بدوام كامل.',
    'services-cta-btn': 'ابدأ مشروعك',

    // ── Contact ───────────────────────────────────────────────────────────────
    'contact-label': 'تواصل معي',
    'contact-heading': 'لنعمل معاً',
    'contact-subtitle': 'هل لديك مشروع؟ دعنا نناقش كيف يمكنني مساعدتك في تحقيق أفكارك',
    'contact-talk-heading': 'دعنا نتحدث عن',
    'contact-talk-heading-highlight': 'مشروعك',
    'contact-talk-body':
      'يسعدني دائماً الاستماع إلى مشاريع وفرص جديدة. سواء كان لديك سؤال أو تريد فقط أن تلقي التحية، تواصل معي بحرية!',
    'contact-info-email': 'البريد الإلكتروني',
    'contact-info-phone': 'الهاتف',
    'contact-info-location': 'الموقع',
    'contact-follow': 'تابعني',
    'contact-available': 'متاح للمشاريع المستقلة',
    'contact-form-name': 'اسمك',
    'contact-form-email': 'بريدك الإلكتروني',
    'contact-form-subject': 'الموضوع',
    'contact-form-message': 'الرسالة',
    'contact-form-ph-name': 'محمد أحمد',
    'contact-form-ph-email': 'mohammed@example.com',
    'contact-form-ph-subject': 'استفسار عن مشروع',
    'contact-form-ph-message': 'أخبرني عن مشروعك...',
    'contact-send': 'إرسال الرسالة',
    'contact-sending': 'جارٍ الإرسال...',
    'contact-success': 'تم إرسال رسالتك بنجاح! سأردّ عليك في أقرب وقت.',
    'contact-error': 'فشل إرسال الرسالة. يُرجى المحاولة مجدداً أو مراسلتي مباشرةً.',

    // ── Footer ────────────────────────────────────────────────────────────────
    'footer-role': 'مطوّر واجهات أمامية',
    'footer-tagline':
      'أصنع تجارب رقمية استثنائية بتقنيات الويب الحديثة. شغوف بالكود النظيف والتصميم الجميل والحلول المُركّزة على المستخدم.',
    'footer-made-with': 'صُنع بـ',
    'footer-made-with-tech': 'باستخدام React و Tailwind CSS',
    'footer-nav-heading': 'التنقل',
    'footer-services-heading': 'الخدمات',
    'footer-connect-heading': 'تواصل',
    'footer-nav-home': 'الرئيسية',
    'footer-nav-about': 'عن',
    'footer-nav-skills': 'المهارات',
    'footer-nav-projects': 'المشاريع',
    'footer-svc-frontend': 'تطوير الواجهة الأمامية',
    'footer-svc-uiux': 'تنفيذ واجهات المستخدم',
    'footer-svc-webapps': 'تطبيقات الويب',
    'footer-svc-consulting': 'الاستشارات',
    'footer-connect-github': 'GitHub',
    'footer-connect-linkedin': 'LinkedIn',
    'footer-connect-twitter': 'Twitter',
    'footer-connect-email': 'البريد الإلكتروني',
    'footer-copyright': `© ${new Date().getFullYear()} أنس أحمد حسن. جميع الحقوق محفوظة.`,
    'footer-privacy': 'سياسة الخصوصية',
    'footer-terms': 'شروط الخدمة',
    'footer-scroll-top': 'العودة إلى الأعلى',
  },
};

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('portfolio-lang');
    return (stored === 'ar' || stored === 'en') ? stored : 'en';
  });

  const isRTL = lang === 'ar';

  // Apply dir + lang attribute to <html> and update meta on every change
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = isRTL ? 'rtl' : 'ltr';
    localStorage.setItem('portfolio-lang', lang);

    // Update document title & meta description
    document.title = translations[lang]['meta-title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', translations[lang]['meta-description']);
    }
  }, [lang, isRTL]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
  };

  const t = (key: string): string => {
    return translations[lang][key] ?? translations['en'][key] ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </I18nContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------
export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used inside <LanguageProvider>');
  return ctx;
}

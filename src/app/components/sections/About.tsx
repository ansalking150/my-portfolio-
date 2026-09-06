import { motion } from 'motion/react';
import { Code2, Palette, Zap, Award } from 'lucide-react';
import { Button } from '../Button';
import { useTranslation } from '@/lib/i18n';

export function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <Code2 size={24} />,
      titleKey: 'about-highlight-clean-title',
      descKey: 'about-highlight-clean-desc',
    },
    {
      icon: <Palette size={24} />,
      titleKey: 'about-highlight-pixel-title',
      descKey: 'about-highlight-pixel-desc',
    },
    {
      icon: <Zap size={24} />,
      titleKey: 'about-highlight-perf-title',
      descKey: 'about-highlight-perf-desc',
    },
    {
      icon: <Award size={24} />,
      titleKey: 'about-highlight-quality-title',
      descKey: 'about-highlight-quality-desc',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading text-sm uppercase tracking-widest">
            {t('about-label')}
          </span>
          <h2 className="font-heading-alt text-5xl sm:text-6xl text-text-primary mt-4 mb-6">
            {t('about-heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column – Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border-custom">
              <img
                src="https://images.unsplash.com/photo-1760536928911-40831dacdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTcyOTkxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt={t('about-img-alt')}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-br-3xl" />

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-surface border-2 border-primary rounded-xl p-4 shadow-[0_0_30px_rgba(255,26,26,0.3)]"
            >
              <div className="font-heading-alt text-3xl text-primary">5+</div>
              <div className="text-text-secondary text-sm">{t('about-years')}</div>
            </motion.div>
          </motion.div>

          {/* Right Column – Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading text-3xl text-text-primary">
              {t('about-subtitle')}
              <span className="text-primary"> {t('about-subtitle-highlight')}</span>
            </h3>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>{t('about-bio-1')}</p>
              <p>{t('about-bio-2')}</p>
              <p>{t('about-bio-3')}</p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-4 bg-surface border border-border-custom rounded-lg hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(255,26,26,0.15)]"
                >
                  <div className="text-primary mb-2 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-heading text-text-primary mb-1">{t(item.titleKey)}</h4>
                  <p className="text-xs text-text-secondary">{t(item.descKey)}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href={`${import.meta.env.BASE_URL}Anas_Ahmed_CV.pdf`}
                download="Anas_Ahmed_CV.pdf"
                aria-label={t('about-cta')}
              >
                <Button variant="primary" size="lg">
                  {t('about-cta')}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
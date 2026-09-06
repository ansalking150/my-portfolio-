import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Smartphone, Zap, Globe } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Code2 size={32} />,
      titleKey: 'service-0-title',
      descKey: 'service-0-desc',
      featKeys: ['service-0-feat-0', 'service-0-feat-1', 'service-0-feat-2', 'service-0-feat-3'],
    },
    {
      icon: <Palette size={32} />,
      titleKey: 'service-1-title',
      descKey: 'service-1-desc',
      featKeys: ['service-1-feat-0', 'service-1-feat-1', 'service-1-feat-2', 'service-1-feat-3'],
    },
    {
      icon: <Smartphone size={32} />,
      titleKey: 'service-2-title',
      descKey: 'service-2-desc',
      featKeys: ['service-2-feat-0', 'service-2-feat-1', 'service-2-feat-2', 'service-2-feat-3'],
    },
    {
      icon: <Zap size={32} />,
      titleKey: 'service-3-title',
      descKey: 'service-3-desc',
      featKeys: ['service-3-feat-0', 'service-3-feat-1', 'service-3-feat-2', 'service-3-feat-3'],
    },
    {
      icon: <Globe size={32} />,
      titleKey: 'service-4-title',
      descKey: 'service-4-desc',
      featKeys: ['service-4-feat-0', 'service-4-feat-1', 'service-4-feat-2', 'service-4-feat-3'],
    },
    {
      icon: <Rocket size={32} />,
      titleKey: 'service-5-title',
      descKey: 'service-5-desc',
      featKeys: ['service-5-feat-0', 'service-5-feat-1', 'service-5-feat-2', 'service-5-feat-3'],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-glow/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading text-sm uppercase tracking-widest">
            {t('services-label')}
          </span>
          <h2 className="font-heading-alt text-5xl sm:text-6xl text-text-primary mt-4 mb-6">
            {t('services-heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-6">
            {t('services-subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-surface border border-border-custom rounded-xl transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,26,26,0.2)]"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-glow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-4 bg-background-secondary border border-primary/30 rounded-xl text-primary mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,26,26,0.3)] transition-all">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl text-text-primary mb-4 group-hover:text-primary transition-colors">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {t(service.descKey)}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.featKeys.map((featKey, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span>{t(featKey)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-glow/10 to-transparent rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-surface border border-border-custom rounded-2xl"
        >
          <h3 className="font-heading text-2xl text-text-primary mb-4">
            {t('services-cta-heading')}
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            {t('services-cta-body')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:shadow-[0_0_30px_rgba(255,26,26,0.5)] hover:scale-105 transition-all"
          >
            {t('services-cta-btn')}
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, XCircle } from 'lucide-react';
import { Input, Textarea } from '../Input';
import { Button } from '../Button';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '@/lib/i18n';

export function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      titleKey: 'contact-info-email',
      value: 'anaslking150@gmail.com',
      link: 'mailto:anaslking150@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      titleKey: 'contact-info-phone',
      value: '01284838592',
      link: 'tel:+01284838592',
    },
    {
      icon: <MapPin size={24} />,
      titleKey: 'contact-info-location',
      value: 'Alexandria, Egypt',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, name: 'GitHub', url: 'https://github.com/ansalking150' },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ans-ahmed-106a33362?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    },
    { icon: <Twitter size={20} />, name: 'Twitter', url: 'https://twitter.com' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = 'service_k2i15lt';
      const templateId = 'template_3nro14v';
      const publicKey = '_3RFk7XqE1H7OmRMV';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'anaslking150@gmail.com',
        },
        publicKey,
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-glow/20 rounded-full blur-3xl" />
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
            {t('contact-label')}
          </span>
          <h2 className="font-heading-alt text-5xl sm:text-6xl text-text-primary mt-4 mb-6">
            {t('contact-heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-6">
            {t('contact-subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-3xl text-text-primary mb-4">
                {t('contact-talk-heading')}
                <span className="text-primary"> {t('contact-talk-heading-highlight')}</span>
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {t('contact-talk-body')}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-4 bg-surface border border-border-custom rounded-xl hover:border-primary/50 hover:shadow-[0_0_25px_rgba(255,26,26,0.15)] transition-all group"
                >
                  <div className="p-3 bg-background-secondary border border-primary/30 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary">{t(info.titleKey)}</div>
                    <div className="text-text-primary group-hover:text-primary transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-heading text-text-primary mb-4">{t('contact-follow')}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-surface border border-border-custom rounded-lg text-text-secondary hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(255,26,26,0.2)] transition-all"
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-4 bg-surface border border-primary/30 rounded-xl"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-primary rounded-full animate-ping" />
              </div>
              <span className="text-text-primary">{t('contact-available')}</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface border border-border-custom rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Input
                  label={t('contact-form-name')}
                  name="name"
                  placeholder={t('contact-form-ph-name')}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label={t('contact-form-email')}
                  name="email"
                  type="email"
                  placeholder={t('contact-form-ph-email')}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                label={t('contact-form-subject')}
                name="subject"
                placeholder={t('contact-form-ph-subject')}
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <Textarea
                label={t('contact-form-message')}
                name="message"
                placeholder={t('contact-form-ph-message')}
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500"
                >
                  <CheckCircle size={20} />
                  <span>{t('contact-success')}</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500"
                >
                  <XCircle size={20} />
                  <span>{t('contact-error')}</span>
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    {t('contact-sending')}
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    {t('contact-send')}
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Code2, Palette, Rocket, Smartphone, Zap, Globe } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={32} />,
    title: 'Frontend Development',
    description: 'Building modern, responsive web applications using React, Next.js, and TypeScript with clean, maintainable code.',
    features: ['React & Next.js', 'TypeScript', 'State Management', 'API Integration']
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Implementation',
    description: 'Converting designs from Figma, Adobe XD, or Sketch into pixel-perfect, interactive user interfaces.',
    features: ['Figma to Code', 'Responsive Design', 'Design Systems', 'Component Libraries']
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile-First Design',
    description: 'Creating mobile-optimized experiences that work seamlessly across all devices and screen sizes.',
    features: ['Responsive Layouts', 'Touch Interactions', 'Progressive Web Apps', 'Cross-browser Testing']
  },
  {
    icon: <Zap size={32} />,
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed, efficiency, and excellent user experience.',
    features: ['Code Splitting', 'Lazy Loading', 'SEO Optimization', 'Bundle Size Reduction']
  },
  {
    icon: <Globe size={32} />,
    title: 'Web Application Development',
    description: 'Full-stack web application development with modern frameworks and best practices.',
    features: ['SaaS Platforms', 'E-commerce Sites', 'Dashboards', 'Admin Panels']
  },
  {
    icon: <Rocket size={32} />,
    title: 'Consulting & Code Review',
    description: 'Providing expert advice on architecture, best practices, and code quality improvements.',
    features: ['Code Audits', 'Architecture Planning', 'Tech Stack Selection', 'Performance Analysis']
  }
];

export function Services() {
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
          <span className="text-primary font-heading text-sm uppercase tracking-widest">What I Offer</span>
          <h2 className="font-heading-alt text-5xl sm:text-6xl text-text-primary mt-4 mb-6">
            MY SERVICES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mt-6">
            Comprehensive frontend solutions tailored to your project needs
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
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corner Accent */}
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
            Have a project in mind?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm available for freelance projects,
            consulting, and full-time opportunities.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:shadow-[0_0_30px_rgba(255,26,26,0.5)] hover:scale-105 transition-all"
          >
            Start a Project
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

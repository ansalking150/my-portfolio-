import { motion } from 'motion/react';
import { Heart, ArrowUp } from 'lucide-react';

const footerLinks = {
  Navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ],
  Services: [
    { name: 'Frontend Development', href: '#services' },
    { name: 'UI/UX Implementation', href: '#services' },
    { name: 'Web Applications', href: '#services' },
    { name: 'Consulting', href: '#services' }
  ],
  Connect: [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Email', href: 'mailto:anas.ahmed@example.com' }
  ]
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-background border-t border-border-custom">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,26,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,26,26,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-deep-red rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,26,26,0.4)]">
                  <span className="font-heading-alt text-2xl text-white">A</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-text-primary">
                    Anas Ahmed
                  </h3>
                  <p className="text-xs text-text-secondary">Frontend Developer</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed max-w-sm">
                Crafting exceptional digital experiences with modern web technologies.
                Passionate about clean code, beautiful design, and user-centric solutions.
              </p>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <span>Made with</span>
                <Heart size={16} className="text-primary fill-primary animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], columnIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: columnIndex * 0.1 }}
            >
              <h4 className="font-heading text-text-primary mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-text-secondary hover:text-primary transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-custom flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-text-secondary text-sm"
          >
            © {new Date().getFullYear()} Anas Ahmed Hasan. All rights reserved.
          </motion.p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-secondary hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-secondary hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-primary text-white rounded-full shadow-[0_0_30px_rgba(255,26,26,0.5)] hover:shadow-[0_0_40px_rgba(255,26,26,0.7)] transition-all z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  );
}

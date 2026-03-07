import { motion } from 'motion/react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '../Button';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,26,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,26,26,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent-glow/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-deep-red/20 to-primary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-surface/80 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium rounded-full shadow-[0_0_20px_rgba(255,26,26,0.2)]">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading-alt text-6xl sm:text-7xl lg:text-8xl text-text-primary tracking-wider"
          >
            ANAS AHMED
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-glow to-deep-red">
              HASAN
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-text-primary">
              Frontend Developer
              <span className="text-primary"> / </span>
              UI Engineer
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Crafting pixel-perfect, high-performance web experiences with modern technologies
              and creative design solutions
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="group"
            >
              <span>View My Work</span>
              <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="mr-2" size={20} />
              <span>Get In Touch</span>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent-glow/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-4 bg-surface/50 backdrop-blur-sm border border-border-custom rounded-lg hover:border-primary/50 transition-all">
                  <div className="font-heading-alt text-3xl sm:text-4xl text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <span className="text-text-secondary text-sm">Scroll Down</span>
          <ChevronDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

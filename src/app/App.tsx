import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from '@/lib/i18n';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background text-foreground overflow-x-hidden"
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageProvider>
  );
}
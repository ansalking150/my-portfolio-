import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set document title and meta tags
    document.title = 'Anas Ahmed Hasan - Frontend Developer & UI Engineer';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional frontend developer specializing in React, TypeScript, and modern web technologies. Creating beautiful, high-performance web applications.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional frontend developer specializing in React, TypeScript, and modern web technologies. Creating beautiful, high-performance web applications.';
      document.head.appendChild(meta);
    }
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
              <Projects />
              <Services />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
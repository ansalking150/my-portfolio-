import { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from '../ProjectCard';
import restaurantImage from '@/images/food-lover-page.png';
import furniImage from '@/images/furni-page.png';
import appexyImage from '@/images/apexy-page.png';
import strictImage from '@/images/strict-page.png';
import craftsmanImage from '@/images/craftsman-page.png';

const projects = [
  {
    id: 1,
    title: 'Restaurant Page with JS',
    description: 'A modern restaurant website with interactive JavaScript features, clean layout, and engaging user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web App',
    liveUrl: 'https://ansalking150.github.io/restaurant-page-with-js/',
    image: restaurantImage
  },
  {
    id: 2,
    title: 'FURNI Page',
    description: 'A stylish furniture landing page with elegant sections, responsive design, and modern UI presentation.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    category: 'Landing Page',
    liveUrl: 'https://ansalking150.github.io/FURNI-page/',
    image: furniImage
  },
  {
    id: 3,
    title: 'APPEXY',
    description: 'A modern landing page for an activity manager product with smooth layout, pricing, and marketing sections.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    category: 'Landing Page',
    liveUrl: 'https://ansalking150.github.io/tailwind-project-APPEXY/',
    image: appexyImage
  },
  {
    id: 4,
    title: 'Strict Page',
    description: 'A clean and professional website template with strong typography, structured sections, and responsive layout.',
    technologies: ['HTML', 'CSS'],
    category: 'Landing Page',
    liveUrl: 'https://ansalking150.github.io/strict-page/',
    image: strictImage
  },
  {
    id: 5,
    title: 'Craftsman Page',
    description: 'A polished business-style website with professional design, strong branding, and responsive sections.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
    liveUrl: 'https://ansalking150.github.io/craftsman-page/',
    image: craftsmanImage
  }
];

const categories = ['All', 'Web App', 'Landing Page'];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4"
          >
            <span className="text-primary font-medium">MY WORK</span>
          </motion.div>
          <h2 className="font-heading text-4xl md:text-5xl text-text-primary mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(255,26,26,0.4)]'
                  : 'bg-surface border border-border-custom text-text-secondary hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/ansalking150"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-medium hover:shadow-[0_0_30px_rgba(255,26,26,0.5)] transition-all"
          >
            View More on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

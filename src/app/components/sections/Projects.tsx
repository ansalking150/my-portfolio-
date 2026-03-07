import { motion } from 'motion/react';
import { useState } from 'react';
import { ProjectCard } from '../ProjectCard';

const categories = ['All', 'Web App', 'E-commerce', 'Dashboard', 'Landing Page'];

const projects = [
  {
    id: 1,
    title: 'TaskFlow Pro',
    description: 'A comprehensive project management and task tracking application with real-time collaboration features, built with React and TypeScript.',
    image: 'https://images.unsplash.com/photo-1758876201729-e60eaf5f9194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHByb2R1Y3Rpdml0eSUyMGFwcHxlbnwxfHx8fDE3Njk2NDgwODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'ShopHub E-commerce',
    description: 'Full-featured online shopping platform with advanced filtering, cart management, and secure checkout process.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY5NjQ5OTAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Next.js', 'Redux', 'Stripe', 'Node.js'],
    category: 'E-commerce',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting tools.',
    image: 'https://images.unsplash.com/photo-1644127307101-f34996697a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY5NzMxMzEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'D3.js', 'Recharts', 'REST API'],
    category: 'Dashboard',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'SaaS Platform',
    description: 'Modern SaaS platform with subscription management, user authentication, and intuitive admin panel.',
    image: 'https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk3MzEzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'Express', 'MongoDB', 'JWT'],
    category: 'Web App',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Creative Portfolio',
    description: 'Stunning portfolio website showcasing creative work with smooth animations and modern design patterns.',
    image: 'https://images.unsplash.com/photo-1710799885122-428e63eff691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBjcmVhdGl2ZSUyMGRlc2lnbiUyMHdlYnNpdGV8ZW58MXx8fHwxNzY5NzMxMzE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Sanity'],
    category: 'Landing Page',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Enterprise Dashboard',
    description: 'Comprehensive enterprise-level dashboard with advanced data management, reporting, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3Njk3MzEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL'],
    category: 'Dashboard',
    liveUrl: '#',
    githubUrl: '#'
  }
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-heading text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="font-heading-alt text-5xl sm:text-6xl text-text-primary mt-4 mb-6">
            FEATURED PROJECTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(255,26,26,0.4)]'
                  : 'bg-surface text-text-secondary border border-border-custom hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(255,26,26,0.2)]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface border border-border-custom rounded-lg text-text-primary hover:border-primary hover:text-primary hover:shadow-[0_0_25px_rgba(255,26,26,0.2)] transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

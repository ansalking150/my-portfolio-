import { useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from '../ProjectCard';
import pxStoreImage from '@/images/Px-store.png';
import restaurantImage from '@/images/food-lover-page.png';
import furniImage from '@/images/furni-page.png';
import appexyImage from '@/images/apexy-page.png';
import strictImage from '@/images/strict-page.png';
import craftsmanImage from '@/images/craftsman-page.png';

const projects = [
  {
    id: 0,
    title: 'NEGM GLOBAL TEX',
    description: 'A bilingual (Arabic/English) e-commerce and corporate website for a uniform and garment manufacturing company, featuring a product catalog organized by industry and WhatsApp-based checkout.',
    technologies: ['React', 'Vite', 'SEO'],
    category: 'Corporate',
    liveUrl: 'https://www.hegazytexgroup.com',
    image: '/my-portfolio-/images/hegazytexgroup.png',
  },
  {
    id: 1,
    title: 'PX Store',
    description: 'A next-gen gaming e-commerce store specialising in PlayStation 5, PlayStation 4, games, accessories, and gift cards — featuring a futuristic dark UI with 3D animations and a seamless shopping experience.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    category: 'E-Commerce',
    liveUrl: 'https://px-store.vercel.app/',
    image: pxStoreImage,
  },
  {
    id: 2,
    title: 'Restaurant Page with JS',
    description: 'A modern restaurant website with interactive JavaScript features, clean layout, and engaging user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web App',
    liveUrl: 'https://ansalking150.github.io/restaurant-page-with-js/',
    image: restaurantImage,
  },
  {
    id: 3,
    title: 'FURNI Page',
    description: 'A stylish furniture landing page with elegant sections, responsive design, and modern UI presentation.',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    category: 'Landing Page',
    liveUrl: 'https://ansalking150.github.io/FURNI-page/',
    image: furniImage,
  },
  {
    id: 4,
    title: 'APPEXY',
    description: 'A modern landing page for an activity manager product with smooth layout, pricing, and marketing sections.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    category: 'Landing Page',
    liveUrl: 'https://ansalking150.github.io/tailwind-project-APPEXY/',
    image: appexyImage,
  },
  {
    id: 5,
    title: 'Strict Page',
    description: 'A clean and professional website template with strong typography, structured sections, and responsive layout.',
    technologies: ['HTML', 'CSS'],
    category: 'Landing Page',
    liveUrl: 'https://ansalking150.github.io/strict-page/',
    image: strictImage,
  },
  {
    id: 6,
    title: 'Craftsman Page',
    description: 'A polished business-style website with professional design, strong branding, and responsive sections.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
    liveUrl: 'https://ansalking150.github.io/craftsman-page/',
    image: craftsmanImage,
  },
  {
    id: 7,
    title: 'Watches Store',
    description: 'A modern watches store website with a sleek design and interactive features.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'E-Commerce',
    liveUrl: 'https://watches-store-wave.vercel.app/',
    image: '/my-portfolio-/images/watches-store.png',
  },
  {
    id: 8,
    title: 'Handmade Store',
    description: 'A premium e-commerce platform showcasing authentic Egyptian artisan crafts, heritage pieces, and sustainable luxury ceramics.',
    technologies: ['HTML', 'Tailwind', 'Alpine.js', 'JavaScript'],
    category: 'E-Commerce',
    liveUrl: 'https://mohamed-waled301.github.io/handmade/',
    image: '/my-portfolio-/images/handmade.png',
  },
  {
    id: 9,
    title: 'Tech Store',
    description: 'A store for selling tech products with a sleek, modern design and interactive features.',
    technologies: ['HTML', 'Tailwind', 'JavaScript', 'Chart.js'],
    category: 'E-Commerce',
    liveUrl: 'https://omartantawy360.github.io/elctro-shop/',
    image: '/my-portfolio-/images/tech-store.png',
  },
  {
    id: 10,
    title: 'Malaz Caffe',
    description: 'A modern coffee shop website with an elegant design and seamless user experience.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'Landing Page',
    liveUrl: 'https://cafee-pink.vercel.app/',
    image: '/my-portfolio-/images/malaz.png',
  },
  {
    id: 11,
    title: 'Academic Enterprise',
    description: 'A platform for academic institutions to showcase their programs and research.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'Web App',
    liveUrl: 'https://omartantawy360.github.io/Acadimic-center2/',
    image: '/my-portfolio-/images/academic-enter.png',
  },
  {
    id: 12,
    title: 'Travel Agency',
    description: 'Mobile-first marketing site for a modern neobank.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Landing Page',
    liveUrl: 'https://abdotete142-maker.github.io/Salah_khalaf/',
    image: '/my-portfolio-/images/travel-agency.png',
  },
  {
    id: 13,
    title: 'Flagxin',
    description: 'Flags shop website with a sleek design and interactive features.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'E-Commerce',
    liveUrl: 'https://abdelrhman005.github.io/Flagxin/',
    image: '/my-portfolio-/images/flagxin.png',
  },
  {
    id: 14,
    title: 'Aurum Shop',
    description: 'A modern perfume shop website with a sleek design and interactive features.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'E-Commerce',
    liveUrl: 'https://abdotete142-maker.github.io/Perfumes/',
    image: '/my-portfolio-/images/aurum-shop.png',
  },
  {
    id: 15,
    title: 'Apex Gym',
    description: 'A modern fitness center website with a sleek design and interactive features.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'Landing Page',
    liveUrl: 'https://gym1-khaki-omega.vercel.app/',
    image: '/my-portfolio-/images/apex.png',
  },
  {
    id: 16,
    title: 'Furni Store',
    description: 'A modern furniture store website with a sleek design and interactive features.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'E-Commerce',
    liveUrl: 'https://lander2007.github.io/Furni/index.html',
    image: '/my-portfolio-/images/furni-store.png',
  },
  {
    id: 17,
    title: 'Savior Restaurant',
    description: 'A modern restaurant website with a sleek design and interactive features.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'Landing Page',
    liveUrl: 'https://savior-rosy.vercel.app/',
    image: '/my-portfolio-/images/savior-restaurant.png',
  },
  {
    id: 18,
    title: 'Portofloi Website',
    description: 'A modern portfolio website with a sleek design and interactive features.',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    category: 'Web App',
    liveUrl: 'https://omartantawy360.github.io/udimy-porto/index.html',
    image: '/my-portfolio-/images/udimy-porto.png',
  },
  {
    id: 19,
    title: 'EduComp',
    description: 'A comprehensive student competition portal and dashboard for WE School, facilitating registration, team browsing, and leaderboard tracking.',
    technologies: ['React', 'Node.js', 'Tailwind', 'JavaScript'],
    category: 'Web App',
    liveUrl: 'https://omartantawy360.github.io/edu-por-3/student',
    image: '/my-portfolio-/images/educomp.png',
  },
  {
    id: 20,
    title: 'Maison',
    description: 'A premium high-end e-commerce fashion website featuring a minimalist quiet luxury aesthetic and responsive design.',
    technologies: ['React', 'Tailwind', 'JavaScript'],
    category: 'E-Commerce',
    liveUrl: 'https://maison-nine-wheat.vercel.app/',
    image: '/my-portfolio-/images/maison.png',
  },
];

const categories = ['All', 'Corporate', 'E-Commerce', 'Web App', 'Landing Page'];

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

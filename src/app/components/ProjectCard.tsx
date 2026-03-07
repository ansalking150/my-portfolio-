import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  category
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-surface border border-border-custom rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(255,26,26,0.2)]"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
          {category}
        </div>

        {/* Overlay with Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-primary rounded-full text-white shadow-[0_0_20px_rgba(255,26,26,0.5)] hover:shadow-[0_0_30px_rgba(255,26,26,0.7)]"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-surface border border-primary rounded-full text-primary shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:shadow-[0_0_30px_rgba(255,26,26,0.5)]"
            >
              <Github size={20} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-2xl text-text-primary mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-2">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-background-secondary border border-border-custom text-text-secondary text-xs rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
      </div>
    </motion.div>
  );
}

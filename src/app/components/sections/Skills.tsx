import { motion } from 'motion/react';
import { SkillBar } from '../SkillBar';
import { Code, Database, Layout, Palette, Smartphone, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code size={24} />,
    skills: [
      { name: 'React / Next.js', percentage: 95 },
      { name: '  JavaScript', percentage: 90 },
      { name: 'HTML5 / CSS3', percentage: 95 }
    ]
  },
  {
    title: 'Styling & Design',
    icon: <Palette size={24} />,
    skills: [
      { name: 'Tailwind CSS', percentage: 92 },
      { name: 'CSS-in-JS / Styled Components', percentage: 85 }
    ]
  },
  {
    title: 'UI/UX Implementation',
    icon: <Layout size={24} />,
    skills: [
      { name: 'Responsive Design', percentage: 95 },
      { name: 'Figma to Code', percentage: 90 },
      { name: 'Animation (Framer Motion)', percentage: 85 }
    ]
  },
  {
    title: 'Backend & Tools',
    icon: <Database size={24} />,
    skills: [
      { name: 'Node.js / Express', percentage: 75 },
      { name: 'REST APIs / GraphQL', percentage: 80 },
      { name: 'Git / GitHub', percentage: 90 }
    ]
  },
  {
    title: 'Mobile & Performance',
    icon: <Smartphone size={24} />,
    skills: [
      { name: 'Progressive Web Apps', percentage: 85 },
      { name: 'Mobile-First Design', percentage: 92 },
      { name: 'Performance Optimization', percentage: 88 }
    ]
  },
  {
    title: 'Modern Stack',
    icon: <Zap size={24} />,
    skills: [
      { name: 'Vite / Webpack', percentage: 85 },
      { name: 'Testing (Jest / React Testing Library)', percentage: 78 },
      { name: 'CI/CD', percentage: 75 }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-background-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,26,26,0.1)_0%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading text-sm uppercase tracking-widest">My Expertise</span>
          <h2 className="font-heading-alt text-5xl sm:text-6xl text-text-primary mt-4 mb-6">
            SKILLS & TECHNOLOGIES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group relative p-6 bg-surface border border-border-custom rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,26,26,0.15)]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-glow/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-background-secondary border border-primary/30 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-heading text-xl text-text-primary group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      name={skill.name}
                      percentage={skill.percentage}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Additional Tools/Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="font-heading text-xl text-text-primary mb-6">
            Other Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux', 'Zustand', 'React Query', 'Docker', 'AWS', 'Firebase',
              'MongoDB', 'PostgreSQL', 'Prisma', 'tRPC', 'Storybook', 'Radix UI'
            ].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-surface border border-border-custom rounded-lg text-text-secondary hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(255,26,26,0.2)] transition-all cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

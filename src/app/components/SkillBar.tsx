import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  icon?: React.ReactNode;
  delay?: number;
}

export function SkillBar({ name, percentage, icon, delay = 0 }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay }}
      onViewportEnter={() => setIsVisible(true)}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          <span className="font-heading text-text-primary">{name}</span>
        </div>
        <span className="text-primary font-medium">{percentage}%</span>
      </div>

      <div className="relative h-3 bg-background-secondary rounded-full overflow-hidden border border-border-custom">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
        
        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${percentage}%` : 0 }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="relative h-full bg-gradient-to-r from-deep-red via-primary to-accent-glow rounded-full"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm" />
          
          {/* Shine effect */}
          <motion.div
            animate={{
              x: ['-100%', '200%']
            }}
            transition={{
              duration: 2,
              delay: delay + 0.5,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
          />
        </motion.div>

        {/* Edge glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: delay + 1 }}
          className="absolute top-0 bottom-0"
          style={{ left: `${percentage}%` }}
        >
          <div className="w-1 h-full bg-accent-glow shadow-[0_0_10px_rgba(255,59,59,0.8)]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

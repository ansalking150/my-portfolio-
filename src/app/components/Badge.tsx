import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-surface text-text-primary border-border-custom',
    primary: 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(255,26,26,0.3)]',
    secondary: 'bg-background-secondary text-text-secondary border-border-custom',
    outline: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-white'
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300',
        variants[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
}

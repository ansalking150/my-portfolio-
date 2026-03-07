import { motion } from 'motion/react';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, disabled, ...props }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg overflow-hidden group';
    
    const variants = {
      primary: 'bg-primary text-white shadow-[0_0_20px_rgba(255,26,26,0.3)] hover:shadow-[0_0_30px_rgba(255,26,26,0.5)] hover:scale-105 active:scale-95',
      secondary: 'bg-surface text-text-primary border border-border-custom hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(255,26,26,0.2)] hover:scale-105 active:scale-95',
      ghost: 'text-text-primary hover:bg-surface hover:text-primary transition-colors',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_25px_rgba(255,26,26,0.4)] hover:scale-105 active:scale-95'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    
    const disabledStyles = 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none';
    
    return (
      <motion.button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          disabled && disabledStyles,
          className
        )}
        disabled={disabled}
        whileHover={!disabled ? { scale: 1.05 } : {}}
        whileTap={!disabled ? { scale: 0.95 } : {}}
        {...props}
      >
        {variant === 'primary' && (
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

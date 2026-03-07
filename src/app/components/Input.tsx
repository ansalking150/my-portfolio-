import { InputHTMLAttributes, forwardRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type = 'text', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            type={type}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              'w-full px-4 py-3 bg-surface border rounded-lg text-text-primary placeholder:text-text-secondary transition-all duration-300 outline-none',
              isFocused
                ? 'border-primary shadow-[0_0_20px_rgba(255,26,26,0.2)]'
                : 'border-border-custom hover:border-border-custom/80',
              error && 'border-destructive',
              className
            )}
            {...props}
          />
          {isFocused && (
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-accent-glow/20 pointer-events-none -z-10 blur-xl" />
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  rows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, rows = 4, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            rows={rows}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              'w-full px-4 py-3 bg-surface border rounded-lg text-text-primary placeholder:text-text-secondary transition-all duration-300 outline-none resize-none',
              isFocused
                ? 'border-primary shadow-[0_0_20px_rgba(255,26,26,0.2)]'
                : 'border-border-custom hover:border-border-custom/80',
              error && 'border-destructive',
              className
            )}
            {...props}
          />
          {isFocused && (
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-transparent to-accent-glow/20 pointer-events-none -z-10 blur-xl" />
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

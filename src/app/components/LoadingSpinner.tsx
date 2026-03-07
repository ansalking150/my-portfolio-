import { motion } from 'motion/react';

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-20 h-20 rounded-full border-4 border-primary/20 border-t-primary"
        />
        
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border-4 border-accent-glow/20 border-b-accent-glow"
        />
        
        {/* Center Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-deep-red rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,26,26,0.6)]">
            <span className="font-heading-alt text-lg text-white">A</span>
          </div>
        </div>
      </div>
    </div>
  );
}

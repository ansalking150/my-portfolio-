import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.5
        }}
      />

      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary/40 rounded-full pointer-events-none z-[9998] mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 200,
          mass: 0.8
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 bg-primary/10 rounded-full pointer-events-none z-[9997] blur-xl"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          opacity: isHovering ? 0.6 : 0.3
        }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 100,
          mass: 1
        }}
      />
    </>
  );
}

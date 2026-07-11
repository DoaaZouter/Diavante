import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export default function ParallaxBackground() {
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Create motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics for extra smooth trailing
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Calculate opposite motions for background depth
  const oppositeX1 = useSpring(useMotionValue(0), springConfig);
  const oppositeY1 = useSpring(useMotionValue(0), springConfig);
  
  const oppositeX2 = useSpring(useMotionValue(0), springConfig);
  const oppositeY2 = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Normalize values to be between -0.5 and 0.5
      const normX = (clientX / innerWidth) - 0.5;
      const normY = (clientY / innerHeight) - 0.5;

      // Set primary coordinates (glowing cursor orb)
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Set secondary parallax coordinates (moving items)
      oppositeX1.set(normX * -50);
      oppositeY1.set(normY * -50);
      
      oppositeX2.set(normX * 100);
      oppositeY2.set(normY * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, oppositeX1, oppositeY1, oppositeX2, oppositeY2]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-theme-bg transition-colors duration-300">
      {/* Dynamic ambient grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Smooth glowing mouse follower */}
      <motion.div
        className={`absolute w-[600px] h-[600px] rounded-full blur-[140px] transition-opacity duration-300 ${
          isDark 
            ? 'opacity-25 bg-gradient-to-r from-purple-600 via-violet-800 to-indigo-900' 
            : 'opacity-[0.12] bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-300'
        }`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Floating interactive element 1 */}
      <motion.div
        className={`absolute top-[15%] left-[10%] w-[300px] h-[300px] rounded-full blur-[100px] transition-opacity duration-300 ${
          isDark ? 'opacity-15 bg-purple-500' : 'opacity-[0.08] bg-purple-400'
        }`}
        style={{
          x: oppositeX1,
          y: oppositeY1,
        }}
      />

      {/* Floating interactive element 2 */}
      <motion.div
        className={`absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full blur-[120px] transition-opacity duration-300 ${
          isDark ? 'opacity-20 bg-violet-600' : 'opacity-[0.08] bg-pink-400'
        }`}
        style={{
          x: oppositeX2,
          y: oppositeY2,
        }}
      />

      {/* Floating digital particles or shapes */}
      <motion.div
        className="absolute top-[40%] right-[15%] w-8 h-8 rounded-lg border border-purple-500/10 dark:border-purple-500/20 rotate-12"
        style={{
          x: oppositeX1,
          y: oppositeY2,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-[30%] left-[15%] w-12 h-12 rounded-full border border-violet-500/5 dark:border-violet-500/10"
        style={{
          x: oppositeX2,
          y: oppositeY1,
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

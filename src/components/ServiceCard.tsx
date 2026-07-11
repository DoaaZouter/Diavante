import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { 
  BarChart3, 
  Compass, 
  Cpu, 
  Palette, 
  Camera, 
  Megaphone, 
  Settings, 
  PenTool, 
  Layers, 
  Users,
  LucideIcon
} from 'lucide-react';
import { Service } from '../types';
import { useLanguage } from '../context/LanguageContext';

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Compass,
  Cpu,
  Palette,
  Camera,
  Megaphone,
  Settings,
  PenTool,
  Layers,
  Users
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { isRtl } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for local mouse coordinates
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Spring physics for smooth tilt transition
  const springConfig = { damping: 15, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const IconComponent = iconMap[service.iconName] || Settings;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card center, normalized (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const normX = (mouseX / width) - 0.5;
    const normY = (mouseY / height) - 0.5;

    // Map to max rotation degrees
    rotateX.set(-normY * 15); // Rotate on X axis based on Y mouse position
    rotateY.set(normX * 15);  // Rotate on Y axis based on X mouse position
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      className="perspective-[1000px] w-full"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full bg-theme-card/80 hover:bg-theme-card-hover backdrop-blur-md border border-theme-border hover:border-purple-500/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 group cursor-pointer overflow-hidden shadow-lg shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-500/10"
      >
        {/* Glow behind on hover */}
        <div 
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.12), transparent 80%)'
          }}
        />

        {/* Ambient neon badge shadow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl pointer-events-none" />

        {/* Content with 3D translations */}
        <div 
          style={{ transform: 'translateZ(40px)' }}
          className={`flex flex-col h-full space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}
        >
          {/* Icon frame with beautiful purple gradient */}
          <div className={`p-3.5 rounded-xl bg-purple-500/5 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-violet-700 text-purple-400 group-hover:text-white border border-purple-500/10 group-hover:border-purple-500/0 transition-all duration-300 inline-flex items-center justify-center ${isRtl ? 'self-end' : 'self-start'}`}>
            <IconComponent size={24} className="transition-transform duration-300 group-hover:scale-110" />
          </div>

          <div className="flex-1">
            <h3 className="font-sans font-semibold text-lg text-theme-text group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="mt-2 text-sm text-theme-muted group-hover:text-theme-text transition-colors duration-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

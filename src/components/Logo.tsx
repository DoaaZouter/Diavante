import React from 'react';
// @ts-ignore
import logoImg from './logo.png';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  variant?: 'full' | 'text-only' | 'icon-only';
  height?: number | string;
}

export default function Logo({ 
  className = '', 
  showSubtitle = true, 
  variant = 'full',
  height = '100%' 
}: LogoProps) {
  // Use the exact uploaded logo image for maximum fidelity
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img
        src={logoImg}
        alt="Diavante Logo"
        style={{ height: height, width: 'auto', maxWidth: '100%' }}
        className="object-contain select-none transition-opacity duration-300"
        referrerPolicy="no-referrer"
        draggable={false}
      />
    </div>
  );
}

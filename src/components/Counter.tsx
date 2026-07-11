import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface CounterProps {
  value: number;
  duration?: number; // in seconds
  decimals?: number;
}

export default function Counter({ value, duration = 2, decimals = 0 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { lang } = useLanguage();

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalTicks = 60 * duration;
    let tick = 0;

    const timer = setInterval(() => {
      tick++;
      // Easing out quadratic
      const progress = tick / totalTicks;
      const easeProgress = progress * (2 - progress);
      
      const current = end * easeProgress;
      
      if (tick >= totalTicks) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="font-sans font-bold tracking-tight">
      {displayValue.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}

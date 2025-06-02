'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface IntegratedScrollHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
  onScrollChange?: (scrollY: number, isScrolled: boolean) => void;
}

export function IntegratedScrollHeader({
  title,
  subtitle,
  className,
  children,
  onScrollChange,
}: IntegratedScrollHeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Determine if we should show the compact toolbar version
      const threshold = 200; // Adjust this value to control when transition happens
      const scrolled = currentScrollY > threshold;
      setIsScrolled(scrolled);

      // Notify parent component about scroll changes
      onScrollChange?.(currentScrollY, scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScrollChange]);

  // Calculate opacity and transform values based on scroll position
  const headerOpacity = Math.max(0, 1 - scrollY / 300);
  const headerTransform = `translateY(${scrollY * 0.5}px)`;

  return (
    <div
      className={cn(
        'relative z-10 flex min-h-[400px] flex-col items-center justify-center px-6 text-center',
        className,
      )}
      style={{
        opacity: headerOpacity,
        transform: headerTransform,
      }}
    >
      <h1 className="mb-4 text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">{title}</h1>
      {subtitle && <p className="text-muted-foreground max-w-2xl text-xl sm:text-2xl">{subtitle}</p>}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}

// Hook to get scroll state for use in toolbar
export function useScrollHeaderState() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      const threshold = 200;
      setIsScrolled(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled };
}

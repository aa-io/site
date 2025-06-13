'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  toolbarHeight?: number;
  children?: React.ReactNode;
}

export function ScrollHeader({ title, subtitle, className, toolbarHeight = 64, children }: ScrollHeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Determine if we should show the compact toolbar version
      const threshold = 200; // Adjust this value to control when transition happens
      setIsScrolled(currentScrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity and transform values based on scroll position
  const headerOpacity = Math.max(0, 1 - scrollY / 300);
  const headerTransform = `translateY(${scrollY * 0.5}px)`;
  const toolbarOpacity = isScrolled ? 1 : 0;
  const toolbarTransform = `translateY(${isScrolled ? 0 : -20}px)`;

  return (
    <>
      {/* Large Header */}
      <div
        className={cn(
          '  z-10 flex min-h-[400px] flex-col items-center justify-center px-6 text-center',
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

      {/* Fixed Toolbar Header */}
      <div
        className={cn(
          'bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm transition-all duration-300',
          isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
        )}
        style={{
          height: toolbarHeight,
          opacity: toolbarOpacity,
          transform: toolbarTransform,
        }}
      >
        <div className="flex h-full items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            {subtitle && <span className="text-muted-foreground text-sm">{subtitle}</span>}
          </div>

          {/* Optional: Add navigation or actions here */}
          <div className="flex items-center space-x-2">{/* You can add buttons, navigation, etc. here */}</div>
        </div>
      </div>

      {/* Spacer to prevent content jump */}
      <div style={{ height: `${toolbarHeight}px` }} className={isScrolled ? 'block' : 'hidden'} />
    </>
  );
}

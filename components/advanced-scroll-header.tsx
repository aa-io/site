'use client';

import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AdvancedScrollHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  toolbarClassName?: string;
  toolbarHeight?: number;
  scrollThreshold?: number;
  parallaxStrength?: number;
  fadeDistance?: number;
  children?: React.ReactNode;
  toolbarContent?: React.ReactNode;
  showToolbarBorder?: boolean;
  enableParallax?: boolean;
}

export function AdvancedScrollHeader({
  title,
  subtitle,
  className,
  toolbarClassName,
  toolbarHeight = 64,
  scrollThreshold = 200,
  parallaxStrength = 0.5,
  fadeDistance = 300,
  children,
  toolbarContent,
  showToolbarBorder = true,
  enableParallax = true,
}: AdvancedScrollHeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);

    // Determine if we should show the compact toolbar version
    setIsScrolled(currentScrollY > scrollThreshold);

    // Hide/show based on scroll direction for better UX
    setIsVisible(currentScrollY < 50 || currentScrollY > scrollThreshold);
  }, [scrollThreshold]);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;

    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  // Calculate dynamic values based on scroll position
  const headerOpacity = Math.max(0, 1 - scrollY / fadeDistance);
  const headerScale = Math.max(0.8, 1 - scrollY / (fadeDistance * 2));
  const headerTransform =
    enableParallax ? `translateY(${scrollY * parallaxStrength}px) scale(${headerScale})` : `scale(${headerScale})`;

  const toolbarOpacity = isScrolled ? 1 : 0;
  const toolbarTransform = `translateY(${isScrolled ? 0 : -toolbarHeight}px)`;

  return (
    <>
      {/* Large Header */}
      <div
        className={cn(
          'relative z-10 flex min-h-[50vh] flex-col items-center justify-center px-6 text-center transition-all duration-300',
          className,
        )}
        style={{
          opacity: headerOpacity,
          transform: headerTransform,
          transformOrigin: 'center center',
        }}
      >
        <div className="max-w-4xl">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">{title}</h1>
          {subtitle && (
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl">{subtitle}</p>
          )}
          {children && (
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">{children}</div>
          )}
        </div>
      </div>

      {/* Fixed Toolbar Header */}
      <div
        className={cn(
          'bg-background/95 fixed top-0 right-0 left-0 z-50 backdrop-blur-md transition-all duration-500 ease-out',
          showToolbarBorder && 'border-border/50 border-b',
          isVisible ? 'pointer-events-auto' : 'pointer-events-none',
          toolbarClassName,
        )}
        style={{
          height: toolbarHeight,
          opacity: toolbarOpacity,
          transform: toolbarTransform,
        }}
      >
        <div className="flex h-full items-center justify-between px-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
            {subtitle && <span className="text-muted-foreground hidden text-sm sm:inline">{subtitle}</span>}
          </div>

          {/* Custom toolbar content */}
          {toolbarContent && <div className="flex items-center space-x-2">{toolbarContent}</div>}
        </div>
      </div>

      {/* Spacer to prevent content jump when toolbar becomes fixed */}
      <div
        style={{ height: `${toolbarHeight}px` }}
        className={cn('transition-all duration-300', isScrolled ? 'block' : 'hidden')}
      />
    </>
  );
}

// Hook for scroll position (can be used in other components)
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollY = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollY, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return scrollY;
}

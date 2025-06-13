'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function PageAnimationWrapper({ children, className, delay = 0 }: PageAnimationWrapperProps) {
  return (
    <div
      className={cn('spring-fade-in opacity-0', className)}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

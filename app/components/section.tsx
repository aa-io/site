import React from 'react';
import { cn } from './ui/utils';

export const Section = ({ title, children, faded }: { title?: string; children: React.ReactNode; faded?: boolean }) => {
  return (
    <div className={cn('group/section flex flex-col gap-4')}>
      {title && (
        <h3 className="text-muted-foreground text-sm font-normal transition-all group-hover/section:opacity-100">
          {title}
        </h3>
      )}
      <div
        className={cn(
          'flex flex-col transition-all',
          faded && '[&>div]:opacity-50 [&>div]:grayscale [&>div]:hover:opacity-100 [&>div]:hover:grayscale-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};

import React from 'react';
import { cn } from './ui/utils';

export const Section = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  return (
    <div className={cn('group/section flex flex-col gap-4')}>
      {title && (
        <h3 className="text-muted-foreground text-sm font-normal transition-all group-hover/section:opacity-100">
          {title}
        </h3>
      )}
      <div className={cn('flex flex-col transition-all')}>{children}</div>
    </div>
  );
};

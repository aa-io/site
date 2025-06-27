import React from 'react';
import { cn } from './ui/utils';

export const Section = ({ title, children }: { title?: string; children: React.ReactNode }) => {
  return (
    <div className={cn('group/section flex flex-col gap-4')}>
      {title && <h3 className="text-muted-foreground text-sm font-normal">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTableOfContents } from '@/hooks/use-table-of-contents';
import { cn } from '@/lib/utils';
import { IconChevronRight, IconList, IconX } from '@tabler/icons-react';

interface FloatingTocProps {
  className?: string;
}

export function FloatingToc({ className }: FloatingTocProps) {
  const { toc, activeId, scrollToHeading } = useTableOfContents();
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  // Don't render if no headings found
  if (toc.length === 0) {
    return null;
  }

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const handleItemClick = (id: string) => {
    scrollToHeading(id);
    if (isMobile) {
      setIsExpanded(false);
    }
  };

  const getIndentLevel = (level: number) => {
    // Normalize heading levels (h1 = 0, h2 = 1, etc.)
    const minLevel = Math.min(...toc.map((item) => item.level));
    return level - minLevel;
  };

  return (
    <TooltipProvider>
      <div
        className={cn(
          'fixed top-1/2 right-6 z-40 -translate-y-1/2 transition-all duration-300',
          isMobile ? 'right-4' : 'right-6',
          className,
        )}
      >
        <div
          className={cn(
            'bg-background/95 border-border flex flex-col rounded-lg border shadow-lg backdrop-blur-sm transition-all duration-300',
            isExpanded ? 'w-80 max-w-[calc(100vw-2rem)]' : 'w-12',
          )}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3">
            {isExpanded ?
              <>
                <h3 className="text-sm font-semibold">Contents</h3>
                <Button variant="ghost" size="icon" onClick={toggleExpanded} className="h-6 w-6 shrink-0">
                  <IconX className="h-4 w-4" />
                </Button>
              </>
            : <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={toggleExpanded} className="h-6 w-6">
                    <IconList className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Table of Contents</p>
                </TooltipContent>
              </Tooltip>
            }
          </div>

          {/* Content */}
          {isExpanded && (
            <>
              <Separator />
              <div className="max-h-96 overflow-y-auto p-2">
                <nav className="space-y-1">
                  {toc.map((item) => {
                    const isActive = activeId === item.id;
                    const indentLevel = getIndentLevel(item.level);

                    return (
                      <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={cn(
                          'hover:bg-muted flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors',
                          isActive && 'bg-muted text-foreground font-medium',
                          !isActive && 'text-muted-foreground hover:text-foreground',
                        )}
                        style={{
                          paddingLeft: `${0.5 + indentLevel * 0.75}rem`,
                        }}
                      >
                        {isActive && <IconChevronRight className="text-primary h-3 w-3 shrink-0" />}
                        <span className="truncate leading-tight">{item.text}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </>
          )}
        </div>

        {/* Progress indicator */}
        {!isExpanded && toc.length > 0 && (
          <div className="bg-muted mt-2 h-1 w-12 rounded-full">
            <div
              className="bg-primary h-full rounded-full transition-all duration-300"
              style={{
                width: `${Math.max(8, ((toc.findIndex((item) => item.id === activeId) + 1) / toc.length) * 100)}%`,
              }}
            />
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}

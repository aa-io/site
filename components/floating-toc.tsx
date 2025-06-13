'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTableOfContents } from '@/hooks/use-table-of-contents';
import { cn } from '@/lib/utils';
import { IconList, IconX } from '@tabler/icons-react';

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

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsExpanded(false);
    }
  };

  const getIndentLevel = (level: number) => {
    // Normalize heading levels (h1 = 0, h2 = 1, etc.)
    const minLevel = Math.min(...toc.map((item) => item.level));
    return level - minLevel;
  };

  // Desktop version - fixed floating TOC using portal
  const tocContent = (
    <div
      className={cn(
        'fixed top-1/2 right-4 z-50 -translate-y-1/2',
        'max-h-[calc(100vh-8rem)] w-auto',
        isMobile && 'top-4 right-2 translate-y-0',
        className,
      )}
    >
      <div
        className={cn(
          'border-border dark:bg-border/50 flex flex-col rounded-xl border shadow-lg backdrop-blur-xl transition-all duration-300',
          isExpanded ? 'w-80 max-w-[calc(100vw-2rem)]' : 'w-12',
          'max-h-full',
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Header - only show on mobile */}
        {isMobile && (
          <div className="flex items-center justify-between p-3">
            {isExpanded ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleExpanded}
                className="hover:bg-muted/60 h-7 w-7 shrink-0 transition-colors"
              >
                <IconX className="h-3.5 w-3.5" />
              </Button>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleExpanded}
                    className="hover:bg-muted/60 h-8 w-8 transition-colors"
                  >
                    <IconList className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>Table of Contents</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        )}

        {/* Content */}
        {isExpanded && (
          <>
            {isMobile && <Separator className="opacity-50" />}
            <div className="scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent flex-1 overflow-y-auto p-3">
              <nav className="space-y-0.5">
                {toc.map((item, index) => {
                  const isActive = activeId === item.id;
                  const indentLevel = getIndentLevel(item.level);

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={cn(
                        'group flex w-full items-center gap-2 rounded-lg px-3 py-1 text-left text-xs transition-all duration-200',
                        isActive ?
                          'bg-primary/10 text-primary dark:bg-primary/20 font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-border/50',
                        indentLevel > 0 && 'text-xs',
                      )}
                      style={{
                        paddingLeft: `${0.75 + indentLevel * 1}rem`,
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <div className="bg-primary absolute top-1/2 left-0 h-4 w-1 -translate-y-1/2 rounded-r-full transition-all duration-200" />
                      )}

                      {/* Indent guide */}
                      {indentLevel > 0 && (
                        <div
                          className="absolute top-0 bottom-0 w-px"
                          style={{ left: `${0.5 + (indentLevel - 1) * 1}rem` }}
                        />
                      )}

                      <span
                        className={cn(
                          'truncate leading-relaxed transition-all duration-200',
                          isActive && 'translate-x-1',
                        )}
                      >
                        {item.text}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </>
        )}

        {/* Progress indicator for collapsed state */}
        {!isExpanded && toc.length > 0 && (
          <div className={cn(
            "flex flex-col items-center gap-1",
            isMobile ? "mt-3 pb-3" : "p-3"
          )}>
            {toc.map((item, index) => {
              const isActive = activeId === item.id;
              const isPast = toc.findIndex((t) => t.id === activeId) > index;

              return (
                <div
                  key={item.id}
                  className={cn(
                    'h-1.5 w-1.5 rounded-full transition-all duration-300',
                    isActive ? 'bg-primary h-2 w-2'
                    : isPast ? 'bg-primary/50'
                    : 'bg-muted-foreground/30',
                  )}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );

  // Render using portal to bypass parent container constraints
  return typeof window !== 'undefined' ? createPortal(tocContent, document.body) : null;
}

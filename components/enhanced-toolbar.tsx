import { cn } from '@/lib/utils';
import { SidebarTrigger } from './ui/sidebar';

interface EnhancedToolbarProps {
  title: string;
  scrollTitle?: string;
  isScrolled?: boolean;
  className?: string;
}

export function EnhancedToolbar({ title, scrollTitle, isScrolled = false, className }: EnhancedToolbarProps) {
  const displayTitle = isScrolled && scrollTitle ? scrollTitle : title;

  return (
    <div
      className={cn(
        'border-border bg-background/75 sticky top-0 z-10 flex h-(--header-height) items-center gap-2 border-b-[0.5px] backdrop-blur-sm transition-all duration-300',
        className,
      )}
    >
      <SidebarTrigger className="-ml-1" />
      <div
        className={cn(
          'flex-1 text-sm font-semibold transition-all duration-300',
          isScrolled && scrollTitle ? 'opacity-100' : 'opacity-100',
        )}
      >
        {displayTitle}
      </div>
      {isScrolled && scrollTitle && (
        <div className="text-muted-foreground text-xs">{/* Optional: Add scroll indicator or other elements */}</div>
      )}
    </div>
  );
}

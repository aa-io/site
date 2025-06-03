import { cn } from '@/lib/utils';
import { SidebarTrigger } from './ui/sidebar';

interface EnhancedToolbarProps {
  title: string;
  scrollTitle?: string;
  isScrolled?: boolean;
  className?: string;
}

export function EnhancedToolbar({ title, scrollTitle, isScrolled = false, className }: EnhancedToolbarProps) {
  // Show scroll title when scrolled, otherwise show the regular title (which is now blank)
  const displayTitle = isScrolled && scrollTitle ? scrollTitle : title;
  const shouldShowTitle = isScrolled && scrollTitle;

  return (
    <div
      className={cn(
        'border-border bg-background/75 sticky top-0 z-10 flex h-(--header-height) items-center gap-2 border-b-[0.5px] px-6 backdrop-blur-sm transition-all duration-300',
        className,
      )}
    >
      <SidebarTrigger className="-ml-1" />
      <div
        className={cn(
          'flex-1 text-sm font-semibold transition-all duration-500 ease-out',
          shouldShowTitle ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
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

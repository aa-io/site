import Link from 'next/link';
import { cn } from './ui/utils';

export const Tag = ({ label, href }: { label: string; href?: string }) => {
  const Component = href ? Link : 'span';
  return (
    <Component
      href={href || '#'}
      target={href ? '_blank' : undefined}
      className={cn(
        'bg-accent/75 text-muted-foreground pop-in rounded-sm px-1.5 py-1 text-xs leading-none',
        href && 'hover:text-foreground hover:bg-accent',
      )}
    >
      {label}
    </Component>
  );
};

export const Tags = ({ tags }: { tags: { label: string; url?: string }[] }) => {
  return (
    <span className="-m-1 flex flex-wrap gap-0.5 pt-3">
      {tags.map((tag) => (
        <Tag key={tag.label} label={tag.label} href={tag.url} />
      ))}
    </span>
  );
};

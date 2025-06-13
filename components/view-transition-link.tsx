'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEvent, ReactNode } from 'react';

interface ViewTransitionLinkProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, 'onClick'> {
  href: string;
  children: ReactNode;
}

export function ViewTransitionLink({ href, children, className, ...props }: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if browser supports view transitions
    if ('startViewTransition' in document) {
      const documentWithTransition = document as Document & {
        startViewTransition: (callback: () => void | Promise<void>) => void;
      };
      documentWithTransition.startViewTransition(() => {
        router.push(href);
      });
    } else {
      // Fallback to regular navigation
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
} 